function createGrid() {
    let gridSize = parseInt(document.getElementById("grid-size").value);
    let gridContainer = document.getElementById("grid-container");

    // Clear previous grid
    gridContainer.innerHTML = "";

    // Set grid template columns based on grid size
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    // Create grid items
    for (let i = 0; i < gridSize; i++) {
        let gridItem = document.createElement("div")
        gridItem.classList.add("grid-item");
        gridItem.textContent = i + 1;
        gridContainer.appendChild(gridItem);
    }
}