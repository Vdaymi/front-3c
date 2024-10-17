

const seventhElement = document.getElementById('element-seven'),
      eighthElement = document.querySelector('#element-eight'),
      
      imgActions = document.querySelector('#img-actions'),
      addButton = document.querySelector('#add-button'),
      increaseButton = document.querySelector('#increase-button'),
      decreaseButton = document.querySelector('#decrease-button'),
      deleteButton = document.querySelector('#delete-button');

let img = document.createElement('img'),
    isImageAdded = false;

    img.src = "https://gohotels.com.ua/images/stories/f08072159a443e07501f3df97987f8a3.jpg";
    img.width = 300;
    img.height = 200;
    
seventhElement.addEventListener('click', e => {
    e.preventDefault();
    if (e.target && e.target.id === seventhElement.id) {
        changeElemColor(e.target, 'elem-seven-color');
    }
});
eighthElement.addEventListener('click', e => {
    e.preventDefault();
    if (e.target && e.target.id === eighthElement.id) {
        changeElemColor(e.target, 'elem-eight-color');
    }
});
function changeElemColor(elem, className) {
    elem.classList.contains(className) 
        ? elem.classList.remove(className)
        : elem.classList.add(className);
}

addButton.addEventListener('click', () => {
    if (!isImageAdded) {
        imgActions.before(img);
        isImageAdded = true;
    }
});
increaseButton.addEventListener('click', () => {
    if (isImageAdded) {
        img.style.width = (img.width * 2) + 'px';
        img.style.height = (img.height * 2) + 'px';
    }
});
decreaseButton.addEventListener('click', () => {
    if (isImageAdded) {
        img.style.width = (img.width / 2) + 'px';
        img.style.height = (img.height / 2) + 'px';
    }
});
deleteButton.addEventListener('click', () => {
    if (isImageAdded) {
        img.style.width = 300 + 'px';
        img.style.height = 200 + 'px';
        img.remove();
        isImageAdded = false;
    }
});