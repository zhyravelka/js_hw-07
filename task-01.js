

let categoriesRef = document.querySelectorAll('li.item');
// console.log(categoriesRef);
console.log(`В списке ${categoriesRef.length} категории`);

categoriesRef.forEach((category)=>{
    let headings = category.querySelectorAll('h2');
    // console.log(headings);
    let liRef = category.querySelectorAll('li');
    // console.log(liRef);
    console.log(`Категория: ${headings[0].textContent}`);
    console.log(`Количество элементов: ${liRef.length}`);
});