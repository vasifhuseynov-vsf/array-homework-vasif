// *** S T A R    P Y R A M I D ***


// let num = prompt('Enter a number');

// let str = "";


// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num - i; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//         str += "*";
//     }
//     str += "\n";
// }

// console.log(str);


// **********************************************************************************



// *** A R R A Y   M E T H O D ***


// let arr = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];

// arr.forEach(e => console.log(e));  // array'in elementlerini cap etmek

// ------------------------------------------------------------

// let max = arr[0]; // array'deki en boyuk reqemi cap etmek

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max);

// ----------------------------------------------------------------------------------

// arr.push(15); // array'in sonuna reqem elave etmek

// ----------------------------------------------------------------------------------

// arr.shift(); // array'in ilk elementini silmek

// ----------------------------------------------------------------------------------

// arr.sort((a, b) => a - b); // array'i sort etmek

// console.log(arr[arr.length - 1]); // ve sonuncu elementini cap etmek

// ----------------------------------------------------------------------------------

// arr.splice(3, 0, 43); // array'in 3'cu elementinden sonra 43 reqemini elave etmek

// ----------------------------------------------------------------------------------

// arr.slice(3).forEach(e => console.log(e)); // array'in 3'cu elementinden sonraki elementleri cap etmek

// ----------------------------------------------------------------------------------

// arr.forEach(e => console.log(e)); // forEach istifade ederek array'in butun elementlerini cap etmek

// ----------------------------------------------------------------------------------

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 40) {
//         console.log(arr[i]); // array'in 40'dan boyuk elementlerini cap etmek
//     }
// }

// **********************************************************************************



// *** FUNCTION THAT RETURNS AN ARRAY CONTAINING ALL THE CONSECUTIVE NUMBERS IN ASCENDANT ORDER ***


// function getSequence(a, b) {
//     let arr = [];

//     for (let i = a; i <= b; i++) {
//         arr.push(i);
//     }

//     arr.forEach(e => console.log(e));
// }

// getSequence(5, 7);


// **********************************************************************************


// *** PROGRAM TO COMPUTE THE SUM OF THE TWO GIVEN INTEGERS ***


// function computeSum(a, b) {
//     if (a == b) {
//         return (a + b) * 3;
//     } else {
//         return a + b;
//     }
// }


// **********************************************************************************