
// function islem(par1,par2){
//     console.log(par1);
//     console.log(par2);
// }
// islem(5,9)


const calF=(C) => {
    let temp=(C*9/5 + 32);
    return  temp
}
console.log(calF("36"));




// !2

// const string="Hello World";
// function reverseString (str){
//     let newStr=""
//     for(let i= str.length -1; i>=0; i--){
//         newStr += str[i]
//     }
//     return newStr
// }
     
// console.log(reverseString(string));



// !3

const string1="selles";
function reverseString (str){
    let newStr=""
    for(let i= str.length -1; i>=0; i--){
        newStr += str[i]
        console.log(newStr);
    }
    return newStr === str 
}
     
console.log(reverseString(string1));



// !4

function sumOfDivisors(num){
    let sum=0
    for(let i=0; i<=num; i++){

    }
}



// !5

function circleVal(rad){
    return `Perimeter: ${2*Math.PI * rad}, Area:${Math.PI*rad}`
}

    console.log(circleVal(43));


// !6 Entered number prime or not?

function isPrime(num) {
    if(num<2) return false;

    for(let i=2; i<num; i++){
        if (num % i===0) return false;
    }
    return true
}
console.log(isPrime(13));



// !7 ilk 2 sayiyi carpip, 3.sayinin üssüne alan program

function sum(val1,val2,power){
    var result = Math.pow(val1*val2, power)
    console.log(result);
}

sum(3,3,2)



// !8 bir sayiyi tersten cevirecek bir fonksiyon

function reverseNum(num){
    var reverse =0;

    while(num!==0){

        reverse= reverse *10
        reverse=reverse + (num % 10)
        console.log("reverse", reverse);

        num = Math.trunc(num/10);  // , den sonraki kisimlari kaldir
        console.log("num", num);
    }
    return reverse
}
console.log("reverse number:",reverseNum(123));

console.clear()


// !9  9-100-1000 palindrome olanlari yazdir





// !10 perfect number bulma programi



//!11

function tellFortune(jobTitle, partner, location, numKids) {
    var future = "You will be a " +jobTitle +" in " +location +", and married to " +partner +", will have " +numKids +" kids."
    return(future);
  }
  console.log(tellFortune(  "graphic designer", "Ahmet", "Berlin", "2"));
  console.log(tellFortune("developer", "Anna", "Paris", "3"));
  console.log(tellFortune("teacher", "John", "Tempe", "1"));
  console.log(tellFortune("lawyer", "Lena", "Munich", "2"));
