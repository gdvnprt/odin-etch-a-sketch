const container = document.querySelector("#container");

function makePixels(a) {
    let b = Math.pow(a, 2);
    let dimensions = (800 / a) + "px";
    for (let i = 0; i < b; i++) {
        let etchPixel = document.createElement('div');
        etchPixel.classList.add('etchPixel');
        etchPixel.style.width = dimensions;
        etchPixel.style.height = dimensions;
        etchPixel.style.backgroundColor = "rgba(0, 0, 0, 0)";
        container.appendChild(etchPixel);

        etchPixel.addEventListener('mouseover', () => {
            etchPixel.style.backgroundColor = "rgba(0, 0, 0, 1)";
        });
    };
};

makePixels(16);

function removeAllPixels() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
};

const makeGrid = document.querySelector('#makeGrid');

makeGrid.addEventListener('click', () => {
    removeAllPixels()
    let gridSize = prompt("Choose a grid size between 1 and 100", "16")
    if (gridSize <= 100 && gridSize >= 1) {
        makePixels(gridSize);
    } else { alert("Choose a valid number");
    };
});

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    let res = document.querySelectorAll('.etchPixel');
    for (let i = 0; i < res.length; i++) {
        res[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
    };
});

const drawBlack = document.querySelector('#drawBlack');
const drawRainbow = document.querySelector('#drawRainbow');
const drawShader = document.querySelector('#drawShader');

drawBlack.addEventListener('click', () => {
    let blk = document.querySelectorAll('.etchPixel');
    for (let i = 0; i < blk.length; i++) {
        blk[i].addEventListener('mouseover', () => {
            blk[i].style.backgroundColor = "rgba(0, 0, 0, 1)";
        });
    };
});

function randomRgb() {
    return Math.floor(Math.random() * 255);
};

function randomAlpha() {
    return Math.round((Math.random() * 9) + 1 ) / 10
}

function randomColor() {
    let r = randomRgb();
    let g = randomRgb();
    let b = randomRgb();
    let a = randomAlpha();
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
};

drawRainbow.addEventListener('click', () => {
    let rnb = document.querySelectorAll('.etchPixel');
    for (let i = 0; i < rnb.length; i++) {
        let random = randomColor()
        rnb[i].addEventListener('mouseover', () => {
            rnb[i].style.backgroundColor = random;
        });
    };
});

drawShader.addEventListener('click', () => {
    let shd = document.querySelectorAll('.etchPixel');
    for (let i = 0; i < shd.length; i++) {
        shd[i].addEventListener('mouseover', () => {
            let pxColor = shd[i].style.backgroundColor;
            let pxAlpha = pxColor.slice(-3, -1);
            let newAlpha
            if (((pxAlpha * 10 + 1) / 10) < 1 && pxAlpha > 0) {
              newAlpha = (pxAlpha * 10 + 1) / 10;
            } else if (pxAlpha === " 0") {
              newAlpha = .1
            } else {
                newAlpha = " 1";
             };
            let newShade = pxColor.replace(pxAlpha, newAlpha);
            shd[i].style.backgroundColor = newShade;
            });
        };
    });