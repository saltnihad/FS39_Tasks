// Task 01

//#region 

// function switchLetters(word="") {
//     let changedLetter = "";
  
//     for (let i = 0; i < word.length; i++) {
//       const letters = word[i];
//       switch (letters) {
//         case "A":
//           changedLetter += "T";
//           break;
//         case "T":
//           changedLetter += "A";
//           break;
//         case "C":
//           changedLetter += "G";
//           break;
//         case "G":
//           changedLetter += "C";
//           break;
//         default:
//           changedLetter += " "; 
//       }
//     }
  
//     return changedLetter;
//   }
  
//#endregion   console.log(switchLetters("ATGC"));

// Task 02

//#region
// function replaceWithChar(text="", char="") {
//    return char.repeat(text.length);
//   }
  
//   const result = replaceWithChar("abc", "z");
//   console.log(result); 

  //#endregion

  // Task 03
  
  //#region

//   function textToNumber(text="") {
//     let digits = "";
  
//     for (let i = 0; i < text.length; i++) {
//       const char = text[i];
//       if (char >= '0' && char <= '9') {
//         digits += char;
//       }
//     }
  
//     return +digits;
//   }
  
//   console.log(textToNumber("hell5 w9r1d"));
  
  //#endregion

  // Task 04

  //#region

//   function removeSymbol(text="") {
//     let result = "";
    
//     for (let i = 0; i < text.length; i++) {
//       if (text[i] !== "!") { 
//         result += text[i];
//       }
//     }
  
//     return result + "!";
//   }

//   console.log(removeSymbol("Hi ! Hi !! Hi"));

  //#endregion

  // Task 05

  //#region

//   function removeNumbers(text="") {
//     let result=""

//     for(let i = 0; i < text.length;  i++) {
//         const char = text[i];
//         if (char < '0' || char > '9') {
//             result += char;
//           }
//         }
//     return result;
//   }

//   console.log(removeNumbers("Hello129!!"));

  //#endregion
  