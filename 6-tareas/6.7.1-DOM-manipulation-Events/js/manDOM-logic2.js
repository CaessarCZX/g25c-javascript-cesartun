const form = document.getElementById('Posts-creator');
const postContainer = document.getElementById('Posts-entries');

let postsList = [];

const updatePostsLists = () => {
    localStorage.setItem('postsList', JSON.stringify(postsList));
}

const renderPostsLists = () => {
    const postsTemplate = postsList.map(post => `<li><p>${post}</p><span><button>Borrar</button></span></li>`).join('');
    postContainer.innerHTML = postsTemplate;
}

const removePostElement = (index) => {
    postsList.splice(index, 1);
    updatePostsLists();
    renderPostsLists();
}

const initPostViewer = () => {
    postsList = JSON.parse(localStorage.getItem('postsList')) ?? [];
    renderPostsLists();

    form.addEventListener('submit',(event) => {
        event.preventDefault();
        const postInput = document.getElementById('entries');
        const postText = postInput.value.trim();
        if (postText) {
            postsList.push(postText);
            updatePostsLists();
            renderPostsLists();
            postInput.value = '';
        }
    });

    postContainer.addEventListener('click', (event) => {
        const postElement = event.target.closest('li');
        const postButton = event.target.closest('button');
        
        if (postButton && postElement && postElement.parentNode === postContainer) {
            const index = [...postContainer.children].findIndex(li => li.classList.contains('Action-li'));
            console.log(index);
            postElement.parentNode.removeChild(postElement);
            removePostElement(index);
        }
        if (postElement && postElement.parentNode === postContainer) {
            postElement.classList.toggle('Action-li');
        }
    });
}

initPostViewer();