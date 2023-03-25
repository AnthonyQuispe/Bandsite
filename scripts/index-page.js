const commentSection = document.querySelector(".comment");
const commentBottom = document.createElement("div");
commentBottom.classList.add("comment__bottom");
commentSection.appendChild(commentBottom);

const comments = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    text: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
  },
];

function updateComment(comment) {
  //Comment Container
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment__container");

  //Divider
  const divider = document.createElement("hr");
  divider.classList.add("divider");
  commentContainer.appendChild(divider);

  const commentContainerInfo = document.createElement("div");
  commentContainerInfo.classList.add("comment__container--info");
  commentContainer.appendChild(commentContainerInfo);

  //Avatar Container
  const commentAvatarContainer = document.createElement("div");
  commentAvatarContainer.classList.add("comment__container--left");
  commentContainerInfo.appendChild(commentAvatarContainer);
  //Avatar
  const avatars = document.createElement("img");
  avatars.className = "comment__avatars";
  commentAvatarContainer.appendChild(avatars);

  //Comment text Container
  const commentContainerTop = document.createElement("div");
  commentContainerTop.classList.add("comment__container--top");
  commentContainerInfo.appendChild(commentContainerTop);

  //Comment name Container
  const commentContainerTopText = document.createElement("div");
  commentContainerTopText.classList.add("comment__container--top--text");
  commentContainerTop.appendChild(commentContainerTopText);

  const name = document.createElement("p");
  name.innerText = comment.name;
  name.classList.add("comment__container--name");
  commentContainerTopText.appendChild(name);

  const time = document.createElement("p");
  time.innerText = comment.timestamp;
  time.classList.add("comment__container--time");
  commentContainerTopText.appendChild(time);

  //Comment Container Bottom
  const commentContainerBottom = document.createElement("div");
  commentContainerBottom.classList.add("comment__container--bottom");
  commentContainerTop.appendChild(commentContainerBottom);

  const text = document.createElement("p");
  text.innerText = comment.text;
  text.classList.add("comment__container--text");
  commentContainerBottom.appendChild(text);

  return commentContainer;
}

function renderComment() {
  const mycommentsEl = document.querySelector(".comment__bottom");

  // Clear the old comments so it does not run when there is a new comment
  mycommentsEl.innerHTML = "";

  comments.forEach((comment) => {
    const newComment = updateComment(comment);
    mycommentsEl.appendChild(newComment);
  });
}

function commentFormSubmit(event) {
  event.preventDefault();
  console.log(event.target.name.value);
  console.log(event.target.text.value);

  const commentData = {
    name: event.target.name.value,
    text: event.target.text.value,
    timestamp: new Date().toLocaleDateString(),
  };

  comments.unshift(commentData);
  renderComment();
}

// Create a variable for Comment Form class
const commentForm = document.querySelector("#comment-form");
commentForm.addEventListener("submit", commentFormSubmit);
renderComment();
