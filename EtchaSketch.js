const form = document.getElementById('inputForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let input = form.querySelector('input');
    let boxInput = input.value;
    let box = document.getElementById('boxes');
    for (let i = 1; i <= boxInput; i++) {
        let div = document.createElement('div');
        div.textContent = `Box-${i}`
        box.appendChild(div);
    }
    console.log(boxInput);
})

