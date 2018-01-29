/**
 * Created by ninie on 07/01/2018.
 */


/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the menu icon */
function displayVerticalMenu() {
  $("#navbar").toggleClass("responsive")
}

// ---------------------------------------------------- SETTINGS -----------------------------------------------------//

function changeLanguage() {
  // mySettings is assigned in script tags at the bottom of navbar.ejs, that way I can pass the values of the object in PagesController to the client side
  var newLang = mySettings.selectedLang === "en" ? "fr" : "en"; // swap the languages
  var pathname = window.location.pathname;
  var url = pathname + "?newLanguage=" + newLang;
  window.location.assign(url); // to pass the value back to the server as a URL parameter as I want to refresh the page in that case
  return false; // otherwise it wasn't working on some browser, as onclick on an <a> element was returning the # instead of the URL parameter

}
// Will be change to something that doesn't need to reload the page each time
function changeSystem() {
  // mySettings is assigned in script tags at the bottom of navbar.ejs, that way I can pass the values of the object in PagesController to the client side
  console.log (mySettings.selectedSystem);
  var newSystem = mySettings.selectedSystem === "metric" ? "imperial" : "metric"; // swap the unit 
  var pathname = window.location.pathname;
  var url = pathname + "?newUnit=" + newSystem;
  window.location.assign(url); // to pass the value back to the server as a URL parameter as I want to refresh the page in that case
  return false;
}

//TODO
function changeTheme() {
  // mySettings is assigned in script tags at the bottom of navbar.ejs, that way I can pass the values of the object in PagesController to the client side
 
}



// --------------------------------------------------  INDEX  ----------------------------------------------------- //
const SPACE_FOR_COOP_FEET = 4;
const SPACE_FOR_RUNNING_FEET = 10;
const SPACE_FOR_COOP_METER = 0.5;
const SPACE_FOR_RUNNING_METER = 2;
const EGGS_PER_HEN = 6;
const WATER_SAVED_PER_PERSON = 70;

/* *********************  display of values and buttons function on the index page   **************************** */

//TODO save these values before leaving the page if changes? also will be used to send email
var valuesTable = {

  numberHen: 0,
  spaceToRoam: 0,
  spaceForCoop: 0 ,
  totalSpace: 0,
  numberOfEggs: 0,
  numberOfPerson: 1,
  waterSaved: 0,
  location: "unknown"

};

/* ******************** chickens *******************************/
//TODO error message if bad input - if enter en return close the section.... to fix
function minushen(){
  var henNb = parseInt(document.getElementById("number-of-hens").value,10);
  if (henNb >= 1) {
    henNb-- ;
    updateHenView (henNb)
  } 
}

function plushen(){
  var henNb = parseInt(document.getElementById("number-of-hens").value,10);
  if (henNb < 0) { // to catch negative numbers entered by the user
    document.getElementById("number-of-hens").value = 0;
    valuesTable.numberHen = 0;
  } else {
    henNb++ ;
    updateHenView(henNb);
  }
}

function resethen(){
  updateHenView(0);
} 

function updateHenView(nb){
  valuesTable.numberHen = nb;
  if (mySettings.selectedSystem === "metric") {
    valuesTable.spaceToRoam = nb * SPACE_FOR_RUNNING_METER;
    valuesTable.spaceForCoop = nb * SPACE_FOR_COOP_METER;
  } else {
    valuesTable.spaceToRoam = nb * SPACE_FOR_RUNNING_FEET;
    valuesTable.spaceForCoop = nb * SPACE_FOR_COOP_FEET;
  }
  valuesTable.totalSpace = valuesTable.spaceForCoop + valuesTable.spaceToRoam;
  valuesTable.numberOfEggs = nb * EGGS_PER_HEN;
  document.getElementById("number-of-hens").value = valuesTable.numberHen;
  document.getElementById("space-to-roam").innerHTML = valuesTable.spaceToRoam;
  document.getElementById("space-for-coop").innerHTML = valuesTable.spaceForCoop;
  document.getElementById("total-space").innerHTML = valuesTable.totalSpace;
  document.getElementById("number-of-eggs").innerHTML = valuesTable.numberOfEggs;
}

function showLessHen () {
  elementMore = document.getElementById("more-hen");
  elementLess = document.getElementById("less-hen");
  elementMore.style = "display: none";
  elementLess.style = "display: block";
}

function showMoreHen () {
  elementMore = document.getElementById("more-hen");
  elementLess = document.getElementById("less-hen");
  elementMore.style = "display: block";
  elementLess.style = "display: none";
}
/* ******************** water *******************************/
function minusperson(){
  var personNb = parseInt(document.getElementById("number-of-person").value,10);
  if (personNb >= 2) {
    personNb-- ;
    updateWaterView (personNb)
  } 
}

function plusperson(){
  var personNb = parseInt(document.getElementById("number-of-person").value,10);
  if (personNb < 1) { // to catch negative numbers entered by the user and no person 
    document.getElementById("number-of-person").value = 1;
    valuesTable.numberOfPerson = 1;
  } else {
    personNb++ ;
    updateWaterView(personNb);
  }
}

function resetperson(){
  updateWaterView(1);
} 

function updateWaterView(nb){
  valuesTable.numberOfPerson = nb;
  valuesTable.waterSaved = nb * WATER_SAVED_PER_PERSON;
  document.getElementById("number-of-person").value = valuesTable.numberOfPerson;
  document.getElementById("water-saved").innerHTML = valuesTable.waterSaved;
}

function showLessWater () {
  elementMore = document.getElementById("more-water");
  elementLess = document.getElementById("less-water");
  elementMore.style = "display: none";
  elementLess.style = "display: block";
}

function showMoreWater () {
  elementMore = document.getElementById("more-water");
  elementLess = document.getElementById("less-water");
  elementMore.style = "display: block";
  elementLess.style = "display: none";
}