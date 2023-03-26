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
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/766650868&color=%23302629&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
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

//Insert Sections after hero Section
document.querySelector(".hero").insertAdjacentElement("afterend", showsSection);

const showsTitle = document.createElement("h2");
showsTitle.className = "shows__Title";
showsTitle.textContent = "Shows";
showsSection.appendChild(showsTitle);

// Shows Array
const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: " San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021 ",
    venue: "Pier 3 East",
    location: " San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge",
    location: " San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021  ",
    venue: "Hyatt Agency",
    location: " San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021 ",
    venue: "Moscow Center",
    location: " San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021  ",
    venue: "Press Club",
    location: " San Francisco, CA",
  },
];

function updateShows(shows) {
  //shows Container
  const showsContainers = document.createElement("div");
  showsContainers.classList.add("shows__container");

  //shows dateContainer
  const showsDateContainers = document.createElement("div");
  showsDateContainers.classList.add("shows__date--container");
  showsContainers.appendChild(showsDateContainers);

  //shows Date Label
  const dateLabel = document.createElement("p");
  dateLabel.innerText = "Date:";
  dateLabel.classList.add("shows__label");
  showsDateContainers.appendChild(dateLabel);

  //shows Date
  const date = document.createElement("p");
  date.innerText = shows.date;
  date.classList.add("shows__date");
  showsDateContainers.appendChild(date);

  //shows venueContainer
  const showsVenueContainers = document.createElement("div");
  showsVenueContainers.classList.add("shows__Venue--container");
  showsContainers.appendChild(showsVenueContainers);

  //shows Venue Label
  const venueLabel = document.createElement("p");
  venueLabel.innerText = "Venue:";
  venueLabel.classList.add("shows__label");
  showsVenueContainers.appendChild(venueLabel);

  //shows Venue
  const venue = document.createElement("p");
  venue.innerText = shows.venue;
  venue.classList.add("shows__venue");
  showsVenueContainers.appendChild(venue);

  //location venueContainer
  const showsLocationContainers = document.createElement("div");
  showsLocationContainers.classList.add("shows__Venue--container");
  showsContainers.appendChild(showsLocationContainers);

  //shows location Label
  const locationLabel = document.createElement("p");
  locationLabel.innerText = "Location:";
  locationLabel.classList.add("shows__label");
  showsLocationContainers.appendChild(locationLabel);

  //Location Venue
  const location = document.createElement("p");
  location.innerText = shows.location;
  location.classList.add("shows__location");
  showsLocationContainers.appendChild(location);

  //location buttonContainer
  const showsButtonContainers = document.createElement("div");
  showsButtonContainers.classList.add("shows__button--container");
  showsContainers.appendChild(showsButtonContainers);

  //button
  const button = document.createElement("button");
  button.classList.add("shows__button");
  button.type = "submit";
  button.value = "submit";
  button.innerText = "Buy Ticket";
  showsContainers.appendChild(button);

  //Divider
  const divider = document.createElement("hr");
  divider.classList.add("divider");
  showsContainers.appendChild(divider);

  return showsContainers;
}

for (let i = 0; i < shows.length; i++) {
  const show = shows[i];
  const showElement = updateShows(show);
  showsSection.appendChild(showElement);
}
