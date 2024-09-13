// Chap 9
// Qno 1
var city = prompt("City");

if (city === "karachi") {
  alert("Welcome to city of lights");

}
 else {
  alert("welcome you live in " + city);
}

// Qno 2
var gender = prompt("gender")

if(gender === "Male"){
    alert("Good Morning Sir")
}
if(gender === "Female"){
    alert("Good Morning Ma;am")
}

// Qno 3
// var signal = prompt("Color of road traffic")
if(signal ==="red"){
    alert("Must stop")
}
if(signal ==="yellow"){
    alert("Ready to move")
}
if(signal ==="green"){
    alert("Move now")
}
else{
    alert("incorrect")
}

// Qno 4
var fuel = +prompt("Enter the remaining fuel in your car (in litres):")

if(fuel < 0.25){
    alert("Please refill the fuel in your car")
}

// Qno 5
part(a)
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// Record of Output
// given condition for variable a is true

// part(b)
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// Record of Output
// There will be no alert message, so nothing will be shown.

// part(c)
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
// Record of Output
// "condition 2 is true"
// "condition 4 is true"

// part(d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// Record of Output
// given condition  is true

// part(e)
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
// Record of Output
// given condition  is true

// part(f)
if("car" < "cat"){
    alert("car is smaller than cat");
    }
// Record of Output
// given condition  is true

// Qno 6
var percentage = +prompt("Enter your percentage");

if(percentage >= 80){
    alert("Excellent")
    document.write("A-one")
}
else if (percentage >= 70){
    alert("Good")
    document.write("A")
}
else if (percentage >=60){
    alert("You need to improve")
    document.write("B")
}
else if (percentage <= 60){
    alert("Sorry")
    document.write("Fail")
}

// Qno 7
var secretnumber = 1;
var guessnumber = +prompt("Guess the secret number")

if(guessnumber > 10){
    alert ("please enter a valid number between 1 and 10")
}
 else if (secretnumber === guessnumber){
    alert("Bingo ! Correct answer")
 }
 else if (guessnumber === 2){
    alert("Close enough to the correct answer")
 }

// Qno 8
var num = 3;
var num1 = +prompt("enter a number")

if(num % num1)(
    alert(num + " " +"is" + " " + "divisible by" + " " + num1) 
)

// Qno 9
var num1 ;
num1 = +prompt("Enter any number")

if(num1 % 2 == 0){
    alert("this is an even number")
}
else{
    alert("this is a odd number")
}

// Qno 10
var t = +prompt("Show the weather temperature")
if(t > 40){
    alert("It is too hot outside")
}
 else if(t > 30){
    alert("The weather today is normal")
}
else if (t > 20){
    alert("Today's weather is so cool")
}
else if (t > 10){
    alert("OMG ! Today's weather is so cool")
}

// Qno 11
var operator = prompt("Enter the operator to perform the calculation (either +,-,*,/)");
var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");

var res;
if(operator== "+"){
    alert(res = + num1 + num2)
}
else if(operator== "-"){
    alert(res = + num1 - num2)
}
 else if(operator== "*"){
    alert(res = + num1 * num2)
}
else if(operator== "/"){
    alert(res = + num1 / num2)
}









  

