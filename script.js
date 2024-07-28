let board = document.querySelector('#board');
const SQUARES_COUNT = 1527;
let colors = ['#FFFF00', '#CCFF00|', '#99FF00', '#99FFFF', '#FF66FF', '#FF0099', '#6666FF'];

for (let i = 0; i < SQUARES_COUNT; i++) {

    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
};

function setColor(element) {
    color = getRandomColor();
    if (color ==='#FFFF00') {
        element.style.background ='#FFFF99';
        element.style.zIndex = '2';
        element.style.borderRadius = '1px';
        element.style.boxShadow = `0 0 0 5px ${color}, 0 0 0 5px #FFFF99`;
    }
    else {
        element.style.background = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    };
};

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
    element.style.zIndex = '1';
    element.style.borderRadius = '0px';
};

function getRandomColor() {
    const index = Math.floor(Math.random()*colors.length)
    return colors[index];
};