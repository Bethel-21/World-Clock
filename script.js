function updateTimeDate() {
  let dateElement = document.querySelector(".addis-ababa");
  let addisDate = moment().format("MMMM Do YYYY");
  dateElement.innerHTML = addisDate;

  let timeElement = document.querySelector("#addis-ababa");
  let addisTime = moment
    .tz("Africa/Addis_Ababa")
    .format("h:mm:ss [<small>AM</small>]");
  timeElement.innerHTML = addisTime;

  let dateElementNext = document.querySelector(".london-date");
  let londonDate = moment().format("MMMM Do YYYY");
  dateElementNext.innerHTML = londonDate;

  let timeElementNext = document.querySelector("#london");
  let londonTime = moment
    .tz("Europe/London")
    .format("h:mm:ss [<small>AM</small>]");
  timeElementNext.innerHTML = londonTime;
}

updateTimeDate();
setInterval(updateTimeDate, 1000);
