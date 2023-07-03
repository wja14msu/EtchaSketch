const div = document.createElement("div");

const gridDimensions = document.getElementById("grid-dimensions");
const container = document.getElementById("container");

const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const dimensions = document.getElementById('dimension-input').value;
    console.log(dimensions);
    return dimensions
})

const btn = document.getElementById('submit');

form.addEventListener('click', function() {
    document.getElementById("dimension-input").value;
    
})

//document.getElementById("container").appendChild(div);

document.body.onload = addElement;
function addElement() {
    const newDiv = document.createElement("div");

    const newContent = document.createTextNode("This is text", gridDimensions);

    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("input-container");
    document.body.insertBefore(newDiv, currentDiv);
}

function addDiv() {
    let numDivs = document.getElementById("grid-dimensions").value;
    for (i = 0; i <= numDivs; i++) {
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
}

