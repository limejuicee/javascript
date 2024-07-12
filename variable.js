document.write("둘리<br>");
let a=0; //number
console.log(typeof(a));
console.log(a);
a=9;
console.log(a);
// 자바 int a/float b/ boolean b
let b=2.5; //number
b=3.14;
let c=true;
console.log(a+b);
console.log(typeof(a+b));

let str = "고길동";
console.log("고길동");
console.log(str); //콘솔창에 결과 보여줘
//웹페이지에 고길동을 써줘. str변수사용
//("<br>")

// let v1 = "이순신";

// document.write(v1):
document.write(str);
// 고길동의 나이는 20
// "고길동"은 str에 들어있음
// 나이변수 age
let age=20;
document.write("<br>")
document.write(str);
document.write( "의 나이는 ")
document.write(age);
document.write(" 입니다");
document.write("<br>"+str+" 의 나이는" +age+" 입니다")
document.write("<br>",str," 의 나이는",age," 입니다")

document.write(100>10);
let resultBool = 100>10;
document.write(resultBool);