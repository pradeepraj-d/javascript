let hrs = document.getElementById("hrs");
let sec = document.getElementById("sec");
let min = document.getElementById("min");

setInterval(() => {
    let time = new Date();

    hrs.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours();
    min.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
    sec.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
}, 1000);

