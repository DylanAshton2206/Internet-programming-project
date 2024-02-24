$(document).ready(function() {
	$('.error').hide();
	$('#feedback-form').submit(function(e) {
		$('.error').hide();
		var name = $('#name').val();
		var NameCheck = /^[a-zA-Z]+$/;
		var email = $('#email').val();
		var message = $('#message').val();
		var error = false;
		$('.error').remove();

		if (!NameCheck.test(name)) {
			$('#name').after('<div class="error">Only characters are allowed.</div>');
			error = true;
			return false;
		}

		if (message.length < 20) {
			$('#message').after('<div class="error">Message must be at least 20 characters long</div>');
			error = true;
			return false;
		}
		var dataString = 'Name='+ name + '\nEmail=' + email;
		alert (dataString);
		window.location.href = 'FeedbackConfirmation.html';
		return false;
		
	});
});
