// !! ****** IF -  ELSE IF - ELSE *********

// Programlama dillerinde kodlar yukarıdan aşağıya çalışır.Bu yapıyı bozan bazı durumlar vardır. Bunlardan biri karar yapılarıdır.

/*
if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

// yas 18 den büyükse oy kullanmasina izin veren program


// let yas=+prompt("yasinizi girin:")

// if (yas > 18) {
//     // Sartin dogru oldugunda calisacagi kisim
//     console.log("Oy kullanabilirsin!");
// }
// else {
//     console.log("oy kullanamazsin");
// }


// let number=+prompt("Bir sayi giriniz:");
// if(number %2 === 0){
//     console.log("Girdiginiz sayi cifttir");
// }
// else{
//     console.log("Girdiginiz sayi tektir");
// }


// ?Elektrik sinyali geliyor yada gelmiyor; bu duruma göre lamba yanar, lamba yanmaz kod blogunu olusturun

let text="var"
if (text === "var") {
    console.log("lamba yanar");
}
else{
    console.log("lamba yanmaz");
}


// ! ****** IF - ELSE IF -ELSE ******
// Bir den fazla karar durumu varsa else if de kullanılır.
// her else if kısmına da şart durumu yazmalıyız.

/* if ( şart1 )
{ 
    şart1 durumu doğru ise bu blok çalıştırılır
} 

else if (şart2 ){
    şart1 durumu doğru değil şart2 durumu doğru ise bu blok çalıştırılır
}

else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/


// 20-44: your grade ir not enough to pass the class
// 45-69: your grade ir enough to pass the class but not successful
// 70-100: Passed the class successfully
// else: don't ask if I passed or not. Please work hard

// let grade=+prompt("Please enter your grade");   
// if(grade>=20 && grade<45){
//     document.write("Your grade ir not enough to pass the class")
// }
// else if(grade >=45 && grade<70){
//     document.write("Your grade ir enough to pass the class but not successful")
// }
// else if(grade>=70 && grade<=100){
//     document.write("Passed the class successfully")
// }
// else if(grade>100 || grade<20){
//     document.write("Enter a value between 20-100")
// }
// else{
//     document.write("Please enter a number!")
// }
// console.log("End session");

//if-grade<=44  //else if-grade<=69 yazilabilir! 


// !--------------------------------------------------------------------

// 0-500: 50€
// 500-1000: 100€
// 1000+: 500€

// let distance=+prompt("Please enter the distance")
// if(distance>=1000){
//     document.write("Your fee: x 500€:", distance *500)
// }
// else if(distance>500 && distance<1000){
//     document.write("Your fee: x 100€:", distance *100)
// }
// else{
//     document.write("Your fee: x 50€:", distance *50)
// }


// !----------------------------------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar