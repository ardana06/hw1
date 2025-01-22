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

