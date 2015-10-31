var encryption = require('./encryption');
var utilities = require('./utilities');

encryption.initialize("myKeyIsAwesome");

var button = document.getElementById('btnEncrypt');
button.addEventListener('click', function(){
  var result = encryption.encryptData('random data');
  var elementToHide = document.getElementById('elementToHide');
  utilities.hideElement(elementToHide);
  alert(result);
})
