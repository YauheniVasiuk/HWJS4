// Task 1
console.log("Задача 1");
let arrT1 = [1, 2, 3, 4, 5];
    for (let i = 0; i < arrT1.length; i++) {
        console.log(arrT1[i]);
    }
// Task 2
console.log("Задача 2");
let arrT2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    for (let i = 0; i < arrT2.length; i++) {
        if((arrT2[i]<0) && (arrT2[i] > -10) && (arrT2[i] < -3)) {
             console.log(arrT2[i]);
        }
    }
// Task 3
console.log("Задача 3"); 
let arrT3 = [];
    for (let i = 23; i <= 57; i++) {
        arrT3.push(i);
    }

    console.log(arrT3);

    arrT3 = [];
    let i = 57;

    while ( i >= 23 ) {
        arrT3.push(i);
        i--;
    }

    console.log(arrT3);

    let result = 0;
    for (let i = 0; i < arrT3.length; i++) {
        result += arrT3[i];
    }

    console.log(result);
// Task 4
console.log("Задача 4");
let arrT5 = ['10', '20', '30', '50', '235', '3000'];
    arrT5NumCom = [];
    for (let i = 0; i < arrT5.length; i++) { 
            let arrT5Num = arrT5[i];
                arrT5NumCom.push(arrT5Num.split(''));
                    if((+arrT5NumCom[i][0] == 1) || (+arrT5NumCom[i][0] == 2) || (+arrT5NumCom[i][0] == 5)) {
                        console.log(arrT5[i]);

    }

}
// Task 5
document.write("Задача 5 <br /\>");
let arrWeek = ['Mo', 'Tu', "We", "Th", "Fr", "Sa", "Su"];
    for (let i = 0; i < arrWeek.length; i++) {
        if ((i == arrWeek.indexOf('Sa')) || (i == arrWeek.indexOf('Su'))) {
                arrWeek[i] = arrWeek[i].bold();
              }
              document.write(arrWeek[i]); 
       }
       document.write("<br /\> <br /\>");
// Task 6
console.log("Задача 6");    
let arrT6 = [2, 4, 'Yauheni', 'true'];
    arrT6.push("Hello");

    console.log(arrT6[arrT6.length-1]);
// Task 7
console.log("Задача 7 ");
let arrT7 = [];
    i = 0;
    while (true) {
            arrT7.push(+prompt("Введите число(пробел завершить):")); 
        if ((arrT7[i] !== arrT7[i]) || (arrT7[i] == "")) {
            break ;
        }
    console.log(arrT7[i]);
    i++;
}

    arrT7.sort(function(a, b) {
        return a - b; 
    })
    
    console.log("Сортировка:");5

    for (let j = 0; j < arrT7.length; j++) {
        console.log(arrT7[j]);
    }
// Task 8
console.log("Задача 8 ");
let arrT8 = [12, false, 'Текст', 4, 2, -5, 0];
    iT8 = 0;
    arrT8.reverse();

    while (iT8 <= arrT8.length - 1) {
        console.log(arrT8[iT8]);
        iT8++; 
    }
// Task 9
console.log("Задача 9 ");
let arrT9 = [5,9,21,,,9,78,,,,6];
    eEl = 0;
    for (let i = 0; i < arrT9.length; i++) {
        if (!!!arrT9[i]) {
            eEl += 1; 
        }
    }

console.log("сумма: " + eEl);
// Task 10
console.log("Задача 10 ");
let arrT10 = [1, 8, 0, 13, 76, 8, 0, 22, 0, 2, 3, 2];
    Zero1 = arrT10.indexOf(0);
    Zero2 = arrT10.lastIndexOf(0);
    sumEl = 0;
    for (let i = Zero1 + 1; i < Zero2; i++) {
        sumEl += arrT10[i];  
     }
     
     console.log("Сумма: " + sumEl);
// Task 11
document.write("Задача 11 <span style='color:red'>(Сделал даже интересней!)</span> <br /\>");
let h = prompt("Введите высоту треугольника:");
    arrT11 = [];    
    
    for (let i = 0; i < h ; i++) {
        arrT11[i] = [];
        
        for (let j = 0 + i; j < h*2 - 1 - i; j++){
            arrT11[i][j] = "^";
        }

        for (let a = 0; a < h*2 - 1; a++){
            if (!!!arrT11[i][a]) {
                arrT11[i][a] = "<span style='color:white'>^</span>";
            }
            
            document.write(arrT11[i][a]);
        }

        document.write("<br /\>");
    }
    arrT11.reverse();
    for (let i = 0; i < h ; i++) {
        for (let j = 0 ; j < h*2 - 1; j++) {
            document.write(arrT11[i][j]);
        }

        document.write("<br /\>");
    }


    