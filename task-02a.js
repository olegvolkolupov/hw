// скрипт проверки количества товаров на складе
// количество товаров на складе
const TOTAL = 100;
// количество единиц товара в заказе
let ordered = Number(prompt('Укажите количество единиц товара в заказе : '));
if(ordered > TOTAL)
    console.log("На складе недостаточно товаров!");
else
    console.log("Заказ оформлен, с вами свяжется менеджер");