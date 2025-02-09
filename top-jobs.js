function listCompany(){ 
    let companies = ["Google", "Microsoft", "StarBucks", "Minecraft", "Jusan", "EuroBank", "Kaspibank", "HalykBank", "AirAstana", "ArystabFly"]; 
        let i = 0; 
    while (i < companies.length){ 
        let num = i+1;
        let suffix = "th";
        if (num === 1){ 
            suffix = "st";
        } else if(num === 2){ 
            suffix = "nd";
        }else if(num === 3) { 
            suffix = "rd";
            } else {
                suffix = "th";
            }

            console.log("My "+ num + suffix + " choice is " + companies[i]);
            i++;
        
} 
} 
listCompany();
