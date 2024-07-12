'use district'

let season=['봄','여름','가을','겨울'];
const snackBar=['김밥','떡볶이','김말이','라면'];

document.write(season[3]);
document.write(snackBar[0]);

let fruits=[];

fruits.push('사과');
fruits.push('딸기');
fruits.push('배');
fruits.push('수박');
fruits.push('귤');
fruits.push('오렌지');
fruits.push('자몽');
fruits.push('포도');

console.log(fruits);

document.write("<br>",fruits[0]); //사과
document.write(fruits[7],"<br>"); //포도

let result = fruits.pop();

document.write(fruits);

const myNumbers = new Array(10);
myNumbers.push(10);
myNumbers[1]=20;
myNumbers[2]=20;
myNumbers[3]=20;
myNumbers[4]=20;
myNumbers[5]=20;
myNumbers[6]=20;
myNumbers[7]=20;
myNumbers[8]=20;

console.log(myNumbers);
documents.write(myNumbers);