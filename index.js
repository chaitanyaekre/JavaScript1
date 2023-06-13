/*

// Variable in javascript
let myName ='chaitanya';
console.log(myName);
//constant in javascript. const value can not change once assigned.
const interestRate = 0.3;
 // interestRate =1 ; // this line will throw error in console.

 //Javascript Object
let person = {
    name:'chaitanya',
    age:37
};

console.log(person)
// Dot Notation
person.name = 'Abhira';
console.log(person.name);
// Bracket Notation
person['age']=3;
console.log(person['age']);

//Arrays - can contains multiple type objects
let selectedColors = ['red','green'];
console.log(selectedColors);
selectedColors[2] = '13';
console.log(selectedColors);

//Funcation 
// declaration
function greet(name, surName){
    console.log("Congratulations !! "+name+" "+surName);
}
// funcation call
greet('ashwini','ekre');

// with non booleans and or operator we can provide default values

let a  = 'red';
let b = 'yellow';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);



// For in loop in javascript ( mostly used to iterate over properties in an object)

let employee = {
    name: 'chaitanya',
    designation: 'release lead',
    age:37
}

for(let key in employee){
    console.log(key + " is "+ employee[key])
}

// for of loop in javascript (mostly used to iterate over arrays)

const colors = ['red','green','blue'];

for(let color of colors){
    console.log(color);
}



// program to find max of two numbers

function max(number1, number2){
 let max;
 if(number1 > number2)
 {
    return number1;
 }   
 if(number2 > number1)
 {
    return number2;
 }
 else
 {
    return 'equal numbers.'
 }

}

let num1 = 2;
let num2 = 5;

console.log("Result is = "+ max(num1,num2));
*/

let input = 7;
const output = fizzbuzz(input);
console.log(output);

function fizzbuzz(input){
    if(typeof(input) !== 'number')
        return NaN;
    else if( isDivisibale(input,3) && isDivisibale(input,5))
        return 'fizzbuzz'
    else if(isDivisibale(input,3))
        return 'fizz';
    else if (isDivisibale(input,5))
        return 'buzz';
    else
        return input;
}

function isDivisibale(divident, divisor){
    return (divident%divisor) ==    = 0
}