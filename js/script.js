      //Consegna

// Scrivi un programma che stampi in console i numeri da 1 a 100: ma che per i multipli di 3 stampi “Fizz” al posto del numero eper i multipli di 5 stampi “Buzz”.Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.  

// let section

let Fizz = document.getElementById("Fizz")
let Buzz = document.getElementById("Buzz")
let FizzBuzz = document.getElementById("FizzBuzz")
let fizzNumbers = document.getElementById("fizzNumbers")


for (let i = 0; i <= 100; i++) {

   if (i % 15 === 0){
      console.log("FizzBuzz")
   }


}