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

// Re-Render Comments on Page Load
window.addEventListener("DOMContentLoaded", updateComments);

// Display Default Comment Array
function commentArray(commentsObj) {
    const commentsArr = commentsObj.map((commentElem) => {
        // Create <div class="comment__default">
        const commentDefault = document.createElement("div");
        commentDefault.setAttribute("class", "comment__default");
        commentDefault.style.display = "flex";

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
        commentHeading.style.display = "flex";
        commentHeading.style.flexFlow = "row wrap";
        commentHeading.style.justifyContent = "space-between";
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

    // Dive Deeper: Reset Previous Error States
    resetErrorStates();

    // Validate Form Fields
    if (validateForm()) {
        // If successful validation, submit form
        inputNewComment(e);
        updateComments();
    }
})

function validateForm() {
    let isValid = true;
    
    // Validate Name
    const nameInput = document.getElementById("name");
    if (!nameInput.value.trim()) {
        isValid = false;
        setErrorState(nameInput);
    }

    // Validate Comment
    const commentInput = document.getElementById("comment");
    if (!commentInput.value.trim()) {
        isValid = false;
        setErrorState(commentInput);
    }

    return isValid;
}

function setErrorState(inputElement) {
    inputElement.style.border = "1px solid red";
}

function resetErrorStates() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => {
        element.style.border = "1px solid grey";
    })
}

// Construct New Comment Object
function inputNewComment(e) {
    const newComment = {
        avatar: "./assets/images/avatar-placeholder.png",
        name: e.target.name.value,
        timestamp: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }),
        commentBody: e.target.comment.value
    };

    // Add New Comment to the Top of Comment Array
    comments.unshift(newComment);
}


// Call After Creating New Comment
function updateComments() {
    const commentsDefault = document.querySelector(".comments__default");

    // Clear Input Fields After Submitting New Comment
    document.querySelector('#name').value = "";
    document.querySelector('#comment').value = "";

    // Clear All Comments From Comment Array (commentsDefault)
    commentsDefault.innerHTML = "";
    
    // Create and Append Each New Comment
    commentArray(comments).forEach(comment => commentsDefault.appendChild(comment));
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