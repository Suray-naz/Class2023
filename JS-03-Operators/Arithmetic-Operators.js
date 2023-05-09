// ! ************ ARITHMETIC OPERATORS *************

let number1=86;
let number2=39;

console.log("Arithmetic Operators");
//Addition-Toplama islemi
console.log("Addition:", number1+number2);

//Subtraction-cikarma islemi
console.log("Subtraction:", number1-number2);

//Multiplication-carpma islemi
console.log("Multiplication:", number1*number2);

//Divison-bölme islemi
console.log("Division:", (number1/number2).toFixed(2));

//Power-üs alma
console.log("Power:", number1**3);

//Modules-(Mod alma) kalan bulma %
console.log("Modules:", number1%2);


// !INCREMENT-DECREMENT


// ? ++ increment - degisken degerini 1 arttirir
// num++ önce sayiyi yazar sonra degerini arttirir
// ++num önce artisi yapar sonra degeri yazar (arttirilmis degeri görebilirim)

//number1=number1+1 -- bu islemin kisayolu: number1++
console.log(number1++);
console.log(number1);
console.log(++number1);

// ? ++ decrement - degisken degerini 1 azaltir
// num++ önce sayiyi yazar sonra degerini azaltir
// ++num önce azaltma yapar sonra degeri yazar (arttirilmis degeri görebilirim)

console.log(number1--);
console.log(number1);
console.log(--number1);


const num=325

const birler=num % 10;
const onlar=(Math.trunc(num/10)%10)
const yüzler=(Math.trunc(num/100))

console.log(`Sayi degerleri ${yüzler} ${onlar} ${birler}`);

console.clear();



// !******** ASSIGNMENT OPERATORS ***********

let x=10

// = atama operatörü

let y=x
console.log(y);

++x //degerini bir attiriyordu x=11

// x=x+25 islemin daha kisayolu: x+=25

x+=y  // x=11  y=10  toplam =21

console.log(x);

x-=5   // x=x-5
console.log(x);

x*=3   // x=x*3
console.log(x);

x/=9   // x=x/9
console.log(x);
console.log(Math.floor(x));

let z=15   // x=x % 2
z%=2
console.log(z);