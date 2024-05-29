const char = document.querySelector(".char")
const clicks = document.querySelector(".clicks")


let amount = 0;


char.addEventListener("mousedown", ()=>{
    amount++
    clicks.innerHTML = "Clicks: " + amount
    char.style.transform = "scale(1.1)"
})


char.addEventListener("mouseup", ()=>{
    char.style.transform = "scale(1)"
})