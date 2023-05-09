const contactList = document.querySelector('#contacts-ul');
const searchingInput = document.getElementById('studentInput');
let contacts = [];

function renderContacts(contactsArray) {
    let i = 0;
    while(i < contactsArray.length) {
        const li = document.createElement('li');
        const cardDiv = document.createElement('div');
        const photoDiv = document.createElement('div');
        const img = document.createElement('img');
        const textDiv = document.createElement('div');

        //agreger atributos html que necesiten
        cardDiv.classList.add('card');
        photoDiv.classList.add('photo');


        i++;
    }
}

function getDataFromJson() {
    fetch('../../apo/characters.json')
    .then(reponse => reponse.json())
    .then(data => normalizeData(data))
    .then(cleanData => renderContacts(cleanData))
}

function normalizeData(data) {
    for(let i = 0; i < data.length; i++) {
        const newContact = {
            name: data[i].name,
            photo: data[i].image
        }
        contacts.push(newContact);
    }
    return contacts;
}

function catchEvent(event){
    const inputText = event?.target?.value.to
}

searchingInput.addEventListener('keyup', catchEvent);

getDataFromJson();