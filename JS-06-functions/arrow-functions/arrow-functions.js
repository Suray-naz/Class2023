


function selamla(ad){
    console.log(`Selam ${ad}`);

}
selamla("Fatma")


// ? Return keyword ile

function Selamlar(ad){
    return `Selam ${ad}`
}
let x=Selamlar("Emine")
console.log(x);
console.log(`${x} nasilsin?`);



// ********************************************************************************
// ? Expression Function

const SayHello=function(ad){
    return `Merhaba ${ad}`
}
let greeting=SayHello("Ahmet")
console.log(greeting);


// ********************************************************************************
// ? Arrow => Function


const hello=(ad)=>{
    return `Salam ${ad}`
}
console.log(hello("Seyda"));
let a=hello("Ali")
console.log(`${a} nasilsin görüsmeyeli?`);



// Tek satirlik bir kodsa {} ve return gerekmez

const howAreYou=(ad)=> `Naber ${ad}`

let b=howAreYou("Helen")
console.log(b);
console.log(`${b} what are you doing?`);



// 2 sayinin toplami
const total=(a,b) => a+b;
console.log(total(9,4));



// 2 sayiyi böldüren
const div=(a,b) => a/b;
console.log(div(25,5));



// Silindir hacmini  bulduran program

// hacim = pi* r karesi * h
// hacim = pi * r * r * h

// const r=+prompt("Yaricap girin")
// const h=+prompt("Yükseklik girin")

// const volume=(r,h) => (Math.PI*r*r*h).toFixed(2);
// console.log(`Hacim ${volume(r,h)}`);

// ********************************************************************************



const sayi = (a,b,c) => (c>a && c<b) ? `${c} sayisi ${a} ile ${b} arasindadir` : `${c} sayisi ${a} ile ${b} arasinda degildir`

console.log(sayi(2,10,3));


const sirala = (a, b, c) =>
  b > a && b < c ? `${b} ortanca sayidir` : `${b} ortanca sayi degildir`;
console.log(sirala(5, 9, 70));



const InBoundary=(min, max, val) =>{
if (val>min && val<max) return true;
else return false
}
console.log(InBoundary(5,8,6));


// ------------------------------------------------------------------------------------

const IsBoundary=(min, max, val) => (val>min && val<max) ? `${val} degeri girilen iki sayinin arasindadir` : `${val} degeri girilen iki sayi arasinda degildir`

console.log(IsBoundary(6,9,11));


// Saat ve dakikayi 7:46 seklinde yazdiran program

const d = new Date();
let hour = d.getHours();
let minute= d.getMinutes();

let time=(hour, minute) => `Current time: ${hour}:${minute}`;
console.log(time(hour,minute));


// ------------------------------------------------------------------------------------
// ! Rest Operatörü  ...
// Arrow functionda rest operatoru

const goster=(... numbers) => console.log(numbers);
goster(2,6,14,23,45,55,61,73,77,83,89,93)


/* -------------------------------------------------------------------------- */
//! function declaration ve expression functionda arguments olarak kullanılır
/* -------------------------------------------------------------------------- */

const argumentsGoster = function(){
    console.log(arguments);
}

argumentsGoster(3,4,7,89,45,34,23,56,78,90,34,43)


// Bir ülkenin adı ve kapladığı kara kütlesinin alan grildiğinde dünyanın kara kütlesinin alanına göre kapladığı yüzdeliği veren fonksiyon

// Rusya , 17098246  
// "USA", 9372610
// "Iran", 1648195

// Rusya Dünyanın %11.48 ini kaplamaktadır.

// Dünyanın kara kütlesi alanı 148.940.00



let earth=148940000;
let Russia=17098246; 
let Iran=1648195;
let USA=9372610
const per=(earth, country) => ((country*100) / 148940000).toFixed(2);

console.log(per("Russia", 17098246));
console.log(per("USA", 9372610));
console.log(per("Iran", 1648195));



let fac=(number) =>{
    let result=1;
    for (i=1; i<=number; i++){
        result*=i
    }
     return result;
}
 console.log(`Faktöryel sonucu:" ${fac(6)}`);



console.clear()





let date=new Date()
let day=getDay()
// console.log(`${date}`);
let dayName;

switch (day){
     case 0:
         day="Pazar"
        break;

     case 1:
         day="Pazartesi"

     case 2:
         day="Sali"


     case 3:
         day="Sema bu gün Carsamba, okul var. 7:00de kalkman lazim"


    case 4:
         day="Sema bu gün Persembe, okul var. 7:00de kalkman lazim"


     case 5:
         day="Sema bu gün Cuma, okul var. 7:00de kalkman lazim"


     case 6:
        day="Sema bu gün Cumartesi, okul var. 10`a kadar uyuyabilirsin" 
}
