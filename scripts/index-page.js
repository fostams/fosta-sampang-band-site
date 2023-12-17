// Comments Array
let comments = [
    {
        avatar: "./assets/images/avatar-placeholder.png",
        name: "Connor Walton",
        timestamp: "02/17/2021",
        commentBody: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what is and what it contains."
    },
    {
        avatar: "./assets/images/avatar-placeholder.png",
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        commentBody: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        avatar: "./assets/images/avatar-placeholder.png",
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        commentBody: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

// Re-Render to Page All Comments from Comment Array
window.addEventListener("DOMContentLoaded", updateComments);

// Display Default Comment Array
function commentArray(commentsObj) {
    const commentsArr = commentsObj.map((commentElem) => {
        // Create <div class="comment__default">
        const commentDefault = document.createElement("div");
        commentDefault.setAttribute("class", "comment__default");

        // Create comment__default child <img class="comment__default-avatar" src="../assets/images/Mohan-muruge.jpg">
        const avatar = document.createElement("img");
        avatar.setAttribute("class", "comment__default-avatar");
        avatar.setAttribute("src", commentElem.avatar);
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
        name.innerText = commentElem.name;
        commentHeading.appendChild(name);

        // Create comment__heading child <p class="comment__timestamp">
        const timestamp = document.createElement("p");
        timestamp.setAttribute("class", "comment__timestamp");
        timestamp.innerText = commentElem.timestamp;
        commentHeading.appendChild(timestamp);

        // Create comment__text child <p class="comment__body">
        const commentBody = document.createElement("p");
        commentBody.setAttribute("class", "comment__body");
        commentBody.innerText = commentElem.commentBody;
        commentText.appendChild(commentBody);

        return commentDefault;
    });

    return commentsArr;
}

// Submit Using Add Event Listener
const commentForm = document.getElementById("commentForm");
commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewComment(e);
    updateComments();
})

// Construct New Comment Object
function createNewComment(e) {
    const newComment = {
        avatar: "./assets/images/avatar-placeholder.png",
        name: e.target.name.value,
        timestamp: new Date().toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }),
        commentBody: e.target.comment.value
    };

    // Add the new comment to the beginning of the comments
    comments.unshift(newComment);
}

// called after creating new comment
function updateComments() {
    const commentsDefault = document.querySelector(".comments__default");

    // Clears Input Fields After Submitting New Comment
    document.querySelector('#name').value = "";
    document.querySelector('#comment').value = "";

    // Clears All Comments From Comment Array (commentsDefault)
    commentsDefault.innerHTML = "";

    commentArray(comments).forEach(comment => commentsDefault.appendChild(comment));
}