
// Twilio Credentials
// You must implement this in a secret
const accountSid = 'AC285524725f90d44a12b696b4e4e09088';
const authToken = 'cfaa7e0aa6cf38c1765f8763e0231c3e';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

const createSMS = async (number, sms) => {
  try {
    const message = await client.messages
    .create({
      to: number,
      from: '+16105494035',
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
