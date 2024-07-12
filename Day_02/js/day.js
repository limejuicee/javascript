'use district'


let dayNtime = new Date();
let year = dayNtime.getFullYear();
let month = dayNtime.getMonth();
let day = dayNtime.getDate();
let hour = dayNtime.getHours();
let minutes = dayNtime.getMinutes();

document.write("<h1>",year,"-",month+1,"-",day,"&nbsp;&nbsp;",hour,"-",minutes,"</h1>")
