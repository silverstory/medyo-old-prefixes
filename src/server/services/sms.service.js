
// Twilio Credentials
// You must implement this in a secret
const accountSid = 'ACe7e7db778388b2bf707fb90809c62ce9';
const authToken = 'dac3108c9dad6ac54dbda6dc131d3e00';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

const createSMS = async (number, sms) => {
  try {
    const message = await client.messages
    .create({
      to: number,
      from: '+15127780801',
      body: sms,
    });
    // console.log(message.sid);
    return message.sid;

  } catch (err) {
    console.log(err)
    return null;
  }
}

module.exports.sendSMS = async (number, sms) => {
  try {
    const messageid = await createSMS(number, sms);
    return messageid;
  } catch (error) {
    console.log(err)
    return null;
  }
}
