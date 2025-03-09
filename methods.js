//метод forEach() - он не создает новый массив, а просто перебирает элементы.

const array1 = [1, 2, 3, 4, 5];

array1.forEach((num) => console.log(num));



//метод map() - создаешь новый массив, умножая каждый элемент на 2
const numbers = [1, 4, 9];
const doubles = numbers.map(num => num * 2);
console.log(doubles);


//метод sort() - сортирует массив чисел правильно

let sortedNumbers = [5, 3, 8, 1, 9];

sortedNumbers.sort((a, b) => a - b);  
console.log(sortedNumbers);


//метод filter() - выбирает нужные элементы
let filterNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = filterNumbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

//метод reduce() - находит сумму всех чисел в массиве
let reduceNumbers = [1, 2, 3, 4, 5];

let sum = reduceNumbers.reduce((acc, num) => acc + num, 0);

console.log(sum);