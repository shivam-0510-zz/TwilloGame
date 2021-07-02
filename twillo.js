const accountH = process.env.TWILIO_ACCOUNT_H;
const authPass = process.env.TWILIO_AUTH_PASS;
const client = require('twilio')(accountH,authPass);
client.messages
  .create
   ({
     to: '+9198765xxxxx',
     from: '+11234567890',
     body: 'Hello H',
   })
  .then(message => console.log(message.H));