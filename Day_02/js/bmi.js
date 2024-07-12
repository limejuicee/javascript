'use district';

//사용자에게 키(m) 값과 체중(kg)을 입력 받는다
//bmi = 체중/키*키
//bmi를 출력
//18.5~23 정상
//23~25.00 과체중

let temp;//변수 선언
//값이 할당 되어야 함
alert (temp);

/*
05. null 테스트
 예제09: null 값으로 데이터를 초기화하는 경우
 */

// 숫자 변수 초기화
let data1 = 0;
// 문자 변수 초기화
let data2 = "";
// 불린 변수 초기화
let data3 = false;
// 객체 변수 초기화
let data4 = null;

data4 = new Date(); //data4는 실제 데이터가 들어 있는 데이터    의 주소를
                    //가리키는 값이 담겨있음

let year2=data4.getFullYear(); //실제 데이터 중에는 년도의 값이 들어 있어서 제공함
document.write(year2,"<br>"); //년도의 값을 얻어왔음
let day2=data4.getDay();
document.write(day,"<br>");

const data5 = new Date();
const PI = 3.141592; //상수 값. 상수의 경우 constr를 붙여 변하지 않도록 함


// <h1>태그 활용</h1>
// 2024-03-11 15:20
let dayNtime = new Date();
let year = dayNtime.getFullYear();
let month = dayNtime.getMonth();
let day = dayNtime.getDay();
let hour = dayNtime.getHours();
let minutes = dayNtime.getMinutes();


let tall=prompt("키");
let weght=prompt("체중");
let bmi=(weght/(tall*tall));

document.write(bmi);
alert(bmi);