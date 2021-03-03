//resme tıklayınca diğer resime geçme

var myImage = document.querySelector('img');
myImage.onclick= function(){
        var mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/asd.PNG'){
            myImage.setAttribute('src' , 'images/asd2.PNG' );
        }
        else{
            myImage.setAttribute('src' , 'images/asd.PNG');
        }

    }

//-----------------------------------------


//girilen iki sayıyı toplama işlemi
let soru = parseInt(prompt("toplanacak ilk sayıyı giriniz"));
let soru2= parseInt(prompt("ikinci değer"));

cevap =alert ("toplam " +(soru+soru2));


//-----------------------------------------




//hangi sayının büyük olduğunu bulan program

let GİRİS = confirm("HANGİ SAYININ BÜYÜK OLDUĞUN BULAN PROGRAM");
let sayı1= parseInt(prompt("İlk sayıyı Girin:"));
let sayı2= parseInt(prompt("İkinci sayıyı girin:"));
   if (sayı1 > sayı2) {
       alert(sayı1 +" Daha büyük");   
   }
   else if (sayı1 < sayı2){
       alert(sayı2 +" Daha büyük");
   }
   else if (sayı1 == sayı2) {
       alert("sayılar eşit");
   }

        
//-----------------------------------------

      

//Şifre ve Kullanıcı adı doğrulama paneli

let Kullanıcı , sifre
sifre = "amazondanisman.tk"
Kullanıcı = "furkan123"
  

 let dogrulama = prompt("kullanıcı Adınızı giriniz:");
 let dogrulama2 = prompt("şifrenizi Giriniz");

     if (dogrulama == Kullanıcı && dogrulama2==sifre) {
         alert("tebrikler giriş bilgileri doğru!");
     }

     else if (dogrulama != Kullanıcı || dogrulama2==sifre){
         alert("Giriş Bilgilerinden birini yanlış girdiniz tekrar deneyin!");
     }
     else {
         alert("hatalı giriş");
     }




//-----------------------------------------

//girilen sayını çift olup olmadığını bulan program
cift();

function cift() {
    let deger = Number(prompt("SAYIYI GİRİN"));
    if (deger < 0) {
        alert("negatif sayılarda çiftlik veya teklik aranmaz");
    }
    else if (deger % 2 == 0) {
        alert("girilen sayı çift sayıdır");
    }
    else {
        alert("sayı çift değil");
    }
}

