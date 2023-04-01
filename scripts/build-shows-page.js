// API
const URL = "https://project-1-api.herokuapp.com";
const API_KEY = "?api_key=e83adf2d-1d3f-4330-b2c2-ebafbeee0099";

// Created new Hero Section
const heroSection = document.querySelector(".hero");

//
const heroContainer = document.querySelector(".hero__container");

//Hero Frame Div
const heroFrameBorder = document.createElement("div");
heroFrameBorder.className = "hero__border--frame";
heroContainer.appendChild(heroFrameBorder);

//Hero Frame
const heroFrame = document.createElement("iframe");
heroFrame.className = "hero__frame";
heroFrame.src =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/766650868&color=%23302629&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
heroFrame.allow = "autoplay";

// heroFrame.frameborder = "no";
heroFrameBorder.appendChild(heroFrame);

//Insert Sections after Nav Section

// Created new Hero Section
const showsSection = document.createElement("section");
showsSection.className = "shows";

//Insert Sections after hero Section
document.querySelector(".hero").insertAdjacentElement("afterend", showsSection);

const showsTitle = document.createElement("h2");
showsTitle.classList.add("shows__title", "section-header");
showsTitle.textContent = "Shows";
showsSection.appendChild(showsTitle);

const showsBox = document.createElement("div");
showsBox.classList.add("shows__box");
showsSection.appendChild(showsBox);

// Shows Array
let shows = [];

axios
  .get(`${URL}/showdates${API_KEY}`)
  .then((response) => {
    const shows = response.data;
    console.log(shows);
    for (let i = 0; i < shows.length; i++) {
      const show = shows[i];
      const showElement = updateShows(show);
      showsBox.appendChild(showElement);
    }

    const showsContainerClick = document.querySelectorAll(".shows__container");

    showsContainerClick.forEach((shows) => {
      shows.addEventListener("click", function () {
        showsContainerClick.forEach((card) => {
          card.classList.remove("selected");
        });
        this.classList.add("selected");
      });
    });
  })
  .catch((error) => console.error("Error getting Showtimes Times", error));

function updateShows(shows) {
  //shows Container
  const showsContainers = document.createElement("article");
  showsContainers.classList.add("shows__container");

  //Shows Table
  const showsTable = document.createElement("div");
  showsTable.className = "shows__table";
  showsContainers.appendChild(showsTable);

  //shows dateContainer
  const showsDateContainers = document.createElement("div");
  showsDateContainers.classList.add("shows__date--container");
  showsTable.appendChild(showsDateContainers);

  //shows Date Label
  const dateLabel = document.createElement("p");
  dateLabel.innerText = "Date";
  dateLabel.classList.add("shows__label");
  showsDateContainers.appendChild(dateLabel);

  //shows Date
  const date = document.createElement("p");
  date.innerText = new Date(shows.date).toDateString();
  date.classList.add("shows__date");
  showsDateContainers.appendChild(date);

  //shows venueContainer
  const showsVenueContainers = document.createElement("div");
  showsVenueContainers.classList.add("shows__venue--container");
  showsTable.appendChild(showsVenueContainers);

  //shows Venue Label
  const venueLabel = document.createElement("p");
  venueLabel.innerText = "Venue";
  venueLabel.classList.add("shows__label");
  showsVenueContainers.appendChild(venueLabel);

  //shows Venue
  const venue = document.createElement("p");
  venue.innerText = shows.place;
  venue.classList.add("shows__venue");
  showsVenueContainers.appendChild(venue);

  //location venueContainer
  const showsLocationContainers = document.createElement("div");
  showsLocationContainers.classList.add("shows__location--container");
  showsTable.appendChild(showsLocationContainers);

  //shows location Label
  const locationLabel = document.createElement("p");
  locationLabel.innerText = "Location";
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
  showsTable.appendChild(showsButtonContainers);

  //button
  const button = document.createElement("button");
  button.classList.add("shows__button");
  button.type = "submit";
  button.value = "submit";
  button.innerText = "Buy Tickets";
  showsButtonContainers.appendChild(button);

  //Divider
  const divider = document.createElement("hr");
  divider.classList.add("divider");
  showsContainers.appendChild(divider);

  return showsContainers;
}

for (let i = 0; i < shows.length; i++) {
  const show = shows[i];
  const showElement = updateShows(show);
  showsBox.appendChild(showElement);
}
