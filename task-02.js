const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ulRef = document.querySelector('#ingredients');

function creatIngridients(elem, domElem) {
    let html = "";
    
    ingredients.forEach((elem)=>{
        html += `<li> ${elem} </li>`;
        });
    
    domElem.innerHTML = html;
    return domElem;

}
creatIngridients(ingredients, ulRef);



/* let domElem = ingredients.reduce((acc,elem)=>{
    acc += `<li> ${elem} </li>`;
    return acc;
},"");
ulRef.innerHTML = domElem; */
