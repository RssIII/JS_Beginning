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