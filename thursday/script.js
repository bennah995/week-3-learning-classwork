// a function that checks whether a number is divisible by 7
function div7() {  
  if (number % 7 === 0){
    console.log(`${number} is divisible by 7`);
  }
  else {
    console.log(`${number} is not divisible by 7`);
  }
}

// let number = Number(prompt("Entaer a number: "));
// div7();



// a function that takes in a list of student scores as a parameter and returns score as a parameter

// function scoremax(scores) {

//   let max = scores[0]
//   for (let scoreLoop = 0; scoreLoop < scores.length; scoreLoop++){
//     if (scores[scoreLoop] > max){
//       max = scores[scoreLoop];
//     }

//     if (scores.length === 0){
//       return null;
//     }
//   }

//   return max;
// }

// let scores= [78, 98, 91, 66];
// let highest = scoremax(scores);

// console.log(highest);

// arrow function
// const sum = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(sum(23, 90));

const scoremax = (scores) => {
  let max = scores[0];
  for (let scoreLoop = 0; scoreLoop < scores.length; scoreLoop++){
    if (scores[scoreLoop] > max){
      max = scores[scoreLoop];
    }
  }
  return max;
}

  console.log(scoremax([78, 91, 95]));
