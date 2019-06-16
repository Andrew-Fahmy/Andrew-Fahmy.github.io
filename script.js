let bg = document.getElementById("landing");

let parallax_obj = document.getElementsByClassName("parallax");

// offset = 0;
let cursor = {"x": 0, "y": 0};


bg.addEventListener("mousemove", mouse_update);

function mouse_update(e) {
    cursor.x = e.x;
    cursor.y = e.y;
}

function loop() {
    for(let i = 0; i < parallax_obj.length; i++) {
        parallax_obj[i].style.transform = "translate3d(0, " + document.documentElement.scrollTop * parallax_obj[i].dataset.speed + "px, 0)";
    }
    // bg.style.backgroundPositionX = (cursor.x / window.innerWidth) * -50 + "px";
    // bg.style.backgroundPositionY = (cursor.y / window.innerHeight) * -50 + "px";
    requestAnimationFrame(loop);
    // console.log(bg.style.backgroundPositionX);
}

loop();