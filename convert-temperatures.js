const Farengeit = function(Celsia){  
    let sum = Celsia * 9 / 5 + 32;  
    console.log("Фаренгейт равен = " + sum);  
}  
Farengeit(10)  
Farengeit(55)  
Farengeit(29)  
  
  
const Celsia = function(Farengeit){  
    let sum = (Farengeit - 32) * 5 / 9;  
    console.log("Цельсия равен = " + sum);  
}  
Celsia(50) 
Celsia(131) 
Celsia(84.2)



//дз - 2 block-scopes

let globalVariable = "Я глобал"; //работает везде 
console.log (globalVariable); 
 
function local() { 
 var functionVariable = "Я могу быть только в этой функции!"; //работает в пределах функции, в блоке будет работать 
  console.log(functionVariable); 
 
  console.log (globalVariable); //работает везде 
 
  //console.log(blockVariable); //здесь блок не будет работать, потому что он создан за блоком 
 
 
  let blockVariable = "Я могу быть только в этом блоке!"; { 
  console.log(blockVariable); //Блок существует только в блоке. Все что написали в блоке, оно только там существует. Если добавим функцию в блок, она будет работать т.к блок находится в функции 
 
  console.log(functionVariable); //работает функция от ее создания до скобки. Функция работает только в функции 
 
  const anotherBlockVariable = "Я могу быть только в этом блоке!";{ 
    console.log(anotherBlockVariable); 
  } 
 
     var anotherBlockVariable2 = "Я могу быть только в этом блоке!"; { 
     console.log(anotherBlockVariable2); 
     } 
 
  } 
   
 } 
 
//  это ошибка - console.log(blockVariable); 
 
local(); 
 
console.log (globalVariable); //работает везде 
 
console.log(functionVariable); //ошибка 
 
console.log(blockVariable); //ошибка

