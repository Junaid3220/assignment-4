// Question No 1:

// let password = ["Muhammad", "Junaid"];
// let gasePassword = prompt("Enter Your Passoword");

// let flag = false;

// for (let i = 0; i < password.length; i++) {
//   if (password[i] === gasePassword) {
//     flag = true;
//   }  
// } 


// if (flag){
//   alert ("Correct!");
// } else if (gasePassword){
//   alert ("Incorrect Password");
// } else {
//   alert("Please Enter Your Password");
// }


// Question No 2:

// let greeting;
// let hour = 13;
// if (hour < 18){
//   alert(greeting = "Good Day");
// } else {
//   alert(greeting = "Good Evening");
// }



// Question No 3:

// Empty array using javascript literal notification 
// let literalNotification = [];
// Empty array using javascript object notification 
// let objectNotification = [];
// string array
// let stringArray = ["Apple" , "Banana" , "cherry"];
// number string
// let numberString = [1,2,3,4,5,6];
// boolean array
// let booleanArray = [true , false, true];
// mixed array 
// let mixedArray = ["Apple" , 1 , true , null];
// array of education qualification in pakistan 
// let educationQualifications = ["ssc" , "hsc" , "bsc" , "bs" , "bcom" , "ms" , "m.phil" , "phd"];



// Question No 4

//Initialize an array with color names. 
// let color = ["Red","Blue"," Orange"," Black"," White"];

//Ask the user what color he/she wants to add to the beginning.
// color.unshift(prompt("Add beginning Color"));

//Ask the user what color he/she wants to add to the end.  
// color.push(prompt("Add to the End Color"));

//Add to more color to the beginning of the array.
// color.unshift("Brown","Gray");

//Delete the first color in the erray.
// color.splice(0,1);

//Delete the last color in the array.
// color.pop();

//Ask the user at which index he/she wants to add a color.
// color.splice(prompt("Enter index"),0,prompt("Enter color"));

//Ask the user at which index he/she wants to delete a color.
// color.splice(prompt("Enter which index to delete "),prompt("Enter how many color deleted"));

// document.write(color);



// Question No 5

//Write a program to store student scores in an array & sort the array.
//let scores = [94,32,54,64,44,88,55,77];

//array sort method.
//scores.sort();

//output on console
//console.log(scores);



//Question No 6.

//Write a program to store phone manufacturers.
//let company = ["Samsung"," Oppo"," Nokia"," Apple",' Motorola',' Haier',' Sony'];

//dropdown meny using document.write 
//document.write("<select>");

//for(let i=0; i < company.length; i++){
//document.write("<option>" +  company[i]  +  "</option>)");
//}

//document.write("</select>");



//Question No 7.

//Table Number and length should be taken from user.
//  let num = prompt("Enter any number");
//  let table = prompt("Enter Table length");

//Multiplication table of any number using for loop.
// for(let i=1; i <= table; i++){
//     document.write(`${num} x ${i} = \t ${num * i} <br>`);
// } 



//Question No 8.

//Generate the following series in browser.

// a counting 1 to 15.

// document.write(`Counting:\n`);
// for (let i=1; i <=15; i++){
//     document.write(`${i} \n `);
// }


// b reverse counting 10 to 1

// document.write(`Reverse Counting:\n`);
// for (let i=10; i>=1; i--){
//  document.write(`${i} \n `);
// }

// c even number 0 to 20 

// document.write(`Even Number:\n`);
// for (let i=1; i<=20; i++){
//     if(i % 2 === 0){
// document.write(`${i} \n `);
//     }
// }

// d odd number 1 to 19

// document.write(`Odd Number:\n`);
// for (let i=0; i<=20; i++){
//     if (i % 2 === 1){
//         document.write(`${i} \n `);
//     }
// }

// e series 2k to 20k

// document.write(`Series:\n`);
// for (let i=1; i<=20; i++){
//     if(i % 2 === 0){
//         document.write(`${i}k \n`);
//     }
// }



// Question No 9

// let a = ["cake" , "apple" , "pie" , "cookie" , "chips" , "patties"];
// let userIn = prompt("Enter String");
// let flag = false;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === userIn  ) {
//     flag = true;
//   }
// }

// if (flag) {
//   console.log("Found");
// } else {
//   console.log("Not Found");
// }



// Question No 10 

// user input in string 
// let myMsg = prompt ('Enter string convert into titlecase');
// function titleCase(msg){    
//     return msg.split(' ').map(word =>  word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');;
// }
// console.log(titleCase(myMsg));



 // Question No 11 

 // User input in small letter
//  let inp = prompt("Enter string value");
//  console.log(inp.toUpperCase());



// Question No 12

//  let num = "472";
 //display the value
//  document.write("value of  ", num);
//  document.write("<br>");
 //type of the number
//  document.write("type of ", typeof(num));


