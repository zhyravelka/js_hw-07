let inputRef = document.querySelector('[type="text"]');
let lenRef = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur',(event)=>{
       
    if( event.target.value.length>= lenRef){
        event.target.style.borderColor = '#4CAF50';
    }else{
        event.target.style.borderColor = '#F44336';   
    }
    
})
