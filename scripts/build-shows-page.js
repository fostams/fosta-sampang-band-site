import {BandSiteApi} from "./band-site-api.js";

const bandSiteApi = new BandSiteApi("54399520-e616-4117-b2b4-05f395aafd4a");
const comments = bandSiteApi.getShows();
console.log(comments)

window.addEventListener(("DOMContentLoaded"), createShowArray);

const showsContainer = document.querySelector(".shows__container");
let selectedShow = null;

function createShowArray() {
    bandSiteApi.getShows().then(shows => {
        shows.forEach((showElem) => {
            // Format date
            const showDate = new Date(showElem.date);
            const dateFormat = showDate.toLocaleDateString('en-US', { 
                weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' 
            }).replace(/,/, '');

            const venue = showElem.place;
            
            // Create <div class="show">
            const show = document.createElement("div");
            show.setAttribute("class", "show");

            // 1a. Create show child <div class="show__container"> for DATE
            const containerDate = document.createElement("div");
            containerDate.setAttribute("class", "show__container");
            show.appendChild(containerDate);

            // 1b. Create show__container child <p class="show__title"> for DATE
            const titleDate = document.createElement("p");
            titleDate.setAttribute("class", "show__title");
            titleDate.innerText = "DATE";
            containerDate.appendChild(titleDate);

            // 1c. Create show__container child <p class="show__info"> for DATE
            const infoDate = document.createElement("p");
            infoDate.setAttribute("class", "show__info-date");
            infoDate.innerText = showElem.date;
            containerDate.appendChild(infoDate);

            // 2a. Create show child <div class="show__container"> for VENUE
            const containerVenue = document.createElement("div");
            containerVenue.setAttribute("class", "show__container");
            show.appendChild(containerVenue);

            // 2b. Create show__container child <p class="show__title"> for VENUE
            const titleVenue = document.createElement("p");
            titleVenue.setAttribute("class", "show__title");
            titleVenue.innerText = "VENUE";
            containerVenue.appendChild(titleVenue);

            // 2c. Create show__container child <p class="show__info"> for VENUE
            const infoVenue = document.createElement("p");
            infoVenue.setAttribute("class", "show__info");
            infoVenue.innerText = showElem.venue;
            containerVenue.appendChild(infoVenue);

            // 3a. Create show child <div class="show__container"> for LOCATION
            const containerLocation = document.createElement("div");
            containerLocation.setAttribute("class", "show__container");
            show.appendChild(containerLocation);

            // 3b. Create show__container child <p class="show__title"> for LOCATION
            const titleLocation = document.createElement ("p");
            titleLocation.setAttribute("class", "show__title");
            titleLocation.innerText = "LOCATION";
            containerLocation.appendChild(titleLocation);

            // 3c. Create show__container child <p class="show__info"> for LOCATION
            const infoLocation = document.createElement("p");
            infoLocation.setAttribute("class", "show__info");
            infoLocation.innerText = showElem.location;
            containerLocation.appendChild(infoLocation);
            
            // Create Ticket Button

            const ticketsBtn = document.createElement("button");
            ticketsBtn.setAttribute("class", "show__button");
            ticketsBtn.setAttribute("type", "submit");
            ticketsBtn.setAttribute("id", "ticketsBtn");
            ticketsBtn.innerText = "BUY TICKETS";
            show.appendChild(ticketsBtn);

            show.addEventListener("click", function () {
                if (selectedShow) {
                    selectedShow.style.backgroundColor = "";
                }
                show.style.backgroundColor = "#E1E1E1";
                selectedShow = show;
            });

            document.addEventListener("click", function (event) {
                if (!event.target.closest(".show")) {
                    if (selectedShow) {
                        selectedShow.style.backgroundColor = "";
                        selectedShow = null;
                    }
                }
            });

            document.querySelector('.shows__container').appendChild(show);

            infoDate.innerText = dateFormat;
            infoVenue.innerText = venue;
        });
    });
}