document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    this.textContent = type === 'password' ? 'Показати' : 'Приховати';
});

document.getElementById('toggle-confirm-password').addEventListener('click', function() {
    const confirmPasswordField = document.getElementById('confirm-password');
    const type = confirmPasswordField.type === 'password' ? 'text' : 'password';
    confirmPasswordField.type = type;
    this.textContent = type === 'password' ? 'Показати' : 'Приховати';
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;
    
    if (password !== confirmPassword) {
        alert('Паролі не співпадають');
        event.preventDefault();
    }
    
    if (password.length < 8) {
        alert('Пароль має бути не менше 8 символів');
        event.preventDefault();
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Будь ласка, введіть правильний email');
        event.preventDefault();
    }
});




