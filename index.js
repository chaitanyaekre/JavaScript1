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

