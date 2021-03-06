// single line comment

/* multi 
line 
comment */

// Script tag should be written at the bottom of HTML File 
// if you want to write scipt tag at the Head you show add 
// document.addEventListener("DomContentLoaded", function)

/* ---------Data Type in JavaScript

[1] Primitive Value  ( passed by value)
  Boolean, null, undefined, String, Number, bigint, symbol

[2] Object ( passed by Reference)
  Object , Array , Function , ....
*/

// --------BigInt
/* 
The BigInt type is a numeric primitive in JavaScript that can represent integers 
with arbitrary precision. With BigInts, you can safely store and operate on large integers 
even beyond the safe integer limit for Numbers.

// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); 
console.log(x)//9007199254740991n
console.log(x + 1n)//9007199254740992n
console.log(x + 2n)//9007199254740993n
console.log(x + 1n === x + 2n) // false

// Number
console.log(Number.MAX_SAFE_INTEGER + 1) //9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2) //9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2) // true
*/


// window.alert("hello from JS file");
// document.write("<h1> Hello from document.write </h1>");
// document.createElement()
// console.log("hello to console");
// console.error("404");
// console.table(["osama", "ahmed", "mohamed"]);
// %c called directive write it before what you want to style
/*console.log(
  "Hello from %cjs %cfile",
  "color:red; font-size:40px;",
  "color:blue; font-size:40px;"
);*/

// console is from Web API
/*API stands for Application Programming Interface. API is actually some kind of interface which is having a set of functions.
These set of functions will allow programmers to acquire some specific features or the data of an application.*/

/* Data Type
String
number
object ( Array )
object
boolean
undefined
*/

/* console.log("mohamed")
console.log(typeof "mohamed")
console.log(typeof 5000)
console.log(typeof 5000.99)
console.log(typeof [10, 15, 17])
console.log(typeof ["Mo", "ha", "med"]) // Object
console.log(typeof {name:"osama", Age:17, country:"Egypt"})
console.log(typeof true)
console.log(typeof false)
console.log(typeof undefined) //undefined
console.log(typeof null) // object */

// variable
// = called assignment operator
// == equality operator (check only the value) // 100 = "100" // true
// === strict equality (check value and data type) // 100 = "100" // false 
// you can write var or not
/* var user = "osama";
user = "ahmed";
var age = 37; */
// you can group var
/* var user2 = "ahmed",
  age2 = 30;
console.log(user);
console.log(age);
console.log(user2, age2); */

// when you create Element in HTML files and give it an ID this ID is considered as Variable in JS
/* window.onload = function () {
  console.log(hello)
} */
// console.log(hello)
// to change content of html
// hello.innerHTML = "option"

/* loosely typed when you don???t have to explicitly specify types of variables and objects.
A strongly typed language on the contrary wants types specified. */

// JavaScript is loosely type that means you dont have to say this is int or this is num 
// for example python will give you Error you can not concatenate int to string but JS no you can
// let x = 20;
// let z = x + "dot"
// console.log(z)

// you can't start var name with no. or special characters

/*  
var 
-- Redeclare (Yes)
-- Access Before Declare (undefined)
-- Variable Scope Drama [Added To Window object] (Yes)
-- Block or function Scope (not block Scope) ( Yes Function Scope)

Let 
-- Redeclare (No)
-- Access Before Declare (Error)
-- Variable Scope Drama [Added To Window object] (No)
-- Block or function Scope (Yes)

Const 
-- Redeclare (No)
-- Access Before Declare (Error)
-- Variable Scope Drama [ Added To Window object] (No)
-- Block or function Scope (Yes)

*/

// Redeclare with var will override and give you last value but let and const will give you Error
/* const a = 1;
const a = 2;
console.log(a) */

// Access Before Declare with variable will give you undefined Error but with let and Const will give Error ( cannot access 'a' before intialization)
/* console.log(a)
let a = 2; */

// variable Scope Drama meaning of added to window object (variable will be added as properity to window object)
// var a = 30;
// console.log(window.a)


// difference between let and const that with const you can not assign a new value for variable
// let x = 10; x= 100; //ok | const x =10; x = 100; // Error

/*
Function Scope: When a variable is declared inside a function,
it is only accessible within that function and cannot be used outside that function.

Block Scope: A variable when declared inside 
the if or switch conditions or inside for or while loops,
are accessible within that particular condition or loop.
To be consise the variables declared inside the curly braces are called as within block scope.
*/

// Hint difference between declaring variable inside loop with let and var
// for (let i = 0; i < 3; i++){
// declaring variable here with var without value every cycle will not change it's value to undefined like let
//     var index;
//     console.log(index)
//     index = 5;
//     console.log(index)
// }

// for (let i = 0; i < 3; i++){
//     // here we cant use let because every cycle let index should give you Error but in loop update index value with undefined
//     let index;
//     console.log(index)
//     index = 5;
//     console.log(index)
// }

// you can create you own global object ( myGlobals = {} | myGlobals.variableName = 10;)

// you can add single quote inside double quot or vice versa but you can't add double inside double or single inside single
// console.log('Elzero web "school"');
// if you want to ignore that you can add \ ( Charachter Escape Sequences)
// console.log("Elzero Web \"School\"");
// console.log("\\");
// if you want to line continue  you can add \
/* console.log("Elzero \
web \
School") */
// if you want new line  you can add \n
// console.log("Elzero \n Web \n School" )

/* 
\n => new line
\t => horizontal tab
\v => vertical tab
\r => carriage return (like \n in old Mac)
*/

// Concatenation +

// let a = "We Love"
// let b = "JavaScript"
// documet to write at HTML file but console to write at console
// for new line we should add <br/> not \n because we are writing in HTML file
// document.write(a + " " + b + "<br/>");
// document.write(a + " " + b );
// when you use console it will add space automatically but document not
// console.log(a,b);

/* let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming"; */

/* console.log(a + " " + b + "\n" + c + " " + d ) */
// console.log( a , b + "\n" + c , d )
// this from ES6 `` called Template Literals
// here no need for Escpaing you can write "" or '' but \ you should write \\
/* console.log(`${a} ${b} ${c} ${d}`)
console.log(`\\${a} '${b}\n${c} "${d}`)
console.log(`${a} ${ 100 + 5}
${c} ${d}`) */

// This is ES6 if you want to change it to legacy code visit : https://babeljs.io/
/* let Title = "Elzero";
let Para = "Elzero Web School";

let Template = `
<div class="card">
  <div class="child">
    <h2>${Title}</h2>
    <p>${Para}</p>
  </div>
</div>
`
document.write(Template) */

// ------Challenge---------

/* let title_zero = "Elzero" , description_zero = "Elzero Web School" , date_zero = "30/01" 
let html = `
<div class="parent"> 
  <h3>${title_zero}</h3>
  <p>${description_zero}</p>
  <span>${date_zero}</span>
</div>
` */
// let four = html.repeat(4)

// document.write(`${html.repeat(4)}`)
// document.write(html.repeat(4))

// ------End Challenge---------

/* console.log(10 + 20);
console.log(10 + "osama");
console.log(10 - 20);
//Error NaN (not a number)
console.log(10 - "osama");
console.log(typeof NaN); //number
console.log(10 * 20);
console.log(10 / 20);
console.log(10 / 3);
// % called Modulus 
console.log(10 % 3);
console.log(2 ** 4); */

// // NaN !== NaN
// console.log(isNaN(2)) //false
// console.log(isNaN("Soliman")) //true
// console.log(isNaN("2")) // false
// console.log(NaN === NaN) //false

// var num = 1;
// pre increment ++num (in console and in browser will add 1 then will print variable)
// Post increment num++ ( in console and in browser will print variable then add 1)
// pre decrement --num (in console and in browser will remove 1 the will print vaiable)
// Post decrement num-- ( in console and in browser will print variable then remove 1)

// unary plus ( return Number if it's not number)
// console.log(+100)
// console.log(+"100")
// console.log(9.9999)
// console.log(+0xff)
// console.log(+null)
// console.log(+false)
// console.log(+true)
// console.log(+"Osama") //NAN

// unary Negation
// console.log(-100)
// console.log(-"100")
// console.log(-"-100")
// console.log(-9.9999)
// console.log(-0xff)
// console.log(-null)
// console.log(-false)
// console.log(-true)
// console.log(-"Osama")

/* console.log(Number("100"))
a = "100"
a = Number ("100")
console.log(typeof a) */

// // Type coercion
// let a = "10";
// let b = 20;
// let c = true;
// let d = "osama";
// console.log(a + b);
// console.log(a - b);
// // Type cating (Type coercion) (a + b) will give 1020  + here has two meanings concatinate or plus
// // and a is string , b is number so will give you 1020
// // but - has only one meaning minus so will consider "10" as number
// console.log(+a + b);
// console.log(Number(a) + b);
// console.log(d - b);
// console.log(+"") // 0
// console.log("" - 2)
// console.log(true - 2)
// console.log(false - 2)
// console.log(false - true)
// // here Type coercion convert true to string because we added a + b and a is string
// console.log( a + b + c)
// console.log( +a + b + c)
// // here Type coercion convert true to number
// console.log( b + c) // 21
// console.log( a + c) // 10true
// console.log(true)
// true will change to no. if all number and will change to string if one of varaibles is string

// let a = 10;
// a = a + 20;
// a = a + 70;
// // a += 100; means a = a + 100;
// a += 100;
// a -= 50;
// a /= 60;
// console.log(a);

// ------Challenge---------

// let a = 10;
// let b = "20";
// let c = 80;
// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// let d = "-100"
// let e = "20"
// let f = 30;
// let g = true;
// console.log(-d * +e); //2000
// console.log(++e * ++g + ++f + -d ); //173

// ------End Challenge---------

// console.log(1000000);
// console.log(1_000_000); //Js ignore _ between number ( this called syntactic sugar)
// console.log(1e6); // e = number of zeros
// console.log(10 ** 6);
// console.log(1000000.0);
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// console.log(100);
// console.log((100).toString());
// console.log(100.4.toString());
// console.log(100.4.toFixed());
// console.log(100.5.toFixed());
// console.log(100.555555555.toFixed(3));
// console.log(+("100 osama"));
// console.log(Number("100 Osama"));
// console.log(parseInt("100 Osama")); //return 100
// console.log(parseInt("Osama 100 Osama"));//retrun NaN
// but the number should be at the beginning
// console.log(parseInt("100 Osama Osama "));//100
// // + , Number , parseInt all of them will return number but parseInt will return number even
// // if it's number and word parseInt will return only the number but + and Number will return NaN
// console.log(parseInt("100.5 Osama"));
// parseInt(string , base)
// console.log(parseInt("123456", 10)) // decimal
// console.log(parseInt("123456", 2)) // binary 
// console.log(parseInt("123456", 16)) // hexadecimal
// console.log(parseFloat("100.5 Osama"));
// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.5));
// console.log(Number.isInteger(100));
// console.log(Number.isNaN("osama")); //"osama" is string not NAN
// console.log(Number.isNaN("osama" / 2));
// console.log(Number.isNaN(100));
// console.log(isNaN(100));

// console.log(Math.round(99.4)); //99
// console.log(Math.round(99.5)); //100
// console.log(Math.ceil(99));
// console.log(Math.ceil(99.2)); //100
// console.log(Math.floor(99.9)); //99
// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));
// console.log(Math.pow(2,4)) // like console.log(2**4)
// console.log(2**4)
// console.log(Math.random())
// console.log(Math.trunc(99.5)) //99
// // difference between trunc and floor that trunc will remove 0.5 only but floor will a smaller no.
// console.log(Math.trunc(99.5))
// console.log(Math.floor(99.5))
// console.log(Math.trunc(-99.5)) // return -99
// console.log(Math.floor(-99.5)) // return -100
// difference between ceil and round that ceil will return biggest no. only but round will return no. no matter - or +.
// console.log(Math.ceil(99.4))
// console.log(Math.round(99.4))
// console.log(Math.ceil(-99.6)) // return -99
// console.log(Math.round(-99.6)) // return -100

// Math.random() give you number from 0 to < 1
// to give it a range you have two options:

// 1st Option range from 0 to max 
// function randomMax(max) {
//   return Math.floor(Math.random() * max)
// }
// console.log(randomMax(5))

// 2nd Option from min to max 
// function randomMinMax(min,max) {
//   return Math.floor(Math.random() * (max - min) + min)
// }
// console.log(randomMinMax(5,10))

// ------Challenge---------

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Number.parseInt(Math.min(a, b, c, d)));
// console.log(Math.round(Math.min(a, b, c, d)));

// console.log(a ** Math.round(d));

// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Number.parseInt(d));

// // toFixed return string because it's from toString family
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); //66.67 string
// console.log(Number((Math.floor(b) / Math.ceil(d)).toFixed(2))); //66.67 number
// console.log(Math.round(Math.floor(b) / Math.ceil(d))); //67 number

// Math.abs return absolute value of a number
// console.log(Math.abs(-5)) // output 5

// ------End Challenge---------

// let theName = "  Ahmed  ";
// console.log(theName);
// console.log(theName[2]);
// console.log(theName.charAt(2));
// console.log(theName.trim());
// console.log(theName.length);
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theName.trim().charAt(2).toUpperCase());

// let a = "Elzero Web School";
// let b = "Elzero|Web|School";
// // indexOf (Value, Start[] 0)
// console.log(a.indexOf("Web")); //if not found return -1
// console.log(a.indexOf("Web", 8)); //return -1
// console.log(a.lastIndexOf("Web"));
// console.log(a.indexOf("o"));
// // lastIndexOf (Value, Start) default of start is ( length -1 )and dont accept negative value  
// console.log(a.lastIndexOf("o"));
// console.log(a.lastIndexOf("o", 15));
// // Start , End ( not including the End)
// console.log(a.slice(0, 6));
// console.log(a.slice(2, 6));
// - value count from -1 not 0
// console.log(a.slice(-5));
// console.log(a.slice(-5, -3));
// console.log(a.repeat(5));
// // first value is separetor and 2nd value is limit ( no. of split) and return Array
// console.log(a.split(" "));
// console.log(b.split("|" , 2));

// let a = "Elzero Web School";
// // difference between substring and slice 
// // substring does not accept negative value
// // slice if start > end will return empty string but substring will swap start and End
// // start , End
// console.log(a.substring(2));
// console.log(a.substring(2, 6));
// console.log(a.slice(6, 2)); // Empty String
// console.log(a.substring(6, 2)); //same output
// console.log(a.substring(-10)); //here doesn't accept - value and will consider it 0
// console.log(a.substring(16));
// console.log(a.substring(a.length - 5, a.length - 3));
// // difference between substr and substring
// // substring have Start and End
// // substr have start and the count not end
// // substr accept negative value
// console.log(a.substr(-3));
// console.log(a.substring(-3)); // does not accept negative value and consider it 0
// console.log(a.substr(-5, 2));
// // difference between indexOf and includes
// // indexOf will return value of index ("web") if not found return -1
// // includes will return true or false ( found or not found)
// // both you can add End Value
// console.log(a.includes("Web"));
// console.log(a.includes("Web",8));

// console.log(a.startsWith("E"));
// // 2nd value is start
// console.log(a.startsWith("E", 2));
// console.log(a.startsWith("z", 2));
// console.log(a.endsWith("o"));
// // 2nd value is length
// console.log(a.endsWith("o", 6));

// ------Challenge---------

// let a = "Elzero Web School"

// console.log(a.charAt(2).toUpperCase() + a.slice(3,6));
// console.log(a.charAt(13).toUpperCase().repeat(8));
// console.log(a.split(" ", 1));
// console.log(a.substr(0, 6) + a.substr(10));
// console.log(a.charAt(0).toLowerCase() + a.slice(1, -1).toUpperCase() + a.slice(-1).toLowerCase())

// ------End Challenge---------


// = assignment operator
// == Equal operator
// === Identical (Strict)
// !== Not Identical
// > larger than
// >= larger than or equal
// < smaller than
// <= smaller than or equal
// ! not
// && and
// || or


// console.log(10 == "10"); // compare value not compare type of data
// console.log(10 != "10"); // compare value not compare type of data
// console.log(10 === "10"); // compare value and type
// console.log(10 !== "10"); // compare value and type
// console.log(10 > 10);
// console.log(10 >= 10);
// console.log(10 < 10);
// console.log(10 <= 10);

// console.log(typeof"Osama" === typeof"Ahmed");

// console.log(!true);
// console.log(!(10 == "10"));
// console.log(10 == "10" && 10 > 8 && 10 >= 10);
// console.log(10 == "10" || 10 > 50 || 10 >= 10);

// let price = 100;
// let discount = true;
// let discount = false;
// let discountAmout = 30;
// let country = "Egypt";
// // let country = "Syria";
// // let country = "USA"
// let student = true;

// console.log(price);

/* if (condition) {
  block of code
} */

// if (discount === true) {
//   // price = price - 30;
//   price -= discountAmout;
// } else if (country === "Egypt") {
//   if (student === true) {
//     price -= discountAmout + 30;
//   } else {
//     price -= discountAmout + 10;
//   }
// } else if (country === "Syria") {
//   price -= discountAmout + 20;
// } else if (country === "KSA") {
//   price -= discountAmout + 30;
// } else {
//   price -= discountAmout - 20;
// }

// console.log(price);

// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;

// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }

// Ternary Condition Operator
// //  condition ? if true : if false

// theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "Male" ? "Mr" : "Mrs";
// console.log(result)

// document.write(result);
// console.log(theGender === "Male" ? "Mr" : "Mrs");
// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);
// console.log(`Hello ${result} ${theName}`);

// theAge < 20
//   ? console.log(20)
//   : theAge > 20 && theAge < 60
//   ? console.log(" 20 to 60")
//   : theAge > 60
//   ? console.log("larger than 60")
//   : console.log("unknown");

// let price = 0;
// //  || logical or
// //  will return value after || if value ( undefined or null or empty string "" or false or falsy value like 0)
// console.log(`The Price IS ${price || 200}`);
// // Nullish Coalescing Operator ??
// //  will return value after ?? if value ( undefined or null )but not (false or falsy value like 0)
// console.log(`The Price IS ${price ?? 200}`);

// // Falsy Values
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(false))
// console.log(Boolean(null))
// console.log(Boolean(-0))
// console.log(Boolean(NaN))
// console.log(Boolean(undefined))
// console.log(Boolean(0n))


// with && falsy value will return and ignore anything after it but true value will return after &&
// console.log( false && "dog") // false
// console.log( true && "dog") // dog
// console.log( 0 && "dog") // 0
// console.log( 1 && "dog") // dog

// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("unknown");
// }

// ------Challenge---------

// let st = "Elzero Web School";

// if (`${st.length + st.length}` === "34") {
//   console.log("Good");
// }

// if ((st.length + st.length).toString() === "34") {
//   console.log("Good");
// }

// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }

// if (typeof st.length !== "string") {
//   console.log("Good")
// }

// if (typeof st.length === "number") {
//   console.log("Good");
// }

// if ( st.slice(0, 6) + st.slice(0, 6)  === "ElzeroElzero") {
//   console.log("Good");
// }
// if ( st.slice(0, 6).repeat(2)  === "ElzeroElzero") {
//   console.log("Good");
// }

// ------End Challenge---------

// let day = 2;

// // variable and case should be same type and same value (compare by identical operator === )

// switch (day) {
//   // default:
//   //   console.log("Unknown Day")
//   //   break
//   case 0:
//     console.log("Saturday")
//     break;
//   case 1:
//     console.log("Sunday")
//     break;
//   case 2:
//   case 3:
//     console.log("Monday")
//     break;
//   default:
//     console.log("Unknown Day")
// }

// in switch case you can not use logical or || just write two cases like case 2: case 3:
// in switch you can't combine between two condition like (typeof num = "number" && Number.isInteger(num)) 
// in switch you can use two variable like ( switch (var1 && var2) or | or many other characters but , will not work ) 
// if you want to put default at begining you should write break inside if you didn't it will give the next value no matter if it match case or not
// switch (true) (from assignments)
// function calculate(firstNum, secondNum, operation) {
//   switch(true) {
//       case firstNum === undefined:
//           console.log("First Number Not Found")
//           break
//       case secondNum === undefined:
//           console.log("Second Number Not Found")
//           break
//       case operation === undefined:
//           console.log(firstNum + secondNum)
//           break
//       case operation === "add" :
//           console.log(firstNum + secondNum)
//           break
//       case operation === "subtract":
//           console.log(firstNum - secondNum)
//           break
//       case operation === "multiply":
//           console.log(firstNum * secondNum)
//           break
//   }
// }
// calculate(20)
// calculate(20,10)
// calculate(undefined,10)
// calculate(20,10,"add")
// calculate(20,10,"subtract")
// calculate(undefined,10,"subtract")
// calculate(20,10,"multiply")

// default like else in if condition (From Assignments )
// function ageInTime(age){
//   switch(true) {
//       case age > 110:
//       case age < 10:
//           console.log("Age Out Of The Range")
//           break
//       default:
//           console.log(`Months => ${age * 12}
// Days => ${age * 12 * 30}
// Hours => ${age * 12 * 30 * 24}
// Minutes => ${age * 12 * 30 * 24 * 60}
// Seconds => ${age * 12 * 30 * 24 * 60 * 60}
//           `)
//           break
//   }
// }
// ageInTime(33)

// let job = "Developer";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// console.log(salary);

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     break;
//   case "IT" || "Support" :
//     salary = 6000;
//     break;
//   case "Developer" || "Designer" :
//     salary = 7000;
//     break;
//   default:
//     salary = 4000;
// }

// console.log(salary)

// let holidays = 0;
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = "NO MONEY";
//     console.log(`My Money is ${money}`);
// }

// if (holidays === 0) {
//   money = 5000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 1 || holidays === 2) {
//   money = 3000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 3) {
//   money = 2000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 4) {
//   money = 1000;
//   console.log(`My Money is ${money}`);
// } else {
//   money = "NO MONEY";
//   console.log(`My Money is ${money}`);
// }

// let myFriends = ["Mohamed", "Ahmed", "Soliman", ["Marwan", "Ali"]];
// let me = "soliman"
// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[0][2]}`);
// console.log(`Hello ${myFriends[3][1]}`);
// console.log(`Hello ${myFriends[3][1][2]}`);
// console.log("Hello " + myFriends[2]);

// console.log(myFriends);
// myFriends[1] = "Hussein";
// console.log(myFriends[3])
// console.log(myFriends);
// myFriends[3] = "same7";
// console.log(myFriends);

// console.log(Array.isArray(myFriends)) //true
// console.log(Array.isArray(me)) //false ( string considered as list but give false with Array check)

// let myFriends = ["Mohamed", "Ahmed", "Soliman", "Hussein"];

// console.log(myFriends.length); //4
// // you can use myFriends.length to know where to put the input at end of Array
// myFriends[myFriends.length] = "Ali";
// // you can use (myFriends.length -1) to update last value in Array
// myFriends[myFriends.length - 1] = "Ali";
// //if you put location more than length will put empty spaces then will add "Ali"
// myFriends[6] = "Ali";
// // if you change myFriends.length manually will remove excess
// myFriends.length = 2;
// console.log(myFriends);

// let myFriends = ["Mohamed", "Ahmed", "Soliman", "Hussein"];

// console.log(myFriends);
// // unshift method to add elements at the begining of Array
// myFriends.unshift("Mr", "Dr");
// console.log(myFriends);
// push method to add elements at the End of Array
// myFriends.push("Mr", "Dr");
// console.log(myFriends);
// console.log(myFriends.push("Mr", "Dr")); // return the new length of Array
// // shift will remove first element from Array and save it and you can use it later
// myFriends.shift();
// console.log(myFriends);
// let first = myFriends.shift();
// console.log(first);
// // pop will remove last element from Array and save it and you can use it later
// myFriends.pop();
// console.log(myFriends);
// let last = myFriends.pop();
// console.log (last)

// unshift and push will return length of Array after adding the new elements into the Array
// shift and pop will return removed element 

// let myFriends = ["Mohamed", "Ahmed", "Soliman", "Hussein", "Ahmed"];

// console.log(myFriends);
// // if there is more than one "Ahmed" in the Array will give you index of first one only (also in string)
// console.log(myFriends.indexOf("Ahmed"));
// // 2nd value is start point of searching (default value array.length -1), if there is no "Ahmed" will give you -1
// console.log(myFriends.indexOf("Ahmed", 2));
// // lastIndexOf will search from the end (opposite direction) of Array so he will find the 2nd"Ahmed"
// // meaning of opposite direction is if you start search from index 0 will give you -1 because
// // it will search in opposite direction and will not find anything
// console.log(myFriends.lastIndexOf("Ahmed"));
// // 2nd value is start point of searching it's negative because we will search from the End or positive value no problem but in string does not accept negative value
// console.log(myFriends.lastIndexOf("Ahmed", -2));
// // difference between includes and indexOf : includes return true or false but indexOf give you index no. (also in string)
// console.log(myFriends.includes("Ahmed"));

// if (myFriends.indexOf("Ahmed", 5) === -1) {
//   console.log("Not Found")
// }

// let myFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

// console.log(myFriends);
// // in sorting you will find that 20 after 1000 because he will sort 1,2,3,4,.... and A,B,C,D...
// console.log(myFriends.sort());
// // reverse will only reverse not matter about who bigger than who
// console.log(myFriends.reverse());

// let myFriends = ["Mohamed", "Ahmed", "Soliman", "Hussein", "Ahmed"];
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3));
// // with negative value will count from End but slicing direction normal not opposite like lastIndexOf
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1, -2));
// // slicing Method return a new Array and will not effect original Array
// // that's why console.log(myFriends); will give you original Array without changes
// console.log(myFriends);
// // here will remove 1st element from original Array "mohamed" not "sameer"
// splice (start, delete count)
// myFriends.splice(0, 1, "sameer", "samara");
// // splicing Method will change the original Array
// console.log(myFriends);

// let myFriends = ["Mohamed", "Ahmed", "Soliman", "Hussein", "Ahmed"];
// let myNewFriends = ["Samar", "Sameh"]
// let schoolFriends = ["Haytham", "Shady"]
// // you can concatenate Arrays or Elements or Numbers
// let allFriends = myFriends.concat(myNewFriends,"Gamal",["Mans, Papo"],schoolFriends, 1)
// console.log(allFriends)

// array.flat() to remove nested arrays and merge it to parent array
// let myFriends = ["Mohamed", "Ahmed", ["Soliman",["nested", "Array"], "Hussein"], "Ahmed"];
// console.log(myFriends)
// console.log(myFriends.flat())
// // array.falt does not change original array
// myFriends[2].flat()
// console.log(myFriends.flat())
// myFriends.splice(2,1,...myFriends[2].flat())
// console.log(myFriends)

// Array.of() and Array()
// Array.of(7) will create Array with one element 7
// Array(7) will create empty array with length 7


// The join() method creates and returns a new string by concatenating all of the elements
//  in an array (or an array-like object), separated by commas or a specified separator string
// console.log(allFriends.join()) // sepertaor , 
// console.log(allFriends.join("")) // no seperator
// // you can choose the separetors
// console.log(allFriends.join(" @ "))

// --------Challenge----------

// let zero = 0;
// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// ["Osama","Elham","Mazero","Ahmed"]
// let popped = my.reverse().pop()
// let sl = my.slice(-counter)
// sl.push(popped)
// console.log(sl)

//  --another Answer--
// console.log(my.slice(zero, ++counter).reverse())

// ["Elham", "Mazero"]
// my = my.slice(zero, counter)
// my.shift()
// console.log(my.reverse())

//  --another Answer--
// console.log(my.slice(++zero, counter).reverse())

// "Elzero"
// my.shift()
// let Mazero = my.shift()
// Mazero = Mazero.split("")
// Mazero.shift()
// Mazero.shift()
// let Zero = Mazero.shift() + Mazero.shift() + Mazero.shift() + Mazero.shift()
// let Elham = my.shift()
// Elham = Elham.split("")
// let El = Elham.shift() + Elham.shift()
// console.log(El + Zero)

//  --another Answer--
// my = my[++zero]
// my = my.split("")
// // splice only work with Array so you should split String first
// my.splice(--zero, --counter, "E", "l")
// my = my.join("")
// console.log(my)

//  --another Answer--
// console.log(my[--counter].slice(zero, counter) + my[++zero].slice(counter))

// "rO"
// my.shift()
// let Mazero = my.shift()
// Mazero = Mazero.split("")
// Mazero = Mazero.slice(counter)
// Mazero.shift()
// let r = Mazero.shift()
// let O = Mazero.pop()
// console.log(r + O.toUpperCase())

//  --another Answer--

// console.log(my[++zero].slice(++counter)[--zero] + my[++zero].slice(counter)[zero].toUpperCase())

// --------End Challenge----------

/* 
Steps of for loop 
[1] initialExpression => let i =0; 
    let i = 0 ; excuted only one time a the beginning of for loop and you can 
    declare another variables inside then step
[2] conditionExpression => i < 10;
[3] excute Statment
[4] incrementExpression 
[5] return to step [2]
*/

// for ([initialExpression][conditionExpression][incrementExpression]) {
  // statment
// }

// for (let i = 0; i < 10; i++){
//   console.log(i)
// }

// let my = [1, 2, "Ahmed", "Mazero", "Elham", "Osama", "Gamal"];
// for (let i = 0; i < my.length; i++) {
//   console.log(my[i]);
// }
// let onlyNames = [];

// for (let i = 0; i < my.length; i++) {
//   if (typeof my[i] === "string") {
//     onlyNames.push(my[i])
//   }
// }

// console.log(onlyNames)

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021];

// for (let i =0; i < products.length; i++) {
//   console.log("#".repeat(10))
//   console.log(`# ${products[i]}`)
//   console.log("#".repeat(10))
//   console.log("Colors: ")
//   for ( let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`)
//   }
//   console.log("Models: ")
//   for ( let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`)
//   }
// }

// let products = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   if (products[i] === "Pen") {
//     break;
//   }
//   console.log(products[i]);
// }

// to check if it's a string or not
//if (isNaN(products[i])) // typeof products[i] === "string"

// to check if it's a number or not
//if (Number.isInteger(products[i])) // typeof products[i] === "number"

// continue means skip everything in this loop 

// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === "number") {
//     continue;
//   }
//   console.log(products[i]);
// }

// identifiers are used to name variables and functions
// and to provide labels for certain loops in JavaScript code 

// with identifier you can Break or Continue mainLoop from nestedLoop

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedloop: for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "Green" ) {
//       break mainLoop;
//     }
//   }
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i])
// }

// // another way to write loop
// let i =0;
// for (;;) {
//   console.log(products[i]);
//   i += 2;
//   if (i >= products.length) {
//     break;
//   }
// }

// here i added i >= products.length because i increased by 2 and will not i === products.length
// because length 5 and i  will be 2,4,6

// i ++ => i =  i + 1 => i+= 1
// i += 2

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 5;

// document.write(`<h1>Show ${showCount} Products</h1>`)

// for (let i =0; i < showCount; i++) {
//   document.write(`<div>`)
//   document.write(`<h3>[${i + 1}]${products[i]}</h3>`)
//   for ( let j = 0; j < colors.length; j++) {
//     document.write(`<p>- ${colors[j]}</p>`)
//   }
//   document.write(`<p>- ${colors.join(" | ")}</p>`)
//   document.write(`</div>`)
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];

// let i = 0;
// while  (i < products.length) {
//   console.log(products[i])
//   i++
// }

// let i = 0;
// while  (i < 10) {
//   console.log(i)
//   i++
//   if (i === 3) {
//     break;
//   }
// }

// Here will print 0 - 9  
// let i = 0;
// while (i < 10) {
//   console.log(i)
//   i++
// }

// Do-While

// will print 0 because do will print 0 then check the condition on while
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (false)

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10)


// ------Challenge------

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia"
// ];

// let i = 0 ;
// for (;i < myAdmins.length;i++ ){
//   if (myAdmins[i] === "Stop") {
//     document.write(`<div>We Have ${i} Admins</div>`);
//     break;
//   }
// }

// console.log(i)
// for (let f = 0; f < i;f++) {
//   document.write(`<hr>`)
//   document.write(`<h3>The Admin For Team ${(f + 1)} Is ${myAdmins[f]} </h3>`)
//   document.write(`<h1>Team Members</h1>`)
//   let counter = 0;
//   for (let k = 0; k < myEmployees.length; k++) {
//     if (myAdmins[f][0] === myEmployees[k][0]) {
//       counter++;
//       document.write(`<h4>- ${counter} ${myEmployees[k]}</h4>`);
//     }
//   }
// }

// ------End Challenge------

// function sayHello(userName , age) {
//   if (age < 18) {
//     console.log(`App is Not Suitable For You`)
//   }else {
//     console.log(`Hello ${userName} Your Age is ${age}`);
//   }
// }
// sayHello("Soliman",33);

// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end ; i++) {
//     if ( i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// generateYears(1982, 2022, 2000)

// function sayHello (userName) {
//   return `Hello ${userName}`
// }

// // console.log(sayHello("Soliman"))
// let result = sayHello("Soliman")
// console.log(result)

// after return you can not write any Code it will not run

// function calc(num1, num2) {
//   return num1 + num2;
//   console.log("ERROR")
// }
// calc(1, 2)

// let result = calc( 10 , 20 );

// console.log(result + 100);

// return here like break
// function generate(start, end){
//   for( let i = start; i <= end; i++) {
//     if ( i === 15) {
//       return `Error`
//       // break
//     }
//     console.log(i)
//   }
// }

// generate(10, 20)
// console.log(generate(10, 20))

// change default value of parameters
// you can write default value by two ways 
// 1st way write it directly after parameter like age = "Es6"
// 2nd way write if inside block of code like age = age || "Unknown"
// function sayHello(userName ="Es6", age = "Es6" ) {
//   // if ( age === undefined) {
//   //   age = "ERROR";
//   // }
//   // age = age || "Unknown"
//   return `Hello ${userName} Your Age is ${age}`;
// }

// console.log(sayHello());

// ...numbers called rest parameters ( its an Array and now you can add as many Arguments as you need you don't need to add same no. of parameters)
// rest parameter should be last parameter if you have more than one parameters
// function calc(...numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]
//   }
//   return `Final Result is ${result}`
// }

// console.log(calc(10, 20,30))


// to skip argumet you can create varaible with undefined value to use it instead of arguments
// let _ = undefined;

// function showInfo(us = "Un", age = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`)
//   document.write(`<p>Age: ${age}</p>`)
//   document.write(`<p>Our Rate: $${rt}</p>`)
//   if (show === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`)
//     }else {
//       document.write(`<p>Skills Not Found</p>`)
//     }
//   }else {
//     document.write(`<p>Skills Is Hidden</p>`)
//   }
//   document.write(`</div>`);
// }

// showInfo("Soliman", 33, 20,_,"JS", "HTML", "CSS");

// --------Challenge--------

// function showDetails (a, b, c) {
//   let Name;
//   let Age;
//   let Av;
//   typeof a === "string" ? Name = a : typeof a === "number" ? Age = a : a === true ? Av = "You Are Available For Hire" : a === false ? Av = "You Are Not Available For Hire" : a = null;
//   typeof b === "string" ? Name = b : typeof b === "number" ? Age = b : b === true ? Av = "You Are Available For Hire" : b === false ? Av = "You Are Not Available For Hire" : b = null;
//   typeof c === "string" ? Name = c : typeof c === "number" ? Age = c : c === true ? Av = "You Are Available For Hire" : c === false ? Av = "You Are Not Available For Hire" : c = null;
//   return `Hello ${Name}, Your Age Is ${Age}, ${Av}` ;
// }

// console.log(showDetails(40, "Ahmed", false))

// ---Another Answer-----
// function showDetails(...parameters) {
//   let one, two, three;
//   document.write(`<div>`);
//   for (let i = 0; i < parameters.length; i++) {
//     let s = typeof parameters[i];
//     switch (s) {
//       case "string":
//         one = parameters[i];
//         break;

//       case "boolean":
//         if (parameters[i] === true) {
//           three = "you are avilable for hire";
//         } else {
//           three = "you are not  avilable for hire";
//         }
//         break;

//       case "number":
//         two = parameters[i];
//         break;
//     }
//   }

//   document.write(
//     `<p> hello ${one} , yor age is ${two} , your status it ${three} </p>`
//   );

//   document.write(`</div>`);
// }

// showDetails(true, 25, "kenan");
// showDetails(25, "kenan", false);
// showDetails(true, "kenan", 25);
// showDetails("kenan", true, 25);

// --------End Challenge--------

// you can create function after console.log no problem
// But with Anonymous Function(Without name) ( console.log should be after it) 
// because we declare Anonymous Function with variable and you can access variable before intialization



// console.log(calc(1, 2))

// function calc (a, b) {
//   return a + b;
// }

// // Anonymous Function
// let Calculator = function (a, b) {
//   return a + b;
// }
// console.log(Calculator( 1 , 2));

// document.getElementById("show").onclick = function () {
//   console.log("show")
// }

// function sayHello () {
//   console.log("Hello, Osama")
// }

// here if we write sayHello() the function will run once you reach this line of code
// but we wrote sayHello to reference to this function and only trigger the function once you click 
// document.getElementById("show").onclick = sayHello;

// setTimeout(function () {
//   console.log("good");
// }, 2000);

// function sayMessage(fName, lName) {
//   let message = "Hello";
//   // Nested Function
//   function concatMsg () {
//     message = `${message} ${fName} ${lName}`
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Mohamed", "soliman"))


// function sayMessage(fName, lName) {
//   let message = "Hello";
//   // Nested Function
//   function concatMsg() {
//     function getFullName () {
//       return ` ${fName} ${lName}`
//     }
//     return `${message}  ${getFullName ()}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Mohamed", "solimnan"));

// // Arrow Function
// you can remove () if you have only one parameters if more than one parameter or no parameters you need ()
// you need {} and return if you have more than one line of processing inside function

//----Limitaion of Arrow Function---- (later after finish JS course)
// * Does not have its own bindings to this or super, and should not be used as methods.
// * Does not have new.target??keyword.
// * Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// * Can not??be used as constructors.
// * Can not use yield, within its body.
// * Can not return object because JS will be confused between {} of function and {} of object
// * Does not have arguments object

// to solve last limitation add parenthesis
// const sayName = () => ({
//   name: "Jonh Doe",
//   age: 26,
// });
// console.log(sayName().name);


// let a =10;
// var b =20;
// var obj = {
//   c : 30
// }
// here this will refer to window object and var in global scope so will find this.b (window.b)
// but let is block scope so a in local scope not in global scope so will no find this.a
// function arrow(){
//   console.log(this.a)
//   console.log(this.b)
//   console.log(this.c)
// }
// arrow()
// arrow.call(obj)

// let arrow = () => console.log(this.c)
// arrow()
// arrow.call(obj)

// let print =() => 10; // let print = function () { return 10;};
// console.log(print())

// let print = function (num) {
//   return num;
// }
// let print = (num) => num; 
// let print = num => num; //you can remove () if you have only one parameters
// console.log(print(100))

// here we used {} and return with arrow function
// let a = 10;
// let b = 20;
// let curly = (a, b) => {
//   let c = 30;
//   return a + b + c
// } 
// console.log(curly(a,b))

// let print = function (num1, num2) {
//   return num1 + num2;
// }
// let print = (num1, num2) => num1 + num2;
// console.log(print(2, 5))

// Currying Function Technique :
// Currying is when you break down a function that takes multiple arguments
// into a series of functions that each take only one argument.

// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//         };
//     };
// }

// let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

//   console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
//   console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

  // Partial Function:
  // is when a function has been given some, but not all, of its arguments

// let obj = {
//   theName : "Soliman"
// }

// function hello (place) {
//   console.log(`Hello ${this.theName} from ${place}`)
// }
// let hi = hello.bind(obj,"EGYPT")
// hi()

// we can add null instead of object to take (this) from
// function sum (x,y) {
//   console.log(x + y) 
// }
// // you can write sum.bind(null,5,10) or pass 2nd argument when you call the new function like bindSum(10)
// let bindSum = sum.bind(null,5)
// bindSum(10)


// Scope ( Global And Local Scope)

// var a = 1;
// let b = 2;

// // function will search first at local scope then if he did not find them will search outside
// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function From Local ${a}`);
//   console.log(`Function From Local ${b}`);
// }

// // can't take local Variables from Function
// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);
// showText();


// var is not Block scope ( the value change globally )
// with statments or loops var will be global and you can access it from outside but function not
// let is Block Scope
// with statments or loops or function you can't access let or const
// var x = 10;
// let x = 10;

// function Scope
// function calc() {
//   var x = 50;
//   // let x = 50;
// }
// console.log(x)

// block scope
// let c =10;
// var d = 10;
// for ( i=0; i<3; i++){
//   var a = 10;
//   let b =20;
//   c = 30
//   d = 40
// }
// console.log(a)

// Lexical Scope nested child can take variable from parent but parent can't take from child
// function parent() {
//   let a = 10;
//   function child() {
//     console.log(a);
//     function grand() {
//       console.log(a);
//     }
//     grand();
//   }
//   child();
// }
// parent();

// --------Challenge---------
// to uppercase only first letter  s[0].toUpperCase() + s.slice(1);

// let Names = (...parameters) => `${(typeof parameters[0])[0].toUpperCase() + (typeof parameters[0]).slice(1) } [${parameters.join("],[")}] => Done !`;

// console.log(Names("osama", "Mohamed", "Ali", "Ibrahim"));

// let myNumbers = [ 20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + Number(nums) ;

// let calc = function (one, two, ...nums) {
  // return one + two + Number(nums);
// }
// console.log(calc(10,myNumbers[+false] ,myNumbers[+true]));
// there is a problem in this solution because we can not sum more than one value so check My Challenge
// --------End Challenge----------

// ------My Challenge---------------

// let myNumbers = [ 20, 50, 10, 60];
// let calc = (one, two, ...nums) => { 
//   let sum = one + two;
//   for(i = 0; i < nums[0].length; i++){
//     sum += nums[0][i]
//   };
//   return sum;
// }

// console.log(calc(10, 20, myNumbers))

// console.log([...myNumbers])

// let myNumbers = [ 20, 50, 10, 60];
// let calc = (one, two, ...nums) => { 
//   let sum = one + two;
//   // newNums = Array.from(...nums)
//   // newNums = nums.toString().split(",").map(i=>Number(i))
//   newNums = Object.assign([], ...nums)
//   for(i = 0; i < newNums.length; i++){
//     sum += newNums[i]
//   };
//   return sum;
// }
// console.log(calc(10,20, myNumbers))

// to remove outer array
// console.log(...[[1,2,3,4]])
// to remove outer array and save it to variable
// newArray = Array.from(...[[1,2,3,4]])
// newArray = Object.assign([], ...[[1,2,3,4]])
// console.log(newArray)
// toString will give you the value even if it's inside nested loop
// console.log([[1,2,3,4]].toString())



// console.log([[1,2,3,4]].toString().split(",").map(i=>Number(i)))
// console.log([[1,2,3,4]].toString().split(",").map(Number))
// console.log(Array.from(Array.from("1234"), Number))


// ------End My Challenge---------------

// Higher Order Functions

// Higher-Order Functions:
// which take another function as an argument or return a function

// Currying Function Technique :
// Currying is when you break down a function that takes multiple arguments
// into a series of functions that each take only one argument. 
// All curry functions is higher order functions but curry accept only one argument for each function


// Callback Functions
// In JavaScript, a callback function is a function that is passed into another function
//  as an argument. This function can then be invoked 
//  during the execution of that higher order function (that it is an argument of).
// use cases of callback functions are setTimeout() , setInterval(), waiting for files and higher order function
// However, there are some cases that code runs (or must run) after something else happens 
// and also not sequentially. This is called asynchronous programming.
// https://www.w3schools.com/js/js_asynchronous.asp

// CallBackFunction in for loop and higher order function
// let arr = [0,1,2,3]
// for ( let i =0; i < arr.length; i++) {
//   (function callback(){
//     console.log(arr[i])
//   })()
// }
// arr.map((el)=> console.log(el))

// they are Array Methods
// Map => return a new Array
// Filter => return a New Array ( only with element that have true condition from the callBackFunction)
// reduce => return only one value
// forEach => return nothing
// every => retrun nothing 
// sort => retrun a new Array
// findIndex => return only one Index
// find() => returns the value of the first element that passes a test.return undefined if not found
// some() => like find() but return true or false



// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (let i =0; i < myNums.length; i++) {
//   newArray.push(myNums[i] + myNums[i])
// }
// console.log(newArray)

// Same Idea with Map ( Map Create New Array)
// Syntax map (callBackFunction(Element, Index, Array) {}, thisArg)
// -Element => The current element being processed in the array
// -Index => The index of the current element being processed in the array
// -Array => the Current Array

// let newMapArray = myNums.map(function (element, index, arr) {
//   return element + element;
// })

// Arrow Function with higher order Function
// let newMapArray = myNums.map((element) => element + element);

// Named Function with Higher order function
// function addition (element) {
//   return element + element;
// }
// let newMapArray = myNums.map(addition);

// console.log(newMapArray);

// to change string to Array
// 1 - Array.from("string")
// 2 - "string".split("")
// 3 - [..."string"]

// to change Array to String
// 1 - ["s", "t", "r", "i", "n", "g"].join("") without comma
// 3- .reduce((acc, current) => `${acc}${current}`) without comma
// 2 - ["s", "t", "r", "i", "n", "g"].toString() with comma , 

// let swappingCases = "elZERo";

// let sw = swappingCases.split("").map((ele) => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase() ).join("")
// console.log(sw)

// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let inmus = invertedNumbers.map((ele) => ele = -ele );
// console.log(inmus)

// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let inmus = invertedNumbers.map(function () {
//   return +this
// }, 90);
// console.log(inmus)

// let ignorenumbers = "Elz123er4o";

// isNaN("3") will return false beacause it will consider "3" as a number
// isNaN(parseInt("3")) will return false beacause parseInt("3") return 3 as number
// let ignum = ignorenumbers.split("").map((ele) => isNaN(ele) === true  ? ele : "").join("")
// let ignum = ignorenumbers.split("").map((ele) => isNaN(parseInt(ele)) ? ele : "").join("")

// easy way to use filter | filter like map but return new Array with only element that have true value
// let ignum = ignorenumbers.split("").filter((ele) => isNaN(ele) ).join("")
// console.log(ignum)

// let friends = [ "Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
// let filterFriends = friends.filter((ele) => ele[0] === "A" )
// let filterFriends = friends.filter((ele) => ele.startsWith("A") )
// console.log(filterFriends)

// let numbers = [11, 20, 2, 5, 17, 10];
// let filterNumbers = numbers.filter( (ele) => Number.isInteger(ele / 2))
// let filterNumbers = numbers.filter( (ele) => ele % 2 === 0)
// let filterNumbers = numbers.map ((ele) => Number.isInteger(ele / 2) ? ele : "")
// console.log(filterNumbers)

// let sentence = "I Love Foood code Too Playing Much"
// let filtercode = sentence.split(" ").filter((el) => el.length <= 4).join(" ")
// console.log(filtercode)

// let mix = "A13BS2ZX"

// let filterMix = mix.split("").filter((el) => Number.isInteger(+el)).join("")
// let filterMix = mix.split("").filter((el) => !isNaN(el)).join("")
// let doubleMix = filterMix.split("").map((el) => el*el).join("")
// console.log(doubleMix)

// Reduce ((callBackFunction(Accumulator , Current Element, Current Index, Source Array)), intial Value)
// Acculator => the accumulated value previously returned in the last invocation
// Current Val => The Current element being processed in the array
// Index => The index of the current element being processed in the array.
// starts from index 0 if an initialValue is provided
// Otherwise, it starts from index 1
// Array => The Current Array
// Return only one Value

//without initial Value accumulator is 10 -- current is 20 -- index of current 1 
//with initial Value accumulator is 5 -- current is 10 -- index of current 0 
// let nums = [10, 20, 15, 30];
// let add = nums.reduce((acc,current,index,arr) => acc + current , 5)
// console.log(add)

// let theBiggest = ["Bla", "Propaganda", "other", "AAA", "Battery", "Test"];
// let big = theBiggest.filter((el) => el.length > 7 ).toString()
// let big = theBiggest.reduce((acc, current) => acc.length > current.length ? acc : current )
// let big = theBiggest.reduce((acc, current) => acc.length > current.length ? acc : current ,"aaaaaaaaaaaaaa")
// console.log(big)

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"]

// .reduce((acc, current) => `${acc}${current}`) same like .join("")

// let filterChars = removeChars.filter((el) => el !== "@" ).reduce((acc, current) => `${acc}${current}`)
// console.log(filterChars)

// ForEach ( does not return Anything [undefined]) (Break will not Break the Loop if you want to break use every())
// Syntax ForEach (callBackFunction(Element, Index, Array) {}, thisArg)
// -Element => The current element being processed in the array
// -Index => The index of the current element being processed in the array
// -Array => the Current Array

// you can not break forEach but you can break every() return false like break
// let arr = [1,2,3,4];
// let foreach = arr.forEach((el) => console.log(el))
// let every = arr.every((el) => {
//   if( el > 3) {
//     return false
//   }else {
//     console.log(el)
//     // you should return true
//     return true
//   }
// } )

// another way to break forEach ( using findIndex)
// let ignoreEl = arr.slice(0, arr.findIndex(el => el > 3))
// ignoreEl.forEach(el => console.log(el))

// another way to break forEach ( using Local variable)
// let breakForeach = false;
// arr.forEach((el) => {
//   if (breakForeach) {
//     console.log("hello")
//     return
//   }
//   if(el > 2) {
//     breakForeach = true
//     return
//   }
//   console.log(el)
// })



// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div")

// allLis.forEach((el) => el.onclick = function () {
//   // Remove Active from All Elements
//   allLis.forEach((el) => el.classList.remove("active"))
//   // Add Active to This Element
//   this.classList.add("active")
//   // Hide all Divs
//   allDivs.forEach((el) => el.style.display = "none")
// })

// Sort
// The Default sort order is ascending

// let nums = [9,8,7,6,5,4,3,2,1]
// The Default sort order is ascending
// let sortedNum = nums.sort()
// 1 > 0 sort num2 before num1 | -1 < 0 sort num1 before num2 | === 0 keep original order
// let sortedNum = nums.sort((num1,num2) => num1 > num2 ? 1 : -1)
// > 0 sort num2 before num1 |  < 0 sort num1 before num2 | === 0 keep original order
// let sortedNum = nums.sort((num1,num2) => num1 - num2)

// console.log(sortedNum)

// Find() Method
// let arr = [1,2,3,4]
// console.log(arr.find((el) => el > 3))

// Some() Method
// let arr = [1,2,3,4]
// console.log(arr.some((el) => el > 3))
// console.log(arr.some((el) => el > 4))


// ------------diference between forEach and map
// const arr = ["A", "B", "C", "D", , "F"]
// let newArr = arr.map((ele,index) => ele.toLowerCase() ) // 4 will not show up
// let newArr2 = arr.forEach((ele,index) => ele.toLowerCase() ) // 4 will not show up
// console.log(newArr1) // return new Array
// console.log(newArr2) // undefined (forEach does not return anything)



// ------------------------Deep to JS Engine-----------------------------

/* 
JavaScript is an interpreted language, not a compiled language.

A program such as C++ or Java needs to be compiled before it is run. 
The source code is passed through a program called a compiler, 
which translates it into bytecode that the machine understands and can execute. 
In contrast, JavaScript has no compilation step. 
Instead, an interpreter in the browser reads over the JavaScript code, 
interprets each line, and runs it.
Modern browsers use a technology known as Just-In-Time (JIT) compilation, 
which compiles JavaScript to executable bytecode just as it is about to run.
JavaScript engines have two places where they can store data: The memory heap and stack.
Compiled language ??? the source file typically will be ???compiled??? to machine code (or byte code) before being executed.
Interpreted language ??? the source code will be read and directly executed, line by line.
JavaScript is an interpreted language, but that???s not necessarily true.
For Example, the V8 engine, the engine that runs Google Chrome and NodeJS, compiles to native code internally:
V8 increases performance by compiling JavaScript to native machine code before executing it, versus executing bytecode or interpreting it.
Also, Rhino and TraceMonkey use compilation as part of their process
*/

// to understand this read about Closures , Lexical Environment and Excecution Context (link below)
// https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda

/* Execution context has two Phaes : Creation Phase and Execution Phase

Creation Phase :
* Create the global object i.e., window in the web browser or global in Node.js.
* Create the this object and bind it to the global object.
* Setup a memory heap for storing variables and function references.
* Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.
* First, store the variables x and y and function declaration function() in the global execution context.
* Second, initialize the variables x and y to undefined.

Execution Phase :
* executes the code line by line. 
* assigns the values to variables.
* executes the function calls (For each function call, the JavaScript engine creates a new function execution context)

*/

/* Function execution context
The function execution context is similar to the global execution context.
But instead of creating the global object, the JavaScript engine creates the arguments object
that is a reference to all the parameters of the function:

Creation Phase :
* Global Object : arguments
* this: Window
* (parameter) : undefined

Execution Phase :
* Global Object : arguments
* this: Window
* (parameter) : argument value 

*/

/* lexical environment: 
Every time the JavaScript engine creates an execution context to execute the function
or global code, it also creates a new lexical environment to store the variable defined 
in that function during the execution of that function. 

A Lexical Environment has two components:
* ( The environment record ) is the actual place where the variable and function declarations are stored.
* ( The reference to the outer environment ) means it has access
to its outer (parent) lexical environment.

looks like:
lexicalEnvironment = {
  environmentRecord: {
    <identifier> : <value>,
    <identifier> : <value>
  }
  outer: < Reference to the parent lexical environment>
}

When a function completes, its execution context is removed from the stack, 
but its lexical environment may or may not be removed from the memory depending on 
if that lexical environment is referenced by any other lexical environments
in their outer lexical environment property.
Please note that when a lexical environment is created, 
the JavaScript engine attaches the Lexical Environment to all of the function definitions
inside that lexical environment. So that later on if any of the inner functions are called,
the JavaScript engine can set the outer lexical environment
to the lexical environment attached to that function definition.

check examples at closure Functions

reference link( https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda)

*/

/* Call Stack
JavaScript engine uses a call stack to manage execution contexts:
the Global Execution Context and Function Execution Contexts.

The call stack works based on the LIFO principle i.e., last-in-first-out.
When you execute a script, the JavaScript engine creates a Global Execution Context and 
pushes it on top of the call stack.
Whenever a function is called, the JavaScript engine creates a function execution context
for the function, pushes it on top of the call stack, and starts executing the function.
If a function calls another function, the JavaScript engine creates a new function execution 
context for the function that is being called and pushes it on top of the call stack.
When the current function completes, the JavaScript engine pops it off the call stack 
and resumes the execution where it left off.
The script will stop when the call stack is empty.

* stack overflow
The call stack has a fixed size, depending on the implementation of the host environment, 
either the web browser or Node.js.
If the number of the execution contexts exceeds the size of the stack,
a stack overflow error will occur.
For example, when you execute a recursive function that has no exit condition, 
the JavaScript engine will issue a stack overflow error:

* Asynchronous JavaScript
JavaScript is the single-threaded programming language. 
This means that the JavaScript engine has only one call stack. Therefore,
it only can do one thing at a time.
When executing a script, the JavaScript engine executes code from top to bottom, 
line by line. In other words, it is synchronous.
Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to complete.
For example, the JavaScript engine can:
* Request for a data from a remote server.
* Display a spinner
* When the data is available, display it on the webpage.
*/

/* JS Event Loop to Prevent Blocking Function
The JavaScript engine executes a script from the top of the file and works its way down.
It creates the execution contexts, pushes, and pops functions onto 
and off the call stack in the execution phase.
If a function takes a long time to execute,
you cannot interact with the web browser during the function???s execution because the page hangs.
A function that takes a long time to complete is called a blocking function.
Technically, a blocking function blocks all the interactions on the webpage, 
such as mouse click.
An example of a blocking function is a function that calls an API from a remote server.

To prevent a blocking function from blocking other activities, 
you typically put it in a callback function for execution later. For example:
When you call the setTimeout() function, make a fetch request,
or click a button, the web browser can do these activities concurrently and asynchronously.
The setTimeout(), fetch requests, and DOM events are parts of the Web APIs of the web browser.

see link to understand (https://www.javascripttutorial.net/javascript-event-loop/)
*/


/*----------------Event Loop------------------------
Once all the normal JS code is executed and the call stack gets empty, the event loop is then triggered.
The event loop then checks for any tasks in the task queue and if there are any, 
it pushes it to the call stack and it gets executed.
*/
/* ----------------------Web API------------------------ 
Web APIs are basically a large number of powerful functions and interfaces exposed to us by the browser.
* 		Network requests
* 		DOM manipulation
* 		Local storage
* 		Bluetooth
* 		Screen Capture
* 		Location
* 		setTimeout and Timer
* 		And even console.log is also part of console web API

The Web API calls are added to the Web API Container from the Call Stack. 
These Web API calls remain inside the Web API Container until an action is triggered. 
Then their callBack Functions will be added to callCack queue
*/

/* ------------Task queue vs  Render queue vs Microtask queue------------
All will go to call Stack once the Call Stack is empty
* Task queue (Callback Queue): Here the tasks are executed one at a time and new ones are added. 
  There is not rule that all the tasks here should be finished before moving.

* Render queue: Once the event loop comes to the render queue, 
  it will finish everything which was existing at the beginning, 
  and if something is added after the event loop starts here, 
  they are deferred to the next render cycle.

* Microtask queue: This queue is executed until it is exhausted. 
  So, if you run an infinite recursion of promises, 
  you will block the main thread as shown above.

https://felixgerschau.com/javascript-memory-management/
https://lightmap.dev/how-does-javascript-even-work-part-2#heading-render-queue

// Promise will go to call stack before setTimeout becaue Promise in microtask Queue and setTimeout in task Queue

// SetTimeout is web Api and will be in task Queue
setTimeout(function(){
  console.log("From SetTimeOut")
},0)

// Promise will be in MicroTask Queue
let p1 = new Promise((resolve, reject)=> {
  resolve("from Promise")
})
p1.then((resolve) => console.log(resolve))
*/

/* JS Hoisting 
During the creation phase, the JavaScript engine moves the variable 
and function declarations to the top of your code.
This feature is known as hoisting in JavaScript.

* Variable Hoisting
// let keyword in creation phase only hoist but not initialized to undefined like var
// output undefined
// console.log(hoist)
// var hoist = 10;

// give Error annot access before initialization
// console.log(hoist) // here you are at stage called temporal deadzone (you are between hoisting and initializing)
// let hoist = 10;

// output undefined
// let hoist;
// console.log(hoist)
// hoist = 10;

* Function Hoisting
*regular function has 2 syntaxes : Function decleration and function Expression
*function Decleration :
output will be 30 becaues will hoist function and move it to the top
let x = 20,
  y = 10;

let result = add(x, y);
console.log(result);

function add(a, b) {
  return a + b;
}

*function Expression:
Error (add is not a function ) because JS Hoist (var add) and intialized it to undefined and undefined is not a function
let x = 20,
  y = 10;

let result = add(x, y);
console.log(result);

var add = function(a, b) {
  return a + b;
}

Error cannot access before initialization because JS engine hoist (let add) and doesn't initialzed let 
let x = 20,
  y = 10;

let result = add(x, y);
console.log(result);

let add = function(a, b) {
  return a + b;
}
Arrow function like Function Expression
arrow functions are syntactic sugar for defining function expressions.

*/

/* Scope are three types : Global Scope , Local Scope , Block Scope 

Global Scope : outside (in Global Excution Context)
Local Scope : in Function (in Function Excution Context)
Block Scope : not just inside a function, but around any curly brackets like if statements or loops.

* A lexical scope or static scope in JavaScript refers to the accessibility of the variables,
functions, and objects based on their physical location in the source code

* Block Chain :
The way that JavaScript resolves a variable is by looking at it in its current scope,
if it cannot find the variable, it goes up to the outer scope, which is called the scope chain.


Scope refers to the part of a program where we can access a variable. 
JavaScript allows us to nest scopes, and variables declared in outer scopes are accessible 
from all inner ones. Variables can be globally-, local-, or block-scoped.
Using lexical scope( static scope ) we can determine the scope of the variable 
just by looking at the source code. Whereas in the case of dynamic scoping 
the scope can???t be determined until the code is executed. (JS has Static Scope not Dynamic Scope)

A new lexical environment is created for each lexical scope but only when the code in 
that scope is executed. The lexical environment also has a reference to its outer lexical environment

A new lexical environment is created only for let and const declarations, not var declarations.
var declarations are added to the current lexical environment (global or function lexical environment).

A closure is a function enclosed with references to the variables in its outer scope. 
Closures allow functions to maintain connections with outer variables, 
even outside the scope of the variables.
closures do not just freeze the values of variables from a function???s outer scope 
during creation. Instead, they maintain the references throughout the closure???s lifetime.

use strict will prevent Global Variable leaks (The global scope also doesn???t have the counter variable, so the JavaScript engine creates the counter variable in the global scope.)
'use strict'
counter =10;
console.log(counter)


*/


// references
/* https://www.javascripttutorial.net/javascript-execution-context/

https://www.javascripttutorial.net/javascript-call-stack/

https://www.javascripttutorial.net/javascript-event-loop/

https://www.javascripttutorial.net/javascript-hoisting/

https://www.javascripttutorial.net/javascript-variable-scope/ 
*/

/* JS is Single-Threaded
because JS is Single-Threaded (only one command/function executing at any given time )
setTimeout will not interrupt the function foo it will wait till finish then will run even after 
more than 1 milisecond

setTimeout(function(){
  console.log("Hello World");
},1);
function foo() {
  // NOTE: don't ever do crazy long-running loops like this
  for (var i=0; i<= 1000; i++) {
      console.log(i);
  }
}
foo();

*/

/* Values Vs References in JS

* Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number.
We???ll call these primitive types.


* Javascript has 3 data types that are passed by reference: Array, Function, and Object.
These are all technically Objects, so we???ll refer to them collectively as Objects.

Variables that are assigned a non-primitive value are given a reference to that value.
That reference points to the object???s location in memory.
The variables don???t actually contain the value.
Objects are created at some location in your computer???s memory. 
When we write arr = [], we???ve created an array in memory.
What the variable arr receives is the address, the location, of that array.

* Assigning by value vs Assigning by Value :

Assign by Value (value type variable) :
here x = y but when we change value of y will not change value of x because each x and y has a different copy of it's value
let x = 10;
let y = x;
y = 20 ;
console.log(x,y)

Assign by reference (refernce type variable) :
here arr = copyArr but when you change arr value (pushing a value) wll change copyArr because
both has same address of same array
let arr = [1]
let copyArr = arr
arr.push(2)
console.log(arr)
console.log(copyArr)

Reassign a reference :
here obj was have address of { first : "1st"} but now obj has address of { second : "2nd"}
and { first : "1st"} has no references so will be ready for garbage collector
let obj = { first : "1st"}
obj = { second : "2nd"}
console.log(obj)

equality == and === with refernce type variable :
here return true because both arr and arr2 have same address of same array
let arr = ["Hi"]
let arr2 = arr
console.log(arr === arr2) //true

here return false because each one ( arr and arr2) has different address to two different arrays even if ["Hi"]["Hi"] look like tha same
let arr = ["Hi"]
let arr2 = ["Hi"]
console.log(arr === arr2) //false

if you want to check if both array like each other you have to change them to string ( primitive value)
and you can compare between 2 primitive values by === 

JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string
JSON.parse turns a string of JSON text into a JavaScript object

let arr = ["Hi"]
let arr2 = ["Hi"]
let arrStr = JSON.stringify(arr)
let arrStr2 = JSON.stringify(arr2)
console.log(arrStr === arrStr2) //true

------------shallow Copy and Deep Copy---------------
// Deep Copy because array assigned by reference not value
let arr1 = [1,2,3,4]
let arr2 = arr1
arr2[0] = 5;
console.log(arr1) // [5,2,3,4]

// shallow Copy
let arr1 = [1,2,3,4]
let arr2 = Array.from(arr1)
arr2[0] = 5
console.log(arr1) // [1,2,3,4]

// Methods to Shallow Copy
[1] arr.slice(0)
[2] [].concat(arr)
[3] Spread Operator
[4] Object.create()
[5] Object.assign({}, obj)
[6] Array.from(arr)

// if object has a non-primitive value of property

let obj = {
  number : 55 ,
  string : "String",
  arr : [1,2,3,4],
  object : {one : "value"}
}
// in spite of Shallow but when a value of property is non-primitive values 
//(like array and Objects) will assigned also by reference
let newObj = {...obj}
newObj.arr[0] = 5
console.log(obj) // obj.arr  [5,2,3,4]
console.log(newObj) // newObj.arr  [5,2,3,4]

// to solve this Problem use JSON.parse(JSON.strignify())
let newObj2 = JSON.parse(JSON.stringify(obj))
newObj2.arr[0] = 5
console.log(obj) // obj.arr  [1,2,3,4]
console.log(newObj2) // newObj2.arr  [5,2,3,4]

// another Exp of shallow copy

// for exp. in object we used object.assign() to create a brand new object 
// not just creating another pointer to same object like using let obj1 = obj;
// but at this exp. when we use object.assign() we are creating a new object and take 
// a shallow copy of it's content which means the property names is an Array and with
// shallow copy we are creating just a pointer to this array that's why when we changed 
// the array obj.names.push("Hussein") also changed at obj1
// when we change what names property point to this is a different story we are changing 
// property names not changing teh exisiting array so property names will be changed only at obj
// not at shallow copy obj1

let obj = {
  names : ["Mohamed","Ahmed","Soliman"],
  skills : {
    frontEnd : "JS",
    backEnd : "PHP"
  }
}
let obj1 = Object.assign({},obj)
obj.names.push("Hussein")
console.log(obj)
console.log(obj1)
console.log(obj === obj1)
obj.name = [1,2,3,4]
console.log(obj)
console.log(obj1)

----------------Host Object vs Native Object-------------
Host Objects  :  are objects supplied by a certain environment. 
They are not always the same because each environment differs and 
contains host objects that accommodates execution of ECMAScript. 
Example, browser environment supplies objects such as window. 
While a node.js/server environment supplies objects such as NodeList.

Native Objects or Built-in Objects  :  are standard built-in objects provided by Javascript. 
Native objects is sometimes referred to as ???Global Objects??? since they are objects 
Javascript has provided natively available for use.

------------JavaScript is a multi-paradigm-------------
JavaScript is a multi-paradigm language that allows you to freely mix and match
object-oriented, procedural, and functional paradigms.

** procedural : (Normal JS)
It could be called "procedural" because we have multiple steps we execute after each other.
Exp. 
const button = document.querySelector('button');
const doSomething = () => {
  // do something...
}
button.addEventListener('click', doSomething);

** object-oriented :
The idea behind object-oriented programming (OOP) is that you organize your code 
in classes/ objects (objects are based on classes).
Your data is stored in properties, your logic in methods. 
And properties and methods that work closely together live in the same class.
Exp. 
class InputArea {
  constructor() {
    this.button = document.querySelector('button');
    this.button.addEventListener('click', doSomething);
  }
  doSomething() {
    // do something
  }
}
new InputArea();

** functional programming :
The idea behind functional programming is that you organize your code into 
multiple functions where each function works on its own.
That last part is important: Functions should be stateless and pure, 
they also shouldn't cause side-effects (e.g. manipulate the DOM).
Exp.
function findElementOnPage(elementTag) {
  return document.querySelector(elementTag);
}
function doSomething() {
  // do something
}
function connectInput() {
  const btn = findElementOnPage('button');
  btn.addEventListener('click', doSomething);
}
connectInput();

--Functional Programming contains those logics :
* Pure Function
* Immutability
* Function Composition
* Recursion
* Higher Order Function With Ramda
* Curring with Ramda

----------pure function vs impure function
Pure Function must be : Referential transparency and Side-effect free

Referential transparency: The function always gives the same return value
for the same arguments. This means that the function cannot depend on any mutable state.
A referentially transparent function is one which only depends on its input.

Side-effect free: The function cannot cause any side effects. 
Side effects may include I/O (e.g., writing to the console or a log file), 
modifying a mutable object, reassigning a variable, etc.

// Exp. for Referential transparency ( depend only on argument)
function sum (x) {
  return x + 1
}
console.log(sum(5))

// Exp. for referential opaqueness (something outside functon can change output like variable y)
let y = 2;
function sum2 (x) {
  return x + y
}
console.log(sum2(5))

// Exp. for side effect
let x = 10;
function sideEffect() {
  x = 20;
}
sideEffect()
console.log(x) // 20

pure function ( will not effect the outer variables) :
when you pass agument to parameter it will assign it by =
here arguments x = a and y = b and because there are value type variable will not change each others
let x = 10;
let y = 20;
function pure(a , b) {
  a = 2 * a
  b = 2 * b
  console.log(a + b)
}
pure(x,y)

impure function (will effect outer variables that's called side effect) :
here we assign obj with objArg and both now has smae address of same object so any change of that 
object will changed no both obj and objArg

let obj = {
  theName : "Soliman",
  age : 33
}

function impure(objArg) {
  objArg.age = 34
  return objArg
}

console.log(impure(obj)) //age 34
console.log(obj) //age 34

* how to make impure function to pure function
here we create a new object with new address (we transfered obj to string then transfered again to object)
now obj and newObj each one has it's own address to different two objects when you change 
a properity of one will not affect the other

let obj = {
  theName : "Soliman",
  age : 33
}

function impure(objArg) {
  let newObj = JSON.parse(JSON.stringify(objArg))
  newObj.age = 34
  return newObj
}

console.log(impure(obj)) // age 34
console.log(obj) // age 33

** test ** 
function changeAgeAndReference(person) {
    person.age = 25;
    // when you reassign person to another object will not now has same address like peronObj1 
    // so will not change the value of personObj1
    person = {
        name: 'John',
        age: 50
    };
    
    return person;
}
var personObj1 = {
    name: 'Alex',
    age: 30
};
var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // Alex 25
console.log(personObj2); // John 50

* you can prevent side-effect by using const with variables and Object.freeze() with Objects
// Using Const instead of usind let or var
const x =10;
function pure () {
  x = 20
}
pure() // ERROR

// Object.freeze() with Objects
const obj = {
  x : 10
}
Object.freeze(obj)
function pure () {
  obj.x = 20;
}
pure()
console.log(obj.x)

** generally it's better to use immutator method instead of mutator methods
--Some Exp.:
* instead of array.push() use array.concat() or spread operator
* instead of array.pop() use array.slice(0,-1)
* instead of array.shift() use array.slice(1)
* instead of array.unshift() use [].concat(array)
* instead of array.sort(callBackFunction) use const newArray = R.sort(callBackFunction, array)
* instead of array.reverse() use const newArray = R.reverse()
* you can almost use spread operator and slice compination to transfere mutable method to immutable

*you can use also spread operator : 
// using newArr.splice(1,1) will change orignal array arr
let arr = [1,2,3,4]
newArr = arr
newArr.splice(1,1)
console.log(arr)
console.log(newArr)

// using spread operator and slice instead of splice
let arr = [1,2,3,4]
newArr = [...arr.slice(0,1),...arr.slice(2)]
console.log(arr)
console.log(newArr)

*you can also use Object.assign ( array also is object) :
let arr = [1,2,3,4]
let arr2 = Object.assign([],arr)
arr2.splice(0,1)
console.log(arr)
console.log(arr2)


----Ramda is a library of functions designed to make functional programming in JavaScript
easy and powerful without making it any less like JavaScript.
https://youtu.be/r_MZ0xCv1_A

** with Map and Set
// Map
let map = new Map([
  [1, "One"],
  [2, "Two"],
  [3, "Three"]
])

* instead of using map.set(4, "Four") use let map2 = new Map ([...map, [4, "Four"]]) 
* instead of using map.delete(1) use let map2 = new Map ([...map].filter(([key]) => key !== 1))
* instead of using map.clear() use let map2 = new Map()

// set
let set = new Set(["A", "B", "C"])

* instead of using set.add("D") use let set2 = new Set([...set, "D"])
* instead of using set.delete("B") use let set2 = new Set([...set].filter((key) => key !== "B"))
* instead of using set.clear() use let set2 = new Set()

// You can use also Immutable.js
Immutable. js is a library that supports an immutable data structure.
It means that once created data cannot be changed. 
It makes maintaining immutable data structures easier and more efficient. 
The tool supports data structure like: List, Map, Set and also structures that are not implemented in .


--------- mutable and immutable data type  (changeable and not chageable)

/* 
Mutable is a type of variable that can be changed. 
In JavaScript, only objects and arrays are mutable, not primitive values.

A mutable object is an object whose state can be modified after it is created.
Immutables are the objects whose state cannot be changed once the object is created.

Strings and Numbers (primitive values) are immutable

By default, objects are mutable. This means once they're created, 
you can add a new property to them, modify the value of an existing property, or delete a property.

When an object is immutable, you can't add a new property to it, modify it, 
or delete an existing property. There is no way even to extend it.

const is not immutable const prevent reassign 
*/
/*
// Exp. of mutable in JS
// because array assigned by reference not value so arr and arr2 have same address to same array
// once you make change to arr , arr2 also changes because they both point to same array
// let arr = [1,2]
// let arr2 = arr
// arr2.push(3)
// console.log(arr)
// console.log(arr2)
// console.log(arr === arr2)

// in Object also same Problem
// let obj = {theName : "Soliman"}
// let obj2 = obj
// obj2.theName = "Hussein"
// console.log(obj)
// console.log(obj2)
// console.log(obj === obj2)

// Exp. of immutable in JS
// using concat to create new Array with different address 
// use Array method that return a new Array like map and filter better than push , pop or sort
// let arr = [1,2]
// let arr2 = arr.concat(3)
// console.log(arr)
// console.log(arr2)
// console.log(arr === arr2)


// using Object.assign() to create new Object with different address
// let obj = {theName : "Soliman"}
// let obj2 = Object.assign({}, obj, {theName : "Hussein"})
// console.log(obj)
// console.log(obj2)
// console.log(obj === obj2)

// using Object.freeze (convert object to immutable)
let obj = {theName : "Soliman"}
let obj2 = obj
Object.freeze(obj)
obj2.theName = "hussein"
console.log(obj) // Soliman
console.log(obj2) // Soliman
console.log(obj === obj2)

// Using Object.seal() ( mix ) you can not add property but you can change it
let obj = {
  name : "Mohamed",
  last : "Soliman"
}
Object.seal(obj)
obj.middle = "Ahmed" // can not add property
console.log(obj)
obj.last = "Hussein"
console.log(obj) // can change property

// -------Function Composition-------
// higer order function
function h (x) {
  x = x + 1
  return function g () {
    x = x * x
    return function  f () { 
      return x.toString()
    }
  }
}
console.log(h(1)()())

// function composition
function h (x) {
  return x = x + 1
}
function g (x) {
  return x = x * x
}
function f(x) {
  return x.toString()
}
console.log(f(g(h(1))))

// using Ramda
function h (x) {
  return x = x + 1
}
function g (x) {
  return x = x * x
}
function f(x) {
  return x.toString()
}
let composite = R.compose(f,g,h)
console.log(composite(1))
*/
/* ------recursion ------ 
* function call itself
consists of 2 parts :
[1] Base Case ( stopping condition)
[2] recursive call to itself
for Exp. factorial 4 (4! = 4 * 3 * 2 * 1)

* we can use for loop : 
function factorial(x) {
  let y = 1
  for ( let i = 1; i <= x ; i ++) {
    y *= i
  }
  return y
}
console.log(factorial(4))

* we can use recursion
function rec(n) {
  // Base case
  if (n === 1) {
    return 1;
  }else{
    // recursive call to itself
    return n * rec(n-1)
  }
}
console.log(rec(4))
// will cause Error Maximun call Stack size Exceed Each call to recursiveFactorial causes a new frame to be put on the stack. 
console.log(rec(20000))

another exp. of simple loop
let count = 0;
function rec() {
  if(count < 10){
    console.log(count)
    count++
    rec()
  }
}

another exp. of countdown
function countDown(num){
  console.log("x".repeat(num))
  num = num - 1
  if (num > 0){
    countDown(num)
  }
}
countDown(10)

// using PTC ( proper tail calls optimization) to solve  error of Error Maximun call Stack (not supported by all browsers)
// after the product has been updated, the browser can throw out that stack frame
function rec(n , product = 1) {
  // Base case
  if (n === 1) {
    return product;
  }
  // recursive call to itself
  return rec(n-1, product * n)
}
console.log(rec(20000))

// reference (https://opensource.com/article/17/6/functional-javascript)
// reference (https://youtu.be/LteNqj4DFD8 )

*/

// First class Function
/*
functions in JS treated like other variables.
function can be assigned to any other variables 
or passed as an argument or can be returned by another function
JavaScript treat function as a first-class-citizens.
This means that functions are simply a value and are just another type of object.
*/
// exp who to pass function as argument 
// function greet (name) {
//   return `Hi, ${name}`
// }
// function greetFinal (greeting, welcome , theName) {
//   console.log(`${greeting(theName)} The Message is ${welcome}`)
// }
// greetFinal(greet,"You Are Welcome", "Soliman")

// exp. of Functional Programming
// const developers = [
//   {
//     name: "James",
//     yearsOfExperience: 2,
//     language: "HTML",
//   },
//   {
//     name: "Adam",
//     yearsOfExperience: 5,
//     language: "CSS",
//   },
//   {
//     name: "Will",
//     yearsOfExperience: 1,
//     language: "javascript",
//   },
//   {
//     name: "Sam",
//     yearsOfExperience: 7,
//     language: "Python",
//   },
// ];

// function listDevelopers() {
//   developers.forEach((developer) => {
//     const { name, yearsOfExperience, language } = developer;
//     console.log(
//       `${name} has ${yearsOfExperience} years of experience in ${language}`
//     );
//   });
// }
// listDevelopers()


// -----------Invoking Function ------------
// invoking function means call function
// we will use invoke, because a JavaScript function can be invoked without being called.
// The difference is semantic and subtle.
// When you call a function, you are directly telling it to run.
// When you invoke a function, you are letting something run it.

// there is 2 main functions Regular and Arrow

// Regular Function have 2 main Syntax:

// 1st Function Decleraion
// function hello() {
//   console.log("Hello")
// }
// hello()

// 2nd Function Expression
// let hello = function () {
//   console.log("Hello")
// }
// hello()

// Arrow Function 
// let hello = () => console.log("Hello")
// // hello()

// ------------Arrow functions --------------
// reference (https://www.section.io/engineering-education/how-to-use-javascript-arrow-functions-and-this-keyword/)
// Using the arrow function, curly braces, parenthesis, function,
// and return keywords become optional.
// Arrow functions do not have their own this binding. (but can be usefull look example below )
// Instead, they go up to the next level of execution.
// const whoAmI = {
//   name: 'Leslie Knope',
//   regularFunction: function() {
//     console.log(this.name)
//   },
//   arrowFunction: () => {
//     console.log(this.name)
//   },
// }

// whoAmI.regularFunction() // "Leslie Knope"
// whoAmI.arrowFunction() // undefined

// --------Example below
// const button = document.createElement('button')
// button.textContent = 'Click me'
// document.body.append(button)

// class Display {
//   constructor() {
//     this.buttonText = 'New text'

//     button.addEventListener('click', event => {
//       // we used arrow function because we want this to refer to "new text" not to event.target
//       event.target.textContent = this.buttonText
//     })
//   }
// }
// new Display()

// if callBackFunction inside Higher Order function is Arrow Function (this will refer to Object a) and Farr to bind or add this Arg
// no need to bind this because arrow function has not it's own this and inherit it from prarent function ( where this refer to object a )
// a = {
//   foo: 'bar',
//   things: [1, 2, 3],
//   showFooForEach: function() {
//     this.things.map((thing) => {
//       console.log(this.foo, thing);
//     });
//   }
// }

// a.showFooForEach();

//if callBackFunction inside Higher Order function is normal Function (this will refer to object a but you must bind this or add this Arg)
// because normal function has it's own this and you need to bind this of object to function
// a = {
//   foo: 'bar',
//   things: [1, 2, 3],
//   showFooForEach: function() {
//     this.things.map(function(thing) {
//       console.log(this.foo, thing);
//     }.bind(this));
//   }
// }

// a.showFooForEach();

// here this in function will refer to object a
// a = {
//   foo: 'bar',
//   things: [1, 2, 3],
//   showFooForEach: function() {
//     console.log(this)
//   }
// }

// a.showFooForEach();

//IIFE (immediately Invoked Function Expression):

// (function f(a=3 ,b=2 ) {
//   console.log(a + b);
// })();

// Arrow IIFE
// ((a =2 ,b=3) => console.log(a+b))();


// IIFEs are very useful because they don???t pollute the global object,
// and they are a simple way to isolate variables declarations.

// (function() {
//   let a = 20;
//   console.log(a)
// })();

// let a = 10;
// console.log(a)

// A closure 
// closure is the inner function that has access to its outer function scope
// even after the outer function has returned(because of Reference to the parent lexical environment). This means a closure can remember
// and access variables and arguments of its outer function even after the function returned

// function person() {
//   let name = 'Peter';
  
//   return function displayName() {
//     console.log(name);
//   };
// }
// let peter = person();
// // here Closure function ( displayName) remember variable name even after the function person returned
// peter(); // prints 'Peter'


//why to use Closure Function 
// 1st Example we invoke closure function (inner) only and will remember the variable counter
// and when we invoke the inner function again will not reset variable counter to 0 each time 
// because we invoke inner only without count function

// function count () {
//   let counter = 0;
//   return function inner () {
//     return counter++
//   }
// }

// here no closure function and will reset variable counter to 0 each time we invoke the function
// function count2() {
//   let counter = 0;
//   return counter++
// }
// let result = count()

// console.log(result()) // 0
// console.log(result()) // 1
// console.log(result()) // 2
// console.log(count2()) // 0
// console.log(count2()) // 0
// console.log(count2()) // 0

// use case of IIFE and Closures (link below)
// https://javascript.plainenglish.io/4-practical-use-cases-for-iifes-in-javascript-6481dcb0ba7d

// const user = (function() {
//   let name = "anonymous";
//   return {
//     getName:  _=> name,
//     setName: newName => name = newName
//   };
// })();
// console.log(user.getName()) // anonymous
// user.setName("Amy");
// console.log(user.getName()); // Amy

// withou IIFE
// let inv = user()
// console.log(inv.getName()) // anonymous
// inv.setName("Amy");
// console.log(inv.getName()); // Amy

// without IIFE
// const user = function() {
//   let fname = "anonymous";
//   return function (a) {
//     fname = a;
//     return fname
//   }
// };

// let result = user()
// console.log(result("soliman"))

// //  _ mean igonre parameter ( dont write Argument)
// let fun = _ => console.log("Hello,World")
// fun()


// ------------------------------This -------------------------
// This is all about where a function is invoked ( in window object or specific object)
// ???this??? is a regular argument provided at the time your function is invoked 
// Under the hood will be like this function.call(window object or specific object)
// In an object method, this refers to the object
// Alone, this refers to the global object (window) but in strict mode will be undefined
// In a function, this refers to the global object. (because if function does not belong to any Object will belong to global Object) (myFunction() === window.myFunction())
// In an Arrow functions this refer to global Object ( even if it's belong to specific Object) beacuse it do not have own this binding
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
// for nested function ( inner function inside outer function inside object ) this refer to window object ( to solve this problem use arrow function or bind() or apply() or bind)


// refernece (https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262)
// ---- refer to Person Object
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id: 5555,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
//   };
// console.log(person.fullName())

// ---refer to element that received the event
// allLis.forEach((el) => el.onclick = function () { this.classList.add("active") }

// --- refer to object from nested inner function
// let obj = {
//   theName : "Soliman",
//   age : 33, 
//   fun : function getThis () {
//     console.log( ` This from outer function is ${this}`);
//     function getThisInner() {
//       console.log(` This from inner function is ${this}`)
//     }
//     getThisInner()
//   }
// }

// obj.fun()

// using Arrow Function will force this to refer to object because Arrow function does not have
// binding to it's own this and inherit it from outer function
// let obj = {
//   theName : "Soliman",
//   age : 33, 
//   fun : function getThis () {
//     console.log( ` This from outer function is ${this}`);
//     let arrow = _ => console.log(` This from inner function is ${this}`)
//     arrow()
//   }
// }

// obj.fun()

// Arrow function inside constructor
// function User(fName,lName,age){
//   this.fName = fName;
//   this.lName = lName;
//   this.age = age;
//   this.country = "EGYPT"
//   this.fullName = _ => `Full Name: ${this.fName} ${this.lName}`
// }

/* 
Why this inside Arrow function inside constructor refer to created Object?
Instance Objects are powerful because they are derived from a function, 
they provide private scope when they are created, and expressions can be executed on instantiation.
But A JavaScript object literal does not, by nature, provide private scope.
*/

// -----this in IIFE----------
// let myObj = {
//   name : "Soliman",
//   func: (function parent(){
//     let child = () => console.log(this.name)
//     child()
//   })()
// }
// console.log(window.name)
// console.log(myObj.name)
// IIFE will excute automatically inside global Scope and will output empty String 
/* 
The reason you get "" rather than undefined is that you're using loose mode,
and so this refers to the global object, which is the window on browsers, 
and the window has a name property (the name of the current window) which is usually empty ("").
last exp. excute in this way :
let parent = (function (){
  let child = () => console.log(this.name)
  child()
})()
let myObj = {
  name : "Soliman",
  func : parent
}
console.log(window.name)
console.log(myObj.name)
*/

/* ------------this with setTimeout and addEventListener-----------
setTimeout is web api and will go to callback queue once call stack is empty will go to call stack 
and will be excuted in global context.

in first exp. 1st this refer to obj - 2nd this refer to window because setTimeout will be excuted 
in global context once call stack is empty

in second exp. 1st this refer to btn - 2nd this refer to window same reasone of first exp.

in third exp. 1st this refer to btn - 2nd this refer to btn also because arrow function
take this from lexical context and this of lexcial context is btn from addEventListener 

*/
// let btn = document.querySelector(".btn")
// let obj = {
//   name : "Soliman",
//   func : function getThis(){
//     console.log(this)
//     setTimeout(function(){
//       console.log(this)
//     },1000)
//   }
// }
// obj.func() //output obj - window


// let getThis = function (){
//   console.log(this)
//   setTimeout(function(){
//     console.log(this)
//   },1000)
// }
// let getThisArrow = function (){
//   console.log(this)
//   setTimeout(() => {
//     console.log(this)
//   },1000)
// }
// // btn.addEventListener("click", getThis) // output btn - window
// btn.addEventListener("click", getThisArrow) // output btn  - btn


// in Explicit Binding this refer to object passed in apply , call or bind (objFun.apply(obj))
// let obj = {
//   theName : "Soliman",
//   age : 33,
// }
// function objFun () {
//   console.log(`My Name is ${this.theName} and my age is ${this.age}`)
// }
// objFun.apply(obj)

// using apply() to bind this to inner function ( Explicit Binding)
// let obj = {
//   theName : "Soliman",
//   age : 33, 
//   fun : function getThis () {
//     console.log( ` This from outer function is ${this}`);
//     function getThisInner() {
//       console.log(` This from inner function is ${this}`)
//     }
//     getThisInner.apply(this)
//   }
// }

// obj.fun()
// using call() to bind this to inner function ( Explicit Binding)
// let obj = {
//   theName : "Soliman",
//   age : 33, 
//   fun : function getThis () {
//     console.log( ` This from outer function is ${this}`);
//     function getThisInner() {
//       console.log(` This from inner function is ${this}`)
//     }
//     getThisInner.call(this)
//   }
// }

// obj.fun()

// using bind() to bind this to inner function ( Explicit Binding)
// let obj = {
//   theName : "Soliman",
//   age : 33, 
//   fun : function getThis () {
//     console.log( ` This from outer function is ${this}`);
//     function getThisInner() {
//       console.log(` This from inner function is ${this}`)
//     }
//     let invokeBind = getThisInner.bind(this)
//     invokeBind()
//   }
// }
// obj.fun()

// Implicit Binding (function inside object or use constructor to create new Object and this refer to new object)
// with implicit this will refer to object before dot ( obj.doStuff , obj.func)
// var MyObject = function (){
//   this.name = 'MyObjectName';
//   this.myProperty = 'property';
// };

// MyObject.prototype.doStuff = function (action) {
//   console.log(this.name + ' is ' + action + '!');
// }

// var obj = new MyObject();

// obj.doStuff('awesome');

// let obj = {
//   theName : "Soliman",
//   age : 33,
//   func : function () {
//     console.log(`My Name is ${this.theName} and my age is ${this.age}`)
//   }
// }
// obj.func()

// -----------------difference between regular and arrow function-------------
/*
- The arrow function doesn't define its own execution context.
- The arrow function cannot be used as Constructor (this is inherited from the enclosing (lexical) scope)
- The arrow functions are this-less, arguments-less, new.target-less and super-less.
 */

// [1] this in an arrow function is inherited from the enclosing (lexical) scope.

// // ----arrow Function
// const myObject = {
//   myMethod() {
//     console.log(this); // logs myObject
//     const callback = () => {
//       console.log(this); // logs myObject
//     };
//     callback()
//   }
// };
// myObject.myMethod(); 

// // ----Regular Function
// const myObject2 = {
//   myMethod() {
//     console.log(this); // logs myObject
//     const callback = function (){
//       console.log(this); // logs window object
//     };
//     callback()
//   }
// };
// myObject2.myMethod(); 

// [2] arrow function cannot be used as Constructor

// // -----arrow Function
// const Car = (color) => {
//   this.color = color;
// };
// const redCar = new Car('red'); // TypeError: Car is not a constructor

// // ----- regular Function
// const Car2 = function (color){
//   this.color = color;
// };
// const redCar2 = new Car2('red'); // TypeError: Car is not a constructor

// [3] arrow function does not have arguments special keyword

// // ---arrow Function ( but you can use rest parameters to get array of arguments)
// let arr = (...args) => {
//   console.log(args)
// }
// arr(1,2)

// // -----regular Function

// let arr2 = function (a,b){
//   console.log(arguments)
// }
// arr2(1,2)

// [4] method inside object invoked as callback function (here arrow function is better)

// ----arrow Function
// class Hero {
//   constructor(heroName) {
//     this.heroName = heroName;
//   }
//   logName = () => {
//     console.log(this.heroName);
//   }
// }
// const batman = new Hero('Batman');
// setTimeout(batman.logName,1000) // batman

// ----regular Function

/*
You might think that setTimeout(batman2.logName, 1000) will call the 
batman2.logName(), which should log the information about batman2 object.
Unfortunately the method is separated from its object when passed as a parameter or to variable: 
setTimout(batman2.logName,1000).

setTimout(batman2.logName);
is equivalent to:
const extractedlogName = batman2.logName;
setTimout(extractedlogName) // undefined.heroName => error (this will be undefined)
 */
// class Hero2 {
//   constructor(heroName) {
//     this.heroName = heroName;
//   }
//   logName = function() {
//     console.log(this);
//   }
//   // logName = function() {
//   //   console.log(this.heroName);
//   // }.bind(this)
// }
// const batman2 = new Hero2('Batman');
// setTimeout(batman2.logName,1000) 
// // to solve this problem add bind here or inside consructor
// setTimeout(batman2.logName.bind(batman2),1000) 

// **** note : If a function has been used as a high order function (passed as an argument) 
// or passed to variable the scope of this gets lost.

// function Hero2(heroName) {
//   this.heroName = heroName;
// }
// Hero2.prototype.logName = function() {
//   console.log(this);
// }
// batman2 = new Hero2("Batman")
// let seperated2 = batman2.logName
// seperated2() // this here is window Object

// class Hero2 {
//   constructor(heroName) {
//     this.heroName = heroName;
//   }
//   logName = function() {
//     console.log(this);
//   }
// }
// const batman2 = new Hero2('Batman');
// let seperated2 = batman2.logName
// seperated2() // this here is undefined (all the code inside a class automatically executes in the strict mode and this in strict mode will be undefined not window object)

// ------------------------------Call Method----------------------------------
// Call (thisArg, arg1,arg2,....) takes arguments separately
// The example below calls person1.fullName function with person2 as an argument,
//  this refers to person2, even if fullName is a method of person1:
// call force person1.fullName() to accept person2 (object) as an argument

// const person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person2 = {
//   firstName:"John",
//   lastName: "Doe",
// }

// console.log(person1.fullName.call(person2))

// ---- adding function print to each object inside array animals using Call()
// const animals = [
//   { species: 'Lion', name: 'King' },
//   { species: 'Whale', name: 'Fail' }
// ];

// for (let i = 0; i < animals.length; i++) {
//   (function(i) {
//     this.print = function() {
//       console.log('#' + i + ' ' + this.species
//                   + ': ' + this.name);
//     }
//     this.print();
//   }).call(animals[i], i);
// }
// console.log(animals[0])
// console.log(animals[1])

// -----Using call() to invoke a function and without specifying the first argument
// In the example below, we invoke the display function without passing the first argument. 
// If the first argument is not passed, the value of this is bound to the global object.

// var sData = 'Wisen';
// function display() {
//   console.log('sData value is %s ', this.sData);
// }
// display.call();  // sData value is Wisen
// note : in strict mode this will not refer to global object -this will undefined

// ----------------------------bind Method-------------------------
// bind(thisArg, arg1,arg2,...)
// The bind() function creates a new bound function
// With the bind() method, an object can borrow a method from another object.
// This example creates 2 objects (person and member).
// The member object borrows the fullname method from the person object:

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// here we already invoked the function and save the return value of that function in variable
// let fullName = person.fullName.call(member);
// console.log(fullName)

// here you borrow the function it self and you named the function fullName
// let fullName = person.fullName.bind(member);
// console.log(fullName())

// Bind only works once
// function f() {
//   return this.a
// }

// let g = f.bind({a: "Mohamed"})
// let h = g.bind({a: "Soliman"})

// console.log(g()) //Mohamed

// ----bound function
// should be var x = 10 not let x = 10; because we want x to be added to global object
// var x = 10;
// let obj = {
//   x : 20,
//   getX : function(){
//     return this.x
//   }
// }
// console.log(obj.getX()) // 20
// let globalX = obj.getX;
// console.log(globalX()) // 10 because excuted in global object and this.x and this refer to global object
// // to solve this problem use bind()
// let objX = obj.getX.bind(obj)
// console.log(objX()) // 20
//---partial applied function 
// you can use bind() and bound function to add 3rd parameters to pre-specified no. of arguments in function
// function sum(param1, param2){
//   return param1 + param2
// }
// console.log(sum(2,3,20)) // 5 because it accept only 2 arguments
// let sumResult = sum.bind(null,20)
// console.log(sumResult(5)) // 25 by passing old parameters to bound function (2,3) = 5

// -----apply vs concat
/* 
Concat does not append to the existing array???it instead creates and returns a new array.
Push.apply() append to the existing array
let arr = [1,2,3]
let extra = [4,5]
console.log(arr.concat(extra)) // [1,2,3,4,5]
console.log(arr) // [1,2,3]
arr.push.apply(arr,extra)
console.log(arr) // [1,2,3,4,5]
*/

// -------The difference between Call and apply
// The call(thisArg, arg1,arg1,....) method takes arguments separately.
// The apply(thisArg, argArray) method takes arguments as an array or array like object.
// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   // apply accept argument as Array
// console.log(person.fullName.apply(person1, ["Oslo", "Norway"]))
//   // call accept argument separatly
// console.log(person.fullName.call(person1, "Oslo", "Norway"))

// -------- diference between call and bind
// When called on a function,
// .bind() sets a this context and returns a new function 
// of the same name with a bound this context.

// call attaches this into function and executes the function immediately:
// var person = {  
//   name: "James Smith",
//   hello: function(thing) {
//     console.log(this.name + " says hello " + thing);
//   }
// }

// person.hello("world");  // output: "James Smith says hello world"
// person.hello.call({ name: "Jim Smith" }, "world"); // output: "Jim Smith says hello world"

// bind attaches this into function and it needs to be invoked separately like this:
// var person = {  
//   name: "James Smith",
//   hello: function(thing) {
//     console.log(this.name + " says hello " + thing);
//   }
// }

// person.hello("world");  // output: "James Smith says hello world"
// var helloFunc = person.hello.bind({ name: "Jim Smith" });
// helloFunc("world");  // output: Jim Smith says hello world"
// or like this:
// ...    
// var helloFunc = person.hello.bind({ name: "Jim Smith" }, "world");
// helloFunc();  // output: Jim Smith says hello world"

// use case of bind()

// **** using bind to callBack function
// var MyObject = function (){
//   this.name = 'MyObjectName';
//   this.myProperty = 'property';
// };
// MyObject.prototype.doStuff = function (action) {
//   console.log(this.name + ' is ' + action + '!');
// }
// var obj = new MyObject();
// // here we are calling setTimeout and after delay 1 second there is no this.name 
// setTimeout(obj.doStuff, 1000, 'awesome');
// // here we are calling callBack function immedialtly 
// setTimeout(obj.doStuff.call(obj,'awesome'), 1000); 
// // here we bind this (which refer to obj) to function and ready once setTimeout invoke callBack function
// setTimeout(obj.doStuff.bind(obj), 1000, 'awesome'); 

// reference (https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262)

// **** using bind with addEventListener 
// let obj = {
//   theName : "soliman",
//   age : 33,
//   func : function () {
//     console.log(`my Name is ${this.theName} and my age is ${this.age}`)
//   }
// }
// let btn = document.getElementById("bind")
// // here we used bind beacuse now this refer to element that recive click and we want this to refer to obj
// btn.addEventListener('click',obj.func.bind(obj) )
// // if you use call or apply function will invoked immedialtly and give you output before clicking on element
// btn.addEventListener('click',obj.func.call(obj) )

// let arr = [1,2,3,4]
// let obj = {
//   theName : "Soliman",
//   age: 33
// }
// arr.map(function(el) {console.log(this)},obj)

// setTimeout
/*The specified amount of time (or the delay) is not the guaranteed time to execution,
but rather the minimum time to execution.
The callbacks you pass to these functions cannot run 
until the stack on the main thread is empty.
As a consequence, code like setTimeout(fn, 0) will execute as soon as the stack is empty,
not immediately. If you execute code like setTimeout(fn, 0) 
but then immediately after run a loop that counts from 1 to 10 billion,
your callback will be executed after a few seconds. */

// -----setTimeout with bind
// because setTimeout excuted in seperate excution context so this will refer to window Object
// not refer to myArray as inside myArray.myMethod to solve this problem use bind
// myArray = ['zero', 'one', 'two'];
// myArray.myMethod = function (sProperty) {
//     console.log(arguments.length > 0 ? this[sProperty] : this);
// };
// myArray.myMethod(); // prints "zero,one,two"
// myArray.myMethod(1); // prints "one"
// setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
// setTimeout(myArray.myMethod, 1000, "1"); // prints "undefined" after 1 second
// setTimeout(myArray.myMethod.bind(myArray), 1000); // prints "zero,one,two"
// setTimeout(myArray.myMethod.bind(myArray), 1000, "1"); // prints "one"

// ------------------Constructor ---------------

/* 
A constructor is a special function that creates and initializes an object instance of a class.
In JavaScript, a constructor gets called when an object is created using the new keyword.
The purpose of a constructor is to create a new object and set values for any existing object properties.
When the this keyword is used in a constructor, it refers to the newly created object

When a constructor gets invoked in JavaScript, the following sequence of operations take place:
* A new empty object gets created.
* The this keyword begins to refer to the new object and it becomes the current instance object.
* The new object is then returned as the return value of the constructor.

newObject = function () {
  this.theName = "soliman"
  console.log(this)
}
newObject() // window object because a constructor not called yet
let obj = new newObject // newObject because a constructor gets called when an object is created using the new keyword.

Constructor with Parameters
A constructor can also have parameters:
function User (name, age) {
    this.name = name;
    this.age = age;
}
here arguments are passed to the constructor during object creation. 
This allows each object to have different property values.
var user1 = new User('Bob', 25);
var user2 = new User('Alice', 27);
console.log(user2.age)

Object Prototype
Properties and methods can be added to a constructor using a prototype:
*add properity
function User (name, age) {
function User () {
  this.thename = "solimaaan";
}
User.prototype.age = 25
let newUser = new User
console.log(newUser.age)

*add function
function User () {
  this.thename = "solimaaan";
}
User.prototype.age = 25
User.prototype.func = function () {
  return(this.age)
}
let newUser = new User
console.log(newUser.func())
*/


// ---------------Strict Mode------
// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors.
// As an example, in normal JavaScript, mistyping a variable name creates a new global variable.
// In strict mode, this will throw an error, making it impossible to accidentally create a global variable


// 1- Using a variable, without declaring it, is not allowed:

// (function f() {
//   "use strict";
//   x = 2;
// })();

// without strict mode you can access x outside the function (var , let & const are function scope)
// but here (without strict mode) js will search for variable x inside function if not found
// search in global scope not found then will add x to global object

// 2- Using an object, without declaring it, is not allowed:

// (function() {
//   "use strict";
//   x = {p1:10, p2:20};
//   console.log(x.p1)
// })();

// 3- Deleting a variable (or object) (or function) is not allowed.
// delete operator is used only to delete Object properites

// (function(){
//   "use strict";
//   let x = 3.14;
//   delete x;
//   console.log(x)
// })()

// (function f(){
//   "use strict";
//   let x = {
//     a : 10,
//     b: 20
//   }
//   delete x.a;
//   console.log(x.a)
// })()
// (function() {
//   "use strict";
//   delete f;
// })

// 4- Duplicate Parameter name is not allowed:

// (function f(a ,a ,b ) {
//   "use strict";
//   console.log(a + b);
// })(2,3,3);

// 5- Octal numeric literals are not allowed:

// (function(){
//   "use strict";
//   let x = 010;
//   console.log(x)
// })()

// 6- Octal escape characters are not allowed:

// (function(){
//   "use strict";
//   let x = "\010";
//   console.log(x)
// })()

// 7-  Writing to a read-only property is not allowed: (Silent Error)
// (function f() {
//   "use strict";
//   let obj = {
//     y : 90
//   };
//   Object.defineProperty(obj, "y", {writable: false});
//   obj.y =100;
//   console.log(obj.y);
// })();

// 8- Writing to a get-only property is not allowed:

// (function() {
//   "use strict";
//   const obj = {get x() {return 0} };

//   obj.x = 3.14;
// })();

// 9-  Deleting an undeletable property is not allowed:

// (function() {
//   "use strict";
//   delete Object.prototype;
// })();

// 10- The word eval cannot be used as a variable:

// (function(){
//   "use strict";
//   let eval = 3.14;
// })();

// 11- The word arguments cannot be used as a variable:

// (function () {
//   "use strict";
//   let arguments = 3.14;
// })();

// 12- The with statement is not allowed:

// (function() {
//   "use strict";
//   with (Math){x = cos(2)};
// })();

// Allows properties of an object to be treated as local variables within a statement.
// var obj = {a: 1,b: 2, c: 3};
// // more "tedious" to repeat "obj"
// obj.a = 2;
// obj.b = 3;
// obj.c = 4;
// // "easier" short-hand
// with (obj) {
//     a = 3;
//     b = 4;
//     c = 5;
// }

// 13- For security reasons, eval() is not allowed to create variables in the scope from which it was called:

// (function() {
//   "use strict";
//   eval ("let x = 2");
//   alert (x);
// })()

// eval It is JavaScirpt's global function, which evaluates the specified string as JavaScript code and executes it.


// 14-  The this keyword in functions behaves differently in strict mode.
// The this keyword refers to the object that called the function.
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):

// (function() {
// "use strict";
//   console.log(this)
// })();

// 15- Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.
// These are:
// * implements
// * interface
// * let
// * package
// * private
// * protected
// * public
// * static
// * yield

// (function(){
//   "use strict";
//   let public = 1500;
// })();


// Eval 
// eval It is JavaScirpt's global function, 
// which evaluates the specified string as JavaScript code and executes it.
// If the argument is an expression, eval() evaluates the expression.
// If the argument is one or more JavaScript statements, eval() executes the statements.


// evaluating Expression
// let x = 10;
// let y = 20;
// let text = "x * y";
// let result = eval(text);
// console.log(result)


// Excute Statment
// var x =0;
// var str = "if( x === 0) {'sunday'} else {'Monday'}; "
// console.log(eval(str))

/* -----------------Expressions and Statments--------------------
In general, an expression is a snippet of code that evaluates to a value.
A statement is a snippet of code that performs an action.
Easy way to know is it expression or statment use console.log()
console.log(expression) //value 
console.log(statment) //Error 
-function arguments must be only expression

Expressions EXP. :

* Arithmetic Expressions 
10
10+3 

* String Expression
"Hello"
"Hello" + "World"

* Logical Expression ( evaluate to Boolean value)
10 > 9
10 < 20
a === 20 && b === 20

* Primary Expression ( stand alone)
"hello World"
23
true
sum ( varaible)
this

* Left hand side Expressions
i = 10; // i is expression
var obj = {} // obj is expression  _ var is not part of the expression.
obj.x = 10 // obj.x is expression
console.log(obj.x) 

* Assignment Expression :
a = 1 is assignment expression & b = ( a = 1) is also assignment expression but var is not part of the expression.
var b = ( a = 1)

* function 
-function can be expression or statment:
* function hello (){}  // Function Declaration ( statment)
* let fun = function () {}  or let fun = function hello() {} // Function Expression
- difference between function expression and statment is :
> function Expression excuted once you reach it's line of code and assign it's return value to variable
> function Declaration ( statment) you have to invoke it separatly like foo()
-that's why with IIFE you should write parenteses (function (){})() 
because JS engine dont know if it function Expression (can be with name or not) or function decleration 
alwayes expression is inside parenteses 

Statment EXP. :

* Decleration Statment
var x = 10; (declare variable )
function hello () {} ( function declaration)

* Expression Statment
you can not use statment in the place of Expression

var a = var b ( statment in the place of Expression) // Error
var a = ( b = 10) ( assignment Expression in place of Expression)

stand alone Expression can be used as Expression and Statment
sum;

* Conditional Statment
excute statments based on the value of Expression

if (expression) 
  statment1
else
  statment2

* Loops and Jumps Statments:
Jump statements are used to make the JavaScript interpreter jump to a specific location within the program.
Loop like while , do/while , for, for-in
Jump like Break , continue , return , throw

*/

// reference link (https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)

// ------------functional Programming -------
/* 

* Pure Function ( we dicussed it before)
* Function composition 
* Avoid Shared State
* Avoid Mutating state
* Avoid Side Effects

---function composition
Function composition is the process of combining two or more functions 
to produce a new function. Composing functions together is like snapping together 
a series of pipes for our data to flow through.

*/
// -----------------Strong reference and weak reference----------------
/*
The key difference to note is that a strong reference prevents an object 
from garbage collection while a weak one will not.
By default, JavaScript uses strong references for all of its references 
and the only way to use weak references is to use either a WeakMap or a WeakSet.

** Strong Reference :
let myName = {theName: "Soliman"}
let arr = [myName]
myName = null 
console.log(myName) // null 
console.log(arr[0]) //{theName: "Soliman"} 
because of strong reference between arr and Object myName cant be garbage collected

** Weak Reference : 
let weak = new WeakMap()
let myName = {theName : "Soliman"}
weak.set(myName, "OK")
console.log(weak)
myName = null
console.log(weak) // should return weakMap(0) but garbage collecter not work immediatly

 */


// --------Challenge--------

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString.split(",").filter((el) => isNaN(el)).map((el,index) => el.length > index ? el[index] : el).join("").split("_").reduce((acc, current) => `${acc} ${current}`).slice("", -true)
// console.log(solution);

// --------End Challenge--------

// --------------Object------------------
// you can Create Object by constructor ( usefull for Creating multiple Objects )
// or Object literal ( usefull for creating Single Object)

// Each object created using a constructor is unique. 
// Properties can be added or removed from an object without affecting another one created 
// using the same constructor.

// an object is built using an object literal,
// any changes made to the variable that is assigned the object value 
// will change the original object. ( becuase of reference )

// you can create Object in 4 ways
/* 
* Constructor (built-in or user-defined)
* literal (normal)
* Object.create()
* Object.assign()
* ES6 Classes
*/

// -----constructor 
// [1] built in Object constructor function
// let user = new Object({
//   age : 20,
// }) 
// user.age = 38
// user["country"] = "Egypt"
// console.log(user);
// // add later by dot notaion or bracket notation
// user.sayHello = function () {
//   return `Hello`
// }
// console.log(user.sayHello())
// [2] user defined constructor function 
// function userName() {
//   this.lname = "soliman";
//   this.age = 33;
// }
// let user = new userName();
// let user2 = new userName();
// user2.age = 34;
// console.log(user.age) // 33
// console.log(user2.age) //34

// -----literal
// let userName = {
//   lname : "soliman",
//   age : 33
// }
// let user = userName;
// let user2 = userName;
// user2.age = 34;
// console.log(user.age) //34
// console.log(user2.age) //34


// let myVar = "theAge";

// let user = {
//   // Properites
//   theName : "Osama",
//   theAge : 38,
//   "country-of" : "Egypt",
//   // Methods
//   sayHello: function (){
//     return `Hello`
//   }
// }

// console.log(user.sayHello()) //Dot notation
// console.log(user["country-of"]) //Bracet Notation
// console.log(user["theName"]) //Bracet Notation
// console.log(user.theAge)
// console.log(user[myVar])

// Nested Object

// let user = {
//   Name : "Osama",
//   lastName : "ahmed",
//   age : 38,
//   skills: ["HTML", "CSS", "JS"],
//   availabe : false,
//   addresses : {
//     KSA : "Jeddah",
//     egypt : {
//       one : "Cairo",
//       two : "Alex",
//     },
//   } ,
//   checkAv : function() {
//     if (this.availabe === true) {
//       return `Free`;
//     } else {
//       return `Not Free`;
//     }
//   },
//   fullName : function(){
//     return this.Name + " " +this.lastName
//   }
// };

// console.log(user.Name);
// console.log(user.age);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]["one"]);
// console.log(user.checkAv());
// console.log(user.fullName());


// This
// This if it is inside function it will refer to window Object but if it's inside function inside specific Object this will refer to ( specific Object)

//-----Create Object with Object.create()
// The Object.create() method creates a new object, 
// using an existing object as the prototype of the newly created object.
// when you use Object.create() the new object does not have same reference to original object
// so changing any properity will not effet the original object

// let user = {
//   age: 40,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({})
// console.log(obj)

// with Create Method you can use another Object as a Model like creating new object from constractor
// let objUser = Object.create(user)
// objUser.age =  30;
// console.log(objUser);
// console.log(objUser.age);
// console.log(objUser.doubleAge());

//----Create Object with Object.assign()

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };
// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   // when he find 2 properties with same name will take first one
//   prop1: 100,
//   prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);

// finalObject.prop1 = 200;

// console.log(finalObject);

// // you can add {} empty object as target and yoou can add properties also like { prop4: 4 }
// let newObject = Object.assign({}, obj1, obj2, { prop4: 4 });

// console.log(newObject);

// ---Create Object using ES6 Classes
// class Person {
//   constructor(fname, lname) {
//     this.firstName = fname;
//     this.lastName = lname;
//   }
// }

// const person = new Person('testFirstName', 'testLastName');

// console.log(person.firstName); // testFirstName
// console.log(person.lastName); // testLastName

/* to Create iterable Object from Object you have 3 methods
1- Object.keys(myObj) // retrun array of keys
2- Objetc.values(myObj) // return array of values
3- Object.entries(myObj) // return array of arrays each array contain [key, value]

iterable means has built in [symbol.iterator]
iterable means have indexing and length property
iterable also means you can use with it 
for of loop
forEach() | filter() | map() | reduce()
*/

// Home-Made iterable Object
// let range = {
//   from: 1,
//   to: 5
// };

// 1. call to for..of initially calls this
// range[Symbol.iterator] = function() {

//   // ...it returns the iterator object:
//   // 2. Onward, for..of works only with the iterator object below, asking it for next values
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() is called on each iteration by the for..of loop
//     next() {
//       // 4. it should return the value as an object {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };

// // // now it works!
// for (let num of range) {
//   console.log(num); // 1, then 2, 3, 4, 5
// }

// Home-Made iterable Object (smaller) 

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   }
// };

// for (let num of range) {
//   console.log(num); // 1, then 2, 3, 4, 5
// }



// -------Array like Object------------ 
/* [1] to transfer Object to Array like object ( keys should be like index 0,1,2 and write length)
let myObj = {
  0: "M",
  1: "A",
  2: "S",
  length: 3
}

let myString = "Soliman"
console.log(Array.from(myObj)) // ["M", "A", "S"]
console.log(Object.values(myObj)) // ["M", "A", "S", 3]

[2] Arguments is Array like Object
function arg (a,b) {
  console.log(arguments)
}
arg(1,2)

[3] HTMLCollection is Array like object
let li = document.getElementsByTagName("li")
console.log(li)

** How to convert array like object to array
[1] using spread operator and []
function arg (a,b) {
  console.log([...arguments])
}
arg(1,2)

[2]Using Array.from 
let li = Array.from(document.getElementsByTagName("li"))
console.log(li)

[3]Using slice()
let li = Array.prototype.slice.call(document.getElementsByTagName("li"))
console.log(li)
// [1,2,3,4].slice() will return [1,2,3,4] but how it works ?
slice will iterate over the array and the array is the value of this keyword 
and with array like object you can bind it to make it the value of this then slice will
iterate over it (array like object have index and length so slice will consider it as array)
*/

//---------------iterators and Generators

// -------------iterator ([Symbol.iterator])

/* 
iterable means Object has built in [symbol.iterator]
you can change not iterable object to iterable object by adding [symbol.iterator] or change it to array:

* Adding [Symbol.iterator] to Object

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

((((my Way ))))
myObj = {
  one : "M",
  two : "A",
  three : "C",
  [Symbol.iterator]() {
    this.current = Object.keys(this).indexOf(Object.keys(this)[0])
    return this;
  },
  next() {
    let lenght = Object.keys(this).length
    if ( this.current < (lenght - 2)) {
      return { done: false, value: this[Object.keys(this)[this.current++]] };
    } else {
      return { done: true };
    }
  }
}
for(x of myObj){
  console.log(x)
}

* Hint if you want to use next() on built-in [symbol.iterator] Objects like array:
The entries() method returns a new Array iterator object 
that allows you to iterate through the key/value pairs in the array. 
The Array iterator object has a built-in method called next() that can be used to get the next value.
you can not find str.entries() and if you use Object.entries(str) will return array of [index , value] arrays 

let arr = ["Mohamed", "Ahmed", "Soliman"]
let ite = arr.entries()
// let ite = arr.keys()
// let ite = arr.values()
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())

* to change array or string to iterator you can use str[Symbol.iterator]() :
let str = "Soliman"
let ite = str[Symbol.iterator]();
console.log(ite.next())
let arr = [1,2,3,4]
let ite = arr[Symbol.iterator]();
console.log(ite.next())


* Changing Object to Array by :
* Object.keys - Object.entries - Object.values
* Array.From ( after adding index and length to Object)

myObj = {
  0 : "M",
  1 : "A",
  2 : "C"
}
let arrObj = Object.values(myObj)
console.log(arrObj)

myObj = {
  0 : "M",
  1 : "A",
  2 : "C",
  length : 3
}
let arrObj = Array.from(myObj)
console.log(arrObj)
*/

// -------------------------Generator----------------------------------
/* difference between generator and normal function

* Normal Function once you invoke it you can not pause it ... it will finish then other codes will run after it

* Generator you can pause it and other codes will run then you can resume it from the point you paused it
ES6 generator functions are "cooperative" in their concurrency behavior. 
Inside the generator function body, you use the new yield keyword to pause the function 
from inside itself. Nothing can pause a generator from the outside; 
it pauses itself when it comes across a yield.
However, once a generator has yield-paused itself, 
it cannot resume on its own. An external control must be used to restart the generator.
With normal functions, you get parameters at the beginning and a return value at the end. 
With generator functions, you send messages out with each yield, 
and you send messages back in with each restart.

* generator is iterable

* step by step how generator works :
1st next() yield 1 will pause the generator and return 1 then 2nd next() will resume from yield 2 then pause and return 2
function *Yield() {
  yield 1;
  console.log("After Yield one")
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
let genY = Yield()
console.log(genY.next())
console.log(genY.next().value) // to give you only the value
console.log(genY.next().done) // to give you false or true
console.log(genY.next())
console.log(genY.next())
console.log(genY.next())

//will loop over every thing not only yield so txt from console.log() will be printed out also
for (let x of Yield() ){
  console.log(x)
} // 1, After Yield one , 2 ,3 ,4

* other complicated Exp. : 
function *foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}
var it = foo( 5 );
console.log( it.next() );       // { value:6, done:false }
console.log( it.next( 12 ) );   // { value:8, done:false }
console.log( it.next( 13 ) );   // { value:42, done:true }

The yield (x + 1) is what sends out value 6. The second next(12) call sends 12 
to that waiting yield (x + 1) expression, so y is set to 12 * 2, value 24. 
Then the subsequent yield (y / 3) (yield (24 / 3)) is what sends out the value 8. 
The third next(13) call sends 13 to that waiting yield (y / 3) expression, making z set to 13.
Finally, return (x + y + z) is return (5 + 24 + 13), or 42 being returned out as the last value.

* invoke normal function inside generator:
function foo(x) {
  console.log(x)
}

function *bar() {
  yield;
  foo (yield);
}
let gen = bar()
console.log(gen.next())
console.log(gen.next())
// here we pass argument to yield and will be argument to foo() function
console.log(gen.next(7))

* using for..of with generator:
As long as done is false, it automatically extracts the value property and assigns 
it to your iteration variable (v in our case). Once done is true, the loop iteration stops 
(and does nothing with any final value returned, if any).
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
    //yield 6;
}
for (var v of foo()) {
    console.log( v );
} // 1 2 3 4 5
will not print 6 because last next() of return will be like
{ value:6, done:true } not done:false like using yield

*/

// Generators are functions that you can use to control the iterator.
// They can be suspended and later resumed at any time.

// for (let i = 0; i < 3; i++ ) {
//   console.log(i)
// }


// suspend for loop
// function* loopGenerator () {
//   for (let i = 0; i < 3; i++ ) {
//     yield (i)
//     // return (i)
//   }
// }

// let startGenerator = loopGenerator();
// console.log(startGenerator.next())
// console.log(startGenerator.next())
// console.log(startGenerator.next())
// console.log(startGenerator.next())

// useCase of generators is 
// make infinite loop but will not freeze you pc because it's suspended and only works once you ask by .next()


// function* generateId() {
//   let id = 1;
//   while(true) {
//     yield id
//     id++
//   }
// }

// let genId = generateId()
// console.log(genId.next())
// console.log(genId.next())
// console.log(genId.next())
// console.log(genId.next())
// console.log(genId.next())
// // when you declare a new variable you get new object and will not affect the 1st generator
// let genId2 = generateId();
// console.log(genId2.next())//1
// console.log(genId2.next())//2
// console.log(genId2.next())//3
// // will not affect the 1st generator
// console.log(genId.next()) //6
// console.log(genId2.next())//4
// console.log(genId2.next())//5

// you can pass argument to next() and this will be yield inside generator
// function* generateId() {
//   let id = 1;
//   while(true) {
//     const increment = yield id
//     console.log("hi")
//     // null == undefined => true | null === undefined => false
//     if (increment != null) {
//       id += increment
//     } else {
//       id++
//     }
//   }
// }

// let genId = generateId();

// // Will not work on first next() beacuse yield is not exist yet
// // you have to trigger generator by next() then yield will be available
// At this point you have an yield at your disposal and you can push your value via genId.next()
// console.log(genId.next())
// console.log(genId.next())
// console.log(genId.next())
// console.log(genId.next())
// // if you want to exist the generator just write return
// console.log(genId.return(10))
// // throw() to give error
// console.log(genId.throw("ERROR 404"))


// generator with Array 

// function* arrayGenerator (array) {
//   for ( i = 0 ; i < array.length; i++) {
//     yield array[i]
//   }
// }

// let arrGen = arrayGenerator([1,2,3]);

// console.log(arrGen.next())
// console.log(arrGen.next())
// console.log(arrGen.next())
// console.log(arrGen.next())




// return vs yield

// It???s a bit like return, but not. Return simply returns the value after the function call,
// and it will not allow you to do anything else after the return statement.

// if you use return with generator it will stop generator after 1st return ( look exp. above)

// Yield with asterisk can delegate it???s work to another generator. 
// This way you can chain as many generators as you want. (look exp. below)

// convert string Object to string using valueOf()
// let strObj = new String("Soliman")
// console.log(strObj)
// console.log(strObj.valueOf())

// ----------for... of loop--------------
/* For...of loop works only on :
[1] Built-in (symbol.iterator) like Array , String , Map , Set , ...
[2] Array Like Objects like Arguments , NodeList , HTMLCollection , ...
[3] User defined Object ( that we add [symbol.iterator] and next() manually)
*/

//----------for...in loop----------
/* The for...in iterates over all enumerable properties of an object. 
It doesn???t iterate over a collection such as Array, Map or Set.
Unlike the for...in loop, the for...of iterates a collection, 
rather than an object. In fact, the for...of??iterates over elements 
of any collection that has the??[Symbol.iterator] property.
*/

// for...of loop vs for...in loop and iterable vs enumerable
/*
if enumerable: false this property will not show in for...in loop
if enumerable: true this property will show in for...in loop

let obj = {firstName : "Mohamed", lastName : "Hussein"}
obj.age = 33
Object.defineProperty(obj , "middleName" , { value : "Ahmed", enumerable: false})
for(x in obj) {
  console.log(x)
}

you can also do it with array and properties will be the index of array
let arr = [1,2,3,4]
arr[4] = 5 // will show on for...of because property name no. like index
// arr.four = 5 // will not show on for...of because property name is not a no. like index
// will show on for...of because property name no. like index
Object.defineProperty(arr , 5 , { value : 6 , enumerable: true})
// will not show on for...of because property name is not a no. like index
// Object.defineProperty(arr , 5 , { value : 6 , enumerable: true})
// will return properties ( index)
for (x in arr) {
  console.log(x)
}
// will return values because array is iterable
for (x of arr) {
  console.log(x) // 1 2 3 4 5 6
}

------for...in loop vs hasOwnProperty -----
The hasOwnProperty() method returns true if the specified property is a direct property of the object ??? 
even if the value is null or undefined. The method returns false if the property is inherited, 
or has not been declared at all. Unlike the in operator, 
this method does not check for the specified property in the object's prototype chain.
*/
// ------Object Property Descriptor-------
/* 
Descriptor Groups : 
* DATA
* value -- get() => Accessor Property
* writable -- set() => Accessor Property
* configurable 
* enumerable

let obj = {
  firstName : "Mohamed",
  age : 33
}
Object.defineProperty(obj , "lastName", {
  value : "Hussein",
  writable : true, 
  configurable : true,
  enumerable : true
})
obj.lastName = "Soliman"
console.log(obj.lastName) // Hussein if writable is false | Soliman if writable is true

// using get and set
// let obj = {
//   firstName : "Mohamed",
//   age : 33
// }
// Object.defineProperty(obj , "lastName", {
//   // this here refers to window object
//   // get : () => this.lastName,
//   // set : (val) => {
//   //   this.lastName = val + " from setter method"
//   // },
//   // this here refers to obj
//   get : function () {
//     return this.lastName = value
//   },
//   set : function (val) {
//     return value = val + "!"
//   },
//   configurable : true, 
//   enumerable : true
// })
// obj.lastName = "Hussein"
// console.log(obj)
// console.log(Object.defineProperties(obj, { 
  property1 : {
    ......
  },
  property2 : {
    .......
  }
}))

// Default values will be different if property already exist in object or not 
var obj = {};

obj.a = 1;
// is equivalent to:
Object.defineProperty(obj, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
});

// On the other hand,
Object.defineProperty(obj, 'a', { value: 1 });
// is equivalent to:
Object.defineProperty(obj, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
});

// console.log(Object.getOwnPropertyNames(obj)) //return array of properties names
// console.log(Object.getOwnPropertyDescriptor(obj,"age")) // return info for property
// console.log(Object.getOwnPropertyDescriptors(obj)) // return info for all property
// console.log(Object.keys(obj)) // return list of enumerable properties
// console.log(Object.values(obj)) // return list of enumerable properties
// console.log(obj.propertyIsEnumerable("lastName")) // return Boolean value
// console.log(obj.hasOwnProperty("lastName")) // return Boolean value


Objects can be 
1. Extensible - new properties added 
2. Frozen - props cannot be changed in any way 
3. Sealed - props can't be deleted or configured but are still writable 

Object PROPERTIES can be 
1. Writable - change the value 
2. Enumerable - seen through a for...in loop 
3. Configurable - change the property descriptors  or delete

Object.isExtensible(obj) 
Object.isFrozen(obj) 
Object.isSealed(obj) 
Object.preventExtensions(obj) 
Object.freeze(obj) 
Object.seal(obj)

let obj  = {
  prop1 : "test"
}
let objProto = {}
Object.seal(obj)
Object.freeze(obj)
Object.preventExtensions(obj)


                          seal()            freeze()              preventExtensions()
* Add new prop              no                no                        no
* Edit prop value           yes               no                        yes
* Delete a prop             no                no                        yes
* Change descriptors        no                no                        yes
* Reassign __proto__        no                no                        no

// Object.freeze is shallow nested array is mutable 
let arr = [1,2,3,[4,5]]
Object.freeze(arr)
arr[0] = 9;
arr[3][1] = 7
console.log(arr) // [1,2,3,[4,7]]
*/


// -------Data property vs Accessor Property-------------
/*

In JavaScript, accessor properties are methods that get or set the value of an object. 
For that, we use these two keywords:
* get - to define a getter method to get the property value
* set - to define a setter method to set the property value

let obj =  {
  // Data property
  firstName : "Mohamed",
  // Accessor Property(getter)
  get getName () {
    return this.firstName
  },
  // Accessor Property(getter) must have exactly one parameter
  set changeName (newName) {
    this.firstName = newName
  }
}
obj.changeName = "Soliman"
console.log(obj.getName)
*/


// -----DOM ( Document Object Model)--------

/*
The Document Object Model (DOM) connects web pages to scripts or programming 
languages by representing the structure of a document???such as the HTML 
representing a web page???in memory. Usually it refers to JavaScript, 
even though modeling HTML, SVG, or XML documents as objects are not part of 
the core JavaScript language.
The DOM represents a document with a logical tree. 
Each branch of the tree ends in a node, and each node contains objects. 
DOM methods allow programmatic access to the tree. With them, you can change 
the document's structure, style, or content.

"The W3C Document Object Model (DOM) is a platform and language-neutral 
interface that allows programs and scripts to dynamically access and update 
the content, structure, and style of a document."

The W3C DOM standard is separated into 3 different parts:
* Core DOM - standard model for all document types
* XML DOM - standard model for XML documents
* HTML DOM - standard model for HTML documents

The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

* The HTML elements as objects
* The properties of all HTML elements
* The methods to access all HTML elements
* The events for all HTML elements

In the DOM, all HTML elements are defined as objects.

The programming interface is the properties and methods of each object.

A property is a value that you can get or set (like changing the content of an HTML element).
A method is an action you can do (like add or deleting an HTML element).
*/

/* 
---------Node Types-----------
let nodeTypes = {
  1 : "Element",
  2 : "Attribute"
  3 : "Text",
  8 : "Comment",
  9 : "Document",
  10 : "DocType",
  11 : "Document Fragment"
}
when you use nodeType will return a no. 
let df = new DocumentFragment()
let txt = document.createTextNode("a text node")
df.appendChild(txt)
console.log(df.nodeType) // 11
console.log(txt.nodeType) // 3

* node.nodeValue => return value of node
* node.parentNode => return parent of child node
* node.nodeType => return no. of node Type see nodesTypes above
* node.ownerDocument => return the root element as Object ( in HTML html is always the owner)
* node.nodeName => if node is element return tag name
                  if node is attribute return attribute name

let span = document.querySelector("span")
let txt = document.createTextNode("a text node") 
console.log(txt.nodeValue) //use nodeValue for text node
console.log(span.textContent) //use innerHTML for element
*/



/* 
-------Difference between HTMLCollection and NodeList----------

HTMLCollection : 
* only Elements Nodes
* live ( means any change the HTMLcollection will be updated )
Exp :
[1] document.getElementsByClassName()
[2] document.getElementsByTagName()

NodeList :
* any type of Nodes => elements , text , comment ,....
* static (not live) (means nodeList will not update when changes happend) except childNodes & document.getElementsByName()
// exp. for childNodes
let div = document.querySelector("div")
let childnodes = div.childNodes
console.log(childnodes)
let span = document.createElement("span")
div.appendChild(span)
console.log(childnodes)

// nodeList has property length and method item(index)
// both are the same
document.body.childNodes.item(0)
document.body,childNodes[0]

let nodeDivs = document.querySelectorAll("div")
let htmlDivs = document.getElementsByTagName("div")
nodeDivs[0].remove()
console.log(nodeDivs) // nodeList // 4 divs because nodeList is not live
console.log(htmlDivs) // HTMLCollection // 3 divs because HTMLcolletion is live

let div = document.querySelector("div")
console.log(div.children) // return HTMLCollection (Elements only)
console.log(div.childNodes) // return NodeList ( all types of nodes )

- NodeList is not an array, it is possible to
iterate over it with
forEach ( ) . It has its own forEach() method."

- HTMLCollection is array-like but you cannot iterate over its
elements using forEach()
if you need to use forEach() on HTMLCollection you can use call and add HTMLCollection as thisArg :
[].forEach.call(HTMLCollection, function(element){
  console.log(element)
})

*/

// let df = new DocumentFragment()
// let txt = document.createTextNode("a text node")
// df.appendChild(txt)
// document.body.appendChild(df)
// console.log(txt.ownerDocument)

// -------------solve Live collection Problem ---------------

/* 
* when you assign length to variable (htmlLiveLength) 
you are assigning a number (primitive value (immutable)) so after changing HTMLCollection
will not affect that variable 

* el4Html in this variabel you try to access el4 but not yet exist so retrun undefined 
and assign undefined (primitive value(immutable)) so after changing HTMLCollection
will not affect that variable

* but when you assign HTMLCollection to variable (htmlLive) you are assign host Object (by reference) 
not primitive value so after changing HTMLCollection will change that variable 

*/
// let live = document.getElementById("live")
// let el1 = document.createElement("div")
// let el2 = document.createElement("div")
// let el3 = document.createElement("div")
// let el4 = document.createElement("div")

// let htmlLive = document.getElementsByTagName("div")
// let htmlLiveLength = document.getElementsByTagName("div").length
// let el4Html = document.getElementsByTagName("div")[3]
// console.log(htmlLive) // HTMLCollection[]
// console.log(htmlLiveLength) // 0
// console.log(htmlLive.length) // 0
// console.log(el4Html) // undefined
// console.log(htmlLive[3]) // undefined
// live.append(el1,el2,el3,el4)
// console.log(htmlLive) // HTMLCollection(4)
// console.log(htmlLiveLength) // 0
// console.log(htmlLive.length) // 4
// console.log(el4Html) // undeined
// console.log(htmlLive[3]) // div

/* to solve live problem you have to convert HTMLCollection to Array by three ways:
[1] Array.from()
let htmlLive = Array.from(document.getElementsByTagName("div"))

[2] spread Opertator
let htmlLive = [...document.getElementsByTagName("div")]

[3] slice
let htmlLive = [].slice.call(document.getElementsByTagName("div"))
*/

/* --------------NamedNodeMap----------------
A NamedNodeMap is an array-like unordered collection of an element's attributes.
In other words: a NamedNodeMap is a list of Attr objects.

A NamedNodeMap has a length property that returns the number of nodes.
The nodes can be accessed by name or index numbes. The index starts at 0.

NamedNodeMap Properties and Methods

* getNamedItem() => Returns an attribute node (by name) from a NamedNodeMap
* Item() => Returns an attribute node (by index) from a NamedNodeMap
* Length => Returns the number of attributes in a NamedNodeMap
* removeNamedItem() => Removes an attribute (node)
* setNamedItem() => Sets an attribute (node) by name

let span = document.querySelector("span")
console.log(span.attributes.getNamedItem("class"))
console.log(span.attributes.item(1))
span.attributes.removeNamedItem("class")
console.log(span)
// setNamedItem way
let node = document.createAttribute("class")
node.value = "hi"
span.attributes.setNamedItem(node)
console.log(span)
// setAttribute way
span.setAttribute("class", "hi")
console.log(span)

let span = document.querySelector("span")
let nodeMap = span.attributes
let nodeList = document.querySelectorAll("div")
let htmlCol = document.getElementsByTagName("div")
console.log(nodeMap)
console.log(nodeList)
console.log(htmlCol)
span.setAttribute("class", "hi")
let div3 = document.createElement("div")
document.body.appendChild(div3)
console.log(nodeMap) // live
console.log(nodeList) // static
console.log(htmlCol) // live
*/

/*  -----------DOMTokenList------------
A Collection of attributes and it's not Live
represent a set of space-separated tokens returned by Element.classList or HTMLLinkElement.relList

[1] properites :
*length *value
[2] Methods :
* DOMTokenList.item()
* DOMTokenList.contains()
* DOMTokenList.add()
* DOMTokenList.remove()
* DOMTokenList.replace()
* DOMTokenList.supports()
* DOMTokenList.toggle()
* DOMTokenList.froEach()
* DOMTokenList.keys()
* DOMTokenList.values()

let div = document.querySelector("div")
let divClasses = div.classList
let divAttr = div.attributes
console.log(divClasses) // DOMTokenList => return array of value of the class
console.log(divAttr) // NamedNodeMap => return array of  attributes ( class, id, ....)
console.log(divAttr.getNamedItem("class")) // return value of specific attribute (class)

*/


// let myIdElement = document.getElementById("my-div"); // by ID
// let myTagElement = document.getElementsByTagName("p") // by Tag
// let myClassElement = document.getElementsByClassName("my-span")// by class-name
// // querySelector select only first element if more than one elements has the same class
// // let myQueryElement = document.querySelector(".special")
// // let myQueryElement = document.querySelector(".special")
// let myQueryElement = document.querySelector("#my-div")
// let myQueryAllElement = document.querySelectorAll(".my-span")

// console.log(myIdElement)
// console.log(myTagElement[1])
// console.log(myClassElement[1])
// console.log(myQueryElement)
// console.log(myQueryAllElement[0])

// myTagElement[1].innerHTML = "test" // to change content
// myTagElement[1].innerText = "test" // to change content
// myTagElement[1].TextContent = "test" // to change content


// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);

// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML); // return as written in HTML File
// console.log(myElement.textContent); // return as Shown at Webpage

// myElement.innerHTML = " Text From <span>Main.js</span> File";
// myElement.textContent = " Text From <span>Main.js</span> File";

// those are shortcut for setAttribute
// document.images[0].src = "https//google.com"
// document.images[0].alt = "Alternat"
// document.images[0].title = "Picture"
// document.images[0].id = "pic"
// document.images[0].className = "img"

// document.links[0].href = "https//facebook.com"

// let myLink = document.querySelector(".link")

// console.log(myLink.getAttribute("href"))
// console.log(myLink.getAttribute("class"))

// myLink.setAttribute("href", "https://twitter.com")
// myLink.setAttribute("title", "twitter") // if attribute not exist will create it automatically

/* Method to Check Attribute
- Element.atrributes
-Element.hasAttibute
-Element.hasAttributes ( here you don't write anything between () this only to check if this element has any type of attributes or not)
-Element.removeAttribute */

// console.log(document.getElementsByTagName("p")[0].attributes)

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) {
//   console.log("found")
// } else {
//   console.log("Not Found")
// }

// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src")
//   } else {
//     myP.setAttribute("data-src", "New Value")
//   }
// } else {
//   console.log("Not Found")
// }

// if (myP.hasAttributes()) {
//   console.log("Has Attributes")
// }

// if you use querySelectorAll or getElementsByClassName it will return Array and you have to iterate them to change all elements

// let myPs = document.querySelectorAll("p");

// (function() {
//   for ( let i =0; i < myPs.length; i++) {
//     myPs[i].innerHTML = `Hello ${i}`
//   }
// })();

// let myEl = document.querySelector(".test")
// myEl.setAttribute("title" , "test50")

// console.log(myEl.title)

/* Create Element 
-createElement
-createComment
-createTextNode
-createAttribute
-appendChild */

// let myElement = document.createElement("div")
// let myAttribute = document.createAttribute("data-custom")
// let myText = document.createTextNode("Product One")
// let myComment = document.createComment(" This Is Div")
// myElement.className = "Product";

// myElement.setAttributeNode(myAttribute)
// myElement.setAttribute("data-test", "testing")
// // if you want to change value of custom attribute you can use setAttribute or dataset
// // but you can't change it directly like normal attributes
// // myElement.data-custom = "hello" // Error
// // myElement.setAttribute("data-custom", "hello")
// myElement.dataset.custom = "helloooo"
// // if you want to access custom attribute you can do it only getAttribute
// console.log(myElement.getAttribute("data-custom"))


// console.log(myElement)

// // Append Comment to Element
// myElement.appendChild(myComment)

// // Append Text To Element
// myElement.appendChild(myText)

// // Append Element to Body
// document.body.appendChild(myElement)


// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// // Add Heading Text
// myHeading.appendChild(myHeadingText)
// // Add Heading to Main Element
// myMainElement.appendChild(myHeading)

// // Add Paragraph Text
// myParagraph.appendChild(myParagraphText)
// // Add Paragraph to Main Element
// myMainElement.appendChild(myParagraph)

// // you can add more than one element at same time but by using Append
// // myMainElement.append(myHeading, myParagraph)

// // Add Class to Main Element
// myMainElement.className = "Product";

// document.body.appendChild(myMainElement);

// ------Small Challeng 100 times -----

// for (let i = 1; i <= 100; i++) {
//   let myMainElement = document.createElement("div");
//   let myHeading = document.createElement("h2");
//   let myParagraph = document.createElement("p");
//   myMainElement.className = "product";
//   let myHeadingText = document.createTextNode(`Product Title ${i}`);
//   let myParagraphText = document.createTextNode(`Product ${i} Description`);
//   myHeading.appendChild(myHeadingText);
//   myParagraph.appendChild(myParagraphText);
//   myMainElement.append(myHeading, myParagraph);
//   document.body.appendChild(myMainElement)
// }

// You Can use innerHTML or TextContent instead of creating TextNode the append them but TextNode and Append is better
// myHeading.innerHTML = `Product ${i} Title`
// myParagraph.innerHTML = `Product ${i} Description`
// myHeading.textContent = `Product ${i} Title`
// myParagraph.textContent = `Product ${i} Description`

// let myDiv = document.createElement("div");
// let myP = document.createElement("p");
// let mySpan = document.createElement("span");

// let myDivText = document.createTextNode("Hello Div");
// let my2ndText = document.createTextNode("Hello");
// let myComment = document.createComment("comment")

// let myPText = document.createTextNode("Hello P");
// myP.appendChild(myPText);

// let mySpanText = document.createTextNode("Hello Span");
// mySpan.appendChild(mySpanText)

// myDiv.append(myDivText, myP, mySpan, myComment, my2ndText)

// document.body.appendChild(myDiv)

// let myElement = document.querySelector("div");

// console.log(myElement);
// // give you only Elements
// console.log(myElement.children);
// //give you (Element , comment ,text, spaces) // spaces considerd as text 
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);
// // give you first child (Element , comment ,text, spaces)
// console.log(myElement.firstChild);
// console.log(myElement.lastChild);
// // give you only elements
// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);

// Events
/*
onclick
oncontextmenu (Right Click) 
onmouseenter (Hover)
onmouseleave (hover and leave)

onload
onscroll
onresize

onfocus
onblur ( opposite to Focus)
onsubmit
*/

// let myBtn = document.getElementById("btn")

// myBtn.onclick = function (){
//   console.log('click')
// }

// you can select element by it's atrribute
// let userInput = document.querySelector("[name='username']")
// let ageInput = document.querySelector("[name='age']")

// // the parameter here refer to onsubmit event itself not element (form[0])
// // this refer to element (form[0]) that recieve the event(submit)
// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }
//   if (ageInput.value !== "" && !isNaN(ageInput.value) ) {
//     ageValid = true;
//   }

//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

// document.links[0].onclick = function (event) {
//   console.log(event)
//   console.log(this)
//   event.preventDefault();
// }


// Event Simulation

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function() {
//   two.focus();
// }

// one.onblur = function () {
//   document.links[0].click();
// }

// let element = document.getElementById("my-div");
// console.log(element.classList);
// console.log(typeof element.classList)
// console.log(element.classList.contains("one"))
// console.log(element.classList.contains("soliman"))
// console.log(element.classList.item(3))

// element.onclick = function () {
//   element.classList.add("add-one", "add-two")
//   element.classList.remove("one", "two")
//   // toggle will search if exist will remove it if not exist will add it
//   element.classList.toggle("soliman")
// }

// let element = document.getElementById("my-div")

// // considerd as in-line Style
// element.style.color ="white"
// // like CSS but without - and use CamelCase
// element.style.backgroundColor = "blue"
// element.style.fontWeight = "bold"

// // here write like CSS
// element.style.cssText = "font-weight:bold; color:green; background-color:white; opacity:0.9;"

// element.style.removeProperty("color")
// // here write name and value and you can add important flag
// element.style.setProperty("font-size", "40px" ,"important" )

// // to Change the CSS File
// document.styleSheets[0].rules[0].style.removeProperty("font-style");
// document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important")

// ---------- Difference between innerText , innerHTML , textContent ------- 

// // The innerText property returns just the text, without spacing and inner element tags. 
// // innerText will not return the text of elements that are hidden with CSS (textContent will). 
// (function getInnerText() {
//     console.log(document.getElementById("demo").innerText)
//   })();
  
  // The innerHTML property returns the text, including all spacing and inner element tags.
  // (function getHTML() {
  //   console.log(document.getElementById("demo").innerHTML)
  // })();
  
  // The textContent property returns the text with spacing, but without inner element tags.
  // (function getTextContent() {
  //   console.log(document.getElementById("demo").textContent)
  // })();

  // ----- diference between innerHTML and outerHTML see photo on iphone

// DOM [Deal With Elements]
/* 
  before
  after
  append
  prepend
  remove */

// let element = document.getElementById("my-div");

// let createdP = document.createElement("p");

// // Add outside element and Accept Node or String
// element.before("Hello Before From JS");
// // when you have 2 after the last one will be directly after the element not at the end
// element.after("Hello After From JS");
// element.after(createdP);

// // will add at the beginnig (inside element)
// element.prepend("Hello top From Js ")

// // will add at the end (inside element)
// element.append(" Hello bottom From Js")

// element.remove()

// let span = document.querySelector(".two");
// console.log(span.nextSibling) // comment
// console.log(span.nextElementSibling) // span three
// console.log(span.previousSibling) // comment
// console.log(span.previousElementSibling) // span one
// console.log(span.parentElement) // div

// span.onclick = function() {
//   // span.parentElement.remove();
//   span.parentElement.style.opacity = 0;
// }

// to take a copy of elements and it's attributes
// false (default Value) take atrributes but not take the content of Element
// true will copy the content also
// let myP = p.cloneNode(true)
// let myDiv = document.querySelector("div")

// // you have to change id because id unique and can't be twice
// // myP.id = "clone"
// myP.id = `${myP.id}-clone`

// myDiv.appendChild(myP)

// let myP = document.querySelector(".myp");

// myP.onclick = function () {
//   console.log("Message From OnClick")
// }

// function one() {
//   console.log("Message From OnClick 1")
// }
// function two() {
//   console.log("Message From OnClick 2")
// }

// myP.addEventListener("click", function() {
//   console.log("Message From OnClick Event")
// })

// // with addEventListener you can add more than one event and the 2nd event will not ovrride the 1st one both will work
// // same names of events but without (on) click instead of onclick
// // give you error if you write something Wrong

// myP.addEventListener("click", one)
// myP.addEventListener("click", two)

// function cloneMe() {
//   let clone = myP.cloneNode(true);
//   clone.className ="clone"
//   myP.after(clone);
//   // document.body.appendChild(clone)
// }

// // we can not select the cloned because it is not exist
// let cloned = document.querySelector(".clone")

// function again() {
//   console.log("I Am Cloned")
// }

// myP.addEventListener("click", cloneMe )
// //  we can not access clone because it is inside a function
// clone.addEventListener("click", again )

// big advantage of addEventListener that you can select element not exist yet
// document.addEventListener("click", function(e) {
//   if (e.target.className === "clone") {
//     console.log("I Am Cloned")
//   }
// })

/* 

// -------------Keyboard Event-----------------
// // to get unicode of pressed key
// // depend on which browser one of these property will work (ev.char || ev.charCode || ev.which)
// let input = document.getElementById("inputKey")
// // will trigger event only when you focus at input and press any Key
// input.addEventListener("keydown", function(ev){
//   let char = ev.char || ev.charCode || ev.which
//   let pressedKey = String.fromCharCode(char)
//   console.log(ev.currentTarget.tagName) // input
//   console.log(pressedKey)
// })
// // will trigger event when you press any key 
// document.body.addEventListener("keydown", function(ev){
//   let char = ev.char || ev.charCode || ev.which
//   let pressedKey = String.fromCharCode(char)
//   console.log(ev.currentTarget.tagName) //body
//   console.log(pressedKey)
// })
--------------Document Fragment-------------------
let ul = document.getElementById("ul")
console.log(ul)
let games = [ "Horizon", "WarZone", "God of War", "The Last Of Us"]

// without Document Fragment will loop on array and add element to HTML file 4 times
games.forEach( game => {
  let li = document.createElement("li")
  li.textContent = game
  ul.appendChild(li)
}) 

// using Document fragment to loop and add to fragment then add it once to HTML file
let df = new DocumentFragment()
games.forEach( game => {
  let li = document.createElement("li")
  li.textContent = game
  df.appendChild(li)
}) 
ul.appendChild(df)

*/
/* -------namespaces------------
if you have 2 js files you can not declare variables with same name
but the solution with namespaces

//here we used same variable name div and colorDiv 

let firstJS = {
  colorDiv : function(e) {
    e.currentTarget.style.color = "blue"
  },
  eventFunc : function(){
    let div = document.querySelector("#first")
    div.addEventListener("click", this.colorDiv)
  }
}
firstJS.eventFunc()

let secondJS = {
  colorDiv : function(e) {
    e.currentTarget.style.color = "red"
  },
  eventFunc : function(){
    let div = document.querySelector("#second")
    div.addEventListener("click", this.colorDiv)
  }
}
secondJS.eventFunc()

*/

// ------- BOM --------
/* 
The window object is supported by all browsers. It represents the browser's window.
All global JavaScript objects, functions, and variables automatically become members of the window object.
Global variables are properties of the window object.
Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object:
window.document.getElementById("header");
document.getElementById("header");
*/
// if you are at global scope there is no difference between :
// window.alert("Hi1");
// this.alert("Hi2");
// alert("Hi3")

// alert will stop everything till you press ok
// alert("Test");
// console.log("Test")

// let confirmMsg = confirm("Are You Sure?");
// console.log(confirmMsg) // boolean Value

// if (confirmMsg === true) {
//   console.log("Item Deleted")
// }else {
//   console.log("Item Not Deleted")
// }

// accept 2 parameters message and default message
// let promtMsg = prompt("Suitable Day?", "Please write something!");
// console.log(promtMsg)

// Set timeout Method

// accept 2 values ( Function , time in mili seconds)
// setTimeout(function(){
//   console.log("Msg")
// }, 3000)

// setTimeout( sayMsg, 3000 );

// function sayMsg() {
//   console.log("I am Message")
// }

// you should write argument as 3rd argument in timeout Method not inside funtion like sayMsg("osama")
// setTimeout( sayMsg, 3000, "osama", 38);

// function sayMsg(user, age) {
//   console.log(`I am Message for ${user} his age is ${age}`)
// }

// counter or handler is a number like ID for setTimeout Method
// let counter = setTimeout( sayMsg, 3000);
// let handler = setTimeout (sayHello, 2000);

// console.log(counter);
// console.log(handler);

// function sayHello ()  {
//   console.log("Hello")
// }

// function sayMsg() {
//   console.log(`I am Message`)
// }

// let btn = document.querySelector("button")

// clearTimeout() clears a timer set -- parameter (id returned from setTimeout (counter , handler (any varaible name)))
// btn.onclick = function() {
//   clearTimeout(handler);
//   // clearTimeout(counter);
// }

// setInterval like setTimeout but interval repeat function every (time) but Timeout trigger function after (time)

// setInterval (function(){
//   console.log("Msg")
// },1000);

// setInterval (sayMsg,1000);
// function sayMsg() {
//   console.log("I am Message")
// }

// let div = document.querySelector("div");
// function countdown() {
//     div.innerHTML -= 1; // because let sum = "5" - 1 = 4
//     console.log(div.innerHTML)
//     if (div.innerHTML === "0") {
//         clearInterval(counter);
//       }
//     }
// let counter = setInterval(countdown, 1000);
    
// console.log(location);
// console.log(location.href);
// href does not delete History
// location.href = "https://google.com";
// to go section 2 with id #sec02
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.hash)
// change only hostname and leave rest of URL after / unchanged
// location.hostname ="google.com"
// location.protocol = "https"

// window.location.reload()
// // when you write url inside replace will delete the current page from History and go to new url
// window.location.replace("https://google.com")
// // assign will not delete the current page from History
// window.location.assign("https://google.com")

// will close only windows openend by JS
// window.close()
//

// setTimeout (function(){
//   // URL , Window Name, (_blank || _self),
//   window.open("https://google.com","blank","width=400,height=400,left=200,top=100")
// }, 1000)

// console.log(history.length)
// history.back()
// history.forward()
// history.go(0)  //reload
// history.go(-1)  //history.back()
// history.go(1)  //history.forward()

// stop() // to stop loading of webpage
// print() // to print the webpage
// _blank (default value) to open the new window in a new tab _self to open the new window at same tab
// let myNewWindow = window.open("https://google.com", "_self", "width=500,height=500")
// myNewWindow.focus()
// myNewWindow.close()

// accept X , Y
// window.scrollTo(5000, 5000);
// window.scrollBy(5000, 5000) //scroll from your current position

// chrome is so fast scrollTo() fires before chrome's default scroll you should give him delay
// setTimeout(() => {
//   window.scrollTo(5000, 5000);
// },2000)

// window.scrollTo({
//   left: 5000,
//   top: 5000,
//   behavior: "smooth"
// })

// scrollX = pageXOffset //pageXoffset for old browsers
// scrollY = pageYOffset //pageYoffset for old browsers

// let btn = document.querySelector("button")

// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     btn.style.display = "block"
//   }else {
//     btn.style.display = "none"
//   }
// }

// btn.onclick = function() {
//   window.scrollTo({
//   left: 0,
//   top: 0,
//   behavior: "smooth"
// })
// }

/* 
Bubbling vs Capturing 
element.addEventListener(event type , function , useCapture(true || false) )

[1] default value of useCapture is false
(that's means it is in Bubbling phase (event propagate from innermost child to parent (bubble up)))
let div = document.querySelector("div")
let span = document.querySelector("span")
// here will print "hi from span " then "hi from div" even if addEventListener of div before span
// because useCapture value is default (false) and it is in bubbling phase from innermost child to parent
div.addEventListener("click", function(){console.log("hi from div")})
span.addEventListener("click", function(){console.log("hi from span")})

[2] true value of useCapture 
(that's means it is in Capturing phase (event propagate from parent to innermost child) (bubble down))
let div = document.querySelector("div")
let span = document.querySelector("span")
// here will print "hi from div " then "hi from span" even if addEventListener of span before div
// because useCapture value is true and it is in Capturing phase from parent to innermost child 
span.addEventListener("click", function(){console.log("hi span")})
div.addEventListener("click", function(){console.log("hi div")},true)
*/

/* difference between stopPropagation() and stopImmediatePropagation()
((will be usefull if you have child element inside parent element and both have events))
[1] stopPropagation() will stop event to bubble up from child to parent
here will prevent div.addEventListener("click", color) when you click on span

let div = document.querySelector("div")
let span = document.querySelector("span")
function color(ev) {
  ev.stopPropagation()
  let target = ev.currentTarget;
  target.className = "color"
}
span.addEventListener("click", color)
div.addEventListener("click", color)

[2]stopImmediatePropagation() will stop event to bubble up and prevent 2nd event at same element
here will prevent div.addEventListener("click", color) and also span.addEventListener("click", function(){console.log("hi")})
let div = document.querySelector("div")
let span = document.querySelector("span")
function color(ev) {
  ev.stopImmediatePropagation()
  let target = ev.currentTarget;
  target.className = "color"
}
span.addEventListener("click", color)
span.addEventListener("click", function(){console.log("hi")})
div.addEventListener("click", color)

// note : if you use target instead of current target you will not need stopPropagation()
*/

/* 
Event delegation refers to the process of using event propagation (bubbling) 
to handle events at a higher level in the DOM than the element on which the event originated. 
It allows us to attach a single event listener for elements that exist now or in the future.
*/

/* difference between change and input and blur and focus
[1] input will excute function on each character you enter to input field
[2] change will only excute function when you blur after updating or inserting value to input field
and if you focus again and blur without changing the input value will not excute the function
will only excute function when you change the value
[3] blur will excute function when you focus in then focus out
[4] focus will excute function when you focus in
*/

/* difference between focus/blur and focusin/focusout
[1] focus/blur does not support bubbling
[2] focusin/focusout support bubbling

if you have input inside div parent 
let div = document.querySelector("div")
let input = document.querySelector(".input")
// focus will not work but focusin will work
div.addEventListener("focusin", function(ev){
  console.log(ev.target)
})
// if you want focus to work you can use useCapture (true)
div.addEventListener("focusin", function(ev){
  console.log(ev.target)
},true)

// note : here document is parent of input
document.addEventListener("focus" , function(e) {
  console.log(e.target)
})
*/

/* JS PopUp Boxes
[1] alert("this is alert")

[2] confirm("Are you Sure")
If the user clicks "OK", the box returns true. 
If the user clicks "Cancel", the box returns false.

[3] prompt("Enter your Password","Default value")
If the user clicks "OK" the box returns the input value. 
If the user clicks "Cancel" the box returns null.
*/

/*
to trigger callback function of event only one time you can remove the 
EventListener once the callback function triggered
ev.target.removeEventListener(ev.type, arguments.callee);
It can be used to refer to the currently executing function inside the 
function body of that function.
*/

/* -----------LocalStorage and SessionStorage------------
* setItem
* getItem
* removeItem
* key
* clear
* JSON.stringify ??? the JSON.stringify method converts any object or acceptable value into a string JSON
* JSON.parse ??? the JSON.parse method converts a string into its corresponding object or value as described by the string

--If we try to store a JavaScript object to localStorage without 
first converting it to a string, we will get an [object, object] 
response, as shown in the image.
--If we try to retrieve the object from localStorage without 
first parsing it, we would get back a string as a response. 
(see localStorage Challenge to understand)

* difference between cookies and localStorage and sessionStorage (see pic)

*/
// set
// window.localStorage.setItem("color", "red")
// window.localStorage.fontWeight = "bold"
// window.localStorage["fontSize"] = "20px";

// get
// window.localStorage.getItem("color")
// console.log(window.localStorage.getItem("color"))
// console.log(window.localStorage.color)
// console.log(window.localStorage["color"])

// // Get Key
// console.log(window.localStorage.key(0))

// // remove
// window.localStorage.removeItem("color")

// // clear (Remove All)
// window.localStorage.clear();

// // set Color In Page
// document.body.style.backgroundColor =  window.localStorage.getItem("color")

// console.log(window.localStorage)
// console.log(typeof window.localStorage)

// localStorage not saved in private Tab
// localStorage does not have exp. time but session storage removed once you close the window
// sessionStorage will remain if you duplicate the Tab
// window.localStorage.setItem("color", "red")
// window.sessionStorage.setItem("color", "blue")

// document.querySelector(".name").onblur = function(){
//   window.sessionStorage.setItem("inputName", this.value)
// }
// window.localStorage.clear()

/* Start Local Storage Color Application Practice */

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });

// another answer without localStorage 
// let container = document.querySelector(".experiment")

// document.addEventListener("click", function(e){
//   // container.style.backgroundColor = e.target.attributes.getNamedItem("data-color").value
//   container.style.backgroundColor = e.target.dataset.color
// })

/* End Local Storage Color Application Practice */

// Diffference between currentTarget and target :
// * target is the element that triggered the event (e.g., the user clicked on)
// * currentTarget is the element that the event listener is attached to. ( like this)

// const div = document.querySelector(".container");
// div.addEventListener("click", (e) => {
//   console.log("target", e.target);
//   console.log("currentTarget", e.currentTarget);
// });

// this = e.currentTarget  |  no this in arrow function
// const div = document.querySelector(".container");
// div.addEventListener("click", function (e) {
//   console.log("target", e.target);
//   console.log("currentTarget", this);
// });


//-----------------Destructuring Array----------------------
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
// Destruction Array should not be same no. -- you can write [a, b, c] = myFriends
// [a, b, c, d] = myFriends;
// e = osama / a = Ahmed because it have value in array but e does not
// [a = "A", b, c, d, e = "Osama"] = myFriends;
// console.log(a);
// // if you want to skip value in array leave space
// let [x, y, , z] = myFriends;
// console.log(z)

// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
// console.log(myFriends[3][2][1]);

// let [ , , , [ a, , [ , b]]] = myFriends;

// console.log(a);
// console.log(b);

// because string assigned by value not reference
// let book = "Video";
// let video = "Book";
// // Save Book Value In Stash
// let stash = book;
// // change book value
// book = video;
// // change video value
// video = stash;

// console.log(video, book)

// or you can use Destructuring Array to swap variables
// [book, video] = [video, book];
// console.log(video, book);

// you can use spread operator to get rest of elements in Array 
// const [x,...rest] = myFriends
// console.log(rest)

// you can use Destructuring Array with function return multiple values
// function stat(a, b) {
//   return [
//       a + b,
//       (a + b) / 2,
//       a - b
//   ]
// }
// let [sum, average, difference] = stat(20, 10);
// console.log(sum, average, difference); // 30, 15, 10

// we can use Destructuring Array to get index of array with entries() method
// let arr = [ "One","Two","Three","Four"]
// let arrIn = arr.entries()
// console.log(arrIn.next())
// console.log(arrIn.next())
// console.log(arrIn.next())
// console.log(arrIn.next())
// console.log(arrIn.next())
// for([index, value] of arrIn ) {
//   console.log(index , value)
// }

//------------------Destructuring Object From Elzero--------------------

// const user = {
//   theName : "Osama",
//   theAge : 39 ,
//   theTitle : "Developer",
//   theCountry : "Egypt",
//   theColor: "Black",
//   skills : {
//     html: 70,
//     css: 80,
//   }
// };


// let theName = user.theName ;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// if you update Value you should write ()
// ({theName, theAge, theTitle, theCountry} = user);
// if you create variable you don't need ()
// let {theName, theAge, theTitle, theCountry} = user;
// no need for skiping here you can write 3 variable = object has 4 properites but vairable should be same name of properity
// let{theName, theAge, theCountry} = user;
// console.log(theCountry)

// if you want to change the name of variable you should keep same name of property then : a like theName : a
// const { theName : a, theAge : b, theCountry} = user;
// console.log(a, b)

// if you give variable a value and the Object has same properity with another value | value from main Object will override
// const { theName : a, theAge : b, theCountry, theColor = "Red"} = user;
// console.log(theColor); // Black
// const { theName : a, theAge : b, theCountry, theColor : co = "Red", skills : { html : h, css : c}} = user;
// console.log(co);
// console.log(`My HTML Skills Progress Is ${h}`);
// console.log(`My Css Skills Progress Is ${c}`);

// you can target nested Object
// const { html : skillOne, css : skillTwo } = user.skills;

// console.log(`My HTML Skills Progress Is ${skillOne}`);
// console.log(`My Css Skills Progress Is ${skillTwo}`);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`)
//   console.log(`Your Age Is ${obj.theAge}`)
//   console.log(`Your Css Skills Is ${obj.skills.css}`)
//   console.log(`Your Css Skills Is ${c}`)
// }
// function showDetails({theName : n, theAge : a, skills: {css : c}} = user) {
//   console.log(`Your Name Is ${n}`)
//   console.log(`Your Age Is ${a}`)
//   console.log(`Your Css Skills Is ${c}`)
// }

// showDetails(user);

// const user = {
//   theName: "OSama",
//   theAge: 39,
//   skills: ["HTML", "Css", "JavaScript"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };


// const {theName : n, theAge : a , skills: [one, two, three], addresses: {egypt : e}} = user;

// console.log(`Your Name is : ${n}`)
// console.log(`Your Age is : ${a}`)
// console.log(`Your Skills is : ${one} , ${two} , ${three}`)
// console.log(`Your Adress is : ${e} `)

// --------Object Destructuring form Internet------
/*
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  address : {
    city : 'Gothem'
  }
};

const name     = hero.name;
const realName = hero.realName;
// is equivalent to:
const { name, realName } = hero;

//  you can use default value if this properity not availabe in main Object
const { enemy = "Joker"} = hero

// you can use Aliases ( change key name)
const { realName: secretName} = hero
console.log(secretName) // Bruce Wayne

// you can use Destructuring also with nested object
const {address : { city }} = hero
const {address : { city : x }} = hero
console.log(x)

// you can use variable with string(same value of key)
const prop = "realName"
const {[prop]: alias} = hero // is equivalent to: hero[prop] ( look at Computed Object Property Name at ES6 course)
console.log(alias)

// you can use spread operator to get rest of properites in object 
const {name,...rest} = hero
console.log(rest)

** use cases :

[1] you can use it with for of loop :
const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];
let sum = 0;
for (const {score} of ratings) {
    sum += score;
}
console.log(`Total scores: ${sum}`); // 14 

[2] function parameters : 
const heroes = [
  { name: 'Batman' },
  { name: 'Joker' }
];
const names = heroes.map(
  function({ name }) {
    return name;
  }
);
names; // => ['Batman', 'Joker']

// Hint in previous we use map function and for ... of loop both will assign {name} = hero;
but in normal function if you want to use destructuring {name} you have to assign 
here in parameter we wrote {name} and as argument we wrote heroes[1] and parameter and agument
is under hood (paramter = argument => {name} = heroes[1]
  const heroes = [
  { name: 'Batman' },
  { name: 'Joker' }
];
function des({name}) {
  return name;
}
console.log(des(heroes[1]))
*/ 

//  ------- Challenge -----------

// let chosen = 1; 

// let myFriends = [
//   {title: "Osama" , age :39, available: true, skills: ["HTML", "CSS"]  },
//   {title: "Ahmed" , age :25, available: false, skills: ["Python", "Django"]  },
//   {title: "Sayed" , age :33, available: true, skills: ["PHP", "Laravel"]  },
// ];

// for (let i = 0; i < myFriends.length; i++) {
//   if (myFriends[i].available) {
//     myFriends[i].available = "Availabe"
//   }else {
//     myFriends[i].available = "Not Availabe"
//   }
// }

// if ( chosen === 1) {
//   const {title, age, available, skills : [,last] } = myFriends[chosen - 1];
//   console.log(title)  
//   console.log(age)  
//   console.log(available)  
//   console.log(last)  
// }
// if ( chosen === 2) {
//   const {title, age, available, skills : [,last] } = myFriends[chosen - 1 ];
//   console.log(title)  
//   console.log(age)  
//   console.log(available)  
//   console.log(last)  
// }
// if ( chosen === 3) {
//   const {title, age, available, skills : [,last] } = myFriends[chosen - 1];
//   console.log(title)  
//   console.log(age)  
//   console.log(available)  
//   console.log(last)  
// }

// ----Another Answer ----

// (function getDevData({title, age, available, skills: [one, two]} = myFriends[chosen - 1]) {

//   console.log(title);
//   console.log(age);
//   console.log(available ? 'available' : 'not available');
//   console.log(two);

// })()


// ---------Set Data and Data Type--------
// set Methods ( add() , delete(), has(), clear(), forEach(), values(), keys(), entires() )
// let myData = [1, 1, 1, 2, 3, "A"];
// let myData = "Soliman";
// store only unique data so will store 1 only one time and will store as Object
// let myUniqueData = new Set(myData)
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3)
// let myUniqueData = new Set()
// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");
// myUniqueData.delete(2)
// myUniqueData.clear()
// console.log(myUniqueData.entries())
// console.log(myData);
// console.log(myUniqueData)
// // Set has properity like length called size
// console.log(myUniqueData.size)
// for ( x of myUniqueData) {
//   console.log(x) // 1 2 3 A
// }
// for ( x of myUniqueData.entries()) {
//   console.log(x) // [1, 1] [2, 2] [3, 3] [A, A]
// }
// for ( x of myUniqueData.keys()) {
//   console.log(x) // 1 2 3 4 A
// }
// for ( x of myUniqueData.values()) {
//   console.log(x) // 1 2 3 4 A
// }

// console.log(myUniqueData.has("A")) //will search if found give true if not false
// console.log(myUniqueData.has("a".toUpperCase())) //will search if found give true if not false

// to convert Set to Array use spread operator or Array.from
// let str = "soliman"
// let setStr = new Set(str)
// let arrSetStr = [...setStr]
// let arrSetStrKeys = [...setStr.keys()]
// console.log(arrSetStr)
// console.log(arrSetStrKeys)

// let myArray = [1,1,1,2,3,4];
// let mySet = new Set(myArray)
// console.log(mySet)
// console.log(Array.from(mySet))


// new Set will accept only iterable but can store any type of values even undefined of NaN
// equality in set different NaN !== NaN but in set equal
// let array = [NaN, undefined, NaN, undefined]
// let setArr = new Set(array)
// console.log(setArr)

//-------------Difference between Set and Weak Set-----------------

// set accept any type of data (even NAN or undefined) ( must be inside iteralbe like array or string)
// set.values() and set.keys() both return an Iterator with [value] all the values in a Set
// Set.entries() returns an iterator with the [value,value] pairs from a Set
// weak set accept only collection of unique Objects ( objects inside array)
// WeakSet does not have keys() , values(), entries(), clear(), forEach()
// WeakSet methods ( add() , delete(), has())
// set has size property
// weak set has not size property
// if no other references to an object stored in the Weakset exist, those Objects can be garbage collected
// Set is iterable 
// weakSet is not iterable (because does not has size property) so can not use for...of loop on it
// Set does not has keys so you can not use mySet[1] like array myArr[1]

// ------------------keys and values in Object----------------- 
// let obj = { 
//   3 : "a",
//   5 : "b",
//   2 : "c",
// }

// let objKeys = Object.keys(obj)
// let objValues = Object.values(obj)
// // will sort keys ascending
// console.log(objKeys)
// // will sort value according to it's keys // output ["c", "a", "b"]
// console.log(objValues)

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
// console.log(mySet.size)

// let iterator = mySet.values(); //you can write keys or values same thing
// console.log(iterator)
// will give you value and done:false till reach UNDEFINED (finish all values and can not find anything) value the done true
// console.log(iterator.next()) 
// console.log(iterator.next()) 
// console.log(iterator.next())
// console.log(iterator.next()) 
// console.log(iterator.next())

// mySet.forEach((e) => console.log(e) )


// let myWeakSet = new WeakSet([{A: 1, B: 2},{A: 1, B: 2}]);
// console.log(myWeakSet)
// let iterator = myWeakSet.values(); // no values in WeakSet
// console.log(iterator.next())

// equality in weakSet 
// let a = {a: "s"}
// let b = a
// console.log( a === b) //true because assigned by reference
// let c = {a: "s"}
// let d = {a: "s"}
// console.log( c === d) //false different references
// let array = [a,b]
// let array2 = [c,d]
// let weak = new WeakSet(array)
// let weak2 = new WeakSet(array2)
// console.log(weak) //one object 
// console.log(weak2) // two objects

/* 

-------------difference between Map and Set---------------
A Set is a collection dataset that needs to be composed of unique values, 
where a Map is when you have pairs of associated data when we map the keys to the value. 
Map and Set both have similar methods; these include .has(), .get(), .delete(), and .size().
The difference is that a Map comes with a key/value pair, two dimensions.
keys() and values() give you in set same result [value] but in Map different [key] or [value]
We can convert an array to set as well as a 2D array to map:

let array=[1,2,3,4]
const set1 = new Set (array);

let map=[['one', 1], ['two', 2], ['three', 3],
['four',4]]
const map1= new Map (map) ;

*/

// ----------------Map Data Type vs Object--------------------
// Map Accept (iterable with Key/Value)

/* Map => Does not Contain Key By default
  Object => Has Default Keys

  Map => Key can be Anything [Function, Object, Any Primitive Data Types]
  Object => String or Symbol (will converted into string see exp. below)

  Map => Ordered By Insertion
  Object => Not 100% Till Now

  Map => Get Items By Size
  Object => Need to Do Manually ( Object.keys(myObject).length)

  Map => Can Be Directly iterated
  Object => Not Directly and Need TO use Object.keys() and so on

  Map => Better Performance When Add or Remove Data
  Object => Low Performance Comparing To Map
  */

  /*
  A Map is ordered and iterable, whereas a objects is not ordered and not iterable
  We can put any type of data as a Map key, whereas objects can only have a string, or symbol as a key.
  A Map inherits from Map.prototype. 
  This offers all sorts of utility functions and properties which makes working with Map objects a lot easier
  */

// later Q after OOP
// let myObj = {};
// // to create Object with no default keys
// A javascript object inherits from Object by default, 
// unless you explicitly create it with null as its prototype, like: Object.create(null).
// let myEmptyObject = Object.create(null)

// -----some Exp. to know the difference between Map and Normal Object :

// let myMap = new Map();
// let myNewObject = {
//   10 : "Number",
//   "10" : "String",
// }
// with number you can not write (myNewObject.10) should be like this myNewObject[10]
// "10" will override 10 because object will accpet only string or symbol so will convert 10 to "10"
// console.log(myNewObject[10])

// let myNewMap = new Map()
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// console.log(myNewMap.get(10))
// console.log(myNewMap.get("10"))
// console.log(myNewMap)

// Map has Size but Object don't to get length of Object use keys() that put keys of object in Array then use length on that Array
// var size = Object.keys(myObj).length;

// we can not use object as keys in normal Objects
// let a = { name : "Soliman"}
// let b = { name : "Hussein"}
// let people = {}
// people[a] = "Developer" // with object will consider key a as [ object object]
// people[b] = "JavaScipt" // with object will consider key b as [ object object] so will override
// console.log(people[a]) // JavaScipt
// console.log(people[b]) // JavaScipt

// here map accept object as a key
// let map = new Map()
// map.set(a, "Developer")
// map.set(b, "JavaScipt")
// console.log(map.get(a)) // Developer
// console.log(map.get(b)) // JavaScript




//  Map Methods (set(), get() , delete(), has(), clear(), forEach(), values(), keys(), entires())

// let myMap = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "Boolean"]
// ]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

// console.log(myMap.get(10))
// console.log(myMap.get("Name"))
// console.log(myMap.get(false))

// console.log(myMap.delete("Name"))
// myMap.clear();
// console.log(myMap);

// console.log(myMap.has(false))

// to add object to map use Object.entries()
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };

// let myInfoMap = new Map(Object.entries(myInfo))
// console.log(myInfoMap)

// -----------Map Vs Weak Map---------------

// Map => keys can be Anything
// Weak Map => key can be Object Only
// Map is iterable
// WeakMap is not iterable (because does not has size property)
// Map has size properity
// WeakMap Does not have size
// WeakMap Methods (set(), get() , delete(), has() ) only
// if no other references to an object stored in the WeakMap (as key) exist,
//  those Objects can be garbage collected


// let mapUser = {theName: "Elzero"}
// let myMap = new Map();
// myMap.set(mapUser, "Object Value")
// mapUser = null;
// // here mapUSer has no references but it will not removed by garbage collector
// console.log(myMap)
// console.log(mapUser)

// let weaKMapUser = {theName: "Elzero"}
// let myWeakMap = new WeakMap();
// myWeakMap.set(weaKMapUser, "Object Value")
// weaKMapUser = null;
// // here weaKMapUser has no references and will be removed by garbage collector
// console.log(myWeakMap)

// let arr = ["Osama","Ahmed"]
// // let ite = arr.keys()
// let ite = arr.values()
// console.log(ite)
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())
// // make Object iterable
// let obj = { Osama : "dev" , Age : 39}
// let arrObj = Object.keys(obj)
// let arrObj = Object.entries(obj)
// let iteObj = arrObj.values()
// console.log(iteObj)
// console.log(iteObj.next())
// console.log(iteObj.next())
// console.log(iteObj.next())

// Array.From 
// accept (Iterable, MapFunc, This)

// // Iterable
// console.log(Array.from("Osama"))
// // not Iterable
// console.log(Array.from(12345))
// // iterable
// console.log(Array.from("12345"))
// // function
// console.log(Array.from("12345", function(n) {
//   return +n + +n
// } ));
// // Arrow Function
// console.log(Array.from("12345",(n) =>  +n + +n ));
// let myArray = [1,1,1,2,3,4];
// let mySet = new Set(myArray)
// console.log(mySet)
// console.log(Array.from(mySet))
// // Spread Operator (future)
// console.log([...new Set(myArray)])

// function testArgs () {
//   return arguments;
// }

// console.log(testArgs("Osama", "Ahmed"))

// function af () {
//   return Array.from(arguments);
// }

// console.log(af("Osama", "Ahmed"))

// Array Method
// Array.copywithin(Target, Start => Optional, End => Optional)
// target = where to copy // start of the copied part // End of the copied part 
// but will not increase Array length
// Copy Part of an Array to Another Location in the Same Array

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3);
// myArray.copyWithin(4, 6);
// myArray.copyWithin(4, -1);
// myArray.copyWithin(1, -2 );
// myArray.copyWithin(1, -2 , -1);

// console.log(myArray);

// Array.some
// Array.some(callbackFunc(Element, Index, Array), This Argument)
// Array.some check every element of array if exist return true


// let nums = [1, 2, 3, 4, 5, 6, 7]

// let myNumber = 5;

// let check = nums.map(function(e) {
//   return e > 5;
// })

// Array.some check every element of array if exist return true
// if we use Array.map will return [false, false, false, false, false, true, true]
// console.log(check)

// if we transfere array to set we can use has properity but will return true only if array has 5 
// not to check every element and check if there is elements larger than 5
// let numsSet = new Set(nums)
// console.log(numsSet.has(5))

// filter will give new Array not return true or false like Array.some
// let numsFilter = nums.filter((e) => e > 5)
// console.log(numsFilter)


// let check = nums.some(function(e) {
//   console.log(this)
//   return e > this;
// }, myNumber)

// console.log(check)

// function checkValues (arr, val) {
//   return arr.some(function (e) {
//     return e === val; 
//   })
// }

// console.log(checkValues(nums, 6))

// let range = {
//   min : 10,
//   max : 20,
// }


// let checkRange = nums.some(function(e) {
//   return e >= this.min && e <= this.max 
  
// }, range)

// console.log(checkRange)

// Array.ervery 
// unlike some 
// Every means every element must be the condition you write but some will return true only if one element 


// const locations = {
//   20: "Place 1",
//   30: "place 2",
//   10: "Place 3",
//   40: "Place 4",
// };

// let mainLocation = 15;

// let locationsArray = Object.keys(locations)


// let locationsArrayNumbers = locationsArray.map((n) => +n) 

// let check = locationsArray.every(function(e) {
//   console.log("hi")
//   return e > this;
// }, mainLocation)

// console.log(check)



// Spread Operator => ...Iterable

// // Spread String
// console.log("Osama")
// console.log(..."Osama")
// console.log([..."Osama"])

// // Concatenate Arrays

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];
// console.log([...myArray1, ...myArray2])
// console.log(myArray1.concat(myArray2))

// // Copy Array

// let copiedArray = [...myArray1]
// console.log(copiedArray)

// // Push inside Array

// let allFriends = ["Osama", "Ahmed", "Sayed"];
// let thisYearFriends = ["Sameh", "Mahmoud"];

// allFriends.push(thisYearFriends) // will push thisYearFriends as Array inside Array
// allFriends.push(...thisYearFriends) // will spread and merge
// console.log(allFriends);

// // Math Object

// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(myNums)) // NaN
// console.log(Math.max(...myNums)) 

// // Spread With Objects => Merge Objects

// let objOne = {
//   a:1,
//   b:2,
// }
// let objTwo = {
//   c:3,
//   d:4,
// }

// console.log({...objOne, ...objTwo})


// ---------------Challenge---------------

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log(Number([[n2.pop(), n1.pop()].length , Math.min(...n1)].toString().split(",").join("")));
// console.log([...n1, ...n2].length * Math.max(...n2));
// console.log(n1.reduce((el1 , el2) => el1 + el2) * n2.length)

// ----------------------------Regular expressions--------------------------
/* 
Regular expressions are patterns used to match character combinations in strings. 
In JavaScript, regular expressions are also objects. 
These patterns are used with the exec() and test() methods of RegExp, 
and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.

** Creating a regular expression: 
[1] regular expression literal : 
const re = /ab+c/;
[2] constructor function of the RegExp object, as follows:
const re = new RegExp('ab+c');

** Methods of RegExp  :
- exec() : Executes a search for a match in a string. It returns an array of 
information or null on a mismatch.
- test() : Tests for a match in a string. It returns true or false.
- complie() : (Re-)compiles a regular expression during execution of a script.
- toString() : Returns a string representing the specified object. Overrides the Object.prototype.toString() method.
[@@....] === [Symbol....]
- [@@match]() : Performs match to given string and returns match result.
- [@@matchAll]() : Returns all matches of the regular expression against a string.
- [@@replace]() : Replaces matches in given string with new substring.
- [@@search]() : Searches the match in given string and returns the index the pattern found in the string.
- [@@split]() : Splits given string into an array by separating the string into substrings.


** Method of String used with RegExp :
- match() : Returns an array containing all of the matches, including capturing groups, or null if no match is found.
- matchAll() : Returns an iterator containing all of the matches, including capturing groups.
- search() : Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
- replace() : Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
- replaceAll() : Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
- split() : Uses a regular expression or a fixed string to break a string into an array of substrings.

** they give you same result => 

-Method of RegExp : 
reg[Symbol.match](txt) 
is the same 
-Method of String used with RegExp:
txt.match(reg)

** Instance properties : 
RegExp.prototype.flags : A string that contains the flags of the RegExp object.
RegExp.prototype.dotAll : Whether . matches newlines or not.
RegExp.prototype.global : Whether to test the regular expression against all possible matches in a string, or only against the first.
RegExp.prototype.hasIndices : Whether the regular expression result exposes the start and end indices of captured substrings.
RegExp.prototype.ignoreCase : Whether to ignore case while attempting a match in a string.
RegExp.prototype.multiline : Whether or not to search in strings across multiple lines.
RegExp.prototype.source : The text of the pattern.
RegExp.prototype.sticky : Whether or not the search is sticky.
RegExp.prototype.unicode : Whether or not Unicode features are enabled.
RegExp: lastIndex : The index at which to start the next match.

Modifiers Flags :
i => case insensitive ( if you write it it will search for both capital and small)
g => global search (if you did not add g will retrun Array of information with first element match)
m => mutlilines.
d =>  The "d" flag indicates that the result of a regular expression match should contain the start and end indices of the substrings of each capture group.
s =>  Allow . to match new line character. 
u => "unicode"; treat a pattern as a sequence of unicode code points.
y => Perform a "sticky" search that matches starting at the current position in the target string.(https://javascript.info/regexp-sticky)

Character classes:
// . => matches any Character , except newLine and another line terminators (with s flag . will match new line charachter)
// \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
// \W => matches non Word Characters
// \d => matches digits from 0 to 9
// \D => matches non-digits characters
// \s => matches Whitespaces
// \S => matches non Whitespaces charachter
// there is more in link below

Quantifiers :
// n+ => One Or More
// n* => Zero or More
// n? => Zero or One
// n{x} => Number of
// n{x,y} => Range
// n{x, } => At Least x
// there is more in link below

Assertions : 
// \b => matches at the beginning or end of a word
// \B => matches Not at the beginning / end of a word
// $ => End With Something
// ^ => Start With something
// ?= => followed By something (lookahead)
// ?! => Not followed By Something (negative lookahead)
// ?<! => Lookbehind 
// ?>! => negative Lookbehind
// there is more in link below

Group: 
() => to capture group
(?<groupName>) => to write your own group name
(?:) => to not capturing this group

Intro to Regular Expression:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

Main Document for Regular Expression: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

Regular expression syntax cheatsheet:
(Character classes - Assertions - Group and Ranges - Quantifiers - Unicode property escapes) 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet

Regular Expressions Groups and Ranges: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges

Stick flag read this to understand index and lastIndex :
https://javascript.info/regexp-sticky

Quick Review  Based on YouTube Video(https://youtu.be/rhzKDrUiJVk)
useful Web-Site to test Regular Expression (https://regexr.com)

The difference between ?= and ?! is that the former requires the given expression to match 
and the latter requires it to not match. For example a(?=b) will match the "a" in "ab", 
but not the "a" in "ac". Whereas a(?!b) will match the "a" in "ac", but not the "a" in "ab".
The difference between ?: and ?= is that ?= excludes the expression from the entire match 
while ?: just doesn't create a capturing group. So for example a(?:b) will match the "ab" in 
"abc", while a(?=b) will only match the "a" in "abc". a(b) would match the "ab" in "abc" and 
create a capture containing the "b".
*/
// ---------------match() vs exec()----------------
/* 
[1] exec() :
* is a Method of RegExp
* return Array of Information
* with g flag returns each match and its position iteratively

[2] match() :
* is a Method of String
* return normal Array
* with g flag returns all matches at once, but without their position.

both without using g flag return Array of information with first match

*/

// regular expression literal
// const myRe = /d(b+)d/g;
// or constructor function of the RegExp object
// const myRe = new RegExp('d(b+)d', 'g'); // or const myRe = new RegExp(/d(b+)d/, 'g'); 
// const execArray = myRe.exec('cdbbdbsbz'); // Method of RegExp
// const matchArray = ('cdbbdbsbz').match(myRe); // Method of String used with RegExp
// console.log(execArray) // Array of information
// console.log(matchArray) // Normal Array 

// // if you use regular expression directly without assigning it to variable you cannot acccess
// // properties of Array of information because every occurrence is a new regular expression 
// let myArray = myRe.exec('cdbbdbsbz');
// console.log(`The value of lastIndex is ${myRe.lastIndex}`); // 5
// console.log(`The value of index is ${myArray.index}`); // 1
// let myRe2 = /bsbz/g
// let myArray2 = myRe2.exec('cdbbdbsbz');
// // 0 because we are checking for lastIndex of regExp object and not yet excuted so lastIndex still 0
// console.log(`The value of lastIndex is ${/d(b+)d/g.lastIndex}`); 
// console.log(`The value of lastIndex is ${myRe2.lastIndex}`); // 9
// console.log(`The value of index is ${myArray2.index}`); // 5

// //----------Using regular expression on multiple lines
// let s = 'Please yes\nmake my day!'
// let m1 = s.match(/yes.*day/); // Returns null becaue . does not match line terminator
// let m1 = s.match(/yes.*day/s); // we added s flag now . will match new line charachter
// let m2 = s.match(/yes[^]*day/g); // we can not use \n because \ will change effect of *
// console.log(m1)// Returns null
// console.log(m2)// Returns ["yes\nmake my day"]

// // ---Using the global search flag with exec()
// // RegExp.prototype.exec() method with the g flag returns each match and its position iteratively.
// const str = 'fee fi fo fum';
// const re = /\w+\s/g;
// console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
// console.log(`The value of lastIndex is ${re.lastIndex}`); // 4
// console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
// console.log(`The value of lastIndex is ${re.lastIndex}`); // 7
// console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
// console.log(`The value of lastIndex is ${re.lastIndex}`); // 10
// console.log(re.exec(str)); // null
// // In contrast,match() method returns all matches at once, but without their position.
// console.log(str.match(re)); // ["fee ", "fi ", "fo "]

// // -----------Exp. using Group and sticky flag 
// let personList = `First_Name: John, Last_Name: Doe
// First_Name: Jane, Last_Name: Smith`;
// // to write group name you can use ?<Group Name> without group name the default names will be $1 $2
// let regexpNames =  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/y;
// // with sticky flag you can use lastIndex to determine the starting index of searching 
// regexpNames.lastIndex = 33 // Jane Smith without will be John Doe
// let match = regexpNames.exec(personList)
// console.log(match.groups.firstname,match.groups.lastname )
// console.log(match)

// --------Using regular expression to split lines with different line endings/ends of line/line breaks
// let text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'
// let lines = text.split(/\r\n|\r|\n/) // /\r\n|\r|\n/ this format compatible with all browsers
// console.log(lines) // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]

// // --------Using a regular expression to change data position
// In the replacement text, the script uses $1 and $2 to indicate the results of the 
// corresponding matching parentheses in the regular expression pattern.
// let re = /(\w+)\s(\w+)/
// let str = 'John Smith'
// let newstr = str.replace(re, '$2 $1')
// console.log(newstr) // Smith John

// //-----difference between global flag and sticky flag
// re = /\d/y;
// // will stop because of space between 3 and 4 lastIndex will stop at 3 
// // and exec function needs lastIndex 4 to continue
// while (r = re.exec("123 456")) console.log(r, "AND re.lastIndex", re.lastIndex); 
// let re2 = /\d/g;
// // will continue till 6 because will search globally because of g flag not waiting lastIndex like sticky flag
// while (r2 = re2.exec("123 456")) console.log(r2, "AND re2.lastIndex", re2.lastIndex);

// -------Lookbehind & Lookahead
// // Lookbehind
// let str1 ="we love soliman"
// let reg1 = /(?<=soli)\w+/g
// console.log(str1.match(reg1)) // man
// // negative Lookbehind
// let str2 ="we love soliman"
// let reg2 = /(?<!we\s)\w{4,}/g 
// console.log(str2.match(reg2)) // soliman
// // Lookahead
// let str3 ="we love2 soliman"
// let reg3 = /\w+(?=2)/g
// console.log(str3.match(reg3)) // love
// // negative Lookahead
// let str4 ="we love soliman"
// let reg4 = /\w{5,}(?!\s)/g // soliman
// console.log(str4.match(reg4))

// // ------back reference
// // \1 to refere to last captured group inside same regular expression
// // \k<groupName> to refere to last captured named group inside same regular expression
// let str = "Mohamed Ahmed Ahmed Soliman"
// // let reg = /(\w+)\s\1/g
// let reg = /(?<myName>\w+)\s\k<myName>/g 
// console.log(str.match(reg)) // Ahmed Ahmed

// -------------ElZero RegExp
// let myString = "elzero web school"
// let regularExpression = /elzero/i;
// console.log(myString.match(regularExpression))

// let tld = "Com Net Org Info Code Io"
// let tldRe = /(org|info|io)/ig
// console.log(tld.match(tldRe))

// let nums = "12345678910";
// // Range
// let numsRe = /[0-9]/;
// console.log(nums.match(numsRe))

// let notNums = "12345678910";
// // will return all except no. in this Range
// let notNumsRe = /[^0-2]/g;
// console.log(notNums.match(notNumsRe))


// let specialtNums = "1!2@3#4$5%678910";
// let specialtNumsRe = /[^0-9]/g;
// console.log(specialtNums.match(specialtNumsRe))


// let Practice = "Os1 Os10os Os2 Os8 Os8Os";
// let PracticeRe = /Os[0-9]Os/ig;
// console.log(Practice.match(PracticeRe))


// let myString = "AaBbcdefG123!234%^&*"
// let atozSmall = /[a-z]/g;
// let NotatozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotatozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g
// let NotaAndcAnde = /[^ace]/g
// let capitalAndSmall = /[a-z]/ig
// let capitalAndSmall2 = /[a-zA-Z]/g
// let notCapitalAndSmall = /[^a-zA-Z]/g
// let specials = /[^a-zA-Z0-9]/g
// let specials2 = /[^a-z^A-Z0-9]/g

// console.log(myString.match(notCapitalAndSmall ));

// let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
// let dot = /./g;
// let w = /\w/g;
// let W = /\W/g;
// i added \ (to Escape charachter)before . because . match any charachters but if i add \. will match . only (not mentioned in elzero course)
// let validEmail = /\w@\w\.(com|net)/g;
// console.log(email.match(validEmail))

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

// let re = /Spam/ig;
// let re = /\BSpam/ig;
// let re = /Spam\b/ig;
// let re = /(\bspam|spam\b)/ig;
// console.log(names.match(re))

// // Test Method
// pattern.test(input) //retrun true or false

// console.log(re.test(names))
// console.log(/(\bspam|spam\b)/ig.test("Osama"))
// console.log(/(\bspam|spam\b)/ig.test("1Spam"))

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
// let mailRe = /\w@\w\w\.sa/ig
// let mailRe = /\w+@\w+\.(com|net)/ig
// let mailRe = /\w+@\w+.\w+/ig
// console.log(mails.match(mailRe))

// let nums = " 0110 010 150 05120 0560 350 00"
// let numsRe = /0\d+0/ig;
// let numsRe = /0\d*0/ig;
// let numsRe = /0\d?0/ig;
// console.log(nums.match(numsRe))

// let urls ="https://google.com http://www.website.net web.com"
// let urlsRe = /https/ig;
// let urlsRe = /https?:\/\/(www.)?\w+\.\w+/ig;
// let urlsRe = /(https?:\/\/)?(www.)?\w+\.\w+/ig;
// console.log(urls.match(urlsRe))

// let serials = "S100S S3000S S50000S S950000S ";

// console.log(serials.match(/S\d{3}S/ig))
// console.log(serials.match(/ S\d{4,5}S/ig))
// console.log(serials.match(/S\d{4,}S/ig))

// let myString = "We Love Programming"
// let names = "@1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ"

// console.log(/ing$/ig.test(myString))
// console.log(myString.match(/\w+ing$/ig))
// difference between ^ (not) and ^ (start with something) | not should be inside []
// console.log(/^We/ig.test(myString))
// console.log(myString.match(/[^We]/ig))
// console.log(/lz$/ig.test(names))
// // \s means whitespace
// will return false because @1OsamaZ does not start with words but if @ at 2nd value @2AhmedZ will return true because it found 1OsamaZ without @
// console.log(/^\w/ig.test(names))
// // here will output element + Z
// console.log(names.match(/\d\w{5}Z/ig))
// here will output element without Z 
// console.log(names.match(/\d\w{5}(?=Z)/ig))
// console.log(names.match(/\d\w{8}(?!Z)/ig))
// difference between $ and \b 
// console.log(myString.match(/\w+$/ig)) // [Programming] will match last word only
// console.log(myString.match(/\w+e\b/ig)) // will match ever word end with e not last word in string

/* -------multiline mode--------
The multiline mode is enabled by the flag m.
It only affects the behavior of ^ and $.
In the multiline mode they match not only at the beginning and the end of the string, 
but also at start/end of line.
That???s because by default a caret ^ only matches at the beginning of the text, 
and in the multiline mode ??? at the start of each line.

let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;
console.log( str.match(/^\d/gm) ); // 1, 2, 3

let str = `1st place: Winnie 2nd place: Piglet 3rd place: Eeyore`;
console.log( str.match(/^\d/gm) ); // 1
*/

/* ---- diference between \n and $

let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;
console.log( str.match(/\d$/gm) ); // 1,2,3

let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;
console.log( str.match(/\d\n/g) ); // 1\n,2\n

there are 2 matches instead of 3.
That???s because there???s no newline after 3 (there???s text end though, so it matches $).
Another difference: now every match includes a newline character \n. Unlike the anchors ^ $, 
that only test the condition (start/end of a line), \n is a character, so it becomes a part of the result.
So, a \n in the pattern is used when we need newline characters in the result, 
while anchors are used to find something at the beginning/end of a line.
*/

// Replace and ReplaceAll
// let txt = "We Love Programming And @ And @ IS Amazing"
// will replace the first @ only
// console.log(txt.replace("@", "JavaScript"))
// console.log(txt.replaceAll("@", "JavaScript"))
// let txtRe = /\b\w{3}(?=\s)/ig; // to replace with and
// let txtRe = /@/ig; // to replace with @
// console.log(txt.replaceAll(txtRe, "JavaScript"))
// console.log(txt.replaceAll(/@/ig, "JavaScript"))

//  Form Validation
/* 
The onsubmit event handler announces its decision by the value the code returns. 
If a return value of true is received, then the current form submission is allowed to continue.
If the return value is false, then the current form submission is stopped in its tracks.
*/
// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;
//   let validationResult = phoneRe.test(phoneInput);
//   if (validationResult === false) {
//     return false
//   }
//   return true
// }


// -----------Challenge--------

// let url1 = "elzero.org"
// let url2 = "http://elzero.org"
// let url3 = "https://elzero.org"
// let url4 = "https://www.elzero.org"
// let url5 = "https://www.elzero.org:8080/atricles.php?id=100&cat=topics"
// let url6 = "elzeroorg"


// let re = /(https?)?:?(\/\/)?(www.)?\w+\.\w+(:\d+\/\w+\.\w+\?\D+\d+\D+)?/ig;
// let re = /(https?:\/\/)?(www.)?\w+\.\w+(:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+)?/ig;

// console.log(url1.match(re))
// console.log(url2.match(re))
// console.log(url3.match(re))
// console.log(url4.match(re))
// console.log(url5.match(re))
// console.log(url6.match(re))
// console.log(re.test(url6))


// -------------------Object Oriented Programming---------

/* 
The idea behind object-oriented programming (OOP) is that you organize your code 
in classes/ objects (objects are based on classes).
Your data is stored in properties, your logic in methods. 
And properties and methods that work closely together live in the same class.
*/

// -------Procedual vs OOP--------
/* 
[1] procedual  :
* program divided into Function and Variables
* Overloading is not possible
* Hiding Data not Possible
* Data is separated

[2] OOP :
* Program divided into Objects and Methods
* Overloading is possible
* Hiding data possible
* data is in one Location
*/

// ---------------------ES6 ECMA Script 6 (2015)----------------------

// Variables ( var , let , const )
/* 
[1] var :
-function Scope only
-can be redeclared
-in creation phase initialized to undefined
-Create Properties in the window object ( Scope Drama)
-can  be reassigned
-can  be declared without initialization

[2] let :
-function scope and block scope
-can not be redeclared
-in creation phase only hoist but not initialized to undefined
-does not Create Properties in the window object
-can  be reassigned
-can  be declared without initialization

[3] const : 
-function scope and block scope
-can not be redeclared
-in creation phase only hoist but not initialized to undefined
-does not Create Properties in the window object
-can not be reassigned
-can not be declared without initialization
*/

// here we redclare var
// function varTest() {
//   var x = 1;
//   if(true){
//     var x = 2;
//     console.log(x)
//   }
//   console.log(x)
//   return "done"
// }
  // varTest()

// here let is block scope so x form function is not the same x inside if condition
// function letTest() {
//   let x = 1;
//   if(true){
//     let x = 2;
//     console.log(x)
//   }
//   console.log(x)
//   return "done"
// }
// letTest()

// var redeclare
// var x = 1
// var x = 2
// console.log(x)

// let can not be redclared
// let x = 1
// let x = 2
// console.log(x)

// var or let or const can reassigned
// let x = 1
// var x = 1
// const x = 1
// x =2 

// * Variable Hoisting
// let keyword in creation phase only hoist but not initialized to undefined like var
// output undefined
// console.log(hoist)
// var hoist = 10;

// give Error annot access before initialization
// console.log(hoist)
// let hoist = 10;

// output undefined
// let hoist;
// console.log(hoist)
// hoist = 10;

// variable scope darama
// var Mohamed = 1
// let ahmed = 2
// console.log(window.Mohamed)
// console.log(window.ahmed)

// const can not be declared without initialization
// let x; // undefined
// var y; //undefined
// const z; //Error

// you can not reassign const but you can create array and then push or object and make changes to object
// const arr = []
// arr.push("CSS", "HTML", "JS")
// console.log(arr)

// const obj = { 
//   theName : "Mohamed"
// }
// // you can use object.freeze() to stop changes on Object
// // Object.freeze(obj)
// obj.theName = "Soliman"
// obj.age = 33
// console.log(obj)


// -------Arrow Function----------

// function test(){
//   return 2
// }
// let test = function() {
//   return 2
// }
// console.log(test())

// if you have only one statment you can remove {} and return
// if you do not have parameters you can remove () and write _
// if you have one parameter you can remove () and write the one parameter 
// let arrowFunction = () => 2;
// let arrowFunction = _ => 2;
// let arrowFunction = x => 2 * x;
// let arrowFunction = (x , y) => x * y;
// console.log(arrowFunction())
// console.log(arrowFunction(3))

// ---This

// let obj = {
//   person : function () {
//     this.age = 0
//     setInterval(function(){
//       this.age ++
//       console.log(this.age)
//     },1000)
//   }
// }

// obj.person() // NaN

// same exp. but instead of creating object by literal we create it by new constructor
// function person () {
//   // this refer to person object ( that we created by new constructor)
//   this.age = 0
//   console.log(this)
//   setInterval(function(){
//     // this here is refer to window object
//     this.age ++
//     console.log(this)
//   },1000)
// }
// let user = new person(); // NaN

// arrow function will solve this problem
// function person () {
//   // this refer to person object ( that we created by new constructor)
//   this.age = 0
//   setInterval(_ => {
//     // this here is takong value of this of parent function which refers to parent object
//     this.age ++
//     console.log(this.age)
//   },1000)
// }
// let user = new person(); // NaN

// -----------Template Literals  `` ----------

// let lastName = "elzero"
// let gender = "Male"
// // let oldWay = "Hello \n it is me Osama"
// let oldWay = "Hello \n" + "it is me " + (gender === "Male" ? "Mr" : "Mrs") + " Osama " + lastName
// console.log(oldWay)

// let newWay = `hello
// it is me ${gender === "Male" ? "Mr" : "Mrs"} Osama ${lastName}
// console.log(newWay)

// let userName = "Osama",
// age = 36;
// const myHtmlMarkup = `
// <div class="card">
//   <h2 class="name">${userName}</h2>
//   <span class="age">${age}</span>
// </div>
// `
// document.body.innerHTML = myHtmlMarkup

//-------------Spread Operator------------

// let arrayOne = [1,2,3]
// let arrayTwo = [4,5]

// let sum1 = arrayOne.concat(arrayTwo)
// let sum2 = [...arrayOne,...arrayTwo]
// console.log(sum2)

// function sum(x,y,z) {
//   console.log( x + y + z)
// } 
// sum(1, 2, 3)
// sum(...arrayOne)

// let arrayOne = [1,2,3]
// let arrayTwo = arrayOne
// // because assigned by reference
// arrayTwo.push(4)
// console.log(arrayOne) //[1,2,3,4]
// console.log(arrayTwo) //[1,2,3,4]

// with legacy code
// let arrayOne = [1,2,3]
// let arrayTwo = [].concat(arrayOne)
// arrayTwo.push(4)
// console.log(arrayOne) //[1,2,3]
// console.log(arrayTwo) //[1,2,3,4]

// With spread operator
// let arrayOne = [1,2,3]
// let arrayTwo = [...arrayOne]
// arrayTwo.push(4)
// console.log(arrayOne) //[1,2,3]
// console.log(arrayTwo) //[1,2,3,4]

// let arr = [1,2,3,4,-20,100,200]
// console.log(Math.min(...arr))

// how to use spread operator with objects

// [1] merge objects
// let addOn  = {
//   job : "developer"
// }
// let obj = {
//   theName : "Soliman",
//   age : 33,
//   ...addOn
// }
// console.log(obj)

// [2] clone object
// let obj = {
//   theName : "Soliman",
//   age : 33
// }
// let clonedObj = {...obj}
// console.log(clonedObj)
// // but clone is shallow
// clonedObj.age = 34 
// console.log(clonedObj) // age : 34

// spread operator vs object.assign()
// [1] object.assign invokes getter and setter methods but spread operator not ( just copy object without getter and setter methods)
// class Circle {
//   constructor(radius) {
//       this.radius = radius;
//   }
//   set diameter(value) {
//       this.radius = value / 2;
//       console.log('SET ', value);
//   }
//   get diameter() {
//     console.log("get")
//       return this.radius * 2;
//   }
// }

// let circle = new Circle(100);

// // let cloneCircle1 = Object.assign(circle);
// let cloneCircle1 = Object.assign(circle ,{
//   diameter : 400
// }); // trigger setter method
// console.log(cloneCircle1.diameter) // trigger getter method
// console.log(cloneCircle1 === circle) //true

// let cloneCircle2 = {
//   ...circle
// };
// console.log(cloneCircle2.diameter) // can not trigger getter method
// console.log(cloneCircle2 === circle) //false

// [2] you can not use Object.assign() to assign a new value to read-only proprty
// but with spread operator you can because you create new object with different reference

// const blueSquare = {
//   length : 100,
//   color : "blue"
// }
// Object.defineProperty(blueSquare , "color" , {
//   value : 'blue',
//   enumerable : true,
//   writable : false

// })

// const redSquare = Object.assign(blueSquare, {
//   color : "red"
// }) // error can not assign to read only object

// but with spread operator
// const redSquare = {
//   ...blueSquare
// }
// redSquare.color = "red"
// console.log(redSquare)

// -------default parameters------

// old way
// function showMyInfo(userName, role, theme) {
//   // userName = userName === undefined ? 'Default User' : userName
//   // or truthy falsy pattern
//   userName = userName || "Default User"
//   return `Hello ${userName} you role is ${role} , webSite theme is ${theme}`
// }
// console.log(showMyInfo())
// // you can skip argument by using variable with undefined value
// let _ = undefined
// console.log(showMyInfo(_,"Adimn", "Blue"))

// newWay
// function showMyInfo(userName = "default User", role = "default role ", theme = "default theme"){
//   return `Hello ${userName} you role is ${role} , webSite theme is ${theme}`
// }
// console.log(showMyInfo())
// let _ = undefined
// console.log(showMyInfo(_,"Admin", "Blue"))

// -----------rest parameters---------

// function sum( x, y){
//   return x + y
// }
// console.log(sum(2,5,6)) // will not give you error will ignore 6

// using rest parameters
// function sum(...rest){
//   return rest.reduce((x,y) => x + y)
// }
// console.log(sum(2,5,6,7,8,9,10)) 

// rest parameters must be at the end con not be (...myParams, a,b,c)
// function showInfo(a,b,c,...myParams){{
//   console.log("Param a" , a)
//   console.log("Param b" , b)
//   console.log("Param c" , c)
//   console.log("Param myParams" , myParams) // return as array
// }}
// showInfo(1,2,3,4,5,6)

// -----------new String Method---------
// [1] startsWith  => string.startsWith(Search string, position = 0)
// [2] endsWith => string.endsWith(Search string, position = string.length)
// [3] includes => string.includes(serach string, position = 0)
// [4] repeat => string.repeat(count)

// let x = "Elzero Web School"
// console.log(x.startsWith("Elzero"))
// console.log(x.startsWith("Web", 7))
// console.log(x.endsWith("School"))
// console.log(x.endsWith("School", x.length))
// console.log(x.endsWith("Web", 10))
// console.log(x.includes("Web"))
// console.log(x.includes("Web", 7)) //true
// console.log(x.includes("Web", 10)) //false
// console.log(x.repeat(3))

// ---------------Destructuring---------
// [1] Object  [2] Array [3]parameters

// ----------Destructuring of Object----------
// let user = {
//   name : "Osmaa",
//   gender : "Male",
//   age : 36,
//   city : "Cairo",
//   website : "Elzero",
//   langs : {
//     html : "70%",
//     css : "80%",
//     JS : "5%"
//   }
// };
// Destructuring in old way
// let n = user.name,
//     g = user.gender,
//     a = user.age
// console.log(n,g,a)

// Destructuring in new way
// const {name , gender , age } = user
// console.log(name , gender , age)

// using alias
// const {name : n, gender : g, age : a, theme : t = "default"} = user
// console.log(n,g,a,t)

// if you have variables with same name you can not redeclare them but you can reassign them but use ()
// let name = "default";
// let gender = "default";
// let age = "default";
// ({name , gender, age} = user);
// console.log(name , gender , age)

// you can use default value but if its in object the property of object will override default value
// const {name , gender , age, theme = "blue" } = user;
// console.log(name , gender , age, theme)

// nested object
// let {name , age , langs : {html , css}} = user;
// console.log(name , age , html , css)
// let {html , css, JS} = user.langs;
// console.log(html,css,JS)

// ----------Destructuring of Array----------

// const food = ["burger", "pizza" , "Chicken" , "steak"]
// const [one , two , three] = food;
// console.log(one, two , three)

// if you have variables with same name you can not redeclare them but you can reassign them without using ()
// let one = "default";
// let two = "default";
// let three = "default";
// [one , two , three] = food;
// console.log(one, two , three)

// you can use default value but if its in object the property of object will override default value
// const [one , two , three, four = "default"] = food;
// console.log(one, two , three , four)

// Skipping (we dont have skipping in object because object dont have index and we must write
// varaiable with same name of object properites or using alias so variables must be not ordered)
// const [one, , two, three] = food;
// console.log(one,two,three)

// nested Array
// const food = ["burger", "pizza" , "Chicken" , "steak" , [ "Apple" , "Banana" , "Mango", ["orange" , "ananas"]]]
// const [ one , two , three , four ,[ fr1 , fr2 , fr3, [fr4 , fr5]]] = food;
// console.log(fr1,fr2,fr3,fr4,fr5)
// using rest operator
// const [ one , ...otherFood] = food;
// console.log(otherFood)


// --------Swaping using Destructuring------------
// let book = "video",
//     video = "book";
// console.log(book,video);
// old way using 3rd variable 
// let stash = book;
// book = video;
// video = stash;
// console.log(book,video)
// new Way using Destructuring
// [book, video] = [video , book];
// console.log(book,video)

// -----------Destructuring mixed content------------

// const user = {
//   userName : "Osama",
//   city : "Cairo",
//   skills : {
//     html : "80%",
//     css : "85%", 
//     JS : [ "Vuejs" , "Angularjs", "reactjs"] 
//   }
// }

// const {userName , city , skills : {html , css , JS : [one, two , three]} } = user ;
// console.log(one, two , three)

// const user = {
//   userName : "Osama",
//   city : "Cairo",
//   skills : {
//     html : "80%",
//     css : "85%", 
//     JS : { 
//       one : "Vuejs",
//       two : "Angularjs",
//       three : "reactjs"
//     } 
//   }
// }
// const {userName , city , skills : {html , css , JS : {one, two , three}} } = user ;
// console.log(one, two , three)

// -----------Destructuring parameters------------

// const user = {
//   userName : "Osama",
//   city : "Cairo",
//   skills : {
//     html : "80%",
//     css : "85%", 
//     JS : [ "Vuejs" , "Angularjs", "reactjs"] 
//   }
// }
// old way without Destructuring
// function showMyInfo(obj){
//   console.log(obj.skills.JS[0], obj.skills.JS[1] , obj.skills.JS[2])
// }
// showMyInfo(user)
// new Way with Destructuring
// function showMyInfo( {userName , city , skills : {html , css , JS : [one, two , three]} }){
//   console.log(one, two ,three)
// }
// showMyInfo(user)

// ------------Enhanced Object Literals---------
// [1] Property Value Shorthand
// [2] Method Shorthand
// [3] Computed Object Property Name

// const userName = "Osama",
//       website = "Elzero.org"
      
// const user = {
//   userName : userName,
//   website : website
// }
// console.log(user)

// Property value Shorthand =>  if property of object has same name of varaible
// you can remove the : and value from object
// const user = {
//   userName ,
//   website
// }
// console.log(user)
// old way
// const user = {
//   myMethod : function(param1){
//     return param1
//   }
// }
// console.log(user.myMethod("Soliman"))

// Method Shortcut => ( remove function and : )
// const user = {
//   myMethod (param1){
//     return param1
//   }
// }
// console.log(user.myMethod("Soliman"))

// Old way
// // Normal Variable
// const myVar = "key";
// // creat new Object
// const myObj = {
//   myProperty : "myValue"
// }
// // add dynamic property and assign a value
// myObj[myVar] = "Value"
// console.log(myObj)

// Computed Object Property Name =>  [myVar] : "Value" inside object instead of myObj[myVar] = "Value" outside object
// Normal Variable
// const myVar = "key";
// // creat new Object
// const myObj = {
//   myProperty : "myValue",
//   [myVar] : "Value"
// }
// // add dynamic property and assign a value
// console.log(myObj)

// ---------------Set------------------
/* 
new Set(iterable)
set does not has keys
to convert array to set use new Set(array)
to convert set to array use spread operator [...mySet] or Array.from(set)
*/
// let mySet = new Set([1,2,3,3])
// let myArr = [1,2,3,3]
// console.log(mySet)
// console.log(myArr)
// // Set does not has keys so you can not use mySet[1] like array myArr[1]
// console.log(myArr[1])
// console.log(mySet[1]) //undefined

/* 
Set Methods
add(value)
delete(value)
mySet.has(value)
mySet.size
mySet.clear()
*/

// // let mySet = new Set()
// let mySet = new Set("Soiman")
// // mySet.add(1).add(2).add(3)
// // when you add "soliman" will add it as one element
// // but when you write it inside set like new Set("Soliman") will add each charachter as new element
// mySet.add("Soliman")
// mySet.delete("S")
// console.log(mySet.has("m"))
// console.log(mySet.size)
// console.log(mySet)
// mySet.clear()
// console.log(mySet)

// ------------Map-----------
/* 
Map has Keys ( accept anthing as key) but object accept only string or symbol (object always convert key to string) but Map not
*/
// Object
// let user = {}
// user["userName"] = "Osama"
// user.passWord = 123
// console.log(user)
// console.log(user.userName)
// console.log(user["passWord"])

// Map
// let user = new Map()
// // user.set("userName", "OSama").set("passWord", 123)
// // Map accept anything number , string , boolean , object , NaN , function
// user.set("10", "OSama").set(10, 123).set(false , "Boolean").set({a:1 ,b:2}, "Object")
// .set(NaN, "not a number").set(function func(x){return x}, "Function")
// console.log(user)

// instead of using set you can add them as array inside Arrays while creating new Map
// let user = new Map([
//   ["userName", "OSama"],
//   ["passWord", 123]
// ])
// console.log(user)


/* 
Map Methods
set(key , value)
get(key) => there is no get() at Set because Set has no keys
delete(key)
myMap.has(key)
myMap.size
myMap.clear()
*/

// ----------------Symbol------------
/* 
it's a primitive data Type (assigned by value) (does not have Method)
* Symbol is a new Primitive value (ES6)
* Every Value return from Symbol(desciption) is unique
* Used as identifier for object properties but it will not be shown in iteration or JSON.stringify 
* You can say it???s a container of unique value
* Symbol() is not a constructor 

let a = 123
let b = 123
a === b

let a = Symbol(123)
let b = Symbol(123)
a !== b
*/

// const mySymbol = Symbol()
// console.log(typeof mySymbol)

// const mySymbolOne = Symbol("Testing")
// const mySymbolTwo = Symbol("Testing")
// console.log(mySymbolOne === mySymbolTwo) //false

// myNewSymbol = Symbol();
// const myObj = {
//   userName : "Osama",
//   webSite : "Elzero.org",
//   [myNewSymbol] : "This is Hidden from Iteration"
// }
// Symbol will not be shown in iteration
// for...of loop
// for (let val of Object.values(myObj)) {
//   console.log(val)
// } 
// // for...in loop
// for (let prop in myObj){
//   console.log(myObj[prop])
// }

// console.log(Object.keys(myObj)) // Symbol will not be shown
// console.log(Object.getOwnPropertyNames(myObj)) // Symbol will not be shown
// console.log(JSON.stringify(myObj)) // Symbol will not be shown
// console.log(Object.getOwnPropertySymbols(myObj)) // to show only Symbol
// console.log(myObj) // everyThing will be shown
// console.log(myObj[myNewSymbol])

// for Method
/* 
Search in The global symbol registry for a symbol with the given key if found return it; 
otherwise, a new symbol is created and returned

when you use for method it will search for any Symbol that has a key "Test" inside it 
if found will assign it to the varaible if not will create it and assign it to variable
so in mySymbolthree will search for key "Test" not found so will create and assign to variable
in mySymbolFour will search and find a Symbol key "Test" so will assign it to new variable
Symbol("Testing") => Testing here is a description 
Symbol.for("Test") => Test here is a key 
that's why when we write Symbol.keyFor(Symbol("Testing")) we get undefined because Testing is a description not key
*/
/* 
The global symbol registry is just a convenient global repository for symbol instances
that works regardless of scope or compilation unit.

const sym1 = Symbol.for('some-key'); // Symbol is created in global registry

// Elsewhere in project:
const sym2 = Symbol.for('some-key'); // Symbol is retrieved from global registry

// They are the same symbol:
console.log(sym1 === sym2); // true

// You can even access the key property:
console.log(Symbol.keyFor(sym1)); // some-key
*/

// const mySymbolOne = Symbol("Testing")
// const mySymbolTwo = Symbol("Testing")
// console.log(mySymbolOne === mySymbolTwo) //false
// const mySymbolthree = Symbol.for("Test")
// const mySymbolFour = Symbol.for("Test")
// console.log(mySymbolthree === mySymbolFour) //true

// // KeyFor Method
// console.log(Symbol.keyFor(mySymbolOne)) // undefined
// console.log(Symbol.keyFor(mySymbolFour))

// // toString() to convert Symbol value to string
// console.log(mySymbolFour)
// console.log(mySymbolFour.toString())

// // description to get value of Symbol
// console.log(mySymbolFour.description)


// ---------------ForEach in Set and Map--------------------

// const arr = ["A", "B", "C", "D", , "F"]

// for (let i = 0 ; i < arr.length; i++) {
//   console.log(`${i} - ${arr[i]}`) // 4 - undefined
// }
// console.log(`${"#".repeat(10)}`)

// let callbacksFunction = 0;
// // forEach will skip undefined and will not excute call back function on empty element
// arr.forEach((ele , index) => {
//   callbacksFunction++
//   console.log(`${index} - ${ele}`)
// }) // 4 will not show up
// console.log(callbacksFunction) //5 this is a prove that will not excute callback function on empty element
// console.log(`${"#".repeat(10)}`)

// // Map also will skip undefined and will not excute call back function on empty element
// arr.map((ele,index) => console.log(`${index} - ${ele}`) ) // 4 will not show up
// console.log(`${"#".repeat(10)}`)

// function makeTheLoop(ele , index) {
//   console.log(`${index} - ${ele}`)
// }
// arr.forEach(makeTheLoop)

// forEach in array (element , index , array)
// forEach in Set (element value, element key , set) (set does not has key so value = key)
// // forEach in Set (element value, element key , map) 
// const arr = [1,2,3,4,5]
// const mySet = new Set([1,1,2,3,4,4,4,5])
// const myMap = new Map().set("1" , "A").set("2", "B").set("3","C")
// mySet.forEach((ele, ele2 , set) => console.log(`${ele} - ${ele2}`))
// console.log(`${"#".repeat(10)}`)
// arr.forEach((ele, index , arr) => console.log(`${index} - ${ele}` ))
// console.log(`${"#".repeat(10)}`)
// myMap.forEach((value, key , map) => console.log(`${key} - ${value}` ))

// ------------------Set vs WeakSet-----------------------
/* 
Set 
- Contains Any Type pf Values
- Get Elements Count with size
- forEach Available to Iterate
- You can Get its Keys

WeakSet
- Contains Only Object
- You Can't USe Size to Get Elements Count
- forEach Not Availabe
- You Can not Get Key
*/

// Set 

// let mainObject = { A : 1}
// let mySet = new Set([mainObject])
// let objOne = { B : 2}
// let objTwo = { C : 3}
// mySet.add(objOne)
// mySet.add(objTwo)
// console.log(mySet)
// console.log(mySet.has(objOne))
// console.log(mySet.has(objTwo))
// console.log(mySet.size)
// console.log(mySet.keys())
// mySet.delete(objOne)
// console.log(mySet.has(objOne))
// objTwo = null
// console.log(mySet.has(objTwo))
// // objTwo will show here (we assign objTwo to null but still in set)
// console.log(mySet) 

// weakSet
// let mainObject = { A : 1}
// let myWeakSet = new WeakSet([mainObject])
// let objOne = { B : 2}
// let objTwo = { C : 3}
// myWeakSet.add(objOne)
// myWeakSet.add(objTwo)
// console.log(myWeakSet)
// console.log(myWeakSet.has(objOne))
// console.log(myWeakSet.has(objTwo))
// myWeakSet.delete(objOne)
// console.log(myWeakSet.has(objOne))
// objTwo = null
// console.log(myWeakSet.has(objTwo))
// // objTwo will show here (we assign objTwo to null but still in set)
// console.log(myWeakSet) 

/* 
Set is ordered and live
WeakSet is not ordered and live
but i am not sure ? check again

If any of those objects loses all references it will be ???marked??? for garbage collection. 
When this garbage collection happens this object is released from the memory. It is gone. 
The thing about garbage collection is that it works whenever it wants. You can???t predict when it will happen.
Let???s say you have an object. You add this object to a WeakSet. What if you, 
in another part of the code, remove that object? The answer is, it depends. 
It depends on whether the garbage collection had time to run or not. If it did, 
the object is released from memory, and it is also gone from the WeakSet.
*/



// ------------------Map vs WeakMap-----------------------

// let myMap = new Map()
// let obj1 = { a: 1}
// myMap.set(obj1 , "Test")
// myMap.set("B" , 2)
// myMap.set("C" , 3)
// myMap.set(1 , 15)
// console.log(myMap)
// console.log(myMap.get("C"))
// console.log(myMap.get(obj1))
// console.log(myMap.has("B"))
// myMap.delete("B")
// console.log(myMap.has("B"))
// obj1 = null;
// console.log(myMap.get(obj1))
// console.log(myMap.has(obj1))
// // objTwo will show here (we assign objTwo to null but still in Map)
// console.log(myMap)

// let myWeakMap = new WeakMap()
// let obj1 = { a: 1}
// let obj2= { b : 1}
// let obj3= { c : 1}
// myWeakMap.set(obj1 , "Test")
// myWeakMap.set(obj2 , "Test")
// myWeakMap.set(obj3 , "Test")
// console.log(myWeakMap)
// console.log(myWeakMap.get(obj1))
// console.log(myWeakMap.get(obj2))
// myWeakMap.delete(obj3)
// console.log(myWeakMap.has(obj3))
// obj2 = null;
// console.log(myWeakMap.get(obj2))
// console.log(myWeakMap.has(obj2))
// // objTwo will show here (we assign objTwo to null but still in Map)
// console.log(myWeakMap)

// let mySet = new Set(["A", "B", 2 , "C", 3 , 4])
// console.log(mySet)
// for( let x of mySet) {
//   console.log(x)
// }
// mySet.forEach(ele => console.log(ele))

// ----------------Symbol.iterator------------------

/* 
Iterable => object has Symbol.iterator
Iterator 
- object with interface designed for Iteration
- All iterators has Next() Method That return Result Object
- the Result Object has two props
[1] value => the next value
[2] Done => boolean 

for ... of loop
[1] Call Symbol.iterator with Next Method
[2] Save Value inside Variable => [ for (let variable of iterator)]
[3] Check for Done if its Ture => Exit Loop
*/
// let arr = [1,2,3]
// let myName = "Osama"
// let myNum = 1000
// let myObject = { 
//   a : "A",
//   b : "B"
// }
// console.log(typeof arr[Symbol.iterator])
// console.log(typeof myName[Symbol.iterator])
// console.log(typeof myNum[Symbol.iterator])
// console.log(typeof myObject[Symbol.iterator])

// let strIterator = myName[Symbol.iterator]()
// let arrIterator = arr[Symbol.iterator]()
// console.log(arrIterator)
// console.log(arr.entries())
// console.log(strIterator)
// console.log(strIterator.next())
// console.log(strIterator.next())
// console.log(strIterator.next())
// console.log(strIterator.next())
// console.log(strIterator.next())
// console.log(strIterator.next())
// for ... of loop underhood is next() ..... till done true then stop loop
// for (let char of myName) {
//   console.log(char)
// }

// --------------custom iterable object----------------


// const myObj  = {
//   theName : "Osama",
//   age : 36 ,
//   country : "Egypt",
//   skills : "JS",
// }
// // Add Symbol.iterator to Object
// myObj[Symbol.iterator] = function () {
//   let i = 0;
//   let prop  = Object.keys(this)
//   return{
//     next() {
//       return {
//         value : prop[i],
//         done : i++ === prop.length
//       } 
//     }
//   }
// }

// for( let x of myObj) {
//   console.log(`${x} => ${myObj[x]}`)
// }

// you can use  Method Shorthand & Computed Object Property Name to shortcut the code

// const myObj  = {
//   theName : "Osama",
//   age : 36 ,
//   country : "Egypt",
//   skills : "JS",
//   [Symbol.iterator]() {
//     let i = 0;
//     let prop  = Object.keys(this)
//     return{
//       next() {
//         return {
//            value : prop[i], // key
//           // value : myObj[prop[i]], // value
//           done : i++ === prop.length
//         } 
//       }
//     }
//   }
// }

// for( let x of myObj) {
//   console.log(`${x} => ${myObj[x]}`)
// }

// -----------Generator--------------
/* 
Generator create iterator
function stop Excution after each yield 
yield is like pause
function give you control to yield
*/
// function *generateTicket () {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let iterator = generateTicket()
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next())

// let myNums = [1,2,3,4,5]
// function *generateNums(nums) {
//   for ( let i =0; i < nums.length; i++) {
//     yield nums[i]
//   }
// }

// let generator = generateNums(myNums)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)

// let myNums = [1,2,3,4,5]
// function *generateNums2() {
//   yield * [1,2,3,4,5]
// }
// let generator = generateNums2(myNums)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)

// Normal Function
// function orderBook() {
//   window.alert("Order This Book?")
//   console.log("Order This Book?")
//   window.alert("Added to Cart")
//   console.log("Added To Cart")
//   window.alert("Payment is Done")
//   console.log("Payment is Done")
// }
// // function will excute once you assign it to variable
// let order = orderBook();

// Generator
// function * orderBook() {
//   window.alert("Order This Book?")
//   console.log("Order This Book?")
//   window.alert("Added to Cart")
//   console.log("Added To Cart")
//   window.alert("Payment is Done")
//   console.log("Payment is Done")
// }
// // function will excute only you use next()
// let order = orderBook();
// order.next()

// function * myskills() {
//   yield "HTML";
//   yield "CSS";
//   yield "JS";
// }
// // using generator with function generate iterator like adding [Symbol.iterator] to Object to create iterator
// let skills = myskills()
// for ( let skill of skills) {
//   console.log(skill)
// }
// // you can also directly loop on generator
// for ( let skill of myskills()) {
//   console.log(skill)
// }

// return stop excution and return done:true; ( anything after return will not excuted)
// function *sayName() {
//   yield "Osama";
//   yield "Ahmed";
//   return "Sayed"
//   yield "Eman"
// }
// let names = sayName();
// console.log(names.next())
// console.log(names.next())
// console.log(names.next()) // value : Sayed done : true;
// console.log(names.next())


// function *createInfinite() {
//   let i = 0;
//   while(true) {
//     yield i++;
//   }
// }
// let infiniteIterator = createInfinite()
// console.log(infiniteIterator.next())
// console.log(infiniteIterator.next())
// console.log(infiniteIterator.next())
// // here will start from 3 because we used next 3 times on infiniteIterator
// for (let num of infiniteIterator) {
//   if (num > 5) {
//     break;
//   }
//   console.log(num)
// }
// // here will start from 0 because we used generator itself not the iterator
// for (let num of createInfinite()) {
//   if (num > 5) {
//     break;
//   }
//   console.log(num)
// }

// console.log(createInfinite())
// console.log(infiniteIterator)

// user defined Iterable
// const myIterable = {
//     *[Symbol.iterator]() {
//       yield 1;
//       yield 2;
//       yield 3;
//   }
// }
// for (let value of myIterable) {
//   console.log(value);
// }


// Delegating generator

// function *generateNums() {
//   yield 1
//   yield 2
//   yield 3
// }
// function *generateNames() {
//   yield "Mohamed"
//   yield "Ahmed"
//   yield "Soliman"
// }

// function *generateAll() {
//   yield * generateNums() // without star will generator name
//   yield * generateNames() // without star will generator name
//   // return "Break From Inside" // will break iterstion
//   yield * [4,5,6] // without star will return array it self 
// }

// let genAll = generateAll()
// // will start from nums then go to names
// console.log(genAll.next())
// console.log(genAll.next())
// console.log(genAll.next())
// console.log(genAll.next())
// console.log(genAll.next())
// console.log(genAll.next())
// // console.log(genAll.return("Break")) // will break iteration and return {value: break , done: true}
// console.log(genAll.next())
// console.log(genAll.next())
// console.log(genAll.next())
// console.log(genAll.next())

// ------------New Array Methods---------------

/* 
Array.of
Array.from
Array.fill
Array.find
Array.findIndex
Array.copyWithin
*/

// Array.of(Elements to Create The Array)

// will create 100 empty Array
// let oldArray = Array(100)
// console.log(oldArray)
// console.log(oldArray.length)

// will create array of two elements 
// let oldArray = Array(100 , 200)
// console.log(oldArray)
// console.log(oldArray.length)

// will create array of one string element "100"
// let oldArray = Array("100")
// console.log(oldArray)
// console.log(oldArray.length)

// here will create only one element not 100 empty element like Array(100)
// let newArray = Array.of(100)
// console.log(newArray)
// console.log(newArray.length)

// Array.from(iterable , Map func, this) 

// let myName = "Osama"
// let arrspread = [...myName]
// let arrfrom = Array.from(myName)
// console.log(arrspread)
// console.log(arrfrom)

// let myNums = [10,20,30,40,50,60]
// let arrFrom = Array.from(myNums, num => num - 10)
// let arrMap = myNums.map(num => num - 10)
// console.log(arrFrom)
// console.log(arrMap)

// Array.fill (value to fill, start (default 0) , end (default array.lenght))

// let nums = [10,20,30,40,50,60]
// // al elements inside array will be 100 because we did not give it start or end so defautl start 0 end arr.length
// // nums.fill(100)
// // nums.fill(100,2)
// nums.fill(100,1,3)
// console.log(nums)

// Arrar.find() will return 1st value only
// let num = [10,20,30,40,50,60]
// let found = num.find(el => el > 10)
// console.log(found) //20

// Arrar.findIndex() will return 1st index of value only
// let num = [10,20,30,40,50,60]
// let found = num.findIndex(el => el > 10)
// console.log(found) //  1

/* 
Array.copywithin(Target, Start => Optional (default 0 ), End => Optional (default arr.length))
target = where to copy // start of the copied part // End of the copied part 
but will not increase Array length
Copy Part of an Array to Another Location in the Same Array
*/

// let myletters = ["A","B","C","D","E","F","G"]
// // target 0 start 0 end arr.length => will copy all array and paste it at index 0 so will give you same array
// // myletters.copyWithin(0)
// // myletters.copyWithin(0,3,6)
// myletters.copyWithin(1,5,7)
// console.log(myletters)

//-------------------------Module-----------------------

/* ------Import and Export
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import(module-name);

export { name1, name2, ???, nameN };
export { variable1 as name1, variable2 as name2, ???, nameN };
export let name1, name2, ???, nameN; // also var, const
export let name1 = ???, name2 = ???, ???, nameN; // also var, const
export function FunctionName(){...}
export class ClassName {...}

export default expression;
export default function (???) { ??? } // also class, function*
export default function name1(???) { ??? } // also class, function*
export { name1 as default, ??? };

// Aggregating modules (ReExporting)
export * from ???;
export { name1, name2, ???, nameN } from ???;
export { import1 as name1, import2 as name2, ???, nameN } from ???;
export { default } from ???;

note: if you need to use module with node not with browser just change file name from .js to .mjs
*/

// import{myRank, myArray as arr , sayName } from '/Module/Module.js'; //(as is alias )
// import everyyhing from module (everything means everything you have exported from ./Module.js)
// import * as all from './Module.js';

// console.log(a)
// console.log(myRank)
// console.log(all.myRank)
// // console.log(arr)
// console.log(all.arr)
// // console.log(sayName("Soliman"))
// console.log(all.sayName("Soliman"))
// console.log(all)

// import anyName from 'Module/Module.js'
// you can merge named export and default export in one line code 
// every model has only one default export (you can write any name for default export because it's only one default)
// import anyName , {myArray, myRank, sayName} from './Module.js';
// // console.log(anyName())
// console.log(anyName)
// console.log(myRank)

// console.log(this) // undefined

// ------Aggregating modules (ReExporting)
/* 
Aggregating modules : 
- The imported function or variables from Module.js can be also 
exported to another JS File (reExport.js) 
- but in Aggregating modules there is no Default 
- you can use wildCard with Aggregating modules export * from "/Module/Module.js" but with normal modules no
*/

// import{myRank, myArray as arr , sayName } from '/Module/Module.js';
// export {myRank, myArray as arr , sayName } from '/Module/Module.js';
// export * from "/Module/Module.js" // wild card to export everything


/* 
In Node modules, this at the top level doesn???t reference the global object. 
Instead, it has the same value as module.exports. Inside functions (Node environment), 
the value of this is determined based on how the function is called. In JavaScript modules, 
this at the top level is undefined.
*/

//------------------classes ES6------------------------
// Old Syntax

// // Constructor 
// function User(name,age){
//   this.name = name;
//   this.age = age;
// }
// // create Methods (Properties and methods can be added to a constructor using a prototype:)
// User.prototype.getInfo = function(){
//   console.log(`Your Name is ${this.name} and your Age is ${this.age}`)
// }
// User.prototype.getDays =  function(){
//   console.log(`You live for ${this.age * 365} Days`)
// }
// // Create new Object using constructor and this object will inherit Methods from User.prototype
// const firstUser = new User("Soliman", 33)
// firstUser.getInfo()
// firstUser.getDays()
// console.log(firstUser.name)
// console.log(firstUser.age)

// ES6 Syntax

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getInfo() {
//     console.log(`Your Name is ${this.name} and your Age is ${this.age}`);
//   }
//   getDays() {
//     console.log(`You live for ${this.age * 365} Days`);
//   }
// }

// const firstUser = new User("Soliman", 33)
// firstUser.getInfo()
// firstUser.getDays()
// console.log(firstUser.name)
// console.log(firstUser.age)

// import User from './Module.js'

// let firstUser = new User("Soliman","Mohammed.soliman88@gmail.com")
// firstUser.getInfo()

//------------Derived class (sub-class)-----------------
/* 
A derived class is a class created or derived from another existing class. 
The existing class from which the derived class is created through the process of 
inheritance is known as a base class or superclass.
*/
// extends means (Admin) is a child class of parent class (User) to inherit every thing from parent
// import User from './Module.js'
// class Admin extends User {
//   constructor(name, email,age){
//     // call parents constructor like this.name & this.email
//     super(name ,email);
//     this.age = age;
//   }
// };
// let firstAdmin = new Admin("Soliman" ,"Mohammed.soliman88@gmail.com",33);
// // because of extends Admin inherited getInfo Method from parent User
// firstAdmin.getInfo();
// console.log(firstAdmin.age)

// ---------------Important Knowledge----------------

// [1] Call Stack
/* 
- Mechanisam to make interpreter Track Your Call
- When you call a function its added to the stack
- when function excuted its removed from the stack
- the interpreter continue calling from the last point reached
- Call Stack detect web api method and leave it to the browser to handle it
*/

// [2] Web API
/* 
- Method Availabe from environment => browser
- when complete it will add the callback to the callback queue
*/

// [3] Event Loop
/*
- Wait the call stack to finish
- Get callback from callback queue
- add callback to callstack
*/


// // one three two
// console.log("One")
// window.setTimeout(_ => console.log("Two"), 0)
// console.log("Three")

// // one three last two 
// window.setTimeout(_ => console.log("last"), 1000)
// console.log("One")
// window.setTimeout(_ => console.log("Two"), 1000)
// console.log("Three")

// // one three two last 
// here web API will add two to callback queue  before last because it will not wait two to complete
// because two has 0 delay but last has delay 1 sec so will be added after two
// window.setTimeout(_ => console.log("last"), 1000)
// console.log("One")
// window.setTimeout(_ => console.log("Two"), 0)
// console.log("Three")


// Error
// console.log(myVar)
// let myVar = 100;
// myVar += 200;

// 300
// window.setTimeout(_ => console.log(myVar),0) 
// let myVar = 100;
// myVar += 200;

// (4) hi outside 1 2 3 4
// let arr = [1,2,3,4]
// arr.forEach((el) => { 
//   window.setTimeout(_ => console.log(el),0)
//   console.log("hi")
// } )
// console.log("Outside")

// ---------------Asynchronous Vs Synchronous------------
// bad will stop console.log("Two") to excute you should press ok to alert and finish it 
// then console.log("Two") will be excuted
/* 
Web APIs can include functions that are synchronous and asynchronous. 
For example, the setTimeout will use the event loop, 
console.log() will synchronously write to the browser's console  
fetch will call an asynchronous function that can be awaited.
Asynchronous JavaScript code requires Callback functions that get 
executed later after the desired time.
(that's why console.log() is Web API Synchronous and  setTimeout(callback function) is Web API Asynchronous)
*/
// console.log("One")
// window.alert("Bad")
// console.log("Two")

// we used setTimeout because will use event loop and will stop important func but window.alert will stop
// console.log("normal Func")
// // window.alert("Stop")
// window.setTimeout(_ => console.log("Get Friends Lists"),0)
// window.setTimeout(_ => console.log("Get Latest News"),0)
// console.log("Important func , no waiting")

// -----------Promises------------------

/* 
- Promise Make it Easy to support Asynchronous Programming
- Promise is something that will happen in the future
- Promise is a Placeholder for a future value
- EXP : 
  You ordered food from resturant
  [Promise] is the order record
  [the future value ] is the food you will receive 
- Promise is an Object
- Promise is the event completion or failure of async operation & its resulting value
- Js use callbacks for asynchronous Programming 
  [1] function called and do the task
  [2] Action complete
  [3] another function called (nested function)
  [4] Action complete
  [5] another function called (nested function)
  in complex cases => every call add nesting call
  http://callbackhell.com/
- Promise Avoiding callbackhell or Pyramid of Doom
- Promise is one of this operation
  [1] Pending => Not fulfilled or rejected
  [2] fulfilled => operation succeeded (using resolve parameter)
  [3] rejected => operation failed (using reject parameter)
*/


// promise accept one parameter and this parameter is excuter function (which accept 2 parameters => resolve and reject they called handelers) 
// const myPromise = new Promise((resolve, reject) => {
//   // console.log("Welcome to my First Promise")
//   let connect = false;
//   if(connect) {
//     resolve("Connection Established")
//   }else {
//     reject(Error("Connection Failed"))
//   } 
// });
// // then to add onfulfilled function and take value from resolve inside myPromise
// // and add onreject function and take value from reject inside myPromise
// // will take values from resolve and reject so when connect is false 
// // will not throw an Error will give you a string of Error
// myPromise.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// )


// ----you can write promise.then in smaller syntax 
// const theResolved = (resolved) => console.log(resolved)
// const theRejected = (rejected) => console.log(rejected)
// myPromise.then(theResolved,theRejected)

// ----or add it to promise
// const myPromise = new Promise((resolve, reject) => {
//   // console.log("Welcome to my First Promise")
//   let connect = true;
//   if(connect) {
//     resolve("Connection Established")
//   }else {
//     reject(Error("Connection Failed"))
//   } 
// }).then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// )

/* 
A promise is used to handle the asynchronous result of an operation. 
JavaScript is designed to not wait for an asynchronous block of code to completely execute 
before other synchronous parts of the code can run. With Promises, we can defer the execution 
of a code block until an async request is completed. This way, other operations can keep 
running without interruption.
*/

// ----------setTimeout vs Promise vs Promise.then()
// setTimeout after the call stack is empty (Task queue) but promise.then() at the end of the main stack (micro-task queue)
// let x = 0;
// let myPromise = new Promise((resolve , reject) => {
//   let status = false;
//   console.log("From inside of Promise")
//   if(status) {
//     resolve( x = 2 )
//   }else{
//     reject(x = 3)
//   }
// });
// myPromise.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// )
// console.log("From Outside of Promise")

/* output
[1] "From inside of Promise"
[2] "From outside of Promise"
[3] 2 => 2 printed after "From outside of Promise" 
*/

// window.setTimeout(_=>console.log("From setTimeout") , 0)
// let myPromise = new Promise((resolve , reject) => {
//   let status = true;
//   console.log("From inside of Promise")
//   if(status) {
//     resolve("From Resolve")
//   }else{
//     reject("From reject")
//   }
// });
// myPromise.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// )
// console.log("From outside of Promise")

//output 
/* 
[1] "From inside of Promise"
[2] "From outside of Promise"
[3] "From Resolve" => from Promise.then
[4] "From setTimeout"
*/

// ---------asynchronous of then--------
/*
// then itself is promise Object
// its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then(value => {
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});
// instantly logging the value of thenProm
console.log(thenProm);
// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
    console.log(thenProm);
});

logs, in order:
Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
"this gets called after the end of the main stack. the value received and returned is: 33"
Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 33}

// another Exp. 
// let x = 5;
// let pro = new Promise((resolve , reject) => {
//   resolve(x)
// })
// pro.then(
//   (resolved) => x += 1 
// )
// console.log(x) // 5 because then will be excuted at the end of main Stack
// window.setTimeout(_ => console.log(x)) // 6 because setTimeout (Task Queue) after promise(microTask Queue)
// let x = 5;
// let pro = new Promise((resolve , reject) => {
//   resolve(x += 1)
// })
// console.log(x) // 6 resolve inside promise itself will excute immediatly
// window.setTimeout(_ => console.log(x)) // 6 because setTimeout will wait till call stack to be empty

// then will be excuted once p1 (Promise) resolved 
// even if P1 will be resolved when call stack is empty (because of setTimeout)
// so then will be excuted not only at the end of main stack but also once Promise resolved
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "P1 Resolved")
// })
// console.log(p1) //pending
// setTimeout(_=> console.log(p1), 1000) // pending
// setTimeout(_=> console.log(p1), 3000) // fulfilled
// p1.then((result) => console.log(result)) // "P1 Resolved"
// // output order : pending pending "P1 Resolved" fulfilled
*/

// -----------catch and then--------------
// const myPromise = new Promise((resolve, reject) => {
//   // // only one state allowed
//   // resolve("Success")
//   // reject("Failed") // will ignore this only one state allowed
//   if(Math.random() * 100 < 50) {
//     resolve("Good")
//   }else{
//     reject("Bad")
//   }
// });
// myPromise.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// )

// myPromise.catch((rejected) => console.log(rejected))

// will give you Error when rejected happend because then accept 2 functions or you can chain then and catch
// myPromise.then((resolved) => console.log(resolved))
// myPromise.catch((rejected) => console.log(rejected))

// chain then and catch
// myPromise.then((resolved) => console.log(resolved)).catch((rejected) => console.log(rejected))
// or you can write null to skip resolved or rejected inside then
// myPromise.then(null , (rejected) => console.log(rejected) )

// you can chain more than one then and catch
// let myPromise = new Promise((resolve , reject) => {
//   let x = 5;
//   let y = -1;
//   resolve(x);
//   reject(y);
// })
// myPromise.then((resolved) => {
//   console.log(resolved)
//   return resolved * 2
// }).then((resolved2) => {
//   console.log(resolved2)
// }).catch((rejected) => console.log(rejected))
// // output 5 , 10 will output -1 if remove resolve(x) from Promise

// different syntax but same thing
// let p1 = new Promise((resolve , reject) => {
//   if(true){
//     resolve("P1 resolved")
//   }else {
//     reject("P1 reject")
//   }
// })
// let p2 = Promise.resolve("P2 Resolved")
// p1.then((resolved) => console.log("P1:" , resolved))
// p2.then((resolved) => console.log("P2:" , resolved))

// without Promise (callback hell)
// firstRequest(function(response){
//   secondRsponse(response, function(nextResponse){
//     thirdRespose(nextResponse, function(finalResponse) {
//       console.log('Final Response: '+ finalResponse);
//     }, failureCallback);
//   }, failureCallback);
// },failureCallback);

// with Promise
// firstRequest()
//   .then((response) => secondRequest(response))
//   .then((nextResponse) => thirdRequest(nextResponse))
//   .then((finalResponse) => console.log("final Respose: " + finalResponse))
//   .catch(failureCallback);

// without nesting function
// let btn = document.querySelector(".btn")
// btn.addEventListener("click" , function(){
//   setTimeout(_=> console.log(1),1000)
//   setTimeout(_=> console.log(2),3000)
//   setTimeout(_=> console.log(3),2000)
// }) // output 1 3 2

// with nesting function => callBack hell example
// btn.addEventListener("click" , function(){
//   setTimeout(_=>{
//     console.log(1) 
//     setTimeout(_=> {
//       console.log(2)
//       setTimeout(_=> console.log(3),2000)
//     },3000)
//   },1000)
// }) // output 1 2 3

// // then can be used also for reject or Error 
// /* 
// here when we can add another function to .then(resolveFun , resolveFun2) so resolveFun2 will catch reject or Error
// */
// function myPromise(){
//   return new Promise((resolve , reject) => {
//     // resolve("Resolved!")
//     reject("Rejected!")
//     throw Error ("Error From inside Promise")
//   })
// }

// myPromise()
//   .then(resolveFun , resolveFun2)
//   .catch(rejectFun)

// function resolveFun(result) {
//   console.log(`From ResolveFun : ${result}`)
// }
// function resolveFun2(result) {
//   console.log(`From ResolveFun2 : ${result}`)
// }
// function rejectFun(result) {
//   console.log(`From rejectFun : ${result}`)
// }

/* --------------callback hell and Promise----------------------
// callback hell EXP.
function getUsername(callback) {
  callback({name : "Soliman"});
};

function getAge(data, callback) {
  data = {...data, age : 50};
  callback(data);
};

function getDepartment (data, callback) {
  data = {...data, department : "Production"};
  callback(data);
};

function getEmployee(data, callback) {
  callback(data);
};

function printInfo(data) {
  console.log(data);
};


getUsername(function(firstResponse){
  getAge(firstResponse , function(secondResponse){
    getDepartment(secondResponse , function(thirdResponse){
      getEmployee(thirdResponse , function(finalResponse){
        printInfo(finalResponse)
      })
    })
  })
})


with Promise

function getUsername() {
  return new Promise ((resolve , reject) => {
    resolve({name : "Soliman"})
  })
};
function getAge(data) {
  return new Promise ((resolve , reject) => {
    data = {...data, age : 33}
    resolve(data)
  })
};
function getDepartment (data) {
  return new Promise ((resolve , reject) => {
    data = {...data, department : "Production"};
    resolve(data)
  })
};
function getEmployee(data) {
  return new Promise ((resolve , reject) => {
    resolve(data)
  })
};
function printInfo(data) {
  console.log(data);
};

getUsername()
  .then((firstResponse) => getAge(firstResponse))
  .then((secondResponse) => getDepartment(secondResponse))
  .then((thirdResponse) => getEmployee(thirdResponse))
  .then((finalResponse) => printInfo(finalResponse))

*/
/* Another Promise exp.
function watchTutorialCallback(callback,errorCallback){
  let userLeft = false;
  let userWatchingCatMeme = false 
  if (userLeft) {
    errorCallback({
      name: 'User Left', 
      message: ':('
    })
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDevSimplified < Cat' 
    })
  } else {
    callback('Thumbs up and Subscribe')
  }
}

function watchTutorialPromise() {
  let userLeft = false
  let userWatchingCatMeme = false
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}

watchTutorialCallback(message => {
  console.log(message)
}, error => {
  console.log(error.name + ' ' + error.message)
})

watchTutorialPromise().then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.name + ' ' + error.message)
})

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve('Video 3 Recorded')
// })

// Promise.all([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then(messages => {
//   console.log(messages)
// })

// Promise.race([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then(message => {
//   console.log(message)
// })
*/

/* with Promise you will wait till declaring y because then will excute at the end of main stack
let x = 2;
let sum;
let p1 = new Promise((resolve , reject)=> {
  resolve(x)
})
p1.then((resolved) =>{
  sum = resolved + y
  console.log(sum) // 7
})
console.log(sum) // undefined
window.setTimeout(_=> console.log('From SetTimeout ' +  sum)) // 7
let y = 5;
*/

/* with Promise you will wait till PromptMsg from user because then will excute at the end of main stack
let promtMsg;
let p1 = new Promise((resolve, reject) => {
  resolve(promtMsg)
})
p1.then((resolved) => {
  resolved = promtMsg ? promtMsg : "No Msg"
  console.log(resolved)
}).catch((rejected) => {
  console.log(rejected)
})

promtMsg = prompt("Promise?", "Please write something!");
*/


// -----------ignoring Pyramid of doom ( callback hell)-----------

// const myPromise = new Promise((resolve , reject)=> {
//   let thePosts = ["A","B","C","D","E","F","G","H"];
//   resolve(thePosts);
// });

// myPromise
//   .then((result) => {
//     console.log("Total no. of Posts is " + result.length + " Posts")
//     return result
//   })
//   .then((result) => {
//     console.log(`The first Post is ${result[0]}`)
//     return result
//   })
//   .then((result) => {
//       console.log(`The Last Post is ${result[result.length - 1]}`)
//       return result
//   })
//   .then((result) => {
//       console.log(`Application has ${result.length / 2} Pages`)
//       return result
//   })

// -------------fetch---------------
/* 
Fetch return a promise object 
resolve => when the server reply to the request and data come in
data.json() return a promise object also
*/
// fetch ("https://api.github.com/users/ElzeroWebSchool/repos")
//   .then(
//     (result) => {
//       let allRepos = result.json()
//       console.log(allRepos)
//       return allRepos;
//     }
//   )
//   .then(
//     (result) => {
//       console.log(`Total Number of Repos is ${result.length}`)
//       return result
//     }
//   )
//   .then(
//     (result) => {
//       console.log(`First Repo is ${result[0].name}`)
//       return result
//     }
//   )
//   .then(
//     (result) => {
//       console.log(`Last Repo is ${result[result.length - 1].name}`)
//       return result
//     }
//   )
//   .then(
//     (result) => {
//       result.forEach(element => {
//         let newElement = document.createElement("div")
//         let elementText = document.createTextNode(element.name)
//         newElement.appendChild(elementText)
//         document.body.appendChild(newElement)
//       });
//     }
//   )

// ----------------Promise All and race , allSettled------------------------------

// const myFirstPromise = new Promise((resolve , reject) => {
//   let connect = true;
//   if (connect) {
//     resolve("First Promise Resolved")
//   }else {
//     reject ("First Promise Rejected")
//   }
// })
// const mySecondPromise = new Promise((resolve , reject) => {
//   let settings = false;
//   if (settings) {
//     resolve("Second Promise Resolved")
//   }else {
//     reject("Second Promise Rejected")
//   }
// })
// promiseAll accept array of promises and return array if resolved of all promises if one of promises rejected will not return that array
// Promise.all([myFirstPromise, mySecondPromise]).then(
//   (result) => console.log(result)
// ).catch((result) => console.log(result))

// const myFirstPromise = new Promise((resolve , reject) => {
//   // window.setTimeout(() => {
//   //   resolve("First Promise Resolved")
//   // },500)
//   window.setTimeout(resolve , 500 , "First Promise Resolved")
// })
// const mySecondPromise = new Promise((resolve , reject) => {
//   // window.setTimeout(() => {
//   //   resolve("Second Promise Resolved")
//   // },100)
//   window.setTimeout(resolve , 100 , "Second Promise Resolved")
// })

// myFirstPromise.then((result) => console.log(result))
// mySecondPromise.then((result) => console.log(result))

// // promise race accept array of promises and return the fastest Promise
// Promise.race([myFirstPromise , mySecondPromise]).then((result) => {
//   console.log(result)
// })

// if all promises don't have delay by setTimeout the first one in array will be first resolve
// let p1 = Promise.resolve("First")
// let p3 = Promise.resolve("Third")
// let p2 = Promise.resolve("Second")
// Promise.race([p2,p1,p3]).then((result) => console.log(result)) // second

// ----- race vs all vs allSettled vs any
// let p1 = new Promise((resolve, reject) => {
//   // reject(1)
//   resolve(1)
// })
// let p2 = new Promise((resolve, reject) => {
//   resolve(2)
// })
// let p3 = new Promise((resolve, reject) => {
//   reject(3)
//   // throw Error("Error from Promise")
// })
// let p4 = new Promise((resolve, reject) => {
//   reject(4)
// })

// // all will return array if all promises resolved and you can loop on that array
// Promise.all([p1,p2,p3,p4])
//   .then((results) =>{
//     results.forEach((result) => {
//       console.log({result})
//     })
//   })
//   .catch((err) => console.log(`Rejected From all Promise no.: ${err}`))

// // race will return fastet resolve or reject
// Promise.race([p1,p2,p3,p4])
//   .then((result) => {
//     console.log(`Resolved from race ${result}`)
//   })
//   .catch((err) => console.log(`Rejected From race Promise no.: ${err}`))

// // allSettled return array of objects {status : , value : } if resolved and {status : , reason : } if rejected
// // rejected will not trigger catch but will return {status : , reason : } from then
// // error will not trigger catch but will return {status : , reason : Error}
// Promise.allSettled([p1,p2,p3,p4])
//   .then((results) => {
//     results.forEach((result => console.log(result)))
//   })
//   .catch((err) => console.log(`Rejected From allS Promise no.: ${err}`))

// // regular then
// p1.then((result)=>{
//   console.log(`resolved from regular p1 ${result}`)
// })
//   .catch((err) => console.log(`Rejected From regular Promise no.: ${err}`))

// // any => like race but race if first promise rejected will got to Error with catch but with any will search 
// // for all promises and give you first founded promise resolved
// Promise.any([p1,p2,p3,p4])
//   .then((result) => {
//     console.log(`Resolved from any Promise no. ${result}`)
//   })
//   .catch((err) => console.log(`Rejected From any Promise no.: ${err}`))


/* 
small note about order of out put in last exp.
[1] resolved from regular p1 1
[2] Resolved from race 1
[3] loop from Promise.allSettled
[4] Rejected From all Promise no.: 3

* 
- regular P1 is the first in console but last in code because p1.then will be excuted once p1 resolved
but race , all and allSettled should check for each promise in array [p1,p2,p3,p4] and will take 
time but regular only one promise p1

- Promise.all is the last in console but the first in code because promise.all will only be resolved
when all [p1,p2,p3,p4] resolved but p3 and p4 rejected so will go to catch and all catches will
be excuted after then

- Promise.allSettle is in console before Promise.all but in code after because Promise.allSettle 
will not go to catch so then(s) before catch(s) 

*/

// ---------------async / await ------------------
/* 
with async await you tell JS engine convert this function to promise
the function will run its synchronous prefix immediately, 
but whenever you await something, the rest of its code will be put into a microtask 
because await wrap everything behind it in Promise.resolve()
*/

/* ----Normal Function
normal function return myProm (Promise {<Pending>}) and when we try to console.log(myProm) 
will give us also (Promise {<Pending>}) because it's inside normal function and excuted synchronous
*/
// function promFunc(){
//   // Promise Object
//   let myProm = new Promise((res,rej)=>{
//     setTimeout(function(){
//       res(77)
//     },5000)
//   })
//   // will excute immediatly will not wait the Promise to be resolved
//   console.log("From Inside 1" ,myProm) // promise Pending
//   // will return (Promise {<Pending>})
//   return myProm
// }
// // will return (Promise {<Pending>})
// console.log(promFunc())
// // will print the resolved value after 5 sec because we used then and wait till Promise to be resolved
// promFunc().then(doubleSeven => console.log(doubleSeven))

/* ------Async function without await 
it's like normal function but the difference is Async functions always return a promise. 
If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
*/
// async function promFunc3(){
//   return 88
// }
// // return {<fulfilled>: 88} because always Async function return 
// console.log(promFunc3())
// // will print the resolved value immediatly because we used then
// promFunc3().then(result => console.log(result))

/* ----Async Function + await
Async Function return here myProm (Promise {<Pending>}) and when we try to console.log(myProm) 
will give us (77) because it's inside Async function and we add await before promise to pause the excution
until the promise resolved and take value of resolved promise and assign it to myProm ( that's how await works)
*/
// async function promFunc2(){
//   // await will pause the excution till promise resolved then take value of resolved and assign it to myProm
//   let myProm = await new Promise((res,rej)=>{
//     setTimeout(function(){
//       res(77)
//     },5000)
//   })
//   // 77 after 5 sec not (Promise {<Pending>}) because of await
//   console.log("From Inside 2", myProm) // 77
//   return myProm
// }
// // will return (Promise {<Pending>}) because return will not pause or wait till promise resolved
// console.log(promFunc2())
// // will print the resolved value after 5 sec because we used then and wait till Promise to be resolved
// promFunc2().then(doubleSeven => console.log(doubleSeven))

// ---------async with fetch
// [1] without Async - Await
// let url = 'http://jsonplaceholder.typicode.com/users/7'
// fetch(url)
//   .then(function(response){
//     if(response.status === 200){
//       return response.json()
//     }else{
//       return Promise.reject(response.statusText)
//     }
//   }) 
//   .then(function(data){ 
//     console.log( data ); 
//   }) 
//   .catch(function(err){ 
//     console.log(err) 
//   }); 

// [2] with Async - Await
// let url = 'http://jsonplaceholder.typicode.com/users/7'
// async function asyncAwait(){
//   let response = await fetch(url);
//   let responseObj = await response.json()
//   console.log(responseObj)
//   return responseObj
// }

// console.log(asyncAwait()) // promise pending

// -----------finally-----------
// finally will always run regardless resolved , rejected or Error finally will always work
// let myPromise = new Promise((resolve , reject) => {
//   // resolve("Resolved!")
//   // reject("Rejected!")
//   throw Error ("Error from inside Promise")
// })
// myPromise
//   .then(console.log)
//   .catch((err)=>{
//     console.log(err)
//   })
//   .finally(_ => {
//     console.log("From Finally")
//   })

// -------then accept upto 2 arguments 1st callback func is for resolved and 2nd for rejected--------------

// let p1 = new Promise((resolve , reject)=>{
//   // resolve("Resolved")
//   reject("Rejected")
//   // throw Error("Error")
// })
// p1 
//   .then((result)=> {
//     console.log(`1st then 1st func : ${result}`)
//     // throw Error("Error from 1st then 1st func")
//     // return "Value from 1st then 1st func"
//   },
//   (result)=>{
//     console.log(`1st then 2nd func: ${result}`)
//     // throw Error("Error from 1st then 2nd func")
//     // return "Value from 1st then 2nd func"
//   })
//   .then((result)=>console.log(`2nd then : ${result}`))
//   .catch((err)=>console.log(`Catch: ${err}`))

  /* 
  2nd then will only show the value returned from 1st then not catching any Errors or rejects 
  2nd function in 1st then will catch any Errors or rejects 
  catch will catch Error from thens because then return Promise Object also
  */

// Promise.then() is also a promise
// let p1 = new Promise((resolve , reject)=>{
//   resolve("Resolved")
//   reject("Rejected")
//   throw Error("Error")
// })
// let p1Then = p1.then((result)=>result)
// p1Then.then((result)=>console.log(result)).catch((err)=>console.log(err))


//----------------------------------Object Oriented Programming-----------------------------

/* 
The idea behind object-oriented programming (OOP) is that you organize your code 
in classes/ objects (objects are based on classes).
Your data is stored in properties, your logic in methods. 
And properties and methods that work closely together live in the same class.
*/

// Procedual vs OOP

/* 
[1] Procedual Programming
- Progran divided into Function + Variables
- Overloading is not possible
- Hiding Data not possible
- Data is separated

[2] OOP
- Program divided into Objects + Methods
- Overloading is possible
- Hiding data possible
- Data is in one location
*/

/* 
defining Object
[1] Object Literal
[2] new Keyword
[3] Object.create()
[4] Object.assign()
*/

// [1] Object Literal
// let user = {
//   firstName : "Mohamed",
//   lastName : "Hussein",
//   adresses : {
//     egy : "Cairo",
//     usa : "California",
//     ksa : "Riyadh",
//     getMainAdress : function(){
//       return `Main Adress is ${this.egy}`
//     }
//   },
//   getFullName : function(){
//     return `Full names is ${this.firstName} ${this.lastName}`
//   }
// };
// console.log(user.firstName) //Dot Notaion
// console.log(user["lastName"]) //Bracet Notaion
// console.log(user.getFullName())
// console.log(user.adresses.egy)//Dot Notaion
// console.log(user["adresses"]["usa"])//Bracet Notaion
// console.log(user.adresses.getMainAdress())

// Arrow Function syntax but we can not use this here because arrow function does not hasv it's own this
// let user = {
//   firstName : "Mohamed",
//   lastName : "Hussein",
//   age : 33,
//   adresses : {
//     egy : "Cairo",
//     usa : "California",
//     ksa : "Riyadh",
//     getMainAdress : () =>`Main Adress is ${user.adresses.egy}`,
//   },
//   getFullName :() => `Full names is ${user.firstName} ${user.lastName}`,
//   getAgeinDays : () => `Age in Days is ${user.age * 356}`
// };
// console.log(user.firstName) //Dot Notaion
// console.log(user["lastName"]) //Bracet Notaion
// console.log(user.getFullName())
// console.log(user.adresses.egy)//Dot Notaion
// console.log(user["adresses"]["usa"])//Bracet Notaion
// console.log(user.adresses.getMainAdress())
// console.log(user.getAgeinDays())

// Dot Notaion vs Bracket Notation

// let myObj = {
//   "One" : 1,
//   "Two-" : 2,
//   3 : "Three",
//   4 : "Four",
//   "Five" : "by Variable"
// }
// let myVar = "Five"

// Dot Notation
// console.log(myObj."One") // Syntax Error
// console.log(myObj.Two-) // Syntax Error
// console.log(myObj.3) // Syntax Error
// console.log(myObj.4) // Syntax Error
// console.log(myObj.myVar) // undefined

// Bracket Notation
// console.log(myObj["One"])
// console.log(myObj["Two-"])
// console.log(myObj["3"])
// console.log(myObj["4"])
// console.log(myObj[myVar])

// [2] new Keyword
// let user = new Object()
// user.firstName = "Mohamed"
// user.lastName = "Hussein"
// user["age"] = 33
// user.getFullName = () => `Full Name is ${user.firstName} ${user.lastName}`
// console.log(user)
// console.log(user.getFullName())

// [3] Object.create()
// let mainObj = {
//   hasDicount : false,
//   showMsg : function (){
//     // but you have to use this if user.hasDicount you can not change value of property (hasDiscount) from otherObj
//     return `You ${this.hasDicount ? "" : "Don't "}Have Discount`
//   } 
// }
// console.log(mainObj.showMsg())

// let otherObj = Object.create(mainObj)
// console.log(otherObj) //{} properties and methods inside prototype
// otherObj.hasDicount = true
// console.log(otherObj.showMsg())

// let otherObj2 = Object.create(mainObj)
// otherObj.hasDicount = false
// console.log(otherObj.showMsg())


// [4] Object.assign()

// const src1 = {
//   prop1 : "Value 1",
//   prop2 : "Value 2",
//   method1 : function(){
//     return `Method 1`
//   }
// }

// const src2 = { 
//   prop3 : "Value 3",
//   prop4 : "Value 4",
//   method2 : function(){
//     return `Method 2`
//   }
// }

// const targetObj = {
//   prop5 : "Value 5"
// }

// Object.assign(targetObj, src1, src2, {prop6 : "value 6"})
// console.log(targetObj)

// const newObj = Object.assign({}, {prop7 : "Value 7"})
// console.log(newObj)

// Delete Operator (to delete property of object)

// const userName = {
//   name : "Soliman"
// }

// console.log(userName)
// console.log(userName.name)
// // you cannot delete object but you can delete properties
// // delete userName;
// delete userName.name;
// console.log(userName)
// console.log(userName.name)

// because of freeze you can not delete property
// const freezedObj = Object.freeze({age  : 33})
// console.log(freezedObj)
// console.log(freezedObj.age)
// delete freezedObj.age;
// console.log(freezedObj)
// console.log(freezedObj.age)

// you can not delete variable
// const userName = "Soliman"
// console.log(userName)
// delete userName;
// console.log(userName)

// because of configurable : false you can not delete property
// const emptyObj = {}
// Object.defineProperty(emptyObj, "a", {value : 1, configurable : false})
// console.log(emptyObj.a)
// delete emptyObj.a
// console.log(emptyObj.a)

// For ---- in Loop ( loop on Properties inside Object)

// const user = {
//   name : "Soliman",
//   Country : "Egypt",
//   age : 37
// }
// for (let prop in user){
//   console.log(prop)
// }
// let allData = ""
// for (let prop in user){
//   console.log(user[prop])
//   allData += user[prop]
// }
// console.log(allData)



// ---------------------Constructor---------------------

// this refer to created object
// function Phone(serial, color , price) {
//   this.serial = 1;
//   this.color = 2;
//   this.price = 3;
// }
//  called instance (new keyword will invoke the constructor)
// let phone1 = new Phone(123,"red",500)
// // values from constructor will override
// console.log(phone1) // 1 2 3

// function Phone(serial, color , price) {
//   this.serial = serial;
//   this.color = color;
//   this.price = price - 100;
// }
// let phone1 = new Phone(123,"red",500)
// console.log(phone1) // 123 red 500
// let phone2 = new Phone(324,"black",500)
// let phone3 = new Phone(564,"blue",500)
// let phone4 = new Phone(867,"silver",500)
// let phone5 = Phone(746,"Pink",500)
// console.log(phone2)
// console.log(phone3)
// console.log(phone4)
// let phone6 = {serial : 123}
// console.log(phone4 instanceof Phone) //true
// console.log(phone4.constructor === Phone) //true
// console.log(phone6 instanceof Phone) //false
// console.log(phone6.constructor === Phone) //false
// console.log(phone5) // undefined
// console.log(this.serial) // 746

// function User(fName,lName,age){
//   this.fName = fName;
//   this.lName = lName;
//   this.age = age;
//   this.country = "EGYPT"
//   this.fullName = _ => `Full Name: ${this.fName} ${this.lName}`
// }
/* 
Why this inside Arrow function inside constructor refer to created Object?
Instance Objects are powerful because they are derived from a function, 
they provide private scope when they are created, and expressions can be executed on instantiation.
But A JavaScript object literal does not, by nature, provide private scope.
*/

// let user1 = new User("Mohamed","Hussein",33)
// let user2 = new User("Osama","elzero",37)
// console.log(user1)
// console.log(user2)
// console.log(user2.fullName())

// function User(name,email,age,showEmail){
//   this.name = name;
//   // this.email= email;
//   this.age = age;
//   this.updateName = function(newName){
//     if(this.age > 18){
//       this.name = newName
//     }else{
//       console.log("You can not update the name")
//     }
//   }
//   this.showEmail = function(){
//     if(showEmail){
//       return `Email is ${this.email}`
//     }else{
//       return `Data is Private`
//     }
//   }
// }

// let user1 = new User("Soliman", "o@nn.sa", 37,false)
// console.log(user1)
// console.log(user1.showEmail())
// user1.updateName("Mohamed")
// console.log(user1)

// ------built-in Constructor

// let obj2 = new Object({b:2})
// let obj1 = new Object({a:1})

// let num1 = new Number(1)
// let num2 = new Number(2)

// let str1 = new String("Mohamed")
// let str2 = new String("Ahmed")

// // here under the hood you are using String Constructor let str3 = new String("Soliman")
// let str3 = "Soliman"

// -----------------protoType------------------
/* 
=> Steps of Built in Object constructor

* JavaScript has the built-in Object() function (constructor)
* Also, JavaScript provides an anonymous object that can be referenced via the prototype property of the Object() function
* The Object.prototype object has some useful properties and methods such as toString() and valueOf(). 
* The Object.prototype also has an important property called constructor that references the Object() function. 


=> Steps of Built in Person Constructor then instances 

* Behind the scenes, JavaScript creates a new function Person() and an anonymous object that can be referenced via the prototype property
* And the anonymous object (Person.prototype) has the constructor property that references the Person() function
* the JavaScript engine creates a new object named p1??(instance) and links the p1 object??to the Person.prototype object via the prototype linkage:

The __proto__ is pronounced as dunder proto. The __proto__ is an accessor property of the Object.prototype object. It??exposes the internal prototype linkage ( [[Prototype]]) of an object through which it is accessed.
However, it may be deprecated in favor of Object.getPrototypeOf() in the future. Therefore, you should never use the __proto__??in??your production code.

Another popular way to get the prototype linkage is when the Object.getPrototypeOf() method is not available is via the constructor property as follows


example of shadowing: 
If p1 (instance ) has Method and Person(constructor) has Method with same name

P1.greet() executes it immediately without looking it up in the prototype chain.

The greet() method of the p1 object shadows the greet() method of the prototype object which the p1 object references.

*/
// ----exp. tp understant Prototype----------------
// Constructor
// function Person(name,age){
//   this.name = name 
//   this.age = age
//   this.instFunc = function(){
//     console.log("instance Method p1")
//   }
// }

// Class
// class Person2 {
//   constructor(name,age){
//     this.name = name 
//     this.age = age
//     // Property of instance not Method
//     this.classInstFunc = function(){
//       console.log("instance p2")
//     }
//   }
//   // Property for instance 
//   classInstProp = "Property"
//   // Method for Instance
//   classInstFunc2 = () => {
//     console.log("static Method from Class")
//   }
//   // Static Method for Constructor
//   static classStatFunc = () => {
//     console.log("static Method from Class")
//   }
// }
// instances
// let p1 = new Person()
// let p2 = new Person2()


// console.log(Object.hasOwnProperty("prototype")) // true
// console.log(Person.hasOwnProperty("prototype")) //true
// console.log(p1.hasOwnProperty("prototype")) // false
// // you can add method to prototype of Object ( will be shown in prototype)
// Object.prototype.polluted = function(){
//   console.log("Polluted")
// }
// Object.prototype.polluted()
// // you can add Static Method to Object ( will be shown in constructor)
// Object.polluted2 = function(){
//   console.log("Polluted2")
// }
// Object.polluted2()
// console.log(Object.prototype)
// // you can add method to prototype of Person ( will be shown in prototype)
// Person.prototype.protoFunc = function () {
//   console.log("Prototype Method from Person")
// }
// Person.prototype.protoFunc()
// // you can add Static Method to Person ( will be shown in constructor) this is before ES6
// // after ES6 adding static method by static keyword inside class see Person2 exp.
// Person.statFunc = function(){
//   console.log("Static Method from Person")
// }
// Person.statFunc()
// p1.__proto__.constructor.statFunc()
// p1.constructor.statFunc()
// console.log(Person.prototype)
// p1.protoFunc() // will work because method added to prototype and availabe for every one contructor or instances
// // p1.statFunc() // Error because it is static method and only availabe for constructor
// p1.instFunc() // will work
// // Person.instFunc() // Error because it's method for instance not availabe in prototype

// // static method from class
// Person2.prototype.classProtoFunc = function () {
//   console.log("Prototype Method from Person2")
// }
// Person2.prototype.classProtoFunc()
// console.log(Person2.prototype)
// Person2.classStatFunc()
// p2.__proto__.constructor.classStatFunc()
// p2.constructor.classStatFunc()
// // p2.classStatFunc()// Error because it is static method and only availabe for constructor
// p2.classInstFunc() // will work
// // Person2.classInstFunc() // Error because it's method for instance not availabe in prototype

// every thing in js is Object and have at the end of protoType chain Object Prototype
// function is object and created by built-in Object constructor

// steps of contructor under the Hood
// function User(name){
//   /*
// [1] Create Empty Object
// [2] assign the New Object to this Context (this = {}) 
// [3] links the new object??to the User.prototype object via the prototype linkage
// */
//   this.name = name;
//   /* 
//   [4] return new Object
//   */
//   // you can throw Error by this if condition incase of new Object without new keyword 
//   // if(!(this instanceof User)){
//   //   throw new Error("no New KeyWord")
//   // }
//   // ES6 Version
//   if(!new.target){
//     throw new Error("no New KeyWord")
//   }
// }

// let user1 = new User("Mohamed")
// console.log(User.prototype)
// console.log(user1.__proto__)
// let user2 = User("Ahmed") // handmade Error from constructor
// console.log(user2)
// // Array is created by Array built-in constructor but Array constructor is created by Object 
// // constructor so prototype chain will be Array protoType => Object Prototype => null
// let myArr = [1,2,3,4]
// console.log(myArr.__proto__)


/* 
The new.target pseudo-property lets you detect whether a function or constructor 
was called using the new operator. In constructors and functions invoked using 
the new operator, new.target returns a reference to the constructor or function. 
In normal function calls, new.target is undefined.
In arrow functions, new.target is inherited from the surrounding scope.
*/
// function Constructor(name){
//   this.name = name;
//   console.log(new.target);
//   this.arrowFunc = ()=> console.log(new.target.name) ;
// }

// let instance = new Constructor("Mohamed") // Constructor
// // In arrow functions, new.target is inherited from the surrounding scope.
// instance.arrowFunc() // Constructor
// let instance2 = Constructor("Ahmed") // undefined

/* 
---------------------ProtoType chain---------------------
because Js is prototype-based not class-based language childObj is not taking a copy of properties
and methods os parentObj it is just have a link to parent's prototype using __proto__
*/
// let parentObj = {
//   prop1 : 123,
//   method1 : () => console.log("This is Method1 from parentObj")
// }
// let childObj = {}
// // prototype chain here is : 
// // childObj ---> parentObj ---> Object.prototype ---> null
// Object.setPrototypeOf(childObj, parentObj)
// console.log(childObj.prop1)
// childObj.method1()
// console.log(childObj.__proto__)
// // this is the Prove that childObj is not taking a copy of properties
// console.log(childObj) // {}
// // here we are not overriding the prop1 inside parentObj we are creating a new prop1 inside childObj
// childObj.prop1 = 777;
// console.log(parentObj.prop1)
// console.log(childObj.prop1)
// console.log(childObj) // {prop1: 777}

// using Constructor
// function ParentObj(){
//   this.prop1 = 123
//   this.method1 = () => console.log("This is Method1 from parentObj")
// }
// let childObj = new ParentObj()
// // childObj ---> parentObj ---> Object.prototype ---> null
// console.log(childObj.prop1)
// childObj.method1()
// console.log(childObj.__proto__)
// console.log(childObj)

// ----------------------Classes----------------------------

/* 
Js is prototype based language not class based language.
Classes are primarily syntactical sugar for prototype-based inheritance.

the difference between ES6 Class and old syntax :
[1] Hoisting
* old syntax is a function and you can create instance before constructor function 
because function is always hoisted
* ES6 class you should create instances after class decleration 
[2] forcing to use new keyword (will throw Error autmatically not handmade Error like old syntax)

*/

// Old Syntax
// let user1 = new User("Mohamed")
// let user2 = new User("Ahmed")

// function User(name,email){
//   this.name = name;
//   this.email = email;
//   this.sayHello = _ => `Hello ${this.name}`;
// }

// console.log(user1)
// console.log(user2)

// ES6 class
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.sayHello = _ => `Hello ${this.name}`;
//   }
// }

// let user1 = new User("Mohamed")
// let user2 = new User("Ahmed")

// console.log(user1)
// console.log(user2)

// --------------Static Properties and Methods---------------
// Static properties only for consructor not for instances

// class User {
//   // Static Properties
//   static counter = 0;
//   // constructor
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     // we used User not this because this here refer to created instances not class User
//     User.counter++;
//   }
//   // Methods for instances
//   sayHello = () => `Hello ${this.name}`;
//   showEmail = () => `Email is ${this.email}`
  
//   // Static Method (this here refer to class User static counter even it is arrow function)
//   static countObj = () => `${this.counter} Objects Created`
// }

// let user1 = new User("Mohamed","Email_1")
// let user2 = new User("Ahmed","Email_2")
// // will throw Error autmatically not handmade Error like old syntax
// // let user3 = User("Soliman","Email_3") 

// console.log(user1)
// console.log(user1.sayHello())
// console.log(user2)
// console.log(user2.showEmail())

// console.log(User.countObj())


// to use Static with old sytnax of constructor but you can use Object.defineProperty or directly add it by dot notation
// function User(name) {
//   this.name = name;
//   // Instance Method
//   this.innerInfo = () => console.log("Inner Method");
// }
// // Prototype Method
// User.prototype.outerInfo = () => console.log("Outer Method");
// // Static Method using defineProperty
// Object.defineProperty(User, "staticInfo", {
//   value : () => console.log("Static Method")
// })
// // Static Method using dot notation
// User.staticInfo2 = () => console.log("Static Method 2")
// let user1 = new User("Soliman")
// user1.innerInfo()
// user1.outerInfo()
// User.prototype.outerInfo()
// User.staticInfo()
// console.log(User.prototype)
// -----------static from another class ----------
// class Triple {
//   static customName = 'Tripler';
//   static description = 'I triple any number you provide';
//   static calculate(n = 1) {
//     return n * 3;
//   }
// }

// class SquaredTriple extends Triple {
//   static longDescription;
//   static description = 'I square the triple of any number you provide';
//   static calculate(n) {
//     // return Triple.calculate(n) * Triple.calculate(n); // super.calculate like Triple.calculate
//     return super.calculate(n) * super.calculate(n);
//   }
// }

// console.log(Triple.description);            // 'I triple any number you provide'
// console.log(Triple.calculate());            // 3
// console.log(Triple.calculate(6));           // 18

// const tp = new Triple();

// console.log(SquaredTriple.calculate(3));    // 81 (not affected by parent's instantiation)
// console.log(SquaredTriple.description);     // 'I square the triple of any number you provide'
// console.log(SquaredTriple.longDescription); // undefined
// console.log(SquaredTriple.customName);      // 'Tripler'

// This throws because calculate() is a static member, not an instance member.
// console.log(tp.calculate());                // 'tp.calculate is not a function'
// --------------Getter and Setter----------------
/* 
Get and Set in Js is only for simple syntax
in other languages like PHP there is an option for private prperties accessable only by get and set
*/

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.sayHello = _ => `Hello ${this.name}`;
//   }
//   showInfo(){
//     return `name : ${this.name}, Email: ${this.email}`
//   }
//   get showInfoGetter(){
//     return `name : ${this.name}, Email: ${this.email}`
//   }
//   changeName(newName){
//     this.name = newName;
//   }
//   set changeNameSetter(newName){
//     this.name = newName;
//   }
// }

// let user1 = new User("Mohamed","Email-1")
// let user2 = new User("Ahmed","Email-2")
// // method
// console.log(user1.showInfo())
// // computed property (from getter Method)
// console.log(user1.showInfoGetter)
// // difference between getter method and regular method only simple syntax you have been changed
// // the Method to computed property and you do not need ()
// user1.changeName("Soliman")
// console.log(user1.name) // soliman
// user1.changeNameSetter = "Hussein"
// console.log(user1.name) // Hussein


// ----------------Inheritance--------------

// ---------difference between class and old syntax in inheritance---------------

// [1] inheritance in old Syntax
/* 
Moreover, JavaScript takes advantage of this prototype chain to create Inheritance. 
To make the Admin class inherit from the User class, first we define the Admin constructor, 
making sure to call the User's constructor with its this context pointing to Admin???s. 
This is equivalent to calling super().
Then, using Object.create(), we pass in User???s prototype to return a new object with
its __proto__ property assigned to it, pointing the returned object to User???s prototype. 
For clarity, we also point Admin???s prototype constructor to itself 
because JavaScript does not do this automatically. 
Finally, we can define the protoFunc() method on the prototype.
note : if we use setPrototypeOf we do not need to point Admin???s prototype constructor to itself 
note : but performance in Object.create() is better than setPrototypeOf
*/
// function User(name,email){
//   this.name = name;
//   this.email = email;
//   this.showDetails = () => `Name is ${name} and email is ${email}`
// }
// User.prototype.protoFunc = () => "Proto Function from User"

// function Admin(name,email,id){
//   User.call(this,name,email) // like super
//   this.id = id
//   this.showDetails = () => `Name is ${name} and email is ${email} and id is ${id}`
// }
// // Object.setPrototypeOf(Admin.prototype, User.prototype) // like extends

// Admin.prototype = Object.create(User.prototype) 
// Admin.prototype.constructor = Admin

// Admin.prototype.protoFunc2 = () => "Proto Function from Admin"
// console.log(Admin.prototype)
// let Admin1 = new User("Soliman","email")
// let Admin2 = new Admin("Soliman","email",321)
// console.log(Admin1.showDetails())
// console.log(Admin2.showDetails())
// console.log(User.prototype.protoFunc())
// console.log(Admin.prototype.protoFunc())
// console.log(Admin1.protoFunc())
// console.log(Admin2.protoFunc()) 
// console.log(Admin2.protoFunc2())

// [2] inheritance in new syntax ( class )
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     // property of instance not added to prototype
//     this.showDetails = () => `Name is ${name} and email is ${email}`;
//   }
//   // we are using Method Shorthand and add this method to prototype
//   instMethod(){return "Instance Method"} 
//   // will be added as property to prototype not Method 
//   // because we have to use a variable with it no Method shorthand for arrow function
//   arrowInstMethod = () => "Arrow Intance Method"
//   // will be added to constructor
//   static staticFunc = () => "Static Method from User"
// }
// User.prototype.protoFunc = () => "Proto Method from USer"

// class Admin extends User {
//   constructor(name, email, id) {
//     //to invoke the constructor of User
//     super(name, email); 
//     this.id = id;
//     this.showDetails = () => `Name is ${name} and email is ${email} and id is ${id}`;
//   }
// }

// let Admin1 = new User("Soliman","email")
// let Admin2 = new Admin("Soliman","email",321)
// console.log(Admin1.showDetails())
// console.log(Admin2.showDetails())
// console.log(Admin.staticFunc())
// console.log(Admin2.protoFunc())
// console.log(Admin.prototype)
// console.log(Admin2.instMethod())
// console.log(User.prototype)

// --------Override in inheritance-------
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   sayHello = () => `Hello ${this.name}`;
//   showEmail = () => `Email is ${this.email}`
//   writeMsg = () => `Msg from parent Class`
// }

// class Admin extends User {
//   constructor(name,email){
//     super(name,email);
//   }
//   adminMsg = () => `You Are Admin`
//   // will override method from parent class
//   writeMsg = () => `Msg from Child Class`
// }

// let Admin1 = new Admin("Mohamed","Email-1")
// console.log(Admin1.sayHello())
// console.log(Admin1.adminMsg())
// console.log(Admin1.writeMsg())

// ------How to copy prototype of one constructor to another
// function Me(){
// this.name =  this.name || "Dejan";
// }
// function You(){
// this.name = this.name || "Ivan";
// }


// Me.prototype = new You();
// let somebody = new Me();
// console.log(somebody.name); // Ivan 

// class Me2 {
//   constructor() {
//     this.name = this.name || "Dejan";
//   }
// }
// class You2 {
//   constructor() {
//     this.name = this.name || "Ivan";
//   }
// }
// // In ES6, the .prototype property of classes is not writable and not configurable
// Me2.prototype = new You2();
// let somebody2 = new Me2();
// console.log(somebody2.name); // Dejan


/* 
The Advantage of inheritance in classes is you can access prototypes 
from parent and also you can override any Property or Method of parent
*/

/* 
JS engine wll search for id property inside instance(which take properties from constructor)
if did not find it inside instance will search at prototype Chain 
so in next Exp. if we remove this.id from constructor Old the outputs will be undefined and 7
*/
// function Old(name){
//   this.name = name;
//   // id here is a property of created instance
//   this.id = 6;
// }
// let user1 = new Old("Mohamed")
// console.log(user1.id) // 6 // undefined (incase of remving this.id = 6; from Old)
// // id here is prototype added to constructor
// Old.prototype.id = 7;
// console.log(Old.prototype)
// console.log(user1.id) // 6 // 7 (incase of remving this.id = 6; from Old)

// class Old {
//   constructor(name , id = 6 ) {
//     this.name = name;
//     this.id = id;
//   }
// }
// class New extends Old {
//   constructor(name,id) {
//     super(name,id)
//   // override id of parent
//     this.id = 7;
//   }
// }
// let user1 = new Old("Mohamed")
// let user2 = new New("Soliman")
// console.log(user1.id) // 6
// console.log(user2.id) // 7



// ----------------Meta Data and Descriptor----------------

// let obj = {
//   a : 1,
//   b : 2
// }
// Object.defineProperty(obj, "c" , {
//   value : 3,
//   writable : false,
//   enumerable : false,
//   configurable: false
// })

// obj.c = 500;
// console.log(obj.c) // 3 not 500 because writable : false

// for(let prop in obj){
//   console.log(prop , obj[prop])
// } // a 1 - b 2 / c 3 will not be shown because of enumerable : false
// console.log(Object.keys(obj)) // [a,b] return only iterable properties
// console.log(Object.getOwnPropertyNames(obj)) // [a,b,c] because enumerable : false has no effect on getOwnPropertyNames

// console.log(delete obj.c) // false means can not delete property c becasue of configurable:false

// // Object.defineProperty(obj, "c" , {
// //   writable:true
// // }) // Error because of configurable:false you can not redefine property
// // obj.c = 600;
// // console.log(obj.c) 
// // default of porperty's attributes(inside Object) are true
// console.log(Object.getOwnPropertyDescriptor(obj, "a"))
// // default of porperty's attributes(created by defineProperty) are false
// console.log(Object.getOwnPropertyDescriptor(obj, "c"))

// Object.defineProperties(obj, {
//   d : {
//     value : 4,
//     writable : false,
//     enumerable : false,
//     configurable: false
//   },
//   e : {
//     value : 5,
//     writable : false,
//     enumerable : true,
//     configurable: false
//   }
// })

// console.log(obj)
// console.log(Object.keys(obj))
// console.log(Object.getOwnPropertyNames(obj))

// ---------------AJAX-------------------
// Asynchronous JavaScript And XML (Extensible Markup Language)
/* 
XML is one of the most widely-used formats for sharing structured information today: 
between programs, between people, between computers and people, both locally and across networks.
the syntax rules of XML are strict: XML tools will not process files that contain errors, 
but instead will give you error messages so that you fix them

XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data 
from a URL without having to do a full page refresh. 
This enables a Web page to update just part of a page without disrupting 
what the user is doing.
* Update a web page without reloading the page
* Request data from a server - after the page has loaded
* Receive data from a server?? - after the page has loaded
* Send data to a server - in the background

Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.
*/

/* 
The FormData interface provides a way to easily construct a set of key/value pairs 
representing form fields and their values, which can then be easily sent 
using the fetch() or XMLHttpRequest.send() method. It uses the same format 
a form would use if the encoding type were set to "multipart/form-data".
*/

//Run the script after loading DOM       
// let url = "https://jsonplaceholder.typicode.com/users";       
// let xhr = new XMLHttpRequest();       
// xhr.open("GET", url, true); // true is default and means Async - false means Sync       
// // xhr.open("POST", url, true);       
// let fd = new FormData();       
// fd.append("firstName", "Jesse");       
// fd.append("lastName", "Custer");        
// xhr.onreadystatechange = function(ev) {         
//   //2 - request sent, 3 - something back, 4 - full response         
//   console.log(xhr.readyState);         
//   if (xhr.readyState === 4) {           
//     switch (xhr.status) {             
//       case 200:             
//       case 304:               
//       console.log("OK or Not Modified (cached)", xhr.status);               
//       outputUsers(xhr.responseText); //responseXML               
//       break;             
//       case 201:               
//       console.log("Created", xhr.status);               
//       let main = document.querySelector("#xml");               
//       main.textContent = xhr.responseText;               
//       break;             
//       case 403:             
//       case 401:               
//       console.log("Not Authorized or Forbidden", xhr.status);               
//       break;             
//       case 404:               
//       console.log("Not Found", xhr.status);               
//       break;             
//       case 500:               
//       console.log("Server Side Error", xhr.status);               
//       break;             
//       default:               
//       console.log("Some other code: ", xhr.status, xhr.status);           
//     }         
//   }       
// }; 
// // another way to use onload instead of onreadystatechange 
// // xhr.addEventListener("load", function(){
// //   if (xhr.readyState === 4){
// //     console.log("OK or Not Modified (cached)", xhr.status);               
// //     outputUsers(xhr.responseText); //responseXML 
// //   }
// // })      
// xhr.onerror = function(err) {         
//   console.warn(err);       
// };       
// xhr.send(null); // with GET        
// // xhr.send(fd); // With POST
// function outputUsers(str) {         
//   let data = JSON.parse(str);         
//   let main = document.querySelector("#xml");         
//   data.forEach(item => {           
//     let p = document.createElement("p");           
//     p.textContent = item.id + " " + item.name;           
//     main.appendChild(p);         
//   });       
// }

/* ------onload vs onreadystatechange-------------------
A readystatechange occurs several times in the life of a request as it progresses to 
different phases, but a load event only occurs when the request has successfully completed.
If you're not interested in detecting intermediate states or errors, then onload might be a good choice.

* onreadystatechange needs : if (xhr.readyState === 4) & if (xhr.status === 200)
* onload needs only : if (xhr.readyState === 4)
*/

// var uri = 'http://jsonplaceholder.typicode.com/users/s7'; 
//none of these examples do proper error handling of 
//nasty http status codes or 
//invalid data types - text, xml, json, etc 
//********************************************************* 

// OLD Version AJAX 
// var xhr = new XMLHttpRequest(); 
// xhr.open('GET', uri, true); 
// xhr.addEventListener('load', function(ev){
//   if(xhr.status === 200 && xhr.readyState === 4){
//     //handle the response from the server 
//     var data = xhr.responseText; //or responseXML 
//     var json = JSON.parse(data); //JSON object 
//     console.log('XMLHttpRequest: ', json)
//   }else if(xhr.status === 404){
//     throw new Error(uri)
//   }
// }); 
// xhr.addEventListener('error', function(err){ 
//   //error handling network request but not for HTTP errors like 404
// }) 
// window.addEventListener('error', function(err){ 
//   //error handling for HTTP errors you should throw an Error by yourself if(xhr.status === 404)
//   console.log(err.message)
//   // to stop error to be shown (uncaught Error)
//   err.preventDefault()
// }) 
// xhr.send(null); 
  //********************************************************* 
  
//NEW Version AJAX 
// fetch(uri) 
//   .then(function(response){
//     if(response.status === 200){
//       return response.json()
//     }else{
//       return Promise.reject(response.statusText)
//     }
//   }) 
//   .then(function(data){ 
//     console.log( data ); 
//   }) 
//   .catch(function(err){ 
//     //error handling network request err = response because of return Promise.reject(response)
//     console.log(err) 
//   }); 
    //********************************************************* 
    
//REALLY OLD Version AJAX 
//IE 5.5 ActiveX object or XMLHttpRequest object 
// var request = false; 
// if (window.XMLHttpRequest) { 
//     // Mozilla, Safari,... 
//     request = new XMLHttpRequest(); 
//   } else if (window.ActiveXObject) { 
//     // IE 
//     try { 
//       request = new ActiveXObject("Msxml2.XMLHTTP"); 
//     } catch (e) { 
//       try { 
//         request = new ActiveXObject("Microsoft.XMLHTTP"); 
//       } catch (e) {} 
//     } 
//   } if(request){ 
//     request.open('GET', uri, true); 
//     request.addEventListener('load', function(ev){ 
//       if(request.status === 200 && request.readyState === 4 ){
//         //handle the response from the server 
//         var data = request.responseText; 
//         //or responseXML 
//         var json = JSON.parse(data); 
//         //JSON object 
//         console.log('XMLHttpRequest: ', json);
//       }else if(request.status === 404){
//         throw new Error(uri)
//       }
//     }); 
//     request.addEventListener('error', function(err){ 
//       //error handling request
//     }) 
//     window.addEventListener('error', function(err){ 
//       //error handling for HTTP errors you should throw an Error by yourself if(xhr.status === 404)
//       console.log(err.message)
//       // to stop error to be shown (uncaught Error)
//       err.preventDefault()
//     })
//     request.send(null); 
  // }
// ----------------Error Handling-----------------
// with onerror you can catch the error but you can not use preventDefault() user return true instead
// window.onerror = function (msg, url , col , err){
//   console.log(msg, url , col , err)
//   return true
// }
// soliman

// with addEventListener you can catch the error and you can use preventDefault()
// window.addEventListener("error" , function(ev){
//   console.log(ev)
//   ev.preventDefault()
// })
// soliman

// A 404 status will not trigger xhr.onerror() because, 
// technically it's not an error; the 404 itself is a valid response.

// ---------Error in fetch---------
/* The fetch() function will automatically throw an error for network errors 
but not for HTTP errors such as 4xx or 5xx responses. */

// fetch('http://jsonplaceholder.typicode.com/users/7')
//   .then(async response => {
//     const isJson = response.headers.get('content-type')?.includes('application/json');
//     const data = isJson ? await response.json() : null;
//     // check for error response
//     if (!response.ok) {
//       // get error message from body or default to response status
//       const error = (data && data.message) || response.status;
//       return Promise.reject(error);
//     }
//   })
//   .catch(error => {
//     console.log('There was an error!', error);
//   });

// ? and (&&) explanation of last exp.
// let arr = [1,2,3,4]
// let check = arr?.includes(5)
// console.log(check)
/* 
the operator returns the value of the first falsy operand encountered when evaluating 
from left to right, or the value of the last operand if they are all truth
*/
// let x = 1;
// let y = 2; // falsy value
// let xy = ( x && y );
// console.log(xy)
// ------------------------Try Catch--------------------------

// Programme will crash 
// throw "ERROR" 
// console.log("After ERROR")

// Programm will not crash and continue normally
// try{
//   throw "ERROR"
//   console.log("After Error Directly") // will not be excuted
// }catch(err){
//   console.log(err)
// }finally{
//   console.log("Will Work regardless there is Error or not") // like outside
// }
// console.log("After ERROR of try catch")

// -------------------Function curring----------------------
/* 
Why Function is First-Class Object ? 
* A function is an instance of the Object type
* A function can have properties and has a link back to its constructor method
* You can store the function in a variable
* You can pass the function as a parameter to another function
* You can return the function from a function
*/

// function sayHello(msg){
//   return function (name){
//     console.log(msg, name)
//   }
// }
// let english = sayHello("Hi")
// let espanol = sayHello("Hola")
// let svenska = sayHello("Hej")
// let detusch = sayHello("Hello")
// english("Tom")
// espanol("Matheio")
// svenska("Ikea")
// detusch("Thomas")

// different between function curring and callback hell
// function curring => function return another function
// callback hell => passing function as parameter to another function

// -----------------Time and Date in JavaScript------------------

// let d = new Date() // constructor accept as parameters (TimeStamp(miliseconds) | Date String | numeric Values)
// console.log(d)
// let s = Date.now() // static method
// console.log(s) // miliseconds after default start date (Unix Epoch) Jan 1 00:00:00.0000 1970
// [1] TimeStamp 
// let d1 = new Date(1500000000000) // Date after 1500000000000 miliseconds start point Jan 1 00:00:00.0000 1970
// console.log(d1)
// [2] Date String
// let d2 = new Date("20 July 2012")
// console.log(d2)
// [3] Numeric Value :  year , Month , day , hours , minutes , seconds ,miliseconds
// let d3 = new Date(2017,0,2,13,30,40)
// console.log(d3)
// let d4 = d3-d2 // you can get difference by using - and result will be in miliseconds
// console.log(d4)
// you can use Date.parse to change Date to miliseconds
// console.log(Date.parse("Sep 1 1988"))
// using T and Z => T is space between date and Time | Z is time zone with Z will give you the time in your Time zone 
// console.log(new Date("1982-10-25T06:10:00Z"))

// // to change in date
// d.setFullYear(2020)
// d.setMonth(0) // will give you Jan because Month in 0 index
// d.setDate(12) // 0 will give you day 30 of last month | -1 negative value will give you day 29 of last month  
// d.setHours(9)
// d.setMinutes(20)
// d.setSeconds(30)
// d.setMilliseconds(50)
// you can also add more parameters for Exp. d.setMonth(0,12)
// d.setMonth(0,12) // 0 => Jan & 12 => day 12
// console.log(d)

// let getFullYear = d.getFullYear()
// let getMonth = d.getMonth() // 0 index => jan is 0 
// let getDate = d.getDate() // day of the month
// let getHours = d.getHours()
// let getMinutes = d.getMinutes()
// let getSeconds = d.getSeconds()
// let getMilliseconds = d.getMilliseconds()
// // not availabe in set methods
// let getDay = d.getDay() // give you day of the week 0 index =>  0 sunday => 1 monday => .....
// console.log(getDay)

// let d4 = new Date()
// console.log(d4.toDateString())
// console.log(d4.toTimeString())
// console.log(d4.toISOString()) // another format
// console.log(d4.toJSON()) // another format
// console.log(d4.toLocaleString()) // another format
// console.log(d4.toLocaleString("en-kw")) // another format
// console.log(d4.toUTCString()) // another format

// add d days to a date
// function myFunction(a,b){
//   return a.setDate(b + a.getDate())
// }

// console.log(myFunction(new Date(Date.UTC(2000,01,01)), 31)) //952041600000
// console.log(myFunction(new Date(Date.UTC(2000,01,01)), 10)) //950227200000
// console.log(myFunction(new Date(Date.UTC(2000,02,28,)), 2)) //954374400000


// -----------------null vs undefined----------------
// null is nothing value and you can add it to variable for exp. if you don't know yet what to assign to this variable
// but undefined is nothing added to variable or function does not return something or when you try to access property not exist in specific object
// null means this property exist but nothing in it 
// undefined means this property not exist

// console.log( null + 1) // 1
// console.log( undefined + 1) // NaN

// console.log(typeof null) //Object
// console.log(typeof undefined) // undefined


// -------------------debugging in Js--------------------
/* 
console.count => count how many time console.count method called for specific argument (var1 or var2)

console.time & console.timeEnd => calculate time in miliseconds start from  console.time to console.timeEnd
console.time("label") you can pass label for each timer to pass it again to console.timeEnd to end it

console.group & console.groupEnd to create a group will be shown in console and you can use also console.group("label1")

DEBUG_MODE if true will open source at line which have debugger; automatically 
and you can excute file line by line or you can mark specific line to pasue the code at this line
in source tab at bottom there is {} called pretter (it is like formatter) to organize code 
then you can add break points for debug easliy
*/
// const DEBUG_MODE = true;
// if(DEBUG_MODE){
//   debugger;
// }

// console.time("label1")
// console.group("label1")
// let var1 = "Mohamed"
// let var2 = "Soliman"
// function logCount(param){console.count(param)}
// logCount(var1) // Mohamed : 1
// logCount(var2) // Soliman : 1
// console.count(var1) // Mohamed : 2
// console.groupEnd("label1")
// console.timeEnd("label1")
// console.time("label2")
// console.group("label2")
// let arr = []
// for(let i = 0; i <= 100; i++){
//   arr.push(i)
// }
// console.log(arr)
// console.groupEnd("label2")
// console.timeEnd("label2")

// --------------NaN-------------
/* 
isNaN() try first to convert it to number by Number() or + 
if converted value is not Number return true
if if converted value is Number return false
*/
// console.log(isNaN(true)) // false => +ture 1
// console.log(isNaN(false)) // false => +false 0
// console.log(isNaN(null)) // false => +null 0
// console.log(isNaN(1)) // false => +1 1
// console.log(isNaN("1")) // false => +"1" 1
// console.log(isNaN("")) // false => +"" 0
// console.log(isNaN(" ")) // false => +"  " 0
// console.log(isNaN(new Date())) // false => timeStamp
// console.log(isNaN(new Date("31 Jan, 2022"))) // true
// console.log(isNaN(undefined)) // true => +undefined NaN
// console.log(isNaN("Soliman")) // true => +"Soliman" NaN
// console.log("" == false)  // true
// console.log("" == 0)  // true
// console.log(" " == 0)  // true
// console.log(" " == false)  // true
// console.log(0 == false) // true
// console.log(" " == "") // false

// ---------------Arguments keyWord---------------
// function args(){
//   console.log(arguments)
// }
// args(1,2,3,4,5)

// --------------delete keyWord-----------
// delete keyWord only for properties of object
// let obj = {
//   prop1 : 1,
//   prop2 : 2,
//   prop3 : 3
// }
// obj.prop2 = undefined;
// delete obj.prop3;
// console.log(obj.prop1) // 1
// console.log(obj.prop2) // undefined but still exist because you change it value to undefined by yourself
// console.log(obj.prop3) // undefined because it's not exist because we deleted it
// console.log(obj.prop4) //undefined because it's not exist
// for(let p in obj){
//   console.log(p)
// }

// -------------------Void------------

// [1] void with IIFE ( void force function to be treated as expression instead of decleration)

// function notIife(){
//   console.log("Excuted")
// }(); // Error because this is function decleration not expression

// void function iife(){
//   console.log("Excuted")
// }();

// [2] void with URL
/* 
When a browser follows a javascript: URI, it evaluates the code in the URI 
and then replaces the contents of the page with the returned value, 
unless the returned value is undefined. The void operator can be used to return undefined. 
*/

// [3] non Leaking Arrow Function
// when you want arrow function that shouldn't return any Value
// function doSomething(){
//   // return null
//   return true
// }
// let arrowFunc = () => doSomething() || undefined
// console.log(arrowFunc()) // will return undefined only if doSomething() return falsy value 
// let arrowFuncVoid = () => void doSomething()
// console.log(arrowFuncVoid()) // will return undefined regardless doSomething() return falsy value or true value

// [4] with <a> in HTML
// <a href="javascript:void(0)"/>  like preventDefault

// [5] in older Browsers
/* 
undefined is actually a global property - it's not a keyword. 
So, undefined can be changed, where as void is an operator, 
which cannot be overridden in JavaScript and always returns the value undefined.
so it's safer in older Browsers to use void(O) instead of undefined
*/
// console.log(undefined); // undefined
// var undefined = 1;
// console.log(undefined); // 1

// [6] void evaluate expression and this is function decleration
// void function test(){
//   console.log("test is defined")
// }
// // test(); // Error Test is not defined
// console.log(void function test(){
//   console.log("test is defined")
// }) // undefined

// and do not forget to use ( when evaluate expression like this exp.)
// console.log(void 2 === "2") // false because void 2 = undefined so here like undefined === "2"
// console.log(void (2 === "2")) // undefined

// -----------------------Private Variable--------------------------

// let obj1 = {
//   _prop1 : "Mohamed",
//   prop2 : "Soliman",
//   get prop1() {
//     return this._prop1
//   },
//   set prop1(_val){
//     this._prop1 = _val
//   }
// }
// console.log(obj1._prop1) // Mohamed
// console.log(obj1.prop1) // Mohamed
// Object.defineProperty(obj1, "_prop1" , {
//   writable : false
// } ) //here we can stop changing value of _prop1 by writable : false
// obj1._prop1 = "Ahmed" // here we are changing the old property _prop1
// console.log(obj1._prop1) // Ahmed
// for (let p in obj1){
//   console.log(obj1[p])
// } // Ahmed - Soliman - Ahmed
// console.log("#############")

// let obj2 = (function(){
//   _prop1 = "Mohamed"
//   return {
//     prop2 : "Soliman",
//     get prop1() {
//       return _prop1
//     },
//     set prop1(_val){
//       _prop1 = _val
//     }
//   }
// })()

// console.log(obj2._prop1) // undefined
// console.log(obj2.prop1) // Mohamed
// Object.defineProperty(obj2, "_prop1" , {
//   value : "from defineProperty",
//   // writable : false,
//   enumerable : true
// } ) // here we are creating a new Property
// obj2._prop1 = "Ahmed" // here we are creating a new property called _prop1
// console.log(obj2._prop1) // Ahmed
// for (let p in obj2){
//   console.log(obj2[p])
// } // soliman - Mohamed - Ahmed

// -----------------in Operator-----------------
// in operator used to check if a property exist in object or index in array
// even if property's enumerable : false in operator will catch it also
// let obj1 = {
//   prop1 : 1,
//   prop2 : 2,
//   prop3: undefined,
//   prop4 : null
// }
// delete obj1.prop2
// if("prop1" in obj1){
//   console.log("Prop1 Exist")
// }else{
//   console.log("Prop1 not Exist")
// }
// if("prop2" in obj1){
//   console.log("Prop2 Exist")
// }else{
//   console.log("Prop2 not Exist")
// }
// if("prop3" in obj1){
//   console.log("Prop3 Exist")
// }else{
//   console.log("Prop3 not Exist")
// }
// if("prop4" in obj1){
//   console.log("Prop4 Exist")
// }else{
//   console.log("Prop4 not Exist")
// }
// // here we are creating new property inside obj2 not overriding prop4 from prototype chain that's why descriptors default values all false
// // let obj2 = Object.create(obj1, {prop4 : {value : 5}})
// // console.log(obj1.prop4)
// // console.log(obj2.prop4)
// // here we are creating new property inside obj2 and descriptors default values all false 
// let obj2 = Object.create(obj1, {prop5 : {value : 5}}) 
// console.log(obj2.__proto__)
// if("prop1" in obj2){
//   console.log("Prop1 Exist from Prototype Chain")
// }else{
//   console.log("Prop1 not Exist")
// }
// if("prop2" in obj2){
//   console.log("Prop2 Exist from Prototype Chain")
// }else{
//   console.log("Prop2 not Exist")
// }
// if("prop3" in obj2){
//   console.log("Prop3 Exist from Prototype Chain")
// }else{
//   console.log("Prop3 not Exist")
// }
// if("prop4" in obj2){
//   console.log("Prop4 Exist from Prototype Chain")
// }else{
//   console.log("Prop4 not Exist")
// }
// if("prop4" in obj2){
//   console.log("Prop5 Exist")
// }else{
//   console.log("Prop5 not Exist")
// }

// let arr = ["a","b","c"]
// if( 0 in arr){
//   console.log("Array has index no 0")
// } else{
//   console.log("Array has no index no 0")
// }
// if( 1 in arr){
//   console.log("Array has index no 1")
// } else{
//   console.log("Array has no index no 1")
// }
// if( 2 in arr){
//   console.log("Array has index no 2")
// } else{
//   console.log("Array has no index no 2")
// }
// if( 3 in arr){
//   console.log("Array has index no 3")
// } else{
//   console.log("Array has no index no 3")
// }

// even if property's enumerable : false in operator will catch it also
// let obj3 = Object.create({},{prop :{value : 1}})
// for (let p in obj3){
//   console.log(p)
// } //nothing
// console.log("prop" in obj3) // true

// ---------------casting---------------
// let str = "12";
// // using unary plus operator to cast string to number
// let num = +str
// // using double bang !! to cast number or string to boolean 
// // (one !) will cast to boolean but will convert true to false and vice versus
// let boolStr = !!str
// let boolNum = !!num
// let convertedBoolNum = !num
// console.log(boolStr) //true
// console.log(boolNum) //true
// console.log(convertedBoolNum) //false

// -----------combine namespaces and IIFE and Private Variable or functions------------

// let nameSpace = {
//   fName : "Mohamed",
//   lName : "Hussein",
//   fullName : function(){
//     console.log(`Full Name is : ${this.fName} ${this.lName}`)
//   },
//   lastName : function(){
//     console.log(`Last Name Is ${this.lName}`)
//   }
// }
// nameSpace.fullName()
// nameSpace.lastName()

// let nameSpacePrivate = (function(){
//   let privateVar = "Hidden Variable"
//   let privateFunc = function(){
//     console.log("Private Function is Running")
//   }
//   return {
//     fName : "Mohamed",
//     lName : "Hussein",
//     pv : privateVar,
//     pf : privateFunc 
//   }
// })();
// console.log(nameSpacePrivate.pv)
// nameSpacePrivate.pf()
// console.log(nameSpacePrivate.privateVar) // undefined
// nameSpacePrivate.privateFunc() // Error

//--------------------------Inheritance vs Composition----------------------

// Inheritance vs Composition

//INHERITANCE
//  Character > Human > Sam
//  Character > Robot > x73
//  Character > Cyborg > Dolph

// const Character = {
//   talk: function(...msg){ 
//       console.log( msg.join(' ') ) 
//   }
// }

// const Human = Object.create(Character, {
//   speed: {value:3},
//   name: {value:'Hector'}
// });
// Human.walk= function(){ 
//   this.talk(this.name, 'walking') 
// };
// Human.eat= function(){ 
//   this.talk(this.name, 'eating') 
// };

// const Robot = Object.create(Character, {
//   speed: {value:8},
//   id: {value:'THX1138'}
// });
// Robot.drive= function (){ 
//   this.talk(this.id, '\u26A1', 'driving')
// };
// Robot.wifi= function (){ 
//   this.talk(this.id, '\u26A1', 'connecting')
// };

// const sam = Object.create(Human, {name:{value: 'Samuel'}});
// sam.walk();
// sam.talk('Hello from Samuel.');

// const x73 = Object.create(Robot, {id:{value: 'x73'}});
// x73.drive();
// x73.wifi();
// // ????What about a Cybernetically enhanced human with wifi?



// //COMPOSITION
// const talker = (state)=>({ 
//   talk: (...msg)=> console.log( msg.join(' '))
// });
// const walker = (state) => ({
//   walk: ()=> {
//       let nm = state.name || state.id;
//       console.log(nm, 'walking');
//   }
// });
// const eater = (state) => ({
//   eat: ()=> {
//       let nm = state.name || state.id;
//       console.log(nm, 'eating');
//   }
// });
// const driver = (state) => ({
//   drive: ()=>{
//       let nm = state.name || state.id;
//       console.log(nm, '\u26A1', 'driving');
//   }
// });
// const wifier = (state) => ({
//   wifi: ()=>{
//       let nm = state.name || state.id;
//       console.log(nm, '\u26A1', 'connecting');
//   }
// });

// const Person = (name, speed=3) => {
//   let state = {
//       name,
//       speed
//   }
//   return Object.assign({}, 
//     talker(state), 
//     walker(state),
//     eater(state));
// };
// let Bob = Person('Bob');
// Bob.talk('Hello from Bob.');
// Bob.eat();
// Bob.walk();

// const Android = (id, speed=6) => {
//   let state = {
//       id,
//       speed
//   }
//   return Object.assign({}, 
//     talker(state), 
//     driver(state), 
//     wifier(state));
// };
// let k45 = Android('k45');
// k45.drive();
// k45.wifi();

// const Cyborg = (name, speed) => {
//   let state = {
//       name,
//       speed
//   };
//   return Object.assign({},
//     talker(state),
//     walker(state),
//     wifier(state));
// };
// let Dolph = Cyborg('Dolph', 9);
// Dolph.walk();
// Dolph.wifi();

// -------------Object.assign vs Object.create---------------

/* 
Object.create creates a new object with the specified [[Prototype]], 
and Object.assign assigns the properties directly on the specified object:
Object.create accept two arguments : Object.create(proto, properies(like Object.defineProperities()))

Object.assign() provides shallow copying (Only properties and methods) 
and it will override the method and property 
(in case of same name property from source object will override property inside target object 
because steps of Object.assign is creating target object the copy from the source Object)
while Object.create() provides Deep copying only link to prototype chain.
Object.assign(target Object , source Object)
*/

// let target1 = {
//   tProp1 : "T1"
// }
// let target2 = {
//   tProp2 : "T2"
// }
// let obj1 = {
//   oProp1 : "O1"
// }
// let obj2 = {
//   oProp2 : "O2"
// }
// // Object.create define Property => all descriptors false && creating new property in finalObj1 not overriding obj1
// let finalObj1 = Object.create(obj1 , {oProp1 : {value : "F1"}})
// // Object.assign only assign => all descriptors true && overriding oProp2 in obj2
// let finalObj2 = Object.assign(obj2, {oProp2 : "F2"})
// console.log(finalObj1.oProp1) // F1
// console.log(finalObj2.oProp2) // F2
// finalObj1.oProp1 = "OF1"
// finalObj2.oProp2 = "OF2"
// console.log(finalObj1.oProp1) // F1 because all descriptors false
// console.log(finalObj2.oProp2) // OF2 because all descriptors true
// console.log(obj1.oProp1) // O1 because we used Object.create we will not override
// console.log(obj2.oProp2) // OF2 because we used Object.assgin we override the oProp2 in obj2

// ---------Date.now() vs valueOf()---------------
// Miliseconds since 1 jan 1970

// let timeStamp1 = Date.now() //class Method or static Method
// let timeStamp2 = new Date() 
// console.log(timeStamp1)
// console.log(timeStamp2.valueOf()) // instance Method


// ----------------toSrting()-------------------------
/* The toString() method returns a string representing the object. [Object Type] 
By default, the toSrting() method is inherited by every object descended from Object. 
Every built-in core object overrides this method. 
For an array, that would return all of the array values joined with a comma, 
*/

// let obj = {fname : "Soliman"}
// let arr = [1,2,3,4]
// let num = 12;
// let date = new Date()
// console.log(obj.toString()) // toString Method from Object prototype
// console.log(arr.toString()) // toString Method from constructor Array (will override toString Method from Object prototype)
// console.log(num.toString()) toString Method from constructor Number (will override toString Method from Object prototype)
// console.log(date.toString()) toString Method from constructor Date (will override toString Method from Object prototype)
// console.log(Object.prototype.toString.call(obj))
// console.log(Object.prototype.toString.call(arr))
// console.log(Object.prototype.toString.call(num))
// console.log(Object.prototype.toString.call(date))


// --toString() with classes--
// class Person {
//   constructor(fName, lName){
//     this.fName = fName
//     this.lName = lName
//   }
//   // here we overriding toString() Method
//   toString(){
//     return `${this.fName} ${this.lName}`
//   }
// }
// class PersonAndAge extends Person{
//   constructor(fName,lName,age){
//     super(fName, lName)
//     this.age = age
//   }
//   // here we overriding toString() Method
//   toString(){
//     return `${this.fName} ${this.lName} ${this.age}`
//   }
// }
// let me = new Person("Mohamed" , "Hussein")
// let meAndAge = new PersonAndAge("Mohamed" , "Hussein", 33)
// // when string + object =>  under the hood JS will automaticall call toString() method me.toString()
// // without overriding toString() inside class the output will be My FullName is : [Object Object]
// console.log("My FullName is : " + me)
// console.log("My FullName and Age is : " + meAndAge)

// ----------------toString() vs String()-------------
/* 
toString() is a method of Object so will not work on null or undefined 
because they are dont support properties

String() is constructor and you can pass any argument to convert it to string 
(under the hood take that argument and use toString() on it)

The String constructor is used to create a new String object. 
When called instead as a function, it performs type conversion to a primitive string, 
which is usually more useful.
*/

// console.log(Object.prototype.toString())
// undefined.toString() // error
// null.toString() // error

// console.log(String.prototype)
// console.log(Number.prototype)

// console.log(String(null)) // null 
// console.log(String(undefined)) // undefined


// ---------------valueOf-------------------
/* 
JavaScript calls the valueOf method to convert an object to a primitive value. 
You rarely need to invoke the valueOf method yourself; JavaScript automatically invokes it 
when encountering an object where a primitive value is expected.
By default, the valueOf method is inherited by every object descended from Object. 
Every built-in core object overrides this method to return an appropriate value. 
If an object has no primitive value, valueOf returns the object itself.
*/

// when using literal JS under the hood create instance object (called auto-boxing) and automatically use method valuOf() on it 
// let strPrim = "Mohamed"
// // Under the Hood
// let strObj = new String("Mohamed")
// let strObjPrim = strObj.valueOf()
// console.log(typeof strPrim) // string
// console.log(typeof strObj) // object
// console.log(typeof strObjPrim) // string

// class Product {
//   constructor(name , cost){
//     this.name = name
//     this.cost = cost
//   }
//   // here are overriding valueOf() method
//   valueOf(){
//     return this.cost
//   }
// }
// let p1 = new Product("Samsung", 500)
// let p2 = new Product("Apple" , 1000)
// // without overriding valueOf() will return [object object][object object] 
// // because befault behavior of valueOf is returns the object itself If an object has no primitive value  
// console.log( p1 + p2) 


// --------------Type coercion (implicit ) vs  Type conversion ( explicit)----------

// [1]  -----------Type coercion (implicit )

// [a] + operator
/* 
Js Engine has two options convert 1 to "1" or "2" to 2 
because with + you can concatenate strings or numbers 
but under the hood Js will automatically convert 1 to "1" using toString() Method
*/
// console.log( 1 + "2") // 12
// under the Hood
// console.log((1).toString() + "2") // 12

// [b] * operator
/* 
Js Engine has only one option convert "2" to 2 
because with * you can only multiply numbers not string
but under the Hood Js will automatically convert "2" to 2 using Number() ( ia m not sure which method will be used)
*/
// console.log( 1 * "2") //2
// // under the Hood
// console.log( 1 * Number(2)) //2 

// [2] -------Type conversion ( explicit) 
/* 
Explicit means change data type by yourself not automatically by JS Engine
*/
// console.log(Number("2"))
// console.log(String(1))

// ------------------convert Binary Number , decimal and HexDecimal--------------
/*
[1] Using toString(10) : Convert Binary or HexDecimal Number to Decimal Number 
[2] Using toString(2) : Convert Decimal or HexDecimal Number to Decimal Number
[3] Using praseInt(binary, radix) : Convert binary to Decimal


Binary : Js don't know if this is a binanry or decimal number so if you need to tell 
js it's a binary number you should write 0b like let b = 0b1010 
Decimal : Js knows its Decimal no need to write something before
HexDecimal : Js don't know if this is a HexDecimal you should write 0x 
 */
// let a = 10; 
// let b = 0b1010;
// let c = 1010;
// let x = 0xFF3300
// let d = 16724736

// console.log(a.toString(2)) // convert Decimal to Binary
// console.log(b) // will print 10 because we tell JS it's Binary bu writing 0b before
// console.log(c.toString(10)) // 1010 because we did not tell JS it's Binary
// console.log(b.toString(10)) // 10 toString() will work now because we told JS it's Binary
// console.log(parseInt(c,2)) // no need here to tell JS it's Binary because we wrote here the radix as 2nd parameter
// console.log(x.toString(2)) // convert HexDecimal to Binary
// console.log(d.toString(16)) // convert decimal to HexDecimal
// console.log(x.toString(10)) // convert HexDecimal to Decimal

// --------------BitWise Operator and Binary Numbers------------
// video 
// https://youtu.be/RRyxCmLX_ag
/* 
// bitwise.js
// JavaScript Bitwise operators
// AND &
// OR  |
// XOR ^
// NOT ~
// Shift Left <<
// Shift Right >>
let log = console.log;
let n = 10;     //1010
let i = 6;      // 110
log( n.toString(2), i.toString(2) );
// 1010
//  110
// 0010  2
log("AND &",  (n & i) )
let temp = 2;
log( temp.toString(2) )

//  1010
//   110
//  1110
log("OR | ",  (n | i) );

// 1010
//  110
// 1100  12 XOR
log('XOR ^', (n^i) );

// ~ 1010
//   0101
//  x  = -(x+1)  
log('NOT ~', (~n) );  -11

//PERMISSIONS
// read, write, delete
let perm = 6;

let allowedToRead = (perm & 4)?true:false;
let allowedToWrite = (perm & 2)?true:false;
let allowedToDelete = (perm & 1)?true:false;
//  0110  6
//  0100  AND 4
//  0100  4

//  0010  6
//  0100  AND 4
//  0000  0

for(var c=0; c<50; c++){
    if(c&1){
        //log('Odd');
    }else{
        //log('\t\tEven');
    }
}

//101010 >> 4  = 10
//  111  >> 1  = 3
log( 7 >> 1 );

//  111 << 1 = 1110   (14)
//  1000 << 1 = 10000  (16)
log( 7 << 1);
log( 8 << 1);

//  FF3300  - 24bit values  8bits Red, 8bits Green, 8 bits Blue
// GREEN  - Shift 8 >>, AND 11111111  (255)
//  111111110011001100000000  >> 8 = 1111111100110011
//  1111111100110011
//  0000000011111111
//          00110011

var color = 0xFF3300;
var noBlue = color >> 8;
var green = noBlue & 255;
log('GREEN', green, green.toString(16))
*/
/**************************
counting in decimal, binary
 0      0       
 1      1       2^0
 2     10       2^1
 3     11
 4    100       2^2
 5    101
 6    110
 7    111
 8   1000       2^3
 9   1001
10   1010
11   1011
12   1100
13   1101
14   1110
15   1111
16  10000       2^4
**************************/

// ----how ~ "NOT" Bitwise Operator works 
/*
JavaScript stores numbers as 64 bits floating point numbers, 
but all bitwise operations are performed on 32 bits binary numbers.
Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed 
integers. (A signed integer uses the leftmost bit as the minus sign.)
After the bitwise operation is performed, the result is converted back to 64 bits 
JavaScript numbers.

Number.toString(2) has some problems when representing negative numbers. 
For example, (-1).toString(2) output is "-1".
To fix this issue, you can use the unsigned right shift bitwise operator (>>>) to 
coerce your number to an unsigned integer.
If you run (-1 >>> 0).toString(2) you will shift your number 0 bits to the right, 
which doesn't change the number itself but it will be represented as an unsigned integer

Javascript represents negative binary integers in two's-complement notation
*/
// let a = 5;
// let b = ~5;
// let x = 0b11111111111111111111111111111010
// let y = -6;

// console.log(a) // 5
// console.log(b) // -6
// console.log(x.toString(2)) // 11111111111111111111111111111010
// console.log((y >>> 0).toString(2)) // 11111111111111111111111111111010


//????????????????????????colors with Bitwise operators
/* Color (8 bits red , 8 bits green , 8 bits blue ) 

FF3300
FF(Red) - 33(Green) - 00(blue) (111111110011001100000000)

[1] To get green part : FF3300 >> 8 & 255 : 

(a) FF3300 >> 8 : will shift to right and remove 8 bits of blue (1111111100110011)

(b) & 11111111(255) : will remove Remove Red part
1111111100110011 & 
0000000011111111
=              00110011 (Green part ) 

[2] To get blue part : FF3300 & 255

111111110011001100000000 & 
000000000000000011111111
= 00000000 (blue part) 

[3] To get Red Part : FF3300 >> 16

: will shift to right and remove 16 bits 8 bits blue and 8 bits green (11111111) */

// ------Avoiding Array Dubplicate values in loop--------

// give you duplicate of random values
// let arr = [1,2,3,4]
// for(let i =0; i < arr.length; i++){
//   let rnd = Math.floor(Math.random() * arr.length)
//   console.log(arr[rnd])
// }

/* 
to solve the problem of duplicate : 
[1] give for loop static no. of loops by creating variable len and assign to it a primitive value(immutable)
[2] use Splice() beacuse each loop arr.length will decrease and random method will give you smaller no. each loop
*/

// no Duplicate but will change the original Array
// let arr = [1,2,3,4]
// for(let i =0 ,len = arr.length; i < len; i++){
//   let rnd = Math.floor(Math.random() * arr.length)
//   console.log(arr[rnd])
//   arr.splice(rnd, 1)
// }
// console.log(arr) // []

// no Duplicate and no change the original Array
// let arr = [1,2,3,4]
// for(var i =0 ,arr2 = Array.from(arr) ,len = arr.length; i < len; i++){
//   let rnd = Math.floor(Math.random() * arr2.length)
//   console.log(arr2[rnd])
//   arr2.splice(rnd, 1)
// }
// console.log(arr) //[1,2,3,4]

// let nums = [10,11,12,13,14,15]
// let min = 16;
// let max = 20;
// let range = max - min

// Duplicate
// while(nums.length < 10){
//   let rnd = Math.floor(Math.random() * range) + min
//   nums.push(rnd)
//   console.log(nums.sort())
// }

// no Duplicate
// while(nums.length < 10){
//   let rnd = Math.floor(Math.random() * range) + min
//   if(!nums.includes(rnd)){
//     nums.push(rnd)
//     console.log(nums.sort())
//   }
// }


// ------------JSON (JavaScript Object Notation)-----------
/*
difference between normal function and JSON object:
Json file is just a text file you can store object or array inside it 
key in object must be inside "" and 
value (inside object or array) can be only (string,number,object,array,true,false.null) 
reference this link => https://www.json.org/json-en.html


JSON VS XML 
- Text Based Format            - Markup Language (like HTML)
- Lightweight                  - Heavier
- Does Not Use Tags            - Using Tags
- Shorter                      - Not Short
- Can Use Arrays               - Cannot use Arrays
- Not Supprot Comments         - Support Comments
*/

// let obj = {
//   fName : "Mohamed",
//   lName : "Hussein",
//   age : 33
// }
// let jsonStrObj = JSON.stringify(obj)
// let jsonParseObj = JSON.parse(jsonStrObj)
// console.log(jsonStrObj)
// console.log(jsonParseObj)

// // you can add array as 2nd parameter to JSON.stringify to filter only specific properties
// let jsonStrObjFilter = JSON.stringify(obj, ["lName", "age"])
// console.log(jsonStrObjFilter)

// // you can add function as 2nd parameter 
// let jsonStrObjFunc = JSON.stringify(obj , function(key,value){
//   if(typeof value === "string"){
//     // return "STRING"
//     // if you return undefined will not print the whole property
//     return undefined
//   }else{
//     return value
//   }
// })
// console.log(jsonStrObjFunc)

// // you can add no. of spaces as 3rd parameters
// // let jsonStrObjSpaces = JSON.stringify(obj, null , 4)
// let jsonStrObjSpaces = JSON.stringify(obj, null , "\t") // you can use tab also
// console.log(jsonStrObjSpaces)


// -----------PlaceHolder for images AJAX-----------
// check the video
// https://youtu.be/uXTJnIUlVAA
// let fetch = require('node-fetch') // on command line 
// let url = "https://picsum.photos/list"

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.length)
//     console.og(data[0])
//   })
//   .catch(err => {
//     console.log(JSON.stringify(err, null , 2))
//   })

// ----------Randomizing in JS-----------
/* 
if you want end of range included use (range+1)
Math.floor(Math.random() * (range+1)) + minimum

if you want end of range not included (range)
Math.floor(Math.random() * (range)) + minimum

Math.random() give you random number from 0 to 0.99999999
*/

// let people = ["John","Robert","Paul","Jimmy"]

// // number between 1 and 3
// let num = Math.floor(Math.random() * (2+1)) + 1
// console.log(num)

// // Number between 500 and 1000
// let num2 = Math.floor(Math.random() * 500) + 500
// console.log(num2)

// // random person
// let min = 0;
// let max = people.length-1
// let person = people[Math.floor(Math.random() * (max-min + 1) )] 
// console.log(person)


// ---------------json() vs JSON.parse()-------------

/* 
AJAX' works with 'callbacks'; 'fetch' works with 'promises'.
Use JSON.parse() to parse the response for AJAX (response from AJAX is already read to read). 
Use json() to parse the response for fetch (response from fetch need asynchronous function json() to read ).

Body.json() is asynchronous and returns a Promise object that resolves to a JavaScript object. 
JSON.parse() is synchronous can parse a string and change the resulting returned JavaScript object.
*/
// let url = "https://jsonplaceholder.typicode.com/users"; 
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))


// let xhr = new XMLHttpRequest();       
// xhr.open("GET", url, true); // true is default and means Async - false means Sync       
// xhr.onreadystatechange = function(ev) {                
//   if(xhr.readyState === 4 && xhr.status === 200){
//     console.log(JSON.parse(xhr.responseText))
//   }        
// }      
// xhr.send()

// --------------------Object.create vs Object.assign()----------------

/* 
* The Object.create() method creates a new object, using an existing object 
as the prototype of the newly created object.

* The Object.assign() method copies all enumerable own properties from one or more source 
objects to a target object. It returns the modified target object.

* 2nd param in Object.create is define property for this new created object

* 2nd and 3rd and ... param in Object.assign are one or more source objects to a target object

*/

// let obj = {
//   fName : "Mohamed",
//   lName : "Hussein"
// }
// let obj1 = Object.create(obj,{mName:{value : "Ahmed"}})
// console.log(obj1)
// console.log(obj1.fName)
// console.log(obj1.lName)
// console.log(obj1.mName)

// let obj2 = Object.assign({},obj,{mName2:"Soliman"})
// console.log(obj2)
// console.log(obj2.fName)
// console.log(obj2.lName)
// console.log(obj2.mName2)

// ----adding static and prototype Methods to built-in Array Object
// Array.staticMethod = (arr) => arr.splice(-1)
// Array.prototype.protoMethod = (arr) => arr.splice(0,1)
// Array.prototype.protoMethodLength = function(){return this.length}
// let arr1 = [1,2,3,4]
// Array.staticMethod(arr1)
// arr1.protoMethod(arr1)
// // this here refer to arr1 because arr1 inherit protoMethodLength from prototype chain and 
// // act as it's a method inside arr1 Object and this will refer to this arr object
// // conclusion this will refer to anything before .protoMethodLength()
// console.log(arr1.protoMethodLength())
// console.log(arr1)
// console.log(Array.prototype)


// ---------------Searching inside Array--------------

// let arr = ["Mohamed","Ahmed","Soliman","Hussein"]

// [1] includes
// includes accept 2nd argument (start index)
// console.log(arr.includes("Mohamed",0)) // true
// console.log(arr.includes("Mohamed",1)) // false

// [2] indexOf
// indexOf accept 2nd argument (start index)
// console.log(arr.indexOf("Soliman",3)) // -1
// console.log(arr.indexOf("Soliman",0)) // 2

// [3] some
/* 
default behavior of some is return true or false 
return true will stop the loop and assign true to variable result
if the loop finished and not returning true will assign false to variable result 
even if return false not exist will retrun false also because undefined also a falsy value

for exp. if we use here map instead of some will return array of [false,false,true,false]
*/
// let result = arr.some((name)=>{
//   if(name === "Soliman"){
//     return "true" 
//   }else{
//     return false 
//   }
// })
// let result = arr.some((name)=> name === "Soliman")
// console.log(result)

// [4]
/* 
Default behavior of find return found value or if not found return undefined
*/
// let result2 = arr.find((name)=> name === "Soliman")
// console.log(result2)

// ---------reduce can also return array or object not only return single value------
// let objKeys = ["a" , "b" , "c"]
// let objValues = [1 , 2 , 3]

// // For ...loop Version
// function myFunction(objKeys, objValues) {
//   let obj = {};
//   for( let i = 0; i < objKeys.length; i++){
//     obj[objKeys[i]] = objValues[i]
//   }
//   return obj
// }
// // reduce Version
// function myFunction2(objKeys, objValues) {
//   return objKeys.reduce((acc, cur, i) => ({ ...acc, [cur]: objValues[i] }), {});
// }
// console.log(myFunction(objKeys,objValues))
// console.log(myFunction2(objKeys,objValues))


// ------------how to search on string and replace------------------

// let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
// At, deserunt dolorem. Veritatis rerum iusto quidem saepe mollitia doloremque velit ullam, 
// et aperiam nemo placeat ea perferendis dicta repudiandae provident ratione!`

// let find =" "
// let replace = ""
// while(lorem.indexOf(" ") > -1){
//   lorem = lorem.replace(find,replace)
// }
// or you can use replaceAll
// to check if replaceAll supported in browser
// if("replaceAll" in String.prototype){
//   lorem = lorem.replaceAll(find,replace)
// }else{
//   // using regular Expression
//   let reg = new RegExp(" ","g")
//   lorem = lorem.replace(reg,"-")
// }
// console.log(lorem)

// note : if replaceAll not supported in browser you can add it to String.ProtoType manually
// String.prototype.replaceAll = function(find,replace){
//   let reg = new RegExp(find,"g")
//   return this.replace(reg,replace)
// }
// lorem = lorem.replaceAll(" ", "-")
// console.log(lorem)


// -------------Object.create(null)--------------
/* 
Creating objects by using {} will create an object whose prototype is Object.
prototype which inherits the basic functions from Object prototype while creating objects 
by using Object.create(null) will create an empty object whose prototype is null.
*/
// let obj1 = Object.create(null)
// let obj2 = {}
// console.log(obj1) 
// console.log(obj2)

// ---------------Trimming and Padding---------------
/* 
* trim remove all spaces between string left and right
* trimLeft remove spaces from left side
* trimRight remove spaces from right side

* padStart(minLength, "added pad") in added pad you can add space by " " or text "x" 
and the added pad will repeat till reach min length
* padEnd (minLength, "added pad") in added pad you can add space by " " or text "x" 
and the added pad will repeat till reach min length
default added pad is space if you didnt write anything
*/
// let name = "Soliman"
// let nameWithSpaces = "      Soliman     "

// console.log("!",nameWithSpaces.trim(),"!")
// console.log("!",nameWithSpaces.trimLeft(),"!")
// console.log("!",nameWithSpaces.trimRight(),"!")
// console.log("!",name.padStart(15,"x"),"!")
// console.log("!",name.padEnd(15,"x"),"!")

// some use cases for padding : 

// [1] id with constant length 
// let id = 123456
// console.log(id.toString().padStart(9,"0"))

// [2] fixed length file format
// let userId = 123456
// let userName = "Soliman"
// let userEmail = "@email"
// let file = userId.toString().padStart(9,"0") + "\n"+ userName.padStart(9,">") + "\n"+userEmail.padStart(9,"#")
// console.log(file)

// -------------Number Formatting-------------
/* 
The Math.round() function returns the value of a number rounded to the nearest integer.

The Math.floor() function returns the largest integer less than or equal to a given number.

The Math.ceil() function always rounds a number up to the next largest integer.

The toFixed() method formats a number using fixed-point notation.

The toPrecision() method returns a string representing the Number object to the specified precision.

The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.

The toExponential() method returns a string representing the Number object in exponential notation.
*/
// let num = 111.547
// let dec = 0.000167
// let str = "111.467 this is a string"

// // round if number after . below 5 will be 111 if above 5 or 5 will be 112
// console.log(Math.round(num)) // 112 
// // Ceil will always give you the biggest number no matter number after . below or above 5
// console.log(Math.ceil(num)) // 112 
// // Ceil will always give you the smallest number no matter number after . below or above 5
// console.log(Math.floor(num)) // 111
// // toFixed will give you one number after . (depending on argument passed to toFixed())
// // and it will use round that's why return 111.5 not 111.6
// console.log(num.toFixed(1)) // 111.5 as tring
// // toPrecision will give you two number after .000 (depending on argument passed to toFixed())
// // and it will use round that's why return  0.00017 not 0.00016
// console.log(dec.toPrecision(2)) // 0.00017 as string
// // toExponential return string in Exponential notation 
// // and it will use round that's why return 111.5e+2 not 111.6e+2
// console.log(num.toExponential(3)) // as string

// console.log(parseInt(str)) // 111 integer
// console.log(parseFloat(str)) // 111.467 float
// console.log(parseFloat(str).toFixed(2)) // 111.47 as string

// ------------------Object initializer--------------

//------------- New Notations in ES6
// // Short-hand property Name (ES6)
// let a =1 ,
//     b =2 ,
//     c =3 ;

// let obj1 = {a,b,c}
// console.log(obj1)

// // Short-hand Method Name (ES6)
// // no need of function word (instead of method2 : function(){console.log("Method from obj2")})
// let obj2 = {
//   method2(){
//     console.log("Method from obj2")
//   }
// }
// obj2.method2()

// // Computed property names (ES6)
// let prop = "foo"

// let obj3 = {
//   [prop] : "prop3",
//   ["b" + "ar"] : "prop4"
// }
// console.log(obj3[prop])
// console.log(obj3["bar"])

// -----------Object literal notation vs JSON(JavaScript Object Notation)
 //JSON has the following syntactical constraints:
/*
 * Object keys must be strings (enclosed in double quotes " ") and can not be computed (ES6).
 * Property can not be shorthanded
 * The values can be either:
     * a string
     * a number
     * an (JSON) object
     * an array
     * true
     * false
     * null
     * *** function not allowed
 * Duplicate keys ({"foo":"bar","foo":"baz"}) produce undefined

In JavaScript, object literals can have
 * Property can be shorthanded
 * String literals, number literals or identifier names as keys (since ES6, keys can now also be computed).
 * The values can be any valid JavaScript expression, including function definitions and undefined.
 * Duplicate keys produce defined, 
    specified results (in loose mode, the latter definition replaces the former; in strict mode, it's an error then allowed after ES6). 
 * Poperty can be accessed by dot notaion or bracket notaion obj.prop or obj["prop"]
 */

// -----------Spread Properties 
/* 
like Object.assign() take shallow copy but Object.assign() triggers setters, whereas the spread operator doesn't!
*/
// let mainObj ={
//   key : "Value"
// }
// let obj = {
//   a : 1,
//   b : 2,
//   c : 3,
//   // prototype mutaion
//   __proto__ : mainObj
// }

// let spreadObj = {...obj}
// let assignObj = Object.assign({},obj)
// let createObj = Object.create(obj)
// console.log(obj)
// console.log(spreadObj)
// console.log(assignObj)
// console.log(createObj)

// ------------ProtoType Mutaion

/* A property definition of the form __proto__: value or "__proto__": value does not create a property with the name __proto__. Instead, if the provided value is an object or null, it changes the [[Prototype]] of the created 
object to that value. (If the value is not an object or null, the object is not changed.) */
// let obj1 = {}
// console.log(Object.getPrototypeOf(obj1) === Object.prototype)

// let obj2 = {__proto__: null}
// console.log(Object.getPrototypeOf(obj2) === null)

// let protoObj = {}
// let obj3 = {'__proto__': protoObj}
// console.log(Object.getPrototypeOf(obj3) === protoObj)

// let obj4 = {__proto__: 'not an object or null'}
// console.log(Object.getPrototypeOf(obj4) === Object.prototype)
// console.log(!obj4.hasOwnProperty('__proto__'))
/* 
----------------------Boxing Wrappers---------------

This happens in two cases in JavaScript:
1. When you pass a primitive value as the this value to .call or .apply (not in strict mode though).
2. When you are trying to access a "property" of a primitive value, e.g. "foo bar".split().

AutoBoxing
Boxing is wrapping a primitive value in an Object. 
When you treat a primitive type like if it were an object, 
e.g., calling to the toLowerCase function, JavaScript would wrap the primitive type 
into the corresponding object. This new object is then linked to the related 
built-in <.prototype>, so you can use prototype methods on primitive types.

Manual Boxing and Gotchas
In general, using the boxed object wrapper directly isn???t usually a good idea 
because there are some gotchas related to him, and you have to be careful 
if you don???t want unexpected results.

const a = new Boolean(true)
if(a) console.log("it's true")// it's true
const b = new Boolean(false)
if(!b) console.log("never runs");// objects are ???truthy.???
const c = Object(false)
if(!c) console.log("never runs"); // objects are ???truthy.???

The problem here is that you are creating an object wrapper around a false value, 
but objects are ???truthy.??? So, if you want to box a primitive value manually, be careful.

Unboxing
The easiest way to obtain the underlying primitive value from an object wrapper is to use 
the valueOf() method ( that what happens automatically with string literal ) 
*/

// -------------------Spread vs Object.assign()-------------------------
/* 
spread defines new properties, whereas Object.assign() sets them. 
For example, Object.assign() calls setters that are defined on Object.prototype, 
whereas the spread operator does not.
*/

// Object.defineProperty(Object.prototype, 'myProp', {
//   set: () => console.log('Setter called')
// });
// const obj = { myProp: 42 };
// let assignObj = Object.assign({}, obj); // Prints "Setter called"
// const newObj = {...obj }; // Does **not** print "Setter called"

// ----------------------getter and setter---------------
/* 
[1] set syntax binds an object property to a function to be called 
when there is an attempt to set that property.


[2] The get syntax binds an object property to a function that will be called 
when that property is looked up.

* you can not give getter or setter same name of existing property of object that have a value
* you can use getter or setter to create Psudo-property
* getter has zero param but setter has one param
*/
// [1] --------setter
// let obj = {
//   _prop1 : 1988,
//   get prop1(){
//     return this._prop1 
//   },
//   set prop1(val){
//     this._prop1 = val + " From Setter"
//   }
// }
// console.log(obj.prop1) // 1988
// obj.prop1 = 2000 // invoking setter method
// console.log(obj.prop1) // 2000 from Setter

// we can use setter to create Psudo-property

// let language = {
//   lang : [],
//   set current(val){
//     this.lang.push(val)
//   }
// }
// console.log(language.lang)
// language.current = "EN"
// console.log(language.lang) // ["EN"]
// language.current = "AR"
// console.log(language.lang) // ["EN","AR"]
// // Note that current is not defined, and any attempts to access it will result in undefined.
// console.log(language.current) // undefined
// we can delete setter with delete operator
// delete language.current;

//-----defineSetter-----
/* The __defineSetter__ method binds an object's property to a function to 
be called when an attempt is made to set that property. */
// Object.defineProperty(Object.prototype, 'myProp', {
//   set: () => console.log('Setter called')
// });
// const obj = { Prop: 42 };
// obj.myProp = 1; // will trigger setter method

// [1] Non-standard and deprecated way
// var o = {};
// o.__defineSetter__('value', function(val) { this.anotherValue = val; });
// o.value = 5;
// console.log(o.value); // undefined
// console.log(o.anotherValue); // 5

// [2] Standard-compliant ways
// Using the set operator
// var o = { set value(val) { this.anotherValue = val; } };
// o.value = 5;
// console.log(o.value); // undefined
// console.log(o.anotherValue); // 5

// [3] Using Object.defineProperty
// var o = {};
// Object.defineProperty(o, 'value', {
//   set: function(val) {
//     this.anotherValue = val;
//   }
// });
// o.value = 5;
// console.log(o.value); // undefined
// console.log(o.anotherValue); // 5

//[2] -------getter

// let obj = {
//   prop1 : ["A","B","C"],
//   get last(){
//     return this.prop1[this.prop1.length -1]
//   }
// }
// console.log(obj.last)

// ------difference between getter and defineProperty------
/* 
When using get the property will be defined on the instance's prototype, 
while using Object.defineProperty() the property will be defined on the instance it is applied to.
*/
// let obj = {
//   _prop1 : "Mohamed",
//   _prop2 : "Ahmed",
//   _prop3 : "Soliman",
//   get prop1(){
//     return this._prop1
//   },
//   get prop2(){
//     return this._prop2
//   }
// }
// Object.defineProperty(obj,"prop3",{
//   get: function prop3(){
//     return this._prop3
//   }
// })
// // because getter take zero parameters so we you try to assign value to it will no change anything
// obj.prop1 = "Hussein" // No changes happends
// console.log(obj)
// console.log(obj.prop1)
// console.log(obj.prop2)
// console.log(obj.prop3)
// we can delete getter with delete operator
// delete obj.prop1;



// ----check even Number
// function evenNum(num){
//   return num % 2 === 0 
// }
// console.log(evenNum(4))
// console.log(evenNum(5))
  


/*  ----------Arguments and Parameters------------
The arguments object is an array-like object that is available within all functions. 
It allows the argument???s values passed to the function to be retrieved by number, 
rather than by name. The object allows us to pass any number of arguments to a function

If a  function expects to receive only one argument. 
When we call it with two arguments, the first argument is accessible in the function 
by the parameter name param1 or the arguments object arguments[0], 
but the second argument is accessible only as arguments[1]. 
But if you are using rest parameter you can access parameter [1]

function arg(){
  console.log(arguments)
  console.log(arguments[1])
  console.log(Array.prototype.slice.call(arguments))
  console.log(Array.from(arguments))
}
arg(1,2,3,4)

Parameter and argument are like two different names for the same variable.
the arguments object has an unusual feature: It keeps its values in sync with 
the values of the corresponding named parameters. but in strict mode this not happend

function foo(param) { 
  console.log(param === arguments[0]); // true 
  arguments[0] = 500; 
  console.log(param === arguments[0]); // true 
  return param 
} 
console.log(foo(200)) // 500


function foo2(param) { 
  "use strict"
  console.log(param === arguments[0]); // true 
  arguments[0] = 500; 
  console.log(param === arguments[0]); // false 
  return param 
} 
console.log(foo2(200)) // 200

-----Mandatory Arguments
If an argument is missing in a function call, it will be set to undefined
ES6 we can use default parameters to set mandatory arguments:

function throwError() { 
  throw new Error('Missing parameter'); 
} 
function foo(param1 = throwError(), param2 = throwError()) { 
  return [param1,param2]
} 
foo(10, 20); // ok 
foo(10); // Error: missing parameter
*/

/* ---------Function constructor Vs function declaration----------
Functions created with the Function constructor do not create closures to their 
creation contexts; they always are created in the global scope. When running them, 
they will only be able to access their own local variables and global ones, 
not the ones from the scope in which the Function constructor was created

var x = 10;
function funcObj (){
  var x = 20
  return new Function("return x")
}

function funcConstruc(){
  var x = 20
  return function f(){
    return x
  }
}
let newFunc = funcObj()
console.log(newFunc()) 
let newFunc2 = funcConstruc()
console.log(newFunc2()) 
*/

/*--------------Array like Object------------ 
EXP. 
* Arguments object
* HTML Collection
* NodeList 

one key difference between Arrays and Array-like Objects is that Array-like objects 
inherit from Object.prototype instead of Array.prototype. This means that Array-like 
Objects can't access common Array prototype methods like forEach(), push(), map(), filter(), 
and slice():

to Transfer Array like Object to Array : 

function arrLike(){
  // [1] Array.fom
  // let arr = Array.from(arguments)
  
  // [2] Spread operator
  // let arr = [...arguments]
  
  // [3] for..of loop
  // let arr = [];
  // for(let arg of arguments){
  //   arr.push(arg)
  // }
  
  // [4] Object.values
  // let arr = Object.values(arguments)

  // [5] Object.keys
  // let arr = Object.keys(arguments).map((key)=>arguments[key])

  // [6] Array.prototype.slice
  // let arr = Array.prototype.slice.apply(arguments)

  // [7] Function.prototype.apply.bind
  // let slice = Function.prototype.apply.bind(Array.prototype.slice) // slice now is bound function
  // let arr = slice(arguments)

  // [8] use a function directly to array like object without changing it to array
  // let arr = []
  // Array.prototype.forEach.call(arguments,function(arg){
  //   arr.push(arg)
  // })
  // return arr
}
console.log(arrLike(1,2,3,4))
*/

// ----------------------------Call , Apply and Bind------------------------------

// [1]-----------------------Call()
/* 
The call() allows for a function/method belonging to one object to be assigned 
and called for a different object.

Call (thisArg, arg1,arg2,....) takes arguments separately
*/

// EXP. 1
// The example below calls person1.fullName function with person2 as an argument,
//  this refers to person2, even if fullName is a method of person1:
// call force person1.fullName() to accept person2 (object) as thisArg

// const person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person2 = {
//   firstName:"John",
//   lastName: "Doe",
// }

// console.log(person1.fullName.call(person2))

// EXP. 2
// ---- adding function print to each object inside array animals using Call()
// const animals = [
//   { species: 'Lion', name: 'King' },
//   { species: 'Whale', name: 'Fail' }
// ];

// for (let i = 0; i < animals.length; i++) {
//   (function(i) {
//     this.print = function() {
//       console.log('#' + i + ' ' + this.species
//                   + ': ' + this.name);
//     }
//     this.print();
//   }).call(animals[i], i);
// }
// console.log(animals[0])
// console.log(animals[1])

// EXP. 3
// -----Using call() to invoke a function and without specifying the first argument
// In the example below, we invoke the display function without passing the first argument. 
// If the first argument is not passed, the value of this is bound to the global object.

// var sData = 'Wisen';
// function display() {
//   console.log('sData value is %s ', this.sData);
// }
// display.call();  // sData value is Wisen
// note : in strict mode this will not refer to global object -this will undefined

// EXP. 4
// ------Using call() to chain constructors for an object (Like Super in ES6 Class)
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }

// function Toy(name, price) {
//   Product.call(this, name, price);
//   this.category = 'toy';
// }

// const cheese = new Food('feta', 5);
// const fun = new Toy('robot', 40);

// [2]----------------------------Apply()
/* 
apply is very similar to call(), except for the type of arguments it supports. 
call() accepts an argument list, while apply() accepts a single array of arguments.
The call(thisArg, arg1,arg1,....) method takes arguments separately.
The apply(thisArg, argArray) method takes arguments as an array or array like object.
*/

// EXP. 1
// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   // apply accept argument as Array
// console.log(person.fullName.apply(person1, ["Oslo", "Norway"]))
//   // call accept argument separatly
// console.log(person.fullName.call(person1, "Oslo", "Norway"))

// EXP. 2
// ------Using Apply() to chain constructors
// // creating global Method
// Function.prototype.construct = function(aArgs) {
//   // this object will be the future instance (myInstance) of future constructor (MyConstructor)
//   let oNew = Object.create(this.prototype);
//   //  this here will refer to future constructor will user with (MyConstructor)
//   this.apply(oNew, aArgs); // using future constructor (oNew = (myInstance) is thisArg and argArray = myArray)
//   return oNew;
// };
// // future constructor
// function MyConstructor() {
//   for (let nProp = 0; nProp < arguments.length; nProp++) {
//     this['property' + nProp] = arguments[nProp];
//   }
// }
// // array of arguments
// let myArray = [4, 'Hello world!', false];
// // future instance
// let myInstance = MyConstructor.construct(myArray); //like new MyConstructor but with passing array of arguments
// // let myInstance = new MyConstructor(4, 'Hello world!', false);

// console.log(myInstance.property1);                // logs 'Hello world!'
// console.log(myInstance instanceof MyConstructor); // logs 'true'
// console.log(myInstance.constructor);              // logs 'MyConstructor'
// console.log(myInstance.__proto__);              // logs constructor function

// EXP. 3
// ----Using apply to append an array to another
// // without using Apply()
// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push(elements);
// console.info(array); // ["a", "b", [0, 1, 2]]

// // using Concat => concat creat a new array not changing existing array1
// const array1 = ['a', 'b'];
// const elements1 = [0, 1, 2];
// console.info(array1.concat(elements1)); // ["a", "b", [0, 1, 2]]
// console.info(array1); // ["a", "b"]

// // Using Apply()
// const array2 = ['a', 'b'];
// const elements2 = [0, 1, 2];
// array2.push.apply(array2, elements2);
// console.info(array2); // ["a", "b", 0, 1, 2]



// EXP. 4
// ---Math.max()
// let arr = [1,2,3,4,5]
// console.log(Math.max(arr)) // NaN because Math.max() accept arguments separate not array
// // [1] using Spread opertator
// console.log(Math.max(...arr))
// // [2] using apply() accept arguments as array or array like object
// console.log(Math.max.apply(Math,arr))
// console.log(Math.max.apply(null,arr))
// // Note Argument limit in js 65536 

// [3]----------------------------Bind()
/* 
The bind() function creates a new bound function. 
Calling the bound function generally results in the execution of its wrapped function.
*/

// EXP. 1
// ----bound function
// should be var x = 10 not let x = 10; because we want x to be added to global object
// var x = 10;
// let obj = {
//   x : 20,
//   getX : function(){
//     return this.x
//   }
// }
// console.log(obj.getX()) // 20
// let globalX = obj.getX;
// console.log(globalX()) // 10 because excuted in global object and this.x and this refer to global object
// // to solve this problem use bind()
// let objX = obj.getX.bind(obj)
// console.log(objX()) // 20

// EXP. 2
//---partial applied function 
// you can use bind() and bound function to add 3rd parameters to pre-specified no. of arguments in function
// function sum(param1, param2){
//   return param1 + param2
// }
// console.log(sum(2,3,20)) // 5 because it accept only 2 arguments
// let sumResult = sum.bind(null,20)
// console.log(sumResult(5)) // 25 by passing old parameters to bound function (2,3) = 5

// EXP. 3
// **** using bind to callBack function
// function MyObject (){
//   this.name = 'MyObjectName';
//   this.myProperty = 'property';
// };
// MyObject.prototype.doStuff = function (action) {
//   console.log(this.name + ' is ' + action + '!');
// }
// var obj = new MyObject();
// // here we are calling setTimeout and after delay 1 second there is no this.name 
// setTimeout(obj.doStuff, 1000, 'awesome1');
// // here we are calling callBack function immedialtly 
// setTimeout(obj.doStuff.call(obj,'awesome2'), 1000); 
// // here we bind this (which refer to obj) to function and ready once setTimeout invoke callBack function
// setTimeout(obj.doStuff.bind(obj), 1000, 'awesome3'); 
// // to understand EXP. 3 see below Implicit Binding & Explicit Binding

// reference (https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262)

// EXP. 4 
// -----using bind with addEventListener 
// let obj = {
//   theName : "soliman",
//   age : 33,
//   func : function () {
//     console.log(`my Name is ${this.theName} and my age is ${this.age}`)
//   }
// }
// let btn = document.getElementById("bind")
// // here we used bind beacuse now this refer to element that recive click and we want this to refer to obj
// btn.addEventListener('click',obj.func.bind(obj) )
// // if you use call or apply function will invoked immedialtly and give you output before clicking on element
// btn.addEventListener('click',obj.func.call(obj) )

// let arr = [1,2,3,4]
// let obj = {
//   theName : "Soliman",
//   age: 33
// }
// arr.map(function(el) {console.log(this)},obj)

// EXP. 5
// bind can be used as constructor see link below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

// EXP. 6
// shortcut to function for exp. slice
// function args(){
//   // [1] shortcut with Apply()
//   // let arr = Array.prototype.slice.apply(arguments)
//   // console.log(arr)
//   // Shortcut with bind()
//   // let slice = Function.prototype.apply.bind(Array.prototype.slice) // slice now is bound function
//   // let arr = slice(arguments)
//   // console.log(arr)
// }
// args(1,2,3,4)


// -----------------------Implicit Binding & Explicit Binding-------------
// [1] Implicit Binding
// Implicit binding occurs when dot notation is used to invoke a function.

// [2] Explicit Binding
// Explicit binding of this occurs when??.call(),??.apply(), or??.bind() are used on a function.

/* 
This is all about where a function is invoked. 
Often, early programmers worry about where the function was declared. 
Perhaps the function was declared in a specific file or a particular object. 
Surely this changes it's this!
*/

// Eyeballing This ( Steps to know this refer to what)
/*
1. Is there a dot? Look to the left. That's this.
2. Do you see .call() or .apply()? What's passed in before the first comma? Thats this.
3. Does the function stand alone when it's invoked? Then what's your global context? That's this.

Note : bind creates a persistent this context, 
we can't eyeball it. We have to go back and find where this is bound.
*/

// -------using forEach on Object
// let obj = {
//   0 : "A",
//   1 : "B",
//   2 : "C",
//   length : 3
// }
// let arr = [1,2,3]

// Array.prototype.forEach.call(obj, (ele)=> console.log(ele))
// arr.forEach((ele)=> console.log(ele))

// ------------difference between Map and Set

/* 
---------------------Maps - Like Objects they have keys and values---------------
    (unique keys)
    .size
    .set(key, value)
    .delete(key)
    .get(key)
    .has(key)
    .keys() - returns Iterator with array of keys
    .values() - returns Iterator with array of values
    .entries() - returns Iterator with array of [key, value]
    .clear()
    .forEach()

// An Array or other iterable object whose elements are key-value pairs. 
// (For example, arrays with two elements, such as [[ 1, 'one' ],[ 2, 'two' ]].) 
// Each key-value pair is added to the new Map.

let obj = {
  prop1 : "D",
  prop2 : "E",
  prop3 : "F",
}
let map = new Map(Object.entries(obj))
console.log(map)

------------------------Sets - Like Arrays they have values-------------------
    (unique values) - remove non-unique values from array
    .size
    .add(value)
    .delete(value)
    .entries() - returns Iterator with array of [value, value]
    .values() - returns Iterator with array of values
    .has(value)
    .clear()
    .forEach()

// Set Constructor accept one argument (If an iterable object is passed, 
// all of its elements will be added to the new Set.)
let arr = ["A","B","C"]
let set = new Set(arr)
console.log(set)

*/

// --- return undefined
/* 
All Function in JS return by Default undefined unless you tell the function to return something else
except Constructor when you use new it return instance
*/


// --------------Chaining Objects and Methods together
// let myObj = function(nm){
//   this.name = nm;
//   //when used with 'new' it will return an instance
// }

// myObj.prototype.capitalize = function(){
//   this.name = this.name.substring(0,1).toUpperCase() + this.name.substring(1);
//   return this;
// }

// myObj.prototype.upper = function(){
//   this.name =  this.name.toUpperCase();
//   return this;
// }

// myObj.prototype.getName = function(){
//   console.log(this.name);
// }

// let bob = new myObj('bob');
// let cole = new myObj('cole');

// // without (retun this) in capitalize and Upper Functions you have to seperate them
// bob.capitalize()
// bob.upper()
// bob.getName()

// // with (retun this) in capitalize and Upper Functions you can chain them
// cole.capitalize().upper().getName()


// there is an Built in Exp. for Chaining Methods like sort() - sort() change array and return it
// let arr = [4,2,3,1]
// arr.sort().forEach((ele)=>console.log(ele))

// -----------home-Made iterator with generator
/*
So your code basically means that the iterator of NumbersFromOne is defined as a generator. 
Instead of manually having to define a function which returns a next and other properties

Returning the generator creates the next function automatically for. 
This allows you to yield when you need to.
*/
//  Old Way without generator
// var NumbersFromOne = {
//   [Symbol.iterator]: function () {
//     var i = 1;
//     return {
//         next: function() {
//             if( i < 4){
//               return { value: i++, done: false };
//             }else{
//               return { value: undefined, done: true };
//             }
//         }
//     };
//   }
// };
// let ite = NumbersFromOne[Symbol.iterator]()
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())

// // new Way with Generator
// var NumbersFromOne1 = {
//   [Symbol.iterator]: function* () {
//     for (let i = 1; i < 4 ; ++i) yield i;
//   }
// };
// let ite1 = NumbersFromOne1[Symbol.iterator]()
// console.log(ite1.next())
// console.log(ite1.next())
// console.log(ite1.next())
// console.log(ite1.next())

// -----------For.....in loop

/* 
The for...in statement iterates over all enumerable properties of an object 
that are keyed by strings (ignoring ones keyed by Symbols), 
including inherited enumerable properties. 
Objects created from built???in constructors like Array and Object have inherited 
non???enumerable properties from Object.prototype and String.prototype, 
such as String's indexOf() method or Object's toString() method. 

** Iterating over own properties only :
if (obj.hasOwnProperty(prop)){} => the inherited properties are not displayed.
or if(Object.prototype.hasOwnProperty.call(myObject, prop)){}
in case myObject has overwritten the inherited hasOwnProperty() method.

var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// OR 

for (const prop in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}
*/

//--------------------------Before and After Spread operator--------------
// // [1] Array of Arguments
// function sum(x,y,z){
//   return x + y + z
// }
// let args = [1,2,3]
// // Before Spread Operator
// console.log(sum.apply(null,args))
// // After Spread Operator
// console.log(sum(...args))

// // [2] Combine two Arrays
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// // Before Spread Operator
// let arr3 = arr1.concat(arr2)
// // After Spread Operator
// let arr4 = [...arr1,...arr2]

// [3] Adding Array at the beginning of another array
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// // Before Spread Operator
// Array.prototype.unshift.apply(arr1,arr2)
// // After Spread Operator
// arr1 = [...arr2,...arr1]
// console.log(arr1)

// [4] clone new Object
/*
It copies own enumerable properties from a provided object onto a new object.
Note that Object.assign() triggers setters, whereas spread syntax doesn't.
*/
// // before Spread Operator
// let obj ={
//   a : "A",
//   b : "B"
// }
// let clone = Object.assign({},obj)
// clone.c = "C"
// console.log(obj)
// console.log(clone)

// // After Spread Operator (ES2018)
// let obj1 = {
//   a : "A",
//   b : "B"
// }
// let clone1 = {...obj1}
// clone1.c = "C"
// console.log(obj1)
// console.log(clone1)

//[5] array of parameters with new Operator
// Before Spread Operator
/*
it's not possible to directly use an array and apply() (apply() does a [[Call]] and not a [[Construct]])
check the EXP. how to use array of parameters with new Operator without Spread Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/ 
// After Spread Operator
// let dateFields = [1970, 0, 1];  // 1 Jan 1970
// let d = new Date(...dateFields);


// ----------Spread operator is not suitable for copying multidimensional arrays
/* 
here a is array of arrays and when we take a copy of array using spread operator we are taking
shallow copy of array put child arrays(arrays inside the parent array) we are taking deep copy
so when we change one of child arrays from b it will be changed also at a
*/
// let a = [[1], [2], [3]];
// let b = [...a];
// b.shift().shift()
// console.log(a) // [[],[2],[3]]
// console.log(b) // [[2],[3]]

// ----------------------------Callee and Caller------------------
/* 
[1] Callee : 
The arguments.callee property contains the currently executing function. 
This is useful when the name of the function is unknown, 
such as within a function expression with no name (also called "anonymous functions").

[2] Caller :
The function.caller property returns the function that invoked the specified function. 
It returns null for strict, async function and generator function callers.
*/


// function test(a,b,c){
//   console.log(arguments)
//   console.log(arguments.callee) // like console.log(test) // test
//   console.log(arguments.callee.caller) // like console.log(test.caller) // null
//   function inside(d,e,f){
//     console.log(arguments)
//     console.log(arguments.callee) // inside
//     console.log(arguments.callee.caller) // test
//   }
//   inside("Hussein","Mohamed","Ahmed")
// }
// test("Mohamed","Ahmed","Soliman")
// console.log(test.length) // retrun arguments length
// console.log(test.name) // return function name

// now you can refer to anonymous functions by arguments.callee
// let arr = [1,2,3,4]
// arr.map(function(){
//   console.log(arguments.callee) 
// })

// No arguments object returned from Arrow function
// let arrowFunc = (a,b,c,d)=>{
//   console.log(arguments)
// }
// arrowFunc(1,2,3,4) // Error

// ----------------[[Call]] and [[Construct]]-------------
/*
In technical terms, functions in Javascript are defined by the two internal methods 
[[Call]] and [[Construct]] . Any object with a [[Call]] method is called a function, 
and any function that additionally has a [[Construct]] method is called a constructor??. 
The [[Call]] method determines what happens when you invoke an object as a function, 
e.g. foo(args) , while [[Construct]] determines what happens when you invoke it as 
a new expression, i.e. new foo or new foo(args) .
For ordinary function definitions??, calling [[Construct]] will implicitly create a new object
whose [[Prototype]] is the prototype property of the constructor function 
if that property exists and is object valued, or Object.prototype otherwise. 
The newly created object is bound to the this value inside the function???s local environment. 
If the function returns an object, the new expression will evaluate to that object, 
otherwise, the new expression evaluates to the implicitly created this value.
As for the prototype property, that is implicitly created whenever you define an ordinary 
function. Each newly defined function has a property named ???prototype??? defined upon it
with a newly created object as its value. That object in turn has a constructor property 
which points back to the original function. Note that this prototype property is not the 
same as the [[Prototype]] slot. In the previous code example, Foo is still just a function, 
so its [[Prototype]] is the predefined object Function.prototype .
*/

// -------why we can not use Apply with new keyword-------------
/* 
[[Call]] is invoked via Date(???) whereas [[Construct]] is invoked via new Date(???). 
If you were to attempt to [[Construct]] a Date via new Date.apply(???, dateFields), 
it actually invokes [[Construct]] on the Function.prototype.apply method, 
not the Date object, which does not properly initialize a Date object, 
but rather it attempts to initialize an object with [[Prototype]] equal to 
apply.prototype which is undefined since apply() is not a constructable function, 
and therefore throws a TypeError.
*/

/* ------Steps for new Keyword
1. Creates a blank, plain JavaScript object.
2. Adds a property to the new object (__proto__) that links to the constructor function's prototype object
3. Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
4. Returns this if the function doesn't return an object.
*/

// ---------------------------------------Reflect.construct()-------------------
/*
Reflect.construct(target , args , newTarget)

Reflect.construct() allows you to invoke a constructor with a variable number of arguments. 
(This would also be possible by using the spread syntax combined with the new operator.)
The static Reflect.construct() method acts like the new operator, but as a function. 
It is equivalent to calling new target(...args)

let obj = new Foo(...args)
let obj = Reflect.construct(Foo, args)

Return value
A new instance of target (or newTarget, if present), 
initialized by target as a constructor with the given argumentsList.
*/

// ---------Reflect.construct() vs Object.create()
/*
* Reflect.construct() like new Constructor() so new.target will refer to constructor of
of target (or newTarget, if present)

* Object.create() not like new Constructor so new.target will refer to undefined

*/
// function OneClass() {
//   this.name = 'one'
//   console.log(new.target)
//   console.log(this)
// }

// function OtherClass() {
//   this.name = 'other'
// }
// let args = [1,2,3,4]
// Calling this:
// let obj1 = Reflect.construct(OneClass, args, OtherClass)

// // ...has the same result as this:
// let obj2 = Object.create(OtherClass.prototype)
// OneClass.apply(obj2, args)

// console.log(obj1.name)  // 'one'
// console.log(obj2.name)  // 'one'


// console.log(obj1 instanceof OneClass)  // false
// console.log(obj2 instanceof OneClass)  // false

// console.log(obj1 instanceof OtherClass)  // true
// console.log(obj2 instanceof OtherClass)  // true


// ----------------------Encapsulation----------------------

/* 
- Class Fields are Public by Default
- Guards the Datat against illegal Access
- Helps to Achieve the target without revealing its complex details
- will reduce human errors
- make the app more flexible
- simplifies the app
*/


// class User {
//   // to declare private property
//   #passWord;
//   constructor(id,userName, passWord){
//   this.id = id;
//   this.userName = userName;
//   this.#passWord = passWord;
//   }
//   /* method to get private property (here we used parseInt to get number only of user input)
//   so we used Encapsulation not only to hide the password but also to reduce human errors 
//   if the user input a string not numbers because for exp if we want to multiply it 
//   the result will be NaN */
//   getPass(){
//     return parseInt(this.#passWord)
//   }
//   #privatMethod(){
//     return "i Am Private Method"
//   }
//   getPrivateMethod(){
//     return this.#privatMethod()
//   }
// }

// // let user1 = new User(1,"Soliman","1234 lool")
// // console.log(user1.id)
// // console.log(user1.userName)
// // console.log(user1.getPass())
// // console.log(user1.getPass() * 2)
// // console.log(user1.getPrivateMethod())

// class Admin extends User {
//   constructor(id,userName, passWord,age){
//     super(id,userName, passWord)
//     this.age = age
//   }
// }
// let admin1 = new Admin(1,"Soliman","1234 lool", 33)
// console.log(admin1.passWord) // undefined
// console.log(admin1.getPass()) // 1234
// console.log(admin1.privatMethod) // undefined
// console.log(admin1.getPrivateMethod()) // "i Am Private Method"



// -------------Asyn Iterators for Big Data--------------
// you have really big data and you need to fetch a lot of times
// based on Youtube Video(https://youtu.be/u2hwYeN1P-I)
//https://jsonplaceholder.typicode.com/posts
//retrieves 100 records
//let's pretend that there are millions of records
// let posts = {};
// posts[Symbol.iterator] = function(){
//   const URL = "//jsonplaceholder.typicode.com/posts";
//   return {
//     next: async function(){
//       //early pre-emptive move
//       let rand = Math.random();
//       if(rand > 0.7){
//         return {
//           value: undefined,
//           done: true
//         };
//       }
//       let request = new Request(URL+`?r=${rand}`, {
//         method: 'GET',
//         mode: 'cors'
//       });                
//       let response = await fetch(request);
//       //need to add catch()
//       let data = await response.json();
//       console.log('array of posts fetched', data);
//       return {
//         value: data,
//         done: false
//       }
//     }
//   }
// }
// let output = document.getElementById('output');
// let main = document.querySelector('.main');
// main.addEventListener('click', de);        
// function de(ev){
//   //start getting data
//   //output.textContent += JSON.stringify(d);
//   let iterator = posts[Symbol.iterator]();          
//   (async function getData(){
//     let data = await (iterator.next());
//     if(data.value && !data.done){
//       output.textContent += '\r\n' + JSON.stringify(data.value);
//       console.log('getData', data.value);
//       setTimeout(getData, 2000);
//     }else{
//       console.log( 'Done:', data.done );
//       output.textContent += '\r\n DONE.';
//     }
//   })();
// }

// -----------------------------???Typed Array-------------------------------
/* 
Typed Arrays in JavaScript accept only one data type look exp. of restricted data type in type array :  

Int8Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array
-128 to 127

Uint8Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
0 - 255

Uint8ClampedArray - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
0 - 255

Int16Array - like Int8Array but 16 bits in length
-32768 to 32767
Uint16Array - like Uint8Array but 16 bits in length
0 to 65535

Int32Array - like Int8Array but 32 bits in length
-2147483648 to 2147483647
Uint32Array - like Uint8Array but 32 bits in length
0 to 4294967295

unsigned means non-negative int

clamped means (If you are trying to set one element to a clamped array to any value outside of the range 0-255, it will simply default to 0 or 255 (depending on whether the value is smaller or larger))

Float32Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
1.2x10-38 to 3.4x10 38

Float64Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
5.0x10 -324 to 1.8x10 308

ArrayBuffer - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
- used to represent a generic, fixed-length raw binary data buffer.

DataView - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView

Typed Arrays are used by: WebGL, Canvas, Web Audio API, XMLHttpRequests, Fetch API,  WebSockets, Web Workers, Media Source API and File APIs. 
*/

//new Int8Array(length(bytes) | buffer | TypedArray);
// array of 8-bit integers
// most Array methods are available on TypedArrays too

// let buffer = new ArrayBuffer(16);
// //create a 16 byte buffer

// let dv1 = new DataView(buffer);
// //create a DataView to be able to access/set whole buffer
// let dv2 = new DataView(buffer, 10, 3);
// //start at slot 10, get 3 bytes


// dv1.setInt8(11, 42);
// //put "42" in slot 11 of the buffer through view1
// let num = dv2.getInt8(1);
// console.log(num)
// console.log( dv2.getInt8(0))
// console.log( dv2.getInt8(2))
// //retrieve the 42 from the 2nd byte in view2 which was 
// //the 11th byte in the buffer

//--------------------Private Variable inside Factory Function with Closure -------------------
/* 
In JavaScript, a closure is a function that references variables in the outer scope from 
its inner scope. The closure preserves the outer scope inside its inner scope.
JavaScript engine uses the scope to manage the variable accessibility.
normally, a local variable only exists during the execution of the function.
The magic of this is closure. In other words, the sayHi() function is a closure.
A closure is a function that preserves the outer scope in its inner scope.
function greeting() {
    let message = 'Hi';
    function sayHi() {
        console.log(message);
    }
    return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable
*/

// function Factory(x){
//   let _privateVariable = x;
//   return {
//     prop1 : _privateVariable,
//     prop2 : function(){
//       console.log(_privateVariable)
//     }
//   }
// }
// let obj = Factory(10)
// obj.prop2()

// ------------------------Closure with Loops-------------------

/* [1] Function inside Function
this will work normally because here where are using setTimeout function inside
another function so we are creating closure which preserves the outer scope inside its inner scope.
so this will work even if we use var not let because we already create a closure (function inside function)
*/
// let myNames = ["Mohamed","Ahmed","Soliman","Hussein"]
// for(var i =0 ; i < myNames.length; i++){
//   myFunc(i,myNames[i])
// }
// function myFunc(index,name){
//   setTimeout(function(){
//     console.log(`The Index : ${index} and the name : ${name}`)
//   },1000*index)
// }
/* [2] Using Let
this will work normally because of using let : let is block scope and create separate scope 
for the code block which create a closure and the closure preserves the outer scope inside its inner scope
*/
// let myNames2 = ["Mohamed","Ahmed","Soliman","Hussein"]
// for(let i =0 ; i < myNames2.length; i++){
//   setTimeout(function(){
//     console.log(`The Index : ${i} and the name : ${myNames2[i]}`)
//   },1000*i)
// }

/*
this will not work normally will return index 4 and undefined 4 times because we are usning var
and var is not block scope so will not create seperate scope or create closure so when setTimeout
excute will search at var i inside global scope and i in global scope after loop will be 4
and there is no myNames3[4] so myNames3[4] = undefined

*/
// let myNames3 = ["Mohamed","Ahmed","Soliman","Hussein"]
// for(var i =0 ; i < myNames3.length; i++){
//   setTimeout(function(){
//     console.log(`The Index : ${i} and the name : ${myNames3[i]}`)
//   },1000*i)
// }

// ----to Solve this Problem you have 4 options : 

// [1] Using let instead of var

// [2] using bind method
// because once the setTimeout function excute in future we already bound(thisArg, arg1) to it
// let myNames = ["Mohamed","Ahmed","Soliman","Hussein"]
// for(var i =0 ; i < myNames.length; i++){
//   setTimeout((function(index){
//     console.log(`The Index : ${index} and the name : ${this[index]}`)
//   }).bind(myNames,i),1000*i)
// }

// [3] passing parameters to setTimeout
// like concept of binding we pass the value of i each loop to setTimeout Function once it excute in future it has it's i value
// let myNames = ["Mohamed","Ahmed","Soliman","Hussein"]
// for(var i =0 ; i < myNames.length; i++){
//   setTimeout(function(index){
//     console.log(`The Index : ${index} and the name : ${myNames[index]}`)
//   },1000*i,i)
// }

// [4] Using IIFE
// IIFE will create a new scope for each setTimeout execution
// let myNames = ["Mohamed","Ahmed","Soliman","Hussein"]
// for(var i =0 ; i < myNames.length; i++){
//   (function(index){
//     setTimeout(function(){
//       console.log(`The Index : ${index} and the name : ${myNames[index]}`)
//     },1000*i)
//   })(i)
// }
// a good link for this problem
// https://discuss.codecademy.com/t/var-and-let-in-a-loop-working-differently/550468/8

// ---------------Filter vs some vs find vs findIndex----------------
/*
* Filter will return found element or array of found elements and will continue the loop till end of array

* Find will return found element only of first match not array of found elements 
not like Filter will return an array of all matches and will not continues the loop till the end

*FindIndex will return the index of first Match if not found return -1 like indexOf method

* Some will return true once found first match and will not continue the loop till the end
*/
// let names = ["Mohamed","Ahmed","Soliman","Hussein"]
// console.log(names.indexOf("Ahmed")) // 1
// let arrOfObjs = [
//   {id : 1 , name : "Mohamed"},
//   {id : 2 , name : "Ahmed"},
//   {id : 3 , name : "Soliman"},
//   {id : 4 , name : "Hussein"}
// ]
// //  will return -1 because this object is not the same object inside arrOfObjs (assigned be reference)
// let toBeFound = {id : 2 , name : "Ahmed"}
// console.log(arrOfObjs.indexOf(toBeFound)) 
// let obj = {
//   lastName : "Hussein"
// }

// // to solve this problem you can use filter or some or find or findIndex

// [1] Filter
// let count = 0;
// let filterFound = arrOfObjs.filter(ele => {
//   count++
//   if(toBeFound.id === ele.id){
//     return true
//   }else{
//     return false
//   }
// })
// console.log(filterFound,"After Looping", count,"Times") // 4 times

// [2] Some
// count = 0;
// let someFound = arrOfObjs.some((ele,index) =>{
//   count++;
//   if(toBeFound.id === ele.id){
//     console.log(arrOfObjs[index],'After Looping',count,'Times') // 2 times
//     return true
//   }else{
//     return false
//   }
// })
// console.log(arrOfObjs[count-1],'After Looping',count,'Times') // 2 times

// [3] Find
// count = 0;
// let findFound = arrOfObjs.find((ele) =>{
//   count++;
//   if(toBeFound.id === ele.id){
//     return true
//   }else{
//     return false
//   }
// })
// console.log(findFound,'After Looping',count,'Times') // 2 times

// [4] findIndex
// count = 0;
// let findIndexFound = arrOfObjs.findIndex((ele,index) =>{
//   count++;
//   if(toBeFound.id === ele.id){
//     return true
//   }else{
//     return false
//   }
// })
// console.log(arrOfObjs[findIndexFound],'After Looping',count,'Times') // 2 times

// ---note : you can use thisArg with filter ,find, some, findIndex
// let filterFound = arrOfObjs.filter(function(ele) {
//   if(this.lastName === ele.name){
//     return true
//   }else{
//     return false
//   }
// },obj)
// console.log(filterFound)

// ----------------escape sequence in javascript-----------------
/*
\b Backspace 
\f Form Feed 
\n New Line 
\r Carriage Return
\t Horizontal Tabulator 
\v Vertical Tabulator 
\' Single quote 
\" Double quote 
\\ Backslash

* Carriage return (\r): moves the cursor to the beginning of the line
* Line Feed (\n): moves the cursor down to the next line 
* Form Feed  :"On printers, load the next page. In some terminal emulators, 
it clears the screen." (truncates the string on Safari.)
* Backspace : "Move the cursor one position leftwards." (ignored on Safari.)
*/

// ------------------------trimStart and trimEnd---------------------
/* 
white space : space, tab , no-Break space , LF, CR => depending on which operator system

* Carriage return (\r): moves the cursor to the beginning of the line
* Line Feed (\n): moves the cursor down to the next line 

A CR immediately followed by a LF (CRLF, \r\n, or 0x0D0A) moves the cursor down to the next 
line and then to the beginning of the line.

non-breaking spaces can't be split on separate lines
non-breaking spaces will not be "collapsed" like regular spaces will
*/

// let nbsp = "\u00A0" // \xa0 in hex
// let cr = "\u000D" // \x0D in hex
// let lf = "\u000A" // \x0A in hex
// let tab = "\t" // \x09 in hex

// let str = `${tab}.i am a front-end developer.${nbsp}`
// let str1 = `\t.i am a front-end developer.${nbsp}`
// console.log(str)
// console.log(str.trim())
// console.log(str.trimStart())
// console.log(str.trimEnd())

// -------------------Clock-------------
// you can use it in your clock (count down in vs folder on desktop)

/*
 * Converting seconds into proper time values like a digital clock
 * 00:01:03
*/

// let timmy = setInterval(showTime, 1000);
// let seconds = 3595;

// function showTime() {
//      //update the time as hours, minutes, and seconds 00:00:00
//   seconds++;
//   let hours = Math.floor(seconds / 3600);
//   let mins = Math.floor(seconds / 60) - (hours * 60);
//   let secs = Math.floor(seconds % 60);
//   let output = hours.toString().padStart(2, '0') + ':' +
//   mins.toString().padStart(2, '0') + ':' +
//   secs.toString().padStart(2, '0');
//   console.log(output);
// } 

// --------------Chained Variable Declaration--------------
/*
=> z will be added to global object because we didn't declare z with var or let
JS engine will search for variable with name z in local scope will not find variable z
then will go to global scope also will not find variable z so will add z as property to 
global object

=> b like z will be added as property to global scope

* let and var are function scope but let is block scope var is not block scope
* because var is function scope will not added to global scope but if it's inside block or 
in global scope will be added to global scope
*/
// (function f1(){
//   let x = 1;
//   var y = 2;
//   z = 3
//   var a = b = 4
// })()
// console.log(window.z)
// console.log(window.b)
// if(true){
//   let f = 5;
//   var g = 6
// }
// var k = 7;
// console.log(window.g)
// console.log(window.k)

// --------------------Conditional Operand Selectors----------------
/*
(&&) will look first at first value :
* if truthy value will render second value 
* if falsy value will render first value

(||) will render first truthy value if no truthy value will render last falsy value
*/

// console.log( true && true) // true
// console.log( false && true) // false
// console.log( true || false) // true
// console.log( false || true) // true
// console.log("#######")
// console.log( 0 && true) // 0
// console.log( 0 && false) // 0
// console.log( 1 && true) // true
// console.log( 0 || false) // false
// console.log( 1 || true) // 1
// console.log("#######")
// console.log( 0 && "text") // 0
// console.log( 1 && "text") // "text"
// console.log( 0 || "text") // "text"
// console.log( 1 || "text") // 1
// console.log("#######")
// console.log( false && "text") // false
// console.log( true && "text") // "text"
// console.log( false || "text") // "text"
// console.log( true || "text") // true

// -----------------------charCodeAt and codePointAt------------
/**
 * Character Codes and Code Points 
 * str.charCodeAt(index) //good for UTF-8  (0 - 65535 or 0xFFFF) for normal characters
 * str.codePointAt(index) //better for UTF-16 (0 - 1114111 or 0x10FFFF) for different characters like Emoji
 * str.charAt(index)
 *
 * String.fromCharCode(code) //good for UTF-8 (0 - 65535 of 0xFFFF)
 * String.fromCodePoint(code) //better for UTF-16 (0 - 1114111 or 0x10FFFF) better for Emoji
 */
// Emoji is bigger than 65535 so it will be 2 charachters
// let emojis = "???????????????????????";
// let str = "ab????C";

// console.log(str.length); // 5 because ???? divided to 2 charachter
// console.log(
//   str.charAt(0),
//   str.charAt(1),
//   //  position 2 and 3 is ???? (because it's divided to 2 charachter)
//    str.charAt(2), // ? because it half of ????
//    str.charAt(3), // ? because it half of ????
//   str.charAt(4)
// );

// let cs = str.charCodeAt(0);
// console.log(cs, cs.toString(16));

// let cca = emojis.charCodeAt(0);
// let cpa = emojis.codePointAt(0);
// console.log(cca, cpa, cca.toString(16), cpa.toString(16));

// let char3 = String.fromCharCode(cs);
// console.log(char3); // a
// let char1 = String.fromCharCode(cca);
// let char2 = String.fromCodePoint(cpa);
// console.log(char1, char2); // ? ????

// -----------------------------For Await of Loop-------------------------

// let arr = [
//   new Promise(resolve =>setTimeout(resolve,4000,"One")),
//   new Promise(resolve =>setTimeout(resolve,1000,"Two")),
//   new Promise(resolve =>setTimeout(resolve,1000,"Three"))
// ];

// for(let p of arr ){
//   console.log(p) // will return Promise<pending>
// };

// (async function(){
//   for await (let res of arr ){
//     console.log(res) // will return one two three
//   }
// })();

// let myObj = {
//   //add an asyncIterator method to my object
//   [Symbol.asyncIterator]() {
//     //which will return an object that contains a method called next()
//     return {
//       i: 0 /* my counter property */,
//       next() {
//         if (this.i < 3) {
//           //return value from the next method must be an object
//           //the object should contain a value and a done property
//           return new Promise(resolve => {
//             let obj = { value: this.i, done: false };
//             this.i = this.i + 1;
//             setTimeout(resolve, 1000, obj);
//             //this timeout delay value is not set until next() is called by for await...of
//           });
//         }
//         //once our counter value is 3 or more tell whoever called next that we are done
//         return new Promise(resolve => {
//           setTimeout(resolve, 3000, { done: true });
//         });
//       }
//     };
//   }
// };

// (async function() {
//   for await (let num of myObj) {
//     console.log(num);
//   }
// })();


// ---------------------------custom event---------------------

//1. let evt = new Event('explode');
//2. let evt = new CustomEvent('explode', {detail:{speed:20, volume:40}});

// let born = new Event('born');
// //  if you want to add properties to event use CustomEvent constructor instead of Event
// // adding time:Date.now() will not give you time when this event triggered will give you time when event created
// // you can add just Date.now and add () when accessing time() property
// let died = new CustomEvent('died', {detail:{time:Date.now}});
// console.log(born) 
// console.log(died)


// document.addEventListener('DOMContentLoaded', function (){
//     let m = document.querySelector('main');
//     addParagraph(m, 'This is a paragraph.');
//     addParagraph(m, 'A new Star Wars movie is coming soon.');
//     m.addEventListener('click', function(ev){
//         removeParagraph(m, m.firstElementChild);
//     })
// });

// function addParagraph(parent, txt){
//     let p = document.createElement('p');
//     p.textContent = txt;
//     //set up and dispatch events
//     p.addEventListener('born', wasBorn);
//     p.addEventListener('died', hasDied);
//     p.dispatchEvent(born)
//     //add to screen
//     parent.appendChild(p);
// }
// function removeParagraph(parent, p){
//     // dispatch event to trigger the event
//     p.dispatchEvent(died);
//     //remove element from screen
//     parent.removeChild(p);
// }
// function wasBorn(ev){
//     console.log(ev.type, ev.target);
// }
// function hasDied(ev){
//     console.log(ev.type, ev.target, ev.detail.time());
//     //remove the listeners (its better to delete EventListener to save Memory)
//     ev.target.removeEventListener('born', wasBorn);
//     ev.target.removeEventListener('died', hasDied);
// }
// let main = document.getElementById("getEvent")
// main.addEventListener("born",function(){
//   console.log("I am Main")
// })
// console.log(main)



// // Browser version with Event Listener to call a function
// let Schwift = new CustomEvent("schwifty");
// class MyObj extends EventTarget {
//   //allowed to receive / listen for events
//   constructor() {
//     super();
//   }
//   log(ev) {
//     console.log("EVENT", ev); // Schwift Event object
//   }
// }
// // let obj = new MyObj();
// // you can also directly create obj from EventTarget constructor to be allowed to receive / listen for events
// let obj = new EventTarget();
// obj.addEventListener("schwifty", obj.log);
// obj.addEventListener("schwifty", ev => console.log(ev.type)); //"schwifty"
// setTimeout(function() {
//   obj.dispatchEvent(Schwift); //trigger the two event listeners for "schwift"
// }, 1000);

// --------------------------new Object for everyThing-------------
// let obj1 = {
//   a: "this",
//   b: "is",
//   c: "an",
//   d: "object",
//   e: "literal"
// };
// let obj2 = new Object(["object", "contructor", "one"]); // new Array("", "", "")
// let obj3 = new Object({ an: "object", literal: "again" });
// let obj4 = new Object(obj1.a); // new Object("some string")  new String("asdfas")
// let obj5 = new Object(); //same as new Object(null) or new Object(undefined)
// let obj6 = new Object(true); // new Boolean(true)

// console.log(
//   "OBJ1",
//   obj1,
//   typeof obj1,
//   obj1 instanceof Object,
//   obj1.constructor,
//   "\n"
// );

// console.log(
//   "OBJ2",
//   obj2,
//   typeof obj2,
//   obj2 instanceof Array,
//   obj2 instanceof Object,
//   Array.isArray(obj2),
//   obj2.constructor,
//   "\n"
// );

// console.log(
//   "OBJ3",
//   obj3,
//   typeof obj3,
//   obj3 instanceof Object,
//   obj3.constructor,
//   "\n"
// );

// console.log(
//   "OBJ4",
//   obj4,
//   typeof obj4,
//   obj4 instanceof String,
//   obj4.constructor,
//   "\n"
// );

// console.log(
//   "steve",
//   String("steve"),
//   new String("steve"),
//   typeof "steve",
//   typeof String("steve"),
//   typeof new String("steve"),
//   "\n"
// );

// console.log(
//   "OBJ5",
//   obj5,
//   typeof obj5,
//   obj5 instanceof Object,
//   obj5.constructor,
//   "\n"
// );

// console.log(
//   "OBJ6",
//   obj6,
//   typeof obj6,
//   obj6 instanceof Boolean,
//   obj6 instanceof Object,
//   obj6.constructor,
//   "\n" 
// );


// ------------------------Before and After Destructuring--------------
//Why Destructuring (and ES6) is Awesome

// let person = {
//   id: 123,
//   name: "Leslie",
//   dob: new Date("1985-01-01").valueOf(),
//   age: 44,
//   salary: 55000,
//   department: "Parks and Recreation",
//   hometown: "Pawnee"
// };


// ---ES5 version
// function savePersonES5(someObj) {
//   let id = Date.now();
//   if (someObj.id) {
//     id = someObj.id;
//   }
//   let name = someObj.name;
//   if (!name) {
//     name = "Blank";
//   }
//   let dob = someObj.dob ? someObj.dob : new Date("2000-01-01").valueOf();
//   //save it in localStorage for later use
//   const KEY = "someRandomUniqueString";
//   let jsonStr = JSON.stringify({ id: id, name: name, dob: dob });
//   // localStorage.setItem(KEY, jsonStr);
//   console.log(jsonStr)
// }
// savePersonES5(person);

// ----ES6 Version
// function savePersonES6({id = Date.now(),name = "Blank",dob = new Date("2001-01-01").valueOf()}) {
//   const KEY = "someRandomUniqueString";

//   let jsonStr = JSON.stringify({ id, name, dob });
//   // localStorage.setItem(KEY, jsonStr);
//   console.log(jsonStr)
// }
// savePersonES6(person);

// --------Symbol.iterator how it works--------------
/* The Symbol.iterator is a function that returns a next() function.

The Symbol.iterator method is called automatically by for..of.

The spread operator and for...of statements call the iterable protocol of an object. Some objects, like Array, String, Set and Map have built in iterable protocols. That means that they have the Symbol.iterator method.

1. When for..of starts, it calls that method once (or errors if not found). The method must return an iterator ??? an object with the method next.
2. Onward, for..of works only with that returned object.
3. When for..of wants the next value, it calls next() on that object.
4. The result of next() must have the form {done: Boolean, value: any}, where done=true means that the iteration is finished, otherwise value is the next value.
*/

// ------------------------------Numeric Seperator---------------------
// you can add _ between numbers to make it easy to read and will not effect anything
// let num = 1_000_000_000
// console.log(num)
// console.log(num + 1)

// -------------------------------Optional Chaining--------------
/*
we have two exp. 
[1] 1st exp. is array 
* before Optional Chaining : we have to check first if arr1[0] has 
property called label using if condition

* After Optional Chaining : we can use ?. and it will search automatically if 
arr1[0] has property called label if exist will return it's value to variable 
propValue if not exist will return undefined

[2] 2nd Exp. is object 
* you can check for property name using ?. if if exist will return it's value to variable 
grandChild if not exist will return undefined

* it's very usefull in methods if the method does not exist and use ?.() instead of . 
will not thorw an Error will do nothing but using () directly will throw an Error
*/
// let arr1 = [
//   { label: 'ONE' },
//   { label: 'TWO' },
//   { label: 'THREE' },
//   { label: 'FOUR' },
//   { label: 'FIVE' }
// ]

// before Optional Chaining
// function hasLabel(arr){
//   if(arr[0].label){
//     let propValue = arr[0].label
//     console.log("Found", propValue)
//   }
// }
// hasLabel(arr1)


// // Using Optional Chaining
// function hasLabel2(arr){
//   let propValue = arr[0]?.label
//   if(propValue){
//     console.log("Found", propValue)
//   }
// }
// hasLabel2(arr1)

// let obj1 = {
//   prop1 : 1,
//   prop2 : 2,
//   prop3 : {subProp1 : 3 , subProp2 : {subSubProp1 : 4 }},
//   method1 : function(){
//     console.log("I Am Method 1")
//   }
// }
// let grandChild = obj1.prop3.subProp2.subSubProp1
// let grandChild2 = obj1?.prop3?.subProp2?.subSubProp1
// let grandChild3 = obj1?.prop3?.subProp2?.subSubProp2
// let grandChild4 = obj1.prop3.subProp2.subSubProp2
// console.log(grandChild) // 4
// console.log(grandChild2) // 4
// console.log(grandChild3) // undefined
// console.log(grandChild4) // undefined
// obj1.method1()
// // obj1.method2() // Error
// obj1.method2?.() // No Error


/*
more complicated exp. from this video ( https://youtu.be/G662_abEci0)
const dataArr = [
  { label: 'ONE' },
  { label: 'TWO' },
  { label: 'THREE' },
  { label: 'FOUR' },
  { label: 'FIVE' }
];
const dataObj = {
  4: { label: 'I am Number Four' },
  7: { label: `What's in the box?` },
  m: () => {
    console.log('custom method');
  },
  top: { mid: { deep: 123 } }
};

const addPara = (num, hex) => {
  // let txt = 'default';
  // if(dataArr && dataArr[num-1]) {
  //   txt=dataArr[num-1].label
  // }
  // let txt = dataArr[num - 1]?.label;
  let txt = dataObj[num]?.label;
  if (txt) {
    let p = document.createElement('p');
    p.style.backgroundColor = hex; //8 digit hex
    p.id = `_${num}`; // _4, _5, _6, _7
    p.textContent = txt;
    document.body.appendChild(p);
  }
  //console.log(dataObj?.toplevel?.mid?.deep);
  //if (dataObj && dataObj.top && dataObj.top.mid && dataObj.top.mid.deep) {
  //}
  dataObj.m?.();
  dataObj.f?.();
};

const handleClick = ev => {
  let num = Math.floor(Math.random() * 7) + 1; // 1 - 7
  let id = '_'.concat(num); // _3
  let hex = randColour(); // 8 digit hex
  console.log(id, hex);
  let div = document.getElementById(id);
  div ? (div.style.backgroundColor = hex) : addPara(num, hex); // or void 0
  //addPara.call(null, num, hex); //addPara(num, hex)
};

const randColour = () => {
  let clr = Math.floor(Math.random() * Math.pow(2, 24));
  let red = (clr >> 16).toString(16).padStart(2, '0');
  let green = ((clr >> 8) & 255).toString(16).padStart(2, '0');
  let blue = (clr & 255).toString(16).padStart(2, '0');
  let alpha = Math.floor(Math.random() * 200 + 55)
    .toString(16)
    .padStart(2, '0'); //alpha is a value 0-100% but written as num 0-255
  // and in hex that means 00 - FF. 50% is 128 in decimal or 80 in Hex
  // https://codepen.io/chriscoyier/pen/XjbzAW - ref chart for percentages
  //console.log(red, green, blue, alpha);
  return `#${red}${green}${blue}${alpha}`;
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', handleClick);
});
*/

// ----------------------Custom Sorting--------------------
/* when use sorting it's under the hood convert elements inside the array to string so here 
elements inside array is objects and when converted to string using toString() all of them 
will convert to [Object Object] so using sort() with custom function will not do anything 

the custom function should return postive or negative number or zero  
number > 0 sort element1 before element2 | number < 0 sort element1 before element2 | === 0 keep original order
*/

// const people = [
//   { id: 12, name: 'Billy', dob: '1998-10-05' },
//   { id: 123, name: 'Bart', dob: '1993-02-15' },
//   { id: 45, name: 'Belinda', dob: '1996-01-31' },
//   { id: 67, name: 'Bonnie', dob: '1998-04-09' },
//   { id: 89, name: 'Brenda', dob: '1996-07-08' },
//   { id: 34, name: 'Bobby', dob: '1994-09-12' },
//   { id: 234, name: 'Blake', dob: '2000-01-01' },
// ];

// const log = console.log;

// log('\n\n built-in sort method');
// log(people.sort());

// log('\n\n sort by name');
// log(people.sort(byName));

// log('\n\n sort by id');
// log(people.sort(byId));

// log('\n\n sort by date');
// log(people.sort(byDate));

// log('\n\n sort by birthday as it occurs during the year');
// log(people.sort(byBirthday));

// function byName(a, b) {
//   //alphabetically by name
//   if (a.name > b.name) {
//     return 1;
//   } else if (b.name > a.name) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function byId(a, b) {
//   //numerically by id
//   return parseInt(a.id) - parseInt(b.id);
// }

// function byDate(a, b) {
//   //chronologically by year, month, then day
//   return new Date(a.dob).valueOf() - new Date(b.dob).valueOf(); //timestamps
// }

// function byBirthday(a, b) {
//   //by month and then by day
//   let d1 = new Date(a.dob); // 1993-02-15T00:00:00Z =>   1993-02-14T20:00:00EST
//   let d2 = new Date(b.dob);
//   // always when you want to get time from instance (d1,d2) of Date constructor (Date)
//   // use d1.getUTCDate() instead of d1.getDate() because when you create instances (d1,d2)
//   // without adding time will add default T00:00:00Z and if you live in region time less 
//   // than UTC so when you try to use d1.getDate() the day will be less 
//   //  like 1993-02-15T00:00:00Z =>   1993-02-14T20:00:00EST but using d1.getUTCDate() will not

//   log(d1.getDate(), d1.getUTCDate(), d1.getMonth(), d1.getUTCMonth());
//   if (d1.getUTCMonth() > d2.getUTCMonth()) {
//     return 1;
//   } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
//     return -1;
//   } else {
//     //same month
//     return d1.getUTCDate() - d2.getUTCDate();
//   }
// }

// ---------------------------flat() with level -----------------
//Array.prototype.flat() to flat multi dimension array
// let numbers = [
//   1,
//   2,
//   [3, 4, 5],
//   [6, 7],
//   8,
//   9,
//   [
//     [10, 11],
//     [12, 13],
//   ],
// ];
// // level number
// let arr1 = numbers.flat(); // default flat(1)
// let arr2 = numbers.flat(2);
// console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, Array(2), Array(2)]
// console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 

// -------------------------------------Array.prototype.flatMap()-----------------

// Array.prototype.flatMap()  equivalent to  myArray.map().flat(1)

// let movies = [
//   'Dog Soldiers',
//   ['In Bruges', 'From Paris with Love', 'Layer Cake'],
//   'The Big Lebowski',
//   '',
//   '    ',
//   'Memento, The Platform,Fight Club, ',
//   'Hotel Rwanda, Moon, Under the Skin',
//   'Lady Bird',
//   ['Platoon', 'Wall-E'],
// ];
// let arr = movies.flatMap((entry) => {
//   if (Array.isArray(entry)) {
//     return entry;
//   } else if (typeof entry === 'string' && entry.trim() === '') {
//     // this to remove '','    ', because when you return [] and use flat() flat will remove rempty arr
//     return []; //remove the empty strings
//   } else {
//     //other strings
//     return entry
//       .split(',')
//       // this to remove space before , The Platform,
//       .map((txt) => txt.trim())
//       // this to , ' after Fight Club
//       .filter((txt) => txt != '');
//   }
// });
// console.log(arr);

// --------------------------------Memoization----------------------------------

/**
 * Memoization - save the results of your function
 * to improve performance.
custom function if you give it same arguments instead if run the function again it will give
you the result saved in memo object 
 */

// const myFunc = (function buildFunc() {
//   const memo = {};
//   return (args) => {
//     //this is the function that will be myFunc
//     let key = getKey(args);
//     if (memo[key]) {
//       return memo[key];
//     } else {
//       let sum = 0;
//       for (let i = args[0]; i > 0; i--) {
//         sum += args[0] * args[1];
//       }
//       memo[key] = sum;
//       return sum;
//     }
//   };
// })();
// const getKey = ([a, b]) => {
//   //we are always expecting to get two values
//   let key = `${a}-${b}`;
//   return key;
// };


// // here same arguments
// let start = Date.now();
// let result1 = myFunc([9000008, 100001]);
// let result2 = myFunc([9000008, 100001]);
// let result3 = myFunc([9000008, 100001]);
// let result4 = myFunc([9000008, 100001]);
// let result5 = myFunc([9000008, 100001]);
// let result6 = myFunc([9000008, 100001]);
// let result7 = myFunc([9000008, 100001]);
// let end = Date.now();
// console.log(end - start); // will give you time less than next version

// // here different arguments
// start = Date.now();
// result1 = myFunc([9000001, 100001]);
// result2 = myFunc([9000002, 100001]);
// result3 = myFunc([9000003, 100001]);
// result4 = myFunc([9000004, 100001]);
// result5 = myFunc([9000005, 100001]);
// result6 = myFunc([9000006, 100001]);
// result7 = myFunc([9000007, 100001]);
// end = Date.now();
// console.log(end - start);

// ------Dynamic Object properties-------
// let obj = {}
// let str = "Soliman"
// let str2 = "hussein"
// // here will take "str" itself as name of key
// obj.str = "test"
// // using [] will take value of variable str as name of key
// obj[str] = "test2"
// console.log(obj)
// // you can add variable directly to object and name of variable will be the key of the property 
// // and value of variable will be the value of property this called (Property value Shorthand )
// let obj2 = {str,str2}
// console.log(obj2)

// function addProp(obj,prop,value){
//   obj[prop] = value
//   // if we use obj.prop will create property key called prop (will not use prop argument)
//   obj.prop = "Mohamed"
// }
// addProp(obj,"str3","Ahmed")
// console.log(obj)

// --------------------?? nullish coalescing operator--------------------
// // in ternanry operator if truthy value => Yes if falsy value => No
// // in nullish coalescing operator if null or undefined(not all falsy value) return value after ?? if not null or 
// // undefined return that value
// let result1 = null ? "Yes" : "No" 
// let result2 = null  ?? "Yes" 
// let x = 10;
// let result3 = x ?? "Yes"
// x = NaN
// let result4 = x ?? "Yes"
// console.log(result1) // No
// console.log(result2) // Yes
// console.log(result3) // 10
// console.log(result4) // NaN because x is NaN (falsy but not null or undefined)

// // exp. of using nullish coalescing operator inside function
// let current;

// function f(){
//   let result = current ?? getNum() // because current in undefined so will invoke getNum()
//   console.log(result)
// }

// function getNum(){
//   current = Math.floor(Math.random() * 100)
//   return current
// }

// f()

// ---------------------tagged template literal ------------------
// template literal is using ``

// let num = 41;
// let str1 = `"\t" and "\n" are escape sequences. ${num}`;
// let str2 = `"\\t" and "\\n" are escape sequences. ${num}`;
//  // instead of using escape sequences you can use tring.raw before ``
// let str3 = String.raw`"\t" and "\n" are escape sequences. ${num}`;
// // &{} inside can be variable or expression
// let str4 = `The meaning of life is ${num + 1}.`;
// const log = console.log;

// // log(1, str1);
// // log(2, str2);
// // log(3, str3);
// // log(4, str4);

// let first = 'ham';
// let second = 'pineapple';
// let txt = f`I don't like pizza with ${first} and ${second}.`;
// log(txt);
// function f(strings, ...expressions) { // strings or expression is array
//   // return strings 
//   // return expressions
//   // return `I don't like pizza with ${expressions[0]} and ${expressions[1]}.`
//   // return `I don't like pizza with ${expressions.join(" and ")}.`
//   return expressions.reduce((acc, exp, idx) => {
//     return acc + exp.toUpperCase() + strings[idx + 1];
//   }, strings[0]);
// }


//--------------------Identifiers and IdentifierNames in JavaScript--------------
  /*************
   * //Reserved keywords
   * break, case, catch, class, const, continue, debugger, default, delete, do, else,
   * export, extends, finally, for, function, if, import, in, instanceof, new, return,
   * super, switch, this, throw, try, typeof, var, void, while, with, yield,
   * enum, true, false, null,
   *
   * //In strict mode
   * implements, interface, let, package, private, protected, public, static
   *
   * //In modules
   * await
   *
   * //In older versions of ECMAScript
   * abstract, boolean, byte, char, double, final, float, goto, int, long, native,
   * short, synchronized, throws, transient, volatile
   */

// var $;
// let _;
// let aas;
// let abc1;
// let $as3423d_;
// let abc123_ = 'something';
// const STEVE = Symbol();

// // with object you can number as key because it will converted to string anyway
// let obj = {
//   $: 'a',
//   _: 'b',
//   abc: 'c',
//   [abc123_]: 'd',
//   [STEVE]: 'e',
//   1: 'f',
//   '1.213423': 'g'
// };

// ----------------------------type casting and coercing in JavaScript----------------
//
// String(), +, Number(), +, -, Boolean(), !, !!
// toString(), valueOf()
// parseInt(), parseFloat()
// unary plus, logical NOT, addition operator, comparison operators
// let log = console.log;
// let n = '56';
// //log(-n, +n);
// //                              String,         Number,       Boolean
// let obj = { a: 1, b: 2 }; // '[object Object]'    NaN           true
// let emptyObj = {}; //        '[object Object]'    NaN           true
// let arr = [1]; //            '1'                  1             true 
// let arr2 = [1, 2, 3]; //     '1,2,3'              NaN           true 
// let emptyArr = []; //        ''                   0             true
// let str = 'hello'; //        'hello'              NaN           true
// let emptyStr = ''; //        ''                   NaN           false   ('43'=>43, '0'=>0)
// let num = 1; //              '1'                  1             true
// let zero = 0; //             '0'                  0             false
// let T = true; //             'true'               1             true
// let F = false; //            'false'              0             false
// //  null    //               'null'               0             false
// //  undefined   //           'undefined'          NaN           false
// //  NaN       //             'NaN'                NaN           false


/**
 * Plus vs Concatenation
 * exp1 + exp2
 * if either exp1 or exp2 is a string then treat the '+' as a concatenation
 *  coerce both values to Strings as needed
 *
 * if neither exp1 or exp2 is a string then treat the '+' as an addition operation
 *  coerce both values to Numbers as needed
 *
 */

//log(F + num);
//"234234".toLowerCase()
// Falsey values - false, 0, '', null, undefined, NaN
// Truthy values - Everything else....
// Boolean() != new Boolean(), String() != new String(), Number() != new Number()
// Boxing of Primitives
// Boolean() == !!  (! will flip truthiness too)
// Number() == +  (- will flip sign too)
// String() == .toString() unless null was set as the prototype of the Object

//log(Boolean(234), Boolean(0), new Boolean(0));
//log(true && Boolean(new Boolean(0)));

// && compares the two operands and then actually returns
// the second if the first is truthy

// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// log(!arr < +T || !!arr > +emptyArr);
//unary plus 17, logical NOT 17, less than 12, greater than 12, logical OR 6
// (false < 1 || true > 0)
// ( 0 < 1 || 1 > 0 )
// ( true || )
// true

/* look at the link + will work from right to left and check 
=> if + between 2 numbers will be addition 
=> if one of them string will be concatenate
=>  one oe them neither number or string will be unary plus */
// log(1 + - + + + - +1); //2


// -----------------------Premissions with Bitwise-----------------------------
/**
 * Using a single integer to represent multiple permissions
 * based on binary values using bitwise operators
 *
 *  & bitwise AND - if both the top and bottom bit are 1, result is 1
 *  | bitwise OR - if either the top and bottom bit or both are 1, result is 1
 *  ^ bitwise XOR - if only one of the bits are 1, result is 1
 * 0101
 * 0100 & =   0100
 *
 * 0100
 * 1110 | = 1110
 *
 * 0101
 * 0001 ^ = 0100
 *
 * 0 - 0000
 * 1 - 0001 x
 * 2 - 0010 x
 * 3 - 0011
 * 4 - 0100 x
 * 5 - 0101
 * 6 - 0110
 * 7 - 0111
 * 8 - 1000 x
 * 9 - 1001
 * 10 - 1010
 */

//  const READ = 1; //   0001
//  const DRINK = 2; //  0010
//  const SING = 4; //   0100
//  const DELETE = 8; // 1000

// class Person {
//   constructor(name, access = 0) {
//     this.name = name;
//     this.access = access;
//   }
//   getAll() {
//     return {
//       [READ]: !!(this.access & READ),
//       [DRINK]: !!(this.access & DRINK),
//       [SING]: !!(this.access & SING),
//       [DELETE]: !!(this.access & DELETE),
//     };
//   }
//   addPerm(perm) {
//     this.access = this.access | perm;
//   }
//   removePerm(perm) {
//     if (this.getAll()[perm]) {
//       this.access = this.access ^ perm;
//     }
//   }
// }

// let steve = new Person('Steve', 5);
// let joanne = new Person('Joanne');
// joanne.addPerm(DRINK);
// joanne.addPerm(SING);
// joanne.addPerm(DELETE);
// steve.addPerm(SING);

// joanne.removePerm(READ);
// steve.removePerm(READ);

// console.log(steve.access, steve.getAll());
// console.log(joanne.access, joanne.getAll());

 // console.log(steve.getAll()[READ]);
 // console.log(joanne.getAll()[READ]);

// ----------------------globalThis-----------------
// in node.js version will not add var to global object but will be added to window object
// varaible without keyword like (n) will be added to global object in both

//-----node.js version 

// let l = 10;
// var v = 20;

// (function(){
//   n = 30;
//   console.log(this)
//   console.log(global)
//   console.log(globalThis)
//   console.log(globalThis.l) // undefined
//   console.log(globalThis.v) // undefined
//   console.log(globalThis.n) // 30
// })();

// // ---browser version

// (function(){
//   n = 30;
//   console.log(this)
//   console.log(window)
//   console.log(globalThis)
//   console.log(globalThis.l) // undefined
//   console.log(globalThis.v) // 20
//   console.log(globalThis.n) // 30
// })();

// -------------------Reflect Object-----------------
// Used with Proxy and help to write dynamic code (you can control objects by passing them as argument to reflect)
// console.log(Reflect)
// Reflect Object - built-in object that provides methods for interceptable JavaScript operations
// All methods are static
// has no constructor cannot use `new`
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
// const log = console.log;

// let alex = {
//   name: 'Alex',
//   id: 93,
//   hello: function (a, b) {
//     console.log(`Hello my name is ${this.name}. ${a} ${b}`);
//   },
// };

// log(Reflect.ownKeys(alex));
// log(Reflect.get(alex, 'id'));
// log(Reflect.set(alex, 'id', 94));
// log(Reflect.get(alex, 'id'));
// log(Reflect.has(alex, 'name'));
// Reflect.apply(alex.hello, alex, Reflect.ownKeys(alex));
// Reflect.defineProperty(alex, 'age', { value: 30, enumerable: false });
// log(Reflect.get(alex, 'age'));

/**
Reflect.apply(targetFunc, thisArg, argList); //for functions
Reflect.get(target, key, handler); //handler is Proxy. get the value of a property
Reflect.set(target, key, value, handler); //handler is Proxy. set the value of a property
Reflect.has(target, key); // check if it has a property
Reflect.delete(target, key); //like the delete operator
Reflect.ownKeys(target); // enumerate through the properties
Reflect.defineProperty(target, key, {propertyDescriptor}); //like Object.defineProperty
 */


// -------------------slice vs splice-------------- 
/*
slice return shallow copy of original array
splice return deleted part and cahnge original array
*/

// //[1] Slice
// let arr = [1,2,3,4]
// let arrSlice = arr.slice()
// arrSlice[0] = 5
// console.log(arr) // [1,2,3,4]
// console.log(arrSlice) // [5,2,3,4]

// //[2] Splice
// let arr2 = [1,2,3,4]
// let arrSplice = arr2.splice(0,4,5,6,7,8)
// console.log(arrSplice) // [1,2,3,4] return deleted part
// console.log(arr2) // change original array

// -------------------------Record and Tuples (new)-------------------
/*
Tuple like Array ----------Record like Object
let tuple = #[1,2,3]
let record = #{a:1, b:2, c:3}

- Tuple and Record are primitive value so thy are assigned by value not reference
- Tuple and Record are immutable but Array and Object mutable
- nesting:  only primitive value allowed to be nested you can not add normal array inside tuple
but you can add tuple or any another primitive value inside it
let tuple = #[1,2,3,#[4,5]]
- JSON.parseImmutable() like JSON.parse but return tuple or Record instead of array or Object
- because they are primitive they have wrapper Object to have methods(Boxing) but some methods
that change the original array will be replaced to another method for exp. push will be replaced
with pushed and return a new array not changing the original one
 */

// --------------------------------------Proxy------------------------------

/*
The Proxy object allows you to create an object that can be used in place of the original 
object, but which may redefine fundamental Object operations like getting, setting, 
and defining properties. Proxy objects are commonly used to log property accesses, validate, 
format, or sanitize inputs, and so on.
*/

// let obj = {a:"Mohamed",b:"Ahmed",c:"Soliman"}
// let handler = {
//   get : function(target,prop,reciver){
//     // console.log(target) // obj
//     // console.log(prop) // property inside obj
//     // console.log(reciver) // proxy
//     if(prop in target){
//       return target[prop].toUpperCase() // make changes to property using proxy
//     }else{
//       return " No Such Prop in Object"
//     }
//   },
//   set : function(target,prop,reciver){
//     // console.log(target) // obj
//     // console.log(prop) // property inside obj
//     // console.log(reciver) // the new value passed to property
//     if(prop in target){
//       console.log("Editing old property")
//       target[prop] = reciver.toLowerCase()
//     }else{
//       console.log("Creating new property")
//       target[prop] = reciver.toLowerCase()
//     }
//   }
// }
// let proxy = new Proxy(obj,handler)
// // console.log(proxy.a)
// // console.log(proxy.d)
// proxy.a = "MIDO"
// proxy.d = "HUSSEIN"
// console.log(obj)

// ---using IIFE to protect original object and not changing it
// let obj = {a:"Mohamed",b:"Ahmed",c:"Soliman"}
// let objIffe = (function(myObj){
//   let handler = {
//     get: function(target , prop, reciver){
//       if(prop in target){
//         return target[prop].toUpperCase() // make changes to property using proxy
//       }else{
//         return " No Such Prop in Object"
//       }
//     },
//     set: function(target , prop, reciver){
//       if(prop in target){
//         target[prop] = reciver.toLowerCase()
//         console.log("Editing old property",myObj) // here will change property of myObj not original obj
//       }else{
//         target[prop] = reciver.toLowerCase()
//         console.log("Creating new property",myObj) // here will add property to myObj not original obj
//       }
//     }
//   }
//   return new Proxy(myObj,handler)
// })({a:"Mohamed",b:"Ahmed",c:"Soliman"});
// objIffe.a = "Mido"
// console.log(obj) // original object will not be changed

// how to validate age using proxy
// let objects = [
//   {id:123,name:"Mohamed",age:33},
//   {id:456,name:"Ahmed",age:-34},
//   {id:789,name:"Soliman",age:135}
// ];
// objects = objects.map(person=> new Proxy(person,{
//   get : function(target,prop,reciver){
//     if(prop in target){
//       if(prop === "age" && target[prop] > 0 && target[prop] < 130){
//         // return target[prop]
//         return Reflect.get(...arguments) // like Reflect.get(target,prop,reciver)
//       }else{
//         throw new RangeError("Age Is Not Valid")
//       }
//     }
//   },
//   set : function(target,prop,reciver){
//     return true
//   }
// }))
// objects.forEach(person=>{
//   try{
//     console.log(person.age)
//   }catch(err){
//     console.log(err.name, err.message)
//   }
// })

// ---proxy with function
// let fContext = {a : 7}
// let sum = function (a,b){
//   return a + b
// }
// let proxyFunc = new Proxy(sum,{
//   apply: function(target,thisArg,args){
//     // console.log(target) // sum function
//     // console.log(thisArg) // fContext => from bind() or call()
//     // console.log(args) // arguments 
//     return sum(thisArg.a,...args) * 10
//   }
// }).bind(fContext) // you can use bind() here or use call() when you call proxyFunc
// console.log(sum(1,2)) // 3
// console.log(proxyFunc(2)) // 90
// console.log(proxyFunc.call(fContext,2)) // 90


// ---------------------Destructring with promise and array Methods-----------------
/*
Destructuring allows us to see inside an object
or array when it is being passed to a function.

This can be combined with calls to Array methods
and Promise.then methods to great effect.
*/
// const log = console.log;
// let people = [
//   { id: 1, name: 'Leonard', phd: true, partner: 'Penny' },
//   { id: 2, name: 'Howard', phd: false, partner: 'Bernadette' },
//   { id: 3, name: 'Sheldon', phd: true, partner: 'Amy' },
//   { id: 4, name: 'Raj', phd: true, partner: 'Cinnamon' },
// ];
// let nums = [12, 34, 56, 78, 90];

// let n = nums.map((number) => {
//   log(number);
// });
// let ppl = people.map(({ name: nm, partner: pt }) => {
//   log(nm, '&', pt);
// });

// let url = 'http://jsonplaceholder.typicode.com/users'
// fetch(url)
//   .then((resp) => {
//     if (!resp.ok) throw new Error(resp.statusText);
//     // Error This error means you have resolved the promise (in this case, you use resp.json()) more than once.
//     // console.log(resp.json()) 
//     return resp.json();
//   })
//   .then(([first, {name:secondName}, ...rest]) => {
//     //...rest MUST be the last argument for desctructuring
//     // rest[rest.length-1] would be the last element.
//     log(first);
//     log(secondName);
//   })
//   .catch(log);

// ---------------------Reducer Function--------------------
/*
Context for non-Archer fans
https://www.youtube.com/watch?v=4IUNc6yxp2g
https://www.youtube.com/watch?v=8FYJfEHOuY0
*/
// const log = console.log;

// const reducer = (state, action) => {
//   if (action === 'DARKEN') {
//     return state + 'er';
//   }
//   if (action === 'LIGHTEN') {
//     return state.replace('er', '');
//   }
//   return state;
// };

// let dark = 'dark';
// dark = reducer(dark, 'DARKEN');
// log(dark);
// dark = reducer(dark, 'LIGHTEN');
// dark = reducer(dark, 'LIGHTEN');
// log(dark);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'DARKEN':
//       if (state.agent === 'Archer' && state.turtleneckType === 'tactical') {
//         return {
//           ...state,
//           turtleneckBlackness: state.turtleneckBlackness + 10,
//         };
//       }
//       if (state.agent !== 'Archer') {
//         return state;
//       }
//     case 'LIGHTEN':
//       return state;
//   }
//   return state;
// };

// let state = {
//   agent: 'Archer',
//   turtleneckType: 'tactical',
//   turtleneckBlackness: 100,
// };
// state = reducer(state, { type: 'DARKEN' });
// state = reducer(state, { type: 'DARKEN' });
// state = reducer(state, { type: 'DARKEN' });
// log(state);

// ----------------------Curring & partial Function & Closure------------------------
/**
 * Currying vs Partial Application
 * Closures
 *   A function which returns a function that
 *   can has access to the returned function's scope.
 *   function example(param){
 *     let a = 123;
 *     return function(otherParam){
 *       //both param and otherParam and a are available here
 *     }
 *   }
 *
 * Partial Application
 *   Uses closures.
 *   Returned function is partially applied to a new value,
 *   meaning that the value passed to the original function
 *   is already attached to the returned `partially applied` function
 *
 * Currying
 *   The process of taking a multiple argument function and
 *   breaking it up into a series of single argument partially
 *   applied functions.
 */
// const log = console.log;

//  //Simple demo - the things we would want to curry
// function bakeChocolateCupcakeWithVanilla(cakeType, cakeFlavor, icingType) {
//   return `Made a ${cakeFlavour} ${cakeType} with ${icingType} icing.`;
// }
// function bakeVanillaCakeWithLemon(cakeType, cakeFlavor, icingType) {
//   return `Made a ${cakeFlavour} ${cakeType} with ${icingType} icing.`;
// }
//  //curry it
// function bake(cakeType) {
//    //partially applied
//   return function (cakeFlavour) {
//      //partially applied
//     return function (icingType) {
//       return `Made a ${cakeFlavour} ${cakeType} with ${icingType} icing.`;
//     };
//   };
// }
// let bakeCake = bake('cake');
// let bakeCupcake = bake('cupcake');
// let bakeMuffin = bake('muffin');

// let chocCake = bakeCake('chocolate');
// let vanillaCake = bakeCake('vanilla');
// let chocCupcake = bakeCupcake('chocolate');
// let carrotMuffin = bakeMuffin('carrot');

 // log(chocCake('strawberry'));
 // log(chocCake('vanilla'));
 // log(chocCupcake('chocolate'));
 // log(chocCupcake('orange'));

 // log(bake('cake')('chocolate')('vanilla'));
 // log(bake('cupcake')('chocolate')('cherry'));
 // log(bake('muffin')('carrot')('vanilla'));

 //More realistic example
// import fetch from 'node-fetch';

/**
  * Possible resources are posts, comments, albums, photos, todos, and users
  * @param {string} endpoint which resource to get from http://jsonplaceholder.typicode.com/
  * @returns {function} partially applied function
  */
// let jsonPlaceholder = async (endpoint) => {
//   let url = `http://jsonplaceholder.typicode.com/${endpoint}`;
//   let resp = await fetch(url);
//   let data = await resp.json();
//   return (num) => {
//     return data
//       .slice(0, num)
//       .map((item) => {
//         let label = item.name || item.title;
//         return `<p>${endpoint} :: ${label}</p>`;
//       })
//       .join('\n');
//   };
// };

// const sleep = (milliseconds) => {
//   return new Promise((resolve) => setTimeout(resolve, milliseconds));
// };

// async function init() {
//   let posts = await jsonPlaceholder('posts');
//   let users = await jsonPlaceholder('users');

//   log(posts(2));
//   log(users(4));
// }
// init()

// ------------------------DOM by Steve Griffith-----------------

// ----------getAttributeNode vs getAttribute-----------
// let div = document.getElementById("hello")
// let idNode = div.getAttributeNode("id")
// let idValue = div.getAttribute("id")
// console.log(idNode.nodeType) // 2
// console.log(idValue) // hello

// ------------childeren vs childNodes vs childElementCount----------
// let div = document.querySelector(".childCount")
// console.log(div.childNodes.length) // 5 will count elements and also txt nodes and carriage return \n
// console.log(div.children.length) // 2 will count only elements
// console.log(div.childElementCount) // 2 will count only elements

// -------------contains------------
// accept node as argument and return boolean
// let div = document.querySelector(".test")
// let txt = div.childNodes[0]
// let txt2 = "test"
// console.log(div.contains(txt)) // true
// console.log(div.contains(txt2)) // Error passing string not node to contains

// ---------insertBefore and replaceChild and cloneNode
// let ul = document.querySelector("ul")
// let two = ul.children[1]
// let three = ul.children[2]
// let addLi = document.createElement("li")
// addLi.textContent = "before Two"
// let replaceli = document.createElement("li")
// replaceli.textContent = "replace three"
// // 1st param is the element we want to add and 2nd param is the element we want to add before
// ul.insertBefore(addLi,two) // this not like two.prepend(addLi) because prepend will add (addLi) inside two element not before it
// // 1st param is new element to replace the old element(2nd param)
// ul.replaceChild(replaceli,three)

// let cloneUl = ul.cloneNode(false)
// let cloneUlAndChilds = ul.cloneNode(true)
// console.log(cloneUl) // clone only ul element without it's childs
// console.log(cloneUlAndChilds) // clone ul and it's childs

// ---------getComputedStyle----------
// let div = document.querySelector(".css")
// let style = window.getComputedStyle(div)
// console.log(style.length)
// console.log(style.item(200))
// console.log(style.getPropertyValue("color"))

// ------------------fetch using a Request and a Headers objects--------------

// //using jsonplaceholder for the data

// const uri = 'http://jsonplaceholder.typicode.com/users';

// //new Request(uri)
// //new Request(uri, options)
// //options - method, headers, body, mode
// //methods:  GET, POST, PUT, DELETE, OPTIONS

// //new Headers()
// // headers.append(name, value)
// // Content-Type, Content-Length, Accept, Accept-Language,
// // X-Requested-With, User-Agent
// let myHeader = new Headers();
// myHeader.append('Accept', 'application/json'); // here we are accepting only json files

// let req = new Request(uri, {
//     // if we use POST the JSON file will be {id:11} because no. of users from uri is 10 
//     // and using POST means add new data to server and add user no. 11
//     method: 'GET', 
//     headers: myHeader,
//     mode: 'cors' // means policy (what you are allowed to do)
// });

// fetch(req) 
//     .then( (response)=>{
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error('BAD HTTP stuff');
//         }
//     })
//     .then( (jsonData) =>{
//         console.log(jsonData);
//     })
//     .catch( (err) =>{
//         console.log('ERROR:', err.message);
//     });

// --------------------------------GeoLocation-------------------------
// geolocation.js
// How to use Navigator.geolocation
//
// let G, options, spans;

// document.addEventListener('DOMContentLoaded', init);

// function init(){
//     if(navigator.geolocation){
//         let giveUp = 1000 * 30;  //30 seconds
//         let tooOld = 1000 * 60 * 60;  //one hour
//         options ={
//             // HighendAccurcy => to use GPS but will drain the battery of user???s device ( you can use wifi to get location ) 
//             enableHighAccuracy: true,
//             // Timeout => for how long you need the browser to try to get the location 
//             timeout: giveUp,
//             // MaximumAge => when the browser fetch it will take information that cached from last time like location and in MaximumAge you determin 
//             // For how long the location valid and no need to update it 
//             // For exp. You can but update location every 24 hrs or every 5 mins 
//             maximumAge: tooOld
//         }
//         // Accept 3 parameters => 1st parameter is success Function and 2nd parameter is fail Function  and 3rd parameter is options
//         navigator.geolocation.getCurrentPosition(gotPos, posFail, options);
//     }else{
//         //using an old browser that doesn't support geolocation
//     }
// }

// function gotPos(position){
//     spans = document.querySelectorAll('p span');
//     spans[0].textContent = position.coords.latitude;
//     spans[1].textContent = position.coords.longitude;
//     spans[2].textContent = position.coords.accuracy;
    
//     spans[6].textContent = position.timestamp;
// }

// function posFail(err){
//     // fail function accept err as number => 1 : permission to access location denied by browser 
//     // 2 : can not determine the Location 
//     // 3 : take too long to determine the location (after timeout from options object ) 
//     let errors = {
//         1: 'No permission',
//         2: 'Unable to determine',
//         3: 'Took too long'
//     }
//     document.querySelector('h1').textContent = errors[err];
// }

// ---------------------Real World Ajax Fetch to Live HTML and CSS-------------------------

//fetch user data from jsonplaceholder 
//generate a user list on the web page
//add a click event to the body that will
//refresh the list each time with a random 
//number of users

// const uri = 'http://jsonplaceholder.typicode.com/users';

// let req = new Request(uri, {
//     method: 'GET',
//     mode: 'cors'
// });

// fetch(req)
//     .then( (response)=>{
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error('BAD HTTP!');
//         }
//     })
//     .then( (jsonData) =>{
//         //console.log(jsonData);
//         let ul = document.querySelector('#users');
//         let df = new DocumentFragment();
//         jsonData.forEach( (user) =>{
//             let li = document.createElement('li');
//             let pn = document.createElement('p');
//             let pue = document.createElement('p');
//             pn.textContent = user.name;
//             pue.textContent = ''.concat(user.username, ' - ', user.email);
//             pn.className = 'name';
//             pue.classList.add('info');
//             li.appendChild(pn);
//             li.appendChild(pue);
//             df.appendChild(li);
//         });
//         ul.appendChild(df);
//     })
//     .catch( (err) =>{
//         console.log('ERROR:', err.message);
//     });

//----------------------Real Life Temp Forcast------------------

// load the sample weather JSON data
// build a grid of temps over the next 24 hours
// blue background in hours where percipitation possibility is higher than 70%

// let uri = 'json/darksky-sample.json';
// let req = new Request(uri, {method:'GET'});
// let container, df;

// document.addEventListener('DOMContentLoaded', init);

// function init(){
//     container = document.getElementById('container');
//     df = new DocumentFragment();
    
//     fetch(req)
//     .then((response)=>{
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error('BAD HTTP');
//         }
//     })
//     .then((json)=>{
//         //create the weather grid
//         json.hourly.data.forEach((hour)=>{
//             //to show the temp
//             let div = document.createElement('div');
//             div.classList.add('hour');
//             let timestamp = hour.time;
//             div.id = 'ts_' + timestamp.toString();
//             let temp = parseInt(hour.temperature);
//             div.textContent = temp.toString().concat('\u00B0');
//             div.title = hour.summary;
            
//             //to show the time
//             let span = document.createElement('span');
//             let timmy = new Date(timestamp * 1000);
//             span.textContent = timmy.getHours().toString().concat(":00");
            
//             div.appendChild(span);
//             df.appendChild(div);
//         });
//         container.appendChild(df);
        
//         //highlight the times when it will be raining
//         json.hourly.data.filter((hour)=>{
//             if(hour.precipProbability > 0.5){
//                 return true;
//             }
//             return false;
//         }).map((hour)=>{
//             return hour.time;
//         }).forEach((timestamp)=>{
//             let id = 'ts_'.concat(timestamp);
//             document.getElementById(id).classList.add('precip');
//         });
        
//         //highest temp
//         let highObj = json.hourly.data.reduce((accumulator, hour)=>{
//             if(hour.temperature > accumulator.temp){
//                 return {temp: hour.temperature, time: hour.time};
//             }else{
//                 return accumulator;
//             }
//         }, {temp:-100, time:1000})
//         let id = 'ts_' + highObj.time;
//         document.getElementById(id).classList.add('hot');
//     })
//     .catch((err)=>{
//         console.log( err.message );
//     })
// }

// -----------------------CloneNode with HTML---------------
// const init = function(){
//   let t1, t2, div1, temp, div2, cln
//   t1 = document.getElementById('target1');
//   t2 = document.getElementById('target2');
  
//   div1 = document.querySelector('.advertisement');
//   //for(let i=0; i<5; i++){
//       // t1.appendChild(div1); // will move the div to target1
//       t1.appendChild(div1.cloneNode(true) ); // will take a copy and put it inside target1 and keep the original
//   //}
  
//   temp = document.querySelector('[type="text/html"]');
//   cln = temp.cloneNode(true);
//   div2 = cln.textContent; // String
//   t2.innerHTML = div2; // because of innerHTML property will convert String to HTML elements

// }

// document.addEventListener('DOMContentLoaded', init)

// -------------------------------History API---------------------------------
// console.log(location.href) // link
// console.log(location.protocol) // http: protcol decide how info transfered between server and client
// console.log(location.host) // host name
// console.log(location.port) // :5500 or befault port used by http: :80
// console.log(location.hash) // #id will scroll page to element with this id
// console.log(location.pathname) // file location on server
// console.log(location.search) // QueryString ?name=Soliman&age=33
// location.replace(new url) // will replace current page to new one
// location.reload() // will reload current page
// window.location.reload() if you pass true, then the browser loads a fresh page, 
// but if false, then the cache version is loaded...

// history.go(3) // go forward 3 steps 
// history.go(-3) // go backward 3 steps 
// history.back() // go backword 1 step // like history.go(-1)
// history.forward() // go forward 1 step // like history.go(1)
// history.state


//  pushState, replaceState, history.state, popstate, hashchange 
// http:// sub.example.com :80 /path/filename.html 
// ?query=string&num=1
// #hashvalue - comes after the querystring
// 127.0.0.1 localhost


// document.addEventListener('DOMContentLoaded', ()=>{
//   // this object will be added to history.state and you can access it
//   //history.pushState({"abc":123}, "title", url);  //add to the array
//   //history.replaceState({"abc":123}, "title", url);   //replace current entry
//   //history.pushState(null, "Title", "pretend.html");
//   //add listeners to buttons and links that navigate
//   document.getElementById("link").addEventListener('click', c);
//   //intercept initial load incase there is a hash value or state
//   //add listeners for hashchange and popstate
//   // will trigger if we press back or forward arrow from browser or link inside webpage
//   window.addEventListener("hashchange", hc); // will be triggered if hash changed in url
//   window.addEventListener("popstate", ps); // will be triggered if the whole URL changed
  
// });

// function c(ev){
//   show('clicked');
//   ev.preventDefault(); // because of this will not trigger popstate 
//   let href = ev.currentTarget.href;
//   let pid = ev.currentTarget.getAttribute("data-person");
//   show(href);
//   // history.pushState({"pid":pid}, "title", href); // will add to history list in browser
//   history.replaceState({"pid":pid}, "title", href); // will no add anything to history list will only change the current 
//   loadPerson();
// }

// function loadPerson(){
//   show('LoadPerson');
//   show(history.state.pid);
// }

// function hc(ev){
//   // ev.newURL  ev.oldURL
//   show("hashchange");
//   //location.hash
// }
// function ps(ev){
//   //  ev.state
//   show("popstate");
// }

// function show(output){
//   let p = document.createElement('p');
//   p.textContent = output;
//   document.getElementById('output').appendChild(p);
//   setTimeout(_ => {
//       document.getElementById('output').removeChild(p);
//   }, 4000);
// }

//  -------------------------Localhost = 127.0.0.1 = IP Address-----------------
/*
to try your html file on mobile phone:
you can change local host to your IP (you can get your IP from terminal by using ifconfig)
then connect you mobile phone to same wifi then open the link on your phone

or you can use MAMP application but here the phone not should be connected to same wifi
*/

// ---------------------------Vibration-----------------------------------
//check for the different versions of the vibrate api
// navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
// let div = document.getElementById("vibrate")
        
// if (navigator.vibrate) {
//     // vibration API supported
//     div.addEventListener('click', function(ev){
//             console.log('body clicked. Time to shake.');
//             //navigator.vibrate(1000); // miliseconds
//             // navigator.vibrate([500, 300, 100]); // vibarte stop vibrate
//             //navigator.vibrate(0); // stop 
//             navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]);
//         });
// }

/***
James Bond Theme
navigator.vibrate([200,100,200,275,425,100,200,100,200,275,425,100,75,25, 75,125,75,25,75,125,100,100]);

Super Mario Theme
navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]);

Darth Vader Theme
navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40, 500]);
***/


// ------------------Online and Offline Events---------------
// window.addEventListener('online',  changeStatus);
// window.addEventListener('offline', changeStatus);
        
// document.addEventListener('DOMContentLoaded', function(){
// //check for the original starting status
//   if( navigator.onLine){ // navigator has built in property called online
//     changeStatus( {type:'online'} ); // here we are creating fake object whichs has type property to be like ev.type
//   }else{
//     changeStatus( {type:'offline'} );
//   }
// });
        
// function changeStatus(ev){
// //handle the change in status   ev.type online  offline
//   document.getElementById("status").textContent = ev.type.toUpperCase();
//   let img = document.createElement("img");
//   img.src = "https://picsum.photos/g/500/300?image=0&blur";
//   let p = document.querySelector('p.img');
//   p.className = "img";
//   if( ev.type == "online"){
//     p.classList.add('online');
//   }
//   p.textContent = "STATUS IS ".concat(ev.type.toUpperCase() );
// }


// ----------------------Adjacent---------------------
// let span = document.createElement('span');
// span.textContent = 'This is a span Element.';
// let html = '<span>HTML span in a String.</span>';
// let txt = 'This is just some text.'
// let p = document.querySelector('#para');
        
// /* because we are dealing with element not just string we cannot insert same element at 2 
// different location but it will move it but you have 2 options to solve this problem :
// [1] use cloneNode(true) 
// [2] use insertAdjacentHTML because it's just string */

// p.insertAdjacentElement('beforebegin', span);   //moved from original location
// p.insertAdjacentElement('afterend', span);
// p.insertAdjacentElement('afterend', span.cloneNode(true));
// document.body.insertAdjacentElement('afterbegin', span); // will be added at the beginning of webpage
// document.body.insertAdjacentElement('afterbegin', span.cloneNode(true)); // will be added at the beginning of webpage
        
// p.insertAdjacentHTML('beforebegin', html);
// p.insertAdjacentHTML('afterend', html);
// p.insertAdjacentText('afterbegin', txt);
// p.insertAdjacentText('beforeend', txt);
        
/*****************************************
let position = 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'
Element.insertAdjacentHTML(position, htmlString);
Element.insertAdjacentElement(position, Element);
Element.insertAdjacentText(position, someText);
*****************************************/

// ------------------------Visibility change (move to another tab in browser)---------

//document.hidden  
//document.addEventListener('visibilitychange', myfunc)
//... webkitHidden            msHidden
//... webkitvisibilitychange  msvisibilitychange
// this to check if it supported in different versions of browsers
// let hidden, vChange;
// if( typeof document.hidden !== 'undefined'){
//   hidden = 'hidden';
//   vChange = 'visibilitychange';
// }else if(typeof document.webkitHidden !== 'undefined'){
//   hidden = 'webkitHidden';
//   vChange = 'webkitvisibilitychange';
// }else if(typeof document.msHidden !== 'undefined'){
//   hidden = 'msHidden';
//   vChange = 'msvisibilitychange';
// }else{
// //no support
//   hidden = null;
//   vChange = null;
// }

// if( hidden){
//   document.addEventListener(vChange, function(ev){
//   // like document.hidden but we are using hidden as variable to check will different browsers versions
//   console.log('visibilitychange', document[hidden]); 
//   if(document[hidden]){
//     //page has lost focus
//     //stop the audio or video
//   }else{
//     //page has regained focus
//     //start the audio or video
//   }
//   });
// }

// ----------------------------Upload file to server using Fetch------------------

//fetch using a Request and a Headers objects
// uploading an image along with other POST data
//using jsonplaceholder for the data

// a website to upload file to
// const url = 'https://postman-echo.com/post';

// document.addEventListener('DOMContentLoaded', init);

// function init(){
//     document.getElementById('btnSubmit').addEventListener('click', upload);
// }

// function upload(ev){
//     ev.preventDefault();    //stop the form submitting immediatly and wait to choose the file

//     //create any headers we want
//     let h = new Headers();
//     h.append('Accept', 'application/json'); //what we expect back
//     //bundle the files and data we want to send to the server
//     let fd = new FormData();
//     fd.append('user-id', document.getElementById('user_id').value);
    
//     // input element with type file (see HTML file) will have file inside it as array
//     let myFile = document.getElementById('avatar_img').files[0];
//     fd.append('avatar', myFile, "avatar.png"); // will be the name saved in server not the name of the file you uploaded
//     // $_FILES['avatar']['file_name']  "avatar.png" => this PHP
//     let req = new Request(url, {
//         method: 'POST',
//         headers: h,
//         mode: 'no-cors',
//         body: fd
//     });

//     fetch(req)
//         .then( (response)=>{
//             document.getElementById('output').textContent = "Response received from server";
//         })
//         .catch( (err) =>{
//             console.log('ERROR:', err.message);
//         });
// }


// --------------------Notification API-----------------------
//Notification objects have a close() method. SOME browser automatically close them.
//Notification Events - click, error, close, show
// if( 'Notification' in window){
    
//   if (Notification.permission === 'granted') {
//       // If it's okay let's create a notification
//       doNotify();
//   }else{
//       //notification == denied
//       Notification.requestPermission()
//           .then(function(result) {
//               console.log(result);  //granted || denied
//               if( Notification.permission == 'granted'){ 
//                   doNotify();
//               }
//           })
//           .catch( (err) => {
//               console.log(err);
//           });
//   }

// }
      
// function doNotify(){
//     let title = "The Title";
//     let t = Date.now() + 120000;    //2 mins in future
//     let options = { // not just a object it's options object passed to Notification constructor
//         body: 'Hello from JavaScript!',
//         data: {prop1:123, prop2:"Steve"},
//         lang: 'en-CA',
//         icon: './img/calendar-lg.png',
//         timestamp: t, // this prop to determine when notification appears (maybe not supported)
//         vibrate: [100, 200, 100] // vibration (maybe not supported)
//     }
//     let n = new Notification(title, options);

//     n.addEventListener('show', function(ev){
//         console.log('SHOW', ev.currentTarget.data);
//     });
//     n.addEventListener('close', function(ev){
//         console.log('CLOSE', ev.currentTarget.body); 
//     });
//     setTimeout( n.close.bind(n), 3000); //close notification after 3 seconds
// }
/*************
Note about actions param - used with webworkers/serviceworkers
actions: [
    {action: 'mail', title: 'e-mail', icon: './img/envelope-closed-lg.png'},
    {action: 'blastoff', title: 'Blastoff', icon: './img/rocket-lg.png'}]
*********************/

// --------target vs current target-----------
/*
because of bubbling up when we click on span it will fire 2 addEventListener for span and then 
will bubble up to div => target will always what you click on it but current target is THIS
in span.addEventListener this and current target will be span and 
in div.addEventListener this and current target will be div
*/
// let div = document.getElementById("currentTarget")
// let span = document.getElementById("target")

// span.addEventListener("click",function(ev){
//   console.log("Target is "+ ev.target.tagName)
//   console.log("Current Target is "+ ev.currentTarget.tagName)
//   console.log("THIS is "+ ev.currentTarget.tagName)
// })
// div.addEventListener("click",function(ev){
//   console.log("Target is "+ ev.target.tagName)
//   console.log("Current Target is "+ ev.currentTarget.tagName)
//   console.log("THIS is "+ ev.currentTarget.tagName)
// })

// ------------------------mouseOver-mouseOut vs mouseEnter-mouseLeave-----------

// Adding addEventListener to child <p> only NO Differences so far..
// document.querySelector('.enter p').addEventListener('mouseenter', entering);
// document.querySelector('.enter p').addEventListener('mouseleave', leaving);
// function entering(ev){
//     ev.currentTarget.style.borderColor = 'gold';
//     console.log('mouseenter p');
// }
// function leaving(ev){
//     ev.currentTarget.style.borderColor = 'black';
//     console.log('mouseleave p');
// }
// document.querySelector('.over p').addEventListener('mouseover', overing);
// document.querySelector('.over p').addEventListener('mouseout', outing);
// function overing(ev){
//     ev.currentTarget.style.borderColor = 'gold';
//     console.log('mouseover p');
// }
// function outing(ev){
//     ev.currentTarget.style.borderColor = 'black';
//     console.log('mouseout p');
// }

// Adding addEventListener to <div> parent also will make the difference
/*
Each time your mouse enters or leaves a child element, 
mouseover and mouseOut are triggered, but not mouseenter and mouseLeave.

=> with mouseOver-mouseOut (not good performance) 
when you move mouse from div to p will be considered as : 
1. moveOut from div
2. moveOver to p
3. moveOver again to div ( because of event bubbling) you can use ev.stopPropagation() to stop bubbling

when you move mouse from p to div will be considered as : 
1. moveOut from p 
2. moveOut from div ( because of event bubbling) you can use ev.stopPropagation() to stop bubbling
3. moveOver to div 
4. moveOut from div ( when me move mouse away)

=> with mouseEnter-mouseLeave (good performance) 
when you move mouse from div to p will be considered as :
1. mouseEnter to p
when you move mouse from p to div will be considered as : 
1 . mouseLeave from P
2. mouseLeave from div ( when me move mouse away)
*/
// document.querySelector('.enter').addEventListener('mouseenter', function(ev){
//     ev.currentTarget.classList.add('blue');
//     console.log('mouseenter div. Add blue.');
// });
// document.querySelector('.enter').addEventListener('mouseleave', function(ev){
//     ev.currentTarget.classList.remove('blue');
//     console.log('mouseleave div. Remove blue.');
// });

// document.querySelector('.over').addEventListener('mouseout', function(ev){
//   ev.stopPropagation()
//     ev.currentTarget.classList.remove('blue');
//     console.log('mouseout div. Remove blue.');
// });
// document.querySelector('.over').addEventListener('mouseover', function(ev){
//   ev.stopPropagation()
//     ev.currentTarget.classList.add('blue');
//     console.log('mouseover div. Add blue.');
//     //, ev.currentTarget.tagName, ev.target.tagName
// });

// -------------------focusin-focusout vs focus-blur----------------
/*
The events focusin and focusout are similar to mouseenter and mouseleave. They DO NOT bubble
The events focus and blur are similar to mouseover and mouseout.They DO bubble.

relatedtarget property will be available between 2 events on 2 elements can be focused
*/
// document.querySelector('.in-out input').addEventListener('focusin', goIn);
// document.querySelector('.in-out input').addEventListener('focusout', goOut);
// function goIn(ev){
//     ev.currentTarget.style.color = 'gold';
//     console.log('focusin input left');
//     if(ev.relatedTarget){
//         ev.relatedTarget.style.color = 'red';
//         console.log('Just left relatedTarget', ev.relatedTarget.id)
//     }
// }
// function goOut(ev){
//     ev.currentTarget.style.color = 'black';
//     console.log('focusout input left');
//     if(ev.relatedTarget){
//         console.log('Headed to relatedTarget', ev.relatedTarget.id);
//     }
// }

// document.querySelector('.focus-blur input').addEventListener('focus', doFocus);
// document.querySelector('.focus-blur input').addEventListener('blur', doBlur);
// function doFocus(ev){
//     ev.currentTarget.style.color = 'gold';
//     console.log('focus input right');
//     if(ev.relatedTarget){
//         ev.relatedTarget.style.color = 'red';
//         console.log('Just left relatedTarget', ev.relatedTarget.id)
//     }
// }
// function doBlur(ev){
//     ev.currentTarget.style.color = 'black';
//     console.log('blur input right');
//     if(ev.relatedTarget){
//         console.log('Headed to relatedTarget', ev.relatedTarget.id);
//     }
// }


// -------------------Touch Event-----------------
//touch events - touchstart, touchend, touchmove, touchcancel
//There is NO tap, doubletap, swipe, swipeleft, swiperight, rotate, pinch, or zoom
//You would have to create those events yourself by connecting to the touch events.
//work on devices that are touch capable
//No error on other devices because 'touchstart' is just a name like winlottery
//The event will probably just never happen on my laptop
// document.querySelector('p').addEventListener('touchstart', f);
// document.querySelector('p').addEventListener('touchend', f);
// document.querySelector('p').addEventListener('touchmove', f);

// function f(ev){
//     console.log( ev.touches, ev.type );
// }



// ------------------------------buitin EventHandler-----------------
// let obj = {
//   init: function (){
//       document.querySelector('#btn').addEventListener('click', this);
//       document.querySelector('#btn').addEventListener('focus', this);
//       document.querySelector('#btn').addEventListener('blur', this);
//   },
//   handleEvent: function(ev){ // this is builtin function so should be named handleEvent
//       switch(ev.type){
//           case 'click':
//               this.something(ev);
//               break;
//           case 'focus':
//               this.something(ev);
//               break;
//           case 'blur':
//               this.something(ev);
//               break;
//           case 'explode':
//               break;
//       }
//   },
//   something: function (ev){
//       //gets called by click event list
//       console.log('btn was', ev.type, '-ed.');
//   }
// }

// //get things started
// obj.init();


// --------------------------custom attribute-------------------
/**
dataset property names must:
1. start with "data-"
2. made of lowercase letters and hyphens, underscore, period, colon
In JavaScript reference them with getAttribute() or setAttribute()
OR dataset['property name']
OR dataset.propertyName where camelCase is used by removing the hyphen
NB: underscore, period and colon are left as-is
**/
// let h1 = document.querySelector('h1');
// let p = document.querySelector('p');

// console.log( h1.dataset ); // DomStingMap represent data for custom attributes added to elements.
// console.log( h1.dataset['time'] );
// console.log( h1.dataset.time );
// console.log( h1.getAttribute('data-time'));

// console.log( p.dataset );
// console.log( p.dataset['time-stamp']) // undefined
// console.log( p.dataset['timeStamp']) // at HTML File is time-stamp but we remove hyphen and use CamelCase
// console.log( p.dataset['time:stamp'])

// console.log( p.getAttribute('data-time-stamp'));
// console.log( p.getAttribute('data-time:stamp'));

// p.setAttribute('data-time:stamp', 'Thursday')
// p.dataset.timeStamp = 'Wednesday'; // to use dataset. you should convert time-stamp to camelCase
// p.dataset["time:stamp"] = "Sunday" // with time:stamp you cannot use p.dataset.time:stamp use instead p.dataset["time:stamp"] 
// // you can also catch attribute from CSS File look there

// -------------------------Single Page Application--------------------------
// const app = {
//   pages: [],
//   show: new Event('show'),
//   init: function(){
//       app.pages = document.querySelectorAll('.page');
//       app.pages.forEach((pg)=>{
//           pg.addEventListener('show', app.pageShown);
//       })
      
//       document.querySelectorAll('.nav-link').forEach((link)=>{
//           link.addEventListener('click', app.nav);
//       })
//       history.replaceState({}, 'Home', '#home');
//       window.addEventListener('popstate', app.poppin);
//   },
//   nav: function(ev){
//       ev.preventDefault(); // wihtout it popstate will be triggered on window.addEventListener('popstate', app.poppin);
//       let currentPage = ev.target.getAttribute('data-target');
//       document.querySelector('.active').classList.remove('active');
//       document.getElementById(currentPage).classList.add('active');
//       console.log(currentPage)
//       history.pushState({}, currentPage, `#${currentPage}`);
//       document.getElementById(currentPage).dispatchEvent(app.show);
//   },
//   pageShown: function(ev){
//       console.log('Page', ev.target.id, 'just shown');
//       let h1 = ev.target.querySelector('h1');
//       h1.classList.add('big')
//       setTimeout((h)=>{
//           h.classList.remove('big');
//       }, 1200, h1);
//   },
//   poppin: function(ev){
//       console.log(location.hash, 'popstate event');
//       let hash = location.hash.replace('#' ,'');
//       document.querySelector('.active').classList.remove('active');
//       document.getElementById(hash).classList.add('active');
//       console.log(hash)
//       document.getElementById(hash).dispatchEvent(app.show);
//   }
// }

// document.addEventListener('DOMContentLoaded', app.init);

// ------------------------------------Modal Window---------------
//

// const showModal = (ev) =>{
//   // ev.preventDefault();
//   let modal = document.querySelector('.modal');
//   modal.classList.remove('off');
//   modal.classList.add('on');
// }

// const showOverlay = (ev) => {
//   // ev.preventDefault();
//   let overlay = document.querySelector('.overlay');
//   overlay.classList.remove('hide');
//   overlay.classList.add('show');
//   showModal(ev)
// }

// const hideModal = (ev) => {
//   let modal = document.querySelector('.modal');
//   modal.classList.remove('on');
//   modal.classList.add('off');
// }

// const hideOverlay = (ev) => {
//   // ev.preventDefault();
//   ev.stopPropagation(); //don't let the click pass through.
//   let overlay = document.querySelector('.overlay');
//   overlay.classList.remove('show');
//   overlay.classList.add('hide');
//   hideModal(ev);
// }

// const init = (ev)=>{
//   document.querySelector('p').addEventListener('click', showOverlay);
  
//   document.querySelector('.overlay').addEventListener('click', hideOverlay);
//   document.querySelector('.close-btn').addEventListener('click', hideOverlay);
// }

// document.addEventListener('DOMContentLoaded', init);


// ------------------------------------SlideShow-----------------------------


/** 
This code would be in an external script 
**/
// (()=>{
//   const slideshow = {
//       items: [],
//       timmy: 0,
//       delay: 3000,
//       init: function(){
//           //check for the slideshow container div
//           if( document.querySelector('.slideshow')){
//               //create the content div
//               let divC = document.createElement('div');
//               divC.className = 'content';
//               document.querySelector('.slideshow').appendChild(divC);
              
//               //load the CSS file for the slideshow ( no need for this we added css style directly to main.css)
//               // let link = document.createElement('link');
//               // link.rel = 'stylesheet';
//               // link.href = './slideshow.css';
//               // document.head.appendChild(link);
              
//               //get the slideshow content
//               let url = 'json/slideshow.json';
//               fetch(url)
//               .then((response)=>{
//                   return response.json();
//               })
//               // data return from last then will be parameter to loadContents function
//               .then(slideshow.loadContents) 
//               .catch((err)=>{
//                   console.log('ERROR:', err);
//               });   
//           }
//       },
//       loadContents: function(data){
//           let df = new DocumentFragment();
//           data.items.forEach((item, idx)=>{
//               //add each item to the slideshow div
//               let div = slideshow.createItem(item, idx);
//               df.appendChild(div);
//           })
//           //add the slideshow items to the page
//           document.querySelector('.slideshow .content').appendChild(df);
//           //make the first one current because querySelector will catch only first match
//           document.querySelector('.slideshow-item').classList.add('current');
//           //save the array of items
//           slideshow.items = document.querySelectorAll('.slideshow-item');
//           //start the slideshow moving
//           slideshow.start();
//       },
//       createItem: function(item, index){
//           let div = document.createElement('div');
//           div.classList.add('slideshow-item');
//           div.setAttribute('data-index', index);
//           let title = document.createElement('h1');
//           title.textContent = item.title;
//           div.appendChild(title);
//           // if you want to add images
//           // let img = document.createElement('img');
//           // img.src = './img/' + item.img;
//           // div.appendChild(img);
//           let p = document.createElement('p');
//           p.textContent = item.msg;
//           div.appendChild(p);
//           return div;
//       },
//       switchItem: function(index, ev){
//           if(ev){ // this if you added any event to those slides
//               ev.preventDefault();
//           }
//           let current = document.querySelector('.current')
//           current.classList.remove('current');
//           current.classList.add('leaving');
//           setTimeout(()=>{
//               current.classList.remove('leaving');
//           }, 800);
//           slideshow.items[index].classList.add('current');
//       },
//       start: function(){
//           slideshow.timmy = setInterval(()=>{
//               let [first, ...rest] = slideshow.items; // destructring
//               slideshow.items = [...rest, first];
//               slideshow.switchItem(0);
//           }, slideshow.delay);
//       }
//   }
//   document.addEventListener('DOMContentLoaded', slideshow.init);
// })();



// ----------------------------HTML Forms and Validation----------------
/*
To link Label Tag to in Input tag at label tag add (for) attribute with the value if input???s ID
To use default validation from The Browser add attribute required 
To reset input field you can create another input with type=???reset???
*/


// const init = function(){
//   document.getElementById('button-cancel').addEventListener('click', reset);
//   document.getElementById('button-send').addEventListener('click', send);
// }

// const reset = function(ev){
//   // If the button is within a form, the default behavior is submit.
//   // If the button is not within a form, it will do nothing.
//   ev.preventDefault(); // without this clicking this button will submit the form
//   // programmatically we can reset it 
//   // This method does the same thing as clicking the form's <input type="reset"> control.
//   document.getElementById('form-user').reset();
//   //if you want to do anything else...
// }

// const send = function(ev){
//   ev.preventDefault(); 
//   ev.stopPropagation();
//   //or the click will travel to the form and the form will submit
//   let fails = validate();
//   //IF we wanted to do some async things then use a Promise with .then and .catch
//   if(fails.length === 0){
//       //good to go
//       document.getElementById('form-user').submit();
//   }else{
//       //there are some errors to display
//       fails.forEach(function(obj){
//           let field = document.getElementById(obj.input);
//           field.parentElement.classList.add('error');
//           field.parentElement.setAttribute('data-errormsg', obj.msg);
//       })
//   }
// }

// const validate = function(ev){
//   //let valid = true;
//   let failures = [];
//   //checkbox (or radio buttons grouped by name)
//   let chk = document.getElementById('input-alive');
//   // .checked .value
//   if(!chk.checked){
//       failures.push({input: 'input-alive', msg: 'Must be alive to submit.'})
//   }

//   //select
//   let select = document.getElementById('input-age');
//   // .selectedIndex  .options  .length   .selectedValue  .value
//   if( select.selectedIndex === 0 ){
//       failures.push({input:'input-age', msg:'Too young'})
//   }

//   //inputs for text, email, tel, color, number...
//   let first = document.getElementById('input-first');
//   let password = document.getElementById('input-password');
//   let email = document.getElementById('input-email');
//   //.value, .defaultValue, length of value
//   if( first.value === ""){
//       failures.push({input:'input-first', msg:'Required Field'})
//   } 
//   if( password.value === "" || password.value.length < 8){
//       failures.push({input:'input-password', msg:'Must be at least 8 chars'})
//   } 
//   if( email.value === ""){
//       failures.push({input:'input-email', msg:'Required Field'})
//   }
  
//   //return an object with details about the failures
//   console.log(failures)
//   return failures;
// }


// document.addEventListener('DOMContentLoaded', init);



// ---------------------Fetch Ajax with photos-----------------------
// let fetch = require('node-fetch');
// let url = 'https://picsum.photos/list';

// fetch(url)
// .then(response=>response.json())
// .then(data=>{
//     console.log(data.length);
//     console.log(data[0].format);
//     console.log(data[0].width);
//     console.log(data[0].height);
//     console.log(data[0].id);
//     console.log(data[0].post_url);
    
//     /*
//     //This code won't work through NodeJS
//     for(let i=0; i<10; i++){
//         let img = document.createElement('img');
//         img.src = data[i].post_url;
//         document.body.appendChild(img);
//     }
//     */
// })
// .catch(err=>{
//     console.log(JSON.stringify(err, null, 2));
// })


// ---------------------

/*************
SAMPLE URLS

1. To get the config data like image base urls
https://api.themoviedb.org/3/configuration?api_key=<APIKEY>

2. To fetch a list of movies based on a keyword
https://api.themoviedb.org/3/search/movie?api_key=<APIKEY>&query=<keyword>

3. To fetch more details about a movie
https://api.themoviedb.org/3/movie/<movie-id>?api_key=<APIKEY>
*************/
// const APIKEY is inside key.js
// let APIKEY = "b5e3456d5ee40d9b6377846684cd0a83" // register on website to get API Key
// let baseURL = 'https://api.themoviedb.org/3/';
// let configData = null;
// let baseImageURL = null;

// let getConfig = function () {
//     let url = "".concat(baseURL, 'configuration?api_key=', APIKEY); 
//     fetch(url)
//     .then((result)=>{
//         return result.json();
//     })
//     .then((data)=>{
//         baseImageURL = data.images.secure_base_url;
//         configData = data.images;
//         console.log('config:', data);
//         console.log('config fetched');
//         runSearch('godfather')
//     })
//     .catch(function(err){
//         alert(err);
//     });
// }

// let runSearch = function (keyword) {
//     let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
//     fetch(url)
//     .then(result=>result.json())
//     .then((data)=>{
//         //process the returned data
//         // document.getElementById('output').innerHTML = JSON.stringify(data, null, 4);
//         //work with results array...
//         for(let i = 0; i < 4; i++){
//           let output = document.getElementById('output')
//           let movie = document.createElement("div")
//           let img = document.createElement("img")
//           img.src = "".concat(baseImageURL,"w92" ,data.results[i].poster_path)
//           movie.innerHTML = JSON.stringify(data.results[i], ["title","release_date","vote_average"], "#");
//           // movie.innerHTML = `${data.results[i].title} is released at ${data.results[i].release_date} and his Rate is ${data.results[i].vote_average}`
//           output.append(img,movie)
//         }
//       })
// }

// document.addEventListener('DOMContentLoaded', getConfig);
/*******************************
SAMPLE SEARCH RESULTS DATA
{ "vote_count": 2762, 
    "id": 578, 
    "video": false, 
    "vote_average": 7.5, 
    "title": "Jaws", 
    "popularity": 16.273358, 
    "poster_path": "/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg", 
    "original_language": "en", 
    "original_title": "Jaws", 
    "genre_ids": [ 27, 53, 12 ], 
    "backdrop_path": "/slkPgAt1IQgxZXNrazEcOzhAK8f.jpg", 
    "adult": false, 
    "overview": "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.", 
    "release_date": "1975-06-18" 
}
****************/

// ----------------------------------JSON.parse()----------------------------------
// JSON.parse(txt, reviver function)

// beginning with the most nested properties and proceeding to the original value itself
// let pars = JSON.parse('[{"prop1" : {"prop3" : 3}},{"prop2" : {"prop4" : "Four"}}]',function(key,value){
//   console.log(key , value)
//   /** Output will be
//    * prop3 => // 3 inner most nested property 
//    * prop1 => {} 
//    * 0 => {} // this is element index 0 inside array
//    * prop4 => Four
//    * prop2 => {}
//    * 1 => {} // this is element index 1 inside array
//    * [] // the array itself
//    */
// })

// let pars = JSON.parse('[{"prop1" : {"prop3" : 3}},{"prop2" : {"prop4" : "Four"}}]',function(key,value){
//   return typeof value === "number" ? value * 2 : value
// })
// console.log(pars) //'[{"prop1" : {"prop3" : 6}},{"prop2" : {"prop4" : "Four"}}]' 


// // Restriction =>  JSON.parse() does not allow trailing commas
// // both will throw a SyntaxError
// JSON.parse('[1, 2, 3, 4, ]'); // ERROR
// JSON.parse('{"foo" : 1, }');// ERROR

// // JSON.parse() does not allow single quotes
// // will throw a SyntaxError
// JSON.parse("{'foo': 1}");// ERROR


// ----------------------------------JSON.stringfy()----------------------------------
// JSON.stringfy(value, replacer, space)

/*
The replacer parameter can be either a function or an array.
As a function, it takes two parameters: the key and the value being stringified. The object in which the key was found is provided as the replacer's this parameter.
Initially, the replacer function is called with an empty string as key representing the object being stringified. It is then called for each property on the object or array being stringified.
It should return the value that should be added to the JSON string, as follows:
* If you return a Number, String, Boolean, or null, the stringified version of that value is used as the property's value.
* If you return a Function, Symbol, or undefined, the property is not included in the output.
* If you return any other object, the object is recursively stringified, calling the replacer function on each property. */

// -------- [1]Replacer
// function replacer(key, value) {
//   // Filtering out properties
//   if (typeof value === 'string') {
//     return undefined;
//   }
//   return value;
// }

// var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
// JSON.stringify(foo, replacer);
// // '{"week":45,"month":7}'

// // If replacer is an array, the array's values indicate the names of the properties 
// // in the object that should be included in the resulting JSON string.
// JSON.stringify(foo, ['week', 'month']);
// // '{"week":45,"month":7}', only keep "week" and "month" properties

// [2] Space
/* The space argument may be used to control spacing in the final string.
* If it is a number, successive levels in the stringification will each be indented by this many space characters (up to 10).
* If it is a string, successive levels will be indented by this string (or the first ten characters of it). */


// -----toJSON() behavior
// toJSON() will work if the object has value this value is object with toJSON() method
/*
If an object being stringified has a property named toJSON whose value is a function, then the toJSON() method customizes JSON stringification behavior: instead of the object being serialized, the value returned by the toJSON() method when called will be serialized. JSON.stringify() calls toJSON with one parameter:
* if this object is a property value, the property name
* if it is in an array, the index in the array, as a string
* an empty string if JSON.stringify() was directly called on this object */

// var obj = {
//   data: 'data',

//   toJSON (key) {
//       if (key)
//           return `Now I am a nested object under key '${key}'`;
//       else
//           return this;
//   }
// };

// console.log(JSON.stringify(obj));
// // '{"data":"data"}'

// let obj1 = {obj} // {obj : {object above}}
// console.log(JSON.stringify(obj1)); // Shorthand property names (ES2015).
// // '{"obj":"Now I am a nested object under key 'obj'"}'

// let arr = [obj] // [{object above}]
// console.log(JSON.stringify(arr));
// // '["Now I am a nested object under key '0'"]'

// String Keyed Array is not enumerable
// let a = ["One","Two"]
// a["three"] = ["Four"]
// console.log(JSON.stringify(a)) // ["One","Two"]
// for( let key in a){
//   console.log(key) // 0 1 three
// }
// for( let value of a){
//   console.log(value) // one two
// }


// ----------------------Multi Language webPage----------------
// look at CSS and HTML file

// ---------------------HTML Template------------------------
/*
Template tag in HTML file will not be shown unless you append it to document.body
Template tag in HTML file have property called content (this content is document fragment)
let con = document.createElement("template")
console.log(con.content) // empty document fragmet
 */

// let bool = true

// document.addEventListener('DOMContentLoaded', ()=> {
//   if (bool) {
//       //We can use the template element in our HTML
//       let temp = document.getElementById('myTemplate');
//       let content = temp.content;
//       console.log(content); // document fragmet
//       // we used cloneNode because if we are trying to use appendChild to append same element 
//       // will not append another copy will move the element from old location to new location
//       document.body.appendChild(content.cloneNode(true));
//       document.body.appendChild(content.cloneNode(true));
//       document.body.appendChild(content.cloneNode(true));
//       document.body.appendChild(content.cloneNode(true));
//       document.body.appendChild(content.cloneNode(true));
//       document.body.appendChild(content.cloneNode(true));
//       document.body.appendChild(content.cloneNode(true));
      
//   } else {
//       //Use another method (without uing HTML Template), like manually building the elements.
//       console.log('The else is running');
//       let df = document.createDocumentFragment();
//       let div = document.createElement('div');
//       let h2 = document.createElement('h2');
//       let p = document.createElement('p');
//       h2.textContent = 'A Sub Heading';
//       p.textContent = 'Some dynamically created text.';
//       div.className = 'box';
//       h2.className = 'temp';
//       df.appendChild(div);
//       div.appendChild(h2);
//       div.appendChild(p);
//       document.body.appendChild(df);
//   }
// })


// --------------------Validate Empty Form------------------
// All the value from form are a string even in input tage type number will converted to string

// document.addEventListener("DOMContentLoaded",()=>{
//   document.getElementById("btnSubmit").addEventListener("click",processFrom)
// })

// let processFrom = function(ev){
//   ev.preventDefault()

  // console.log(document.getElementById("username").value)
  // console.log(document.getElementById("username").value.trim()) // to remove spaces before submittimg
  // // you can use this to validate that username must be longer than 6 chars
  // console.log(document.getElementById("username").value.trim().length > 6)

  // console.log(document.getElementById("select").value)
  // // you can use this to validate that you can not select 1st choice
  // console.log(document.getElementById("select").selectedIndex > 0)

//   let age = document.getElementById("age")
//   console.log(age.min)
//   console.log(age.max)
//   console.log(age.value)
//   // parseInt will give you NaN if it is an Empty string or string
//   console.log(parseInt(age.value))
//   /* you can use && in validate because if parseInt(age.value) before && is 
//   NaN (or another falsy value) will not continue this line of code
//   and will return false but if parseInt(age.value) before && is 
//   truthy value (number) will continue the line of code and check if 
//   it's > age.min */
//   console.log(parseInt(age.value) && parseInt(age.value) > age.min)
// }
// console.log(parseInt("1")) // 1
// console.log(parseInt("a1")) // NaN
// console.log(parseInt("")) // NaN
// console.log(parseInt("hi")) // NaN

// -------------------Tabbed Navigation with CSS and JS----------------
// let tabs, sections;
        
// let init = function(){
//     //find all the tabs (li.tab)
//     tabs = document.querySelectorAll(".tab");
//     //add click listeners to each one (like tabs.forEach() but we used [].forEach.call to be compatable with old versions of browsers becuase tabs is nodeList not pure array )
//     [].forEach.call(tabs, (tab)=>{
//         //function will be called once
//         //forEach tab li
//         tab.addEventListener('click', switchTab);
//     });
//     //find all the content (section.tab-content)
//     sections = document.querySelectorAll(".tab-content");
// }

// let switchTab = function(ev){
//     let tab = ev.target;
//     //called when a user clicks on a tab
//     let id = tab.id;
//     //take id from tab
//     let actives = document.querySelectorAll('.active');
//     console.log(actives);
//     [].forEach.call(actives, (active)=>{
//         active.classList.remove('active');
//     });
//     //remove the active class from old section
//     //loop through the sections
//     [].forEach.call(sections, (section)=>{
//         if( 'section-'+id === section.id){
//             //make the tab active
//             tab.classList.add('active');
//             //make the secton active
//             section.classList.add('active');
//         }
//     });
//     //find the matching id
//     //add the active class to the matching one
// }

// window.addEventListener('DOMContentLoaded', init);


// ------------------Master Details with single web application--------------

//
// const TODAY = new Date(15116711772000);
// const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// const DATA = {
//     people: [
//         {person_id: 1, 
//           name: "Megan", 
//           lastAccess:1511150221000, 
//           isMobile:false, 
//           avatar:"????"},
//         {person_id: 2, 
//           name: "Cara", 
//           lastAccess:1511350001000, 
//           isMobile:false, 
//           avatar:"????"},
//         {person_id: 3, 
//           name: "Camille", 
//           lastAccess:1511661001000, 
//           isMobile:false, 
//           avatar:"????"},
//         {person_id: 4, 
//           name: "Bree", 
//           lastAccess:1511670871221, 
//           isMobile:true, 
//           avatar:"????"}
//     ]
// }

// let init = function(){
//     loadMaster(DATA.people);
// }

// let loadMaster = function(people){
//     let ul = document.querySelector('.master-list');
//     let df = document.createDocumentFragment();
//     people.forEach(person => {
//         let li = document.createElement('li');
//         li.textContent = person.name;
//         li.className = 'person';
//         li.setAttribute('data-key', person.person_id);
//         li.addEventListener('click', showDetails);
//         df.appendChild(li);
//     });
//     ul.appendChild(df);
// }

// let showDetails = function(ev){
//     let person_id = ev.target.getAttribute('data-key');
//     let oldActive = document.querySelector('.active');
//     (oldActive)?oldActive.classList.remove('active'):null;
//     ev.target.classList.add('active');
//     let activePerson;
//     DATA.people.forEach(person=>{
//         if(person.person_id == person_id){
//             activePerson = person;
//         }
//     });
//     let ul = document.querySelector('.detail-list');
//     ul.innerHTML = ""; //clear old list
//     let df = document.createDocumentFragment();
//     for(prop in activePerson){
//         let li = document.createElement('li');
//         li.classList.add(prop);
//         if(prop=='lastAccess'){
//             let timmy = new Date(activePerson[prop]);
//             let str = `${timmy.getDate()} ${MONTHS[timmy.getMonth()]} ${timmy.getFullYear()}`;
//             li.textContent = str;
//         }else{
//             li.textContent = activePerson[prop];
//         }
//         console.log(activePerson[prop]);
//         df.appendChild(li);
//     }
//     ul.appendChild(df);
// }

// document.addEventListener('DOMContentLoaded', init);


// ---------------------getComputedStyle-------------
/*
getComputedStyle(element , psudo-element)

difference between getComputedStyle and element.style.style-name is 
with getComputedStyle you can get every style on the element even the default style added by browser
but with element.style.style-name you can get only style added to CSS file not the default
 */
// document.addEventListener('DOMContentLoaded', function(){
//   let first = document.querySelector('.first');
//   let second = document.querySelector('.second');
//   let third = document.querySelector('.third');
//   // use camelCase with style names
//   let resultOne = getComputedStyle(first).fontSize; // camelCase 
//   let resultOne1 = getComputedStyle(first).getPropertyValue("font-size"); // using hypen
//   console.log(resultOne1) 
//   let resultTwo = getComputedStyle(second,'::before').content;
//   let resultThree = getComputedStyle(third).backgroundColor;
//   let resultThree0 = third.style.color // works only for inline styles (in HTML File)
//   let resultThree1 = getComputedStyle(third).display; // block => this is default css style added by browser
//   let resultThree2 = third.style.display; // will not get default css style

//   let div = document.getElementById('output')
//   div.innerHTML = `${resultOne} ${resultTwo} ${resultThree} ${resultThree0} ${resultThree1} ${resultThree2}`;
// })

// ------------------------promise.all---------------------------
// let log = console.log;
// let warn = console.warn;

// let p1 = new Promise((resolve, reject)=>{
//     let img = document.createElement('img');
//     img.setAttribute('alt', '');

//     img.addEventListener('load', function(ev){
//         //the CSS has been loaded into the style tag
//         log('your image be here')
//         resolve(img);
//     });
//     img.addEventListener('error', function(err){
//         //there was an error
//         warn('your image is ready, NOT.')
//         reject(err);
//     });
//     img.src = "https://picsum.photos/g/500/300?image=1";
//     document.body.appendChild(img);
// });

// let p2 = new Promise((resolve, reject)=>{
//   let img = document.createElement('img');
//   img.setAttribute('alt', '');

//   img.addEventListener('load', function(ev){
//       // load event will trigger once the image loaded but if you load css file 
//       // the load event will only load once you append css file to head
//       log('your image be here')
//       resolve(img);
//   });
//   img.addEventListener('error', function(err){
//       //there was an error
//       warn('your image is ready, NOT.')
//       reject(err);
//   });
//   img.src = "https://picsum.photos/g/500/300?image=2";
//   document.body.appendChild(img);
// });

// //  promise.all accept array of promises as parameter and the parameter 
// // inside then is an array of resolved values from promises
// Promise.all([p1, p2])
// .then((things)=>{  
//     log('BOTH the links for CSS have been loaded');
//     //now my page can run and use both the scripts
//     //OR images, or scripts...
//     console.log(things) // [img,img] 
// })
// .catch((err)=>{
//     warn('SOMETHING BAD HAPPENED')
// })

// ---------------------Promise.all with fetch------------
// fetch return promise so that you can use promise all on fetches 

// let output = document.getElementById("output")
// let url1 = 'http://jsonplaceholder.typicode.com/users/1'
// let url2 = 'http://jsonplaceholder.typicode.com/users/2'
// let url3 = 'http://jsonplaceholder.typicode.com/users/3'
// let p1 = fetch(url1)
// let p2 = fetch(url2)
// let p3 = fetch(url3)

// // fetches return array promises so that you can use promise all on fetches
// Promise.all([p1, p2, p3])
//   // after then of promises (from fetches) we will take responses as array
//   .then((responses)=>{ 
//     // we need to loop over array of responses and apply .json() on each response
//     responses.forEach (p => {
//       // .json() return also promise and we need to use .then() to get data
//       let prom = p.json()
//       prom.then(res => {
//         let parag = document.createElement("p");
//         // now we get the data as object so we transfere this data object to string using JSON.stringify(res) 
//         parag.textContent = JSON.stringify(res);
//         output.appendChild(parag)
//       })
//     })
//   });

// --------------------------Progress Bar(Reading)------------------
// let header = document.querySelector('header');
// let bar = document.querySelector('.bar');

// // change progress bar width when scrolling
// window.addEventListener('scroll', adjustbar);
// // once the page load change progress bar width to number% (percentage of paragrapgh shown on home page without scrolling)
// document.addEventListener('DOMContentLoaded', adjustbar);
// // change progress bar width when resizing webpage
// window.addEventListener('resize', adjustbar);


// function adjustbar(){
//     let pageHeight = document.body.clientHeight; //height of <body>
//     let pageWidth = document.body.clientWidth;  //width of <body>
//     let pageOffset = window.pageYOffset;        //how far has page scrolled
//     let bottom = parseInt(getComputedStyle(header).bottom);
//     //distance from bottom of header to bottom of page (because the when when reach of end of scroll we want to measure the height if last paragraph shown on last home page)
//     let pct = (pageOffset + bottom)/pageHeight;
//     let w = pct * pageWidth;
//     bar.style.width =  w + "px";
//     console.log("resize")
// }

// ----------------------Special charachters in HTML , CSS & Js------------------------

/*
HTML : 
  [1] Decimal => &#165;
  [2] Hexidecimal => &#x00A5;
  [3] abbreviation => &yen;  (some charachters has shortcut)

CSS : 
  [1] Escaping charachter only with Hexidecimal: "\00A5"

JS : 
  [1] Escaping Charachter only with Hexidecimal: "\u00A5"
*/


// ---------------------------Random Color Generator----------------------

// //how to generate Random Colours in JavaScript
// let r, g, b, h, s, l, color, intColor;
// let h1 = document.querySelector('h1');

// //1. #FAB
// r = Math.floor(Math.random() * 16).toString(16);
// g = Math.floor(Math.random() * 16).toString(16);
// b = Math.floor(Math.random() * 16).toString(16);
// color = `#${r}${g}${b}`;
// h1.textContent = color;
// document.body.style.backgroundColor = color;

// // 2. #FFED77
// r = Math.floor(Math.random() * 256).toString(16);
// g = Math.floor(Math.random() * 256).toString(16);
// b = Math.floor(Math.random() * 256).toString(16);
// r = (r.length===2)?r:'0' + r;
// g = (g.length===2)?g:'0' + g;
// b = (b.length===2)?b:'0' + b;
// color = `#${r}${g}${b}`;
// h1.textContent = color;
// document.body.style.backgroundColor = color;

// // 3. hsl(359, 50%, 40%)  hsla(h, s, l, 0.3)
// h = Math.floor(Math.random() * 360).toString();
// s = Math.floor(Math.random() * 101).toString();
// l = Math.floor(Math.random() * 101).toString();
// color = `hsl(${h}, ${s}%, ${l}%)`;
// h1.textContent = color;
// document.body.style.backgroundColor = color;


// // 4. rgb(255, 0, 128)  rgba(r, g, b, 0.3)
// r = Math.floor(Math.random() * 256).toString();
// g = Math.floor(Math.random() * 256).toString();
// b = Math.floor(Math.random() * 256).toString();
// color = `rgb(${r}, ${g}, ${b})`;
// h1.textContent = color;
// document.body.style.backgroundColor = color;

// //5. Faster colours with Bitwise operators
// intColor = Math.floor(Math.random() * Math.pow(2, 24));
// // random value between 0 and 2 to the power of 24
// // 111111110000000011111111
// r = intColor >> 16;
// g = (intColor >> 8) & 255;
// b = intColor & 255;
// color = `rgb(${r}, ${g}, ${b})`;
// h1.textContent = color;
// document.body.style.backgroundColor = color;

// ---------------------------------Circle Graph------------------------
// let info;
        
// document.addEventListener('DOMContentLoaded', ev=>{
//     info = document.querySelector('#main .info');
//     doRotations();
//     let timmy = setInterval(function(){
//         let num = parseInt(info.textContent) + 1;
//         num = (num>100)?0:num;
//         info.textContent = num;
//         doRotations();
//     }, 500)
// });

// function doRotations(){
//   let coverOver = document.querySelector('#main .cover-over50');
//   let coverUnder = document.querySelector('#main .cover-under50');
//   let fillOver = document.querySelector('#main .fill-over50');
//   let infoNum = parseInt(info.textContent);
//   let pct = (infoNum - 50) * 360 / 100;
//   //get the percentage of 360 degrees
//   console.log('num', infoNum, pct, 'deg');
//   if(infoNum > 50){
//       coverOver.style.zIndex = 20;
//       fillOver.style.zIndex = 30;
//       //blue on right on top
//       fillOver.style.transform = 'rotate(180deg)';
//       coverUnder.style.transform = 'rotate(180deg)';
//       //move a grey under the purple
//       coverOver.style.transform = `rotate(${pct}deg)`;
//   }else{
//       coverOver.style.zIndex = 30;
//       fillOver.style.zIndex = 20;
//       //blue on left under grey
//       coverOver.style.transform = 'rotate(0deg)';
//       fillOver.style.transform = 'rotate(0deg)';
//       //rotate a grey to reveal bottom-most purple
//       coverUnder.style.transform = `rotate(${pct}deg)`;
//   }
  
//   //extra code for the demo in the alt section
//   let altCOver = document.querySelector('#alt .cover-over50');
//   let altCUnder = document.querySelector('#alt .cover-under50');
//   let altFOver = document.querySelector('#alt .fill-over50');
//   altCOver.style.transform = coverOver.style.transform;
//   altCUnder.style.transform = coverUnder.style.transform;
//   altFOver.style.transform = fillOver.style.transform;
// }

// -------------------------Star Rating System------------------
// -------My-Version
// let allStars = document.querySelectorAll("i")
// let span = document.querySelector(".stars span")
// allStars.forEach((star,indx) => {
//   star.addEventListener("click", function(){
//   star.classList = "filled fas fa-star"
//     for(let i = 0; i < indx; i++){
//       allStars[i].classList = "filled fas fa-star"
//       span.textContent = `${indx+1}/5`
//     }
//     for(let i = indx+1; i < allStars.length; i++){
//       allStars[i].classList = "far fa-star"
//       span.textContent = `${indx+1}/5`
//     }
//   })
// })
// document.addEventListener('DOMContentLoaded',function(){
//   let initRate = prompt("Please Rate","Write your Rate Here ")
//   // initRate = parseInt(initRate) && parseInt(initRate) > 0 && parseInt(initRate) < 6  ? initRate : 5
//   while( !parseInt(initRate) || parseInt(initRate) <= 0 || parseInt(initRate) >= 6){
//     initRate = prompt("inValid input","Your Range is 1 - 5 ")
//   }
//   allStars[parseInt(initRate) - 1 ].dispatchEvent(new MouseEvent('click'))
// })

// -------Steve version
//initial setup
// document.addEventListener('DOMContentLoaded', function(){
//   let stars = document.querySelectorAll('.star');
//   stars.forEach(function(star){
//       star.addEventListener('click', setRating); 
//   });
  
//   let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
//   let target = stars[rating - 1];
//   target.dispatchEvent(new MouseEvent('click'));
// });

// function setRating(ev){
//   let span = ev.currentTarget;
//   let stars = document.querySelectorAll('.star');
//   let match = false;
//   let num = 0;
//   stars.forEach(function(star, index){
//       if(match){
//           star.classList.remove('rated');
//       }else{
//           star.classList.add('rated');
//       }
//       //are we currently looking at the span that was clicked
//       if(star === span){
//           match = true;
//           num = index + 1;
//       }
//   });
//   document.querySelector('.stars').setAttribute('data-rating', num);
// }

// ------------Private and Public API---------------
// // API for Public info o Github User
// let url1 = "https://api.github.com/users/Mido1971988" 
// // API for list of Public Repos
// let url2 = "https://api.github.com/users/Mido1971988/repos" 
// // API for list of public and private repos(but private Repos needs Authorization with Personal Access Token)
// let url3 = "https://api.github.com/search/repositories?q=user:Mido1971988"  
// // API for list of files inside Repo
// let url4 = "https://api.github.com/repos/Mido1971988/Private-Repo/git/trees/master?recursive=1"
// // API to get file from private Repo return metadata not raw content so you have to decode content first
// let url5 = "https://api.github.com/repos/Mido1971988/Private-Repo/contents/darksky-sample.json"
// // API to get file from public Repo return metadata not raw content so you have to decode content first
// let url6 = "https://api.github.com/repos/Mido1971988/Public-Repo/contents/slideshow.json"


// // -----My Github Public API 

// // fetch(url3)
// //   .then(response => response.json())
// //   .then(data => console.log(data)) // 14 repos because there is 1 repo Private
// //   .catch(err => console.log(err)) 

// // -----My Github Private API
// let request = new Request (url6,{
//   method : "GET",
//   headers : {
//     "Authorization" : "token " +"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", // token or Bearer
//     "content-type": "application/json"
//   },
//   mode : "cors",
//   cache : "default"
// })

// fetch(request)
//   .then(response => (response).json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// fetch(request)
//   .then(response => (response).json())
//   .then(data => console.log(JSON.parse(atob(data.content)))) // atob to decode base64
//   .catch(err => console.log(err))

// -----------------Exp. of difference between target and currentTarget-------------
// let partyStarted = function(){
//   //add event listeners to element(s) on the page  
//   document.querySelector('.list-view').addEventListener('click', onClick2);
//   //target will be ul
  
//   let lis = document.querySelectorAll('.list-item');
//   lis.forEach(li => {
//       // li.addEventListener('click', onClick);
//       //target will be li
//   })
//   let spans = document.querySelectorAll('.list-item span');
// }

// let onClick2 = function(ev){
//   alert(ev.target.tagName);
//   let li = ev.target;
//   if( ev.target.tagName == 'SPAN'){
//       li = ev.target.parentElement;
//   }
//   let id = li.getAttribute('data-id');
//   let nm = li.getAttribute('data-name');
//   let h2 = document.querySelector('h2');
//   h2.textContent = id + ': ' + nm;
// }

// let onClick = function(ev){
//   //ev is the click event... but who called it?
//   alert('target ' + ev.target + ' and currentTarget ' + ev.currentTarget);
//   // ev.stopPropagation() // to stop ev to triggered on UL if you click on LI or SPAN

//   let id = ev.currentTarget.getAttribute('data-id');
//   let nm = ev.currentTarget.getAttribute('data-name');
//   let h2 = document.querySelector('h2');
//   h2.textContent = id + ': ' + nm;
// }

// document.addEventListener('DOMContentLoaded', partyStarted);


// -----------------------------search-------------------------------
// -----my Way
// let ul = document.createElement("ul")
// let txt = document.getElementById("txt-search")
// let output = document.getElementById("output")
// output.appendChild(ul)
// let pre = document.getElementById("array").innerHTML.split(",")
// let arr = pre.map(ele => {
//   let newEle = ele.trim().split("")
//   newEle.pop()
//   newEle.shift()
//   return newEle.join("")
// })

// let elements;
// txt.addEventListener("input",function(ev){
//   elements = [];
//   if(ev.target.value.length > 0){
//     arr.forEach(ele => {
//       // match Method (return matched)
//       // let regX = new RegExp(`\^${ev.target.value}\\w{0,}`,"ig")
//       // let matchedEle = ele.match(regX)
//       // test Method (return true or false)
//       let regX = new RegExp(`\^${ev.target.value}`,"ig")
//       let matchedEle = regX.test(ele)
//       if(matchedEle){
//         if(!elements.includes(ele)){
//           elements.push(ele)
//         }
//       }
//     })
//     addToList(elements)
//   }else{
//     ul.textContent = ""
//   }
// })

// function addToList(array){
//   ul.textContent = ""
//   array.forEach(ele =>{
//     let li = document.createElement("li")
//     li.textContent = ele
//     ul.appendChild(li)
//   })
// }

// -----steve way
// const KEY = 'debounce-terms';

// let init = function(){
//     // document.getElementById('txt-search').addEventListener('input', search);
//     document.getElementById('txt-search').addEventListener('input', efficientSearch);
    
//     let terms = ['apple', 'acorn', 'bee', 'beet', 'beef', 'bunny', 'cookie', 
//                   'corn', 'corndog', 'dog', 'dogma', 'echo', 'elephant'];
//     localStorage.setItem(KEY, JSON.stringify(terms));
// }
  
// let search = function(ev){
//     let text = ev.target.value;
//     document.getElementById('output').textContent = `List Matching ${text}`;
//     let ul = document.getElementById('matches');
    
//     //call an asynchronous search to match what has been typed
//     getList(text)
//     .then((list)=>{
//         ul.innerHTML = '';
//         if( list.length == 0){
//             let li = document.createElement('li');
//             li.textContent = "NO MATCHES";
//             ul.appendChild(li);
//         }else{
//             list.forEach(item=>{
//                 let li = document.createElement('li');
//                 li.textContent = item;
//                 ul.appendChild(li);
//             })
//         }
//     })
//     .catch(err=>console.warn(err));
// }


// let getList = function(txt){
//     return new Promise((resolve, reject)=>{
//         //use setTimeout with random value to show what can happen
//         let r = Math.floor(Math.random()*1000);
//         setTimeout((function(){
//             let t = '^' + txt.toString();
//             let pattern = new RegExp(t, 'i'); //starts with t
//             let terms = JSON.parse(localStorage.getItem(KEY));
//             let matches = terms.filter(term => pattern.test(term));
//             resolve(matches);
//         }), r,txt);
//     })
// }

// // read below to know how it is works
// let debounce = function(func, wait, immediate) {
//     var timeout;
//     return function() {
//         var context = this, args = arguments;
//         // console.log(context)
//         // console.log(args)
//         var later = function() {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };

// let efficientSearch = debounce(function(ev){
//   let text = ev.target.value;
//   document.getElementById('output').textContent = `List Matching ${text}`;
//   let ul = document.getElementById('matches');
  
//   //call an asynchronous search to match what has been typed
//   getList(text)
//   .then((list)=>{
//       ul.innerHTML = '';
//       if( list.length == 0){
//           let li = document.createElement('li');
//           li.textContent = "NO MATCHES";
//           ul.appendChild(li);
//       }else{
//           list.forEach(item=>{
//               let li = document.createElement('li');
//               li.textContent = item;
//               ul.appendChild(li);
//           })
//       }
//   })
//   .catch(err=>console.warn(err));
// }, 300);
// //call the debounced function at most once every 300ms

// document.addEventListener('DOMContentLoaded', init);


// //debounce function - thanks to David Walsh
// //https://davidwalsh.name/javascript-debounce-function
// //who took this from underscore.js


// // Read this to know how debounce function worked above
// let test = document.getElementById("test")
// // declaring function called first
// let first = function(func){
//   return function(){
//     let context = this
//     let args = arguments
//     func.apply(context,args)
//   }
// }
// // trigger function first and pass a function with argument (ev) to it 
// // then save returned value to variable second
// // now variable second is a function because function first 
// // return another function 
// let second = first(function(ev){console.log(ev)}) 
// // now trigger function second which is the function returned from 
// // first function and trigger this function will trigger the function 
// // which is passed to first function as argument this function will
// // take context and arguments from variables context & args whichs
// // assigned when you trigger seconds once event triggered
// test.addEventListener("click",second)

// ---------------------removeEventListener--------------
// // here we are creating div element
// let div = document.createElement("div")
// div.textContent = "TEST"
// // here we adding an Event ti div element
// div.addEventListener("click",function(){console.log("test")})
// // here we are just printing the div element to webpage 
// document.body.appendChild(div)
// // here we are removing the div element from webpage not deleting the div element but it will
// // be garbage collected if there is no reference to it
// // but here there is an Event refer to it so it will not be garbage collected that's why it's
// // important to remove EventListener
// document.body.removeChild(div)
// console.log(div) // here div is still here because remove child only remove it from webpage
// div.removeEventListener("click",function(){console.log("test")})
// console.log(div)




// --------------------------Right Click Menu------------------------

// My Way
// let box = document.getElementById("box")
// let menu = document.querySelector("ul")
// let red = document.getElementById("red")
// let gold = document.getElementById("gold")
// let green = document.getElementById("green")

// menu.classList.add("off")

// red.addEventListener("click",function(){
//   box.style.backgroundColor = "red"
//   // we can not use this because add style using JS is inline style and will override the css style file
//   // menu.classList.add("off")
//   hide()
// })
// gold.addEventListener("click",function(){
//   box.style.backgroundColor = "gold"
//   hide()
// })
// green.addEventListener("click",function(){
//   box.style.backgroundColor = "green"
//   hide()
// })

// document.body.addEventListener("click",function(){
//   hide()
// })

// box.addEventListener("contextmenu",function(ev){
//   ev.preventDefault()
//   menu.classList.remove("off")
//   menu.style.left = ev.pageX + "px"
//   menu.style.top = ev.pageY + "px"
// })

// function hide(){
//   menu.style.left = "-200%"
//   menu.style.top = "-200%"
// }

// -------------Steve Way

// let menu = null;
// document.addEventListener('DOMContentLoaded', function(){
//     //make sure the right click menu is hidden
//     menu = document.querySelector('.menu');
//     menu.classList.add('off');
    
//     //add the right click listener to the box
//     let box = document.getElementById('box');
//     box.addEventListener('contextmenu', showmenu);
    
//     //add a listener for leaving the menu and hiding it
//     menu.addEventListener('mouseleave', hidemenu);
    
//     //add the listeners for the menu items
//     addMenuListeners();
// });

// function addMenuListeners(){
//     document.getElementById('red').addEventListener('click', setColour);
//     document.getElementById('gold').addEventListener('click', setColour);
//     document.getElementById('green').addEventListener('click', setColour);
// }

// function setColour(ev){
//     hidemenu();
//     let clr = ev.target.id;
//     document.getElementById('box').style.backgroundColor = clr;
// }

// function showmenu(ev){
//     //stop the real right click menu
//     ev.preventDefault(); 
//     //show the custom menu
//     menu.style.top = `${ev.clientY - 20}px`;
//     menu.style.left = `${ev.clientX - 20}px`;
//     menu.classList.remove('off');
// }

// function hidemenu(ev){
//     menu.classList.add('off');
//     menu.style.top = '-200%';
//     menu.style.left = '-200%';
// }

// -----------------------Error Handling------------------

// window.onerror = function(msg,url,line,col,err){
//   console.log(msg,url,line,col,err)
// }

// same like onerror but here you have ev object so you can ev.preventDefault()
// window.addEventListener("error",function(ev){
//   console.log(ev.message,ev.filename,ev.lineno,ev.colno,ev.error)
//   ev.preventDefault() // will stop throwing Error and stop JS file from running
//   console.log(ev)
// })
// asd

// you can add onerror on img will trigger if img did not loaded
// let img = document.getElementById("bad")
// img.onerror = function(ev){
//   console.log(ev)
// }


// ----------------mediaQuery in JS--------------------
/*
MediaQueryList has propery called matches 
will be true if width more than 601px
will be false if width less than 601px
*/

// let query = window.matchMedia("(min-width : 601px)")
// let p = document.querySelector("p")

// // but you have to refresh to see the change of color
// if(query.matches){
//   p.style.color = "red"
// }else{
//   p.style.color = "yellow"
// }

// // Using Resize Event :  here no need to refresh 
// window.addEventListener("resize",function(){
//   if(query.matches){
//     p.style.color = "red"
//   }else{
//     p.style.color = "black"
//   }
// })

// // Using ResizeObserver :  here no need to refresh 
// let resizer = new ResizeObserver(changeColor)
// resizer.observe(p)

// function changeColor (entries){
//   // you can get also p from entries
//   let para = entries[0].target
//   if(query.matches){
//     para.style.color = "red" // or p
//   }else{
//     p.style.color = "black" // or para
//   }
// }

// ------------------------------Observers in JS----------------------

/**
 * ResizeObserver
 * MutationObserver
 * IntersectionObserver
******
- all Constructors of 3 types accept callback function as parameters
- all instance of 3 types has method observe() whichs accept html element as parameter
but : 
- instance of MutationObserver accept configuration object as 2nd parameter
- Constructor of IntersectionObserver accept options object as 2nd parameter
******
- callback function of ResizeObserver & IntersectionObserver accept entries as paramter
- callback function of MutationObserver accept mutationList as paramter
*/

// [1] ResizeObserver : 

// document.addEventListener('DOMContentLoaded', () => {
//   /* window.matchMedia() could be used on load */
//   //ResizeObserver constructor accept callback function as parameter and this function will run once the size of element change  
//   let resizer = new ResizeObserver(handleResize);
//   // observe is prototype method accept the target element as parameter
//   // resizer.observe(document.querySelector('.container'));
// });

// function handleResize(entries) {
//   let div = entries[0].target;
//   if (entries[0].contentRect.width > 900) {
//     //add big class
//     div.classList.add('big');
//     addPhoto();
//   } else {
//     //remove big class
//     div.classList.remove('big');
//     removePhoto();
//   }
// }

// function addPhoto() {
//   if (!document.querySelector('.two img')) {
//     let img = document.createElement('img');
//     let rand = Math.floor(Math.random() * 100) + 10;
//     img.src = `https://picsum.photos/g/500/300?image=${rand}`;
//     img.alt = 'Random image';
//     document.querySelector('.two p').appendChild(img);
//   }
// }
// function removePhoto() {
//   let img = document.querySelector('.two img');
//   img?.parentElement.removeChild(img);
//   //old equivalent of the above line
//   //if(img){img.parentElement.removeChild(img);}
// }

// [2] MutationObserver : 
// let observer;
        
// document.addEventListener('DOMContentLoaded', init);

// function init(){
//     let p = document.querySelector('main > p'); //1st p
//     p.addEventListener('click', change);
    
//     let config = {
//         attributes: true, // to track changes in element's attribute 
//         attributeOldValue: true, // to track old element's attribute value
//         attributeFilter: ['data-thing', 'title', 'style'], // to track only these attributes
//         childList: true, // to track element's child including text node
//         subtree: true, // to track deeper element's grandchild
//         characterData: false, 
//         characterDataOldValue: false
//     };
//     // atleast you have to write one of these in config childList, attributes, characterData 
    
//     observer = new MutationObserver(mutated);
//     observer.observe(p, config);
//     // observer.disconnect(); // to stop tracking any mutations
// }


// function mutated(mutationList){
//     console.log( mutationList );
//     for(let mutation of mutationList) {
//         if (mutation.type == 'childList') {
//             console.log('A child node has been added or removed.');
//         }
//         else if (mutation.type == 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//             console.log( mutation.oldValue );
//         }
//     }
//     console.log(observer.takeRecords()) // return an array of all mutationRecords
//     // properties of mutationRecord
//     //target - Element
//     //addNodes - NodeList( list of added nodes)
//     //removedNodes - NodeList ( list of removed nodes)
//     //oldValue 
//     //attributeName
//     //attributeNamespace
//     //previousSibling - Element / textNode
//     //nextSibling - Element / textNode
//     //type 'attributes' or 'childList'
// }
// function change(ev){
//   let p = ev.currentTarget;
  
//   p.textContent = ' this is new content'; // will give mutation record because childList: true
//   p.setAttribute('data-thing', 123); // will give mutation record because attributes: true
//   p.title = 'NEW TITLE' // will give mutation record because childList: true
  
//   let span = document.createElement('span');
//   p.appendChild(span); // will give mutation record because childList: true
//   span.textContent = ' SOME SPAN TEXT'; // will give mutation record because subtree: true
// }

//[3] InterSectionObserver
// document.addEventListener("DOMContentLoaded", () => {
//   let options = {
//     //null means use whole viewport
//     root: null, 
//     // -250px means the observer area the the viewport area -250px form top and bottom and -50px from right and left 
//     rootMargin: "-250px -50px", 
//     // threshold means when though 0.05(5%) of target text 
//     threshold: 0.05
//   };
//   let observer = new IntersectionObserver(beTouching, options);
//   document.querySelectorAll(".container p").forEach(p => {
//     observer.observe(p);
//     //console.log("watching", p.textContent);
//   });
// });
// // we can add observer instance as second parameter and use it for exp. inside function to stop observing by unobserve method
// function beTouching(entries, ob) { 
//   //entries all 30 paragraphs
//   entries.forEach(entry => {
//     if (entry.isIntersecting) { // isIntersecting property means p enter observer area
//       console.log("intersecting");
//       //console.log(entry.target); // p html element
//       //console.log(entry.time, entry.intersectionRatio);
//       entry.target.classList.add("active");
//       //ob.unobserve(entry.target); // to stop watching p 
//     } else {
//       entry.target.classList.remove("active");
//     }
//   });
// }

// ------------------------Find and Replace-------------------

// -----my Way

// let target = document.querySelector(".target")
// let txt = document.querySelector(".target").textContent.split(" ")
// let input = document.getElementById("find")
// let replace = document.getElementById("replace")
// let button = document.getElementById("btnSearch")
// let reg = /\w+/ig

// button.addEventListener("click",function(ev){
//   ev.preventDefault()
//   let newTxt = txt.map(word => word.toLowerCase().match(reg).join("") === input.value.toLowerCase() ? replace.value : word)
//   target.textContent = newTxt.join(" ")
// })

// ------steve way
// document.addEventListener('DOMContentLoaded', function(){
//   let btn = document.getElementById('btnSearch');
//   btn.addEventListener('click', doFindAndReplace);
// });

// function doFindAndReplace(ev){
//   ev.preventDefault();
  
//   let find = document.getElementById('find').value;
//   let replace = document.getElementById('replace').value;
  
//   let p = document.querySelector('.target');
  
//   // while( p.textContent.indexOf(find) != -1 ){
//   //   //we put it inside while loop because replace method will replace first match only
//   //     p.textContent = p.textContent.replace(find, replace);
//   // }

//   // or instead of while loop you can use replaceAll method
//   p.textContent = p.textContent.replaceAll(find, replace);
// }

// -------------------------------Modifiying text input---------------
// ----------keyup & keypress & keydown & input
// document.addEventListener('DOMContentLoaded', function(){
//   let txt = document.getElementById('txt');
//   // txt.addEventListener('keydown', upThing);  
//   //1st - no charcode. no input value added yet
//   // will trigger function before value of key written to input field 
  
//   // txt.addEventListener('keypress', upThing);  
//   //2nd - charcode. no input value added yet
//   // will trigger function after value of key written to input field but before keyup
//   // that's why no ev.target.value at first time
  
//   // txt.addEventListener('keyup', upThing);     
//   //3rd - no charcode. input value added
//   // will trigger function after value of key written to input field and ev.target.value at first time is availabe
  
//   // txt.addEventListener('input', upThing); // best choice
//   //4th - no charcode but input value accessible/mutable
// });

// function upThing(ev){
//   let num = ev.charCode;
//   let letter = String.fromCharCode(num);
//   console.log(ev.type, num, letter, ev.target.value);
//   ev.target.value = ev.target.value.toUpperCase();
// }

// ----------------------------Cors with Fetch---------------------------
/*
- if you want to take response from different server (like MAMP)
you need to create .htaccess file and write 
(Header Set Access-Control-Allow-Origin *) inside the .htaccess file
to accept requests from any server and give it a response then add mode: 'cors' when sending request

- but if you want to take response from same serve 
no need to add .htaccess file and write (Header Set Access-Control-Allow-Origin *)
because its the same server and no need of cross origin policy (only between different servers)

* Note : mode: "no-cors" will return a opaque response
* Note : Live server can not read .htaccess file so use MAMP server better
*/
// let p;
        
// document.addEventListener('DOMContentLoaded', 
//     function(){
//         p = document.querySelector('main>p');
//         p.addEventListener('click', doFetch);
//     });

// function doFetch(ev){
//     let uri = "http://127.0.0.1:5500/json/darksky-sample.json"; // From Same Server
//     // let uri = "http://127.0.0.1:8888/json/darksky-sample.json"; // From MAMP Server
    
//     let h = new Headers();
//     h.append('Accept', 'application/json');
    
//     let req = new Request(uri, {
//         method: 'GET',
//         headers: h,
//         mode: 'cors'
//     });
    
//     fetch(req)
//     .then( (response)=>{
//         if(response.ok){
//             return response.json();
//         }else{
//             console.log(response)
//             throw new Error('BAD HTTP stuff');
//         }
//     })
//     .then( (jsonData) =>{
//         console.log(jsonData);
//         p.textContent = JSON.stringify(jsonData, null, 4);
//     })
//     .catch( (err) =>{
//         console.log('ERROR:', err.message);
//     });
// }


// --------------------------Authentication----------------
/*
Steps to create Password for your website (localHost) : 
[1] open terminal and go to location where you you want to save .htpasswd file at
[2] write on terminal  ( htpasswd -c .htpasswd userName )
[3] will ask you for PassWord and you will repeat the password then file created
[4] write on .htaccess file : 
      AuthType Basic
      AuthName "Write Yor Password"
      AuthUserFile  /Applications/MAMP/user-pass/.htpasswd
      Require valid-user

Steps to create Password for your website : 
[1] open file manager on the server
[2] add .htpasswd outSide the root Document (like www, htdocs or public_html)
[3] add .htaccess to the folder you want to put password on it and write inside .htaccess :
      AuthType Basic
      AuthName "Write Yor Password"
      AuthUserFile  location on server/.htpasswd
      Require valid-user

reference : 
https://websistent.com/password-protect-directories-using-htpasswd/
*/
// let p;
        
// document.addEventListener('DOMContentLoaded', 
//     function(){
//         p = document.querySelector('main>p');
//         p.addEventListener('click', doFetch);
//     });

// function doFetch(ev){
//     // let uri = "http://127.0.0.1:5500/json/darksky-sample.json"; // From Same Server
//     let uri = "http://127.0.0.1:8888/json/darksky-sample.json"; // From MAMP Server
    
//     let h = new Headers();
//     h.append('Accept', 'application/json');
//     let encoded = window.btoa("mido:secret") // to convert it to Base64
//     let auth = "Basic " + encoded // Basic is the type before i used token for github API
//     h.append("Authorization" , auth)
//     console.log(auth) // userName and Password Converted to Base64
//     let req = new Request(uri, {
//         method: 'GET',
//         headers: h,
//         // credentials : "include" // different domain will send cookies with request
//         credentials : "same-origin" // same domain
//     });
    
//     fetch(req)
//     .then( (response)=>{
//         if(response.ok){
//             return response.json();
//         }else{
//             console.log(response)
//             throw new Error('BAD HTTP stuff');
//         }
//     })
//     .then( (jsonData) =>{
//         console.log(jsonData);
//         p.textContent = JSON.stringify(jsonData, null, 4);
//     })
//     .catch( (err) =>{
//         console.log('ERROR:', err.message);
//     });
// }

// ------------------------------------Caching--------------------------
// try this on MAMP server not live server
// const DATATIMEOUT = 60;
        
// function fetchData(){
//     let url = 'http://127.0.0.1:8888/api/data.php';
//     // url = url + '?apikey=abd654e9d6cc52a1297dfee'; // this a simulation not require key you can remove this
//     fetch(url)
//     .then(response=>{
//         return response.json()
//     })
//     .then(data=>{
//         //now we need to check if the data is new ENOUGH
//         let t = data.time;
//         let p = data.people;
//         let output  = document.getElementById('output');
//         let oldtime = localStorage.getItem('westeros-time');
//         if( oldtime ){
//             //we have data
//             let intOldTime = parseInt(oldtime);
//             if( (intOldTime + DATATIMEOUT) < t){
//                 localStorage.setItem('westeros-time', t);
//                 let ps = JSON.stringify(p);
//                 localStorage.setItem('westeros-ppl', ps);
//                 output.textContent = 'List Updated';
//             }else{
//                 //no update required
//                 output.textContent = 'List IS Up to Date';
//             }
            
//         }else{
//             //no data
//             localStorage.setItem('westeros-time', t);
//             let ps = JSON.stringify(p);
//             localStorage.setItem('westeros-ppl', ps);
//             output.textContent = 'List Created';
//         }
//     })
//     .catch(err=>{
//         let output = document.getElementById('output');
//         output.textContent = JSON.stringify(err, null, 2);
//     })
// }

// function init(){
//     let h1 = document.querySelector('h1');
//     h1.addEventListener('click', fetchData);
//         //OR
//     let timmy = setInterval(fetchData, 20000); 
//         //once every 20 seconds
// }

// document.addEventListener('DOMContentLoaded', init);

// ---------------TransitionEnd and AnimationEnd---------------------
// document.addEventListener('DOMContentLoaded', function(){
//   let ps = document.querySelectorAll('p');
//   ps.forEach(p=>{
//       p.addEventListener('transitionend', glow);
//       p.addEventListener('animationend', noglow);
//   })
// });

// function glow(ev){
//   console.log('transitionend');
//   ev.currentTarget.style.animationName = 'glow';
// }

// function noglow(ev){
//   // we have to remove animation name and set it again to make animation works every time not only one time
//   ev.currentTarget.style.animationName = '';
// }

// ----------------------------XML file fetching--------------------
//XMLHttpRequest() - has responseXML property in the response
        
// document.addEventListener('DOMContentLoaded', ()=>{
//   //fetch the data as soon as the page has loaded
//   let url = "/xml/data.xml";
//   fetch(url)
//   .then(response=>response.text()) // like json() It returns a promise that resolves with a String
//   .then(data=>{
//       // console.log(data);  //string
//       let parser = new DOMParser(); //Provides the ability to parse XML or HTML source code from a string into a DOM Document.
//       let xml = parser.parseFromString(data, "application/xml");
//       document.getElementById('output').textContent = data;
//       console.log(xml);
//       buildHouseList(xml);
//       buildSwordList(xml);
//   });
// })

// function buildHouseList(x){
//   let list = document.getElementById('houses');
//   let houses = x.getElementsByTagName('house');
//   for(let i=0; i<houses.length; i++){
//       let li = document.createElement('li');
//       // let house = houses[i].firstChild.nodeValue; // here select firstChild (textNode) so to get value of text node you should use nodeValue property
//       let house = houses[i].textContent; // or you can directly use textContent property of the element 
//       li.textContent = house;
//       list.appendChild(li);
//   }
// }

// function buildSwordList(x){
//   let list = document.getElementById('swords');
//   let swords = x.getElementsByTagName('sword');
//   for(let i=0; i<swords.length; i++){
//       let li = document.createElement('li');
//       let swordName = swords[i].firstChild.nodeValue;
//       let person = swords[i].getAttribute('owner');
//       li.textContent = `${swordName} - ${person}`;
//       list.appendChild(li);
//   }
// }
// -------------------Controlling video by JS----------------------
// let vid;
// document.addEventListener('DOMContentLoaded', init);

// function init(){
//     document.getElementById('btnPlay').addEventListener('click', play);
//     document.getElementById('btnPaws').addEventListener('click', paws);
//     document.getElementById('btnStop').addEventListener('click', stop);
//     document.getElementById('btnRew').addEventListener('click', rew);
//     document.getElementById('btnFF').addEventListener('click', ff);
//     vid = document.getElementById('video');
//     let str = vid.canPlayType("video/mp4"); // maybe - properly - empty string ( can't play)
//     // console.log(str);// maybe
//     vid.volume = 0.9;  //  0 is mute  - 1 is maximum
// }

// function play(ev){
//     vid.play() // return promise because maybe will buffer so needs promise
//     .then(()=>{
//         console.log('video is playing')
//     })
//     .catch((err)=>{
//         console.log( {err} );
//     });
//     //after the video starts to play you can access text tracks
//     let tt = vid.textTracks;
//     let cues = tt[0].cues;
//     console.log(tt);
//     console.log(`There are ${tt.length} text tracks`);
//     console.log( tt[0] );
//     console.log( cues );
//     console.log( cues.length );
//     console.log( cues[0] );
//     console.log( cues[0].text );
// }
// function paws(ev){
//     vid.pause(); // will not return a promise
//     console.log( vid.currentTime, "of", vid.duration, "seconds played");
//     console.log('video is paused. No Promise here');
// }
// function stop(ev){
//     vid.pause();
//     console.log( vid.currentTime);
//     vid.currentTime = 0;
// }
// function rew(ev){
//     console.log( vid.currentTime);
//     if( ! vid.fastSeek ){
//         vid.currentTime -= 20;
//     }else{
//         vid.fastSeek(-20) // not supported on all browsers
//         .then(()=>{
//             console.log('Video skipped forward 10 seconds')
//         })
//         .catch(err=>{
//             console.log({err});
//         })
//     }
//     console.log( vid.currentTime);
// }
// function ff(ev){
//     console.log( vid.currentTime);
//     if( ! vid.fastSeek ){
//         vid.currentTime += 20;
//     }else{
//         vid.fastSeek(20) // not supported on all browsers
//         .then(()=>{
//             console.log('Video skipped forward 10 seconds')
//         })
//         .catch(err=>{
//             console.log({err});
//         })
//     }
//     console.log( vid.currentTime);
// }

// ------------------------------Permission API--------------------------

// if(navigator.permissions){
//   //browser supports this

//   // method of the Permissions interface returns the state of a user permission on the global scope.
//   // The name of the API whose permissions you want to query
//   navigator.permissions.query({name:'geolocation'})
//   .then(function(permissionStatus) {  
//       console.log('geolocation permission state is ', permissionStatus.state);

//       permissionStatus.onchange = function() {  
//         console.log('geolocation permission state has changed to ', this.state);
//       };
//   });
//   // Indicates whether you want to show a notification for every message or be able to 
//   // send silent push notifications. default is false (userVisibleOnly:false) is not supported in all browsers
//   navigator.permissions.query({name:'push', userVisibleOnly:true})

//   // getCurrentPosition make a Request Asynchronously and accept 2 callback function success or fail
//   navigator.geolocation.getCurrentPosition(ftw, wtf);
//   function ftw(){console.log('yes')}
//   function wtf(){console.log('no')}
  
//   Notification.requestPermission(function(result) {  
//       if (result === 'denied') {  // when click deny
//           console.log('Permission wasn\'t granted. Allow a retry.');  
//           return;  
//       } else if (result === 'default') {   // default means close the prompt question
//           console.log('The permission request was dismissed.');  
//           return;  
//       }  
//       console.log('Permission was granted for notifications');  // when click allow
//   });
// }
// ------------------------------Clipboard---------------
/* if i add contenteditable="true" attribute on HTML element i can change the text from webpage
and if i cut , copy , paste will trigger the events here in JS File */

// ######### Option [1] using copy , cut , paste Built-in Events(clipboardEvents) : (work for safari)

// document.addEventListener('DOMContentLoaded', ()=>{
//     ['cut', 'copy', 'paste'].forEach(function(event) {
//         document.addEventListener(event, function(ev) {
//             console.log(event);   
//             if(ev.type == 'paste'){
//                 console.log(ev.clipboardData.getData('text')); // no need for premissions
//             }
//         });
//     });
// });

// // you can select any text and press btnCopy to copy text to clipboard or 
// // you can add in the webpage input element and take textContent from element
// // then add it to the input element then focus() and select() content on input
// // then copy it from input element to clipboard 
// // (you can not select text on regular element only you can focus and select text inside input element)
// document.getElementById('btnCopy').addEventListener('click', (ev)=>{
//     let pre = document.querySelector('pre');
//     let text = pre.textContent;
//     const input = document.createElement('input');
//     document.body.appendChild(input);
//     input.value = text;
//     input.focus();
//     input.select();
//     input.style.opacity = 0 // to make it hidden
//     const result = document.execCommand('copy'); // will trigger copy event on document you can not use dispatchEvent look below
//     if (result === 'unsuccessful') {
//         console.error('Failed to copy text.');
//     }
// });

// if you want to use dispatchEvent instead of execCommand you have to create new event using 
// Event constructor and write the function of copy event you can not use builtin copy function 
// let copyEvent = new Event("copy")
// pre.addEventListener("copy", navigator.clipboard.writeText(pre.textContent))
// pre.dispatchEvent(copyEvent)


// ######### Option [2] using clipboard writeText & readText properties (need Premissions) : 
//Over HTTPS only (or localhost)
//Only on active tabs
//Permissions for read and write are required (not work for safari) maybe my safari is old version or problem with premissions
// Get permission to access clipboard

// navigator.permissions.query({
//   name: 'clipboard-read', 
//   name: 'clipboard-write' 
// }).then(permissionStatus => {
//   // Will be 'granted', 'denied' or 'prompt':
//   console.log(permissionStatus.state);

//   // Listen for changes to the permission state
//   permissionStatus.onchange = () => {
//     console.log('Clipboard Permission State:', permissionStatus.state);
//   };
// });


// document.getElementById('btnCopy').addEventListener('click' , function(){
//   let pre = document.querySelector('pre');
//   navigator.clipboard.writeText(pre.textContent)
//   .then(() => {
//       console.log('Copied to clipboard');
//   })
//   .catch(err => {
//       // This can happen if the user denies clipboard permissions:
//       console.error('Could not copy text: ', err);
//   });
// })

// ##### Clipboard has properties like (readText(), writeText() => for texts & read() , write() => for images)

// ---writeText() => copy text in the clipborad
// let pre = document.querySelector('pre');
//   navigator.clipboard.writeText(pre.textContent)
//   .then(() => {
//       console.log('Copied to clipboard');
//   })
//   .catch(err => {
//       // This can happen if the user denies clipboard permissions:
//       console.error('Could not copy text: ', err);
//   });

// readText() => Retrieve what was in the clipboard
// navigator.clipboard.readText()
// .then(text => {
//     console.log('Content in Clipboard is: ', text);
// })
// .catch(err => {
//     console.error('Failed to read clipboard contents: ', err);
// });

// // you can Add listener for the paste event
// document.addEventListener('paste', ev => {
//     //ev.preventDefault(); //<-- if you don't want the actual paste
    
//     navigator.clipboard.readText().then(text => {
//         console.log('Pasted text: ', text);
//     });
// });

// -----------------------------------Scrolling------------------------
// let h1 = document.querySelector('h1');
// h1.addEventListener('click', (ev)=>{
//     //scrollBy(x, y) scrollTo(x, y)
//     //scrollX(x) scrollY(y)
//     //onscroll
//     console.group();
//     //top of the visible screen
//     console.log('client', ev.clientX, ev.clientY);    
//     //top of the document(webpage)
//     console.log('page', ev.pageX, ev.pageY);
//     // top & left location of click event inside element h1
//     console.log('offsetX&Y', ev.offsetX, ev.offsetY);
//     // top & left location of h1 element at the page ( will not affected by scrolling)
//     console.log('offset', h1.offsetLeft, h1.offsetTop);
//     // top & left location of browser itself related to laptop screen ( will not affected by scrolling)
//     console.log('screen window', window.screenX, window.screenY);
//     // top & left location of click event related to laptop screen
//     console.log('screen ev', ev.screenX, ev.screenY);
//     console.groupEnd();
//     window.scrollBy(0, 600); //document.querySelector('main').classList.toggle('up')
// });


// window.addEventListener('scroll', (ev)=>{
//     console.group();
//     console.log('client', ev.clientX, ev.clientY); // not work with scrolling work only with click event
//     console.log('page', ev.pageX, ev.pageY); // not work with scrolling work only with click event
//     console.log('offsetX&Y', ev.offsetX, ev.offsetY);// not work with scrolling work only with click event
//     console.log('offset', h1.offsetLeft, h1.offsetTop);
//     console.log('screen window', window.screenX, window.screenY);
//     console.log('screen ev', ev.screenX, ev.screenY); // not work with scrolling work only with click event
//     console.groupEnd();
    
//     setTimeout( ()=>{
//         window.scrollTo(0,0);
//     }, 2000);
// })

// ------------------------International Number and Currency Formatting----------------
// let number = 123456.789;
        
// console.group('numbers');
// console.log(new Intl.NumberFormat('en-CA', { style: 'decimal'}).format(number));
// console.log(new Intl.NumberFormat('fr-CA', { style: 'decimal'}).format(number));
// console.groupEnd('numbers');

// console.group('currency');
// console.log(new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', useGrouping: true }).format(number));
// // expected output: "$123,456.79"


// let num = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })
// num.format(number);


// console.log(new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(number));
// // expected output: "??123,456.79"

// console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// // expected output: "123.456,79 ???"

// // the Japanese yen doesn't use a minor unit
// console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// // expected output: "???123,457"
// console.groupEnd('currency');

// // limit to three significant digits
// console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// // expected output: "1,23,000"

// ---------------------------International Localized Time & Date-------------
// let today = new Date();
        
// let us = new Intl.DateTimeFormat('en-US').format(today);
// let ca = new Intl.DateTimeFormat('en-CA').format(today);
// let gb = new Intl.DateTimeFormat('en-GB').format(today);
// let de = new Intl.DateTimeFormat('de-DE').format(today);
// let ar = new Intl.DateTimeFormat('ar').format(today);
// let xx = new Intl.DateTimeFormat('ar', 'sv').format(today);
// let sv = new Intl.DateTimeFormat('sv', 'ar').format(today);
// document.querySelector('p[lang=en-US]').textContent = us;
// document.querySelector('p[lang=sv-SV]').textContent = sv;

// console.log(us);
// console.log(ca);
// console.log(gb);
// console.log(de);
// console.log(ar);
// console.log(xx);
// console.log(sv);

// // Beware that the timezone returned by toISOString is always zero UTC offset, 
// // whereas in toLocaleDateString it is the user agent's timezone.
// console.log("#############")
// const d = new Date() // today, now

// // Timezone zero UTC offset
// console.log(d.toISOString().slice(0, 10)) // YYYY-MM-DD

// // Timezone of User Agent
// console.log(d.toLocaleDateString('en-CA')) // YYYY-MM-DD
// console.log(d.toLocaleDateString('en-US')) // M/D/YYYY
// console.log(d.toLocaleDateString('de-DE')) // D.M.YYYY
// console.log(d.toLocaleDateString('pt-PT')) // DD/MM/YYYY

// --------------------Internationalization & Localization of Strings--------
// let languageCodes = ['sv','en','fr','dk','de','cn','ru', 'el', 'no'];
// console.log( Intl.Collator.supportedLocalesOf(languageCodes) ); // return an Array of supported languages

// // if you did not add an argument to Intl.Collator() will take default language of my computer which is en
// console.log(new Intl.Collator().compare('a', 'z')); // -1 because UTF value of a less than UTF of z
// console.log(new Intl.Collator().compare('z', 'a')); // 1 because UTF value of z bigger than UTF of a
// console.log(new Intl.Collator('en').compare('a', 'z'));

// console.group('sv');
// console.log(new Intl.Collator('sv').compare('??', 'z'));
// console.log(new Intl.Collator('sv').compare('??', 'a'));

// console.log(new Intl.Collator('sv', {
//     sensitivity: "variant", // base (a = A & a = ??) / case (a = A & a != ??) / variant (a != A & a != ??)
//     ignorePunctuation: true, // to ignore Punctuations like (, . / " ")
//     numeric: true, // to compare as numbers not strings
//     caseFirst: false // "upper" to make uppercase at first always / "lower" to make lowercase at first always / false is the default
// }).compare('10', '2'));

// console.log(new Intl.Collator('sv').compare('??', '??'));
// console.log(new Intl.Collator('sv').compare('??', '??'));
// console.groupEnd('sv');

// console.log(new Intl.Collator('de').compare('??', 's'));

// console.log(new Intl.Collator('dk').compare('??', 'z'));
// console.log(new Intl.Collator('dk').compare('??', 'z'));

// ------------------------------Audio in JS---------------------------

// document.addEventListener('DOMContentLoaded', init);
// // we are creating an object with audio files names when the sound works we will change the value
// // of it from null to it's name that will help us to check if the sound already work now and
// // we trigger the event to work it again will pause the old sound and start the sound from start
// // to avoid sound work twice at same time
// const SOUNDS = {
//     'clear-throat':null,
//     'doorbell':null,
//     'static':null
// };
// // you can create a button for exp. to ask the user he needs sounds to work or not (true user allows sound to work)
// let allowSound = true; 

// function init(){
//     let p1 = document.querySelector('p[data-file]');
//     let p2 = document.querySelector('p:nth-of-type(2)');
//     let p3 = document.querySelector('p:last-of-type');
//     p1.addEventListener('click', play);
//     p2.addEventListener('mouseover', play);
//     p3.addEventListener('dblclick', play);
// }

// function play(ev){
//     let p = ev.currentTarget;
//     ev.preventDefault();
    
//     let fn = p.getAttribute('data-file');
//     let src = './media/' + fn + '.mp3';
//     if( SOUNDS[fn] ){
//         SOUNDS[fn].pause();
//         SOUNDS[fn] = null;
//     }
//     console.log(src);
    
//     // you can create audio element or select it from HTML 
//     //let audio = document.getElementById("a"); // [1] selecting the audio element
//     let audio = document.createElement('audio'); // [2] creating the audio element
//     //audio.removeAttribute('controls');
//     //document.body.appendChild(audio); // you should not add the audio element to page it will work anyway
//     audio.src = src;
//     audio.volume = 0.2;
//     //change the starting position in the file
//     //audio.currentTime = 0.8;
//     if(allowSound){
//         SOUNDS[fn] = audio;
//         audio.setAttribute('data-file', fn);
//         audio.play();
//     }
    
    

//     // Event list for <audio> and <video>
//     // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

//     //listen for the event that ends sound
//     audio.addEventListener('playing', goAudio);
//     audio.addEventListener('ended', doneAudio);
// }

// function goAudio(ev){
//     console.log(ev.target.src, 'has started playing');
// }

// function doneAudio(ev){
//     console.log(ev.target.src, 'has finished playing');
//     let fn = ev.target.getAttribute('data-file');
//     SOUNDS[fn] = null;
// }

// ---------------------------CSS Variables------------------
// document.addEventListener('DOMContentLoaded', ()=>{
//   let html = document.documentElement; // HTML element which is :root in CSS File
//   let body = document.body; // body element
//   html.style.setProperty('--COLOR', '#bada55'); // will override variable in CSS File
// })

// ------------------open and close TAB from JS--------------
// you can open an html File or URL

// let openH2 = document.getElementById("open");
// openH2.addEventListener('click', (ev)=>{
//     //window.open(url, windowName, [windowFeatures]);
//     //https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features
//     let options = 'statusbar=no,height=300,width=600';
//     // let options = ""; // if you want to open a new TAB you cannot add height=300,width=600
    
//     // [1] open different html file
//     // _blank or Fred or any other name => open a new TAB or new Window depend on options
//     // _self => open at same TAB even if you added height & width in options
//     //let ref = window.open('new.html', 'Fred', options); 
//     //let ref = window.open('new.html', '_self', options); 
//     // [2] open URL
//     let ref = window.open('https://www.google.com/', '_blank', options); 
    
    
//     let closeH2 = document.getElementById('close');
//     closeH2.style.cursor = 'pointer';
//     closeH2.addEventListener('click', (ev)=>{
//         ref.close();    
//     });
// });

// you can open a different html file you can add this script to open 
// document.addEventListener('DOMContentLoaded', ()=>{
//   console.log(window.opener); // this will refer to the html file that opened the new html file
//   console.log(window.opener.location.href)
//   //put the focus back on the opener
//   window.opener.focus();
// })

// ---------------------Capturing Media (Works also on Mobile Devices)-----------
/* 
- if you add capture attribute to input element (type ="file") will open camera on mobile Phones
- if you want to choose from gallery you should remove capture attribute
- if you want to upload chosen files you should add enctype="multipart/form-data" attribute to form element 
- accept="audio/*" isn't actually supported on iOS " but audio/mp3 works fine
- accept="image/*" and accept="video/*" are supported on iOS "
- to capture record on ios see next tutorials

*/
// document.addEventListener('DOMContentLoaded', (ev)=>{
//   let form = document.getElementById('myform');
//   //get the captured media file
//   let input = document.getElementById('capture');
  
//   input.addEventListener('change', (ev)=>{
//       console.dir( input.files[0] );
//       if(input.files[0].type.indexOf("image/") > -1){
//           let pImg = document.getElementById('img');
//           let img = document.createElement("img")
//           img.src = window.URL.createObjectURL(input.files[0]);
//           pImg.appendChild(img)
//       }
//       else if(input.files[0].type.indexOf("audio/") > -1 ){
//           let pAudio = document.getElementById('audio');
//           let audio = document.createElement("audio")
//           audio.src = window.URL.createObjectURL(input.files[0]);
//           audio.setAttribute("controls","")
//           pAudio.appendChild(audio)
//       }
//       else if(input.files[0].type.indexOf("video/") > -1 ){
//           let pVideo = document.getElementById('video');
//           let video = document.createElement('video');
//           video.src=window.URL.createObjectURL(input.files[0]);
//           video.setAttribute("controls","")
//           pVideo.appendChild(video)
//       }
      
      
//   })
  
// })

// ---------------MediaCapture, MediaRecorder and Streams API--------------
/*
Steps : 
[1] Create Video Stream Using getUserMedia Method
[2] Record the Stream Using MediaRecorder Constructor
[3] show it to the user and download it or upload it on the server 

getUserMedia returns a Promise

resolve - returns a MediaStream Object

reject returns one of the following errors : 
AbortError - generic unknown cause
NotAllowedError (SecurityError) - user rejected permissions
NotFoundError - missing media track
NotReadableError - user permissions given but hardware/OS error
OverconstrainedError - constraint video settings preventing
TypeError - audio: false, video: false

note : we need to use chunks incase of using timeInterval with mediaRecorder.start(200)
because we need an array to hold small videos reach  200 miliseconds 

navigator.mediaDevices.getUserMedia + MediaRecorder create WEBM files without 
duration metadata.
This library appends missing metadata section right to the file blob.
https://github.com/yusitnikov/fix-webm-duration

*/

// (((((Options Object contains audio and video options ))))) => will be passed as argument to getUserMedia Method 

// let options = { 
//   audio: true, // to allow or not allow audio
//   video: {  
//       facingMode: "user", // means front camera
//       width: { min: 640, ideal: 1280, max: 1920 },
//       height: { min: 480, ideal: 720, max: 1080 } 
//   } 
// }; 
// exp. of other options
// // width: 1280, height: 720  -- preference only
// // facingMode: {exact: "user"}
// // facingMode: "environment"

// ----Step 1 => Create Video Stream Using getUserMedia : will return a Promise when resolve returns a MediaStream Object ( Video Stream) 

// navigator.mediaDevices.getUserMedia(options)
// .then(function(mediaStreamObj) {

//   // if you want you can show Video Stream to the User 
//   // let video = document.querySelector('video');
//   // if ("srcObject" in video) { 
//   //   // new browser video has srcObject property
//   //   video.srcObject = mediaStreamObj;
//   // } else {
//   //     //old version does not have srcObject 
//   //     video.src = window.URL.createObjectURL(mediaStreamObj);
//   // }
  
//   // video.onloadedmetadata = function(ev) {
//   //     //show in the video element what is being captured by the webcam
//   //     video.play();
//   // };
  
//   
//   // ---Step 2 => Record the Stream Using MediaRecorder Constructor : accept video stream as argument
//   let start = document.getElementById('btnStart');
//   let stop = document.getElementById('btnStop');
//   let vidSave = document.getElementById('vid2');
//   let mediaRecorder = new MediaRecorder(mediaStreamObj);
//   let chunks = [];
//   let singleBlob;
  
//   start.addEventListener('click', (ev)=>{
//       if(mediaRecorder.state === "inactive"){
//         mediaRecorder.start();
//         console.log(mediaRecorder.state);
//       }
//   })
//   stop.addEventListener('click', (ev)=>{
//       if(mediaRecorder.state === "recording" ){
//         mediaRecorder.stop();
//         console.log(mediaRecorder.state);
//       }
//   });
//   mediaRecorder.ondataavailable = function(ev) {
//     chunks.push(ev.data); // ev.data here is blob
//     singleBlob = ev.data
//   }

//   mediaRecorder.onstop = (ev)=>{
//     // incase of using mediaRecorder.start(200) with time Interval we need to create chunks array  
//     // because we want array contains small videos each one is 200 miliseconds
//     // let blob = new Blob(chunks, { 'type' : 'video/mp4;' }); 
//     // incase of single video recorded 
//       let blob = singleBlob
//       let videoURL = window.URL.createObjectURL(blob);
//       vidSave.src = videoURL;
//   }
// })
// .catch(function(err) { 
//   console.log(err.name, err.message); 
// });



// //----only use this if getUserMedia not included in realy older browsers 
// if (navigator.mediaDevices === undefined) {
//   navigator.mediaDevices = {}; // adding  mediaDevices as a object inside navigator 
//   navigator.mediaDevices.getUserMedia = function(options) { //adding getUserMedia property
//       let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia; // prefixes
//       if (!getUserMedia) {
//           return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
//       }
//       return new Promise(function(resolve, reject) {
//           getUserMedia.call(navigator, options, resolve, reject);
//       });
//   }
// }

// ----------------------Record only Audio---------------
/*
Steps : 
[1] Create Video Stream Using getUserMedia Method
[2] Record the Stream Using MediaRecorder Constructor
[3] show it to the user and download it or upload it on the server 
*/

// works on mobile phone also but should on https not http

// let options = { 
//   audio: true, 
//   video: false
// };

// navigator.mediaDevices.getUserMedia(options)
// .then(function(mediaStreamObj) { 
//   let start = document.getElementById('btnStart');
//   let stop = document.getElementById('btnStop');
//   let output = document.getElementById("output")
//   let mediaRecorder = new MediaRecorder(mediaStreamObj);
//   let singleBlob;
  
//   start.addEventListener('click', (ev)=>{
//       if(mediaRecorder.state === "inactive"){
//         mediaRecorder.start();
//       }
//   })
//   stop.addEventListener('click', (ev)=>{
//       if(mediaRecorder.state === "recording" ){
//         mediaRecorder.stop();
//       }
//   });
//   mediaRecorder.ondataavailable = function(ev) { 
//     singleBlob = ev.data
//   }

//   mediaRecorder.onstop = (ev)=>{
//       let videoURL = window.URL.createObjectURL(singleBlob);
//       let videoEl = document.createElement("audio") 
//       videoEl.setAttribute("controls","")
//       videoEl.src = videoURL;
//       output.appendChild(videoEl)
//   }
// })
// .catch(function(err) { 
//   console.log(err.name, err.message); 
// });

// ----------------------Screen Capture API----------------
/*
Steps : 
[1] Create Video Stream Using get getDisplayMedia Method
[2] Record the Stream Using MediaRecorder Constructor
[3] show it to the user and download it or upload it on the server 
 */
// let options = {
//   video : {
//     MediaSource : "screen",
//     width: 640,
//     height: 480 
//   },
//   audio : true
// }

// navigator.mediaDevices.getDisplayMedia(options)
// .then(function(mediaStreamObj){
//   let start = document.getElementById('btnStart');
//   let stop = document.getElementById('btnStop');
//   let output = document.getElementById("output")
//   let mediaRecorder = new MediaRecorder(mediaStreamObj);

//   start.addEventListener('click', (ev)=>{
//     if(mediaRecorder.state === "inactive"){
//       mediaRecorder.start();
//     }
//   })
//   stop.addEventListener('click', (ev)=>{
//       if(mediaRecorder.state === "recording" ){
//         mediaRecorder.stop();
//       }
//   });
//   mediaRecorder.ondataavailable = function(ev) { 
//     singleBlob = ev.data
//   }

//   mediaRecorder.onstop = (ev)=>{
//       let videoURL = window.URL.createObjectURL(singleBlob);
//       let videoEl = document.createElement("video") 
//       videoEl.setAttribute("controls","")
//       videoEl.src = videoURL;
//       output.appendChild(videoEl)
//   }
// })
// .catch(function(err) { 
//   console.log(err.name, err.message); 
// });


// ------------------Screen Capture API with Audio-----------------
// let start = document.getElementById('btnStart');
// let stop = document.getElementById('btnStop');
// let output = document.getElementById("output")
// let singleBlob;

// async function recordScreen() { 
//   const mimeType = 'video/webm';  
//   const displayStream = await navigator.mediaDevices.getDisplayMedia({video: true, audio: true}); 
//   const voiceStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false }); 
//   // merge displayStream and voiceStream
//   let tracks = [...displayStream.getTracks(), ...voiceStream.getAudioTracks()] 
//   const stream = new MediaStream(tracks); 
//   handleRecord({stream, mimeType}) 
// }
// recordScreen()

// const handleRecord = function ({stream, mimeType}) {     
//   // let recordedChunks = [];      
//   const mediaRecorder = new MediaRecorder(stream);
//   start.addEventListener('click', (ev)=>{
//     if(mediaRecorder.state === "inactive"){
//       mediaRecorder.start();
//     }
//   })
//   stop.addEventListener('click', (ev)=>{
//       if(mediaRecorder.state === "recording" ){
//         mediaRecorder.stop();
//       }
//   });    
//   mediaRecorder.ondataavailable = function (e) {     
//     if (e.data.size > 0) {       
//       // recordedChunks.push(e.data); 
//       singleBlob = e.data
//       console.log(singleBlob)
//     }        
//   };   
//   mediaRecorder.onstop = function () {     
//     // const blob = new Blob(recordedChunks, {       type: mimeType     }); 
//     let videoURL = window.URL.createObjectURL(singleBlob);
//     let videoEl = document.createElement("video") 
//     videoEl.setAttribute("controls","")
//     videoEl.src = videoURL;
//     output.appendChild(videoEl)
//     // recordedChunks = []   
//   };
//   // mediaRecorder.start(200)   
// };


// -----------------------Performance API---------------
/*
- performance.now() better than date.now() because it's more accurate with date.now() the smaller 
number you can get is 1 milisecond but with performance.now() you can get 0.00005 milisecond

-performance.mark("name of mark ") like performance.now() but you don;t have to assign
performance.now() to variables and substract to get difference between 2 performance.now()
just make 2 performance.mark() and give each one an unique name then use performance.measure()
to get a PerformanceMeasure??Object which has a lot of properties like startTime of first performance.mark()
and duration property (difference between 2 performance.mark())??

-performance.getEntries() => array of all performance and you can get specific one by name or type
 */
// let pNow1 = performance.now()
// performance.mark("start")

// for(let i =0; i< 10000; i++){}

// let pNow2 = performance.now()
// performance.mark("end")
// console.log(pNow2 - pNow1)
// console.log(performance.measure("result", "start","end").duration)
// console.log(performance.getEntries()) 
// console.log(performance.getEntriesByName("start")) 
// console.log(performance.getEntriesByType("measure")) 

// -----------------------CSS Attibute selector-------------
/******
[data-beatle] - has attribute
[data-beatle = "john"] - exact => match only data-beatle = "john"
[data-beatle *= "o"]  -contains o => match anything contains "o" data-beatle = "john" or data-beatle = "toni"
[data-beatle ~= "john"]  - space separated => match data-beatle = "hi john depp"
[data-beatle ^= "john"]  - starts with => match data-beatle = "john depp"
[data-beatle $= "john"]  - ends with => match data-beatle = "hi john"
[data-beatle |= "john"]  - hyphen separated, 1st value => match data-beatle = "john-depp"

main [data-beatle |="john"]{
  color: gold;
}
a[href^="https://"]{
  all anchors with href that begins with https:// 
  padding: 2rem;
}
a[href$= ".pdf"]{
  all anchors that link to pdfs
  color: red;
}

and you can use this selectors with querySelector : 
let a = document.querySelector('a[href^="https://"]') //match all <a> with href attribute that start with "https://"
a.style.fontSize = '3rem';
***/

// ------------------------------CSS :target-------------------------
/*
<a> with href="#id" when you click on it the page will scroll to the element which has this is
and you can select this element by :target(look at CSS File)
here we are trying to style :target element and style also <a> with JS Code
 */
// window.addEventListener('load', setCurr);
// window.addEventListener('hashchange', setCurr);

// function setCurr(ev){
//     let p, a, id;
//     //:target not available until...
//     p = document.querySelector(':target'); 
//     console.log(ev.type, p);
//     if(p){
//         id = `a[href="#${p.id}"]`;
//         //console.log(id)
//         document.querySelectorAll('.current').forEach( anchor =>{
//             anchor.classList.remove('current');
//         })
//         a = document.querySelector(id);
//         a.classList.add('current');
//     }
// }

// ------------------------------Web Workers--------------------------
/*
JS is Single threaded but with web worker you can create another js File which has a another 
Thread and work separetly and you can from main.js trigger  functions or fetch calls 
or anything else and get back the result from web worker file to main.js

Steps : 
[1]create worker instance
[2] add Event Listener
[3]send message to web-work.js file => worker.postMessage()

* difference between JS Asynchronous and Web Workers :
- JavaScript is single-threaded (1 thread => 1 CPU)
- Webworkers enable real parallelism (multiple threads on multiple CPU???s)
but Web Worker has no access to DOM but you have access to navigator object , location Object ,.....
 */
// let output = document.getElementById('output');
// let worker;

// document.addEventListener('DOMContentLoaded', init);

// function init(){
//     // [1]create worker instance
//     worker = new Worker('webWorkers/web-work.js');
//     // [2] add Event Listener and callback Function will trigger when web-work message us back
//     worker.addEventListener('message', workerMessaged);
//     worker.addEventListener('error', workerError);
    
//     // [3]send message to web-work.js file
//     // worker.postMessage('Get Started');
    
//     document.body.addEventListener('click', ()=>{
//         //send another message to the worker
//         // worker.postMessage('Other');
//         worker.postMessage("fetch");
//     })
// }

// function workerMessaged(ev){
//     let data = ev.data;
//     // output.textContent += data + '\n'
//     output.textContent += JSON.stringify(data, null, 2) + '\n';
// }

// function workerError(err){
//     console.log(err.message, err.filename);
// }

// ---------------------Orientation API-------------------

// let orn = getOrientation();
// let out = document.getElementById('output');
// out.textContent = orn;
// // screen.orientation is not supported in ios but window.orientation is supported

// // here we mix between screen.orientation and window.orientation to be supported in both ios and desktop
// function getOrientation() {
//   let _orn;
//   if(window.orientation === 0 || window.orientation === 90 || window.orientation === -90 || window.orientation === 180){
//     _orn = window.orientation; // ios => up 0 - down 180 - left 90 - right -90
//   }else if(screen.msOrientation || screen.orientation || screen.mozOrientation){
//     _orn = (screen.msOrientation || screen.orientation || screen.mozOrientation).type; // desktop
//   }
//   switch(_orn){
//       case 0:
//       case 'portrait-primary':
//         window.alert("portrait-primary")
//         break
//       case 180:
//       case 'portrait-secondary':
//         window.alert("portrait-secondary")
//           break;
//       case -90:
//       case 'landscape-primary':
//         window.alert("landscape-primary")
//           break;
//       case 90:
//       case 'landscape-secondary':
//         window.alert("landscape-secondary")
//           break;
//       case undefined:
//         window.alert("not supported")
//           break;
//       default:
//           //something unknown
//   }
//   return _orn;
// }

// window.addEventListener('orientationchange', (ev)=>{
//     orn = getOrientation();
//     out.textContent = orn;
//     console.dir(ev)
// })

// ---------------------------LocalStorage Shopping Cart--------------------
// 2 challenges for you [1] add delete btn to items in cart [2]update total price when incrementing items in cart
// const CART = {
//   KEY: 'bkasjbdfkjasdkfjhaksdfjskd',
//   contents: [],
//   init(){
//       //check localStorage and initialize the contents of CART.contents
//       let _contents = localStorage.getItem(CART.KEY);
//       if(_contents){
//           CART.contents = JSON.parse(_contents);
//       }else{
//           //dummy test data
//           CART.contents = [
//               {id:1, title:'Apple', qty:5, itemPrice: 0.85},
//               {id:2, title:'Banana', qty:3, itemPrice: 0.35},
//               {id:3, title:'Cherry', qty:8, itemPrice: 0.05}
//           ];
//           CART.sync();
//       }
//   },
//   async sync(){
//       let _cart = JSON.stringify(CART.contents);
//       // localStorage.setItem and getItem 99% act synchronous but 1% (when data very big and bad processor will act as asynchronous)
//       await localStorage.setItem(CART.KEY, _cart); 
//   },
//   find(id){
//       //find an item in the cart by it's id
//       let match = CART.contents.filter(item=>{
//           if(item.id == id)
//               return true;
//       });
//       if(match && match[0])
//           return match[0];
//   },
//   add(id){
//       //add a new item to the cart
//       //check that it is not in the cart already
//       if(CART.find(id)){
//           CART.increase(id, 1);
//       }else{
//           let arr = PRODUCTS.filter(product=>{
//               if(product.id == id){
//                   return true;
//               }
//           });
//           if(arr && arr[0]){
//               let obj = {
//                   id: arr[0].id,
//                   title: arr[0].title,
//                   qty: 1,
//                   itemPrice: arr[0].price
//               };
//               CART.contents.push(obj);
//               //update localStorage
//               CART.sync();
//           }else{
//               //product id does not exist in products data
//               console.error('Invalid Product');
//           }
//       }
//   },
//   increase(id, qty=1){
//       //increase the quantity of an item in the cart
//       CART.contents = CART.contents.map(item=>{
//           if(item.id === id)
//               item.qty = item.qty + qty;
//           return item;
//       });
//       //update localStorage
//       CART.sync()
//   },
//   reduce(id, qty=1){
//       //reduce the quantity of an item in the cart
//       CART.contents = CART.contents.map(item=>{
//           if(item.id === id)
//               item.qty = item.qty - qty;
//           return item;
//       });
//       CART.contents.forEach(async item=>{
//           if(item.id === id && item.qty === 0)
//               await CART.remove(id);
//       });
//       //update localStorage
//       CART.sync()
//   },
//   remove(id){
//       //remove an item entirely from CART.contents based on its id
//       CART.contents = CART.contents.filter(item=>{
//           if(item.id !== id)
//               return true;
//       });
//       //update localStorage
//       CART.sync()
//   },
//   empty(){
//       //empty whole cart
//       CART.contents = [];
//       //update localStorage
//       CART.sync()
//   },
//   sort(field='title'){
//       //sort by field - title, price
//       //return a sorted shallow copy of the CART.contents array
//       let sorted = CART.contents.sort( (a, b)=>{
//           if(a[field] > b[field]){
//               return 1;
//           }else if(a[field] < a[field]){
//               return -1;
//           }else{
//               return 0;
//           }
//       });
//       return sorted;
//       //NO impact on localStorage
//   },
//   logContents(prefix){
//       console.log(prefix, CART.contents)
//   }
// };

// let PRODUCTS = [];

// document.addEventListener('DOMContentLoaded', ()=>{
//   //when the page is ready
//   getProducts( showProducts, errorMessage );
//   //get the cart items from localStorage
//   CART.init();
//   //load the cart items
//   showCart();
// });

// function showCart(){
//   let cartSection = document.getElementById('cart');
//   cart.innerHTML = '';
//   let s = CART.sort('qty');
//   s.forEach( item =>{
//       let cartitem = document.createElement('div');
//       cartitem.className = 'cart-item';
      
//       let title = document.createElement('h3');
//       title.textContent = item.title;
//       title.className = 'title'
//       cartitem.appendChild(title);
      
//       let controls = document.createElement('div');
//       controls.className = 'controls';
//       cartitem.appendChild(controls);
      
//       let plus = document.createElement('span');
//       plus.textContent = '+';
//       plus.setAttribute('data-id', item.id)
//       controls.appendChild(plus);
//       plus.addEventListener('click', incrementCart)
      
//       let qty = document.createElement('span');
//       qty.textContent = item.qty;
//       controls.appendChild(qty);
      
//       let minus = document.createElement('span');
//       minus.textContent = '-';
//       minus.setAttribute('data-id', item.id)
//       controls.appendChild(minus);
//       minus.addEventListener('click', decrementCart)
      
//       let price = document.createElement('div');
//       price.className = 'price';
//       let cost = new Intl.NumberFormat('en-CA', 
//                       {style: 'currency', currency:'CAD'}).format(item.qty * item.itemPrice);
//       price.textContent = cost;
//       cartitem.appendChild(price);
      
//       cartSection.appendChild(cartitem);
//   })
// }

// function incrementCart(ev){
//   ev.preventDefault();
//   let id = parseInt(ev.target.getAttribute('data-id'));
//   CART.increase(id, 1);
//   let controls = ev.target.parentElement;
//   let qty = controls.querySelector('span:nth-child(2)');
//   let item = CART.find(id);
//   if(item){
//       qty.textContent = item.qty;
//   }else{
//       document.getElementById('cart').removeChild(controls.parentElement);
//   }
// }

// function decrementCart(ev){
//   ev.preventDefault();
//   let id = parseInt(ev.target.getAttribute('data-id'));
//   CART.reduce(id, 1);
//   let controls = ev.target.parentElement;
//   let qty = controls.querySelector('span:nth-child(2)');
//   let item = CART.find(id);
//   if(item){
//       qty.textContent = item.qty;
//   }else{
//       document.getElementById('cart').removeChild(controls.parentElement);
//   }
// }

// function getProducts(success, failure){
//   //request the list of products from the "server"
//   const URL = "https://prof3ssorst3v3.github.io/media-sample-files/products.json";
//   fetch(URL, {
//       method: 'GET',
//       mode: 'cors'
//   })
//   .then(response=>response.json())
//   .then(showProducts)
//   .catch(err=>{
//       errorMessage(err.message);
//   });
// }

// function showProducts( products ){
//   PRODUCTS = products;
//   //take data.products and display inside <section id="products">
//   let imgPath = 'https://prof3ssorst3v3.github.io/media-sample-files/';
//   let productSection = document.getElementById('products');
//   productSection.innerHTML = "";
//   products.forEach(product=>{
//       let card = document.createElement('div');
//       card.className = 'card';
//       //add the image to the card
//       let img = document.createElement('img');
//       img.alt = product.title;
//       img.src = imgPath + product.img;
//       card.appendChild(img);
//       //add the price
//       let price = document.createElement('p');
//       let cost = new Intl.NumberFormat('en-CA', 
//                               {style:'currency', currency:'CAD'}).format(product.price);
//       price.textContent = cost;
//       price.className = 'price';
//       card.appendChild(price);
      
//       //add the title to the card
//       let title = document.createElement('h2');
//       title.textContent = product.title;
//       card.appendChild(title);
//       //add the description to the card
//       let desc = document.createElement('p');
//       desc.textContent = product.desc;
//       card.appendChild(desc);
//       //add the button to the card
//       let btn = document.createElement('button');
//       btn.className = 'btn';
//       btn.textContent = 'Add Item';
//       btn.setAttribute('data-id', product.id);
//       btn.addEventListener('click', addItem);
//       card.appendChild(btn);
//       //add the card to the section
//       productSection.appendChild(card);
//   })
// }

// function addItem(ev){
//   ev.preventDefault();
//   let id = parseInt(ev.target.getAttribute('data-id'));
//   console.log('add to cart item', id);
//   CART.add(id, 1);
//   showCart();
// }

// function errorMessage(err){
//   //display the error message to the user
//   console.error(err);
// }

// -------------------------FullScreen API---------------------------

// List of prefixed versions of props
// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API#Prefixing
// onwebkitfullscreenchange-onfullscreenchange-onmozfullscreenchange-MSFullscreenChange

// let h1 = document.querySelector('h1');
// let vid = document.querySelector('#vid');
// let aud = document.querySelector('#aud');

// h1.addEventListener('click', goBig);
// vid.addEventListener('click', goBig);
// aud.addEventListener('click', goBig);

// h1.addEventListener('dblclick', goHome);
// vid.addEventListener('dblclick', goHome);
// aud.addEventListener('dblclick', goHome);

// // incase of user used esc btn instead of double click to trigger goHome function
// document.addEventListener('webkitfullscreenchange', toggleFull);

// function goBig(ev){
//     let element = ev.currentTarget;
//     // console.dir(element);
//     if(! document.webkitFullscreenElement){
//         if(element.webkitRequestFullscreen){
//             element.webkitRequestFullscreen();
//             element.classList.add('big');
//         }else{
//             console.log('element cannot be fullscreened');
//         }
//     }else{
//         console.log(document.webkitFullscreenElement, 'is the full screen element');
//     }
// }

// function goHome(ev){
//     let element = ev.target;
//     // console.log(element)
//     element.classList.remove('big');
//     if( document.webkitFullscreenEnabled){
//         document.webkitExitFullscreen();
//     }   
// }

// function toggleFull(ev){
//     let element = document.webkitFullscreenElement;
//     if(element){
//         element.classList.add('big');
//         console.log('big class added')
//     }else{
//         //remove it from the first element with it
//         element = document.querySelector('h1.big, audio.big, video.big');
//         element.classList.remove('big');
//         //when people use esc instead of dblclick
//     }
// }

// ----------------------------------Canvas------------------------------
/* 
The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript.
The <canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics.
Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

- default display css style of canvas element is inline
- it's better to add width and height in JS File no CSS File because in CSS 
  will strectch the image and will destroy aspect ratio
*/

// ---------intro to Canvas
// let canvas, ctx;
        
// document.addEventListener('DOMContentLoaded', (ev)=>{
//   canvas = document.getElementById('canvas');
//   ctx = canvas.getContext('2d'); //webgl, webgl2
//   canvas.width = 600;
//   canvas.height = 400;
  
//   //drawRect();
//   drawEllipse();
//   drawRect();
// });

// // you have 2 options to draw 
// // [1] define position and width and height using ctx.rect then use ctx.fill() and ctx.stroke() Methods
// // [2] use directly ctx.fillRect(position and width and height) and ctx.strokeRect(position and width and height) in one step

// const drawRect = function(){
//   //position x,position y (positions related to canvas element), width, height  
//   ctx.rect(300, 100, 100, 50); 
    
//   //define the stroke
//   ctx.strokeStyle = `red`;
//   ctx.lineWidth = 10; // width of line used as border 
  
//   //define the fill
//   ctx.fillStyle = `skyblue`;
  
//   //fill and stroke 
//   // ctx.fill(); // to fill the shape with color defined in ctx.fillStyle
//   // ctx.stroke(); // to add border with color defined in ctx.strokeStyle
//   // ctx.fill();
  
//   //draw a rect fill or stroke x, y, w, h
//   ctx.fillRect(200, 300, 100, 50);
//   ctx.strokeRect(100, 100, 100, 50);
  
//   //delete a rect
//   //ctx.clearRect(x, y, width, height)
//   ctx.clearRect(150, 50, 100, 500)
// }

// const drawEllipse = function(){
//   // it's important to write ctx.beginPath() if not the darw line will start from
//   // last circle like when you draw circle and you want to draw another circle you
//   // are not move you hand up and draw 2nd circle then will be there a line between 2 circles
//  // difference between ellipse and arc is ellipse has radiusX, radiusY so you can draw 
//  // oval shape and circle but arc only has radius so you can only draw perfect circle

//   ctx.beginPath();
//   //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlock);
//   ctx.ellipse(200, 200, 100, 50, 0, 0, (Math.PI*2), false);
//   ctx.fill();
//   ctx.stroke();
  
//   ctx.beginPath();
//   //ctx.arc(x, y, radius, startAngle, endAngle, anticlock);
//   ctx.arc(400, 200, 50, 0, (Math.PI * 1.5), false);
//   ctx.fill();
//   ctx.stroke();
// }

// -------Canvas Text
// let canvas, ctx, f,txt;
// let oldTxt=""
        
// window.addEventListener('load', (ev)=>{
//   canvas = document.getElementById('canvas');
//   ctx = canvas.getContext('2d'); 
//   canvas.width = 600;
//   canvas.height = 400;
  
//   drawText();
//   document.getElementById('msg').addEventListener('input', drawText);
  
//   // instead of importing front in CSS File using import @import url()
//   // f = new FontFace('Allerta Stencil', 'url(https://fonts.gstatic.com/s/allertastencil/v8/HTx0L209KT-LmIE9N7OR6eiycOe1_Db29XP-vA.woff2)');
//   // f.load()
//   // .then(function(fnt) {
//   //     console.log(`loaded ${fnt.family}`);
//   // })
//   // .catch(err=>{
//   //     //error loading the font
//   //     console.error('Failed to load the google font');
//   // });
// });

// const drawText = function(){
//   // normal, italic, bold
//   // px pt cm in rem em
//   // any installed or imported font
//   let fontFamily = 'Allerta Stencil';
//   // we imported front in CSS File using import @import url()
//   ctx.font = `normal 20px xyz, ${fontFamily}, Helvetica, Arial, monospace`;
//   ctx.fillStyle = 'cornflowerblue';
//   ctx.strokeStyle = '#bada55';
//   //textAlign center, left, right, end, start (end, start depends on direction ltr or rtl)
//   ctx.textAlign = 'start';
//   //textBaseline top, hanging, middle, bottom,ideographic, alphabetic
//   ctx.textBaseline = 'alphabetic';
//   //direction ltr, rtl, inherit
//   ctx.direction = 'ltr';
  
//   txt = document.getElementById('msg').value;
//   if( txt === '' ){
//     txt = 'Please give me a message.';
//     oldTxt = txt
//   }
//   let w1 = ctx.measureText(oldTxt).width; 
//   let w2 = ctx.measureText(txt).width;
//   if(w2 > w1){
//     oldTxt = txt
//   }
//   // returns an object that contains the width of the specified text, in pixels.
//   ctx.clearRect(50, 110, w1, -30);
//   // difference between strokeText and fillText is stroke is border and fill is the fill inside charachters in words
//   // ctx.strokeText(txt, 50, 100);
//   ctx.fillText(txt, 50, 100);
  
  
//   ctx.fillStyle = '#999';
//   ctx.font = 'italic 20px Arial';
//   let m = `Message is ${w1}px wide`;
//   ctx.clearRect(50, 310, 500, -30);
//   ctx.fillText(m, 50, 300);
// }

// -------Canvas Lines and Curves
/* you can use lineTo() to draw straight line but if you want to draw curved line
you have to use quadraticCurveTo or bezierCurveTo and using midpoints to make 
line curved toward this midpoint

[1] lineTo(endX , endY) accept only 2 param x & y of endpoint
[2] quadraticCurveTo() accept 4 params x & y of midpoint and x & y of endpoint
[3] bezierCurveTo() accept 6 params x & y of 2 midpoints and x & y of endpoint
*/
// let ctx;
// let midx, midy, midx1, midy1, midx2, midy2;

// document.addEventListener('DOMContentLoaded', (ev)=>{
//     let canvas = document.getElementById('canvas');
//     ctx = canvas.getContext('2d'); 
//     canvas.width = 600;
//     canvas.height = 400;

//     canvas.addEventListener('mousedown', start);
//     // canvas.addEventListener('mouseup', end);
//     //canvas.addEventListener('mouseup', endQC);
//     canvas.addEventListener('mouseup', endBC);
    
//     // shape and thickness of line
//     ctx.lineCap = 'square'; //butt, round
//     ctx.lineWidth = 10; // thickness of the line

//     // midpoints positions
//     midx = canvas.width/2;
//     midy = canvas.height/2;
    
//     midx1 = canvas.width/4;
//     midy1 = canvas.height/4;
//     midx2 = canvas.width - midx1;
//     midy2 = canvas.height - midy1;
    
//     // to draw circles of midpoint (just to show them only for demonestration)
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.arc(midx, midy, 5, 0, 2 * Math.PI, false);
//     ctx.strokeStyle = 'red';
//     ctx.stroke();
//     ctx.closePath()
    
//     ctx.beginPath();
//     ctx.arc(midx1, midy1, 5, 0, 2 * Math.PI, false);
//     ctx.strokeStyle = 'orange';
//     ctx.stroke();
//     ctx.closePath()
    
//     ctx.beginPath();
//     ctx.arc(midx2, midy2, 5, 0, 2 * Math.PI, false);
//     ctx.strokeStyle = 'skyblue';
//     ctx.stroke();
//     ctx.closePath()

//     // this how to draw triangle 
//     ctx.beginPath()
//     ctx.moveTo(0,50)
//     ctx.lineTo(50,0)
//     ctx.lineTo(100,50)
//     ctx.lineTo(0,50)
//     ctx.fill()
//     ctx.closePath()
// });

// let start = function(ev){
//     ctx.beginPath();
//     ctx.strokeStyle = '#bada55';
//     console.log('from', ev.offsetX, ev.offsetY);
//     ctx.moveTo(ev.offsetX, ev.offsetY);
// }
// let end = function(ev){
//     //using lineTo(x, y)
//     console.log('to', ev.offsetX, ev.offsetY);
//     ctx.lineTo(ev.offsetX, ev.offsetY); // draw line to this position
//     ctx.stroke();
//     ctx.closePath()
// }
// let endQC = function(ev){
//     //using quadraticCurveTo(midx, midy, endx, endy)
//     console.log('to', ev.offsetX, ev.offsetY);
//     let endx = ev.offsetX;
//     let endy = ev.offsetY;
//     ctx.quadraticCurveTo(midx, midy, endx, endy);
//     ctx.stroke();
//     ctx.closePath()
// }
// let endBC = function(ev){
//     //using bezierCurveTo(midx1, midy1, midx2, midy2, endx, endy)
//     console.log('to', ev.offsetX, ev.offsetY);
//     let endx = ev.offsetX;
//     let endy = ev.offsetY;
//     ctx.bezierCurveTo(midx1, midy1, midx2, midy2, endx, endy);
//     ctx.stroke();
//     ctx.closePath()
// }

// -------Canvas images
// let ctx;
        
// document.addEventListener('DOMContentLoaded', (ev)=>{
//     let canvas = document.getElementById('canvas');
//     ctx = canvas.getContext('2d'); 
//     canvas.width = 600;
//     canvas.height = 400;
    
//     let imgObj = new Image();
//     imgObj.src = './videos/archer-bob.jpeg';

//     imgObj.onload = function() {
//         let w = canvas.width;
//         let nw = imgObj.naturalWidth;   //1350
//         let nh = imgObj.naturalHeight;  //900
//         let aspect = nw / nh; // aspect ratio
//         let h = w / aspect;
//         canvas.height = h;
//         // 0,0 image position inside canvas |  w , h width and height of image
//         ctx.drawImage(imgObj, 0, 0, w, h); 
        
//         // you can crop part of image 350 , 180 posiotion of cropped part inside image
//         // 100, 100 width and height of cropped part 
//         // 0,0 image position inside canvas |  w , h width and height of image
//         // ctx.drawImage(imgObj, 350, 180, 100, 100 , 0 , 0 , w, h);
//     };

//     //canvas.addEventListener('click', greyscale);
//     canvas.addEventListener('click', colorChannel);
// });

// const greyscale = function(ev){
//     imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     let arr = imgData.data;
//     // i+4 because each color is one data and each pixel has 4 colors(red,blue,green,alpha) => 4 data
//     for(let i=0; i<arr.length; i=i+4){ 
//         let ttl = arr[i] + arr[i+1] + arr[i+2];
//         let avg = parseInt(ttl/3);
//         // if you set red , blue and green same value you will get grey shade
//         arr[i] = avg;   //red
//         arr[i+1] = avg; //green
//         arr[i+2] = avg; //blue
//     }
//     imgData.data = arr;
//     ctx.putImageData(imgData, 0, 0);
// }

// const colorChannel = function(ev){
//     imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     let arr = imgData.data;
//     for(let i=0; i<arr.length; i=i+4){
//         //you can change value of each color and you know largest value for color is 256
//         arr[i] = 0;     //R
//         // arr[i+1] = 0;   //G
//         // arr[i+2] = 0;   //B
//     }
//     imgData.data = arr;
//     ctx.putImageData(imgData, 0, 0);
    
//     let img = canvas.toDataURL('image/jpeg', 1.0); // 1.0 means full resolution
//     console.log(img); // base64
//     document.querySelector('img').src = img;
// }

// -------Canvas Graph
// let data = [
//   {name:'Targaryen', troops:90200, color:"blue"},
//   {name:'Tully', troops:15000, color:"green"},
//   {name:'Stark', troops:50500, color:"red"},
//   {name:'Lannister', troops:120800,color:"cornflowerblue"},
//   {name:'Mormont', troops:16000,color:"pink"}
// ];

// // you can use random hex color or use colors in data object
// const randomHexColorCode = () => {
//   return "#" + Math.random().toString(16).slice(2, 8)
// };

// document.addEventListener('DOMContentLoaded', ()=>{
//   let canvas = document.getElementById('c');
//   let ctx = canvas.getContext('2d');
//   canvas.width = 800;
//   canvas.height = 600;
//   let total = data.reduce( (ttl, house) => {
//       return ttl + house.troops
//   }, 0);
//   let startAngle = 0; 
//   let radius = 100;
//   // centering the graph inside canvas element
//   let cx = canvas.width/2;
//   let cy = canvas.height/2;
  
//   data.forEach( house => {
//       //set the styles before beginPath
//       // ctx.fillStyle = randomHexColorCode(); // using random hex color
//       ctx.fillStyle = house.color
//       ctx.lineWidth = 1;
//       ctx.strokeStyle = '#333';
//       ctx.beginPath();

//       // draw the pie wedges
//       let endAngle = ((house.troops / total) * Math.PI * 2) + startAngle;
//       ctx.moveTo(cx, cy);
//       ctx.arc(cx, cy, radius, startAngle, endAngle, false);
//       ctx.lineTo(cx, cy);
//       ctx.fill();
//       ctx.stroke();
//       ctx.closePath();
      
//       // add the labels
//       ctx.beginPath();
//       ctx.font = '20px Helvetica, Calibri';
//       ctx.textAlign = 'center';
//       ctx.fillStyle = 'rebeccapurple';
//       // midpoint between the two angles
//       // 1.5 * radius is the length of the Hypotenuse
//       let theta = (startAngle + endAngle) / 2;
//       let deltaY = Math.sin(theta) * 1.5 * radius;
//       let deltaX = Math.cos(theta) * 1.5 * radius;
//       /***
//       SOH  - sin(angle) = opposite / hypotenuse
//                         = opposite / 1px
//       CAH  - cos(angle) = adjacent / hypotenuse
//                         = adjacent / 1px
//       TOA
      
//       ***/
//       ctx.fillText(house.name, deltaX+cx, deltaY+cy);
//       ctx.closePath();

//       // change startAngle every loop to make sure next element start from the end of last element
//       startAngle = endAngle;
//   })
// });

// --------canvas tansform
// let ctx;

// document.addEventListener('DOMContentLoaded', ()=>{
//     let canvas = document.getElementById('canvas');
//     ctx = canvas.getContext('2d');
//     canvas.width = 600;
//     canvas.height = 800;
//     ctx.fillStyle = 'cornflowerblue';
//     ctx.strokeStyle = '#ccc';
//     ctx.lineWidth = 2;
//     ctx.textAlign = 'start';
//     ctx.font = 'normal 30px Arial';
//     drawGrid(100);

//     let x = 100;
//     let y = 100;
//     ctx.save();  //creates a save point
//     ctx.beginPath();
//     // now starting point(0,0) is 200 x direction and 200 y direction
//     ctx.translate(200, 200); 
//     ctx.fillText('translate', 10, 30);
//     ctx.fill();
//     ctx.closePath();
//     ctx.restore(); //go back to the last save point

//     // without ctx.save() and ctx.restore();
//     // ctx.translate(200, 200); still make starting point(0,0) is 200 x direction and 200 y direction
//     // with ctx.save() and ctx.restore(); 
//     // we are deactivating ctx.translate(200, 200); and starting point return to (0,0)
//     ctx.save();
//     ctx.beginPath();
//     ctx.arc(0, 0, 10, 0, Math.PI*2);
//     ctx.rotate(Math.PI/4);        //3.14 radians 180 deg
//     ctx.fillText('rotate', 300, 0);
//     ctx.fill();
//     ctx.closePath();
//     ctx.restore();

//     ctx.beginPath();
//     ctx.translate(100, 500);
//     ctx.scale(1, -1);
//     ctx.fillText('scale', x, y);
//     ctx.fill();
//     ctx.closePath();

    
// });

// function drawGrid(gap){
//     ctx.beginPath();
//     for(x=gap; x<canvas.width; x=x+gap){
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, canvas.height);
//     }
//     for(let y=gap; y<canvas.height; y=y+gap){
//         ctx.moveTo(0, y);
//         ctx.lineTo(canvas.height, y);
//     }
//     ctx.stroke();
//     ctx.closePath();
// }

// ---------canvas video frames grab and image upload
// const grabScreen = () =>{
//   let player = document.getElementById('player')
//   let canvas = document.getElementById('canvas');
//   let ctx = canvas.getContext('2d');
//   canvas.width = player.videoWidth;
//   canvas.height = player.videoHeight;
//   //grab a frame from the video
//   ctx.drawImage(player, 0, 0);
//   //convert to grayscale image
//   //ONLY WORKS IF image is not tainted by CORS
//   let imgdata = ctx.getImageData(0,0, canvas.width, canvas.height);
//   let len = imgdata.data.length;
//   for(let i=0; i<len; i=i+4){
//       let red = imgdata.data[i];
//       let green = imgdata.data[i+1];
//       let blue = imgdata.data[i+2];
//       //let lum = .2126 * red + .7152 * green + .0722 * blue;
//       let lum = (red + green + blue)/3;
//       imgdata.data[i] = lum;
//       imgdata.data[i+1] = lum;
//       imgdata.data[i+2] = lum;
//   }
//   //update what is displayed on the canvas.
//   ctx.putImageData(imgdata, 0, 0);
//   //export as image file to be uploaded or saved
  
//   let blob = canvas.toBlob((blob) => {
//       //this code runs AFTER the Blob is extracted
//       let fd = new FormData();
//       fd.append('field-name', blob, 'image-filename.png');    
//       let req = new Request('https://jsonplaceholder.typicode.com/posts', {
//           method: 'POST',
//           body: fd
//       })
//       fetch(req)
//       .then(response=>response.json())
//       .then(data=>{
//           console.log('response from server after uploading the image');
//       })
//       .catch(err=>{
//           console.log(err.message);
//       });
      
//       //load the blob into the image tag
//       let img = document.createElement('img');
//       let url = URL.createObjectURL(blob);
//       img.addEventListener('load', (ev)=>{
//           console.log('image from createObjectURL loaded');
//           //player.pause();  //stop the video playing if desired
//           //let vid = document.createElement('video');
//           //vid.poster = url;
//           //document.body.appendChild(vid);
          
//           //clear memory used to create object url
//           //this will make it impossible to download the image with a right click
//           //window.URL.revokeObjectURL(url);
//       })
//       img.src = url; //use the canvas binary png blob
//       document.getElementById('image').appendChild(img);
  
//   }, 'image/png'); //create binary png from canvas contents
  
// }

// //MEDIA EVENTS
// //https://developer.mozilla.org/en-US/docs/Web/Events#Media_events

// document.addEventListener('DOMContentLoaded', ()=>{
//   let player = document.getElementById('player');
//   // canplay event means this video can be played
//   player.addEventListener('canplay', (ev)=>{
//       console.log('canplay', ev.target.videoWidth, ev.target.videoHeight);
//       console.log(ev.target.clientWidth, ev.target.clientHeight);
//       console.log(ev.target.currentSrc, ev.target.duration, ev.target.currentTime);
//       player.addEventListener('click', (ev)=>{
//           //click the video to grab a screenshot and display in the canvas
//           grabScreen();
//       })
//   });
  
//   player.addEventListener('canplaythrough', (ev)=>{
//       // canplaythrough event means this video buffered enough to start playing
//       //this is our own autoplay
//       console.log('Enough loaded to play through whole video');
//       player.play();
//   });
  
//   player.addEventListener('load', (ev)=>{
//       //video has loaded entirely
//       console.log('video loaded');
//   });
  
//   player.addEventListener('error', (err)=>{
//       console.log('Failed to load video', err.message);
//   })
// })

// ------canvas 
// let canvas, ctx, img1, img2, img3;
// let images = [];

// document.addEventListener("DOMContentLoaded", () => {
//   canvas = document.getElementById("canvas");
//   ctx = canvas.getContext("2d");
//   canvas.width = 1200;
//   canvas.height = 600;
//   img1 = document.createElement("img");
//   img2 = document.createElement("img");
//   img3 = document.createElement("img");
//   img1.addEventListener("load", trackLoads);
//   img2.addEventListener("load", trackLoads);
//   img3.addEventListener("load", trackLoads);
//   img1.src = "./videos/archer-bob.jpeg";
//   img2.src = "./videos/archer-bob.jpeg";
//   img3.src = "./videos/archer-bob.jpeg";
// });

// function trackLoads(ev) {
//   let imgObj = {
//     sw: ev.target.naturalWidth,
//     sh: ev.target.naturalHeight * (3 / 4),
//     img: ev.target
//   };
//   images.push(imgObj);

//   console.log(imgObj);
//   if (images.length === 3) {
//     addThumbnails();
//   }
// }

// function addThumbnails() {
//   //image has been loaded to the document.
//   //add 12 copies of the images to the canvas 4 columns x 3 rows
//   //each thumbnail will be 300px wide by 200px high
//   //calculate the part of the image to use as the thumbnail
//   let dx = 0;
//   let dy = 0;
//   let imgCount = 0;
//   for (let r = 0; r < 3; r++) {
//     for (let c = 0; c < 4; c++) {
//       dx = c * 300; // 0, 300, 600, 900
//       dy = r * 200; // 0, 200, 400
//       let imgObj = images[Math.floor(imgCount % 3)]; //0, 1, 2
//       imgCount++;
//       // image 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3
//       ctx.drawImage(
//         imgObj.img,
//         0,
//         0,
//         imgObj.sw,
//         imgObj.sh,
//         dx,
//         dy,
//         300,
//         200
//       );
//       // ctx.drawImage( source, sx, sy, sw, sh, dx, dy, dw, dh)
//     }
//   }
// }

// ----------------Extracting Colour Values from Pixel Coordinates-------------
// // this only a demo to understand how calculation of next tutorial
// let grid = document.querySelector('.grid');
// let cols = grid.getAttribute('data-cols');
// let rows = grid.getAttribute('data-rows');
// //display the grid info in the paragraph below the grid
// document.getElementById('cols').textContent = cols;
// document.getElementById('rows').textContent = rows;
// //size the grid
// grid.style.width = `${cols * 100 + 2}px`;
// grid.style.height = `${rows * 100 + 2}px`;
// //build the grid based on data-rows and data-cols attributes
// for (let r = 0; r < rows; r++) {
//   for (let c = 0; c < cols; c++) {
//     let div = document.createElement('div');
//     div.className = 'pixel';
//     div.setAttribute('data-coord', `${c}, ${r}`);
//     grid.append(div);
//   }
// }
// //listen for mouse movement over the grid
// document.querySelector('.grid').addEventListener('mousemove', getPixel);

// function getPixel(ev) {
//   let pixel = ev.target;
//   //remove the old highlight class
//   document.querySelector('.highlight')?.classList.remove('highlight');
//   //add the highlist class to the current pixel div
//   pixel.classList.add('highlight');
//   let p1 = document.getElementById('coords');
//   let p2 = document.getElementById('pixelPos');
//   let p3 = document.getElementById('arrayPos');
//   let p4 = document.getElementById('arraySize');

//   let coords = pixel.getAttribute('data-coord');
//   p1.textContent = `Selected pixel (${coords})`;

//   let pixelPos = coords.split(', ');
//   let col = Number(pixelPos[0]);
//   let row = Number(pixelPos[1]);
//   let pixelIndex = cols * row + col;
//   p2.innerHTML = `Pixel INDEX<br/>Total columns * row + column<br/>${cols} * ${row} + ${col} = ${pixelIndex}`;

//   let arrayPos = pixelIndex * 4;
//   p3.innerHTML = `Pixel [r,g,b,a] values in array positions<br/>[ ${arrayPos}, ${
//     arrayPos + 1
//   }, ${arrayPos + 2}, ${arrayPos + 3} ]`;

//   p4.innerHTML = `In the grid there are ${
//     rows * cols
//   } pixels.<br/>In the Array there are ${rows * cols * 4} elements.`;
// }

// ----------------Colour Extraction Tool using Canvas--------------
// const APP = {
//   canvas: null,
//   ctx: null,
//   data: [],
//   img: null,
//   init() {
//     APP.canvas = document.querySelector('main canvas');
//     APP.ctx = APP.canvas.getContext('2d');
//     APP.canvas.width = 900;
//     APP.canvas.style.width = 900;
//     APP.canvas.height = 600;
//     APP.canvas.style.height = 600;
//     // we will not append img element to the page it will be saved im the memory then use it on drawImage method to draw it inside canvas element
//     APP.img = document.createElement('img');
//     APP.img.src = APP.canvas.getAttribute('data-src');
//     //once the image is loaded, add it to the canvas
//     APP.img.onload = (ev) => {
//       APP.ctx.drawImage(APP.img, 0, 0);
//       //call the context.getImageData method to get the array of [r,g,b,a] values
//       let imgDataObj = APP.ctx.getImageData(
//         0,
//         0,
//         APP.canvas.width,
//         APP.canvas.height
//       );
//       APP.data = imgDataObj.data; //data prop is an array
//       // console.log(APP.data.length, 900 * 600 * 4); //  has 2,160,000 elements
//       APP.canvas.addEventListener('mousemove', APP.getPixel);
//       APP.canvas.addEventListener('click', APP.addBox);
//     };
//   },
//   getPixel(ev) {
//     //as the mouse moves around the image
//     // let canvas = ev.target;
//     let cols = APP.canvas.width;
//     // let rows = canvas.height;
//     let { offsetX, offsetY } = ev;
//     //call the method to get the r,g,b,a values for current pixel
//     let c = APP.getPixelColor(cols, offsetY, offsetX);
//     //build a colour string for css
//     let clr = `rgb(${c.red}, ${c.green}, ${c.blue})`; //${c.alpha / 255}
//     document.getElementById('pixelColor').style.backgroundColor = clr;
//     //save the string to use elsewhere
//     APP.pixel = clr;
//     //now get the average of the surrounding pixel colours
//     APP.getAverage(ev);
//   },
//   getAverage(ev) {
//     //create a 41px by 41px average colour square
//     //replace everything in the canvas with the original image
//     // let canvas = ev.target;
//     let cols = APP.canvas.width;
//     let rows = APP.canvas.height;
//     //remove the current contents of the canvas to draw the image and box again
//     APP.ctx.clearRect(0, 0, cols, rows);
//     //add the image from memory
//     APP.ctx.drawImage(APP.img, 0, 0);
//     let { offsetX, offsetY } = ev;
//     const inset = 20;
//     //inset by 20px as our workable range(to stop the box from exiting the canvas element)
//     offsetX = Math.min(offsetX, cols - inset);
//     offsetX = Math.max(inset, offsetX);
//     offsetY = Math.min(offsetY, rows - inset);
//     offsetY = Math.max(offsetY, inset);
//     //create a 41 x 41 pixel square for the average
//     let reds = 0; //total for all the red values in the 41x41 square
//     let greens = 0;
//     let blues = 0;
//     //for anything in the range (x-20, y-20) to (x+20, y+20)
//     for (let x = -1 * inset; x <= inset; x++) {
//       for (let y = -1 * inset; y <= inset; y++) {
//         let c = APP.getPixelColor(cols, offsetY + y, offsetX + x);
//         reds += c.red;
//         greens += c.green;
//         blues += c.blue;
//       }
//     }
//     let nums = 41 * 41; //total number of pixels in the box
//     let red = Math.round(reds / nums);
//     let green = Math.round(greens / nums);
//     let blue = Math.round(blues / nums);
//     //create a colour string for the average colour
//     let clr = `rgb(${red}, ${green}, ${blue})`;
//     //now draw an overlaying square of that colour
//     //make the square twice as big as the sample area
//     APP.ctx.fillStyle = clr;
//     APP.ctx.strokeStyle = '#FFFFFF';
//     APP.ctx.strokeWidth = 2;
//     //save the average colour for later
//     APP.average = clr;
//     APP.ctx.strokeRect(offsetX - inset, offsetY - inset, 41, 41);
//     APP.ctx.fillRect(offsetX - inset, offsetY - inset, 41, 41);
//   },
//   getPixelColor(cols, x, y) {
//     //see grid.html as reference for this algorithm
//     let pixel = cols * x + y;
//     let arrayPos = pixel * 4;
//     return {
//       red: APP.data[arrayPos],
//       green: APP.data[arrayPos + 1],
//       blue: APP.data[arrayPos + 2],
//       alpha: APP.data[arrayPos + 3],
//     };
//   },
//   addBox(ev) {
//     //user clicked. Let's add boxes below with the pixel and the average
//     let colours = document.querySelector('.colours');
//     let pixel = document.createElement('span');
//     pixel.className = 'box';
//     pixel.setAttribute('data-label', 'Exact pixel');
//     pixel.setAttribute('data-color', APP.pixel);

//     let average = document.createElement('span');
//     average.className = 'box';
//     average.setAttribute('data-label', 'Average');
//     average.setAttribute('data-color', APP.average);

//     pixel.style.backgroundColor = APP.pixel;
//     average.style.backgroundColor = APP.average;
//     colours.append(pixel, average);
//   },
// };

// document.addEventListener('DOMContentLoaded', APP.init);

// ------------------Debugger keyword------------
// https://youtu.be/fs8PwQAx_Tw

// let x = 1;
// const doClick = (ev)=>{
//     x = 4;
//     debugger;
//     console.log('the debugger is enabled');
//     x = 7;
// };

// document.addEventListener('DOMContentLoaded', ()=>{
//     document.body.addEventListener('click', doClick);
// });


// ------------------forms in js--------------------
/*
- if there is a button inside a form once you click it will submit the form even the button 
type is not submit
- you can add value attribute to input element in HTML File and this will be default value 
of this input field and you can write anything inside input field to change it
- to clear form you can use reset() method
*/
// let movies = [];
// // example {id:1592304983049, title: 'Deadpool', year: 2015}
// const addMovie = (ev)=>{
//     ev.preventDefault();  //to stop the form submitting
//     let movie = {
//         id: Date.now(),
//         title: document.getElementById('title').value,
//         year: document.getElementById('yr').value
//     }
//     movies.push(movie);
//     document.forms[0].reset(); // to clear the form for the next entries
//     //document.querySelector('form').reset();

//     //for display purposes only
//     console.warn('added' , {movies} );
//     let pre = document.querySelector('#msg pre');
//     pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

//     //saving to localStorage
//     localStorage.setItem('MyMovieList', JSON.stringify(movies) );
// }
// document.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('btn').addEventListener('click', addMovie);
// });

// ----------------------MultiLingual----------------
// //language data... could come from an external js/json file
// let langdata = {
//   "languages": {
//       "en": {
//           "strings": {
//               "btn-yes": "yes",
//               "btn-no": "no"
//           }
//       },
//       "fr": {
//           "strings": {
//               "btn-yes": "oui",
//               "btn-no": "non"
//           }
//       },
//       "de": {
//           "strings": {
//               "btn-yes": "ja",
//               "btn-no": "nein"
//           }
//       }
//   }
// }
// //apply the language values to the content
// document.addEventListener('DOMContentLoaded', () => {
//   //skip the lang value in the HTML tag for this example
//   let zones = document.querySelectorAll('html [lang]');
//   applyStrings(zones);

//   let lang = findLocaleMatch();
//   let container = document.querySelector(`html [lang*=${lang}]`);
//   container.className = 'lang-match';
// });

// function applyStrings(containers) {
//   containers.forEach(container => {
//       //find all the elements that have data-key
//       let locale = container.getAttribute('lang');
//       //console.log('looking inside of ', locale);
//       container.querySelectorAll(`[data-key]`).forEach(element => {
//           let key = element.getAttribute('data-key');
//           //console.log(element);
//           //console.log(key);
//           let lang = locale.substr(0, 2); //first 2 characters
//           if (key) {
//               element.textContent = langdata.languages[lang].strings[key];
//           }
//       });
//   })
// }

// function findLocaleMatch() {
//   let keys = Object.keys(langdata.languages); //from our data
//   let locales = Intl.getCanonicalLocales(keys); //from our data validated

//   let lang = navigator.language; //from browser 
//   let locale = Intl.getCanonicalLocales(lang); //from browser validated
//   console.log('browser language', lang);
//   console.log('locales from data file', locale);

//   //find the match for locale inside locales
//   let langMatch = document.documentElement.getAttribute('lang'); //default
//   locales = locales.filter(l => locale == l);
//   langMatch = (locales.length > 0) ? locales[0] : langMatch;
//   return langMatch;
// }

// --------------------Google Map API  (needs KEY)-----------------------
// let map;
// document.addEventListener("DOMContentLoaded", () => {
//     let s = document.createElement("script");
//     document.head.appendChild(s);
//     s.addEventListener("load", () => {
//         //script has loaded
//         console.log("script has loaded");
//         // accept 2 arguments (the element that you will put the map inside it , options object)
//         map = new google.maps.Map(document.getElementById("map"), {
//             center: {
//                 lat: 45.3496711,
//                 lng: -75.7569551
//             },
//             zoom: 16, // zoom from 1 to 70
//             mapTypeId: google.maps.MapTypeId.ROADMAP // type of map Road or satellite 
//         });
//     });
//     // he created a js file with MAPKEY and added to HTML File <script src="./keys.js"></script> 
//     s.src = `https://maps.googleapis.com/maps/api/js?key=${MAPKEY}`; 
// });

// ---------------------Google MAP controls (needs KEY)---------------
// let map;
// document.addEventListener("DOMContentLoaded", () => {
//   let s = document.createElement("script");
//   document.head.appendChild(s);
//   s.addEventListener("load", () => {
//       //script has loaded
//       console.log("script has loaded. About to load the map");
//       map = new google.maps.Map(document.getElementById("map"), {
//           center: {
//               lat: 45.4496711,
//               lng: -75.6569551
//           },
//           zoom: 15,
//           mapTypeId: google.maps.MapTypeId.ROADMAP,
//           restriction: { // the area where user is allowed to move inside
//               latLngBounds: {
//                   north: 50.00,
//                   south: 40.00,
//                   west: -100.00,
//                   east: -60.00,
//               }
//           },
//           minZoom: 10,
//           maxZoom: 17,
//           disableDoubleClickZoom: false,
//           clickableIcons: false,
//           disableDefaultUI: true, //set of default controls when map loads => we can disable it and add what we want of controls
//           zoomControl: true,
//           zoomControlOptions: {
//               position: google.maps.ControlPosition.RIGHT_CENTER
//           },
//           mapTypeControl: true, // to choose map type (roadmap, hybrid, satelite)
//           mapTypeControlOptions: {
//               style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
//               mapTypeIds: ["roadmap", "terrain", "satellite"],
//               position: google.maps.ControlPosition.LEFT_TOP
//           },
//           fullscreenControl: true,
//           fullscreenControlOptions: {
//               position: google.maps.ControlPosition.RIGHT_TOP
//           },
//           scaleControl: false,
//           streetViewControl: true,
//           streetViewControlOptions: {
//               position: google.maps.ControlPosition.RIGHT_BOTTOM
//           },
//           rotateControl: true
//       });
//   });
//   s.src = `https://maps.googleapis.com/maps/api/js?key=${MAPKEY}`;
// });


// ------------------Google Maps Events and markers (needs KEY)--------------------
// let app = {
//   map: null,
//   currentMarker: null,
//   defaultPos: {
//     coords: {
//       latitude: 45.555,
//       longitude: -75.555
//     }
//   }, //default location to use if geolocation fails
//   init: function() {
//     // deviceready on mobile -- on web use  DOMContentLoaded
//     document.addEventListener("deviceready", app.ready);
//   },
//   ready: function() {
//     //load the google map script
//     let s = document.createElement("script");
//     document.head.appendChild(s);
//     s.addEventListener("load", app.mapScriptReady);
//     s.src = `https://maps.googleapis.com/maps/api/js?key=${MAPKEY}`;
//   },
//   mapScriptReady: function() {
//     //script has loaded. Now get the location
//     if (navigator.geolocation) {
//       let options = {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000 * 60 * 60
//       };
//       navigator.geolocation.getCurrentPosition(
//         app.gotPosition,
//         app.failPosition,
//         options
//       );
//     } else {
//       //not supported
//       //pass default location to gotPosition
//       app.gotPosition(app.defaultPos);
//     }
//   },
//   gotPosition: function(position) {
//     console.log("gotPosition", position.coords);
//     //build the map - we have deviceready, google script, and geolocation coords
//     app.map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 12,
//       center: {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       },
//       disableDoubleClickZoom: true
//     });
//     //add map event listeners
//     app.addMapListeners();
//   },
//   addMapListeners: function() {
//     console.log("addMapListeners");
//     //add double click listener to the map object
//     app.map.addListener("dblclick", app.addMarker);
//   },
//   addMarker: function(ev) {
//     console.log("addMarker", ev);
//     let marker = new google.maps.Marker({
//       map: app.map,
//       draggable: false,
//       position: {
//         lat: ev.latLng.lat(),
//         lng: ev.latLng.lng()
//       }
//     });
//     //add click listener to Marker
//     marker.addListener("click", app.markerClick);
//     //add double click listener to Marker
//     marker.addListener("dblclick", app.markerDblClick);
//   },
//   markerClick: function(ev) {
//     console.log("Click", ev);
//     console.log(this);
//     let marker = this; // to use the marker locally
//     app.currentMarker = marker; //to use the marker globally
//     app.map.panTo(marker.getPosition());
//   },
//   markerDblClick: function(ev) {
//     console.log("Double Click", ev);
//     console.log(this);
//     let marker = this; //to use the marker locally
//     //app.currentMarker = marker; //to use the marker globally
//     //remove the marker from the map
//     marker.setMap(null);
//     app.currentMarker = null;
//   },
//   failPosition: function(err) {
//     console.log("failPosition", err);
//     //failed to get the user's location for whatever reason
//     app.gotPosition(app.defaultPos);
//   }
// };

// app.init();

/**
 * google.maps.Marker object can listen to:
 * click
 * dblclick
 * mouseup
 * mousedown
 * mousemove
 * mousecancel... and more
 * See: https: //developers.google.com/maps/documentation/javascript/reference/#Marker
 */


// ------------------------formData-----------------------
/*
- formData is iterable
- formData accept HTMLFormElement as parameter
- when you append data will be added inside formData as array so you can say formData is an object of arrays
- you can append (name , value ) or you can append blob and then send it to the server

The special thing about FormData is that network methods, such as fetch, 
can accept a FormData object as a body. It???s encoded and sent out with 
Content-Type: multipart/form-data.
From the server point of view, that looks like a usual form submission.
*/
// document.addEventListener('DOMContentLoaded', () => {
//   let fd = new FormData();
//   fd.append('name', 'Bubba');
//   fd.append('id', 1234);
//   fd.append('created_dt', Date.now());
//   console.log(Array.from(fd));

//   for (let obj of fd) {
//       console.log(obj)
//   }

//   document.querySelector('#output pre').textContent = JSON.stringify(Array.from(fd), '\t', 2);
//   // let url = 'http://www.example.com/';
//   // let req = new Request({
//   //     url: url,
//   //     body: fd
//   // })
//   // fetch(req)
//   // .then(response => response.json() )
//   // .then( data => {})
//   // .catch( err => {})

// });

// ---------------Use the FormData API to access form values in JavaScript------------- 
// function handleSubmit(event) {
//   event.preventDefault();

//   const data = new FormData(event.target);

//   const value = data.get('email');

//   console.log({ value });
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);

// -------------Get multi-select values like checkboxes as JSON with the FormData API----------
// function handleSubmit(event) {
//   event.preventDefault();
//   const data = new FormData(event.target);

//   // The entries() method returns a new Array iterator object 
//   // The Object.fromEntries(iterable) method transforms a list of key-value pairs into an object.
//   const value = Object.fromEntries(data);

//   value.topics = data.getAll("topics");

//   console.log({ value });
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);

// ------------------clientX - clientY - pageX - pageY - offsetX - offsetY------------
/*
- clientX ,  clientY => distance from visible area from page to the click
- pageX , pageY => distnace from page to the click (not only the visible) so without scrolling client and page will be the same
- screenX, screenY => distnace from screen of computer(not the browser) to the click
- offsetX, offsetY => distnace from element edge to the click 
 */
// document.addEventListener('DOMContentLoaded', () => {
//   document.addEventListener('click', f);
// });

// function f(ev) {
//   console.log(ev.target.tagName, 'clicked');
//   console.log('clientX', ev.clientX);
//   console.log('pageX', ev.pageX);
//   console.log('screenX', ev.screenX);
//   console.log('offsetX', ev.offsetX);
//   console.log('clientY', ev.clientY);
//   console.log('pageY', ev.pageY);
//   console.log('screenY', ev.screenY);
//   console.log('offsetY', ev.offsetY);

// }


// -------------------Parent Element in DOM-----------
// //walking up the DOM looking for a specific element
// document.addEventListener('DOMContentLoaded', () => {
//   let spans = document.querySelectorAll('span');
//   spans.forEach(span => {
//       span.addEventListener('click', findElement);
//   });
// });


// function findElement(ev) {
//   ev.preventDefault(); //to stop the link navigating
//   let toFind = 'div'; // name of the tag we want to find.
//   //this could also be a reference to another element
//   //could be an id
//   //could be a className

//   let currentElement = ev.target;
//   while (toFind !== currentElement.tagName.toLowerCase() &&
//       currentElement.tagName.toLowerCase() !== 'html') {
//       console.log('NOT', currentElement.tagName);
//       currentElement = currentElement.parentElement;
//   }
//   console.log('STOPPED AT ', currentElement)
// }


// ---------------insertBefore and insertAdjacentElement------------   
/*
- difference between prepend and insertBefore:
prepend will always insert new element node at the beginnig of target element
insertBefore will insert new element node before specific child which you decide at 2nd param

- difference between insertBefore and insertAdjacentElement :
insertAdjacentElement you have 4 options => 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
so you cannot insert the new element before specific child
 */

//https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
// parentNode.insertBefore(newNode, referenceNode);
//
//https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
// targetElement.insertAdjacentElement(position, NewElement);
// let count = 0;
// document.addEventListener('DOMContentLoaded', () => {
//   document.body.addEventListener('click', (ev) => {
//       let main = document.querySelector('main');
//       let originalPara = main.querySelector('.original');
//       let p = document.createElement('p');
//       count++;
//       p.textContent = `This is paragraph ${count} created by insertBefore.`;
//       main.insertBefore(p, originalPara);
//       // main.prepend(p)
//       //main.appendChild(p); - after originalPara as the last element in main
//   });

//   document.body.addEventListener('dblclick', (ev) => {
//       let main = document.querySelector('main');
//       let p = document.createElement('p');
//       p.textContent = 'This is paragraph created by insertAdjacentElement.';
//       main.insertAdjacentElement('beforeend', p);
//       // 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
//   });

// });

//------------------------------------Cookies---------------------------
/*  Cookies vs LocalStorage 
- Cookies are primarily for reading server-side 
- local storage can only be read by the client-side
- I recommend using Cookie for sensitive data and Local Storage for non-sensitive data.

----Cookies : 
* is accessible by JavaScript so Cookie's data can be stolen by XSS attack
(Cross Site Scripting attack) but setting HttpOnly flag to Cookie prevents the access 
by JavaScript so Cookie's data is protected from XSS attack.

* is vulnerable to CSRF(Cross Site Request Forgery) but setting SameSite flag with Lax 
to Cookie mitigates CSRF and setting SameSite flag with Strict to Cookie prevents CSRF.

* Storage 4kb

* cookies are sent with every HTTP

* Cookies Has expiration date.

----LocalStorage: 
* is accessible by JavaScript so Local Storage's data can be stolen by XSS attack
(Cross Site Scripting attack) then, as logn as I researched, there are no easy preventions 
for Local Storage from XSS attack.

* is not vulnerable to CSRF(Cross Site Request Forgery).

* Storage 5mb

* Local storage Is not sent with every HTTP request If the server needs stored 
client information you purposely have to send it.

* LocalStorage does not Has expiration date.

*/
// document.addEventListener('DOMContentLoaded', () => {

//   document.body.addEventListener('click', (ev) => {
//       //display the current cookie and display it in the output div
//       if (document.cookie) {
//           document.getElementById('output').textContent = document.cookie;
//           //this will output all the key=value pairs
//       } else {
//           document.getElementById('output').textContent = 'No cookies currently';
//       }
//       console.log(document.cookie.split(';'));
//   });

//   //you can only one cookie at a time
//   document.getElementById('btnAdd').addEventListener('click', (ev) => {
//       //set a cookie 
//       let key = 'score';
//        // we use encodeURIComponent incase of using special charachters inside value
//       let value = encodeURIComponent('8745683465');
//       let thirty = 60 * 60 * 24 * 30;
//       document.cookie = `${key}=${value};path=/;max-age=${thirty};`;
//       // theme=gold;   score=102923873;  trackingid=AB3453453DF;
//       /**
//       ;path= absolute path. current path by default.
//       ;domain=sub.example.com current domain by default.
//       => max-age and expires used to set expiry date to allow the browser to delete the cookie
//       ;max-age= seconds  60*60*24*30  30 days 
//       ;expires= UTC date. end of current session by default  
//       ;secure=true 
//       ;same-site=Strict | Lax => strict means only request accepted from same domain
//       **/
//   });

//   // to delete cookie you have to set same path of cookie and set expiry to old date
//   document.getElementById('btnDel').addEventListener('click', (ev) => {
//       //delete a cookie
//       let key = 'theme';
//       document.cookie = `${key}=;path=/;expires=Thu, 01 Jan 1970T00:00:00Z;`;
//   });

//   document.getElementById('btnFind').addEventListener('click', (ev) => {
//       //find if a cookie exist
//       let key = 'hallo';
//       let val = '';
//       if (document.cookie.split(';').filter(item => item.trim().startsWith(`${key}=`))
//           .length) {
//           //cookie that starts with key= exists
//           document.getElementById('output').textContent = `${key} key is found`;
//       } else {
//           document.getElementById('output').textContent = `${key} key is NOT found`;
//       }
//       ev.stopPropagation(); // to prevent event bubbling and not to trigger event that check document.cookie
//   });
// });

// -------------------


// document.addEventListener("DOMContentLoaded", () => {
//   document.body.addEventListener("click", getData);
// });

// function getData(ev) {
//   ev.preventDefault();
//   const url = "http://127.0.0.1:1234/api/requestHTML.js";
//   // const url = "./html/snippet.html";
//   let req = new Request(url, {
//     method: "GET"
//   });

//   fetch(req)
//     .then(response => response.text())
//     .then(text => {
//       console.log(text)
//       let main = document.querySelector("main");
//       //text will be the text contents of the file.
//       //Version 1
//       //main.innerHTML = text;

//       //Version 2
//       //new document created
//       // let doc = new DOMParser().parseFromString(text, "text/html");
//       // console.dir(doc);
//       // let div = doc.body.firstElementChild; //the div from our file
//       // main.appendChild(div);

//       //Version 3
//       let frag = document.createRange().createContextualFragment(text);
//       // console.log(frag); //creates a document fragment
//       main.appendChild(frag);
//     })
//     .catch(err => {
//       console.warn("Fetch Failed:", err.message);
//     });
// }

// ------------------Infinite Scroll | Lazy Load using IntersectionObserver API-------
// const URL ="https://gist.githubusercontent.com/prof3ssorSt3v3/1944e7ba7ffb62fe771c51764f7977a4/raw/c58a342ab149fbbb9bb19c94e278d64702833270/infinite.json";
// document.addEventListener("DOMContentLoaded", () => {
// //set up the IntersectionObserver to load more images if the footer is visible.
// //URL - https://gist.githubusercontent.com/prof3ssorSt3v3/1944e7ba7ffb62fe771c51764f7977a4/raw/c58a342ab149fbbb9bb19c94e278d64702833270/infinite.json
// let options = {
//   root: null,
//   rootMargins: "0px",
//   threshold: 0.5
// };
// const observer = new IntersectionObserver(handleIntersect, options);
// observer.observe(document.querySelector("footer"));
// //an initial load of some data
// getData();
// });
// function handleIntersect(entries) {
// if (entries[0].isIntersecting) {
//   console.warn("something is intersecting with the viewport");
//   getData();
// }
// }
// function getData() {
// let main = document.querySelector("main");
// console.log("fetch some JSON data");
// fetch(URL)
//   .then(response => response.json())
//   .then(data => {
//     // data.items[].img, data.items[].name
//     data.items.forEach(item => {
//       let fig = document.createElement("figure");
//       let fc = document.createElement("figcaption");
//       let img = document.createElement("img");
//       img.src = item.img;
//       img.alt = item.name;
//       fc.textContent = item.name;
//       fig.appendChild(img);
//       fig.appendChild(fc);
//       main.appendChild(fig);
//     });
//   });
// }

// ----------------closest and matches and querySelector-------------
/*
- querySelector => return first match
- matches => return boolean if this element match these selectors
- closest => return match element if not match search in parent chain but not brothers (if didn't find maych return null)
*/
// document.addEventListener("DOMContentLoaded", () => {
//   let target1 = document.querySelector(".para");
//   let target2 = document.querySelector("#second");
//   target1.addEventListener("click", clicked);
//   target2.addEventListener("click", clicked);
// });
// function clicked(ev) {
//   ev.preventDefault();
//   msg(ev.target + " " + ev.target.closest("#first"));
//   let obj = ev.target.closest("#first");
//   if (obj) {
//     //not null
//     obj.classList.add("active");
//   }
//   if (ev.target.matches("body main p#first")) {
//     //if (ev.target === document.querySelector("#first")) {
//     //msg("MATCHES", true);
//   } else {
//     //msg("NO MATCH", true);
//   }
// }
// function msg(txt, append = false) {
//   let out = document.querySelector(".output");
//   if (append) {
//     out.textContent += " " + txt;
//   } else {
//     out.textContent = txt;
//   }
// }

// ---------------------------------Defer and Async--------------------------
/*
The difference between async and defer centers around when the script is executed. 
Each async script executes at the first opportunity after it is finished downloading 
and before the window???s load event. This means it???s possible (and likely) that async scripts 
are not executed in the order in which they occur in the page. Whereas the defer scripts, 
on the other hand, are guaranteed to be executed in the order they occur in the page. 
That execution starts after parsing is completely finished, but before the document???s 
DOMContentLoaded event.
*/
// document.addEventListener("DOMContentLoaded", () => {
//   //runs after the DOMContentLoaded event ... if the script is loaded
//   let h1 = document.querySelector("h1");
//   for (let i = 0; i < 1000; i++) {
//     h1.textContent += String.fromCharCode(Math.floor(Math.random() * 60) + 65);
//   }
// });

// //this code is parse and run...
// let str = "";
// for (let i = 0; i < 50000; i++) {
//   str += String.fromCharCode(Math.floor(Math.random() * 60) + 65);
// }
// console.log(str.substring(49500)); //last 500 characters

// ------------------------Content-Security-Policy--------------------
/*
<meta http-equiv="Content-Security-Policy" 
content="default-src 'self' data: gap: 'unsafe-eval' ws: ; 
style-src 'self' 'unsafe-inline'; 
script-src https: *.example.com ;
script-src 'sha256-zDSuWEvMbUxpisGOj30WQX1RQac766zuqm2VKdc6sGA=';" // using SHA (Secure Hash Algorithm)
media-src 'none'; 
font-src *;
connect-src *;
img-src 'self' data: content:;">
<!--
Also
base-uri /abc/; - limit to content in this folder  v2
form-action ; - limit where forms can be sent  v2

VALUES
'self' - anything from the same origin
data: - data-uri (base64 images)
gap: - phonegap and cordova used by plugins on iOS
ws: - web sockets
* - anything except data: and blobs
filesystem: - access things on the local filesystem
blob: - allow Binary Large OBjects
mediastream: - allow streamed media
content: - used by Cordova
'none' - prevent anything in the category
https: - anything over https://
*.example.com - anything from any subdomain of example.com
'unsafe-inline' - allow inline source elements like style attribute, onclick, or script tags 
'unsafe-eval' - allow javascript eval( ). 
--></meta>
*/

// ----------------XSS and integrity attribute on script Tag----------------------
/*
to get SHA-256 open terminal and go to location of file and then type 
( openssl dgst -sha256 -binary main.js | openssl base64 -A )
*/
// document.getElementById('btn').addEventListener('click', (ev)=>{
//     ev.preventDefault();
//     //this is the simulated response
//     let url = 'http://127.0.0.1:5500/json/nefarious.json';
//     fetch(url)
//     .then(response => response.json() )
//     .then( data => {
//         let p = document.createElement('p');
//         let content = decodeURIComponent(data.content);
//         console.log(content);
//         p.innerHTML = content;
//         document.getElementById('output').appendChild(p);
//     })
//     console.log(document.cookie)
// })


// ----------------------SVG(Scalable Vector Graphics)----------------------------
/*
* viewBox: 0 0 means position of viewbox / 250 250 means width 250px height250px => it's like box of zoom
* Circle : r = radius / cx & cy =  position of the center of the circle 
          fill = color of cirlce / stroke = color of border / stroke-width = width of border
* rect   : rx & ry = round of corners / x & y = position of the start(point left 0 top 0) of the rectangle
* line   : x1 , y1 = position of starting point of the line /  x2 , y2 = position of ending point of the line

<svg width="250" height="250" class="svg" viewBox="0 0 250 250">
  <circle r ="120" cx="125" cy="125" fill="none" stroke="red" stroke-width="10"/>
  <circle r ="70" cx="125" cy="125" fill="none" stroke="red" stroke-width="10"/>
  <rect rx="15" ry="15" x="25" y="25" height="200" width="200" fill="blue"/>
  <line x1="10" y1="125" x2="225" y2="225" stroke="green" stroke-width="20"/>
</svg>
*/

// --------------------touch event--------------------
/*
- we have three important properties of touch event : 
[1] touches : array of total touches inside whole screen
[2] targetTouches : array of total touches inside target
[3] changedTouches : array of new finger touch and cause the event and always length will be one 
    because it's too difficult to add two fingers at same time 1 milisecond difference will consider 2 different touches
they are touch list and don't have forEach method that's why he used spread operator

To better understand what might be in these lists, let???s go over some examples quickly. They vary according to the following rules:
* When I put a finger down, all three lists will have the same information. It will be in changedTouches because putting the finger down is what caused the event
* When I put a second finger down, touches will have two items, one for each finger. targetTouches will have two items only if the finger was placed in the same node as the first finger. changedTouches will have the information related to the second finger, because it???s what caused the event
* If I put two fingers down at exactly the same time, it???s possible to have two items in changedTouches, one for each finger
* If I move my fingers, the only list that will change is changedTouches and will contain information related to as many fingers as have moved (at least one).
* When I lift a finger, it will be removed from touches, targetTouches and will appear in changedTouches since it???s what caused the event
* Removing my last finger will leave touches and targetTouches empty, and changedTouches will contain information for the last finger

- add in css File touch-action:none; because browser has a built in events
like pull-down to refresh , two fingers to zoom in and click also out ,.... etc.
and you should disable all of this 
or you can add ev.preventDefault() to specific element will not work on document directly

- touchcancel : if for some reason ( bad connection, bad screen , 
or move from browser to another) so you can cancel the fucntion of touch 
because touchup didn't work
*/
// let topHalf = document.getElementById("top-half")

// // topHalf.addEventListener("touchstart", e => {
// //   e.preventDefault();
// //   console.log("touches", e.touches.length)
// //   console.log("targetTouches", e.targetTouches.length)
// //   console.log("Changed", e.changedTouches.length)
  
// // })
// let counter = -1;
// document.addEventListener("touchstart",e => {
//   // e.preventDefault(); //will not work should be on specific element
  
//   // here we can not use touches list because when i touch with finger and 
//   // hold then touch with 2nd finger if we use touches list will add 
//   // two dots at 2nd time triggring the function but with changedTouches
//   // the list will be only the 2nd finger touch
//   [...e.changedTouches].forEach(touch => {
//     counter++
//     const dot = document.createElement("div")
//     dot.classList.add("dot")
//     dot.style.top = `${e.touches[counter].clientY}px`
//     dot.style.left = `${e.touches[counter].clientX}px`
//     dot.id = touch.identifier
//     document.body.append(dot)
//   })
// })


// // we used here touches instead of changedTouches because touches list is not
// // empty because we move while still holding
// document.addEventListener("touchmove",e => {
//   [...e.touches].forEach(touch => {
//     const dot = document.getElementById(touch.identifier)
//     dot.style.top = `${touch.clientY}px`
//     dot.style.left = `${touch.clientX}px`
//   })
// })

// // here we should use changedTouches because it's the only list that has information
// // of last touch after removing your finger 
// document.addEventListener("touchend",e => {
//   [...e.changedTouches].forEach(touch => {
//     const dot = document.getElementById(touch.identifier)
//     dot.remove()
//     counter--
//   })
// })

// document.addEventListener("touchcancel", e => {
//   [...e.changedTouches].forEach(touch => {
//     const dot = document.getElementById(touch.identifier)
//     dot.remove()
//   })
// })

// -----------------------------------Pointer Event----------------------------
/*
-Pointer Event is combination of touch and click event 

- They are designed to create a single DOM event model to handle pointing 
input devices such as a mouse, pen/stylus or touch (such as one or more fingers).

- The touch-action CSS property is used to specify whether or not the 
browser should apply its default (native) touch behavior 
(such as zooming or panning) to a region

* auto means the browser is free to apply its default touch behavior

* none disables the browser's default touch behavior for the region => like ev.preventDefault()

* pan-x and pan-y, mean that touches that begin on the specified region are only for horizontal and vertical scrolling

* manipulation means the browser may consider touches that begin on the element are only for scrolling and zooming.


- setPointerCapture : 
This can be used to ensure that an element continues to receive pointer 
events even if the pointer device's contact moves off the element (for example by scrolling).
no need for setPointerCapture in mobile (has PointerCapture by default )
if you will use it then add if statment stop at 100% percentage if you did not add this
the timeline will continue to increase after mouse moving oustide the browser because 
we are capture all pointer events at whole screen
The browser does  releasePointerCapture  automatically when a pointerup 
or pointercancel event occurs.

- getBoundingClientRect : 
The getBoundingClientRect() method returns the size of an element and 
its position relative to the viewport.
The getBoundingClientRect() method returns a DOMRect object with eight 
properties: left, top, right, bottom, x, y, width, height.
*/

// const video = document.querySelector(".video")
// const timeline = document.querySelector(".timeline")
// let handle = document.querySelector(".handle")

// // -----touch screen adn add dots 

// video.addEventListener("pointerdown", e => {
//   const dot = document.createElement("div")
//   dot.classList.add("dot")
//   dot.id = e.pointerId
//   positionDot(e, dot)
//   document.body.append(dot)
// })

// video.addEventListener("pointerup",e =>{
//   const dot = document.getElementById(e.pointerId)
//   if (dot == null) return 
//   dot.remove()
// })

// video.addEventListener("pointermove",e =>{
//   const dot = document.getElementById(e.pointerId)
//   if (dot == null) return 
//   positionDot(e, dot)
// })

// function positionDot(e, dot){
//   dot.style.width = `${e.width}px`
//   dot.style.height = `${e.height}px`
//   dot.style.left = `${e.pageX}px`
//   dot.style.top = `${e.pageY}px`
// }

// ---moving timeline by touch and move
// timeline.addEventListener("pointerdown", e=>{
//   setTimelinePositon(e)
//   handle.setPointerCapture(e.pointerId) 
//   handle.addEventListener("pointermove",setTimelinePositon)
//   handle.addEventListener("pointerup",()=>{
//     handle.removeEventListener("pointermove",setTimelinePositon)
//     handle.releasePointerCapture(e.pointerId) // automatic browser do it
//   },{once : true}) // to trigger function only one time
// })


// function setTimelinePositon(e){
//   const rect = timeline.getBoundingClientRect()
//   let percentage = e.clientX / rect.width * 100
//   if(percentage <= 100){ // to stop at 100%
//     timeline.style.setProperty("--handle-position",`${percentage}%`)
//   }
// }

// ----another exp for pointer (slide Me)
// function beginSliding(e) {
//   slider.onpointermove = slide;
//   slider.setPointerCapture(e.pointerId);
// }

// function stopSliding(e) {
//   slider.onpointermove = null;
//   slider.releasePointerCapture(e.pointerId);
// }

// function slide(e) {
//   slider.style.transform = `translate(${e.clientX - 70}px)`;
// }

// const slider = document.getElementById('slider');

// slider.onpointerdown = beginSliding;
// slider.onpointerup = stopSliding;


// ---- use of pointer-events: none; or pointer-events: all; in CSS File
/* 
pointer-events: auto; 
for every thing => none, auto, all
for SVG only => visiblePainted, visible, painted, visibleStroke, visibleFill, fill, stroke 

pointer-events: none; => prevent all click or touch event on that element
but the event still bubble up so will prevent only for this element so the 
click event will work on parent (if parent has event listener ) even if they 
has pointer-events: none;
*/

// let container = document.querySelector(".container")
// let child = document.querySelector(".child")
// let grand = document.querySelector(".grand")

// container.addEventListener("click",function(e){
//   console.log(e.currentTarget)
// })
// child.addEventListener("click",function(e){
//   console.log(e.currentTarget)
// })
// grand.addEventListener("click",function(e){
//   console.log(e.currentTarget)
// })

// ------ my exp. slide to unlock and password
// let btn = document.getElementById("btn")
// let slide = document.getElementById("slide")
// let lock = document.getElementById("lock")

// btn.addEventListener("pointerdown",function(e){
//   moveBtn(e)
//   btn.setPointerCapture(e.pointerId)
//   btn.addEventListener("pointermove",moveBtn)
//   btn.addEventListener("pointerup",function(e){
//     btn.removeEventListener("pointermove",moveBtn)
//     btn.releasePointerCapture(e.pointerId)
//   })
// })

// function moveBtn(e){
//   let slideWidth = slide.getBoundingClientRect().width
//   let slideLeft = slide.getBoundingClientRect().left
//   btn.style.left = `${e.clientX - slideLeft - 45}px`
//   if((e.clientX - slideLeft + 70) > (slideLeft + slideWidth)){
//     lock.style.display = "none"
//   }
// }

// let nums = document.querySelectorAll("#pass div")
// let arr = []

// nums.forEach(num => {
//   num.addEventListener("pointerdown", e => {
//     let numValue = +num.id.match(/\d/ig)
//     arr.push(numValue)
//   })
// })

// -----------------------intl.ListFormat----------------
// const main = document.querySelector("main");
// let staff = [
//   "Pam",
//   "Michael",
//   "Dwight",
//   "Toby",
//   "Phyliss",
//   "Jim",
//   "Stanley"
// ];
// let stuff = ["5 au", "7 mm", "16 mg", "42 km", "24 ml"];
// /**
//  * style :
//   - long  => look at conjunction
//   - short => comma between items inside array / and look at conjunction
//   - narrow => a space between items inside array
//  * type = 
//   - conjunction => will add before last item & (incase of short) or and (incase of long) or nothing (incase of narrow)
//   - disjunction => will add before last item or
//   - unit (will ignore long)
//  **/
// // accept two optional parameters : language format and options object
// const formatter = new Intl.ListFormat("en", {
//   style: "short",
//   type: "unit"
// }); //
// main.innerHTML += "<p>" + formatter.format(staff) + "</p>";

// --------------TextNode splitText() normalize() Methods-------------

/*
splitText() method of textNode => split the textnode and accept position of splitting as parameter
normalize() method of any node => search for splitted textnodes and merge then together
*/

// document.addEventListener("DOMContentLoaded", () => {
//   let ps = document.querySelectorAll("p");
//   ps.forEach(p => {
//     document.addEventListener("click", clicked);
//     document.addEventListener("dblclick", fix);
//   });
// });
// function clicked(ev) {
//   let p = ev.target;
//   let txt = p.firstChild;
//   // console.log(
//   //   txt instanceof Text,
//   //   txt instanceof Node,
//   //   txt instanceof Element
//   // );
//   let len = txt.length;
//   let rand = Math.floor(Math.random() * len);
//   //console.log(len, rand);
//   txt.splitText(rand);
// }
// function fix(ev) {
//   let p = ev.target;
//   p.normalize();
// }


// ------------------------elementFromPoint , elementsFromPoint , caretPositionFromPoint----------
/*
elementFromPoint => clicked element only
elementsFromPoint => clicked element and it's parents in parent chain
caretPositionFromPoint => object has 2 properties (offsetNode , offset)
  - offsetNode => textNode
  -  offset => position inside textNode

-all of them accept two parameters x,y positions
*/
// document.addEventListener("DOMContentLoaded", () => {
//   let elems = document.querySelectorAll("main p, header h1");
//   elems.forEach(el => {
//     el.addEventListener("click", clicked);
//   });
// });
// function clicked(ev) {
//   console.log(ev.clientX, ev.x, ev.pageX, ev.screenX); //clientX and x are the same
//   console.log(ev.clientY, ev.y, ev.pageY, ev.screenY); //clientY and y are the same

//   clearHighlight();

//   // let elem = document.elementFromPoint(ev.x, ev.y);
//   // elem.classList.add("clicked");

//   // let elems = document.elementsFromPoint(ev.x, ev.y);
//   // elems.forEach(el => {
//   //   el.classList.add("clicked");
//   // });
  
//   // let caretPosition = document.caretPositionFromPoint(ev.x, ev.y); //Firefox and Safari only
//   // let el = caretPosition.offsetNode;
//   // if (el.nodeType == 3) { // 3 means textNode so we need to get it's parent to add class
//   //   el = el.parentElement;
//   // }
//   // el.classList.add("clicked");
//   // console.log(caretPosition.offset); 
// }

// function clearHighlight() {
//   let clickedElements = document.querySelectorAll(".clicked");
//   clickedElements.forEach(el => {
//     el.classList.remove("clicked");
//   });
// }

// -------------------Injecting Strings into DOM as HTML------------
/**
  - [1] innerHTML => method only for html element and will convert string to html element
  - [2] new DocumentFragment() => will not convert string to html it will append it as string
    you have to append html element to document fragment not just string
  - [3] new DOMParser() => accepts 2 parameters 1st param is string 2nd param is mime type
    but return a document element (whole HTML Document) not just one element node
  - [4] range.createContextualFragment() => you have to select range first 
    you can leave range empty .createRange() or  choose postion of range like 
    range.setStart(main, 1); 1 means start from child no.1
    range.setEnd(main, 2); 2 means end to child no. 2
  - [5] insertAdjacentHTML(position, htmlString); =>  
    positions options => 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'
 */


// let main = document.querySelector("main");

// let strHTML1 = '<p>1. This is the <a href="#">String</a> with HTML.</p>';
// let strHTML2 = '<p>2. This is the <a href="#">String</a> with HTML.</p>';
// let strHTML3 = '<p>3. This is the <a href="#">String</a> with HTML.</p>';
// let strHTML4 = '<p>4. This is the <a href="#">String</a> with HTML.</p>';
// let strHTML5 = '<p>5. This is the <a href="#">String</a> with HTML.</p>';
// let strHTML6 = '<p>6. This is the <a href="#">String</a> with HTML.</p>';

// //version 1 - innerHTML
// main.innerHTML = strHTML1;

// //version 2a - document.createDocumentFragment()
// //version 2b - new DocumentFragment()
// let frag = new DocumentFragment();
// frag.append(strHTML2); //will keep it as the same string
// // innerHTML not available on a document fragment
// // need to create actual DOM nodes to append...
// // so we can do pattern matching on the string can create the nodes
// // or use the DOMParser below to convert and then append
// //console.log(frag);
// //GREAT INSIDE A LOOP. DO THE APPEND AFTER THE LOOP
// //main.appendChild(frag);

// //version 3 - new DomParser()
// let parser = new DOMParser();
// let doc = parser.parseFromString(strHTML3, "text/html");
// //doc.documentElement - whole HTML Document
// console.log(doc.documentElement);
// main.appendChild(doc.body.firstChild);

// //version 4a - range.createContextualFragment()
// let frag2 = document.createRange().createContextualFragment(strHTML4);
// main.appendChild(frag2);

// //version 4b - range.createContextualFragment()
// let range = document.createRange();
// range.setStart(main, 1); //after the one added with innerHTML
// range.setEnd(main, 2);
// let frag3 = range.createContextualFragment(strHTML5);
// range.insertNode(frag3);

// //version 5 - insertAdjacentHTML()
// main.insertAdjacentHTML("afterbegin", strHTML6);

// --------------------------Google Maps GeoCoding-------------------------
// const KEY = "AIzaSyD8LFh53VddzDevOC6A5Jhln9KgpmpoExg"; // i need a different KEY
// const LAT = 50.1;
// const LNG = -97.3;
// let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${KEY}`;
// fetch(url)
// .then(response => response.json())
// .then(data => {
//   console.log(data);
//   let parts = data.results[0].address_components;
//   document.body.insertAdjacentHTML(
//     "beforeend",
//     `<p>Formatted: ${data.results[0].formatted_address}</p>`
//   );
//   parts.forEach(part => {
//     if (part.types.includes("country")) {
//       //we found "country" inside the data.results[0].address_components[x].types array
//       document.body.insertAdjacentHTML(
//         "beforeend",
//         `<p>COUNTRY: ${part.long_name}</p>`
//       );
//     }
//     if (part.types.includes("administrative_area_level_1")) {
//       document.body.insertAdjacentHTML(
//         "beforeend",
//         `<p>PROVINCE: ${part.long_name}</p>`
//       );
//     }
//     if (part.types.includes("administrative_area_level_3")) {
//       document.body.insertAdjacentHTML(
//         "beforeend",
//         `<p>LEVEL 3: ${part.long_name}</p>`
//       );
//     }
//   });
// })
// .catch(err => console.warn(err.message));

// -------------------Combining async await with fetch--------------------

// (async function f() {
//   let badurl = "http://";
//   let goodurl = "http://jsonplaceholder.typicode.com/users";
//   let url = Math.round(Math.random()) ? badurl : goodurl;
//   // here we use await before fetch and this will return response object 
//   // and used another await because .json() also asynchrnous and return promise so we need await to get data
//   let data = await (await fetch(url).catch(handleErr)).json();
//   if (data.code && data.code == 400) {
//     //problem
//     return;
//   }
//   console.log(data);
// })();

// function handleErr(err) {
//   // we need to return a reponse object because we are using .json() which works only on response objects
//   let resp = new Response(
//     JSON.stringify({
//       code: 400,
//       message: "Stupid network Error"
//     })
//   );
//   return resp;
// }

// -------------------------MatchMedia-------------
// // return mediaQueryList and has property called matches (true or false)
// document.addEventListener("DOMContentLoaded",init)
// window.addEventListener("resize", init) // to make dynamic 

// function init(){
//   let query = window.matchMedia("(min-width: 601px)")
//   if(query.matches){
//     document.querySelector("h1").style.display = "block"
//     document.querySelector("h1").style.color = "red"
//   }else{
//     document.querySelector("h1").style.display = "none"
//   }
// }

// ------------------------Animated Hamburger menu-------------

// let ISEXPANDED = true;

// document.addEventListener("DOMContentLoaded", () => {
//   //handle click event
//   let body = document.body;
//   body.addEventListener("click", ev => {
//     console.log("toggle expanded on header");
//     ev.currentTarget.classList.toggle(
//       "expanded"
//     ); /* showing the menu and the X */
//   });

//   //handle media query when the page loads for the default state onload
//   let query = window.matchMedia("(min-width:700px)");
//   if (query.matches) {
//     body.classList.add("expanded");
//     ISEXPANDED = true;
//   } else {
//     body.classList.remove("expanded");
//     ISEXPANDED = false;
//   }

//   // to handle as the page size change you have two options : [1] ResizeObserver or [2] resize event

//   // // using [1] ResizeObserver
//   const resizeObserver = new ResizeObserver(entries => {
//     for (let entry of entries) {
//       if (entry.contentRect.width > 700 && !ISEXPANDED) {
//         body.classList.add("expanded");
//         ISEXPANDED = true;
//       } else if (entry.contentRect.width < 700 && ISEXPANDED) {
//         body.classList.remove("expanded");
//         ISEXPANDED = false;
//       }
//     }
//   });
//   resizeObserver.observe(body);

//   // // using [2] Resize event ( resize event works on window object not body)
//   // window.addEventListener("resize", function(){
//   //   let query = window.matchMedia("(min-width:700px)");
//   //   if (query.matches) {
//   //     body.classList.add("expanded");
//   //     ISEXPANDED = true;
//   //   } else {
//   //     body.classList.remove("expanded");
//   //     ISEXPANDED = false;
//   //   }
//   // })
// });


// let foo = function (a,b) {
//   console.log(this.x)
//   console.log(arguments)
// }

// let obj = {
//   x : 10
// }



// -------------------encodeURI vs encodeURIComponent-----------------
/**
encodeURI => keep URI as it is and can be used as href
encodeURIComponent => encode URI to send it to server with Base-64 data

encodeURIComponent - encodes all characters except:
  A-Z a-z 0-9 - _ . ! ~ * ' ( )
Encode everything. When you want to send some data that is encoded. 
Useful for Base-64 data A-Z a-z 0-9 + /

encodeURI - encodes  all characters except the previous list AND
  ; , / ? : @ & = + $ #
Keeps the URL as a usable URL.

Sample text
http://user@pass:www.example.com:5000/path/file?name=value&name2=value2#someId

???? ???? ???? ???? ???? ???? ????
**/
// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .getElementById("btnEncode")
//     .addEventListener("click", doEncode);
//   document
//     .getElementById("btnDecode")
//     .addEventListener("click", doDecode);
// });
// function doEncode() {
//   let txt = document.getElementById("start").value;
//   let areaEncoded = document.getElementById("encoded");
//   let areaEncodedComp = document.getElementById("encodedComp");
//   areaEncoded.value = encodeURI(txt);
//   areaEncodedComp.value = encodeURIComponent(txt);

//   let lnk = document.getElementById("lnk");
//   lnk.href = encodeURI(txt);
// }
// function doDecode() {
//   let txt = document.getElementById("start").value;
//   let areaEncoded = document.getElementById("encoded");
//   let areaEncodedComp = document.getElementById("encodedComp");
//   areaEncoded.value = decodeURI(txt);
//   areaEncodedComp.value = decodeURIComponent(txt);
// }


// ------------------------------Scroll Methods-----------------------------
/*
scrollTo => Move the top left point to the provided coordinates.
scrollBy => Move the top left point of the element by the horizontal and vertical values provided.
scrollIntoView => The Boolean indicates whether or not to align top of element to top of the screen.

- scrollTo & scrollBy only for scrollable element (only the page it self document.documentElement)
- scrollIntoView for any element

- Options object version not supported in IE, Edge, or Safari:
Element.scrollIntoView({
    behaviour: "smooth" 
    block: "start",
    inline: "nearest"
});
* block and inline can effect flex direction! be carefull
=> block => vertical alignment 
=> online => horizontal alignment
values of block or inline => "start", "nearest", "center", or "end"
* start => align top of block to top of the page
* center => align center of block to center of the page
* end => align end of block to end of the page
* nearest => align nearest edge of block to nearest edge of the page

*/
// let to = document.getElementById('scroll-to');
// let by = document.getElementById('scroll-by');
// let into = document.getElementById('scroll-into-view');
// to.addEventListener('click', (ev)=>{
//   document.documentElement.scrollTo(0, 250); // to position 0, 250
// });
// by.addEventListener('click', (ev)=>{
//   document.documentElement.scrollBy(0, 0); //250px down from current position
// });
// into.addEventListener('click', (ev)=>{
//   // by.scrollIntoView(true); //show the scroll-by element into view
//   by.scrollIntoView({
//     behavior: 'smooth',
//     block: 'center',
//     inline: "start"
//   })
// });

// -----------------------------Shrinking Header--------------------

// document.addEventListener("DOMContentLoaded", () => {
//   window.addEventListener("scroll", debounce(rollup));
// });

// function rollup(ev) {
//   console.log(window.scrollY);
//   if (window.scrollY > 60) {
//     document.body.classList.add("up");
//   } else {
//     document.body.classList.remove("up");
//   }
// }

// //use debounce for better performance
// const debounce = func => {
//   let timer;
//   return event => {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     //100ms is the current delay being used
//     timer = setTimeout(func, 100, event);
//   };
// };


// --------------------Removing Elements and optional chaining----------------
/*
the concept of removal basically means breaking the relationship between a child 
and its parent. It's just a detachment.

remove only needs a reference to the child. 
removeChild needs a reference both to the parent and the child. The result is identical.

after remving element it is not removed from the memory and you can append it again
if you want to remove it from memory you can do this : element = null;
*/
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('main').addEventListener('click', removePara);
// });
// function removePara(ev) {
//   //remove the paragraph that was clicked.
//   //get the correct element
//   console.log(ev.target, ev.currentTarget);
//   // (main, p.para, span ) vs main
//   // target was the first element clicked
//   // currentTarget is the element that owns the eventListener
//   let main = ev.currentTarget;
//   let p = ev.target.closest('.para');
//   p?.parentElement.removeChild(p); // optional chaining
//   // if (p) {
//   //   main.removeChild(p);
//   // }
//   //p?.remove(); // optional chaining
//   // if (p) {
//   //   p.remove();
//   // }
// }

// ------------------------------------Using FormData to ParseForms--------------------------
// do not forget to add name attribute to each input if not no data will sent to server
// document.addEventListener('DOMContentLoaded', () => {
//   document
//     .getElementById('myForm')
//     .addEventListener('submit', handleForm);
// });

// function handleForm(ev) {
//   ev.preventDefault(); //stop the page reloading
//   //console.dir(ev.target);
//   let myForm = ev.target;
//   let fd = new FormData(myForm);

//   //add more things that were not in the form
//   fd.append('api-key', 'myApiKey');

//   //look at all the contents
//   for (let key of fd.keys()) {
//     console.log(key, fd.get(key));
//   }
//   let json = convertFD2JSON(fd);

//   //send the request with the formdata
//   let url = 'http://localhost:1234/';

//   let req = new Request(url, {
//     // body : fd,
//     body: json, // if you want to send it as json
//     method: 'POST',
//     mode: 'cors'
//   });
//   //console.log(req);
//   fetch(req)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log('Response from server');
//       console.log(data);
//     })
//     .catch(console.warn);
// }

// function convertFD2JSON(formData) {
//   let obj = {};
//   for (let key of formData.keys()) {
//     obj[key] = formData.get(key);
//   }
//   return JSON.stringify(obj);
// }

// ---------------------------------Ternary operator------------------------
// //FALSEY - 0, null, undefined, false, "", NaN

// //basic
// let age = 42;
// //age < 50 ? console.log('ok zoomer') : console.log('ok boomer');

// //assignment
// let num = Math.floor(Math.random() * 20);
// let result = num % 2 == 0 ? 'even' : 'odd';
// //console.log(result, num);

// //nested
// let salary = 60_000; //numeric separator: https://www.youtube.com/watch?v=IU9_26x5N5A
// let taxrate = salary <= 20_000 ? 0 : salary > 100_000 ? 30 : 20;
// console.log(taxrate);

// //html
// let side = document.querySelector('.side');
// side = side ? side : document.body;
// side.className = 'hey';

// -----------------------------URL object----------------------
/*
URL properties
hash - The part that starts with `#` and refers to an id
host - Same as hostname except a specified port would be included
hostname - the domain part without the http://
href - the full url. Same as using .toString() method
origin - Same as host prefixed with the protocol
password - https://username:password@www.example.com
pathname - after the domain. Folder and file name
port - :80  :443
protocol - http or https usually
search - Begins with `?`. The query string
searchParams - An object built from the parsed query string
username - https://username:password@www.example.com
*/
// document.addEventListener('DOMContentLoaded', () => {
//   let a = document.getElementById('link');
//   let img = a.querySelector('img');
//   let aHref = a.href;
//   let imgHref = img.src;
//   console.log(typeof aHref, aHref);
//   console.log(typeof imgHref, imgHref);

//   let aURL = new URL(aHref);
//   // let iURL = new URL(imgHref);
//   console.log(aURL);
//   // console.log(iURL);

//   aURL.searchParams.forEach((val, name) => {
//     console.log(name, '::', val);
//   });

//   let val = aURL.searchParams.get('ikwid');
//   console.log(val);
// });

// ------------------------event options object------------------
/*
- passive: <boolean> 
Every time you scroll by touching the screen or the wheel of your mouse, 
the browser needs to check that your code won???t cancel the default actions (even if you didn't add ev.preventDefault()). 
This means it???ll wait a certain amount of time, just in case, resulting in poor performance.
By marking a touch or wheel listener as passive : true, 
the developer is promising the handler won't call preventDefault to disable scrolling


* document.body is by default passive:true so if you add touch event to it with ev.preventDefault()
will warn you ([Intervention] Unable to preventDefault inside passive event listener targer being treated as passive)

* false => with ev.preventDefault() and touch event to disable 
default behaviour of browser like zoom or scroll or drag down to refreash 

* true => with ev.preventDefault() and touch event will warn you (Unable to preventDefault inside passive event listener invocation) 
used to improve performance 

* doesn't work with pointer event beacuse ev.preventDefault() not working with pointer events
because Pointer events will receive a pointercancel event when the browser starts 
handling a touch gesture.
use instead touch-action inside CSS File

- once: <boolean> true => triggered only one time then remove the event listener
- capture: <boolean> false(default) => bubble up / true => bubble down

*/
// document.addEventListener('DOMContentLoaded', () => {
//   //add listeners  - useCapture
//   document
//     .querySelector('main p')
//     .addEventListener('click', f1, { capture: false, once: true });

//   document.body.addEventListener('touchstart', f2, {
//     capture: false,
//     // passive: false,
//   });

//   document
//     .querySelector('p:nth-child(2)')
//     .addEventListener('touchstart', f3, {
//       capture: false,
//       // passive: false,
//     });
// });

// function f1(ev) {
//   let num = Math.random().toString(16).substr(2, 6);
//   console.log(num);
//   ev.target.style.backgroundColor = `#${num}`;
// }

// function f2(ev) {
//   ev.preventDefault();
//   console.log('touchstart on body');
// }

// function f3(ev) {
//   ev.preventDefault();
//   console.log('touchstart on p 2');
// }

// -------------------------------------dark mode----------------------
/*
- look at css media queries
- window.matchMedia("(prefers-color-scheme:light)").addEventListener("change",function(){})
  window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change",function(){})
  both will trigger at same time it does not matter which mode or changing to which mode 
  so i add only 1 addEventListener and add checkMode() function to check the mode
*/

// let h2 = document.createElement("h2");
// document.querySelector("header").appendChild(h2);

// window.matchMedia("(prefers-color-scheme:light)").addEventListener("change",function(){
//   checkMode()
// })

// checkMode()

// function changeToLight(){
//   document.querySelector("h1").textContent = "Browser Light Mode";
//   h2.textContent = "Come to the darkside";
// }
// function changeToDark(){
//   document.querySelector("h1").textContent = "Browser dark Mode";
//   h2.textContent = "Come to the lightside";
// }

// function checkMode(){
//   let light = window.matchMedia("(prefers-color-scheme:light)").matches 
//   let mode = light ? "light" : "dark"
//   if(mode === "light"){
//     changeToLight()
//   }else if(mode === "dark"){
//     changeToDark()
//   }
// }

// let link = document.querySelector("a")
// let testing = document.getElementById("test")
// document.body.addEventListener('touchstart', function(ev){
//   console.log(ev)
// });

// link.addEventListener("pointerdown",function(ev){
//   if(ev.pointerType === "touch"){
//     window.alert(ev.defaultPrevented)
//   }
// })

// --------------------------------Long Press event--------------------------
// document.addEventListener('DOMContentLoaded', () => {
//   addClickTouch();
// });

// let timmy = null;
// let timmyLong = null;
// const delay = 800; //ms delay to be considered a long press

// function addClickTouch() {
//   //stop the longpress delay if it has started because clearTimeout cancel the setTimeout and stop it's callback function
//   clearTimeout(timmy); 
  
//   // [1] chech if the device accept touch or click
//   // if ('ontouchstart' in document.body) {
//   //   document.querySelectorAll('[data-long]').forEach((btn) => {
//   //     btn.addEventListener('touchstart', start, {
//   //       once: true,
//   //     });
//   //   });
//   // } else {
//   //   document.querySelectorAll('[data-long]').forEach((btn) => {
//   //     btn.addEventListener('mousedown', start, {
//   //       once: true,
//   //     });
//   //   });
//   // }

// // [2] using pointer no need to check if the device accept touch or click
//   document.querySelectorAll('[data-long]').forEach((btn) => {
//     btn.addEventListener('pointerdown', start, {
//       once: true,
//     });
//   });

// }

// function start(ev) {
//   //[1] to prevent the touchstart context menu and select text (only when using touch or click event)
//   // ev.preventDefault();

//   // [2] to prevent the context menu and select text (only when using pointer event)
//   // adding touch-action:none; and user-select:none; in CSS File and oncontextmenu="return false;" in HTML

//   let btn = ev.target.closest('[data-long]');
//   btn.innerHTML = '????'; //remove the other buttons

//   timmy = setTimeout(longPress.bind(btn), delay); // the LONG PRESS
  
//   // [1] using touch or mouse click events
//   // btn.addEventListener('mouseup', addClickTouch);
//   // btn.addEventListener('touchcancel', addClickTouch);
  
//   // [2] using pointer events
//   btn.addEventListener('pointerup', addClickTouch);
//   btn.addEventListener('pointercancel', addClickTouch);
// }

// function longPress() {
//   let btn = this;
//   // [1] using touch or mouse click events
//   // btn.removeEventListener('mouseup', addClickTouch);
//   // btn.removeEventListener('touchcancel', addClickTouch);

//   // [2] using pointer events
//   btn.removeEventListener('pointerup', addClickTouch);

//   //remove all the flyout buttons after delay if no interaction for 3 seconds
//   timmyLong = setTimeout(resetButtons.bind(btn), 3000);

//   let template = document.getElementById('emojis');
//   let content = template.content.cloneNode(true);
//   btn.appendChild(content);
//   btn.querySelectorAll('button').forEach((b) => {

//     // [1] using touch or mouse click events
//     // if ('ontouchstart' in document.body) {
//     //   b.addEventListener('touchend', selected, {
//     //     capture: false,
//     //     once: true,
//     //   });
//     // } else {
//     //   b.addEventListener('mouseup', selected, {
//     //     capture: false,
//     //     once: true,
//     //   });
//     // }

//     // [2] using pointer events
//     b.addEventListener('pointerup', selected, {
//           capture: false,
//           once: true,
//         });
//     // to wait tell buttons added inside main btn then add class go if we added directly without
//     // setTimeout will add move move directly without animation
//     setTimeout(function () {
//       b.classList.add('go');
//     }, 0);
//   });
// }

// function resetButtons() {
//   this.innerHTML = '????';
//   addClickTouch();
// }

// function selected(ev) {
//   ev.stopImmediatePropagation(); //stop bubble up => don't send the click to the main button
//   console.log('selected', ev.target);
//   clearTimeout(timmyLong); //we have interacted...
//   let b = ev.target; // <button class="top happy go">
//   let arr = Array.from(b.classList).filter(
//     (cls) =>
//       cls != 'go' &&
//       cls != 'top' &&
//       cls != 'right' &&
//       cls != 'bottom' &&
//       cls != 'left'
//   );
//   let match = arr[0]; //the selected class
//   document.querySelector('header h2').textContent = `You are ${match}`;
//   let btn = ev.target.parentElement;
//   btn.querySelectorAll('button').forEach((item) => {
//     //loop through the 4 child buttons
//     if (item.classList.contains(match)) {
//       setTimeout(
//         function (item) {
//           item.remove();
//           resetButtons.call(this);
//         }.bind(btn, item),
//         delay
//       );
//       //delay removing the selected one same length as the long press
//     } else {
//       item.remove();
//       //remove all the flyout buttons except the selected ones
//     }
//   });
// }


// ------------------difference between EventHandlers and addEventListener------------------

/*
- if you add two event handlers for the same button click, the second event handler 
will overwrite the first and only that event will trigger

- you can only have one event handler per event type, 
but you can have multiple event listeners
*/

// let google = document.querySelector("a")

// // this will override the default click and will not go to google.com
// google.onclick = function(){
//   return false
// }

// // this will create a new event and will not prevent default click and will go to google.com
// google.addEventListener("click",function(){
//   return false
// })

// ------------------------------Composed Path event--------------------
// document.addEventListener('DOMContentLoaded', () => {
//   //add click listeners to ALL elements inside main
//   document.querySelectorAll('main *').forEach(addClick);
// });

// function addClick(tag) {
//   //add a click listener to the tag
//   tag.addEventListener('click', (ev) => {
//     ev.preventDefault(); //just to stop the anchor
//     ev.stopPropagation();
//     console.log(ev.target.tagName);
//     console.log(ev.composedPath()); // Array
//   });
// }

// -----------------------Copy and Paste Events---------------------


// document.addEventListener('DOMContentLoaded', () => {
//   document.addEventListener('copy', doCopy);
//   document.addEventListener('paste', doPaste);
//   document.querySelector('h1').addEventListener('click', autoCopy);
// });

// function doCopy(ev) {
//   //ev is a ClipBoardEvent
//   // if you didn't preventDefault will copy the text as default without any changes (UPPERCASE)
//   ev.preventDefault();
//   // what has the user selected (return selection object and you can get the text by using toString())
//   // get the actual selected text if you want to make changes to it
//   let selection = document.getSelection(); 
//   selection = selection.toString().toUpperCase();
//   console.log(selection); //UPPERCASE
//   // setData method for copy event and getData method for paste event
//   ev.clipboardData.setData('text/plain', selection);
// }

// function doPaste(ev) {
//   // ev.clipboardData - is a DataTransfer object
//   let data = ev.clipboardData.getData('text/plain');
//   let txtNode = document.createTextNode(data)
//   //data is the content we copied above
//   console.log(data);

//   // let txt = document.createTextNode(data);

//   let span = document.createElement('span');
//   span.textContent = data;
//   // to know which element i selected to do the paste (one of two <p> that has attribute contenteditable="true") 
//   // selection object has property called parentElement 
//   // if you just click on the element text will be "" if you select text the text will be selected text
//   let selection = document.getSelection();
//   // to make a sure that is a valid selection
//   if (!selection.rangeCount) return false;
//   //remove the old content that was selected (its the default behaviour of browser to remove
//   // selected text and paste the new text above but because we preventDefault we disable 
//   // this default behavior and we need to delete selected text manually)
//   selection.deleteFromDocument();
//   //inserts before the selected area (you can add text node or element node and add css to this element(red color for exp.))
//   selection.getRangeAt(0).insertNode(txtNode);
//   // selection.getRangeAt(0).insertNode(span);
// }

// function autoCopy(ev) {
//   let h1 = ev.target;
//   let select = document.getSelection();
//   console.log(select)
//   // remove all ranges to create a new one (selecting multiple ranges not supported in all browsers)
//   select.removeAllRanges();
//   let range = document.createRange();
//   // select the h1.firstChild => text node
//   range.selectNode(h1.firstChild); 
//   //highlight the whole selection
//   select.addRange(range);
//   //then tell the browser to do a copy ( this will trigger the doCopy function )
//   document.execCommand('copy');
// }

// ------------------------------Page Lifecycle API---------------------------
/*
*** page has 6 visibility states : 
[1] Active 
[2] Passive  
[3] Hidden  
[4] Frozen 
[5] Terminated 
[6] Discarded

In the active, passive, and hidden states, it's possible to run JavaScript code that 
determines the current Page Lifecycle state from existing web platform APIs.

const getState = () => {
  if (document.visibilityState === 'hidden') {
    return 'hidden';
  }
  if (document.hasFocus()) {
    return 'active';
  }
  return 'passive';
};

The frozen and terminated states, on the other hand, can only be detected in their 
respective event listener (freeze and pagehide) as the state is changing.

the document object also now includes a wasDiscarded property. 
To determine whether a page was discarded while in a hidden tab, you can inspect 
the value of this property at page load time (note: discarded pages must be reloaded to use again).

developers can now observe when a hidden tab is frozen and unfrozen by listening for the freeze and resume events on document.

Not all Page Lifecycle events have the same target. pagehide, and pageshow are fired on 
window; visibilitychange, freeze, and resume are fired on document, and focus and blur are 
fired on their respective DOM elements.

* bfcache (back forward cache)
bfcache is an in-memory cache that stores a complete snapshot of a page 
(including the JavaScript heap) as the user is navigating away. With the entire page 
in memory, the browser can quickly and easily restore it if the user decides to return.
How many times have you visited a website and clicked a link to go to another page, only 
to realize it's not what you wanted and click the back button? In that moment, bfcache can 
make a big difference in how fast the previous page loads:

** there are events in Page lifeCycle : 
[1] pageshow
[2] focus
[3] blur
[4] visibilitychange
[5] freeze
[6] resume
[7] beforeunload
[8] pagehide
[9] unload

*/

// --[4]visibilitychange event
/*
- The visibilitychange event is fired at the document when the contents of its tab have 
become visible or have been hidden.

- This event fires with a visibilityState of hidden when a user navigates to a new page, 
switches tabs, closes the tab, minimizes or closes the browser, or, on mobile, switches 
from the browser to a different app. 

- Examples:

[1] Pausing music on transitioning to hidden
This example begins playing a music track when the document becomes visible, 
and pauses the music when the document is no longer visible.

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});

[2] Sending end-of-session analytics on transitioning to hidden
This example treats the transition to hidden as the end of the user's session, 
and sends the appropriate analytics using the Navigator.sendBeacon() API:

document.onvisibilitychange = function() {
  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon('/log', analyticsData);
  }
};
*/
// document.onvisibilitychange = function() {
//   if (document.visibilityState === 'hidden') {
//     console.log("why you left me!")
//   }
// };

// ----[7]beforeunload
/* 
Never add a beforeunload listener unconditionally or use it as an end-of-session signal. 
Only add it when a user has unsaved work, and remove it as soon as that work has been saved.

but using it prevents pages from being added to the Back-Forward Cache, 
it's recommended that you only add beforeunload listeners when a user has unsaved 
changes and then remove them immediately after the unsaved changes are saved.

onAllChangesSaved(() => {
  removeEventListener('beforeunload', beforeUnloadListener, {capture: true});
});

- add the event to the window object
- Or assign an event to the onbeforeunload attribute of the <body> element in HTML file

if you want to warn the user that there is some promises or fetching still working
you can create set then add promises to that set and make if statment to know if it's empty or not

or you can create a variable and assign it to false if(!variable) ev.returnValue = "still waiting?"

const pendingPromises = new Set()
const cleanup = () => pendingPromises.delete(promise);

function updatePage(){
  // promises
  const promise = fetch("")
  
  // add promises to Set
  pendingPromises.add(promise)

  // remove promise after success or faliure
  promise.then(cleanup).catch(cleanup)
}
window.addEventListener("beforeunload", function(ev){
  if(pendingPromises.size){
    ev.returnValue = "still waiting?"
  }
})
*/

// ---[8] pagehide event
/*
The pagehide event is sent to a Window when the browser hides the current page in the process
of presenting a different page from the session's history.
For example, when the user clicks the browser's Back button, 
the current page receives a pagehide event before the previous page is shown.

The persisted property returns a Boolean value that indicates if the webpage is 
loaded directly from the server, or if the page is cached, when an onpageshow or onpagehide 
event occurs.

window.onpagehide = function(ev) {
  let txt = JSON.stringify(ev.persisted)
  window.localStorage.setItem("pagehide",txt)
};
*/

// ---[9]unload
/*
Never use the unload event on modern browsers.

Many developers treat the unload event as a guaranteed callback and use it as an 
end-of-session signal to save state and send analytics data, but doing this is extremely 
unreliable, especially on mobile! The unload event does not fire in many typical unload 
situations, including closing a tab from the tab switcher on mobile or closing the browser 
app from the app switcher.
For this reason, it's always better to rely on the visibilitychange event to determine when 
a session ends, and consider the hidden state the last reliable time to save app and user data.

Furthermore, the mere presence of a registered unload event handler (via either onunload or 
  addEventListener()) can prevent browsers from being able to put pages in the Back-Forward 
  Cache for faster back and forward loads.
In all modern browsers (including IE11), it's recommended to always use the pagehide event 
to detect possible page unloads (a.k.a the terminated state) rather than the unload event. 
If you need to support Internet Explorer versions 10 and lower, you should feature detect 
the pagehide event and only use unload if the browser doesn't support pagehide:
*/

// ----------------------------------sendBeacon()------------------------------
/*
if you want to make fetch request or any request to server when leaving the page you can not use unload
or beforeunload event because these requests will be rejected
but with navigatior.sendBeacon() you can send request to the server but you will not get respnse
*/

// beforeunload or unload
// window.addEventListener('unload', (ev) => {
//   console.log(ev);
//   // fetchVersion(ev); // will not work
//   beaconVersion(ev);
// });

// function fetchVersion(ev) {
//   let url = 'http://127.0.0.1:3333/analytics';
//   fetch(url)
//     .then((res) => res.json())
//     .then((content) => {
//       localStorage.setItem('departed', JSON.stringify(content));
//     })
//     .catch((err) => console.error);
// }

// function beaconVersion(ev) {
//   let url = 'http://127.0.0.1:3333/analytics';
//   let data = JSON.stringify({ departure: Date.now() });
//   //Always POST
//   //status of request will always be pending because we will not get response
//   //ArrayBuffer, ArrayBufferView, Blob, DOMString, FormData,
//   // or URLSearchParams object containing the data to send.
//   navigator.sendBeacon(url, data); 
//   console.log(data);
// }

// -----------------------------requestAnimationFrame()-----------------------
/*
The window.requestAnimationFrame() method tells the browser that you wish to perform 
an animation and requests that the browser calls a specified function to update an 
animation before the next repaint. The method takes a callback as an argument to be 
invoked before the repaint.

If you go to another tab on browser (visibilitystate hidden ) the browser will pause 
the requestAnimationFrame
But setInterval will still running in background

The callback method is passed a single argument, 
a DOMHighResTimeStamp, which indicates the current time 
(based on the number of milliseconds since time origin => first requestAnimationFrame call)
DOMHighResTimeStamp value will change according to the refresh rate of screen
*/

// let output = document.getElementById('output');
// let box = document.getElementById('box');
// let number = 0;
// let xpos = 0;
// function paint() {
//   number++;
//   output.textContent = number;

//   if (number < 300) {
//     requestAnimationFrame(paint);
//   }
// }

// function move(timmy) {
//   if (timmy) {
//     let diff = timmy - number;
//     console.log('frame', diff);
//     number = timmy; //DOMHighResTimeStamp
//   }
//   xpos = xpos + 5;
//   box.style.transform = `translateX(${xpos}px)`;
//   let ww = document.body.clientWidth - 100;
//   if (xpos < ww) {
//     requestAnimationFrame(move);
//   }
// }

// window.requestAnimationFrame(move);

// ---------------------alert , confirm & prompt------------------
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('p.a').addEventListener('click', handleClickA);
//   document.querySelector('p.c').addEventListener('click', handleClickC);
//   document.querySelector('p.p').addEventListener('click', handleClickP);
//   if ('document' in window) {
//     console.log('doc');
//   }
// });

// function handleClickA(ev) {
//   //alert
//   let answer = alert('this is a message');
//   console.log(answer); //undefined
// }
// function handleClickC(ev) {
//   //confirm
//   let answer = confirm('Are you sure?');
//   console.log(answer); //true false
// }
// function handleClickP(ev) {
//   //prompt
//   let answer = prompt('This is my question', 'default answer');
//   console.log(answer); //answer null
// }

// ----------------------------------window.open()---------------------------
/*
* target attribute : 
[1] _blank => open in new tab or window ( depend on features)
[2] _self => open at the same tab (doesn't depend on features)
[3] frame name => open at iframe with attribute name ="frame name"
[4] _parent => open in the parent frame (if the link inside iframe)
[5] _top => value opens the page in the top frame which always is the full browser tab/window.
*/

// let other = null; //will be our window reference
// let features =
//   'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';
// //,height=400,width=400

// document.getElementById('btnGoogle').addEventListener('click', (ev) => {
//   //open google in a new tab or window
//   let url = 'https://google.com/';
//   // _blank is the default is open in new tab if you need to open in new window 
//   // you can change some features then window can not open two tabs with different features so open it in a new window
//   let other = window.open(url, '_blank', features);
// });
// document.getElementById('btnSelf').addEventListener('click', (ev) => {
//   //open google in current tab
//   let url = 'https://google.com/';
//   window.open(url, '_self');
// });
// document.getElementById('btnTwo').addEventListener('click', (ev) => {
//   //open local page in a new tab
//   let url = 'http://127.0.0.1:5500/index.html';
//   let other = window.open(url, '_blank');
//   // we should add setTimeout because the window.open() will take time to open and we need to wait
//   // before add style to it
//   setTimeout(() => {
//     other.document.body.style.backgroundColor = 'cornflowerblue';
//   }, 1000);
// });
// document.getElementById('btnFrame').addEventListener('click', (ev) => {
//   //open local page in the iFrame
//   let url = 'http://127.0.0.1:5500/index.html';
//   let other = window.open(url, 'myFrame');
//   setTimeout(() => {
//     other.document.body.style.backgroundColor = 'cornflowerblue';
//   }, 1000);
// });
// document.getElementById('btnColor').addEventListener('click', (ev) => {
//   //set a random background colour in the iframe's document
//   let clr = `#${Math.random().toString(16).substring(2, 8)}`;
//   let fr = document.querySelector('iframe');
//   fr.contentDocument.body.style.backgroundColor = clr;
//   fr.contentWindow.document.body.style.backgroundColor = clr;
// });

// ---------------------select between HTML and JS------------------------
/*
Selecting multiple options vary in different operating systems and browsers:
* For windows: Hold down the control (ctrl) button to select multiple options
* For Mac: Hold down the command button to select multiple options

Because of the different ways of doing this, and because you have to inform the user that 
multiple selection is available, it is more user-friendly to use checkboxes instead.
*/
// document.addEventListener('DOMContentLoaded', () => {
//   document
//     .getElementById('flavours')
//     .addEventListener('input', handleSelect);
//   document.getElementById('thing').addEventListener('input', handleData);
// });

// function handleSelect(ev) {
//   //document.getElementById('flavours'); is the same because select element has 
//   // property called value (the value selected) but give you only 1st selection so we need to do loop 
//   //  incase of multiple selection
//   let select = ev.target; 
//   console.log(select.value);
//   let choices = [];
//   // for (let i = 0; i < select.selectedOptions.length; i++) {
//   //   choices.push(select.selectedOptions[i].value);
//   // }
//   choices = [].map.call(select.selectedOptions, (option) => option.value);
//   console.log(choices);
// }
// function handleData(ev) {
//   let theInput = ev.target;
//   console.log(theInput.value, typeof theInput.value);
// }

// -----------------------Console is more than just log---------------------
/*
console.trace() => show you the call path taken to reach the point at which you call console.trace()
1st anonymous means global scope
any other anonymous functions without names
*/
// let log = console.log;
// let str = 'Hello';
// let num = 123;
// let bool = true;
// const data = {
//   prop1: 'hello',
//   prop2: [
//     { id: 1, name: 'Marshall', actor: 'Jason' },
//     { id: 2, name: 'Barney', actor: 'Neil' },
//     { id: 3, name: 'Robin', actor: 'Cobie' },
//     { id: 4, name: 'Lily', actor: 'Alyson' },
//     { id: 5, name: 'Ted', actor: 'Josh' },
//   ],
// };
// const funcs = {
//   f1() {
//     log('inside f1');
//     funcs.f2();
//   },
//   f2() {
//     log('inside f2');
//     funcs.f3();
//   },
//   f3() {
//     log('inside f3');
//     funcs.f4();
//   },
//   f4() {
//     console.trace('inside f4'); // give you entire stack
//     // done the chain
//   },
// };

// // log('1st: ', str, num, bool);
// // log('2nd: ' + str + ' ' + num);

// // log('3rd: ' + data);
// // log('4th:', data);
// // log({ data });

// // console.table(data);
// // console.table(data.prop2);

// // funcs.f1();
// // funcs.f4();
// setTimeout(function bob() {
//   funcs.f4(); 
// }, 1000);

// console.error('hello');
// console.warn('hello');
// console.info('hello');

// -------------------------------monitorEvents-------------------
/*
only on console on Browser to track any keydown or mousedown 
monitorEvents(document.body, 'keydown');
// to remove the event
unmonitorEvents(document.body, "keydown")
*/

// --------------------------practical EXP. LocalStorage--------------
// const APP = {
//   keybase: 'Steve-Shows-App-',
//   keys: [],
//   init() {
//     //start the app
//     document.getElementById('btnSave').addEventListener('click', APP.saveChar);
//     document.querySelector('header').addEventListener('click', APP.loadChar);
//     APP.loadShows();
//   },
//   saveChar(ev) {
//     ev.preventDefault();
//     let show = document.getElementById('show').value.trim();
//     let char = document.getElementById('char').value.trim();
//     if (show && char) {
//       //if both a show and character are provided
//       let key = APP.keybase + show.toLowerCase();
//       let storage = localStorage.getItem(key);
//       let chars = [];
//       if (storage) {
//         chars = JSON.parse(storage);
//       }
//       chars.push(char);
//       chars = Array.from(new Set(chars));
//       localStorage.setItem(key, JSON.stringify(chars));
//       document.getElementById('show').value = '';
//       document.getElementById('char').value = '';

//       APP.loadShows();
//     }
//   },
//   loadShows() {
//     //go to localstorage and retrieve all the keys that start with APP.keybase
//     let num = localStorage.length;
//     if (num) {
//       APP.keys = []; //reset the keys array
//       for (let i = 0; i < num; i++) {
//         let key = localStorage.key(i);
//         if (key.startsWith(APP.keybase)) {
//           APP.keys.push(key);
//         }
//       }
//       APP.keys.sort();
//       APP.buildNav();
//     }
//   },
//   buildNav() {
//     let nav = document.querySelector('header');
//     nav.innerHTML = '';
//     let foot = document.querySelector('footer');
//     foot.innerHTML = '';
//     let df = document.createDocumentFragment();
//     APP.keys.forEach((key) => {
//       //create a new anchor in the header for each show
//       let a = document.createElement('a');
//       a.className = 'show';
//       a.textContent = key.replace(APP.keybase, '');
//       df.append(a);
//     });
//     nav.append(df);
//   },
//   loadChar(ev) {
//     if (ev.target.tagName === 'A') {
//       //put the show name into the input field
//       let show = ev.target.textContent.toLowerCase();
//       document.getElementById('show').value = show;
//       //remove old active show class
//       //set current active class
//       let oldactive = document.querySelector('header a.active');
//       if (oldactive) {
//         oldactive.classList.remove('active');
//       }
//       ev.target.classList.add('active');
//       //get the characters for the show and build the footer
//       let key = APP.keybase + show;
//       let storage = localStorage.getItem(key);
//       if (storage) {
//         let chars = JSON.parse(storage);
//         APP.buildChars(chars);
//       }
//     }
//   },
//   buildChars(chars) {
//     let foot = document.querySelector('footer');
//     foot.innerHTML = '';
//     let df = document.createDocumentFragment();
//     chars.forEach((char) => {
//       //build the spans in the footer
//       let span = document.createElement('span');
//       span.className = 'char';
//       span.textContent = char;
//       df.append(span);
//     });
//     foot.append(df);
//   },
// };

// document.addEventListener('DOMContentLoaded', APP.init);

// ---------------------------form Events----------------------

//blur or change: can be used for validation when pattern needed
//input: better for validation than change in most cases

// document.addEventListener('DOMContentLoaded', () => {
//   //add event listeners to form elements
//   //name email phone pass lang btnSend
//   let name = document.getElementById('name');
//   let email = document.getElementById('email');
//   let phone = document.getElementById('phone');
//   let pass = document.getElementById('pass');
//   let lang = document.getElementById('lang');
//   let btn = document.getElementById('btnSend');
//   // form has attribute name and you can get this form by it's name
//   let form = document.sampleForm;

//   // KeyBoard Events
//   ['keypress','keydown','keyup'].forEach(function(event){
//     name.addEventListener(event,handleKey)
//   });
//   // Mouse Events
//   ['click','mousedown','mouseup'].forEach(function(event){
//     name.addEventListener(event,handleMouse)
//   });
//    // Focus Event
//   [name,email,phone,pass,lang].forEach(function(element){
//     element.addEventListener("focus",handleFocus)
//   });
//   // Blur Event
//   [name,email,phone,pass,lang].forEach(function(element){
//     element.addEventListener("blur",handleBlur)
//   });
//   // Change Event
//   [name,email,phone,pass,lang].forEach(function(element){
//     element.addEventListener("change",handleChange)
//   });
//   // Input Event
//   [name,email,phone,pass,lang].forEach(function(element){
//     element.addEventListener("input",handleInput)
//   });

//   //handle form submission
//   form.addEventListener('submit', handleSend);
//   btn.addEventListener('click', handleSend);
//   //even with enter key
//   document.addEventListener('keypress', (ev) => {
//     console.log({ ev });
//   });
// });

// function handleChange(ev) {
//   console.log(ev.type.toUpperCase(), ev.target.id, ev.target.value);
// }
// function handleInput(ev) {
//   console.log(ev.type.toUpperCase(), ev.target.id, ev.target.value);
// }

// function handleFocus(ev) {
//   console.log(ev.type.toUpperCase(), ev.target.id, ev.target.value);
// }
// function handleBlur(ev) {
//   console.log(ev.type.toUpperCase(), ev.target.id, ev.target.value);
// }

// function handleMouse(ev) {
//   console.log(ev.type.toUpperCase(), ev.target.id, ev.target.value);
// }
// function handleKey(ev) {
//   console.log(ev.type.toUpperCase(), ev.target.id, ev.target.value);
//   let code = ev.keyCode || ev.which;
//   if (code == 10 || code == 13) {
//     //return or enter key
//     handleSend(ev);
//   }
// }

// function handleSend(ev) {
//   ev.preventDefault();
//   //stop the form from submitting and reloading the page
//   console.log(ev.type.toUpperCase(), 'Submitting the Form');
// }

// ------------------------exp. of module and destructuring------------------
/*
benifits of destructuring here is :
[1] we should not pass argument at same order of submit function inside user.js (inside module folder)
[2] we can add more parameters to submit function without effecting our code here
*/

// import { USER } from './Module/user.js';
// import { NetworkError } from './Module/error.js';

// const APP = {
//   init() {
//     //add event listeners to form elements
//     APP.addListeners();
//   },
//   addListeners() {
//     let form = document.sampleForm;
//     form.addEventListener('keypress', (ev) => {
//       let key = ev.keyCode || ev.which;
//       if (key === 10 || key === 13) {
//         APP.send(ev);
//       }
//     });
//     form.addEventListener('submit', APP.send);
//     let btn = document.getElementById('btnSend');
//     btn.addEventListener('click', APP.send);
//   },
//   send(ev) {
//     ev.preventDefault();
//     ev.stopPropagation();
//     let em = document.getElementById('email');
//     let password = document.getElementById('pass');
//     let language = document.getElementById('lang');
//     let endpoint = '/register';
//     // destructuring 
//     let obj = {
//       email : em,
//       password,
//       language,
//       endpoint
//     }
//     USER.submit(obj)
//       .then((response) => {
//         if (response.status >= 200 && response.status <= 299) {
//           return response.json();
//         } else {
//           throw new NetworkError(`${response.statusText} ${response.status}`);
//         }
//       })
//       .then((info) => {
//         console.log(info);
//       })
//       .catch((err) => {
//         switch (err.name) {
//           case 'ValidationError':
//             //deal with form errors
//             console.warn(`Form validation error with ${err.field}.`);
//             document.getElementById(err.field).classList.add('error');
//             break;
//           case 'NetworkError':
//             //unable to complete the fetch
//             console.warn('unable to complete the fetch');
//           default:
//             console.warn({ err });
//         }
//       });
//   },
// };
// document.addEventListener('DOMContentLoaded', APP.init);

// ------------------------------Form Validation Part 1 (CSS & HTML)-------------------------
/*
[1] Form elements' attributes in HTML : 
id
name
type
value
checked
selected
inputmode => ="numeric" for numbers / ="text" default / ="tel" / ="decimal" / ="url" / ="search" / ="email"
enterkeyhint
autocomplete
placeholder
required => when you submit the browser will warn you you should write input here
readonly => you can not add input or change placeholder
disabled => style of input field will change (dark color like it's off now) and you can't add anything to this input field
min => for numbers
max => for numbers
step => for numbers (add arrows up and down) and you can add step="2" to add 2 each click
minlength 
maxlength
pattern => here add regular expression (you have to add required attribute wihout it will accept if you didn't add input)
novalidate => only for form element (specifies that the form-data (input) should not be validated when submitted)

[2] selectors in CSS :
input:focus
input:read-only
input:read-write => default doesn't have read-only attribute
input:disabled
input:required
input:optional => default doesn't have required attribute
::placeholder => style for the text
:placeholder-shown => style for the filed itseld that has text placeholder
input:valid
input:invalid 
:in-range => you have to add value attribute if you want to show style at the beginning
:out-of-range => you have to add value attribute if you want to show style at the beginning
*/

// ------------------------------Form Validation Part 2 (JS)-------------------------

/****
 * References
 * https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation
 * https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 * https://regexr.com/ - Tool by Grant Skinner for testing Regular Expressions
 *

-validity readonly prop - a ValidityState object

-ValidityState object props: (Boolean values)
badInput, customError, patternMismatch, rangeOverflow, rangeUnderflow
stepMismatch, tooLong, tooShort, typeMismatch, valid, valueMissing

-willValidate readonly prop - boolean willValidate is a property that says whether ]
or not an input can be validated, not if it is valid or not. The only time that willValidate 
is false is if the input element is disabled or the like.

-validationMessage - readonly prop from browser validation
                    or setCustomValidity( ) method

-checkValidity() checks element, returns boolean,
                fires the invalid event

-setCustomValidity(msg) if called with non-empty string it
                    will change the value of validity.valid
                    to false and validity.customError to true

-reportValidity() checks AND reports result
                  this shows the browser tooltip with warning
                  can be called at any point to show message
                  fires the invalid event

*difference between checkValidity() and ValidityState.valid : 
So the main difference is that checkValidity() will also fire an "invalid" event.
If you just want to know whether the value is valid, use ValidityState.valid. 
But if you want to change the form state to invalid, use checkValidity().


*/

// const APP = {
//   init() {
//     APP.addListeners();
//   },
//   addListeners() {
//     let form = document.sampleForm;
//     let fullname = document.getElementById('fullname');
//     let email = document.getElementById('email');
//     let pass = document.getElementById('pass');
//     let cell = document.getElementById('cell');
//     let regcode = document.getElementById('regcode');
//     let pets = document.getElementById('pets');
//     //after changing the whole value
//     fullname.addEventListener('change', APP.testName);
//     email.addEventListener('change', APP.testEmail);
//     pass.addEventListener('change', APP.checkPasswordRequirements)

//     //while typing
//     regcode.addEventListener('input', APP.formatCode);
//     cell.addEventListener('input', APP.formatPhone);

//     //what to do if something went wrong during validation
//     fullname.addEventListener('invalid', APP.fail);
//     email.addEventListener('invalid', APP.fail);

//     //when the form gets submitted
//     form.addEventListener('submit', APP.validate);
//   },
//   validate(ev) {
//     ev.preventDefault();
//     let form = ev.target;

//     let email = document.getElementById('email');
//     console.log('willValidate', email.willValidate);
//     //run validation on the whole form when submitting...

//     // form controls have the following
//     // invalid event
//     console.log(email.validity);
//   },
//   testName(ev) {
//     let fullname = ev.target;
//     fullname.setCustomValidity(''); //clear old message
//     //built-in test for error based on type, pattern, and other attrs
//     let currently = fullname.checkValidity();
//   },
//   testEmail(ev) {
//     let email = ev.target;
//     console.log(email.validity);
//     console.log('willValidate2', email.willValidate);
//     email.setCustomValidity(''); //clear old message
//     //built-in test for error based on type, pattern, and other attrs
//     let currently = email.checkValidity();
//     console.log('currently', currently);
//     if (currently) {
//       let emReg = new RegExp('@gmail.com$', 'i');
//       if (emReg.test(email.value) === false) {
//         //not a gmail address
//         // email.setCustomValidity('NOT a gmail address.');
//         console.log(email.validationMessage); // 'NOT a gmail address'
//         email.reportValidity(); //show the custom message, trigger invalid event
//       }
//     }
//   },
//   formatCode(ev) {
//     let regcode = ev.target;
//     let val = regcode.value;
//     val = val.toUpperCase();
//     regcode.value = val; //converts anything typed to uppercase
//     //check for i and o used instead of 1 or 0...
//     regcode.setCustomValidity('');
//     if (/(I|O)/.test(val)) {
//       regcode.setCustomValidity(
//         'There are no letters i or o in the codes. Should this be a one or a zero?'
//       );
//       regcode.reportValidity(); //display the message and trigger invalid event
//     }
//   },
//   formatPhone(ev) {
//     //format and correct the phone number as user is typing?
//     //eg: +1 (555) 555-1212
//     //restrict to numbers, parentheses, hyphens, and + as typing?
//   },
//   checkPasswordRequirements(ev) {
//     //check password requirements as user types
//     // uppercase, lowercase, numeric, length >= 10
//     // Allowed: [! @ # $ % ^ & * ( ) . , ? ; : ~]
//     let response = {
//       upper: false,
//       lower: false,
//       num: false,
//       len: false,
//       matches: null,
//       valid: true,
//     };
//     let txt = ev.target.value.trim();
//     response.upper = /[A-Z]/.test(txt);
//     response.lower = /[a-z]/.test(txt);
//     response.num = /[0-9]/.test(txt);
//     response.len = ev.target.value.trim().length >= 10;
//     response.matches = txt.match(/[^A-Za-z0-9_!@#$%^&*().,?;:~]/);
//     if (response.matches && response.matches.length > 0) {
//       response.valid = false;
//     }
//     Object.entries(response).forEach(array => {
//       if(array[1] === false){
//         document.querySelector(`.${array[0]} .unchecked`).classList.add("show")
//         document.querySelector(`.${array[0]} .checked`).classList.remove("show")
//       }else if(array[1] === true){
//         document.querySelector(`.${array[0]} .checked`).classList.add("show")
//         document.querySelector(`.${array[0]} .unchecked`).classList.remove("show")
//       }
//     })
//     return response;
//   },
//   fail(ev) {
//     let field = ev.target;
//     // the invalid event fired
//     console.log('INVALID');
//     //standard display change for any element
//     switch (field.id) {
//       case 'email':
//         let span = field.parentElement.querySelector('.errMessage');
//         span.textContent = 'Must be a valid Gmail address.';
//         break;
//     }
//   },
// };
// document.addEventListener('DOMContentLoaded', APP.init);

// ------------------history pushState() and replaceState()----------
/*
history.replaceState(data, title, url)
history.pushState(data, title, url)

- data => you can pass data and then get it by history.state
- title => most of browsers ignore it so better to use document.title = 'new string';
- url => will change url only at browser but not got to this link you have to refresh 

* difference between pushState & replaceState :
  - replaceState only change url at browser
  - pushState change url at browser and add it to history array
*/
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('l1').addEventListener('click', goOne);
//   document.getElementById('l2').addEventListener('click', goTwo);
//   document.getElementById('l3').addEventListener('click', goThree);
//   console.log(history.state);
// });
// function goOne(ev) {
//   ev.stopPropagation();
//   history.replaceState({ id: 1 }, '', 'http://127.0.0.1:5500/hello');
//   document.title = 'new string';
// }
// function goTwo(ev) {
//   ev.preventDefault();
//   history.pushState({ id: 234 }, '', 'another.html');
// }
// function goThree(ev) {
//   ev.preventDefault();
//   let num = Math.floor(Math.random() * 10000);
//   history.pushState({ id: num }, '', `#${num}`);
// }

// -------------------popstate , hashchange & events---------------
/*
- popstate =>  is fired when the active history entry changes while the user navigates the session history
    history.pushState() or history.replaceState() won't trigger a popstate event. 
    The popstate event will be triggered by doing a browser action such as a 
    click on the back or forward button (or calling history.back() or history.forward() in JavaScript).

- hashchange => is fired when the fragment identifier of the URL has changed 
    (the part of the URL beginning with and following the # symbol).
    not fired by istory.pushState() or history.replaceState()

- queryString => fresh reload of the page
*/
// const APP = {
//   init() {
//     //when the page loads
//     //check the state or hash value or both
//     APP.checkState(); //when the page loads
//     //add listeners for nav bar
//     //add listeners for popstate OR hashchange
//     APP.addListeners();

//     //APP.updateLayout('earth');
//   },
//   addListeners() {
//     document.querySelector('nav').addEventListener('click', APP.nav);

//     window.addEventListener('popstate', APP.checkState);
//     //when the user clicks back or forward
//     // window.addEventListener('hashchange', APP.tempHC);
//     // window.addEventListener('popstate', APP.tempPop);
//   },
//   // tempPop(ev) {
//   //   console.log('popstate');
//   //   console.log(history.state);
//   // },
//   // tempHC(ev) {
//   //   console.log('hashchange');
//   //   console.log(history.state);
//   // },
//   checkState() {
//     //do we want to drive our app by state or fragment-identifier(hash) or query?
//     //called when page loads AND after a popstate event
//     console.log(location);
//     console.log(history);
//     if (!location.hash) {
//       //default first load
//       history.replaceState(
//         { home: 'Earth', name: 'James Holden' },
//         '',
//         '#earth'
//       );
//       document.title = 'Earth';
//       APP.updateLayout('earth');
//     } else {
//       let hash = location.hash.replace('#', '');
//       APP.updateLayout(hash);
//       document.title = hash; //first letter to uppercase needed
//     }
//   },
//   nav(ev) {
//     ev.preventDefault();
//     let anchor = ev.target;
//     let home = anchor.getAttribute('data-home');
//     let name = anchor.getAttribute('data-name');
//     let state = {
//       home,
//       name,
//     };
//     let hash = `#${home.toLowerCase()}`;
//     history.pushState(state, '', hash);
//     document.title = home;
//     // if you don't to add them to history array
//     // history.replaceState(state, '', hash);
//     APP.updateLayout(home.toLowerCase());
//   },
//   updateLayout(place) {
//     //accept a className and update the interface based on that
//     let main = document.querySelector('main');
//     main.className = place;
//   },
// };

// document.addEventListener('DOMContentLoaded', APP.init);

// --------------------------------------Storage Event-------------------
/*
localStorage stores key-value pairs that are origin (domain) specific so if you have 2 pages (html file) at 
same domain and change localStorage from 1st page and you need the 2nd page to know that
there is a changes in localStorage you can use Storage Event which is triggered once any changes
happend in localStorage

we are using here another html called other (look at html file)
 */
// const APP = {
//   list: null,
//   names: [],
//   key: null,
//   storage: null,
//   init(key) {
//     //script runs on every page that links to main.js
//     APP.key = key;
//     APP.storage = window.localStorage;
//     return APP;
//   },
//   getStorage() {
//     //load the key item from localStorage into our names array
//     let ref = APP.storage.getItem(APP.key);
//     if (!ref) {
//       APP.storage.setItem(APP.key, JSON.stringify([]));
//     }
//     APP.names = JSON.parse(ref);
//     return APP;
//   },
//   addName(nm, list) {
//     //add a name to the names array and then update localstorage
//     let obj = {
//       id: Date.now(),
//       name: nm,
//     };
//     APP.names.push(obj);
//     APP.saveNames();
//     if (list) {
//       APP.buildList(list);
//     }
//   },
//   removeName(nm) {
//     //remove a name from the names array and then update localstorage
//     APP.names = APP.names.filter((obj) => obj.name !== nm);
//     APP.saveNames();
//   },
//   updateName(oldName, newName) {
//     //update the names array and then localStorage
//     APP.names = APP.names.map((obj) => {
//       if (obj.name === oldName) {
//         return {
//           id: obj.id,
//           name: newName,
//         };
//       }
//       return obj;
//     });
//     APP.saveNames();
//   },
//   saveNames() {
//     //save the updated names array in localStorage
//     APP.storage.setItem(APP.key, JSON.stringify(APP.names));
//   },
//   clearNames() {
//     //remove all names from localStorage and empty the names array
//     APP.names = [];
//     APP.storage.clear();
//   },
//   buildList(element) {
//     //update the list element based on the names array
//     if (!APP.names) {
//       APP.names = [];
//     }
//     element.innerHTML = APP.names
//       .map((obj) => {
//         return `<li data-key="${obj.id}">${obj.name}</li>`;
//       })
//       .join('\n');
//   },
// };

// document.addEventListener('DOMContentLoaded', () => {
//   //script specific to THIS page
//   let list = document.querySelector('#names');
//   //set up storage
//   let key = 'somewhat-shared-names-of-the-day';
//   APP.init(key).getStorage();
//   //populate data
//   APP.buildList(list);
//   //add listeners
//   document.AddForm.addEventListener('submit', addName);
//   window.addEventListener('storage', (ev) => {
//     console.log({ ev });
//     let targetURL = new URL(ev.url);
//     if (location.pathname != targetURL.pathname) {
//       //came from another page
//       APP.getStorage().buildList(list);
//     }
//   });
// });

// function addName(ev) {
//   ev.preventDefault();
//   let nm = document.getElementById('name').value.trim();
//   let list = document.getElementById('names');
//   if (nm && list) {
//     APP.addName(nm, list);
//     document.getElementById('name').value = '';
//   }
// }

// --------------------------------IndexedDB---------------------------------
/*
* IndexedDB like localStorage is origin (domain) specific.

Using idb-keyval library version 5
This example is using Jake Archibald's idb-keyval library for indexedDB.

IndexedDB can be treated like Local / SessionStorage with key values pairs.

The big differences between localStorage and IndexedDB are:

[1] IndexedDB does not need to use the JSON.parse or JSON.stringify methods.
[2] IndexedDB can be used from a webpage OR Service Worker.
[3] IndexedDB can store BLOBs (binary data).
[4] The idb-keyval library does not:
  ...allow for multiple stores/collections per database.
  ...have cursors.
  ...expose transactions.
*/
// import {
//   get,
//   set,
//   getMany,
//   setMany,
//   update,
//   del,
//   clear,
//   keys,
//   values,
//   entries,
//   createStore,
// } from 'https://cdn.jsdelivr.net/npm/idb-keyval@5.0.6/dist/esm/index.js'; // you can import from file online or download it and add it to your folder
// //methods return Promises
// //default DB name is 'keyval-store' (like a document DB)
// //default store name is 'keyval'    (like a Collection in the DB)

// (function init() {
//   //app is running now
//   //console.log(get);
//   let st = createStore('myDB', 'myStore');

//   set('user_id', Date.now())
//     .then(() => {
//       console.log('saved the user_id');
//       //overwrites old values for the same key
//     })
//     .catch(console.warn);

//   let myobj = {
//     id: 123,
//     name: 'steve',
//     email: 'steve@work.org',
//   };

//   //3rd parameter is which idb you want to set or get data from it (default or custom created idb)
//   set('info', myobj, st) 
//     .then(() => {
//       console.log('saved the info');
//     })
//     .catch(console.warn);

//   let pup = [{ type: 'Boxer' }, { type: 'Great Pyrenees' }];
//   const blob = new Blob([JSON.stringify(pup, null, 2)], {
//     type: 'application/json',
//   });

//   set('puppies', blob, st);

//   get('info',st)
//     .then((data) => {
//       console.log(data.id, data.email);
//     })
//     .catch(console.warn);

//   // 2nd parameter of update method is function which is accept the value of key ('user_id') as argument
//   update('user_id', (val) => {
//     return val - 10000;
//   })
//     .then((data) => {
//       console.log('update complete');
//     })
//     .catch(console.warn);

//   set('nope', 567);

//   del('nope')
//     .then(() => {
//       console.log('successfully deleted.');
//     })
//     .catch(console.warn);

//   keys().then((resp) => {
//     console.log('keys');
//     console.log(resp);
//   });

//   values().then((resp) => {
//     console.log('values');
//     console.log(resp);
//   });

//   entries().then((resp) => {
//     console.log(resp.length);
//     console.log(resp[0]);
//     //items from the store by index
//   });
// })();

// --------------------------catching error or rejected inside then---------------
/*
then can accept two function as parameters 
1st function is for resolve / 2nd function is for reject or error from last then or fetch istself

for exp. : 
2nd function in 1st then will catch error from fetch (failed to fetch)
2nd function in 2nd then will catch error from reading (response.json())

** fetch only goes into .catch handler when it fails to make the request for example 
when the network is not available or the domain does not exist.
But 404(not found) error will not go to .catch Handler
*/
//standard fetch
// let url = 'https://jsonplaceholder.typicode.com/todos/12';

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.warn(err.message);
//   });

// promise
// let p = new Promise((resolve, reject) => {
//   //this function represents the async task
//   //resolve();
//   reject('bad');
// })
//   .then(
//     (response) => {
//       //resolved
//       console.log('resolve');
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .catch((err) => {
//     //handle any errors
//     console.log('error catch');
//   });

// fetch(url)
//   .then(
//     (resp) => {
//       if (!resp.ok) {
//         // this will no go directly to .catch because of interrupt in 2nd then 
//         // it will go to (err) in 2nd then and you can throw another Error there to go to catch
//         // but in this case we will not know if the Error from !resp.ok or from resp.json() failure
//         throw new Error(resp.statusText)
//       }
//       return resp.json();
//     },
//     (err) => {
//       //first interrupt
//       //the fetch failing
//       console.log('Network Error');
//       console.log(err)
//       //talk to the indexedDB to get cached data
//     }
//   )
//   .then(
//     (data) => {
//       console.log(data);
//     },
//     (err) => {
//       //failed to run resp.json()
//       // throw new Error()
//     }
//   )
//   .catch((err) => {
//     console.warn('NOT resp.ok');
//   });

// after checking response.ok you can throw an Error or return Promise.reject(response) to go to .catch handler
// fetch('https://jsonplaceholder.typicode.com/todos/434234234') 
//   .then((response) => {
//     if (response.ok) { 
//       return response.json();
//     }
//     return Promise.reject(response); 
//   })
//   .then((result) => { 
//     console.log(result); 
//   })
//   .catch((error) => {
//     console.log('Something went wrong.', error); 
//   });

// --------------------------------
// let url = 'http://127.0.0.1:5500/videos/Eloquent.jpeg';

// let options = {
// method: 'GET',
// };

// fetch(url, options)
// .then(async (resp) => {
//   if (!resp.ok) throw resp.statusText;
//   console.log({ resp });
//   console.log(resp.headers.get('content-type'));
//   // headers methods : 
//   //append() delete() get()  has() values() keys() entries() set()
//   for (let h of resp.headers) {
//     console.log(h);
//   }
//   let type = resp.headers.get('content-type');
//   let obj = {
//     html: null,
//     json: null,
//     blob: null,
//   };
//   // we used async and await because .text() .json() asynchrnous
//   if (type.startsWith('text/html')) {
//     obj.html = await resp.text();
//   } else if (type.startsWith('application/json')) {
//     obj.json = await resp.json();
//   } else if (type.startsWith('image/')) {
//     obj.blob = await resp.blob();
//   }
//   return obj;
// })
// .then(({ html, json, blob }) => {
//   //handle the contents of the file
//   if (html) {
//     const doc = new DOMParser().parseFromString(html, 'text/html');
//     // console.log(doc.body);
//     let h1 = doc.querySelector('h1');
//     console.log(h1.textContent);
//   }
//   if (json) {
//     //js object
//     console.log(json)
//   }
//   if (blob) {
//     //image
//     let img = document.createElement('img');
//     let url = URL.createObjectURL(blob);
//     img.src = url;
//     document.body.append(img);
//   }
// })
// .catch((err) => {
//   console.warn(err.message);
// });

// ------------------------------image size without downloading---------------------
// let base = 'http://127.0.0.1:5500/videos/';
// let smallURL = `${base}237-400x300.jpeg`;
// let mediumURL = `${base}237-800x600.jpeg`;
// let largeURL = `${base}237-1600x1200.jpeg`;
// let options = {
//   // method : "GET" // if you want to download the file
//   method: 'HEAD', //only fetch the headers
// };
// let files = {};
// //one file
// fetch(mediumURL, options)
//   .then((resp) => {
//     if (!resp.ok) throw resp.statusText;
//     // to download the file
//     //return resp.blob();
//     //how big? to know only the size
//     console.log(resp.headers.get('content-length'));
//   })
//   .then((blob) => {
//     //convert blob to url
//   })
//   .catch((err) => {
//     console.warn(err.message);
//   });

// //list of files
// Promise.all([
//   fetch(smallURL, options),
//   fetch(mediumURL, options),
//   fetch(largeURL, options),
// ])
//   .then((responses) => { // will return array of responses responses = [resp1,resp2,resp3]
//     // console.log(new URL(respSM.url).pathname);
//     // console.log('small', respSM.headers.get('content-length'));
//     // console.log('med', respMD.headers.get('content-length'));
//     // console.log('lg', respLG.headers.get('content-length'));

//     for (let resp of responses) {
//       files[new URL(resp.url).pathname] = resp.headers.get(
//         'content-length'
//       );
//     }
//     // files[new URL(respSM.url).pathname] = respSM.headers.get(
//     //   'content-length'
//     // );
//     // files[new URL(respMD.url).pathname] = respMD.headers.get(
//     //   'content-length'
//     // );
//     // files[new URL(respLG.url).pathname] = respLG.headers.get(
//     //   'content-length'
//     // );
//     console.log({ files });
//   })
//   .catch((err) => {
//     console.warn(err.message);
//   });

// -------------------------------custom protocol--------------------
// const APP = {
//   init() {
//     //Register the custom protocol handler `web+bob`
//     //Requires HTTPS in Chrome
//     //http works in Firefox for localhost
//     //forget about Safari...

//     // `web+bob:louise` would become
//     // `http://127.0.0.1:3003/character.html?char=louise`
//     navigator.registerProtocolHandler(
//       `web+bob`,
//       `http://127.0.0.1:5500/html/charachters.html?char=%s`, // %s means web+bob: + string written in href
//       `Title`
//     );

//     //check if we are on the character page and handle the link
//     APP.checkCustom();
//   },
//   checkCustom() {
//     //are we on the character page?
//     if (location.pathname.indexOf('/html/charachters.html') > -1) {
//       //Do we have a name in the queryString
//       let params = new URL(location).searchParams;
//       if (params.has('char')) {
//         let value = params.get('char').split("web+bob:")[1];
//         let h2 = document.querySelector('header h2');
//         if (h2) {
//           h2.textContent = value.toUpperCase();
//         }
//       }
//     }
//   },
// };
// document.addEventListener('DOMContentLoaded', APP.init);

// -------------------------image lazy loading------------------
/*
- eager : 
The default behavior, eager tells the browser to load the image as soon as 
the <img> element is processed.

- lazy :
Tells the user agent to hold off on loading the image until the browser estimates 
that it will be needed imminently. For instance, if the user is scrolling through 
the document, a value of lazy will cause the image to only be loaded shortly before 
it will appear in the window's visual viewport.
*/

// document.addEventListener('DOMContentLoaded', () => {
//   //when the HTML has finished loading
//   console.log('got the HTML');
//   let images = document.querySelectorAll('p img');
//   images.forEach((img) => {
//     img.addEventListener('load', (ev) => {
//       console.log(`loaded ${ev.target.src}`);
//     });
//   });
// });

// window.addEventListener('load', () => {
//   //when the HTML, css, js, fonts,
//   //and images that are NOT lazy are finished loading
//   console.log('loaded the page and assets, NOT counting lazy images');
//   //start getting more images...
//   let main = document.querySelector('main');
//   let section = document.createElement('section');
//   let lorem = `Architecto, asperiores, ipsum modi unde iusto sunt reprehenderit
//           aliquam quo labore provident laboriosam obcaecati fugiat doloribus
//           vero quisquam odit cum perferendis sequi nostrum assumenda iste
//           aliquid sapiente expedita nobis! Nulla.`;
//   for (let i = 5; i <= 6; i++) {
//     let p = document.createElement('p');
//     p.append(createImage(i), lorem);
//     section.append(p);
//   }
//   main.append(section); //repaint
// });

// function createImage(num) {
//   let img = document.createElement('img');
//   img.loading = 'lazy';
//   img.addEventListener('load', (ev) => {
//     let url = new URL(ev.target.src);
//     console.log(`Finished loading ${url.pathname}`);
//   });
//   img.addEventListener('error', (ev) => {
//     let url = new URL(ev.target.src);
//     console.log(`Failed to load ${url.pathname}`);
//   });
//   img.src = `./videos/pexels-${num}.jpeg`;
//   return img;
// }

// ------------------------decode attribute & decode() method on images-------------
/*
- decode attribute :
* sync : Decode the image synchronously for atomic presentation with other content.
* async : Decode the image asynchronously to reduce delay in presenting other content.
* auto : Default mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.

- decode() method : 
One potential use case for decode(): when loading very large images 
, you can present a low resolution thumbnail image initially and then 
replace that image with the full-resolution image by instantiating a 
new HTMLImageElement, setting its source to the full-resolution image's 
URL, then using decode() to get a promise which is resolved once the 
full-resolution image is ready for use.
*/
// document.addEventListener('DOMContentLoaded', () => {
//   //when the HTML has finished loading
//   console.log('got the HTML');
//   // let images = document.querySelectorAll('img[decode="async"]');
//   // images.forEach(function (img) {
//   //   img.addEventListener('load', (ev) => {
//   //     console.log(`Finished loading the LOW RES ${ev.target.src}`);
//   //     ev.target.setAttribute('data-loaded', 'low');
//   //     //low res versions are:
//   //     //<img loading="lazy" decode="async"/>
//   //     //go decode the real one asynchronously
//   //     //wait for decode() promise to be resolved
//   //     //listen for the load event for the real one
//   //     let i = new Image(); // like document.createElement('img')
//   //     i.src = img.src.replace('-low-', '-');
//   //     i.decode().then(() => {       
//   //       let url = new URL(i.src);
//   //       console.log(`ASYNC: Finished decoding REAL ${url.pathname}`);
//   //       img.replaceWith(i); // method to replace node element with another one
//   //       i.setAttribute('data-loaded', 'high-decoded');
//   //     });
//   //   });
//   // });

//   // my way to solve Error 
//   let images = document.querySelectorAll('img[decode="async"]');
//   let notBusy = true;
//   for(let img of images){
//     img.addEventListener('load', function(){
//       let intervalID = setInterval(function (img) {
//         if(notBusy){
//           notBusy = false
//           let i = new Image(); // like document.createElement('img')
//           i.src = img.src.replace('-low-', '-');
//           i.decode().then(() => {       
//             let url = new URL(i.src);
//             console.log(`ASYNC: Finished decoding REAL ${url.pathname}`);
//             img.replaceWith(i); // method to replace node element with another one
//             i.setAttribute('data-loaded', 'high-decoded');
//             clearInterval(intervalID)
//             notBusy = true;
//           });
//         }
//       },100,img)
//     });
//   }
// });

// window.addEventListener('load', () => {
//   //when the HTML, css, js, fonts,
//   //and images that are NOT lazy are finished loading
//   console.log('loaded the page and assets, NOT counting lazy images');
// });

// -----how to pause a loop
// const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// const loop = async () => {
//   for (const a of [1, 2, 3]) {
//     console.log(a)
//     await wait(2000)
//   }
// }
// loop()

// ------------------------------add variable to CSS from JS--------------
// let root = document.documentElement
// root.style.setProperty("--mainColor", "red")

// ------------------link datalist element to input element using list attribute---------------

// document.addEventListener("DOMContentLoaded", () => {
//   let country = document.getElementById("country");
//   country.addEventListener("input", countrySelected);
// });

// function countrySelected(ev) {
//   console.log(ev.target.value);
//   let countryName = ev.target.value.toLowerCase();
//   if (!document.getElementById(countryName)) return;

//   let state = document.getElementById("state");
//   state.setAttribute("list", countryName);
//   state.focus();
//   state.value = "";
// }

// ------------------------import method from JS-------------------
/*
- instead of import { default as rand, colour } from './Module/utils.js';
  you can use import method in JS and will return a promise

- with import method you don't need to add type="module" attribute

*/

// const allowImport = true;

// document.addEventListener('DOMContentLoaded', () => {
//   let main = document.querySelector('main');

//   if (allowImport) {
//     import('./Module/utils.js')
//       .then(({ default: r, colour: clr }) => {
//         let pn = document.createElement('p');
//         let today = new Date().getDate();
//         pn.textContent = `Today's number is ${r(today)}.`;
//         main.append(pn);

//         let pc = document.createElement('p');
//         let c = clr();
//         pc.style.color = c;
//         pc.textContent = `Today's colour is ${c}`;
//         main.append(pc);
//       })
//       .catch((err) => {
//         console.error('Failed to load the utils functions');
//       });
//   }
// });

// --------------------------convert callback hell to promise-----------------

// const delayCallback = (func, seconds = 2) => {
//   let timmy = setTimeout(func, seconds * 1000);
//   return timmy;
// };

// const delayPromise = (seconds = 2) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// document.addEventListener('DOMContentLoaded', () => {
//   //HTML has loaded, add click listener
//   document.getElementById('btnDelay').addEventListener('click', wait);
// });

// const changeBtnColor = () => {
//   let color = `#${Math.random().toString(16).substr(2, 6)}`;
//   let element = document.getElementById('btnDelay');
//   element.style.backgroundColor = color;
//   console.log(`Button is now ${color}`);
//   return Math.floor(Math.random() * 4) + 1;
// };

// const wait = (ev) => {
//   //callback version
//   let delay1 = 3;

//   // delayCallback(() => {
//   //   let delay2 = changeBtnColor();
//   //   delayCallback(() => {
//   //     let delay3 = changeBtnColor();
//   //     delayCallback(() => {
//   //       let delay4 = changeBtnColor();
//   //     }, delay3);
//   //   }, delay2);
//   // }, delay1);

//   //change the button colour after delay
//   delayPromise(delay1)
//     .then(changeBtnColor) //return value gets passed to the next then()
//     .then(delayPromise)
//     .then(changeBtnColor)
//     .then(delayPromise)
//     .then(changeBtnColor)
//     .catch((err) => console.error);
// };

// -------------------------------------CSS clamp---------------
/*
[1] if browser support -webkit-line-clamp : 
  add those 4 lines to CSS File
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

[2] if not supported do our JS simulated support :
watch this video (https://youtu.be/GxpUp0FecEw) to understand


*/
// const LINES = 2;
// let lineHeight = 1;

// document.addEventListener("DOMContentLoaded", () => {
//   //HTML loaded
//   // to check if browser support -webkit-line-clamp 
//   if (
//     CSS.supports("-webkit-line-clamp", LINES) &&
//     window.getComputedStyle(document.querySelector("main p"))[
//       "-webkit-line-clamp"
//     ] !== "none"
//   ) {
//     // -webkit-line-clamp is supported...
//     // and there is a value set for -webkit-line-clamp in the CSS
//     console.log("CSS is doing the work for us.");
//     console.log(
//       window.getComputedStyle(document.querySelector("main p"))[
//         "-webkit-line-clamp"
//       ],
//       "lines for clamping"
//     );
//   } else {
//     // No -webkit-line-clamp support...
//     //let's do our JS simulated support

//     //one time when we first load, get the p line-height, save the original text, do clamping
//     document.querySelectorAll("main > p").forEach((p) => {
//       lineHeight = parseFloat(window.getComputedStyle(p).lineHeight);
//       p.setAttribute("data-text", p.textContent); //save the original text
//       clampIt(p);
//     });

//     //when the page gets resized repeat the clamping
//     //could use resizeObservers on the paragraphs instead
//     //this would be a good place to use debouncing to reduce the number of calls
//     window.addEventListener("resize", () => {
//       document.querySelectorAll("main > p").forEach((p) => {
//         clampIt(p);
//       });
//     });
//   }
// });

// function clampIt(p) {
//   let originalText = p.getAttribute("data-text");
//   let totalChars = originalText.length; //number of characters in the original text

//   let bounds = p.getBoundingClientRect();
//   console.log({ bounds }); //dimensions of the current paragraph - width and height

//   let lineCount = bounds.height / lineHeight;
//   console.log({ lineCount }); //number of lines that could be displayed

//   let totalAvailLength = lineCount * bounds.width; //width if that many lines were on one.
//   let avgCharWidth = Math.round(totalAvailLength / p.textContent.length);
//   console.log({ avgCharWidth }); //total width divided by current number of characters
//   // to estimate an average width per character

//   let charsPerLine = bounds.width / avgCharWidth;
//   console.log({ charsPerLine }); //how many characters can be shown per line, estimated.

//   let targetChars = Math.ceil(charsPerLine * LINES);
//   console.log({ targetChars }); //our estimate of how many characters to show in the paragraph

//   if (targetChars < totalChars) {
//     let nextSpace = originalText.indexOf(" ", targetChars - 5);
//     if (nextSpace > -1) {
//       //found a space near the target length
//       //display the substring of the right number of characters
//       p.textContent = originalText.substr(0, nextSpace).concat("\u2026"); //add ellipsis
//     } else {
//       //no space after this point in the text
//       //display the substring of the right number of characters
//       p.textContent = originalText.substr(0, targetChars - 1).concat("\u2026"); //add ellipsis
//     }
//   } else {
//     //not enough chars to fill the lines, so show it all
//     p.textContent = originalText;
//   }
// }

/* how clampIt function works
1. Find the average character width for the Element
  a. take the height of the element divided by the line-height to get the total number of current lines
  b. multiply the lines by the width of the element to get the total length
  c. divide total length by number of chars in current text

2. Find the number of characters can be held in requested number of lines
  a. requested lines multiplied by element width
  b. divide that length by the average character width

3. Truncate the original text under different conditions
  a. enough room to hold all the original text - show all of it
  b. not enough room - find the next <space> and truncate then add an ellipsis
  c. not enough room but no <space> truncate there and add an ellipsis
  
*/

// -------------------------------drag and drop-----------------------
// let imgElement = new Image();
// let dragElement = document.createElement('span');
// let myData = {
//   id: 123,
//   tag: 'p',
//   text: 'Just a paragraph',
//   timestamp: 0,
//   url: '',
// };

// document.addEventListener('DOMContentLoaded', () => {
  
//   //required event listeners
//   document.body.addEventListener('dragstart', handleDragStart); //for draggable
//   document.body.addEventListener('drop', handleDrop); //for dropzone
//   document.body.addEventListener('dragover', handleOver); //for dropzone
  
//   //optional but useful events
//   document.body.addEventListener('mousedown', handleCursorGrab);
//   document.body.addEventListener('dragenter', handleEnter);
//   document.body.addEventListener('dragleave', handleLeave);
  
//   //set up draggable things (non-ios)
//   imgElement.src = './videos/pexels-3.jpeg';
//   document.querySelector('footer>p').appendChild(imgElement);
//   dragElement.textContent = 'Wheeeee';
//   dragElement.classList.add('wheeeee');
//   document.querySelector('footer>p').appendChild(dragElement);
// });

// function handleDragStart(ev) {
//   //user started to drag a draggable from the webpage
//   let obj = ev.target;
//   if (!obj.closest('.draggable')) return;
//   if(obj.classList.contains('draggable')){
//     obj = obj.firstElementChild;
//   }
//   // console.log('DRAGSTART');
//   // ev.dataTransfer.setDragImage(dragElement, 50, 50);
//   // ev.dataTransfer.setDragImage(imgElement, 50, 50);
//   // ev.dataTransfer.setData('text/plain', ' No MORE DATA ');
  
//   myData.tag = obj.tagName;
//   myData.text = obj.textContent?obj.textContent:obj.alt?obj.alt:'';
//   myData.url = obj.href?obj.href: obj.src? obj.src:'';
//   myData.timestamp = Date.now();
//   let data = JSON.stringify(myData);
//   ev.dataTransfer.setData('application/json', data);
//   obj.setAttribute('data-ts', myData.timestamp);
  
//   let dataList = ev.dataTransfer.items;
//   for(let i=0; i<ev.dataTransfer.items.length; i++){
//     let item = ev.dataTransfer.items[i];
//     // console.log(i, item.kind, item.type);
//   }
  
// }
// function handleDrop(ev) {
//   let dropzone = ev.target;
//   if (!dropzone.classList.contains('dropzone')) return;

//   ev.preventDefault();
//   // console.log('DROP', ev.dataTransfer);
//   // let data = ev.dataTransfer.getData('text/plain');
//   let data = JSON.parse(ev.dataTransfer.getData('application/json'));
//   let draggable = document.querySelector(`[data-ts="${data.timestamp}"]`);
//   let clone = draggable.cloneNode(true);
//   dropzone.append(clone);
//   draggable.remove();
  
//   // dropzone.textContent += data;
//   dropzone.classList.remove('over');
  
//   let len = ev.dataTransfer.items.length;
//   for(let i = 0; i < len; i++){
//     let item = ev.dataTransfer.items[i];
//     if(item.kind === 'string' && item.type.match('^text/html')){
//       //i got an html element
//     }
//     if(item.kind==='string' && item.type.match('^application/json')){
//       //same as before... except the method getAsString (Asynchronous function)
//       item.getAsString((json)=>{ 
//         let data = JSON.parse(json);
//         console.log('timestamp was', data.timestamp);
//       })
//     }
//   }
  
  
// }
// function handleOver(ev) {
//   //fires continually
//   let dropzone = ev.target;
//   if (!dropzone.classList.contains('dropzone')) return;
//   ev.preventDefault();
//   // dropzone.classList.add('over'); //can do this in handleEnter
//   // console.log('dragover dropzone');
// }

// //optional but useful visual stuff...
// function handleCursorGrab(ev) {
//   let obj = ev.target;
//   if (!obj.closest('.draggable')) return;
//   obj.style.cursor = 'grabbing'; //close the hand
// }
// function handleEnter(ev) {
//   //fires once
//   let dropzone = ev.target;
//   if (!dropzone.classList.contains('dropzone')) return;
//   ev.preventDefault();
//   dropzone.classList.add('over');
//   // console.log('dragenter dropzone')
// }
// function handleLeave(ev) {
//   let dropzone = ev.target;
//   if (!dropzone.classList.contains('dropzone')) return;
//   ev.preventDefault();
//   dropzone.classList.remove('over');
//   // console.log('dragleave dropzone');
// }

// ---------------------------location iq API-----------------------------
/*
Documentation : 
https://locationiq.com/docs-html/index.html?javascript#static-maps
*/

// const APP = {
//   TOKEN: 'pk.6b6005e44e04badf378e7b27d15d962e',
//   SEARCHURL: `https://us1.locationiq.com/v1/search.php?format=json&`,
//   REVERSEURL: `https://us1.locationiq.com/v1/reverse.php?format=json&`,
//   MAPURL: `https://maps.locationiq.com/v3/staticmap?`,
//   data: null,
//   init: () => {
//     document
//       .getElementById('btnSearch')
//       .addEventListener('click', APP.doSearch);
//     document
//       .getElementById('btnReverse')
//       .addEventListener('click', APP.doReverse);
//     document.getElementById('btnMap').addEventListener('click', APP.getMap);
//   },
//   doSearch: (ev) => {
//     ev.preventDefault();
//     //use forward geocoding
//     let q = document.getElementById('keyword').value.trim();
//     if (!q) return false;
//     let url = `${APP.SEARCHURL}key=${APP.TOKEN}&q=${q}`;
//     //call the API and do a forward geocoding search
//     //save the results in a global location
//     fetch(url)
//       .then((resp) => {
//         if (!resp.ok) throw new Error(resp.statusText);
//         return resp.json();
//       })
//       .then((data) => {
//         APP.data = data[0];
//         APP.showSearchResults();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   },
//   showSearchResults: () => {
//     //display the results of the search
//     console.log(APP.data);
//     let section = document.querySelector('.results');
//     let pre = section.querySelector('pre');
//     if (!pre) {
//       pre = document.createElement('pre');
//       section.append(pre);
//     }
//     //just dump the data response into the <pre> element
//     //just the first result from the array
//     pre.textContent = JSON.stringify(APP.data, null, 2);
//   },
//   doReverse: (ev) => {
//     ev.preventDefault();
//     let q = document.getElementById('keyword').value.trim();
//     //validation
//     if (!q) return false; //exit if empty
//     if (q.indexOf(',') < 0) return false; //exit if no comma
//     let parts = q.split(','); //make array with 2 parts
//     if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) return false;
//     //exit if not number lat or lon, not two values
//     //build url
//     let url = `${APP.REVERSEURL}key=${APP.TOKEN}&lat=${parts[0]}&lon=${parts[1]}`;
//     //do a reverse geocoding call
//     //save the results in a global location
//     fetch(url)
//       .then((resp) => {
//         if (!resp.ok) throw new Error(resp.statusText);
//         return resp.json();
//       })
//       .then((data) => {
//         console.log(data);
//         APP.data = data; //no [0]
//         APP.showSearchResults();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   },
//   getMap: (ev) => {
//     ev.preventDefault();
//     if (!APP.data) return false; //make sure there is data
//     let lon = APP.data.lon; //get the longitude from the last retrieved
//     let lat = APP.data.lat; //get the longitude from the last retrieved
//     //build the URL with center, zoom, size, format
//     let url = `${APP.MAPURL}key=${APP.TOKEN}&center=${lat},${lon}&zoom=9&size=400x600&format=png`;
//     //display the static map
//     APP.showMap(url);
//   },
//   showMap: (url) => {
//     let section = document.querySelector('.map');
//     let img = section.querySelector('img');
//     if (!img) {
//       img = document.createElement('img');
//       section.append(img);
//     }
//     img.alt = APP.data.display_name; // get the display_name from the data
//     // put some ref into an attribute
//     img.setAttribute('data-place-id', APP.data.place_id);
//     // set the src with the url param
//     img.src = url;
//   },
// };

// document.addEventListener('DOMContentLoaded', APP.init);

// -------------------controlling CSS (element's styles and css variables) from Js-------------
// window.addEventListener("load", function(){
//   let body = document.body
//   let root = document.querySelector(":root")
//   // CSSStyleDeclaration object (key : number , value : style name)
//   console.log(getComputedStyle(body)) 
//   // CSSStyleDeclaration object (key : style name , value : value) but only value added by js file not css
//   console.log(body.style) 
//   // if you need to get value added bu css file use get
//   console.log(getComputedStyle(body).getPropertyValue("color")) // green in rgb
//   // to be able to use body.style.color you should add it by js file
//   console.log(body.style.color) // empty not green (in CSS file)
//   body.style.color = "red"
//   console.log(body.style.color) // red
//   // you can setProperty and access it by getPropertyValue or body.style.color
//   body.style.setProperty("color","blue")
//   console.log(getComputedStyle(body).getPropertyValue("color")) //blue in rgb
//   console.log(body.style.color) // blue
//   // you can access also CSS Variable from JS
//   console.log(getComputedStyle(root).getPropertyValue("--mainColor")) // blue
//   root.style.setProperty("--mainColor","purple")
//   console.log(getComputedStyle(root).getPropertyValue("--mainColor")) // purple
// })

// --------------------------import CSS file or JSON file-------------------
/*
This is my app.js module, which means
it can import other JS modules.
...and now, CSS and JSON too
Chrome 91 added support for JSON Modules
and Chrome 93 added CSS imports.
Edge and Opera have these too.
Support in Firefox is under development.

**instead of using fetch
*/

//-----[1]JSON
//static import
// import data from './json/slideshow.json' assert { type: 'json' };
// console.log(data.items);

//dynamic import ( using import method)
// import('./json/slideshow.json', { assert: { type: 'json' } })
//   .then((mod) => {
//     //mod is my module
//     console.log(mod.default.items);
//   })

//-------[2]CSS
// import sheet from './css/main.css' assert { type: 'css' };
// document.adoptedStyleSheets = [sheet];

// ----------------------------import maps---------------
/*
in node you can write from 'luxon' and node will search for luxon automatically
but in browser you have to write full path so if you want to write only from 'luxon'
you shoud add script tage in HTML file  :
<script type="importmap">
  {
      "imports": {
      "luxon": "./node_modules/luxon/src/luxon.js"
      }
  }
</script>

npm init -y => to install package.json with defaults
npm i luxon => to install luxon liberary

npm documentation (https://www.javascripttutorial.net/nodejs-tutorial/what-is-npm/)
luxon video (https://youtu.be/vAuUzEwTbck)
*/

// import * as luxon from 'luxon'; 

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('page is ready');
//   let output = document.querySelector('.output');
//   let DateTime = luxon.DateTime;
//   let today = DateTime.local();
//   let f = { month: 'long', day: '2-digit' };
//   let newDt = today.set({ month: 12 });
//   output.textContent = newDt.setLocale('fr-CA').toLocaleString(f);
// });

// --------------------------file object and fileList (and using fetch)---------------------------
/*
in HTML file you can write what are the accepted files types inside accept attribute: 
  text/html,.html,text/xml,.xml
  text/css,.css
  application/json,.json,text/json
  image/*,.png,.jpg,.gif,.webp,image/jpeg,image/gif,image/webp,image/png  


*/

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('inputFile').addEventListener('change', filesPicked);

//   document.getElementById('btnToggle').addEventListener('click', toggleInput);
//   document.getElementById('btnPick').addEventListener('click', askForFiles);
//   document.getElementById('btnInfo').addEventListener('click', showFileInfo);
// });

// function filesPicked(ev) {
//   //any time one or more files are picked in the file picker dialog
//   let input = ev.target;
//   let files = input.files;
//   console.log({ files });
//   if (files.length > 0) {
//     showFileInfo(ev);
//     //upload a file or file(s) to a web server/api
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     // let h = new Headers();
//     // h.append('content-type', files[0].type);
//     // h.append('content-length', files[0].size);

//     // if you want to select mutliple files yoy can not add header put you can use FormData and 
//     // the browser will create "Content-disposition": "Multipart/Form-Data" by default and 
//     // create a boundary also (a seperating text between selected files )
//     //  "Content-disposition": "Multipart/Form-Data;boundary=--asdlkasj(random string created by browser)"
//     let fd = new FormData();
//     fd.append('name', 'Steve');
//     for (let i = 0, len = files.length; i < len; i++) {
//      // FormData append accept 3 parameters (name , value, file name )
//       fd.append(`files-${i}`, files[i], files[i].name);
//     }
//     let request = new Request(url, {
//       body: fd,
//       // headers: h,
//       mode: 'no-cors',
//       method: 'POST',
//     });
//     fetch(request)
//       .then((response) => {
//         console.log(response.status, response.statusText);
//       })
//       .catch(console.warn);
//   }
// }

// function toggleInput(ev) {
//   //hide or show the <input type="file">
//   ev.preventDefault();
//   let control = document.getElementById('inputFile').parentElement;
//   //we want to apply this class to the parent
//   control.classList.toggle('hidden');
// }

// function askForFiles(ev) {
//   //open the file picker dialog
//   ev.preventDefault();
//   let control = document.getElementById('inputFile');
//   control.click();
// }

// function showFileInfo(ev) {
//   if (ev.type == 'click') ev.preventDefault();
//   //loop through all the files in the filelist
//   //and display the name, size, type, and lastModified date
//   let files = document.getElementById('inputFile').files;
//   let len = files.length;
//   for (let i = 0; i < len; i++) {
//     console.group();
//     console.log(files[i].name);
//     console.log(files[i].size);
//     console.log(files[i].type);
//     console.log(files[i].lastModified);
//     console.groupEnd();
//   }
// }

// ------------------Files, Blobs, ArrayBuffers, TypedArrays, DataViews-------------

/*
new Blob([ data ], {type:"text/plain", endings: "transparent"||"native"}) // ending => for carriage return or new line characters  

new File([ data ], filename, {type:"text/plain", lastModified: Date.now()})

(data - Blob, ArrayBuffer, TypedArray, DataView, String (utf-8 string), a mixture)
File is a sub-class of Blob. Can often be used interchangeably. 
Once you have a Blob/File then you can use it:
- upload via fetch as a file or stream
- save it in the cache
- add a link in a webpage to the file
- display it as an image (if image)
- read the text contents (json, txt, html...) and:
  - display on page
  - parse the html, xml, json, etc
  - save in localStorage or cookie

ArrayBuffer - raw data as a fixed-length string of bytes. It is NOT an Array.

DataView - an interpretation of some raw bytes expressed as 8-bit, 16-bit, 32-bit,
  or 64-bit integers. Used to add or edit data in an ArrayBuffer. Like a wrapper 
  for ArrayBuffers if you need to edit them. It is a View of the Data from the ArrayBuffer

TypedArray - It is an Array-like view of raw bytes stored as 
  8-bit, 16-bit, 32-bit or 64-bit  integers, clamped integers, 
  signed and unsigned integers, or floats. 

ArrayBuffer can be passed as parameter to DataView to edit it (for get and set methods)
ArrayBuffer can be passed as parameter to TypedArray because TypedArray have most of array methods
*/

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('btnGo').addEventListener('click', createBlob);
// });

// function createBlob(ev) {
//   ev.preventDefault();
//   let ab = new ArrayBuffer(2); //2 bytes / 1 byte = 8 bits 0 - 255
//   let dataview = new DataView(ab);
//   dataview.setInt8(0, 104); //h
//   dataview.setInt8(1, 105); //i
//   console.log(new Uint8Array(ab).toString());

//   let b = new Blob([ab]);
//   console.log(b);

//   let f = new File([ab], 'myinfo.txt', { type: 'text/plain' });
//   console.log(f);

//   let url = URL.createObjectURL(f);
//   let a = document.createElement('a');
//   a.href = url;
//   a.download = f.name;
//   a.textContent = `Download ${f.name}`;
//   document.querySelector('main').append(a);
// }

// -----------------------------custom HTTP request---------------

/*
new Response(body, {
  status: 200,
  statusText: 'All good',
  headers: {
    'x-my-header': 'some value',
  }
});

body - Blob, File, ArrayBuffer, TypedArray, DataView,
  FormData, String, ReadableStream, URLSearchParams
*/

// document.addEventListener('DOMContentLoaded', () => {
//   //when the page is ready...
//   createJSONResponse();

//   createImageResponse();
// });

// async function createJSONResponse() {
//   //create an object, convert to JSON and create a file in a Response
//   const myobj = {
//     id: 123,
//     name: 'Sheldon',
//   };
//   let json = JSON.stringify(myobj);
//   let file = new File([json], 'mydata.json', { type: 'application/json' });
//   console.log(file);
//   const response = new Response(file, {
//     status: 200,
//     statusText: 'All good',
//     headers: {
//       'x-my-header': 'some value',
//       'content-type': file.type,
//       'content-length': file.size,
//     },
//   });
//   console.log(response);
//   const copy = response.clone();
//   console.log(copy);
//   let contents = await copy.json(); // async function
//   console.log({ contents });
// }

// function createImageResponse() {
//   //load a local image and put it in a Response
//   let input = document.createElement('input');
//   input.type = 'file';
//   input.accept = 'image/*';
//   input.addEventListener('change', async (ev) => {
//     let input = ev.target;
//     let file = input.files[0];
//     let response = new Response(file, {
//       status: 200,
//       statusText: 'ok',
//       headers: {
//         'content-type': file.type,
//         'content-length': file.size,
//       },
//     });
//     let copy = response.clone();
//     console.log(copy);
//     //get image from response
//     let blob = await copy.blob(); // async function
//     //add to <a href>
//     let url = URL.createObjectURL(blob);
//     console.log(url);
//   });
//   document.body.addEventListener('click', (ev) => {
//     input.click();
//   });
// }

// ----------------------------------File Handling for web App--------------
// const APP = {
//   file: null,
//   response: null,
//   cacheName: 'samplecache-v1',
//   cache: null,
//   canvas: null,
//   ctx: null,
//   init: () => {
//     APP.addListeners();
//     APP.drawCircleOnCanvas();
//   },
//   addListeners: () => {
//     //input type="file" select image or json file
//     document
//       .getElementById('inputImage')
//       .addEventListener('change', APP.pickLocalFile);
//     document
//       .getElementById('inputJSON')
//       .addEventListener('change', APP.pickLocalFile);
//     //add the current file to a Response object
//     document
//       .getElementById('btnResponse')
//       .addEventListener('click', APP.createResponseObject);
//     //save the response in the Cache
//     document
//       .getElementById('btnCache')
//       .addEventListener('click', APP.saveInCache);
//     //display current local file on the webpage
//     document
//       .getElementById('btnDisplayLocal')
//       .addEventListener('click', APP.displayLocal);
//     //display the last item from the cache on the page
//     document
//       .getElementById('btnDisplayCache')
//       .addEventListener('click', APP.displayCache);
//     //extract the image from the canvas and display on the page
//     document
//       .getElementById('btnDisplayCanvas')
//       .addEventListener('click', APP.saveAndDisplayCanvas);
//     //generate a JSON(text) file and prompt the user to download and save the file
//     document
//       .getElementById('btnGenAndSave')
//       .addEventListener('click', APP.genAndSave);
//   },
//   ///////////////////////////////////////////////////////
//   drawCircleOnCanvas: () => {
//     //draw a blue circle and pink background on the canvas
//     APP.canvas = document.getElementById('canvas');
//     APP.ctx = canvas.getContext('2d');

//     APP.ctx.beginPath();
//     APP.ctx.fillStyle = 'lightpink';
//     APP.ctx.rect(0, 0, 200, 200);
//     APP.ctx.fill();

//     APP.ctx.beginPath();
//     APP.ctx.fillStyle = 'cornflowerblue';
//     APP.ctx.ellipse(100, 100, 50, 50, 0, 0, Math.PI * 2, false);
//     APP.ctx.fill();
//   },
//   ///////////////////////////////////////////////////////
//   pickLocalFile: (ev) => {
//     //take a file from the local file system clicked on the pickImage or pickJSON button
//     console.log('pick local file');
//     let input = ev.target;
//     let files = input.files; //array of selected file(s)
//     console.log(files.length);
//     APP.file = files[0];
//     console.log(APP.file);
//     document.querySelector('span.title').textContent = files[0].name;
//     console.log(
//       'A File object can be added as Request body for a fetch call or Response body for Cache or Service Worker.'
//     );
//   },
//   ///////////////////////////////////////////////////////
//   createResponseObject: (ev) => {
//     if (APP.file) {
//       //take the current file and save it in a Response object
//       APP.response = new Response(APP.file, {
//         status: 200,
//         statusText: 'Ok',
//         headers: {
//           'content-type': APP.file.type,
//           'content-length': APP.file.size,
//           'X-file': APP.file.name,
//         },
//       });
//       console.log(APP.response);
//       console.log(APP.file.name, 'saved in a Response object');
//     } else {
//       console.log('Pick a local file first');
//     }
//   },
//   ///////////////////////////////////////////////////////
//   saveInCache: (ev) => {
//     if (APP.response) {
//       //save the current Response object in the Cache using the Cache API
//       // caches.open() is Async function 
//       caches.open(APP.cacheName).then((cache) => {
//         APP.cache = cache;
//         let name = APP.response.headers.get('X-file');
//         let url = new URL(`/${Date.now()}/${name}`, location.origin);
//         cache.put(url, APP.response);
//         console.log(url, 'response saved in cache');
//       });
//     }
//   },
//   ///////////////////////////////////////////////////////
//   displayLocal: (ev) => {
//     //display APP.file on the webpage
//     console.log(APP.file);
//     if (APP.file) {
//       let type = APP.file.type;
//       if (type == 'application/json') {
//         //json
//         APP.file.arrayBuffer().then((buffer) => {
//           let txt = new TextDecoder('utf-8').decode(buffer);// same concept of fetch(url).then(response=> response.text()).then(txt=>{})
//           document.getElementById('outputJSON').textContent = txt;
//         });
//       } else if (type.startsWith('image/')) {
//         //image
//         let url = URL.createObjectURL(APP.file); // URL.createObjectURL is a pointer to the location of file in memory
//         document.getElementById(
//           'outputIMG'
//         ).innerHTML = `<img src="${url}" alt="image from ..."/>`;
//       } else {
//         //not a type we handle
//       }
//     } else {
//       console.log('no APP.file');
//     }
//   },
//   ///////////////////////////////////////////////////////
//   displayCache: async (ev) => {
//     //display last item from cache
//     if (!APP.cache) {
//       APP.cache = await caches.open(APP.cacheName);
//     }
//     let keys = await APP.cache.keys(); // cacheKey (request object)
//     //if there is something in the cache, get the last one, check the type, add to the page
//     if (keys.length > 0) {
//       let url = keys[keys.length - 1].url;
//       let response = await APP.cache.match(url);
//       let type = response.headers.get('content-type');
//       if (type == 'application/json') {
//         //json
//         let txt = await response.text();
//         document.getElementById('outputJSON').textContent = txt;
//       } else if (type.startsWith('image/')) {
//         //image
//         let blob = await response.blob();
//         let url = URL.createObjectURL(blob);
//         document.getElementById(
//           'outputIMG'
//         ).innerHTML = `<img src="${url}" alt="image from ..."/>`;
//       } else {
//         //we don't want this
//       }
//     }
//   },
//   ///////////////////////////////////////////////////////
//   saveAndDisplayCanvas: (ev) => {
//     //extract the image from the Canvas, save it in the cache
//     //and display it on the screen
//     APP.canvas.toBlob(
//       async (buffer) => {
//         //handle the buffer from the canvas
//         let file = new File([buffer], 'canvasImage.jpg', {
//           type: 'image/jpeg',
//         });
//         let response = new Response(file, {
//           status: 200,
//           statusText: 'ok',
//           headers: {
//             'content-type': file.type,
//             'content-length': file.size,
//             'X-file': file.name,
//           },
//         });
//         let url = new URL(`/${Date.now()}/${file.name}`, location.origin);
//         if (!APP.cache) {
//           APP.cache = await caches.open(APP.cacheName);
//         }
//         APP.cache.put(url, response);
//         let blobUrl = URL.createObjectURL(file);
//         document.getElementById(
//           'outputIMG'
//         ).innerHTML = `<img src="${blobUrl}" alt="image from ..."/>`;
//       },
//       'image/jpeg',
//       1 // 1 means 100% quality
//     );
//   },
//   ///////////////////////////////////////////////////////
//   genAndSave: (ev) => {
//     let numbers = {
//       one: Date.now(),
//       two: Math.floor(Math.random() * Date.now()),
//       three: Math.floor(Math.random() * Date.now()),
//     };
//     let str = JSON.stringify(numbers);
//     //turn the string into a file and prompt the user to download the file
//     let file = new File([str], 'numbers.json', { type: 'application/json' });
//     let url = URL.createObjectURL(file);
//     let a = document.createElement('a');
//     //a.download = file.name;
//     a.setAttribute('download', file.name);
//     a.href = url;
//     a.click();
//   },
// };

// document.addEventListener('DOMContentLoaded', APP.init);

// ------------------------CSS.registerProperty---------------------
/*
https://drafts.css-houdini.org/css-properties-values-api/#at-property-rule

values in syntax :
  * - any value read as a string
  <length> - number plus unit - absolute units work. Relative fail(rem). (for font-size, width , height)
  <length>+ - space separated list of length values
  <number> - numbers with or without decimals
  <integer> - only integers
  <percentage> - 45%
  <length-percentage> - any length or percentage or calc value 
  <color> - any valid colour value
  <image> - an image url
  <url> - a url
  <angle> - number plus deg or rad or turn
  <time> - number plus ms or s
  <frequency>
  <position>
  <ratio>
  <resolution> - any valid resolution value like 500dpi
  <transform-list> - a list of transform functions
  <transform-function> - like scale, translate, rotate, matrix, etc
  <custom-ident> (a custom identifier string)
*/
// CSS.registerProperty({
//   name: '--somesize',
//   syntax: '<length>',
//   inherits: true,
//   initialValue: '60mm', // you can use px also
// });

// ---------------------------at method-------------------------------
/*
difference between [] and at method on arrays that at method accept negative no.
*/
// let names = ["Mohamed","Ahmed","Soliman","Hussein"]
// console.log(names[2])
// console.log(names.at(2))
// console.log(names[names.length - 1] ) // to get last item in array
// console.log(names.at(-1)) // to get last item in array


// ----------------------------JS Interview Question----------------------
//----------Video no. 1
// console.log("a")
// let timmy = setTimeout(function(){
//   console.log("b")
// },1)
// let timothy = setTimeout(function(){
//   console.log("c")
// },10)
// let timer = setTimeout(function(){
//   console.log("d")
// },0)
// console.log("e")
// order of input ? a , e, b , d , c

/* b before d because it's only 1 milisecond and setTimeout (timmy) will be finished and go 
to callback function queue before reaching line of setTimeout (timer)*/

//----------Video no. 2
// let num = 0;
// async function increment(){
//   num += await 2; // Promise.resolve(2)
//   console.log(num)
// }
// increment();
// num += 1;
// console.log(num)

// output => 2,3 / 1,3 / 1,2 / 2,1 => 1,2
// from me you can get 1,3 by using setTimeout setTimeout(increment,0)

//----------Video no. 3
// // turn this object literal into a mmodule that only exposes the render method
// let myModule = {
//   data : [],
//   render : () => {
//     console.log("Render Method")
//   },
//   add : () => {
//     console.log("Add Method")
//   },
//   remove : () => {
//     console.log("Remove Method")
//   },
// }
// myModule.render()

// // my solution

// class myModule2 {
//   static data = 10;
//   constructor(){
//     this.data = myModule2.data;
//   }
//   render() {
//     console.log("Render Method")
//   }
//   #add () {
//     console.log("Add Method")
//   }
//   #remove() {
//     console.log("Remove Method")
//   }
// }
// let myInst = new myModule2()
// myInst.render()

// // steve's solution

// let myModule3 = (function(){
//   let render = ()=> {
//     console.log("Render Method")
//   }
//   let add = ()=> {
//     console.log("Add Method")
//   }
//   let remove = ()=> {
//     console.log("Remove Method")
//   }
//   return {
//     render
//   }
// })();

// myModule3.render()


//----------Video no. 4
// how to check if arguments same no. of parametes
// my solution 
// let f = function(a,b){
//   if(arguments.length === arguments.callee.length) console.log(`no of arguments = no of params`)
// }

// //steve's solution 
// let f2 = function(a,b){
//   if(arguments.length === f2.length) console.log(`no of arguments = no of params`)
// }


// f(1)
// f(1,2)
// f(1,2,3)

// f2(1)
// f2(1,2)
// f2(1,2,3)

//----------Video no. 5
/* the problem here is ; if not add the js will see this as one line of code an search for 
property a inside object {a:123} */
// let a = {a : 123}
// [a].forEach(function(x){
//   console.log(x)
// })

//----------Video no. 6
// we need here to create 2 instances reference to same object

// let obj = (function(){
//   let objIntsance;
//   function create(){
//     if(!objIntsance) objIntsance = {name : "Soliman"}
//     return objIntsance;
//   }
//   return {
//     getInstance : create
//   }
// })();

// let obj1 = obj.getInstance();
// let obj2 = obj.getInstance();

// console.log(obj1)
// console.log(obj2)
// console.log(obj1 === obj2)

//----------Video no. 7
// function f(){
//   for(var i = 0; i < 3; i++){
//     setTimeout(function(i){
//       console.log(i)
//     },1000 * i)
//   }
// }
// f()

/* you have 4 options to solve this 
- use let
- use bind
- pass i argument to setTimeout
- use IIFE

search here for 4 options to find topic of this problem
*/


//----------Video no. 8
// create array of five random numbers :

// my answer : 
// let a1  = [];
// let a2  = [];
// for(let i =0; i < 5; i++){
//   a1.push(Math.floor(Math.random() * 10))
//   a2.push(Math.floor(Math.random() * 10))
// }
// console.log(a1)
// console.log(a2)

// steve's answers:

// let a1 = Array.from({length : 5} , () => Math.floor(Math.random() * 10)) // second param is map
// let a2 = new Array(5).fill(null).map(() => Math.floor(Math.random() * 10))
// console.log(a1)
// console.log(a2)

//----------Video no. 9
// var and let hoisting

//----------Video no. 10
// create random hex color values

// // my answer : 
// function color(){
//   let rand =`#${Math.floor(Math.random() * 10e6).toString(16)}` 
//   if(rand.length === 7) {
//     console.log(rand) 
//   }else{
//     console.log("One More Time")
//     color()
//   }
// }
// color()

// // steve's answer:
// function color2(){
//   let rand =`#${Math.random().toString(16).substring(2,8)}` 
//   console.log(rand)
// }
// color2()

//----------Video no. 11
/*
parseInt is often used with one argument, but takes two.
The first is an expression and the second is the radix.
To the callback function, Array.prototype.map passes 3 arguments to parseInt: the element, the index, the array.
The third argument is ignored by parseInt, but not the second one, hence the possible confusion.
*/
// let result = ["1","7","11"].map(parseInt)
// console.log(result)

// let arr = ["1","7","11"]
// let x = arr.map((num) => parseInt(num))
// console.log(parseInt("11",2))

//----------Video no. 12

// Differences between dot notation and square bracket syntax

// let sam = {
//   castiel: "mary"
// }
// let dean = {
//   john: "crowley",
//   mary: "chuck"
// }

// //which, if any, of these three log statements will work?
// console.log(dean[sam.castiel]); // ok
// console.log(dean.sam.castiel); // ERORR
// console.log(dean[sam['castiel']]); // Ok
// console.log(dean[sam[castiel]]); // ERORR

//----------Video no. 13
// Using `this` inside an object
// The object has functions created three different ways 
// What will be the result of the three log statements?

// const circle = {
//   radius: 10,
//   circumference: function () {
//       return (this.radius * 2);
//   },
//   diameter() {
//       return (this.radius * 2);
//   },
//   area: () => {
//       return (this.radius * 2);
//   }
// }
// console.log(circle.circumference()); // 20
// console.log(circle.diameter()); // 20
// console.log(circle.area()); // NaN

//----------Video no. 14
/**
 * Write a function to determine if a number is an integer
 */

// my answer
// let isInt = function (num) {
//   return Number.isInteger(num)
// }

// steve's answer
// let isInt = function (num) {
//   return (!isNaN(num) && parseInt(num) === num)
// }

// console.log(3, isInt(3));
// console.log(3.5, isInt(3.5));
// console.log(1.00000, isInt(1.00000));

//----------Video no. 15
/**
 * Write a function to determine if one String is 
 * a case-insensitive anagram of another String
 * anagram means => two strings with same length and same letters but can be different order
 */

// my answer
// let isAnagram = function (str1, str2) {
//   let check = true;
//   str1.split("").map(char =>{
//     if(!str2.split("").includes(char)){
//       check = false;
//     }
//   })
//   if(str1.length === str2.length && check ){
//     return true
//   }else{
//     return false
//   }
// }

//  steve's answer
// let isAnagram = function (str1, str2) {
//   let sorted1 = str1.split("").sort().join("").toLowerCase()
//   let sorted2 = str2.split("").sort().join("").toLowerCase()
//   return (sorted1 === sorted2)
// }

// console.log(isAnagram('hello', 'jello'));
// console.log(isAnagram('hello', 'loelh'));

//----------Video no. 16
/**
 * Write a function to determine the largest difference 
 * between any two numbers in an array of numbers
 */

// let numbers = [12, 2, 6, 5, 9, 10, 33];

// my answer
// let difference = (function (arr) {
//   let sortedNum = arr.sort((num1,num2) => num1 > num2 ? 1 : -1)
//   return sortedNum.at(-1) - sortedNum.at(0)
// })(numbers);

// steve's answer
// let difference = (function (arr) {
//   let sortedNum = Array.from(new Set(arr)).sort((num1,num2) => (num2 - num1))
//   return sortedNum[0] - sortedNum[arr.length-1]
// })(numbers);

// console.log(difference);

//----------Video no. 17

/*
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

// my answer
// let palindrome = function (word) {
//   let num = 1;
//   let check = true;
//   word.split("").forEach((char,index,arr) =>{
//     if(char !== arr.at(-num)) check = false;
//     num++
//   })
//   return check
// }

// steve's answer
// let palindrome = function (word) {
//   let len = word.length;
//   let start = word.substring(0,Math.floor(len/2)).toLowerCase();
//   let end = word.substring(len - Math.floor(len/2)).toLowerCase();
//   let flip = end.split("").reverse().join("");
//   return (start === flip)
// }

// youtube's comment
// let palindrome = function (word) {
//   let reverse = word.split("").reverse().join("")
//   return reverse === word
// }

// console.log(palindrome('radar')); //true
// console.log(palindrome('redder')); //true
// console.log(palindrome('window')); //false

//----------Video no. 18

// //what are the values for a, b, x, y, j, k, r, s in the global scope?
// // y , s , z (without var or let ) because js will search for variable inside function if not found
// // search in global scope not found then will add x to global object

// (function f1() {
//   var a = 1, b = 1;
//   var x = y = 2;
// })();
// (function f2() {
//   let j = 1, k = 1;
//   let r = s = 2;
//   var h = 10
//   z = 10
// })();

// console.log(window.a); // undefined
// console.log(window.b); // undefined
// console.log(window.x); // undefined
// console.log(window.y); // 2
// console.log(window.j); // undefined
// console.log(window.k); // undefined
// console.log(window.r); // undefined
// console.log(window.s); // 2
// console.log(window.h); // undefined
// console.log(window.z); // 10

//----------Video no. 19
/**
 * Write a script to determine the brightness of the 
 * background colour and set the text colour as 
 * either white or black.
 * 30% of red +  60% of green + 10% of blue = intensity 
 */
// let log = console.log;

// let textColor = (bg) => {
//     bg = bg.replace('#', '');
//     //check length of string length of string should be 6
//     // you can use bitwise or substring
//     let red = parseInt(bg, 16) >>> 16; // parseInt(bg.substring(0,2), 16);
//     let green = (parseInt(bg, 16) >>> 8) & 255; // parseInt(bg.substring(2,4), 16)
//     let blue = parseInt(bg, 16) & 255; // parseInt(bg.slice(4,6), 16);
//     let intensity = (red * 0.299) + (green * 0.587) + (blue * 0.114); 
//     if (intensity > 186) {
//         return '#000000'; //black
//     } else {
//         return '#ffffff'; //white
//     }
// }

//  log(textColor('#BADA55')); //a bright green
//  log(textColor('#F0E68C')); //khaki
//  log(textColor('#990000')); //rebeccapurple
//  log(textColor('#6495ED')); //cornflowerblue

//----------Video no. 20
let process = word => {
  let vowels = ["a","e","i","o","u"];
  let vowelsInWord = [];
  let wordArr = word.split("")
  wordArr.forEach((char,index)=>{
    if(vowels.includes(char)){
      vowelsInWord.push([index ,char])
    }
  })
  let oddNum = vowelsInWord.length % 2;
  if(oddNum) vowelsInWord.splice(Math.floor(vowelsInWord.length / 2),1);
  let indx = 1;
  vowelsInWord.forEach((char,index,arr)=>{
    wordArr.splice(char[0],1,arr.at(-indx)[1])
    indx++
  })
  return wordArr.join("")
}

console.log(process("javascript"))
console.log(process("hello"))