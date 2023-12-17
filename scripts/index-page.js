// Comments Array
const commentsArray = [
    {
        avatarImage: "./assets/images/avatar-placeholder.png",
        commentName: "Connor Walton",
        timeStamp: "02/17/2021",
        commentBody: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what is and what it contains."
    },
    {
        avatarImage: "./assets/images/avatar-placeholder.png",
        commentName: "Emilie Beach",
        timeStamp: "01/09/2021",
        commentBody: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        avatarImage: "./assets/images/avatar-placeholder.png",
        commentName: "Miles Acosta",
        timeStamp: "12/20/2020",
        commentBody: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

// Update Comments on page load after DOM contents loaded
window.addEventListener("DOMContentLoaded", updateComments);

// Display Default Comment Array
function createCommentElemArray(commentsObj) {
    const commentsArr = commentsObj.map((commentElem) => {
        const commentDefault = document.createElement("div");
        commentDefault.setAttribute("class", "comment__default");

        const commentAvatar = document.createElement("img");
        commentAvatar.setAttribute("class", "comment__default-avatar");
        commentAvatar.setAttribute("src", commentElem.avatarImage);

        commentDefault.appendChild(commentAvatar);

        const commentText = document.createElement("div");
        commentText.setAttribute("class", "comment__text");
        commentDefault.appendChild(commentText);

        const commentHeading = document.createElement("div");
        commentHeading.setAttribute("class", "comment__heading");
        commentText.appendChild(commentHeading);

        const commentName = document.createElement("p");
        commentName.setAttribute("class", "comment__name");
        commentName.innerText = commentElem.commentName;

        commentHeading.appendChild(commentName);

        const commentTimeStamp = document.createElement("p");
        commentTimeStamp.setAttribute("class", "comment__time-stamp");
        commentTimeStamp.innerText = commentElem.timeStamp;

        commentHeading.appendChild(commentTimeStamp);

        const commentBody = document.createElement("p");
        commentBody.setAttribute("class", "comment__body");
        commentBody.innerText = commentElem.commentBody;

        commentText.appendChild(commentBody);

        return commentDefault;
    });

    return commentsArr;
}