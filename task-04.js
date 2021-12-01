//счет пользователя
let credits = 35500;
//цена ремонтного дроида за штуку
let pricePerDroid = 3000;
//общая цена заказа
let totalPrice = 0;

let amount = prompt('Укажите количество дроидов, которое желаете купить:');
if(amount === null) //Escape
    console.log('Отменено пользователем!');
else {
    totalPrice = Number(amount)*pricePerDroid;
    if(totalPrice > credits)
        console.log('Недостаточно средств на счету!');
    else {
        let ost = credits - totalPrice;
        console.log(`Вы купили ${amount} дроидов, на счету осталось ${ost} кредитов.`);
    }
}
    