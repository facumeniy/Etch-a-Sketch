const grid = document.querySelector("#main-grid");

function createGrid(num){
    for(let i=0; i<num*num; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        grid.appendChild(newDiv);
    }
};

createGrid(2);
