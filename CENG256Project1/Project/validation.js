$(document).ready(function() {
	$('.error').hide();
  $('form[name="loginForm"]').submit(function(event) {
	  $('.error').hide();
    var username = $('#username').val();
    var password = $('#password').val();
	var passcheck = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[!*])[0-9a-zA-Z!$]{8,}/;
	var usercheck = /^[a-zA-Z][a-zA-Z0-9]*$/;
    
    // Validate username
    if (!usercheck.test(username)) {
	  $("label#Name_error").show();
	  $("input#username").focus();
      //$('#username_error').text('Only characters are allowed in this space.');
	  return false;
    }
    
    // Validate password
    if (!passcheck.test(password)) {
		$("label#P_error").show();
	    $("input#password").focus();
      //$('#password_error').text('The password must be at least 8 characters long and contain at least one letter, one number, and one special character (! or *).');
		return false;
	}
	window.location.href = 'LoginFeedback.html';
	return false;
    
  });
});
