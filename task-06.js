let total = 0;
while(true){
    let input = prompt('Введите число:');
    //Cancel
    if(input === null){
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
    //not number
    // else if(typeof Number(input) === NaN) {
    //     alert('Было введено не число, попробуйте еще раз');
    // }
    //number
    else{
        total += Number(input);
    }
}

