require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const app = express();

// ── Middleware ──
app.use(cors());
app.use(express.json());

// ── Nodemailer Transporter (Gmail) ──
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error('❌ Mail transporter verification failed:', err.message);
  } else {
    console.log('✅ Mail transporter is ready');
  }
});

// ── Google Calendar API Setup ──
let calendar = null;

function initCalendar() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    console.warn('⚠️  Google Calendar API not configured — run "node get-token.js" first');
    return;
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  console.log('✅ Google Calendar API is ready');
}

initCalendar();

// ── Create Real Google Meet Link via Calendar Event ──
async function createMeetLink({ firstName, lastName, email, date, time }) {
  if (!calendar) {
    throw new Error('Google Calendar not configured');
  }

  const now = new Date();
  const year = now.getFullYear();
  
  let startDate;
  try {
    startDate = new Date(`${date}, ${year}`);
    if (isNaN(startDate.getTime())) {
      startDate = new Date(date);
    }
    if (isNaN(startDate.getTime())) {
      startDate = new Date();
      startDate.setDate(startDate.getDate() + 1);
    }
  } catch {
    startDate = new Date();
    startDate.setDate(startDate.getDate() + 1);
  }

  const timeMatch = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (timeMatch) {
    let hours = parseInt(timeMatch[1]);
    const minutes = parseInt(timeMatch[2]);
    const period = timeMatch[3].toUpperCase();
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    startDate.setHours(hours, minutes, 0, 0);
  } else {
    startDate.setHours(14, 0, 0, 0); // Default 2 PM
  }

  const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);

  const event = {
    summary: `Aeviq AI Demo — ${firstName} ${lastName}`,
    description: `Demo call with ${firstName} ${lastName} (${email}).\n\nBooked via Aeviq AI website.`,
    start: {
      dateTime: startDate.toISOString(),
      timeZone: 'Asia/Kolkata',
    },
    end: {
      dateTime: endDate.toISOString(),
      timeZone: 'Asia/Kolkata',
    },
    attendees: [
      { email: email },
      { email: process.env.OWNER_EMAIL_1 },
      { email: process.env.OWNER_EMAIL_2 },
    ],
    conferenceData: {
      createRequest: {
        requestId: `aeviq-${Date.now()}`,
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
  };

  const response = await calendar.events.insert({
    calendarId: 'primary',
    resource: event,
    conferenceDataVersion: 1,
    sendUpdates: 'all',
  });

  const meetLink = response.data.hangoutLink || response.data.conferenceData?.entryPoints?.[0]?.uri;
  
  if (!meetLink) {
    throw new Error('Google Meet link was not generated');
  }

  console.log(`✅ Real Google Meet created: ${meetLink}`);
  return meetLink;
}

// ── HTML Email Templates ──
function buildBookingEmail({ firstName, lastName, email, company, phone, date, time, meetLink }) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #fafafa; border-radius: 12px; overflow: hidden; border: 1px solid #e4e4e7;">
      <div style="background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%); padding: 32px 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0 0 4px 0;">🎯 New Demo Booked!</h1>
        <p style="color: rgba(255,255,255,0.85); font-size: 14px; margin: 0;">Aeviq AI — Incoming Lead</p>
      </div>
      <div style="padding: 28px 24px;">
        <h2 style="font-size: 16px; color: #18181b; margin: 0 0 16px 0;">Booking Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px; width: 120px;">Name</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #18181b; font-size: 14px; font-weight: 600;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px;">Email</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #18181b; font-size: 14px;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px;">Company</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #18181b; font-size: 14px;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px;">Phone</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #18181b; font-size: 14px;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px;">📅 Date</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #18181b; font-size: 14px; font-weight: 600;">${date}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px;">🕐 Time</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #18181b; font-size: 14px; font-weight: 600;">${time}</td>
          </tr>
        </table>
        
        <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; text-align: center;">
          <p style="color: #1d4ed8; font-size: 13px; margin: 0 0 8px 0; font-weight: 600;">🔗 Google Meet Link</p>
          <a href="${meetLink}" style="color: #6366f1; font-size: 15px; font-weight: bold; text-decoration: none;">${meetLink}</a>
        </div>
      </div>
      <div style="padding: 16px 24px; background: #f4f4f5; text-align: center; border-top: 1px solid #e4e4e7;">
        <p style="color: #a1a1aa; font-size: 11px; margin: 0;">Sent by Aeviq AI Booking System</p>
      </div>
    </div>
  `;
}

function buildContactEmail({ name, email, company, subject, message }) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #fafafa; border-radius: 12px; overflow: hidden; border: 1px solid #e4e4e7;">
      <div style="background: linear-gradient(135deg, #18181b 0%, #3f3f46 100%); padding: 32px 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0 0 4px 0;">📩 New Contact Message</h1>
        <p style="color: rgba(255,255,255,0.85); font-size: 14px; margin: 0;">Aeviq AI — Website Inquiry</p>
      </div>
      <div style="padding: 28px 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px; width: 100px;">From</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #18181b; font-size: 14px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px;">Email</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #18181b; font-size: 14px;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px;">Company</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #18181b; font-size: 14px;">${company || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px;">Subject</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; color: #18181b; font-size: 14px; font-weight: 600;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px;">
          <p style="color: #71717a; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
          <p style="color: #18181b; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
      <div style="padding: 16px 24px; background: #f4f4f5; text-align: center; border-top: 1px solid #e4e4e7;">
        <p style="color: #a1a1aa; font-size: 11px; margin: 0;">Sent by Aeviq AI Contact Form</p>
      </div>
    </div>
  `;
}

