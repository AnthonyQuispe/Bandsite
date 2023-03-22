let comment = [
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

function displayComment(comments) {
  // Created a variable which .comment_bottom
  const commentBottom = document.querySelector(".comment__bottom");

  // Comment Bottom Div
  const commentBottomDiv = document.createElement("div");
  commentBottomDiv.classList.add("comment__bottom--comments");

  // Comment Bottom Div Left
  const commentBottomLeft = document.createElement("div");
  commentBottomLeft.classList.add("comment__bottom--left");

  const avatar = document.createElement("img");
  avatars.classList.add("comment__avatar");
  avatars.setAttribute("src", "/assets/images/Mohan-muruge.jpg");

  // Comment Bottom Div Right
  const commentBottomRight = document.createElement("div");
  commentBottomRight.classList.add("comment__bottom--right");

  commentBottom.appendChild(commenBottomDiv);
}
