const rightBt = document.getElementById('backward');
const leftBt = document.getElementById('forward');
const imageContainer = document.getElementById('images-container');
const cardContainer = [...imageContainer.children];
const classActive = 'Active-img';
let currentIndex = 0;

const addActive = () => {
    cardContainer[currentIndex].classList.add(classActive);
}

const removeActive = () => {
    cardContainer[currentIndex].classList.remove(classActive);
}

const initImageAction = () => {
    addActive();
    
    rightBt.addEventListener('click', () => {
        removeActive();
        currentIndex = (currentIndex + 1) % cardContainer.length;
        addActive();
    });

    leftBt.addEventListener('click', () => {
        removeActive()
        currentIndex--;
        currentIndex = (currentIndex < 0) ? cardContainer.length - 1 : currentIndex;
        addActive(); 
    });

}

initImageAction();