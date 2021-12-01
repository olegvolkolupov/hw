let message;
const ADMIN_PASSWORD = 'adminpass';
let password = prompt('Пароль:');
if(password === null) //Escape
    message = 'Отменено пользователем!';
else if(password === ADMIN_PASSWORD) // введён правильный пароль
    message = 'Добро пожаловать!';
else
    message = 'Доступ запрещен, неверный пароль!';
alert(message);