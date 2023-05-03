const btLetters = document.getElementById('change-sz');
const primarySize = '2rem';
const secundarySize = '4rem';
let changeSize = false;

const initChangeLetters = () => {

    btLetters.addEventListener('click', () => {
        const letters = document.getElementById('letter-change-sz');
        changeSize = !changeSize;
        letters.style.fontSize = (changeSize) ? secundarySize : primarySize;
    });
}

initChangeLetters();