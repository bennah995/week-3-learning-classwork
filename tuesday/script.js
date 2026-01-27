// Type Conversion/casting
// we convert user input from string to number
// All numbers can be converted to strings but not all strings can be converted too numbers

// conditional statements
// if...else if

// let mark = 15;

// if (mark >= 12) {
//   console.log("Above average");
// } else if (9 < mark < 12 ) {
//   console.log("You can do better");
// } else {
//   console.log("Yo have not met the requirements");
// };

// odd or even or otherwise checker
// let num = 4;
//  if(isNaN(num)) {
//   console.log("This is not a valid number");
//  } else if (num % 2 === 0 ){
//   console.log(`${num} is an even number`);
//  } else {
//   console.log(`${num} is an odd number`);
//  };

// if (number % 2 === 0 ){
//   console.log(`${number} is an even number`);
// } 
// else if ()




// A program that assigns grade based on a students score
// let mark = Number(prompt("Enter mark: "));

// if (mark >100 || mark<0){
//   console.log("Invalid score")
// }else if(mark >= 80 ) {
//   console.log("A");
// } else if (mark >= 70) {
//   console.log("B");
// } else if (mark >= 60){
//   console.log("C");
// } else if (mark >= 50){
//   console.log("D");
// } else if (mark < 50){
//   console.log ("E")
// } else {
//   console.log("Invalid mark! See Instructor ASAP!")
// };





let mark = Number(prompt("Enter mark: "));

if (score >= 0 && score < 50){
  console.log("E");
} else if (score >= 50 && score < 60){
  console.log("D");
} else if (score >= 60 && score < 70){
  console.log("C");
} else if (score >= 70 && score < 80){
  console.log("B");
} else if (score >= 80 && score < 100){
  console.log("A");
} else {
  console.log("Invalid score!");
}