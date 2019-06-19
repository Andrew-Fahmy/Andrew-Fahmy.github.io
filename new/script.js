let parallax_objs = document.getElementsByClassName("parallax");

function loop() {
    for(let i = 0; i < parallax_objs.length; i++) {
        parallax_objs[i].style.transform = "translate3d(0, " + document.documentElement.scrollTop * parallax_objs[i].dataset.speed + "px, 0)";
    }
    requestAnimationFrame(loop);
    // console.log(cursor.x);
}

loop();