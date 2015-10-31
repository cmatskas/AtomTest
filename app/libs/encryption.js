var crypto = require('crypto');
var assert = require('assert');

var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
var key;

module.exports = {

  initialize: function(privateKey){
    key = privateKey;
  },

  encryptData: function(plainText){
    var cipher = crypto.createCipher(algorithm, key);
    encrypted = cipher.update(plainText, 'utf8', 'hex') + cipher.final('hex');
    return encrypted;
  },

  decryptData: function (encryptedText){
    if(!encrypted){
      return '';
    }
    var decipher = crypto.createDecipher(algorithm, key);
    var decrypted = decipher.update(encryptedText, 'hex', 'utf8') + decipher.final('utf8');
    return decrypted;
  }
};
