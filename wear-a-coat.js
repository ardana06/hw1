let wearACoat = function (degrees){ 
    if (degrees<0){ 
        console.log("Я не выйду из дома"); 
    } else if (degrees<30){ 
         console.log("Я одену пальто и шапку"); 
    } else if (degrees<50){ 
      console.log("Я одену пальто"); 
    } else { 
         console.log ("Я оденусь как захочу"); 
    } 
}

wearACoat(10);
wearACoat(35);
wearACoat(55);
wearACoat(-1);