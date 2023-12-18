let showArray = [
    {
        date:"Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date:"Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date:"Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date:"Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date:"Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date:"Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    },
]

window.addEventListener(("DOMContentLoaded"), createShowArray);


let showsContainer = document.querySelector(".shows__container");
let selectedShow = null;

function createShowArray() {
    showArray.map((showElem) => {
        // Create <div class="show">
        let show = document.createElement("div");
        show.setAttribute("class", "show");

        // 1a. Create show child <div class="show__container"> for DATE
        let containerDate = document.createElement("div");
        containerDate.setAttribute("class", "show__container");
        show.appendChild(containerDate);

        // 1b. Create show__container child <p class="show__title"> for DATE
        let titleDate = document.createElement("p");
        titleDate.setAttribute("class", "show__title");
        titleDate.innerText = "DATE";
        containerDate.appendChild(titleDate);

        // 1c. Create show__container child <p class="show__info"> for DATE
        let infoDate = document.createElement("p");
        infoDate.setAttribute("class", "show__info-date");
        infoDate.innerText = showElem.date;
        containerDate.appendChild(infoDate);

        // 2a. Create show child <div class="show__container"> for VENUE
        let containerVenue = document.createElement("div");
        containerVenue.setAttribute("class", "show__container");
        show.appendChild(containerVenue);

        // 2b. Create show__container child <p class="show__title"> for VENUE
        let titleVenue = document.createElement("p");
        titleVenue.setAttribute("class", "show__title");
        titleVenue.innerText = "VENUE";
        containerVenue.appendChild(titleVenue);

        // 2c. Create show__container child <p class="show__info"> for VENUE
        let infoVenue = document.createElement("p");
        infoVenue.setAttribute("class", "show__info");
        infoVenue.innerText = showElem.venue;
        containerVenue.appendChild(infoVenue);

        // 3a. Create show child <div class="show__container"> for LOCATION
        let containerLocation = document.createElement("div");
        containerLocation.setAttribute("class", "show__container");
        show.appendChild(containerLocation);

        // 3b. Create show__container child <p class="show__title"> for LOCATION
        let titleLocation = document.createElement ("p");
        titleLocation.setAttribute("class", "show__title");
        titleLocation.innerText = "LOCATION";
        containerLocation.appendChild(titleLocation);

        // 3c. Create show__container child <p class="show__info"> for LOCATION
        let infoLocation = document.createElement("p");
        infoLocation.setAttribute("class", "show__info");
        infoLocation.innerText = showElem.location;
        containerLocation.appendChild(infoLocation);
        
        // Create Ticket Button

        let ticketsBtn = document.createElement("button");
        ticketsBtn.setAttribute("class", "show__button");
        ticketsBtn.setAttribute("type", "submit");
        ticketsBtn.setAttribute("id", "ticketsBtn");
        ticketsBtn.innerText = "BUY TICKETS";
        show.appendChild(ticketsBtn);

        ticketsBtn.addEventListener("click", function () {
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
        }
    );
}