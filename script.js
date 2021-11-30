var div = document.querySelector(".container");
var clearBtn = document.form1.btnClear;
var sizeInput = document.form1.txt;
var cleanBtn = document.form1.btnClean

// set  height and weigth of grid
function gridSize() {
    div.style.height = sizeInput.value + "px";
    div.style.width = sizeInput.value + "px";
}

// call clear grid function on clicking the clear btn
clearBtn.addEventListener("click", clearGrid);

// default grid square: 5 and default height and width: 300px.
var gridRepeat = 5;
div.style.gridTemplateColumns = `repeat(${gridRepeat}, 1fr)`;
div.style.height = "300px";
div.style.width = "300px";

// create child div
let childDivLength = gridRepeat * gridRepeat;
for (var i = 0; i < childDivLength; i++) {
    var childDiv = document.createElement("div");
    childDiv.className = "item";
    div.appendChild(childDiv);
    div.children[i].addEventListener("mouseover", changeColor);
}


// create new grid after hitting the clear btn
function createGrid() {
    let gridRepeat = prompt("enter number of square grids");
    if (gridRepeat > 65) {
        alert("maximun grid square is 65");
        gridRepeat = 65;
    }
    div.style.gridTemplateColumns = `repeat(${gridRepeat}, 1fr)`;

    // create child div
    var newChildDivLength = gridRepeat * gridRepeat;
    for (var i = 0; i < newChildDivLength; i++) {
        var childDiv = document.createElement("div");
        childDiv.className = "item";
        div.appendChild(childDiv);
        div.children[i].addEventListener("mouseover", changeColor);
    }

}

// change color of div children
function changeColor(e) {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 278)}, ${Math.floor(Math.random() * 278)}, ${Math.floor(Math.random() * 278)} )`;
}

//clear grid
function clearGrid() {
    var gridArray = Array.from(div.childNodes);
    gridArray.forEach(element => div.removeChild(element));
    createGrid();
}

function cleanGrid() {

    let box = Array.from(div.children);

    box.forEach(child => {
        child.style.backgroundColor = "#fff";
    });

}
cleanBtn.addEventListener("click", cleanGrid);
