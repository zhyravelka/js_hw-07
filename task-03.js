const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let ulRef = document.querySelector("#gallery");

let imgList = images.reduce((acc,img)=>{
    
    acc += `<li><img width = '600' height = '600' src="${img.url}" alt="${img.alt}" border = "2px solid black"> </li>`;
    return acc;
},"");

ulRef.style.display = "flex";
ulRef.style.justifyContent = "space-between";
ulRef.insertAdjacentHTML('afterbegin', imgList);


