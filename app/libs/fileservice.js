var fs = require('fs');
var remote = require('remote');
var app = remote.require('app');

var userDataPath = app.getPath('userData');
module.exports = {

  readDataFromFile: function(filename){
    var contents;
    var path = userDataPath + `\\${filename}`;
    try {
      fs.readFile(path,"utf8", function(error, data){
        if(error){
          console.log(`Error while reading data from ${path}`);
          console.log(`Error details: ${error}`);
        }
        contents = data;
      });
    } catch (e) {
      console.log(`Stack trace: ${e}`);
    }

    return contents;
  },

  writeDataToFile: function(filename, data){
    var path = userDataPath + `\\${filename}`;
    try {
      fs.writeFile(path, data, function(error){
        if(error){
          console.log(`Error while writing data to ${path}`);
          console.log(`Error details: ${error}`);
        }
      })
    } catch (e) {
      console.log(`Stack trace: ${e}`);
    }
  },

  fileExists: function(filename){
    var exists = false;
    var path = userDataPath + `\\${filename}`;
    fs.access(path, fs.R_OK | fs.W_OK, function (err) {
      exists = err ? false : true;
    });
  }

};
