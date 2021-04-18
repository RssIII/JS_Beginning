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