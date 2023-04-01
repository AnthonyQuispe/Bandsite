// API
const URL = "https://project-1-api.herokuapp.com";
const API_KEY = "?api_key=e83adf2d-1d3f-4330-b2c2-ebafbeee0099";

const commentSection = document.querySelector(".comment");
const commentBottom = document.createElement("div");
commentBottom.classList.add("comment__bottom");
commentSection.appendChild(commentBottom);

let comments = [];

axios
  .get(`${URL}/comments${API_KEY}`)
  .then((response) => {
    comments = response.data.sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
    displayComment();
  })
  .catch((error) => console.error("comment error", error));

function updateComment(comment) {
  //Comment Container
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment__container");

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
  const date = new Date(comment.timestamp).toLocaleDateString();
  time.innerText = date;
  time.classList.add("comment__container--time");
  commentContainerTopText.appendChild(time);

  //Comment Container Bottom
  const commentContainerBottom = document.createElement("div");
  commentContainerBottom.classList.add("comment__container--bottom");
  commentContainerTop.appendChild(commentContainerBottom);

  const text = document.createElement("p");
  text.innerText = comment.comment;
  text.classList.add("comment__container--text");
  commentContainerBottom.appendChild(text);

  return commentContainer;
}

function displayComment() {
  const mycommentsEl = document.querySelector(".comment__bottom");

  mycommentsEl.innerHTML = "";

  comments.forEach((comment) => {
    const newComment = updateComment(comment);
    mycommentsEl.appendChild(newComment);
  });
}

function commentFormSubmit(event) {
  event.preventDefault();
  console.log(event.target.name.value);
  console.log(event.target.comment.value);

  const commentData = {
    name: event.target.name.value,
    comment: event.target.comment.value,
  };

  axios
    .post(`${URL}/comments${API_KEY}`, commentData)
    .then((response) => {
      // Add the new comment to the beginning of the comments array
      comments.unshift(response.data);
      // Display the updated comments
      displayComment();
    })
    .catch((error) => console.error("Error adding comment", error));

  // Reset the form fields
  event.target.reset();
}

// Create a variable for Comment Form class
const commentForm = document.querySelector("#comment-form");
commentForm.addEventListener("submit", commentFormSubmit);
displayComment();
