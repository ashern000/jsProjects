const clicker = document.querySelector(".clicker");
const clicksCont = document.createElement("p");
const cronosText = document.createElement("p");
const container = document.querySelector(".container");
container.appendChild(clicksCont);
container.appendChild(cronosText);

const btnDark = document.querySelector(".dark-button");
const btnLight = document.querySelector(".light-button");

var clicks = 0;
var cronos = 0;
var cronosTime = 0;


class Time {


    time(timeCronos) {
        timeCronos = setInterval(function () {
            cronosTime++;
            cronosText.classList.add("text")
            cronosText.textContent = cronosTime;
            if (cronosTime == 10) {
                alert(`Sua média de clicks por segundo é de: ${clicks / cronosTime}`)
                cronosText.textContent = 10;
                clicks = 0;
                cronosTime = 0;
                cronosText.textContent = cronosTime;
                clicksCont.textContent = clicks;
                clearInterval(timeCronos)
            }
        }, 1000)
    }
}


var timeClick = new Time

clicker.addEventListener("click", (e) => {
    clicksCont.classList.add("text")
    clicks++;
    clicksCont.textContent = clicks;

    if (clicks == 1) {
        timeClick.time();
    }
})

class UI{
    dark(body){
        body = document.querySelector("body");
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        
      
    }

    light(body){
        body = document.querySelector("body");
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        
    }
}

var mode = new UI;

btnDark.addEventListener("click", (e)=>{
    mode.dark();
})

btnLight.addEventListener("click", (e)=>{
    mode.light();
})





