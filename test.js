// node js installed

/*
let email = "prateek@gmail.com"
let password = "2134"
let city = "bengaluru"

console.table([email, password, city]);

//Never use var in your code instead of let because of block and functional scope issues.
//console.table([group of variables you want to show in tabular form])

"use strict" //treat all js code as newer version

alert(3+3) //we are using nodejs, not browser

console.log(3);

console.log(typeof undefined); //underfined
console.log(typeof null); //object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //MaN means not a number

// if score = null then number conversion of null is 0

//number conversion of the following
// "33" => 33
// "33abc" => NaN (not a number)
// true => 1 fasle => 0
// null => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//boolean conversion
// 1 => true; 0=> false
// "" => false
// "ram" => true


//+++++++++++++++OPERATIONS++++++++++++++++++++++++++++
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
console.log((3+4) * 5 % 3); //always use brackets



console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++
console.log(gameCounter);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log("2" === 2);


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); ///false


const heroes = ["shaktiman", "naagraj", "ironman"]
let myObj = {
    name: "prateek",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction); //function
typeof undefined: //undefined
typeof Symbol('id'):// "symbol"
typeof null: //"object" 


//heap and stack bariable

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "prateek@google.com"
console.log(userOne.email);
console.log(userTwo.email);


let name = "prateek";
let repoCount = 21

console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(`this is new method of variable ${repoCount}`);


const gameName = new String('prateek-hc-comp')
console.log(gameName.split('-'));

const newStringOne = "   prateek   "
console.log(newStringOne);
console.log(newStringOne.trim());

const Url = "https://prateek.com/prateek%20kumar"
console.log(url.replace('%20', '-'));
console.log(url.includes('apple'));

console.log(gameName.split('_'));


const balance = new Number(100)
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const othernumber = 123.8966
console.log(othernumber.toPrecision(3)); //124
console.log(othernumber.toPrecision(4)); //123.9


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));

//++++++++++++++++++maths+++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-5)); //absolute
console.log(Math.round(4.6)); //roundoff
console.log(Math.ceil(4.2)); //upper roundoff
console.log(Math.floor(4.9)); //lower roundoff
console.log(Math.min(4,3,6,8));// minimum

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


let mydate = new Date()
console.log(mydate);
console.log(mydate.toString()); //Wed Sep 25 2024 21:02:10 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()); //Wed Sep 25 2024
console.log(mydate.toLocaleString()); //25/9/2024, 9:02:10 pm
console.log(typeof mydate);

*/

// let createdDate = new Date (2023, 0, 23) //Mon Jan 23 2023
let createdDate = new Date (2023, 0, 23, 5, 3)
console.log(createdDate.toLocaleString()); //23/1/2023, 5:03:00 am

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createdDate.getTime);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getSeconds());
console.log(newDate.getTimezoneOffset());






