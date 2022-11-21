// Const items.
const grid = document.querySelector("#main-grid");
const drawBtn = document.querySelector("#draw-btn");
const resetBtn = document.querySelector("#reset-btn");
const gridDisplay = document.querySelector("#grid-size-display");
const sizeRange = document.querySelector("#range");
const setBtn = document.querySelector("#set-button");
const colorPicker = document.querySelector("#color");
const eraserBtn = document.querySelector("#eraser");
const rainbowBtn = document.querySelector("#rainbow");
const colorBtn = document.querySelector("#color-button");

// Let items.
let isColorActive = true;
let isRainbowActive = false;
let isEraserActive = false;
let ismousedown = false;
let color = "black";
num = 10;

// Functions
// Creates a grid with the <num> value as param.
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
        if(isColorActive){
            this.style.backgroundColor = `${colorPicker.value}`; 
        }else if(isEraserActive){
            this.style.backgroundColor = `#ffffff`; 
        }else if(isRainbowActive){
            this.style.backgroundColor = randomColor(); 
        }
    };
};
// Same as <colorSquare()> but doesn care about <ismousedown>. 
function clickSquare(){
    if(isColorActive){
        this.style.backgroundColor = `${colorPicker.value}`; 
    }else if(isEraserActive){
        this.style.backgroundColor = `#ffffff`; 
    }else if(isRainbowActive){
        this.style.backgroundColor = randomColor();
    }
};
// Function that creates a random RGB color and returns it as a string.
function randomColor(){
    let randomR = Math.floor(Math.random() * 256)
    let randomG = Math.floor(Math.random() * 256)
    let randomB = Math.floor(Math.random() * 256)
    let randColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    return randColor;
};
// Clears the grid. <innerHTML> edits all text inside <grid> and makes it empty.
function clearGrid(){
    grid.innerHTML = '';
};
// Function that contains the instructions for when the page finishes loading.
function onLoad(){
    colorPicker.value = "#333333";
    colorBtn.classList.add("active");
}

// Running code.
// Executes <createGrid()> function with <num=10> as default.
createGrid(num);

// Event listeners.
// When mouse is pressed sets "ismousedown" to true.
document.addEventListener('mousedown', ()=>{
    ismousedown = !ismousedown;
});
// When mouse is released sets "ismousedown" to false.
document.addEventListener('mouseup', ()=>{
    ismousedown = !ismousedown;
});
// Empties the grid and replaces it with a new 10x10 one. It also sets all properties as default.
resetBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(10);
    ismousedown = false;
    isColorActive = true;
    isEraserActive = false;
    isRainbowActive = false;
    sizeRange.value = 10;
    colorBtn.classList.add("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    gridDisplay.textContent = "10 x 10";
    colorPicker.value = "#333333";
});
// Updates the grid size display.
sizeRange.addEventListener('input', () => {
    gridDisplay.textContent = `${sizeRange.value} x ${sizeRange.value}`;
});
// Empties the grid and creates a new one by setting the <sizeRange> value as the num value.
setBtn.addEventListener('click', () => {
    num = parseInt(sizeRange.value);
    clearGrid();
    createGrid(num);
    ismousedown = false;
    isColorActive = true;
    isEraserActive = false;
    isRainbowActive = false;
    eraserBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    colorBtn.classList.add("active");
});
// Sets <isColorActive> to true when the mouse leaves the input. <isRainbowActive> and <isEraserActive> are set to false.
colorPicker.addEventListener('mouseup', () => {
    isColorActive = false;
    isEraserActive = false;
    isRainbowActive = false;
    ismousedown = false;
    colorBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
});
// Sets <isEraserActive> to true when clicking <eraserBtn>. <isColorActive> and <isRainbowActive> are set to false.
eraserBtn.addEventListener('click', () => {
    isEraserActive = true;
    isColorActive = false;
    isRainbowActive = false;
    eraserBtn.classList.add("active");
    rainbowBtn.classList.remove("active");
    colorBtn.classList.remove("active");
});
// Sets <isRainbowActive> to true when clicking <rainbowBtn>. <isColorActive> and <isEraserActive> are set to false.
rainbowBtn.addEventListener('click', () => {
    isColorActive = false;
    isEraserActive = false;
    isRainbowActive = true;
    rainbowBtn.classList.add("active");
    colorBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
});
// Sets <isColorActive> to true when clicking <colorBtn>. <isRainbowActive> and <isEraserActive> are set to false.
colorBtn.addEventListener('click', () => {
    isColorActive = true;
    isEraserActive = false;
    isRainbowActive = false;
    ismousedown = false;
    colorBtn.classList.add("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
});

