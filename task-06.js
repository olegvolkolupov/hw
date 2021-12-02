let total = 0;
while(true){
    let input = prompt('Введите число:');
    //Cancel
    if(input === null){
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
    input = Number(input);
    //not number
    if(!Number.isInteger(input)) {
        alert('Было введено не число, попробуйте еще раз');
    }
    //number
    else{
        total += input;
    }
}