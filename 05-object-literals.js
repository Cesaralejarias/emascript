// enached object literals

function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        uId 
    }
}

console.log(newUser("cesar", 28, "PE", 1));