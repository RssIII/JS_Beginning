/* One way to assign a simple variable */
let message;
message = "hello world";

/* declaring much shorter */
let messageTwo = "hello world";

/* you could declare multiple variables in one line but it's ugly and confusing*/
let userOne = 'Rob', age = 27, messageThree = "Rob's message";

/* instead it's good to use a line per declaration */
let user = "Robert";
let ageTwo = "27";
let messageFour = "Rob's message";

/* there are a few different ways to do it. I'll play around with it

let user = 'Rob',
    age = 25,
    message = 'hi';

let user = 'Rob'
    , age = 25
    , message = 'hi';

last one is really nasty and I hate it */

/* You cna declare one variable and have it assigned to another, kinda weird to me for some reason */

let variableOne = "Message";
let variableTwo = variableOne;

/* both read "Message"; */

/* const declares an unchanging variable */
const myBirthday = '04/23/93';

/* simple variable tasks for practice */

let admin;
let name = 'John';

admin = name;

let ourHomePlanet = 'Earth';
let userVisitorName = "Site Visitor";

/* Basic Number things */

let x = 3.14;
let y = 3;

let x2 = 123e5; //Scientfic notation => 12300000
let y2 = 123e-5; // => 0.00123


//Intgers are accurate up to 15 digits
let x3 = 999999999999999;
let x4 = 9999999999999999; // => this will scale to 10000000000000000

let x5 = 10;
let y3 = 20;

let z = x5 + y3;

/* Basic Operators, maths 

An operand is what operators are applied to. 

5 * 2 has two operands, 5 and 2.

unary means it only has one operand. */

let i = 1;

i = -1; // - reverses the sign of a number, so 1 = -1 here

//binary has two operands

let w = 1, w2 = 3;

// w - w2 = 2

/*
    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %,
    Exponentiation **.
*/

//String concatenation

let s = "the" + "string";
//console.log(s) => "thestring"

//If you ever add a string to numbers, it will always be a string, regardless of what happens

//console.log('1' + 2) => "12"
//console.log(2 + '1') => "21"

//console.log(2 + 2 + '1') => "41" => 2 + 2 is 4, then it adds it to the string '1' which = "41"

//console.log('1' + 2 + 2) => "122" the first operand is a string, so everything after is treated as a string

//only + treats strings like this. All other arithmetic operators work with numbers

//console.log(6 - '2') => 4
//console.log('6' / '2') => 





/*              Strings                 */



//You can use single or double qoutes for strings.
let string = "double";
let string2 = 'single';

//A \ before a ' in a string will allow it to pass
let string3 = 'I\'ve got a string';

/*             Conditionals             */

if (hour < 5) {
    greeting = "Good day";
}
 else {
     greeting = "Good night";
 }

 // Logical Operators

 //|| (OR), && (AND), ! (NOT), ?? (NULLSISH)

 //|| (OR)

 result = a || b;

 (true || true); //true
 (false || true); //true
 (true || false); //true
 (false || false); //false

 //OR is usually used to test if something is TRUE
let hour = 9;
if (hour < 10 || hour > 18) {
    alert('Office is closed.');
})

//true

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert('Office is closed');
}

//true

//OR returns the first TRUE value
//if NO value is TRUE, then it returns the LAST FALSE value
alert(1 || 0); // 1 is returned (because it's TRUE)
alert(null || 1); //1 is returned
alert(undefined || null || 0); //returns 0, because it's false and last in line

let firstName = "";
let lastName = "";
let nickName = "Super";

alert(firstName || lastName || nickName || "Anonymous"); //Super, and if all variables were false, "Anonymous" would be returned

//&& (AND)

result = a && b; //returns TRUE if both operands are TRUE and FALSE otherwise

alert(true && true); //true
alert(false && true); //false
alert(true && false); //false
alert(false && false); //false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert('The time is 12:30');
}

//true

if (1 && 0) { // evaled as TRUE && FALSE
    alert("Won't work because the result is FALSE");
}

//&& finds the FIRST FALSE value. If all are TRUE, returns the LAST TRUE value. It's similar to ||, it just returns the first FALSE instead of TRUE.

//&& takes precedence over ||


//! (NOT)
result = !;

// converts target operand into true/false
// returns it's inverse value

alert(!true); //returns FALSE
alert(!0); //returns TRUE

// !! is sometimes used for converting a value to a boolean
alert(!!"non-empty string"); //true
alert(!!null); //false

//What will this code output?
alert(null || 2 || undefined); //2, the first TRUE value

//What will this code output?
alert(alert(1) || 2 || alert(3)); // 1, 2 ==> alert(1) returns undefined, but still returns 1. Since it's undefined, it goes on to 2. alert(3) is never run because 2 has been returned as the FIRST TRUE value

//What will this code output?
alert(1 && null && 2); //null, the first FALSE output


//What will this code output?
alert(null || 2 && 3 || 4); // 3 => AND takes precedecne over OR, so 2 && 3 is run first, which results in 3

//age is INCLUSIVLEY between 14 and 90
if (age >= 14 && age <= 90 {
    true;
}

else {
    false;

}//NOT between 14 and 90
if (!(age >= 14 && age <= 90));

if (age < 14 || age > 90);

//Which of these statements will execute? What will the result be?
if (-1 || 0) alert('first'); //Runs
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third'); //Runs

