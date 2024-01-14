import {BandSiteApi} from "./band-site-api.js";

const bandSiteApi = new BandSiteApi("54399520-e616-4117-b2b4-05f395aafd4a");
const comments = bandSiteApi.getComments();
console.log(comments)

// Re-Render Comments on Page Load
window.addEventListener("DOMContentLoaded", updateComments);

// Display Default Comment Array
function displayComment(commentsObj) {
        // Create <div class="comment__default">
        const commentDefault = document.createElement("div");
        commentDefault.setAttribute("class", "comment__default");

        // Create comment__default child <img class="comment__default-avatar" src="../assets/images/Mohan-muruge.jpg">
        const avatar = document.createElement("img");
        avatar.setAttribute("class", "comment__default-avatar");
        avatar.setAttribute("src", "./assets/images/avatar-placeholder.png"); // set placeholder image, check relative url
        commentDefault.appendChild(avatar);

        // Create comment__default child <div class="comment__text">
        const commentText = document.createElement("div");
        commentText.setAttribute("class", "comment__text");
        commentDefault.appendChild(commentText);

        // Create comment__text child <div class="comment__heading">
        const commentHeading = document.createElement("div");
        commentHeading.setAttribute("class", "comment__heading");
        commentText.appendChild(commentHeading);

        // Create comment__heading child <p class="comment__name">
        const name = document.createElement("p");
        name.setAttribute("class", "comment__name");
        name.innerText = commentsObj.name;
        commentHeading.appendChild(name);

        // Create comment__heading child <p class="comment__timestamp">
        const timestamp = document.createElement("p");
        timestamp.setAttribute("class", "comment__timestamp");
        timestamp.innerText = commentsObj.timestamp;
        commentHeading.appendChild(timestamp);

        // Create comment__text child <p class="comment__body">
        const commentBody = document.createElement("p");
        commentBody.setAttribute("class", "comment__body");
        commentBody.innerText = commentsObj.commentBody;
        commentText.appendChild(commentBody);

        return commentDefault;
}

// Submit Using Add Event Listener
const commentForm = document.getElementById("commentForm");
commentForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Dive Deeper: Reset Previous Error States
    resetErrorStates();

    document.querySelector('#name').value = "";
    document.querySelector('#comment').value = "";

    const newComment = {
        name: e.target.name.value,
        comment: e.target.comment.value
    };

    // Validate Form Fields
    if (validateForm()) {
        // If successful validation, submit form
        await bandSiteApi.postComment(newComment);
        updateComments();
    }
})

const nameInput = document.getElementById("name");
const commentInput = document.getElementById("comment");

function validateForm() {
    let isValid = true;
    
    // Validate Name
    if (!nameInput.value.trim()) {
        isValid = false;
        // setErrorState(nameInput);
        nameInput.classList.add("error");
        console.log("name-input");
    }

    // Validate Comment 
    if (!commentInput.value.trim()) {
        isValid = false;
        // setErrorState(commentInput);
        commentInput.classList.add("error");
        console.log("comment-input");
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
    // displayComment(comments).forEach(comment => commentsDefault.appendChild(comment));
    comments.data.forEach(comment => displayComment(comment));
}

/* This Dive Deeper challenge is bugged and I would love to know how to fix it in a later time!
// Calculate Time Difference and Return Human-Readable Format
function calculateTimeDifference(postTime) {
    const currentTime = new Date();
    const timeDifference = currentTime - postTime;

    const seconds = Math.floor( timeDifference / 1000 );
    const minutes = Math.floor( seconds / 60 );
    const hours = Math.floor( minutes / 60 );
    const days = Math.floor( hours / 24 );

    if (seconds < 60) {
        return seconds + " seconds ago";
    } else if (minutes < 60) {
        return minutes + " minutes ago";
    } else if (hours < 24) {
        return hours + " hours ago";
    } else if (days <= 1) {
        return days + " day ago";
    }
    } else if (days <= 3) {
        return days + " days ago";
    } else {
        const options = {year: "numeric", month: "2-digit", day: "2-digit"};
        return postTime.toLocaleDateString("en-US", options);
    }
} */