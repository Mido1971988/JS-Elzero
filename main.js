// single line comment

/* multi 
line 
comment */

// Script tag should be written at the bottom of HTML File 
// if you want to write scipt tag at the Head you show add 
// document.addEventListener("DomContentLoaded", function)

// Javascript has 5 data types 
// that are passed by value: Boolean, null, undefined, String, and Number.
//  We’ll call these primitive types.


// Javascript has 3 data types 
// that are passed by reference: Array, Function, and Object.
//  These are all technically Objects, so we’ll refer to them collectively as Objects.


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

/* loosely typed when you don’t have to explicitly specify types of variables and objects.
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

// for ([initialization][condition][Action after loop]) {

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
// * Does not have new.target keyword.
// * Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// * Can not be used as constructors.
// * Can not use yield, within its body.
// * Can not return object because JS will be confused between {} of function and {} of object

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



// ------------------------ Deep to JS Engine-----------------------------

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
you cannot interact with the web browser during the function’s execution because the page hangs.
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
// console.log(hoist)
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

use strict will prevent Global Variable leaks (The global scope also doesn’t have the counter variable, so the JavaScript engine creates the counter variable in the global scope.)
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
We’ll call these primitive types.


* Javascript has 3 data types that are passed by reference: Array, Function, and Object.
These are all technically Objects, so we’ll refer to them collectively as Objects.

Variables that are assigned a non-primitive value are given a reference to that value.
That reference points to the object’s location in memory.
The variables don’t actually contain the value.
Objects are created at some location in your computer’s memory. 
When we write arr = [], we’ve created an array in memory.
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
[4] Object.create({} , obj)
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

// using Object.freeze
let obj = {theName : "Soliman"}
let obj2 = obj
Object.freeze(obj)
obj2.theName = "hussein"
console.log(obj) // Soliman
console.log(obj2) // Soliman
console.log(obj === obj2)

-------Function Composition-------
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


// IIFEs are very useful because they don’t pollute the global object,
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

// In an object method, this refers to the object
// Alone, this refers to the global object (window).
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
// --------- Call Method
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

// --------- bind Method 
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

// -------The difference between Call and apply
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
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

// setTimeout and for Loop tricky problem 

// for(var i=0; i < 4; i++){
//   setTimeout(_=> console.log(i),1000)
// } // output 4 (4 times)

// why output 4 (4times) ? because of 2 problems ( var and setTimeout)
// var is function scope not block scope and in for loop var will be considered in global scope
// and setTimeout API will only start executing the callback functions once all the global synchronous code has executed’
// so callback function will take value of i after the loop finish

// how to solve this Problem

// pass parameter to callback function
// for ( var i =0; i < 4; i++) {
//   setTimeout((index) => console.log(index),3000,i)
// }
// for ( var i =0; i < 4; i++) {
//   setTimeout(function (index){
//     console.log(index)
//   },1000,i)
// }

// using IIFE will create a new scope for each setTimeout execution
// for ( var i =0; i < 4; i++) {
//   (function(index) {
//     setTimeout(() => console.log(index),1000)
//   })(i)
// }

// using let instead of var because let is block scope and create separate scope for the code block
// so when setTimeout search for i will not search at gobal scope and wait till all the global synchronous code has executed
// it will find a separate scope 
// for ( let i =0; i < 4; i++) {
//   setTimeout(_ => console.log(i) ,1000)
// }

// a good link for this problem
// https://discuss.codecademy.com/t/var-and-let-in-a-loop-working-differently/550468/8

// Error you can not reassign const
// for(const i =0; i < 4; i++) {
//   console.log(i)
// }

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

/* Expressions and Statments
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
i = 10;
var obj = {}
obj.x = 10
console.log(obj.x)

* function 
-function can be expression or statment:
* function hello (){}  // expression
* let fun = function () {}  or let fun = function hello() {} // statment
-that's why with IIFE you should write parenteses (function (){})() 
because JS engine dont know if it function Expression (can be with name or not) or function decleration inside parenteses is expression

Statment EXP. :

* Decleration Statment
var x = 10; (declare variable )
function hello () {} ( function decleration)

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

* Loops nad Jumps Statments:
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

// -------------Generator
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

* step by step how generator works :
1st next() yield 1 will pause the generator and return 1 then 2nd next() will resume from yield 2 then pause and return 2
function *Yield() {
  yield 1;
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

// It’s a bit like return, but not. Return simply returns the value after the function call,
// and it will not allow you to do anything else after the return statement.

// if you use return with generator it will stop generator after 1st return ( look exp. above)

// Yield with asterisk can delegate it’s work to another generator. 
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
It doesn’t iterate over a collection such as Array, Map or Set.
Unlike the for...in loop, the for...of iterates a collection, 
rather than an object. In fact, the for...of iterates over elements 
of any collection that has the [Symbol.iterator] property.
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
3. Configurable - change the property descriptors 

Object.isExtensible(obj) 
Object.isFrozen(obj) 
Object.isSealed(obj) 
Object.preventExtensions(obj) 
Object.freeze(obj) 
Object.seal(obj


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
languages by representing the structure of a document—such as the HTML 
representing a web page—in memory. Usually it refers to JavaScript, 
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


NodeList :
* any type of Nodes => elements , text , comment ,....
* static (not live) (means nodeList will not update when changes happend) except childNodes
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
*/

