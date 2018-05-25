const config = require('../config/config');

// Specify a string key: I might need to use a different secret key
const mykey = config.JWT_SECRET;
 
// Initialize encryption engine
const encryptor = require('simple-encryptor')({
    key: mykey,
    hmac: true,
    debug: true
});

const encHMAC = async text => {
    try {
        const hmac = await encryptor.hmac(text);
        return hmac;
    } catch (error) {
        console.log(error);
        // return null;
        return error;
    }
}

module.exports.generateHMAC = async text => await encHMAC(text)

// in case you will need decryption
// const textDec = async text => {
//     try {
//       const dectext = await encryptor.decrypt(text);
//       return dectext;
//     } catch (err) {
//       console.log(err)
//       // return null;
//       return error;
//     }
// }
  
// module.exports.parseQR = async text => await textDec(text)