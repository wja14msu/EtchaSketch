const gridContainer = document.getElementById("grid-container");
let gridSize = 10;
//let gridSize = document.getElementById("grid-size").value;


function createGrid() {
    //gridContainer.innerHTML = "";

    let gridWidth = gridContainer.offsetWidth / gridSize;
    gridSize = document.getElementById("grid-size").value;

    // Clear previous grid
    //gridContainer.innerHTML = "";

    // Set grid template columns based on grid sizee
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
    //gridContainer.style.gridTemplateRows = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
    }

    // Create grid items
    for (let i = 0; i <= gridSize ** 2; i++) {
        const square = document.createElement("div")
        square.classList.add("grid-item");
        square.setAttribute('draggable', 'false');
        square.textContent = "box" + `${i}`;
        gridContainer.appendChild(square);
    }
