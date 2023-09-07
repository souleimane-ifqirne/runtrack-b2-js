function myChangeBackgroundColor() {
    let screenSize = window.innerWidth

    if (screenSize <= 500) {
        document.body.style.backgroundColor="#003049"
    } else if (screenSize <= 1336) {
        document.body.style.backgroundColor="#d90429"
    } else {
        document.body.style.backgroundColor="#ffb703"
    }
}

window.addEventListener("resize", myChangeBackgroundColor);

myChangeBackgroundColor();