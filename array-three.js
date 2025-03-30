//1 задача

function insertDashes(num) {
    let str = num.toString();
    let result = [str[0]];

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
            result.push('-');
        }
        result.push(str[i]);
    }
    return result.join(''); 
}

console.log(insertDashes(64378632868)); //6-4378-632-8-6-8


//2 задача
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

var arr1 = [3, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(sortArray(arr1)); // [1, 2, 3, 3, 4, 5, 6, 7, 8]



//3 задача
function mostFrequent(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequentItem = null;

    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1; 
        if (frequency[item] > maxCount) { 
            maxCount = frequency[item];
            mostFrequentItem = item;
        }
    }

    return `${mostFrequentItem} (${maxCount} times)`;
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1)); // a (5 times)
