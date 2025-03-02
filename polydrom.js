function findVowels(string) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++; // Увеличиваем счетчик, если символ - гласная
        }
    }

    return count;
}

console.log(findVowels("hello")); //2
console.log(findVowels("why")); //0
console.log(findVowels("stankevich")); //3 