let message;
const ADMIN_PASSWORD = 'adminpass';
let password = prompt('Пароль:');
//Escape
if(password === null){ 
    message = 'Отменено пользователем!';
}    
// введён правильный пароль
else if(password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}    
else{
    message = 'Доступ запрещен, неверный пароль!';
}    
alert(message);