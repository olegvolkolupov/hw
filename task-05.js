// страны
const CHINA = 'Китай';
const CHILE = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAIKA = 'Ямайка';
// стоимость доставки
const CHINA_PRICE = 150;
const CHILE_PRICE = 250;
const AUSTRALIA_PRICE = 165;
const INDIA_PRICE = 90;
const JAMAIKA_PRICE = 130;

let country = prompt('Укажите страну доставки:');

// Привести к виду: Название страны с большой буквы
country = country.toLowerCase();
country = country[0].toUpperCase() + country.slice(1);

switch(country) {
    case CHINA:
        alert(`Доставка в ${CHINA} будет стоить ${CHINA_PRICE} кредитов`);
        break;
    case CHILE:
        alert(`Доставка в ${CHILE} будет стоить ${CHILE_PRICE} кредитов`);
        break;
    case AUSTRALIA:
        alert(`Доставка в ${AUSTRALIA} будет стоить ${AUSTRALIA_PRICE} кредитов`);
        break;
    case INDIA:
        alert(`Доставка в ${INDIA} будет стоить ${INDIA_PRICE} кредитов`);
        break;
    case JAMAIKA:
        alert(`Доставка в ${JAMAIKA} будет стоить ${JAMAIKA_PRICE} кредитов`);
        break;
    default:{
        alert('В вашей стране доставка не доступна');
    }        
}
