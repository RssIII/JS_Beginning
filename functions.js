//Declares a function with no paramaters to say 'hello' when invoked
function helloFunction() {
    console.log('hello function');
}
helloFunction();

/* You can also create a function without a name - Anonymous functions

function() {
    console.log('No name function');
}


 You would usually use an Anonymous function with an event handler


const myButton = document.querySelector('button');

myButton.onclick = function() {
    console.log('No name function');
}



the function could also be assigned to a variable


const myGreeting = function() {
    console.log('hello');
}

//essentially this is giving the function() a name of myGreeting
myGreeting();

//you can assign it to multiple variables
let anotherGreeting = myGreeting;

myGreeting();
anotherGreeting();

*/

// ^^^ is confusing so just stick with
function myGreeting() {
    console.log('greeting function');
}

myGreeting();

// Function PARAMETERS (arguments, properties, attributes)
// the built-in browser function replace() needs two parameters - the substring to find in the main string, and the substring to replace that string with
let myText = 'I am a string';
let newString = myText.replace('string', 'replacement');
// multiple parameters are seperated by commas ,
console.log(newString);

//sometimes parameters are optional, like array join()
let myArray = ['I', 'love', 'Anna-Kay', 'my', 'fiance'];
//returns a space between the values
let addAString = myArray.join(' ');
console.log(addAString);
//let addAString = myArray.join();
//returns a comma between values by default


