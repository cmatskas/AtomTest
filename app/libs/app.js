var encryption = require('./encryption');
var utilities = require('./utilities');

encryption.initialize("myKeyIsAwesome");

var showClearPassword = document.getElementById('previewPassword');
var hideClearPassword = document.getElementById('unPreviewPassword');
var loginButton = document.getElementById('login');

showClearPassword.addEventListener('click', function(){
  //var result = encryption.encryptData('random data');
  var elementToHide = document.getElementById('secretPassword');
  utilities.hideElement(elementToHide);

  var elementToShow = document.getElementById('visiblePassword');
  utilities.showElement(elementToShow);
  //alert(result);
});

hideClearPassword.addEventListener('click', function(){
  //var result = encryption.encryptData('random data');
  var elementToHide = document.getElementById('visiblePassword');
  utilities.hideElement(elementToHide);

  var elementToShow = document.getElementById('secretPassword');
  utilities.showElement(elementToShow);
  //alert(result);
});

loginButton.addEventListener('click', function(){
  encryption.authenticate("afasfsadfasdfsdf");
});
