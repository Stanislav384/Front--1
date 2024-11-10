// Обробка натискання кнопки "Buy Now"
document.querySelectorAll('.buyButton').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'payment.html';  // Перенаправлення на сторінку оплати
    });
});

// Обробка реєстраційної форми
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Запобігаємо стандартному відправленню форми

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Валідація введених даних
    if (!username || !email || !password) {
        document.getElementById('message').innerText = "Будь ласка, заповніть всі поля.";
        return;
    }

    // Додаткові перевірки для email (можна використовувати регулярний вираз)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('message').innerText = "Будь ласка, введіть правильну електронну пошту.";
        return;
    }

    // Повідомлення про успіх
    document.getElementById('message').innerText = `Регистрация успешна! Ласкаво просимо, ${username}.`;
    
    // Додаємо ефект для повідомлення
    const messageElement = document.getElementById('message');
    messageElement.style.opacity = '1';
    setTimeout(() => {
        messageElement.style.opacity = '0';
    }, 3000);  // Повідомлення зникатиме через 3 секунди

    // Очищаємо форму
    document.getElementById('registrationForm').reset();
});

// Обробка кнопки "Назад на главную"
document.getElementById('backToHome').addEventListener('click', function() {
    window.location.href = 'index.html'; // Перехід на головну сторінку
});
