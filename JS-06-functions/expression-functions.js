/* -------------------------------------------------------------------------- */
//!                             EXPRESSION FUNCTION                           */
/* -------------------------------------------------------------------------- */

//! İsimsiz fonksiyondur
//! Bir değişkene atanan bir fonksyiondur. Bu nedenle bir dönüş değeri olmalıdır.
//! Parametre göndermek için değişken adını yazıp parantez içinde parametreler veriyoruz.

const toplam=function(num1, num2){
return num1+num2;
}
document.write("Islemin sonucu:", toplam(45,78))



//? gönderilen sayi ciftmi tekmi?

const number=function(num){
    return num%2===0? "Sayi cifttir" : "Sayi tektir"
}
console.log(number(11));



let biggest=function(n1, n2, n3){
if(n1>n2 && n1>n3){
    console.log("n1 is biggest number");
}

else if(n2>n1 && n2>n3){
    console.log("n2 is biggest number");
}

else(n3>n1 && n3>n2)
    console.log("n3 is biggest number");

return n1,n2,n3
}
console.log(biggest(12,3,9));





