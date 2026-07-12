const { google } = require('googleapis');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  console.log('\n--- Aeviq AI Google Calendar Token Generator ---\n');
  console.log('You can find your Client ID and Secret in the Google Cloud Console (APIs & Services > Credentials).');
  console.log('IMPORTANT: Make sure you have added "http://localhost" (with no trailing slash) as an Authorized Redirect URI for your OAuth Client.\n');

  rl.question('Enter your Google Client ID: ', (clientId) => {
    rl.question('Enter your Google Client Secret: ', async (clientSecret) => {
      
      const oauth2Client = new google.auth.OAuth2(
        clientId.trim(),
        clientSecret.trim(),
        'http://localhost'
      );

      const scopes = ['https://www.googleapis.com/auth/calendar.events'];

      const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent', // Force consent prompt to get a refresh token
        scope: scopes,
      });

      console.log('\n======================================================');
      console.log('1. Open this URL in your browser:');
      console.log('------------------------------------------------------');
      console.log(url);
      console.log('------------------------------------------------------');
      console.log('2. Log in with your Google account.');
      console.log('3. If you see a warning, click "Advanced" -> "Go to ... (unsafe)".');
      console.log('4. Click "Continue" to grant permissions.');
      console.log('5. You will be redirected to a page that fails to load (localhost).');
      console.log('6. Look at the URL in your address bar. It will look like:');
      console.log('   http://localhost/?code=4/0Axxxxxxxxx&scope=...\n');
      
      rl.question('Paste the entire "code=" part here (just the code, e.g. 4/0A...): ', async (code) => {
        try {
          console.log('\nExchanging code for tokens...');
          const { tokens } = await oauth2Client.getToken(code.trim());
          
          if (!tokens.refresh_token) {
            console.log('⚠️ Warning: No refresh token returned. You might need to revoke access to the app in your Google Account security settings and try again.');
          }

          console.log('\n======================================================');
          console.log('✅ SUCCESS! Here are your credentials:');
          console.log('======================================================\n');
          
          console.log('GOOGLE_REFRESH_TOKEN=' + (tokens.refresh_token || 'NOT_FOUND_SEE_WARNING'));
          
          console.log('\nCopy the GOOGLE_REFRESH_TOKEN above and paste it into your Vercel Environment Variables!');
          console.log('======================================================\n');
          process.exit(0);
        } catch (error) {
          console.error('\n❌ Failed to get tokens:', error.message);
          console.log('Make sure you copied the entire code exactly as it appears in the URL.');
          process.exit(1);
        }
      });
    });
  });
}

main();
