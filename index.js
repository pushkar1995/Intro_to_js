//document.getElementById('example').innerHTML = "JavaScript Rules"

//var b = 11 % 3
//console.log(b)
//Modulo example .Use to display Remainder



// var a = "Good" + "Day"
// console.log(a)
//Example of String Concatination



//Declaration of function
//Here in this example *print* is the function name and *()* this braces are the
//prameter where we pass to function name

// function print() {
//     console.log("A working function")
// }
// //Now to make this function work we must invoke this function with its name
// print();

//With argument
//  function print(a) {
//         console.log(a)
//     }
//Now to make this function work we must invoke this function with its name
// print("An Argument");

//With multiple argument
// function print(a,b,c) {
//     console.log(a+b+c)
// }
// print ("One","Two","Three");

//Assigning function to varibles and functions returning values
// var multiply =  function(a,b) {
//     return a*b;
// }

// var product = multiply(5, 10);
// console.log(product);

//Objects concept in javascript (Importance of Object is to create more advance data type)
var dog = {
   name: 'Buddy',
   breed: 'Golden Retriever',
   weight: 60,
   //Adding functions to Object
   bark: function () {
       console.log("Woof!");
   } 
};
dog.bark(); //Invoking bark function

//To access specific property
//console.log(dog.breed);
//OR
// console.log(dog["breed"])


//ARRAY
var points = [25, 13,24, 32];
points.push(8) //Adding an new element to array
// var last = points.pop(); //Removing last element of array
// console.log(points,last);

//Accessing the array element
// In javascript array position starts with 0th position
// var first = points[0];
// console.log(first);

//Accessing length of the array
console.log(points.length)


// BOOLEAN AND COMPARISION OPERATORS
var a = false
console.log(a)

var a = 5 == 5 // >,<,<=,>=
console.log(a)

// Boolean Example 
if (8 > 13) {
    console.log("8 is greater")
} else {
    console.log("8 is not greater")
}

// Boolean Example with variable
var x = 10;
if (8 > x) {
    console.log("8 is greater than x!")
} else if (15 > x) {
    console.log("15 is greater!")
} else {
    console.log("8 is not greater than x!")
}


//Boolean Example with function
// Example WAP wheather number is odd or even
var check = function(number) {
    if (number % 2 == 0) {
        console.log(number + " is even!");
    } else {
        console.log(number + " is odd.")
    }
}
check(2235);

// Conditional Statements with SWITCH
var x = 33

switch(x) {
    case 1:
        console.log("The number is one!")
        break
    case 2:
        console.log("The number is two")
        break
    case 3:
        console.log("The number is three")
        break
    default:  //If doesnt match to any case will execute default case
        console.log("The number is " + x)
}

//FOR LOOP
for (var i=0; i<5; i = i +1) {  
    console.log(i);
}

//FOR LOOP with Variables
var names = ["yaya","kalau","lolo toure","pikpok toure"];
for ( var i = 0; i<names.length; i++ ) {
    console.log(names[i]);
}


// While LOOP
var surnames = ["Gautam","chapagain","Pokharel","Pandeyyyyyy"]
var i = 0;
while (i < surnames.length) {
    console.log(surnames[i])
    i++
}

// Do While == execute atleast once before checking conditions

var surnames = ["Gautam","chapagain","Pokharel","Pandeyyyyyy"]
var i = 0;
do {
    console.log(surnames[i])
    i++
} while (i < surnames.length)

