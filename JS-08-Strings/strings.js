// ! STRING PROPERTIES AND METHODS

let course="Clarusway"

console.log(course.length);
console.log("Merhaba DE class".length);


// girilen bir stringi kendi karakter sayisi kadar yazdiran kod blogu

const string="Hello World" 
for (let i=1; i<=string.length; i++){
    console.log(string);
}




// girilen stringin son harfini bulma  == last character of a string?

console.log(course[course.length-1]);


const findLast=(text) => console.log(text[text.length-1]);
findLast("Strings")


/* ------------------------------------------------------------------------------------------*/
/*                          String yapisi ve indexleme
/* ------------------------------------------------------------------------------------------*/

// ?Stringlerin her bir karakterine [index numarasi] ile ulasilabilir

console.log(course[0]);
console.log(course[1]);
console.log(course[2]);
console.log(course[3]);
console.log(course[4]);
console.log(course[5]);
console.log(course[6]);
console.log(course[7]);
console.log(course[8]);
console.log(course[9]);

// 9 karakterli bir kelime ama index numaralari 0 dan basladigi icin  sonuncu yoktur. Undefined döner.
// Stringler,primitive bir tür olduğu için parça olarak değiştiremezsiniz
// immutable - not mutable

course[6]="v"
console.log(course);

course="Full STaCK"
console.log(course);


// Bir kelimenin her harfini tek tek listeleyen program
const order=("Germany")
for (let i=0; i<order.length; i++)
console.log(order[i]);


/* ------------------------------------------------------------------------------------------*/
//!                                 String Methods
/* ------------------------------------------------------------------------------------------*/

//? String methodlarinda () kullanilir.
//? bu metodlardan birden fazlası aynı anda kullanılabilir => Chaining method


// ***************** 1. toLowerCase() ********************
// Stringdeki harfleri kücük harfe dönüstürür:

console.log(course.toLowerCase());



// ***************** 2. toUpperCase() ********************
// Stringdeki harfleri büyük harfe dönüstürür:

console.log(course.toUpperCase());
console.log("Change to upper case".toUpperCase());



// ***************** 3. toLocaleUpperCase() ********************

let city="istanbul"
console.log(city.toLocaleUpperCase("en-US"));
console.log(city.toLocaleUpperCase("tr"));




/*-----------------------------------------------------------------------------------------*/

//!  Bir stringi parcalama yöntemleri

// ***************** 4. split() ******************** //

//? str.split (ayrac(seperater))
//? Seperater stringi neye göre parcalayacagimizi belirler

let atasoz="Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir."

let yenisoz=atasoz.split(" ")
console.log(yenisoz[4])

yenisoz[4]==="hayat"? console.log("hayat kelimesi bulundu") : console.log("hayat kelimesi bulunamadi");


// Bu cümledeki "ama" kelimesi geciyorsa true yazdiran program
let isTrue="Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir."
isTrue === "ama" ? console.log("ama kelivemis vardir") : console.log("ama kelimesi yoktur");



//! Bazi array methodlari

let mes="Schönes Tag"

//? Reverse tersine yazar
console.log(mes.split(" ").reverse().join(" "));


let word="Merhaba"
word===word.split("").reverse().join("") ? console.log("pallindrome") : console.log("not pallindrome");



let word2="efe"
word2===word2.split("").reverse().join("") ? console.log("pallindrome") : console.log("not pallindrome");



// date="23.05.2023" gün ay ve yil olarak ayiran program

let date="23.05.2023"
console.log(date.split("."));


// aylara göre ayiran program

let months="Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec"
console.log(months.split("/"));
console.log(months.split("/",6));  //ilk 6 ayi gösterir



let list="Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand"
console.log(list.split(";"));
console.log(list.split(";").join("-"));



// girilen kelimeyi tersten yazdiran program
let kelime="Merhaba"
console.log(kelime.split("").reverse().join(""))


const tersten=(message) =>
console.log(message.split("").reverse().join(""))

tersten("salam")


// parcalama icin slice, substring, substr

/* -------------------------------------------------------------------------- */
/*5.                                Slice()                                  */
/* -------------------------------------------------------------------------- */

// slice(başlangıç index numarası , bitiş index numarası ) başlangıç ve bitiş arasındaki karakterleri alır

message="parcalandim"

console.log(message.slice(3,5));
console.log(message.slice(3));
console.log(message.slice(-3));


/* -------------------------------------------------------------------------- */
/*6.                                 substring()                              */
/* -------------------------------------------------------------------------- */

// slice(başlangıç index numarası , bitiş index numarası ) başlangıç ve bitiş arasındaki karakterleri alır
// slice den tek farki - sayi almaz

console.log(message.substring(6,8));


/* -------------------------------------------------------------------------- */
/*7.                                 substr()     -deprecated                 */
/* -------------------------------------------------------------------------- */
// substr (baslangic index numarasi, kac adet karakter alinacagi)

console.log(message.substr(3,5));


//! Replace() stringde degisiklik yapma

message="Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir."
console.log(message.replace("kel", "gereksiz"));

console.log(message.replaceAll(" ", "-"));

console.log(message.replaceAll("ü","u"));


// girilen degisken adini uygun hale getiren program
let variable="kullanıcı adı"
console.log(variable.replaceAll("ı","i"));
console.log(variable.toLocaleUpperCase("en-US"));


/* -------------------------------------------------------------------------- */
/*                               string icinde arama                          */
/* -------------------------------------------------------------------------- */
//includes, indexOf, Search, Match

//? Includes() metodu..... yi iceriyormu? => true veya false

console.log(message.includes("kel"));

message.includes("zaman")? console.log("bu cümlede zaman kelimesi vardir") : console.log("bu cümlede zaman kelimesi yoktur");

let url="https://clarusway.com"
url.includes("https")? console.log("güvenli site") : console.log("güvenli site degil");



// @ isareti varsa gecerli, yoksa gecersiz yazdiran program:
let mail="clarusway.com"
mail.includes("@")? console.log("Gecerli bir e-mail adresi") : console.log("Gecersiz bir e-mail adresi");

//? indexOf(aranacak metin, konum) Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir. Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir