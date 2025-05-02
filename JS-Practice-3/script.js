//#region Task-1

// function sumOfSquares(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i] ** 2;
//   }

//   return sum;
// }

// let arr = [2, 3, 4];

// console.log(sumOfSquares(arr));

//#endregion

//#region Task-2

// function reverseWordsInText(text) {
//   let words = text.split(" ");

//   let reversedWords = words.map((word) => {
//     return word.split("").reverse().join("");
//   });

//   let reversedText = reversedWords.join(" ");

//   return reversedText;
// }

// let mainText = "Frontend development is fun";

// console.log(reverseWordsInText(mainText));

//#endregion

//#region Task-3

// let numbers = [1, 2, 3, 4, 5, 6, 7]

// let oddNumbers = []

// for (i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 !== 0){
//         oddNumbers.push(numbers[i])
//     }
// } console.log(oddNumbers)

//#endregion

//#region Task-4

// function sumAverage(numbers) {
//   let sum = 0;

//   for (i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return +(sum / numbers.length);
// }

// let array = [10, 20, 30, 40, 50];

// console.log(sumAverage(array));

//#endregion

//#region Task-5

// function dividedByFive(numbers) {
//   let chosenNumbers = [];

//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 5 === 0) {
//       chosenNumbers.push(numbers[i]);
//     }
//   }
//   return chosenNumbers;
// }

// let arr = [5, 12, 15, 23, 30, 44, 50];

// console.log(dividedByFive(arr));

//#endregion

//#region Task-6

// function sortWordsByLength(text) {
//   const words = text.split(" ");

//   const sortedWords = words.sort((a, b) => a.length - b.length);

//   return sortedWords.join(" ");
// }

// let string = "JavaScript is a powerful language";
// console.log(sortWordsByLength(string));

//#endregion

//#region Task-7

// function findSameNumber(numbersA, numbersB) {
//   let sameNumbers = [];

//   for (let i = 0; i < numbersA.length; i++) {
//     let a = numbersA[i];
//     for (let j = 0; j < numbersB.length; j++) {
//       let b = numbersB[j];
//       if (a === b && !sameNumbers.includes(a)) {
//         sameNumbers.push(a);
//       }
//     }
//   }

//   return sameNumbers;
// }

// let arrayA = [1, 2, 3, 4];
// let arrayB = [3, 4, 5, 6];

// console.log(findSameNumber(arrayA, arrayB));

//#endregion

//#region Task-8 

// function showLength(text) {

// let changedText = []

// for(i=0; i<text.length; i++){

// }

// }

//#endregion
