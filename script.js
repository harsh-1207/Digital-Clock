// We use js to change the time in the website dynamically
const hourEl = document.getElementById("hour")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12;
        ampm = "PM"
    }
    hourEl.innerText = h
    minutesEl.innerText = m
    secondsEl.innerText = s
    ampmEl.innerText = ampm 

    // To call it every second, we use : 
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock();