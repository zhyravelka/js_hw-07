let formRef =document.querySelector('#counter');
let decrementBtn = document.querySelector('[data-action="decrement"]');
let incrementBtn = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');

let counterValue = 0;

function decrement() {
    
    counterValue -= 1;
    spanRef.textContent = counterValue;
}


function increment() {
 
    counterValue += 1;
    spanRef.textContent = counterValue;
}


decrementBtn.addEventListener("click", decrement);

incrementBtn.addEventListener("click", increment);