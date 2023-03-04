function newUser(name, age, country){
    var name = name || 'Cesar';
    var age = age || 28;
    var country = country || 'PE';
    console.log(name, age, country);

}

newUser();
newUser('Daniel','17','MX');

function newAdmin(name = 'Oscar', age = '32', country = 'CL'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Amber', 36, 'US');