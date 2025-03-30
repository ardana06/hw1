//Time Complexity показывает, как количество операций увеличивается при росте входных данных.
//Space Complexity показывает, сколько памяти используется при работе кода.
//Runtime - реальное время выполнения программы




function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(add(2, 3, 4)); // 9
console.log(add(10, 20, 30)); // 60
console.log(add(-5, 15, 5)); // 15

//Time Complexity O(1) - Количество операций всегда фиксировано (одно сложение). Даже если передать другие числа, функция не увеличивает количество шагов
//Space Complexity O(1) - Используется только 3 входных переменные. Нет создания новых массивов, списков или рекурсивных вызовов
//Runtime - Очень быстрый, выполнение почти сразу


function sayHello(numberOfTimes) {
    for (var i = 0; i < numberOfTimes; i++) {
        console.log("meow");
    }
}

sayHello(3);

//Time Complexity O(n) - Если numberOfTimes = 1000, будет 1000 повторений. Функция линейно зависит от входных данных
//Space Complexity O(1) - Используется только одна переменная i для хранения счетчика. Память не растет в зависимости от входных данных
//Runtime - Если numberOfTimes = 10, то выполняется сразу. А если numberOfTimes = 1,000,000, может занять несколько секунд


function logMultiples(n) {
    for (var num1 = 1; num1 <= n; num1++) {
        for (var num2 = 1; num2 <= n; num2++) {
            console.log(num1 * num2);
        }
    }
}

logMultiples(3);

//Time Complexity O(n^2) - Два вложенных цикла, каждый из которых выполняется n раз. Если n = 1000, будет 1,000,000 повторов
//Space Complexity O(1) - Используется только две переменные num1 и num2
//Runtime - Данный пример выполняется быстро. Если написать n = 10 выполняется почти сразу. А если написать n = 1000 может немного занять время


function logMultiples2(a, b) {
    for (var num1 = 1; num1 <= a; num1++) {
        for (let num2 = 1; num2 <= b; num2++) {
            console.log("test");
        }
    }
}

logMultiples2(3, 2);

//Time Complexity O(a * b) - Количество повторов зависит от двух входных параметров
//Space Complexity O(1) - Используется только две переменные num1 и num2
//Runtime - Данный пример выполняется быстро


function sum(x) {
    for (let i = 0; i < x; i++) {
        console.log("test");
    }
}

sum(5);

//Time Complexity O(x) - Количество операций зависит от x
//Space Complexity O(1) - Память почти не используется.
//Runtime - Данный пример выполняется быстро