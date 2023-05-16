// ! ******** FOR - LOOP *********

// Karar durumları gibi döngülerde günlük hayatta çok karşımıza çıkan yapılardır.
//Tekrarlı olan işlerde farklı türlerde döngülerden birini kullanabiliriz


// ? FOR - LOOP
// ? for (initialization, final (condition), increment/decrement){

//?}

// 1 den 10a kadar olan sayilari yazdiran program

// for(let i=1; i<=10; i++){
//     console.log(i);
// }


// 10 dan baslayarak geriye dogru yazdiran program
// console.log("10den geriye dogru sayim");
// for(let i=10; i>=0; i++){
//     console.log(i);
// }



//??1den 100e kadar olan sayilarin toplamini bulan program
console.log("****1den 100e kadar olan sayilarin toplami****");

// let sum=0;
// for(let i=1; i<=100; i++){
//     sum+=i;     //sum=sum+i
// }
// console.log(sum);



//?1den 100e kadar olan cift sayilari toplayan program
console.log("***1den 100e kadar olan cift sayilari toplama");

// let sum=0;
// for(let i=1; i<=100; i++){
//     i % 2 === 0? sum+=i: null;
     // if(i % 2 === 0){
     //     sum+=i;
    // }
// }
// console.log(sum);



// let factoriel=1;
// let num=+prompt("Enter the number")
// for(let i=1; i<=num, i++) {
//     factoriel*=i;
// }
// console.log(factoriel);


//? Armstrong number=> 1000e kadar olan sayilarin basamaklarini

console.log("**Armstrong Numbers**");
for (let i=0; i<=1000; i++){
    // 154

    let birler=i % 10;
    let onlar= Math.trunc(i/10) % 10;
    let yuzler= Math.trunc(i/100)

    let number=birler**3 + onlar**3 + yuzler**3
    number === i ? console.log(`${i} sayisi bir armstrong sayidir`) : null;
}


//? 1-10 arasinda rastgele secilen bir sayiyi kullanicinin bulmasini isteyen program
// let number=+prompt("Enter the number btw 1-10")



// Carpim tablosu yazan program

for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        console.log(`${i} x ${j}= ${i*j}`);
    }
}

console.clear();



//? Prime Numbers

// let counter=0
// let num=+prompt("Enter the number")
// for(let i=2; i<num; i++){
//     if (num %i ===0) {
//         counter++;
//     }
// }

// if (counter === 0) {
//     console.log(`${num} is a prime number`);

// }
// else{
//     console.log(`${num} is not a prime number`);
// }






for (let x=2; x<=100; x++){
    let counter=0

for(let i=2; i<x; i++){
    if (x %i ===0) {
        counter++;
    }
}

// if (counter === 0) {
//     console.log(`${x} is a prime number`);

// }
// else{
//     console.log(`${x} is not a prime number`);
// }
counter === 0 ? console.log(`${x} is a prime number`): null;
}

