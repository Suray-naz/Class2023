// ***************DATA TYPES*************


// !-----------------------------------------
// !PRIMITIVE DATA TYPES
// !-----------------------------------------

//  !**********NUMBER DATA TYPES************

// Number: Tamsayilar ve ondalikli sayilari tutar

const age=40;
const pi=3.14;

console.log(pi);
// alert("Bu alani bos gecmeyin")
document.write("Pi degeri", pi)
// console.error("Bu birhata mesajidir")

//? MATH objesi  matematiksel işlemler için gerekli metodlar barındırır.

let piDegeri=Math.PI
console.log(piDegeri);

const dec=7.67


console.log(Math.round(pi));

// en yakin kücük sayiya yuvarlar
console.log(Math.floor(dec));


// en yakin büyük sayiya yuvarlar
console.log(Math.ceil(dec));


// .toFixed() ile ondalikli kisimdan kac basamagi alinacagini belirtir
console.log(piDegeri.toFixed(2));

let x=10/3;
console.log(x.toFixed(2));

console.log(Math.max(2,5,9,-170,99));
console.log(Math.min(2,5,9,-170,99));


// Random metodu rastgele bir sayi üretmek icin kullanilir. 0-1arasinda bir rakam

console.log(Math.random().toFixed(3));
console.log(Math.random()*100);

let randomNumber=Math.random()*100;
console.log(randomNumber);
console.log(Math.random(randomNumber));

// farkli bir random number olusturmak
console.log(Math.round(Math.random()*19));


//Pow: Bir sayının kuvvetini almak için kullanılır. Sayı ve kuvvet olarak iki değer vermek gerekir.

console.log(Math.pow(5,9));

//sqrt : Square root (Karakök) Bir sayının karakökünü verir
console.log(Math.sqrt(114));

// console.clear();  


//  ! ******STRING DATA TYPE ********


let text="Javascript";
console.log(typeof text);

// Stringlerin her harfine ayri ayri bir dizi elelmani olarak ulasilabilir
// o elemanin 0dan baslayarak index numarasini vererek ulasabiliriz

console.log(text[7]);  // i harfine ulasilir


// stringler bu sekilde degistirilemez
text[0]="C"
console.log(text);

text=9
console.log(typeof text);

// Escape character tirnak kullanmak icin \'
// \t   tab - 8 karakter ileri atar
// \r	Satır başı (Carriage Return)
// \n	Bir alt satıra iner
// \v	Dikey Tab
// \f	Sayfa ilerleme
// \"	Çift tırnak
// \’	Tek tırnak
// \	Backslash

let text1='I learn JavaScript\' features'
console.log(text1);

let sentence="Seni 2 sey anlatir\n\ Hicbir sey yokken gösterdigin sabir\n\ Hersey varken sergiledigin tavir"

console.log(sentence);


// ?String birlestirme islemleri

let text2="Bu güzel günde JS ögrenmek "
let text3="Ne kadar güzel"

console.log(text2+text3);
console.log(text2+text3+" bir duygu");
let name="Suray"
let surname="Nazarova"
let job="developer"

console.log("Personelimiz "+name+" "+surname+". "+"Firmamizda "+job+" olarak calisiyor");


// 2 Concat metodu
console.log("Concat metodu ile birlestirildi: "+text2.concat(text3));

let text4="Hello World! "
let text5="How are you today?"

let text6=text4.concat(text5)

console.log(text6);
console.clear();

//! Template Literal - String Template - ES6

let newText=`Personelimiz ${name} ${surname}, firmamizda ${job} olarak calismaktadir.`

console.log(newText);
console.log(`Bu yaziyi template literal olmadan escape karakteri ile yazmam gerekirdi`);


// !metin bcimlendirme
document.write("<br/><b/><i/>"+newText)



// ! ****** BOOLEAN DATA TYPE ********

// True yada false degerlerini tutar
// Daha cok mantiksal karsilastirmalarda kullaniyoruz

let isOpen=true;
let isSignUp=false;
let isSmall=4<10

console.log(isSmall);

// Truthy values
// sayilar, karakterler, isaretler...

// Falsy value

// 0, -0, *0, Null(bos), Undefined, false, NaN


// ! ******UNDEFINED DATA TYPE *******
// Js de bir degiskenin türü ilk atanan degere göre belirleniyor. Ilk deger atamadiginda degisken undefined olarak tanimlanir

let val;
console.log(val);
console.log(typeof val);

// deger göndermeyen bir fonksiyon undefined dönebilir

function example (){
    let sum=65+32;
    //return sum
}
console.log(example());


// ! ****** NULL DATA TYPE *********
// bos bir degisken üretmek icin kullanilir

let empty=null;
console.log(empty);


// !-----------------------------------------------
// ! NONPRIMITIVE DATA TYPES - REFERENCE BASED
// !-----------------------------------------------

// !! ******** ARRAY ********
// Birden fazla deger tutabilen degiskenlere array (dizi) denir

let schoolNumber=792;  //primitive data type
let schoolNumbers=[282,85,355,435,505,792]
console.log(schoolNumbers[3]);


// ! ****** OBJECT ******

let obj={name:"Suray",surname:"Nazarova",age:"30"}
console.log(obj.surname);


// ! ****** FUNCTION ******
function example(){
    let sum=65+32;
    return sum;
}

console.log(example());

// !-----------------------------------------------
// ! TYPE CONVERSION
// !-----------------------------------------------

// ?AUTOMATICALLY TYPE CONVERSION
let val1=10;
let val2="30"

console.log(val1+val2);
console.log(val1-val2);
console.log(val1*val2);
console.log((val1/val2).toFixed(2));

// ?STRING TO NUMBER
//parseInt
//parseFloat

let newVal=parseInt(val2)
console.log(val1+newVal);

let decimalToString="7.643543"
console.log(typeof decimalToString);

let toFloat=parseFloat(decimalToString)
console.log(typeof toFloat);
console.log(parseInt(decimalToString));

console.log(Number(false));


// let yourage=prompt("Please enter your age");
// let yourage=Number(prompt("Please enter your age"));
// console.log(typeof yourage);

// ?NUMBER TO STRING
// String()
// str.toString()

let birthday=17
console.log(typeof birthday);

let newBirthday=String(birthday)
console.log(typeof newBirthday);

let newBirthdayToString=birthday.toString()  // string
console.log(typeof newBirthdayToString);




//!09-05-2023


// ?DATA OBJECT

const now=new Date()
console.log(now);

const year=now.getFullYear();
console.log(year);


const month=now.getMonth()
console.log(month);


const day=now.getDay()
console.log(day);


const hour=now.getHours()

const minute=now.getMinutes()
console.log(`${hour}:${minute}`);

//Kullanicinin dogdugu yili alip yas hesaplayan program
//let birthyear=+prompt("dogum yilinizi giriniz")

