//среда 15.01

//HW 2
const tellFortune = function(job, age, name, kids){
    console.log("вы будете " + job, "в " + age, "выйдете замуж за " + name, "и у вас будет " + kids, "детей");
    }
    tellFortune("миллионер", 15, "Джейком", 2)
    //мы можем дублировать
    tellFortune("бананом", 18, "Сашу", 1)
    tellFortune("дворником", 13, "Аню", 0)
    
    
//HW 3

const end = function (billAmount, tipPercent) {
    let tipAmount = (billAmount + tipPercent) / 100;
    let sum = tipAmount + billAmount;
    console.log("Ващ общий счет вместе с чаевыми составляет " + sum);
}

end (5300, 10);
end (4737, 6);
end (647356, 15);