const container = document.querySelector("#container");

function makePixels(a) {
    let b = Math.pow(a, 2);
    let dimensions = (800 / a) + "px";
    for (let i = 0; i < b; i++) {
        let etchPixel = document.createElement('div');
        etchPixel.classList.add('etchPixel');
        etchPixel.style.width = dimensions;
        etchPixel.style.height = dimensions;
        container.appendChild(etchPixel);

        etchPixel.addEventListener('mouseover', () => {
            etchPixel.style.backgroundColor = "black";
        })
    }
}

const makeGrid = document.querySelector('#makeGrid');

makeGrid.addEventListener('click', () => {
    let gridSize = prompt("Choose a grid size between 1 and 100", "16")
    if (gridSize <= 100 && gridSize >= 1) {
        makePixels(gridSize);
    } else { alert("Choose a valid number");
    };
});