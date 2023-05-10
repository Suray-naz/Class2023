// ! ********* LOGICAL OPERATORS ************

// ? ********** AND OPERATOR **********
// Hersey true olmali, bir tane flase olursa sonucumuz false olur


// let surname=true
// let pass=true
// let tel=true
// let ad=true

// console.log(surname && pass && tel && ad);


let Name="Suray"
let Surname="Naz"
let pass="1234"
let tel="+098764"

console.log(Name && Surname && pass && tel);


// ? ******** OR OPERATOR *********
// Hersey false olsa bile bir true döndermeye yeter

let inst1="Harvey"
let inst2=false
console.log(inst1 || inst2);

// Icinde true ve false olan degerlerin oldugu bir grupta bir tane true varsa true olur, ve ilk gördügü true degerini döndürür


// ? ! NOT Operator

let a=true
console.log("Not islemine tabi tutulmus a:", !a);  //false

let isOpen=true     //Siteye giris yaptim
isOpen=!isOpen   //Siteden oturumu kapat butonuna basinca cikis yapmak icin
console.log(isOpen);