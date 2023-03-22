// Created new Hero Section
const heroSection = document.createElement("section");
heroSection.className = "hero";

//Border Hero Div
const heroBorder = document.createElement("div");
heroBorder.className = "hero__border";
heroSection.appendChild(heroBorder);

const heroAlbum = document.createElement("h3");
heroAlbum.className = "hero__album";
heroAlbum.textContent = "Beautiful Beast Album";
heroSection.appendChild(heroAlbum);

const heroTitle = document.createElement("h2");
heroTitle.className = "hero__title";
heroTitle.textContent = "Queen of Yellow x For The Stings";
heroSection.appendChild(heroTitle);

const heroFrame = document.createElement("iframe");
heroFrame.className = "hero__frame";
heroFrame.src =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/766650868&color=%23302629&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
heroFrame.allow = "autoplay";
// heroFrame.frameborder = "no";
heroSection.appendChild(heroFrame);

//Insert Sections after Nav Section
document
  .querySelector(".header")
  .insertAdjacentElement("afterend", heroSection);

// Created new Hero Section
const showsSection = document.createElement("section");
showsSection.className = "shows";

const shows = [
  {
    Date: "Mon Sept 06 2021",
    Venue: "Ronald",
    Location: " San Francisco, CA",
  },
  {
    Date: "Tue Sept 21 2021 ",
    Venue: "Pier 3 East",
    Location: " San Francisco, CA",
  },
];

//Insert Sections after hero Section
document.querySelector(".hero").insertAdjacentElement("afterend", showsSection);
