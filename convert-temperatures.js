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