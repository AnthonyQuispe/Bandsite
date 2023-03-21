// Parent Reference
const parentElement = document.querySelector(".gallery").parentNode;

// Created new Comment Section
const commentSection = document.createElement("section");
commentSection.className = "comment";

//Comment Title
const commentTitle = document.createElement("h2");
commentTitle.className = "comment__title";
commentTitle.textContent = "Join the Conversation";
commentSection.appendChild(commentTitle);

//Top Div
const commentTop = document.createElement("div");
commentTop.className = "comment__top";
commentSection.appendChild(commentTop);

//Top-Left Div
const commentLeft = document.createElement("div");
commentLeft.className = "comment__left";
commentTop.appendChild(commentLeft);

//Top-Right Div
const commentRight = document.createElement("div");
commentRight.className = "comment__right";
commentTop.appendChild(commentRight);

//Form Field Name
const formName = document.createElement("label");
formName.textContent = "NAME";
const nameField = document.createElement("input");
nameField.className = "comment__top--name";
nameField.type = "text";
nameField.name = "name";
nameField.placeholder = "Enter your name";
commentRight.appendChild(formName);
commentRight.appendChild(nameField);

//Form Field Comment
const formComment = document.createElement("label");
formComment.textContent = "COMMENT";
const commentField = document.createElement("input");
commentField.className = "comment__top--comment";
commentField.type = "text";
commentField.name = "name";
commentField.placeholder = "Add a new comment";
commentRight.appendChild(formComment);
commentRight.appendChild(commentField);

//Button
const commentButton = document.createElement("input");
commentButton.className = "comment__top--button";
commentButton.type = "submit";
commentButton.value = "COMMENT";
commentRight.appendChild(commentButton);

//Bottom Div
const commentBottom = document.createElement("div");
commentBottom.className = "comment__bottom";
commentSection.appendChild(commentBottom);

//Insert Comment Section after Gallery Section
document
  .querySelector(".gallery")
  .insertAdjacentElement("afterend", commentSection);
