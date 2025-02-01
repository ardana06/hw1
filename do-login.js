function checkLogin(Login,Password) {
    const correctLogin = "banan";  
    const correctPassword = "12345";
  
    if (Login === correctLogin && Password === correctPassword) {
        return "You are logged in";
    } else if (Login !== correctLogin && Password !== correctPassword) {
        return "Both inputs are wrong";
    } else if (Login !== correctLogin) {
        return "Your login is wrong";
    } else {
        return "Your password is wrong";
    }
  }
  
  console.log(checkLogin("banan", "12345")); 
  console.log(checkLogin("user", "75747"));   
  console.log(checkLogin("user", "12345"));  
  console.log(checkLogin("banan", "28282"));