import {BandSiteApi} from "./band-site-api.js";

const bandSiteApi = new BandSiteApi("54399520-e616-4117-b2b4-05f395aafd4a");

// Display Default Comment Array
function displayComment(commentsObj) {
        const commentDefault = document.createElement("div");
        commentDefault.setAttribute("class", "comment__default");

        const avatar = document.createElement("img");
        avatar.setAttribute("class", "comment__default-avatar");
        avatar.setAttribute("src", "./assets/images/avatar-placeholder.png");
        commentDefault.appendChild(avatar);

        const commentText = document.createElement("div");
        commentText.setAttribute("class", "comment__text");
        commentDefault.appendChild(commentText);

        const commentHeading = document.createElement("div");
        commentHeading.setAttribute("class", "comment__heading");
        commentText.appendChild(commentHeading);

        const name = document.createElement("p");
        name.setAttribute("class", "comment__name");
        name.innerText = commentsObj.name;
        commentHeading.appendChild(name);

        const timestamp = document.createElement("p");
        timestamp.setAttribute("class", "comment__timestamp");
        timestamp.innerText = new Date(commentsObj.timestamp).toLocaleDateString("en-US");
        commentHeading.appendChild(timestamp);

        const commentBody = document.createElement("p");
        commentBody.setAttribute("class", "comment__body");
        commentBody.innerText = commentsObj.comment;
        commentText.appendChild(commentBody);

        const commentBWrapper = document.createElement("div");
        commentBWrapper.setAttribute("class", "comment__button-wrapper");
        commentText.appendChild(commentBWrapper);

        // Create Like button
        const likeButton = document.createElement('button');
        likeButton.innerText = '🤍';
        likeButton.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation;
            await bandSiteApi.likeComment(comment.id);
            updateComments();
        })
        commentBWrapper.appendChild(likeButton);

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '🗑️';
        deleteButton.addEventListener('click', async(e) => {
            e.preventDefault();
            e.stopPropagation;
            commentDefault.remove();
            await bandSiteApi.deleteComment(comment.id);
        })
        commentBWrapper.appendChild(deleteButton);

        return commentDefault;
        
}

// Submit Using Add Event Listener
const commentForm = document.getElementById("commentForm");
commentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    resetErrorStates();

    const newComment = {
        name: e.target.name.value,
        comment: e.target.comment.value
    };

    // Validate Form Fields
    if (validateForm()) {
        // If successful validation, submit form
        await bandSiteApi.postComment(newComment);
        updateComments();

        document.querySelector('#name').value = "";
        document.querySelector('#comment').value = "";
    }
})

const nameInput = document.getElementById("name");
const commentInput = document.getElementById("comment");

function validateForm() {
    let isValid = true;
    
    // Validate Name
    if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add("error");
    }

    // Validate Comment 
    if (!commentInput.value.trim()) {
        isValid = false;
        commentInput.classList.add("error");
    }

    return isValid;
}

function resetErrorStates() {
    nameInput.classList.remove("error");
    commentInput.classList.remove("error");
}

// Call After Creating New Comment
async function updateComments() {
    const comments = await bandSiteApi.getComments();
    const commentsDefault = document.querySelector(".comments__default");

    // Clear All Comments From Comment Array (commentsDefault)
    commentsDefault.innerHTML = "";
    
    // Create and Append Each New Comment
    comments.data.forEach((comment) => {
        const newComment = displayComment(comment);
        commentsDefault.prepend(newComment);
    });
}

updateComments();