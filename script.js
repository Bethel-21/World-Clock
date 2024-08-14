function updateTimeDate() {
  let dateElement = document.querySelector(".addis-ababa");
  let addisDate = moment().format("MMMM Do YYYY");
  dateElement.innerHTML = addisDate;

  let timeElement = document.querySelector("#addis-ababa");
  let addisTime = moment
    .tz("Africa/Addis_Ababa")
    .format("h:mm:ss A");
  timeElement.innerHTML = addisTime;

  let dateElementNext = document.querySelector(".london-date");
  let londonDate = moment().format("MMMM Do YYYY");
  dateElementNext.innerHTML = londonDate;

  let timeElementNext = document.querySelector("#london");
  let londonTime = moment
    .tz("Europe/London")
    .format("h:mm:ss A");
  timeElementNext.innerHTML = londonTime;
}

updateTimeDate();
setInterval(updateTimeDate, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if(cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1]

  let updatePlace = document.querySelector(".details");
  updatePlace.innerHTML = `<div class="detail-place">
          <div>
            <h1>${cityName}</h1>
            <p class = "change-color">${cityTime.format("MMMM Do YYYY")}</p>
          </div>
          <div >
            <h1> ${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small>
              
            </h1>
          </div>
        </div> <a href = "index.html"> Back to Home </a>`;
}

let displayElement = document.querySelector("#drop-down-elements");
displayElement.addEventListener("change", updateCity);
