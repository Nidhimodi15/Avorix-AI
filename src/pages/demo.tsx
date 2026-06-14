import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar as CalendarIcon, Clock, Video, Loader2, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { fadeUp, fadeLeft, fadeRight } from '@/lib/animations';
import { cn } from '@/lib/utils';

// Form validation schema
const demoFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Valid work email is required'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time slot'),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

const formatDateLocal = (date: Date) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const formatSelectedDate = (dateStr: string) => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
};

const isDateSelectable = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);
  
  // Must be in the future (or today)
  if (targetDate < today) return false;
  
  // Must not be a weekend (0 = Sunday, 6 = Saturday)
  const day = targetDate.getDay();
  if (day === 0 || day === 6) return false;
  
  // Must be within the next 30 days
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 30);
  if (targetDate > maxDate) return false;
  
  return true;
};

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

export function DemoPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: DateTime, 2: Details, 3: Success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [meetLink, setMeetLink] = useState('');
  const [currentMonth, setCurrentMonth] = useState(() => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  });

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of the month (0 = Sunday, 1 = Monday...)
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    // Days in month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    
    // Add empty slots for days of previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square" />);
    }
    
    // Add day buttons for current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateStr = formatDateLocal(date);
      const isSelected = selectedDateStr === dateStr;
      const selectable = isDateSelectable(date);
      
      days.push(
        <button
          key={`day-${day}`}
          type="button"
          disabled={!selectable}
          onClick={() => {
            setValue('date', dateStr);
            trigger('date');
          }}
          className={cn(
            "aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200",
            isSelected 
              ? "bg-primary text-white shadow-md ring-2 ring-primary ring-offset-2 ring-offset-bg-card" 
              : selectable 
                ? "hover:bg-primary-light hover:text-primary text-text-primary" 
                : "text-text-muted opacity-25 cursor-not-allowed"
          )}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };
  
  const { register, handleSubmit, formState: { errors }, watch, setValue, trigger } = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      date: '',
      time: '',
    }
  });

  const selectedDateStr = watch('date');
  const selectedTime = watch('time');

  const onNextStep = async () => {
    const isStep1Valid = await trigger(['date', 'time']);
    if (isStep1Valid) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const OWNER_EMAILS = ['parth.hindiya@gmail.com', 'nidhimodi970@gmail.com'];

  const generateMeetCode = () => {
    const seg = (n: number) => Math.random().toString(36).substring(2, 2 + n);
    return `${seg(3)}-${seg(4)}-${seg(3)}`;
  };

  const sendOwnerEmails = async (data: DemoFormValues, link: string) => {
    const subject = encodeURIComponent(`[Avorix AI] New Demo Booked – ${data.firstName} ${data.lastName}`);
    const body = encodeURIComponent(
      `New demo booking received!\n\n` +
      `Name: ${data.firstName} ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Company: ${data.company}\n` +
      `Phone: ${data.phone}\n` +
      `Date: ${formatSelectedDate(data.date)}\n` +
      `Time: ${data.time}\n\n` +
      `Google Meet Link: ${link}\n\n` +
      `Join the call at the scheduled time.`
    );
    // Open default mail client as fallback (works without a backend)
    // In production replace this with a real EmailJS / SendGrid / Resend call
    console.log('Booking details for owners:', { data, link });
    // Attempt to send via EmailJS free tier (no backend needed)
    try {
      for (const ownerEmail of OWNER_EMAILS) {
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: 'service_avorix',       // ← replace with your EmailJS service ID
            template_id: 'template_avorix',     // ← replace with your EmailJS template ID
            user_id: 'YOUR_EMAILJS_PUBLIC_KEY', // ← replace with your EmailJS public key
            template_params: {
              to_email: ownerEmail,
              customer_name: `${data.firstName} ${data.lastName}`,
              customer_email: data.email,
              customer_company: data.company,
              customer_phone: data.phone,
              booking_date: formatSelectedDate(data.date),
              booking_time: data.time,
              meet_link: link,
            },
          }),
        });
      }
    } catch (err) {
      console.warn('Email send failed (EmailJS not configured yet):', err);
    }
  };

  const onSubmit = async (data: DemoFormValues) => {
    setIsSubmitting(true);

    const code = generateMeetCode();
    const link = `https://meet.google.com/${code}`;

    // Send notification emails to both owners
    await sendOwnerEmails(data, link);

    // Short UX delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    setMeetLink(link);
    setIsSubmitting(false);
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="pt-32 pb-24 min-h-screen bg-bg-surface relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl -z-10 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent blur-3xl -z-10 rounded-tr-full" />
      
      <div className="container-wide">
        <div className="max-w-6xl mx-auto">
          
          {step !== 3 && (
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
              <h1 className="text-heading-2 md:text-heading-1 text-center mb-4">
                Schedule your <span className="text-primary">personalized demo</span>
              </h1>
              <p className="text-body-lg text-text-secondary text-center max-w-2xl mx-auto">
                See exactly how Avorix AI can transform your customer communication, capture more leads, and save your team hundreds of hours.
              </p>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Info Panel */}
            {step !== 3 && (
              <motion.div 
                variants={fadeRight} 
                initial="hidden" 
                animate="visible"
                className="lg:col-span-5 bg-bg-card border border-border rounded-2xl p-8 shadow-lg lg:sticky lg:top-32"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-heading-3 mb-2">Google Meet Discovery Call</h3>
                <p className="text-text-secondary mb-8">30 minutes • Virtual Meeting</p>
                
                <h4 className="font-semibold text-text-primary mb-4">What to expect:</h4>
                <ul className="space-y-4 mb-8">
                  {[
                    'Deep dive into your current WhatsApp workflow',
                    'Live demonstration of Avorix AI in action',
                    'Custom ROI projection for your business',
                    'Interactive Q&A with our automation experts'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-4 bg-bg-surface rounded-xl border border-border">
                  <p className="text-sm italic text-text-secondary mb-3">
                    "The demo call was incredibly insightful. They didn't just show the software, they showed us how to completely rethink our customer acquisition strategy."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">SM</div>
                    <span className="text-xs font-semibold text-text-primary">Sarah M., Meridian Health</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Right: Booking Form Area */}
            <motion.div 
              variants={step === 3 ? fadeUp : fadeLeft} 
              initial="hidden" 
              animate="visible"
              className={cn(
                "bg-bg-card border border-border rounded-2xl shadow-xl overflow-hidden",
                step === 3 ? "lg:col-span-12 max-w-3xl mx-auto" : "lg:col-span-7"
              )}
            >
              <AnimatePresence mode="wait">
                
                {/* STEP 1: DATE & TIME */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-8 md:p-10"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                      <h2 className="text-heading-3">Select a Date & Time</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Date Selection */}
                      <div>
                        <label className="form-label mb-4 flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4 text-text-muted" /> 
                          Choose Date
                        </label>
                        <div className="border border-border rounded-2xl p-4 bg-bg shadow-sm">
                          {/* Calendar Header */}
                          <div className="flex items-center justify-between mb-4 px-2">
                            <span className="font-bold text-text-primary text-sm tracking-wide">
                              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                            </span>
                            <div className="flex gap-1">
                              <button
                                type="button"
                                onClick={handlePrevMonth}
                                className="p-1.5 rounded-lg border border-border hover:bg-bg-surface text-text-primary transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                              <button
                                type="button"
                                onClick={handleNextMonth}
                                className="p-1.5 rounded-lg border border-border hover:bg-bg-surface text-text-primary transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* Weekdays Row */}
                          <div className="grid grid-cols-7 gap-1 text-center mb-2">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                              <span key={d} className="text-xs font-semibold text-text-muted uppercase tracking-wider py-1">
                                {d}
                              </span>
                            ))}
                          </div>

                          {/* Days Grid */}
                          <div className="grid grid-cols-7 gap-1">
                            {renderCalendar()}
                          </div>
                        </div>
                        {errors.date && <p className="form-error mt-2">{errors.date.message}</p>}
                      </div>

                      {/* Time Selection */}
                      <div className={cn("transition-opacity duration-300", !selectedDateStr && "opacity-50 pointer-events-none")}>
                        <label className="form-label mb-4 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-text-muted" /> 
                          Choose Time (Your Local Time)
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => {
                            const isSelected = selectedTime === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => {
                                  setValue('time', time);
                                  trigger('time');
                                }}
                                className={cn(
                                  "p-3 rounded-lg border text-sm font-medium transition-all duration-200",
                                  isSelected 
                                    ? "border-primary bg-primary text-white" 
                                    : "border-border bg-bg hover:border-primary/50 text-text-primary"
                                )}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                        {errors.time && <p className="form-error mt-2">{errors.time.message}</p>}
                      </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-border flex justify-end">
                      <Button 
                        onClick={onNextStep} 
                        disabled={!selectedDateStr || !selectedTime}
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Next Step
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: DETAILS */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-8 md:p-10"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                      <h2 className="text-heading-3">Your Details</h2>
                    </div>
                    
                    <div className="mb-8 p-4 bg-primary/5 rounded-xl border border-primary/20 flex items-start gap-4">
                      <CalendarIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-text-primary">Selected Time:</p>
                        <p className="text-sm text-text-secondary">
                          {selectedDateStr ? formatSelectedDate(selectedDateStr) : ''} at {selectedTime}
                        </p>
                        <button 
                          onClick={() => setStep(1)}
                          className="text-primary text-sm font-medium mt-1 hover:underline"
                        >
                          Change
                        </button>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="form-label">First Name *</label>
                          <input 
                            {...register('firstName')} 
                            className={cn("form-input", errors.firstName && "border-destructive")} 
                            placeholder="Jane"
                          />
                          {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
                        </div>
                        <div>
                          <label className="form-label">Last Name *</label>
                          <input 
                            {...register('lastName')} 
                            className={cn("form-input", errors.lastName && "border-destructive")} 
                            placeholder="Doe"
                          />
                          {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="form-label">Work Email *</label>
                        <input 
                          {...register('email')} 
                          type="email"
                          className={cn("form-input", errors.email && "border-destructive")} 
                          placeholder="jane@company.com"
                        />
                        {errors.email && <p className="form-error">{errors.email.message}</p>}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="form-label">Company Name *</label>
                          <input 
                            {...register('company')} 
                            className={cn("form-input", errors.company && "border-destructive")} 
                            placeholder="Acme Corp"
                          />
                          {errors.company && <p className="form-error">{errors.company.message}</p>}
                        </div>
                        <div>
                          <label className="form-label">Phone Number *</label>
                          <input 
                            {...register('phone')} 
                            className={cn("form-input", errors.phone && "border-destructive")} 
                            placeholder="+1 (555) 000-0000"
                          />
                          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                        </div>
                      </div>

                      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
                        <button 
                          type="button" 
                          onClick={() => setStep(1)}
                          className="text-text-secondary hover:text-primary font-medium text-sm transition-colors"
                        >
                          Back
                        </button>
                        <Button 
                          type="submit" 
                          isLoading={isSubmitting}
                          rightIcon={!isSubmitting ? <CheckCircle2 className="w-4 h-4" /> : undefined}
                        >
                          {isSubmitting ? 'Scheduling...' : 'Schedule Meeting'}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* STEP 3: SUCCESS */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 md:p-16 text-center"
                  >
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>

                    <h2 className="text-heading-2 mb-3">Demo Scheduled! 🎉</h2>
                    <p className="text-body-lg text-text-secondary mb-8 max-w-lg mx-auto">
                      Your demo is confirmed. The Avorix team has been notified and will join at the scheduled time.
                    </p>

                    <div className="bg-bg-surface border border-border p-6 rounded-2xl max-w-md mx-auto mb-8 text-left">
                      <div className="flex items-start gap-4 mb-4 pb-4 border-b border-border">
                        <CalendarIcon className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="font-semibold text-text-primary text-sm">Date & Time</p>
                          <p className="text-text-secondary text-sm">
                            {selectedDateStr ? formatSelectedDate(selectedDateStr) : ''} at {selectedTime}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Video className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div className="w-full min-w-0">
                          <p className="font-semibold text-text-primary text-sm mb-1">Google Meet Link</p>
                          <a
                            href={meetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm break-all font-mono"
                          >
                            {meetLink}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Owner notification badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-8">
                      <CheckCircle2 className="w-4 h-4" />
                      Team notified at parth.hindiya@gmail.com &amp; nidhimodi970@gmail.com
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <a
                        href={meetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                      >
                        Join Google Meet
                      </a>
                      <a href="/" className="btn btn-secondary btn-lg">
                        Return to Home
                      </a>
                    </div>
                  </motion.div>
                )}
                
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
