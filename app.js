const grid = document.querySelector("#main-grid");
const drawBtn = document.querySelector("#draw-btn");
let click = false;

function createGrid(num){
    for(let i=0; i<num; i++){
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        for(let i=0; i<num; i++){
            const newSquare = document.createElement("div");
            newSquare.classList.add("square");
            newRow.appendChild(newSquare);
            newSquare.addEventListener('mouseover', colorSquare);
        }
        grid.appendChild(newRow);
    }
};

createGrid(64);

function colorSquare(){
    if(click){
        this.classList.add("draw");
    }
}

grid.addEventListener('mousedown', ()=>{
    click = !click;
});