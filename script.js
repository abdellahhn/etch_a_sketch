// Get the container div
const container = document.querySelector('.container');

// Define the number of rows and columns
const numRows = 16;
const numCols = 16;

// Calculate the maximum number of squares to create based on viewport height
const maxSquares = Math.floor(window.innerHeight / (window.innerWidth / numCols)) * numCols;

// Create a grid of squares
for (let i = 0; i < maxSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

// we add the function to handle the listening
function handleMouseEnter(event){
    event.target.classList.add('hovered');
}

function handleMouseLeave(event) {
    event.target.classList.remove('hovered');
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) =>{
    square.addEventListener('mouseenter', handleMouseEnter);
    square.addEventListener('mouseleave', handleMouseLeave);
})