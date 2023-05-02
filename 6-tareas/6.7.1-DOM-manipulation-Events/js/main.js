const btChangeColor = document.getElementById('BG-action');
let darkModeActive = false;

const initManipulation = () => {

    btChangeColor.addEventListener('click', () => {
        darkModeActive = !darkModeActive;
        const bodyPage = document.body;
        bodyPage.style.backgroundColor = (darkModeActive) ? '#000000' : '#ffffff';
    });
}

initManipulation();