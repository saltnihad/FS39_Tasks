/* Task 1 



function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

*/

/* Task 2

function findMax(a, b) {
 let max = a;
 if (max < b) {
     max = b;
 } else {
     max = a;
 } return max;
}

console.log(findMax(25, 35)); */

/* Task 3

function power(base, exponent) {
    return base**exponent;
}

console.log(power(2, 3)); */

/* Task 6

function sumUpTo(n) {
    if (n === 0) {
        return 0;
    }else {
        return n + sumUpTo(n-1);
    }
} 

console.log(sumUpTo(5)); */

/* Task 7

function celsiusToFahrenheit(celsius) {
  let Fahrenheit = celsius * (9 / 5) + 32;

  return Fahrenheit;
}

console.log(celsiusToFahrenheit(100));

*/