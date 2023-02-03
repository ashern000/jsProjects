const body = document.querySelector("body");
const btnDark = document.querySelector(".btn-dark");
const bntLight = document.querySelector(".btn-light");
const title = document.querySelector("p");

class mode{
    dark(){
        body.classList.add("dark")
        body.classList.remove("light")
        title.style.cssText = "color:white;font-size:30px;  font-family: Georgia, 'Times New Roman', Times, serif;"
    }

    light(){
        body.classList.add("light")
        body.classList.remove("dark")
        title.style.cssText = "color:#000;font-size:30px;font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;"
    }
    using_oop_add(){
        title.textContent = "Mode Dark and Light using OOP";
    }
    using_oop_remove(){
        title.textContent = "Mode Dark and Light";
    }
}

var modeCharge = new mode;
btnDark.addEventListener("click", modeCharge.dark)
bntLight.addEventListener("click", modeCharge.light)
title.addEventListener("mouseenter", modeCharge.using_oop_add)
title.addEventListener("mouseleave", modeCharge.using_oop_remove)

