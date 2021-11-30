// скрипт проверки количества товаров на складе
// количество товаров на складе
const TOTAL = 100;
// количество единиц товара в заказе
let ordered = 50;
if(ordered > TOTAL)
    console.log("На складе недостаточно товаров!");
else
    console.log("Заказ оформлен, с вами свяжется менеджер");

ordered = 20;
if(ordered > TOTAL)
    console.log("На складе недостаточно товаров!");
else
    console.log("Заказ оформлен, с вами свяжется менеджер");

ordered = 80;
if(ordered > TOTAL)
    console.log("На складе недостаточно товаров!");
else
    console.log("Заказ оформлен, с вами свяжется менеджер");

ordered = 130;
if(ordered > TOTAL)
    console.log("На складе недостаточно товаров!");
else
    console.log("Заказ оформлен, с вами свяжется менеджер");
