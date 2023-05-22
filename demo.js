/*
1. Call Twilio API to send SMS
2. Find your account sid and auth token from env variables
3. log message respose to the console
4. comment whats happeing in the code
*/

// Import the Twilio module and create a REST client
function sendSMS() {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            to: '+919876543210',
            from: '+15017122661',
            body: 'Hello from Twilio!',
        })
        .then((message) => console.log(message.sid));
}

/*
1. Write function to send an email
2. Use nodemailer to send email
3. get secure configuration from './secure_config'
4. create transporter and mailConfiguration to send email
5. read from and to email from secure configuration
6. get the user name, password, clientID, clientSecret from secure configuration
7. send the email as html
*/

function sendemail () {
    const secureConfig = require('./secure_config');
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: secureConfig.fromEmail,
            clientId: secureConfig.clientId,
            clientSecret: secureConfig.clientSecret,
            refreshToken: secureConfig.refreshToken,
            accessToken: secureConfig.accessToken
        }
    });

    const mailOptions = {
        from: secureConfig.fromEmail,
        to: secureConfig.toEmail,
        subject: 'Sending Email using Node.js',
        html: '<h1>Welcome</h1><p>That was easy!</p>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
}