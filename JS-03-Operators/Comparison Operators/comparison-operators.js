// ! *********** COMPARISON OPERATORS ***************

let numOne=3
let numTwo="3"

console.log(numOne=numTwo);
console.log("numOne numTwo a denk midir?:", numOne==numTwo);  //true
// == icinde tuttugu degerleri kiyaslar

console.log("numOne numTwo ya esit midir?:", numOne===numTwo);  //false

let num3="five"
let num4=5

console.log(num3==num4);
console.log(num3===num4);

let lang1="Python"
let lang2="Python"

console.log(lang1==lang2);
console.log(lang1===lang2);


// ? ! (NOT) operatörü -- degil anlami
// ? !=denk degil

let x=5
let y="5"
console.log(x !=y); // false => hayir denktir
console.log(x !==y); //true => evet bunlar esit degil

5 > 4   //true
5 > 5   //false
5>= 5   //true

console.clear();
console.log(5 > 4);
console.log(5 > 5);
console.log(5>= 5);

console.log(10 < 5);
console.log(10 < 12);
console.log(10 <= 10);