// let df = new DocumentFragment()
// let txt = document.createTextNode("a text node")
// df.appendChild(txt)
// document.body.appendChild(df)
// console.log(txt.ownerDocument)

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
// // if you want to change value of custom attribute you can use only setAttribute 
// // but you can't change it directly like normal attributes
// // myElement.data-custom = "hello" // Error
// myElement.setAttribute("data-custom", "hello")
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
// let myP = document.querySelector("p").cloneNode(true)
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

/* -----------LocalStorage and SessionStorage------------
* setItem
* getItem
* removeItem
* key
* clear
* JSON.stringify – the JSON.stringify method converts any object or acceptable value into a string JSON
* JSON.parse – the JSON.parse method converts a string into its corresponding object or value as described by the string

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
// // console.log(arrIn.next())
// // console.log(arrIn.next())
// // console.log(arrIn.next())
// // console.log(arrIn.next())
// // console.log(arrIn.next())
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


// --------------Regular Expression-------------
// Syntax 
// /pattern/modifier(s)
// new RegExp("pattern", "modifier(s)")


// let str1 = '10 20 100 1000 5000';
// let str2 = 'os1 os12 os123 os123os';

// let invalidEmali  =  "Osama@@@Gmail...com";
// let validEmali  =  "Osama@Gmail.com";

// let ip = "192.168.2.1" // Ipv4

// let url = "elzero.org"
// let url = "https://www.elzero.org"

// let myString = "Hello Elzero Web School I Love elzero"
// Match Method 
// return Array / matches a String Against a regular Expression Pattern


// Modifiers Flags
// i => case insensitive ( if you write it it will search for both capital and small)
// g => global search (if you did not add g will retrun first element match then it's index inside Array)
// m => mutlilines
// let regularExpression = /elzero/i;

// console.log(myString.match(regularExpression))

// let tld = "Com Net Org Info Code Io"
// let tldRe = /(org|info|io)/ig
// console.log(tld.match(tldRe))

// let nums = "12345678910";
// // Range
// let numsRe = /[0-9]/g;
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

// console.log(myString.match(specials2 ));

// . => matches any Character , except newLine and another line terminators
//  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
// \W => matches non Word Characters
// \d => matches digits from 0 to 9
// \D => matches non-digits characters
// \s => matches Whitespaces
// \S => matches non Whitespaces charachter
// \b => matches at the beginning or end of a word
// \B => matches Not at the beginning / end of a word

// let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
// let dot = /./g;
// let w = /\w/g;
// let W = /\W/g;
// i added \ before . because . match any charachters but if i add \. will match . only (not mentioned in elzero course)
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


// Quantifiers  
// n+ => One Or More
// n* => Zero or More
// n? => Zero or One
// n{x} => Number of
// n{x,y} => Range
// n{x, } => At Least x
// $ => End With Something
// ^ => Start With something
// ?= => followed By something
// ?! => Not followed By Something


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
// // \s means space
// will return false because @1OsamaZ does not start with words but if @ at 2nd value @2AhmedZ will return true because it found 1OsamaZ without @
// console.log(/^\w/ig.test(names))
// // here will output element + Z
// console.log(names.match(/\d\w{5}Z/ig))
// // here will output element without Z 
// console.log(names.match(/\d\w{5}(?=Z)/ig))
// console.log(names.match(/\d\w{8}(?!Z)/ig))

/* -------multiline mode--------
The multiline mode is enabled by the flag m.
It only affects the behavior of ^ and $.
In the multiline mode they match not only at the beginning and the end of the string, 
but also at start/end of line.
That’s because by default a caret ^ only matches at the beginning of the text, 
and in the multiline mode – at the start of any line.

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
That’s because there’s no newline after 3 (there’s text end though, so it matches $).
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
// let txtRe = /@/ig;
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

Every Symbol value (desciption) returned from symbol() is unique 

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
// // Symbol will not be shown in iteration
// for (let val of Object.entries(myObj)) {
//   console.log(val)
// } 
// console.log(Object.keys(myObj)) // Symbol will not be shown
// console.log(Object.getOwnPropertyNames(myObj)) // Symbol will not be shown
// console.log(JSON.stringify(myObj)) // Symbol will not be shown
// console.log(Object.getOwnPropertySymbols(myObj)) // to show only Symbol
// console.log(myObj) // everyThing will be shown
// console.log(myObj[myNewSymbol])

// for Method
/* 
when you use for method it will search for any Symbol that has a key "Test" inside it 
if found will assign it to the varaible if not will creat it and assign it to variable
so in mySymbolthree will search for key "Test" not found so will create and assign to variable
in mySymbolFour will search and find a Symbol key "Test" so will assign it to new variable
Symbol("Testing") => Testing here is a description 
Symbol.for("Test") => Test here is a key 
that's why when we write Symbol.keyFor(Symbol("Testing")) we get undefined because Testing is a description not key
*/
/* 
The global symbol registry is just a convenient global repository for symbol instances
that works regardless of scope or compilation unit.
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

If any of those objects loses all references it will be “marked” for garbage collection. 
When this garbage collection happens this object is released from the memory. It is gone. 
The thing about garbage collection is that it works whenever it wants. You can’t predict when it will happen.
Let’s say you have an object. You add this object to a WeakSet. What if you, 
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
//   yield * generateNums()
//   yield * generateNames()
// }

// let genAll = generateAll()
// // will start from nums then go to names
// console.log(genAll.next())
// console.log(genAll.next())
// console.log(genAll.next())
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

// import{myRank, myArray , sayName } from './Module.js';
// import everyyhing from module (everything means everything you have exported from ./Module.js)
// import * as all from './Module.js';

// // console.log(a)
// // console.log(myRank)
// console.log(all.myRank)
// // console.log(myArray)
// console.log(all.myArray)
// // console.log(sayName("Soliman"))
// console.log(all.sayName("Soliman"))
// console.log(all)

// import anyName from './Module.js'
// you can merge named export and default export in one line code
// import anyName , {myArray, myRank, sayName} from './Module.js';
// // console.log(anyName())
// console.log(anyName)
// console.log(myRank)

// console.log(this) // undefined
/* 
In Node modules, this at the top level doesn’t reference the global object. 
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
// setTimeout after the call stack is empty but promise.then() at the end of the main stack
// let x = 0;
// let myPromise = new Promise((resolve , reject) => {
//   let status = true;
//   console.log("From inside of Promise")
//   if(status) {
//     resolve( x = 2 )
//     // resolve( console.log(( x += 2)))
//   }else{
//     reject(x = 3)
//   }
// });
// myPromise.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// )
// console.log("From Outside of Promise")
// output 
/* 
[1] "From inside of Promise"
[2] "From outside of Promise"
[3] 2 => 2 printed after "From outside of Promise" 

but if console.log inside promise it self 
[1] "From inside of Promise"
[3] 2 => 2 printed before "From outside of Promise" 
[2] "From outside of Promise"
*/