// ── Route 1: Demo Booking ──
app.post('/api/book-demo', async (req, res) => {
  try {
    const { firstName, lastName, email, company, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !date || !time) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    let meetLink = '';
    try {
      meetLink = await createMeetLink({ firstName, lastName, email, date, time });
    } catch (err) {
      console.error('⚠️  Meet link creation failed:', err.message);
      // DO NOT return 500 here! We still want to send the email!
      meetLink = ''; 
    }

    const recipients = [process.env.OWNER_EMAIL_1, process.env.OWNER_EMAIL_2].filter(Boolean).join(', ');

    await transporter.sendMail({
      from: `"Aeviq AI" <${process.env.GMAIL_USER}>`,
      to: recipients,
      subject: `🎯 New Demo Booked — ${firstName} ${lastName} (${company})`,
      html: buildBookingEmail({ firstName, lastName, email, company, phone, date, time, meetLink }),
    });

    console.log(`✅ Demo booked: ${firstName} ${lastName} | Meet: ${meetLink}`);
    res.json({ success: true, meetLink });
  } catch (err) {
    console.error('❌ Failed to process demo booking:', err);
    res.status(500).json({ success: false, error: 'Failed to process booking' });
  }
});

// ── Route 1.5: Get Available Slots ──
app.get('/api/available-slots', async (req, res) => {
  try {
    const { date } = req.query; // YYYY-MM-DD
    const defaultSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
    
    if (!date) return res.status(400).json({ success: false, error: 'Missing date' });
    
    if (!calendar) {
      return res.json({ success: true, slots: defaultSlots });
    }

    const [year, month, day] = date.split('-').map(Number);
    const timeMin = new Date(year, month - 1, day, 0, 0, 0).toISOString();
    const timeMax = new Date(year, month - 1, day, 23, 59, 59).toISOString();

    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: timeMin,
        timeMax: timeMax,
        timeZone: 'Asia/Kolkata',
        items: [{ id: 'primary' }]
      }
    });

    const busySlots = response.data.calendars.primary.busy;
    
    const availableSlots = defaultSlots.filter(slot => {
      const timeMatch = slot.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
      if (!timeMatch) return true;
      
      let hours = parseInt(timeMatch[1]);
      const minutes = parseInt(timeMatch[2]);
      const period = timeMatch[3].toUpperCase();
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
      
      const slotStart = new Date(year, month - 1, day, hours, minutes, 0);
      const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);
      
      if (slotStart < new Date()) {
        return false;
      }

      for (const busy of busySlots) {
        const busyStart = new Date(busy.start);
        const busyEnd = new Date(busy.end);
        
        if (slotStart < busyEnd && slotEnd > busyStart) {
          return false;
        }
      }

      return true;
    });

    res.json({ success: true, slots: availableSlots });
  } catch (err) {
    console.error('❌ Failed to fetch available slots:', err);
    const defaultSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
    res.json({ success: true, slots: defaultSlots });
  }
});

// ── Route 2: Contact Form Email ──
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const recipients = [process.env.OWNER_EMAIL_1, process.env.OWNER_EMAIL_2].filter(Boolean).join(', ');

    await transporter.sendMail({
      from: `"Aeviq AI" <${process.env.GMAIL_USER}>`,
      to: recipients,
      replyTo: email,
      subject: `📩 Contact: ${subject} — from ${name}`,
      html: buildContactEmail({ name, email, company, subject, message }),
    });

    console.log(`✅ Contact email sent from ${name} (${email})`);
    res.json({ success: true, message: 'Contact email sent to founders' });
  } catch (err) {
    console.error('❌ Failed to send contact email:', err);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

// ── Health Check ──
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    calendarConfigured: !!calendar,
    timestamp: new Date().toISOString() 
  });
});

// ── Export App for Vercel Serverless OR Run Locally ──
if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`\n🚀 Aeviq Backend running at http://localhost:${PORT}`);
    console.log(`   POST /api/book-demo   → Creates Meet link + emails founders`);
    console.log(`   POST /api/contact     → Contact form email`);
    console.log(`   GET  /api/health      → Health check\n`);
  });
} else {
  module.exports = app;
}
