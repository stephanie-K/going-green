/**
 * Created by ninie on 07/01/2018.
 */


/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the menu icon */
function displayVerticalMenu() {
  $("#navbar").toggleClass("responsive")
}



function changeLanguage() {
  // mySettings is assigned in script tags at the bottom of navbar.ejs, that way I can pass the values of the object in PagesController to the client side
  var newLang = mySettings.selectedLang === "en" ? "fr" : "en"; // swap the languages
  var basePage = "http://" + window.location.hostname + ":" + window.location.port + window.location.pathname;
  window.location.assign(basePage + "?newLanguage=" + newLang); // to pass the value back to the server as a URL parameter
}



// --------------------------------------------------  INDEX  ----------------------------------------------------- //
const SPACE_FOR_COOP_FEET = 4;
const SPACE_FOR_RUNNING_FEET = 10;
const SPACE_FOR_COOP_METER = 0.4;
const SPACE_FOR_RUNNING_METER = 1;
const EGGS_PER_HEN = 300;
const WATER_SAVED_PER_PERSON = 70;

/* *********************  display of values and buttons fucntion on the index page   **************************** */
var valuesTable = {

  numberHen: 0,
  spaceToRoam: this.numberHen * SPACE_FOR_RUNNING_METER,
  spaceForCoop: this.numberHen * SPACE_FOR_COOP_METER ,
  totalSpace: this.spaceForCoop + this.spaceToRoam,
  numberOfEggs: this.numberHen * EGGS_PER_HEN

};

function minushen(){
  var henNb = parseInt(document.getElementById("number-of-hens").value,10);
  if (henNb >= 1) {
      document.getElementById("number-of-hens").value = henNb - 1;
  } else {

  }
}

function plushen(){
  var henNb = parseInt(document.getElementById("number-of-hens").value, 10);
  document.getElementById("number-of-hens").value = henNb + 1;
}

function resethen(){
  document.getElementById("number-of-hens").value = 0;
}
