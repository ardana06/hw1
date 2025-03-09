function checkPolyndrom(smth){
    let word1 = smth.toString().toUpperCase();
    let word2 = word1.split('').reverse().join('')
        if (word1.toLowerCase() === word2.toLowerCase()){
            console.log ("word is polyndrom")
        } else {
            console.log("that is not polyndrom");
            
        }
}
checkPolyndrom("mom")
checkPolyndrom("Mom")
checkPolyndrom("dad")
checkPolyndrom("baby")
checkPolyndrom(44)
checkPolyndrom(48)
