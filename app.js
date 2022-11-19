const grid = document.querySelector("#main-grid");
const drawBtn = document.querySelector("#draw-btn");
const resetBtn = document.querySelector("#reset-btn");
const gridDisplay = document.querySelector("#grid-size-display");
const sizeRange = document.querySelector("#range");
const setBtn = document.querySelector("#set-button");
const colorPicker = document.querySelector("#color");
const eraserBtn = document.querySelector("#eraser");

let isEraserActive = false;
let ismousedown = false;
let color = "black";
num = 10;

// Creates a grid with the num value as param.
function createGrid(num){
    for(let i=0; i<num; i++){
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        for(let i=0; i<num; i++){
            const newSquare = document.createElement("div");
            newSquare.classList.add("square");
            newRow.appendChild(newSquare);
            newSquare.addEventListener('mouseover', colorSquare);
            newSquare.addEventListener('click', clickSquare);
        }
        grid.appendChild(newRow);
     }
};
// Colors the square ONLY when <ismousedown> is true.
function colorSquare(){
    if(ismousedown){
        if(!isEraserActive){
            this.style.backgroundColor = `${colorPicker.value}`; 
        }else if(isEraserActive){
            this.style.backgroundColor = `#ffffff`; 
        }
    };
};
//
function clickSquare(){
    if(!isEraserActive){
        this.style.backgroundColor = `${colorPicker.value}`; 
    }else if(isEraserActive){
        this.style.backgroundColor = `#ffffff`; 
    }
}
// Clears the grid. <innerHTML> edits all text inside <grid> and makes it empty.
function clearGrid(){
    grid.innerHTML = '';
};



createGrid(num);


// When mouse is pressed sets "ismousedown" to true.
document.addEventListener('mousedown', ()=>{
    ismousedown = !ismousedown;
});
// When mouse is released sets "ismousedown" to false.
document.addEventListener('mouseup', ()=>{
    ismousedown = !ismousedown;
});
// Clears the grid and resets the range input value and display.
resetBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(10);
    ismousedown = false;
    isEraserActive = false;
    sizeRange.value = 10;
    gridDisplay.textContent = "10 x 10";
    colorPicker.value = "#000000"
});

sizeRange.addEventListener('input', () => {
    gridDisplay.textContent = `${sizeRange.value} x ${sizeRange.value}`;
});

setBtn.addEventListener('click', () => {
    num = parseInt(sizeRange.value);
    clearGrid();
    createGrid(num);
    ismousedown = false;
    isEraserActive = false;
});

colorPicker.addEventListener('mouseup', () => {
    isEraserActive = false;
    ismousedown = false;
});

eraserBtn.addEventListener('click', () => {
    isEraserActive = true;
});