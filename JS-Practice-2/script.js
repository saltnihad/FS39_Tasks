// function solution(str = "", ending = "") {
//     return str.endsWith(ending);
//   }

// console.log(solution("abc", "bc"));
// console.log(solution("abc", "d"));

// function solve(str="") {
//     let upperLetters = 0;
//     let lowerLetters = 0;

//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];

//       if (char >= 'A' && char <= 'Z') {
//         upperLetters++;
//       } else if (char >= 'a' && char <= 'z') {
//         lowerLetters++;
//       }
//     }

//     if (upperLetters > lowerLetters) {
//       return str.toUpperCase();
//     } else if (lowerLetters > upperLetters) {
//       return str.toLowerCase();
//     } else {
//       return str.toLowerCase();
//     }
//   }

//   console.log(solve("coDe"));
//   console.log(solve("CODe"));
//   console.log(solve("CoDe"));

// function mixStrings(str1 = "", str2 = "", letter = "") {
//   const sameLetter1 = str1.indexOf(letter);
//   const sameLetter2 = str2.indexOf(letter);

//   if (sameLetter1 === -1 || sameLetter2 === -1) {
//     return false;
//   } else {
//     return str1.slice(0, sameLetter1 + 1) + str2.slice(sameLetter2 + 1);
//   }
// }

// console.log(mixStrings("hello", "world", "l"));
// console.log(mixStrings("coding", "anywhere", "n"));

// function solve(a = "", b = "") {

//     let result = ""

//     for (let i = 0; i < a.length; i++) {

//         let char1 = a[i];

//         if (!b.includes(char1)) {
//             result += char1;
//         }
//     }
//     for (let i = 0; i < b.length; i++) {

//         let char2 = b[i];

//         if (!a.includes(char2)) {
//             result += char2;
//         }
//     }

//     return result;
// }

// console.log(solve("xyab", "xzca"))

