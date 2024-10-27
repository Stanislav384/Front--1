document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    document.getElementById('message').innerText = `Регистрация успешна! Ласкаво просимо, ${username}.`;

    // Очищаем форму
    document.getElementById('registrationForm').reset();
});

document.getElementById('backToHome').addEventListener('click', function() {
    window.location.href = 'index.html'; // Переход на главную страницу
});
