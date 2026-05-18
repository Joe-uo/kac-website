(function () {
	document.querySelectorAll('form[action*="formspree.io"]').forEach(function (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();

			var consent = form.querySelector('[name="consent"]');
			if (consent && !consent.checked) {
				var msg = form.querySelector('.consent-error');
				if (!msg) {
					msg = document.createElement('p');
					msg.className = 'consent-error';
					msg.style.cssText = 'color:#c0392b;margin-top:0.5em;';
					msg.textContent = 'Please confirm your consent before submitting.';
					consent.closest('label').after(msg);
				}
				consent.closest('label').scrollIntoView({ behavior: 'smooth', block: 'center' });
				return;
			}

			var btn = form.querySelector('[type="submit"]');
			var original = btn.value;
			btn.disabled = true;
			btn.value = 'Submitting...';

			fetch(form.action, {
				method: 'POST',
				body: new FormData(form),
				headers: { 'Accept': 'application/json' }
			}).then(function (res) {
				if (res.ok) {
					window.location.href = '/thanks.html';
				} else {
					btn.disabled = false;
					btn.value = original;
					alert('Something went wrong. Please try again or contact us directly.');
				}
			}).catch(function () {
				btn.disabled = false;
				btn.value = original;
				alert('Something went wrong. Please try again or contact us directly.');
			});
		});
	});
})();
