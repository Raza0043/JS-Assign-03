// Question no # 01

// var city=prompt("what is your's favourite city in pakistan?")
// console.log("City: " + city)

// if(city==="karachi")
// {
// document.write("Welcome to the city of lights")

// }
// else{

// document.write("invalid input")

// }

// Question no # 02

// var grnd=prompt("what is your gender")
// console.log("gender")
// if(grnd==="male"){

// document.write("Good Morning sir!!!\n Have a nice day sir")

// }
// else if(grnd==="female")
// {

//     document.write("Good Morning Madam")

// }
// else{

//     document.write("select one of given option")
// }

// Question no # 03

// var lights = prompt("Read traffic lights:");

// if (lights === "Red") {
//   document.write("You must Stop!!!!");
// } else if (lights === "Yellow") {
//   document.write("Ready to move");
// } else if (lights === "Green") {
//   document.write("Go");
// } else {
//   document.write("Invalid input");
// }

// Question no # 04

// var fuel=prompt("Measuring Fuel")
// if(fuel==="1 litres")
// {
//     document.write("You have 1 litres fuel in tank")

// }
// else if(fuel==="0.500 litres")
// {
//     document.write("You have 0.500 litres fuel")

// }
// else if(fuel<"0.25 litres")
// {
// document.write("Please refill the fuel in car")

// }

// Question no # 05

// a.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b.
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// not alert msg

// c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// Option 2 is true

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// the cost are equal
// e.
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
// Ans:True

// f.
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
//     Ans:car is smaller than cat

// Question no# 06

// var sub1 = prompt("Enter Marks of Subject 1");
// var sub2 = prompt("Enter Marks of Subject 2");
// var sub3 = prompt("Enter Marks of Subject 3");
// var total_marks = 300;
// var obt_marks = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
// var percent = (obt_marks / 300) * 100;

// var grade;
// var remarks;
// if (percent >= 80) {
//   grade = "A+";
//   remarks = "Excellent";
// } else if (percent >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percent >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else {
//   grade = "Fail";
//   remarks = "Sorry";
// }

// document.write("Total Marks" + ": " + total_marks + "<br><br>");
// document.write("Marks Obtanied" + " :" + obt_marks + "<br><br>");
// document.write("Percentage%" + ": " + percent + "<br><br>");
// document.write("Grade" + ": " + grade + "<br><br>");
// document.write("Remarks" + ": " + remarks + "<br>");

// Question no# 07

// var sec_Number = 7;
// var userGuess = prompt("Guess the secret number (between 1 and 10):");
// userGuess = parseInt(userGuess);
// if (userGuess === sec_Number)
//      {
//     document.write("Bingo! Correct answer.");
// }
//  else if (userGuess + 1 === sec_Number || userGuess - 1 === sec_Number)
//      {
//     document.write("Close enough to the correct answer.");
// }
//  else
//  {
//     document.write("Sorry, wrong guess. Try again!");
// }

// Question no# 08

// var user =3;
// var input=prompt("Enter no. to check :")
// var check =parseInt(input) % user;
// document.write("The number is " + check  + "<br>")
// if(check===0)
// {
//     document.write("The number is divible by 3")
// }
// else
// {
// document.write("This number is not divisble by 3")
// }

// Question no# 09

// var check = 2 ;
// var input=prompt("Enter no. to check :")
// var calcu =parseInt(input) % check;
// document.write("The Result is "+" " + calcu  +"<br>" )

// if(calcu===0)
// {
//     document.write("The given no. is Even")

// }
// else{
// document.write("The given no is Odd")

// }

// Question no# 010

// var temp = prompt("Enter value for checking temperture:");
// document.write("The temperature is " + temp + "<br>");

// if (temp > 40) {
//   document.write("It's is too hot outside.");
// } else if (temp > 30) {
//   document.write(" “The Weather today is Normal.” ");
// } else if (temp > 20) {
//   document.write(" “Today’s Weather is cool.”  ");
// } else if (temp <=10) {
//   document.write(" “OMG! Today’s weather is so Cool.”  ");
// }
// else{
//     document.write|("Muhje Andy wala burger")
// }

// Question no# 011

// var f_number = parseFloat(prompt("Enter first number:"));


// var s_number = parseFloat(prompt("Enter second number:"));


// var opt = prompt("Enter the operation you want to perform (+, -, *, /, %):");


// var result;

// if (opt === "+") {
//     result = f_number + s_number;
//     document.write("Result: " + f_number + " + " + s_number + " = " + result);
// } else if (opt === "-") {
//     result = f_number - s_number;
//     document.write("Result: " + f_number + " - " + s_number + " = " + result);
// } else if (opt === "*") {
//     result = f_number * s_number;
//     document.write("Result: " + f_number + " * " + s_number + " = " + result);
// } else if (opt === "/") {
//     if (s_number !== 0) {
//         result = f_number / s_number;
//         document.write("Result: " + f_number + " / " + s_number + " = " + result);
//     } else {
//         document.write("Error: Division by zero is not allowed.");
//     }
// } else if (opt === "%") {
//     result = f_number % s_number;
//     document.write("Result: " + f_number + " % " + s_number + " = " + result);
// } else {
//     document.write("Error: Invalid operation entered.");
// }




