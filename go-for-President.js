let choosePresedent = function(citizens, age) {
    if (citizens == "Kazakhstan" && age >= 30){
       console.log("Вы можете стать Президентом");
   } 
   else if (citizens !== "Kazakhstan") {
       console.log("Вы не можете быть Президентом Казахстана, потому что вы не являетесь гражданином Казахстана");
   } 
   else if (age < 30) {
       console.log("Вы слишком малы для этого");
   }
   
   }
   
   choosePresedent ("Kazakhstan",31);
   choosePresedent ("America",54);
   choosePresedent ("Kazakhstan",29);
