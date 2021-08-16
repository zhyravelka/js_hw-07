let inputRef = document.querySelector("#name-input");
let spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event)=>{
     let inputValue = event.target.value;
     spanRef.textContent = inputValue;
});
