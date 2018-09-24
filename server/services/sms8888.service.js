const config = require('./config/config');
const appService = require('./app.service');
const Prefix = require('../models/prefix.model');
const prefixService = require('./prefix.service');

const createSMS = async (token, number, message) => {
  try {
    // check if app's auth token is valid
    // isAppAuthTokenValid
    if (isAppAuthTokenValid(token) === true) {
      // check prefix if globe or smart
      number = number.replace("+63", "0");
      prefix: Prefix = await prefixService.getNetwork(number);
      network = await prefix.network;
      // create url
      const url = `http://192.168.3.31/email_api/public/api/sms/send?recipients=${number}&message=${message}&network=${network}`;
      // call 8888 sms api to send sms
      const response = await fetch(url);
      const json = await response.json();
      return json;
    }
  } catch (err) {
    console.log(err)
    return null;
  }
}

module.exports.sendSMS = async (token, number, message) => {
  try {
    const response = await createSMS(token, number, message);
    return response;
  } catch (error) {
    console.log(err)
    return null;
  }
}
