let inputName = prompt("Lütfen adınızı giriniz: ");
const isim = document.querySelector("#myName");
isim.innerHTML=`${inputName}`;

showTime();

function showTime(){
    let tarih = new Date();
    let hour = tarih.getHours();
    let minute = tarih.getMinutes();
    let second = tarih.getSeconds();
    let day = tarih.getDay();
    const days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    if(minute < 10){
        minute = "0" + minute;
    }
    if(second < 10){
        second = "0" + second;
    }
    const date = document.querySelector("#myClock");
    date.innerHTML = `${hour}:${minute}:${second}:${days[day]}`;
    setTimeout(showTime,1000); 
}