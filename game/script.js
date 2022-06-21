const Mario = document.getElementById("Mario");
const goomba = document.getElementById("goomba");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (Mario.classList != "jump") {
        Mario.classList.add("jump")
    }
    setTimeout( function() {
        Mario.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() {
    let MarioTop = parseInt(window.getComputedStyle(Mario).getPropertyValue("top"))
    let goombaLeft = parseInt(window.getComputedStyle(goomba).getPropertyValue("left"))

    if (goombaLeft < 50 && goombaLeft > 0 && MarioTop >=140 ) {
        alert("GAME OVER!!!")
    }
}, 10)