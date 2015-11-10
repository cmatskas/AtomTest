var crypto = require('crypto');
var assert = require('assert');
var bcrypt = require('bCrypt-nodejs');
var fs = require('./fileservice');

var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
var settingsFileName = 'settings.txt';
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
  },

  createHash: function(textToHash){
    if(!textToHash){
      return '';
    }
    bcrypt.hash(textToHash,null,null, function(error, hash){
        if (error){
          console.log("Error during hash creation.");
          return '';
        }
        return hash;
    })
  },

  authenticate: function(textToCompare){
    if(!textToCompare){
      return '';
    }

    if(!fs.fileExists(settingsFileName)){
      fs.writeDataToFile(settingsFileName, "asdfasdfsafsafasfsafasfasdfsadfsadf");
    }

    var hash = fs.readDataFromFile(settingsFileName);
    var isSuccess = false;
    bcrypt.compare(textToCompare, hash, function(error, result){
      isSuccess = result;
    });

    return isSuccess;
  }

};
