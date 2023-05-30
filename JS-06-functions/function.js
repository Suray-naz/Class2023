/* -------------------------------------------------------------------------- */
/*                     //!  ********** FUNCTIONS *********                    */
/* -------------------------------------------------------------------------- */
//? Bir fonksiyon belirli bir görevi(tek bir görev için tek fonksiyon olması daha iyidir) gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir,
//? test etmesi kolaydır

//! * ----------------------------Declaration---------------------------------- */ 
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonsiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.


// !Deger göndermeden bütün islemleri fonksiyon icinde yapip bitirdigimiz fonksiyon

function topla(){
let sum=5+7
console.log(sum);
}
topla();


//! Geriye return ile değer gönderen fonksiyon

//   function biradver(){
//      yapılacak işlemler
// ?  return ile oluşturlan sonucu geri gönder
//   }

function carp(){
    let mult=69*56
    return mult;
}
console.log(carp());



function cikart(){
    let sub=69-56
    return sub
}

let result=carp() + cikart()
console.log(`69 ve 56 sayilarinin ve farklarinin toplami: ${result}`);

// Fonksiyonu bir defa yazıp defalarca kullanmak için  parametre alırlar
// Eğer bir fonksiyon parametre alıyorsa , o aldığı parametre,değeriyle ve  özellikleriyle gelir.

// function toplam(num1, num2){
//     console.log(`1.sayi: ${num1} 2.sayi: ${}`);
//     let sum=num1+num2
// }


//?   function fonksiyonadi(parametre1,parametre2, ...){   Parametre yada argüman denir
//      yapılacak işlemler
//   return ile oluşturlan sonucu geri gönder
//   


// Ad ve soyadi birlestiren program
function fullname(name, lastname){
    let fullname=name+" "+lastname
    return fullname
}
console.log(fullname("Suray", "Nazarova"));



function fullname(name="...", lastname="..."){
    let fullname=name+" "+lastname
    return fullname
}
console.log(fullname("Suray"));



function fullname(name, lastname){
    return `${name} ${lastname}`
}
console.log(fullname("Azat", "Meredov"));



//Gönderilen isimleri 5 defa yazdiran program
function isim(name){
    for(let i=1; i<=5; i++) console.log(name);
}
isim("Suray")



function findPower(num1, num2){
    return num1**num2
}console.log(findPower(5,6));



//? Kullanıcıdan alınan doğum tarihine göre yaş hesaplayan fonksiyon
// let year=new Date()
// let now=year.getFullYear()

// let birthyear=+prompt("Enter your birth day");
// function resultt(birthyear){
//     return now-birthyear
// }
// console.log(resultt(birthyear));


//*DrawRectangle(number of sign, how many line)
//*DrawRectangle(4,3)

// ****
// ****
// ****


//? Bir oyunda 4 seviye var VE (Very Easy) , ME ( Medium) , HR(Hard), EX(Expert)

// VE ="10%"
// ME="20%"
// HR="30%"
// EX="50%"
// Puanlama = > seviyesine göre aldığı puana göre % hesaplanıp puanına ekleniyor.

//* Kullanıcıdan isim ,seviye  ve puan alarak toplam puanını veren program

// FindScore("Muhittin","ME", puan)

// Muhittinin aldığı toplam puan 150

function oyun(ad,seviye,puan){

    if (seviye=="VE"){
       puan +=puan*0.1;
    }
    else if (seviye=="ME"){
        puan +=puan*0.2;
     }
     else if (seviye=="HR"){
        puan +=puan*0.3;
     }
     else if (seviye=="EX"){
        puan +=puan*0.5;
     }
        return `Adi: ${ad}, Seviye: ${seviye}, Puani: ${puan}`
}

console.log(oyun("Ali","ME",20));