// window.setTimeout(_=>console.log("From setTimeout") , 0)
// let myPromise = new Promise((resolve , reject) => {
//   let status = true;
//   console.log("From inside of Promise")
//   if(status) {
//     resolve(console.log("From Resolve"))
//     // resolve("From Resolve")
//   }else{
//     reject(console.log("From reject"))
//     // reject("From reject")
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

//output if console.log() inside promise itself not promise.then()
/* 
[1] "From inside of Promise"
[2] "From Resolve"
[3] "From outside of Promise"
[4] undefined => from Promise.then will try to console.log(console.log(resolved))
[5] "From setTimeout"

// ---------asynchronous of then--------
using a resolved promise, the 'then' block will be triggered instantly,
but its handlers will be triggered asynchronously as demonstrated by the console.logs
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
// window.setTimeout(_ => console.log(x)) // 6 because setTimeout will wait till call stack to be empty
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

// // race will return fastet resolve
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
// without async and await
// asyncAwait();
// function asyncAwait() {
//   let p1 = promfunc()
//   if(p1) {
//     console.log(p1) // Promise{Pending}
//   }
// }

// function promfunc() {
//   return new Promise((resolve , reject) => {
//     resolve("Resolved!") 
//     // reject("Rejected!")
//   }).catch(err => console.log(`From Catch: ${err}`))
// }

// with async and await
// await will wait the promise to resolve and return the value of resolve
// if the resolve inside setTimeout await will also wait for Promise to resolve and return the value of resolve
// if we have resolve inside setTimeout and reject inside Promise p1 will be catch
// asyncAwait();
// async function asyncAwait() {
//   let p1 = await promfunc()
//   if(p1) {
//     console.log(p1) // "Resolved!" even if we use setTimeout 
//   }
// }

// function promfunc() {
//   return new Promise((resolve , reject) => {
//     // resolve("Resolved!")
//     setTimeout(_ => resolve("Resolved!"),1000)
//     // reject("Rejected!")
//   }).catch(err => console.log(`From Catch: ${err}`))
// }

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
//     console.log(err.message)
//   })
//   .finally(_ => {
//     console.log("From Finally")
//   })

// -------then accept upto 2 arguments 1st calback func is for resolved 2nd for rejected--------------

// let p1 = new Promise((resolve , reject)=>{
//   // resolve("Resolved")
//   // reject("Rejected")
//   throw Error("Error")
// })
// p1 
//   .then((result)=> {
//     console.log(`1st then 1st func : ${result}`)
//     throw Error("Error from 1st then 1st func")
//     return "Value from 1st then 1st func"
//   },
//   (result)=>{
//     console.log(`1st then 2nd func: ${result}`)
//     throw Error("Error from 1st then 2nd func")
//     return "Value from 1st then 2nd func"
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
* the JavaScript engine creates a new object named p1 (instance) and links the p1 object to the Person.prototype object via the prototype linkage:

The __proto__ is pronounced as dunder proto. The __proto__ is an accessor property of the Object.prototype object. It exposes the internal prototype linkage ( [[Prototype]]) of an object through which it is accessed.
However, it may be deprecated in favor of Object.getPrototypeOf() in the future. Therefore, you should never use the __proto__ in your production code.

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

// // Class
// class Person2 {
//   constructor(name,age){
//     this.name = name 
//     this.age = age
//     this.classInstFunc = function(){
//       console.log("instance p2")
//     }
//   }
//   static classStatFunc = () => {
//     console.log("static Method from Class")
//   }
// }
// // instances
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
// [3] links the new object to the User.prototype object via the prototype linkage
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
//   this.arrowFunc = () => console.log(new.target.name);
// }

// let instance = new Constructor("Mohamed") // Constructor
// // In arrow functions, new.target is inherited from the surrounding scope.
// instance.arrowFunc() // Constructor
// let instance2 = Constructor("Ahmed") // undefined

/* 
---------------------ProtoType chain---------------------
because Js is prototype-based not class-based language childObj is not taking a copy of properties
and methods os parentObj it is just have a link to parent's prototype
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
// // here we are not overriding the prop1 inside parentObj we are creating a new prop1 inside childObj
// childObj.prop1 = 777;
// console.log(parentObj.prop1)
// console.log(childObj.prop1)

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
  
//   // Static Method (this here refer to class User static counter)
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

// You can not use Static with old sytnax of constructor but you can use Object.defineProperty
// function User(name) {
//   this.name = name;
//   this.innerInfo = () => console.log("Inner Method");
// }
// User.prototype.outerInfo = () => console.log("Outer Method");
// Object.defineProperty(User, "staticInfo", {
//   value : () => console.log("Static Method")
// })
// let user1 = new User("Soliman")
// user1.innerInfo()
// user1.outerInfo()
// User.staticInfo()

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
// function User(name,email){
//   this.name = name;
//   this.email = email;
//   this.showDetails = () => `Name is ${name} and email is ${email}`
// }

// function Admin(name,email,id){
//   User.call(this,name,email) // like super
//   this.id = id
//   this.showDetails = () => `Name is ${name} and email is ${email} and id is ${id}`
// }
// Object.setPrototypeOf(Admin, User.prototype) // like extend

// let Admin1 = new User("Soliman","email")
// let Admin2 = new Admin("Soliman","email",321)
// console.log(Admin1.showDetails())
// console.log(Admin2.showDetails())

// [2] inheritance in new syntax ( class )
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.showDetails = () => `Name is ${name} and email is ${email}`;
//   }
// }

// class Admin extends User {
//   constructor(name, email, id) {
//     super(name, email); //to invoke the constructor of User
//     this.id = id;
//     this.showDetails = () => `Name is ${name} and email is ${email} and id is ${id}`;
//   }
// }

// let Admin1 = new User("Soliman","email")
// let Admin2 = new Admin("Soliman","email",321)
// console.log(Admin1.showDetails())
// console.log(Admin2.showDetails())

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
// // In ES6, the .prototype property of classes is not writable and not configurable1
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
* Receive data from a server  - after the page has loaded
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

// let d = new Date()
// console.log(d)
// // miliseconds after default start date (Unix Epoch) Jan 1 00:00:00.0000 1970
// let d1 = new Date(1500000000000) 
// console.log(d1)
// // you can pass string as argument
// let d2 = new Date("20 July 2012")
// console.log(d2)
// // year , Month , day , hours , minutes , seconds ,miliseconds
// let d3 = new Date(2017,0,2,13,30,40)
// console.log(d3)

// // to change in date
// d.setFullYear(2020)
// d.setMonth(0)
// d.setDate(12)
// d.setHours(9)
// d.setMinutes(20)
// d.setSeconds(30)
// d.setMilliseconds(50)
// console.log(d)

// let getFullYear = d.getFullYear()
// let getMonth = d.getMonth()
// let getDate = d.getDate()
// let getHours = d.getHours()
// let getMinutes = d.getMinutes()
// let getSeconds = d.getSeconds()
// let getMilliseconds = d.getMilliseconds()
// // not availabe in set methods
// let getDay = d.getDay() // give you no. 0 sunday => 1 monday => .....
// console.log(getDay)

// let d4 = new Date()
// console.log(d4.toDateString())
// console.log(d4.toTimeString())
// console.log(d4.toISOString()) // another format
// console.log(d4.toJSON()) // another format
// console.log(d4.toLocaleString()) // another format
// console.log(d4.toLocaleString("en-kw")) // another format
// console.log(d4.toUTCString()) // another format


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

Object.assign() provides shallow copying (Only properties and methods) 
and it will override the method and property declared.
while Object.create() provides Deep copying provides prototype chain.
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
// console.log(finalObj1.oProp1) // F1
// console.log(finalObj2.oProp2) // OF2
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
In javascript, each built-in type has its own toString method. 
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



// --------------BitWise Operator and Binary Numbers------------
// let x = 10;
// let y = 6;
/* 
base 2 => Binary 
base 10 => Decimal 
*/
