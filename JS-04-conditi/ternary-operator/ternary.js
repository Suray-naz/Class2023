// ! ****** TERNARY OPERATOR *********



// let age=21;
// age >=18 ? (console.log("You can vote")) : (console.log("You cannot vote"));


 // tek sayi - cift sayi
// let number=69;
// number % 2 ? (document.write("Tek sayi girdiniz")) : (document.write("Cift sayi girdiniz"))

// let message = number %2 ? ("Tek sayi girdiniz") : ("Cift sayi girdiniz")
// console.log(message);



// girilen sifre 12345! kontrol eden tenary yapi

// let password=prompt("Please enter your password")
// let check= password === "12345!" ? ("You are allowed to sign in") : ("Your password is invalid")
// console.log(check);


// girilen deger pozitif mi negatif mi oldugunu bulan program

// let number=+prompt("Please enter any number")
// let result=number >=0? (number ===0 ? "number neutral" : "number positive") : ("number negative")
// console.log(result);



let number1=4
let number2=9
let operator= prompt("enter the operator")

let result1= operator ==="+" ? number1+number2 : number1-number2;
console.log(result1);