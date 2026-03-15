setInterval(function(){
let a = new Date();
let hour = a.getHours();
let minute = a.getMinutes();
let second = a.getSeconds();
let date = a.getDate();
//console.log(hour + ":" + minute + ":" + second + " " + date);
let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");
h.innerHTML=hour;
m.innerHTML=minute;
s.innerHTML=second;
},1000);