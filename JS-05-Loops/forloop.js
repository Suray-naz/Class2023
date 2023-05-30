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

console.clear();


// ! ***** WHILE LOOP ******

// For loop ile benzer şekilde sadece syntax farklılığı vardır.Birbirini yerine kullanılabilir

// genelde daha komplex bir şart durumu varsa o zaman kullanmak avantajlı olabilir

// while(Koşul) {
//      çalıştırılacak kodlar
//   }

// 1den 10a kadar olan sayilari yazdiran program

let i=0;

while (i<=10){
    console.log(i);
    i++
}



// ?100 ile 200 arasinda bir sayi girildigi müddetce islem devam ettiren program

// let number=100;
// while(number>=100 && number<=200){
//     prompt("Please enter the number btw 100-200:")
// }
// console.log("The number must be btw 100.200!");


//?Kullanicidan 1-100 arasinda not girmesini isteyen 
// Farkli bir deger girerse 1-100 arasina not girene kadar zorlayan program

// let not=1;
// while(not>0 || not>100){
//     not=+prompt("1 ile 100 arasinda bir not giriniz:")
//     break;
// }


let x=1;
while(x<20){
    console.log(x);
    x++
    if(x>8) break;
}

console.clear();



// ! ****** DO - WHILE *********
// kontrol sonda yapıldığı için, en az bir defa işlem gerçekleşir.

// do {
//      çalıştırılacak kodlar
//   }
//   while(Koşul);


//? Kullanıcıdan vize ve final notlarını isteyen ve vizenin %40 ını finalin %60 ını alarak 
//? notunu hesaplayan her işlem bittiğinde devam etmek isteyip istemediğini soran program

let isContinue=""
let Avg;

do{
    const vize=+prompt("Vize notunu giriniz:");
    const final=+prompt("Final notunu giriniz:")
    Avg=vize*0.4 + final*0.6;  //vize * 40) / 100 + (final * 60) / 100;
    console.log(Avg);
    isContinue=prompt("Do you want to continue? (y/Y):")

} while(isContinue==="y" || isContinue==="Y")