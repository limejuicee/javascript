'use strict'

window.onload=function(){

let slideArray=['slide2.jpg','slide1.png','slide3.svg'];

console.log(slideArray.toString());

console.log(slideArray.sort());
console.log(slideArray.reverse());

console.log(slideArray[0].slice(5,6));

slideArray.forEach(function(str){
    console.log(str);
    console.log(str.slice(7,10));
    console.log("------------");
});

console.log(slideArray.splice(1,1));
console.log(slideArray.toString());

let numArray=[10,3,6,17,6,19];

numArray.splice(2,0,100);
console.log(numArray.toString());
}
