let parallax_objs = document.getElementsByClassName("parallax");
// let perspective_objs = document.getElementsByClassName("perspective");
// let cursor = {"x": 0, "y": 0};


// window.addEventListener("mousemove", mouse_update);

// function mouse_update(e) {
//     cursor.x = e.x / window.innerWidth * 2 - 1;
//     cursor.y = e.y / window.innerHeight * 2 - 1;
// }

function loop() {
    for(let i = 0; i < parallax_objs.length; i++) {
        parallax_objs[i].style.transform = "translate3d(0, " + document.documentElement.scrollTop * parallax_objs[i].dataset.speed + "px, 0)";
    }
    // for(let i = 0; i < perspective_objs.length; i++) {
    //     let left = cursor.x * perspective_objs[i].dataset.speed;
    //     let top = cursor.y * perspective_objs[i].dataset.speed;
    //     perspective_objs[i].style.transform = "translate3d(" + left + "%, " + top + "%, 0)";
    // }
    requestAnimationFrame(loop);
    // console.log(cursor.x);
}

loop();