// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

// Object destructuring

let user = { username: 'Cesar', age: 28};
let {username, age} = user;
console.log(username, user.age);

// spread operator

let person ={ name: 'Cesar', age: 28 };
let country = 'PE';

let data = { id: 1, ...person, country };
console.log(data);

//rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);



