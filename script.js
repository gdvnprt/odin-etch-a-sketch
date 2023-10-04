const container = document.querySelector("#container");

function makePixels(a) {
    let b = Math.pow(a, 2);
    let dimensions = (800 / a) + "px"
    for (let i = 0; i < b; i++) {
        let etchPixel = document.createElement('div');
        etchPixel.classList.add('etchPixel');
        etchPixel.style.width = dimensions;
        etchPixel.style.height = dimensions;
        container.appendChild(etchPixel);
    }
}