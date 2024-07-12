'use strict'

let memNum=prompt("입장객 수");
let colNum=prompt("한줄에 앉을 사람 수");
let rowNum //필요한 좌석 줄 수
if(memNum%colNum==0)
rowNum=(memNum/colNum)
else
rowNum=parseInt(memNum/colNum+1);


document.writeln(rowNum);
document.write(rowNum.toFixed(2));