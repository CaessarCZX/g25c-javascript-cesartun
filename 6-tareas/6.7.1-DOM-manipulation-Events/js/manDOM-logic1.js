const btChangeColor = document.getElementById('BG-action');
const whiteColor = '#ffffff';
const blackColor = '#000000';
let darkModeActive = false;

const initDarkMode = () => {

    btChangeColor.addEventListener('click', () => {
        darkModeActive = !darkModeActive;
        const bodyPage = document.body;
        bodyPage.style.backgroundColor = (darkModeActive) ? blackColor : whiteColor;
    });
}

initDarkMode();