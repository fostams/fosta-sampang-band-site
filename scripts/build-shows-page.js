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
            const showDate = new Date(showElem.date);
            const dateFormat = showDate.toLocaleDateString('en-US', { 
                weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' 
            }).replace(/,/, '');

            const venue = showElem.place;
            
            const show = document.createElement("div");
            show.setAttribute("class", "show");

            const containerDate = document.createElement("div");
            containerDate.setAttribute("class", "show__container");
            show.appendChild(containerDate);

            const titleDate = document.createElement("p");
            titleDate.setAttribute("class", "show__title");
            titleDate.innerText = "DATE";
            containerDate.appendChild(titleDate);

            const infoDate = document.createElement("p");
            infoDate.setAttribute("class", "show__info-date");
            infoDate.innerText = showElem.date;
            containerDate.appendChild(infoDate);

            const containerVenue = document.createElement("div");
            containerVenue.setAttribute("class", "show__container");
            show.appendChild(containerVenue);

            const titleVenue = document.createElement("p");
            titleVenue.setAttribute("class", "show__title");
            titleVenue.innerText = "VENUE";
            containerVenue.appendChild(titleVenue);

            const infoVenue = document.createElement("p");
            infoVenue.setAttribute("class", "show__info");
            infoVenue.innerText = showElem.venue;
            containerVenue.appendChild(infoVenue);

            const containerLocation = document.createElement("div");
            containerLocation.setAttribute("class", "show__container");
            show.appendChild(containerLocation);

            const titleLocation = document.createElement ("p");
            titleLocation.setAttribute("class", "show__title");
            titleLocation.innerText = "LOCATION";
            containerLocation.appendChild(titleLocation);

            const infoLocation = document.createElement("p");
            infoLocation.setAttribute("class", "show__info");
            infoLocation.innerText = showElem.location;
            containerLocation.appendChild(infoLocation);
            
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