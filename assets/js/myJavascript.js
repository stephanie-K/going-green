/**
 * Created by Stéphanie on 07/01/2018.
 */


/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the menu icon */
function displayVerticalMenu() {
  $("#navbar").toggleClass("responsive")
}
// ---------------------------------------------------- COOKIES functions (used for settings ) -----------------------------------------------------//

function cookieNoticeClose() {
  $("#cookienotice").hide();
  createCookie("noCookieNotice", 1, 30) // the user doesn't want to see the cookie notice
}

function createCookie(name, value, days) {
  var expires;

  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60));
      expires = "; expires=" + date.toGMTString();
  } else {
      expires = "";
  }
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ')
          c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
          return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}
// ---------------------------------------------------- SETTINGS functions -----------------------------------------------------//

function currentLanguage() {
  var lang = readCookie("selectedLang")
  return lang ? lang : "en"
}

function changeLanguage() {
  var newLang = currentLanguage() === "en" ? "fr" : "en"; // swap the languages
  var pathname = window.location.pathname;
  createCookie("selectedLang", newLang, 30);
  window.location.assign(pathname); // to pass the value back to the server as a URL parameter as I want to refresh the page in that case
  return false; // otherwise it wasn't working on some browser, as onclick on an <a> element was returning the # instead of the URL parameter
}

function currentUnit() {
  var unit = readCookie("selectedUnit")
  return unit ? unit : "metric"
}

function changeSystem() {
  var newSystem = currentUnit() === "metric" ? "imperial" : "metric"; // swap the unit 
  createCookie("selectedUnit", newSystem, 30);
  return false;
}


function changeTheme(themeName) {
var pathname = window.location.pathname;
  createCookie("selectedTheme", themeName, 30);
  window.location.assign(pathname); // to pass the value back to the server as a URL parameter as I want to refresh the page in that case
  return false;
}



// --------------------------------------------------  INDEX  PAGE ----------------------------------------------------- //
const SPACE_FOR_COOP_FEET = 4;
const SPACE_FOR_RUNNING_FEET = 10;
const SPACE_FOR_COOP_METER = 0.5;
const SPACE_FOR_RUNNING_METER = 2;
const EGGS_PER_HEN = 6;
const WATER_SAVED_PER_PERSON = 70;

/* *********************  display of values and buttons function on the index page   **************************** */

//TODO save these values before leaving the page if changes? also will be used to send email
var valuesTable = {

  numberHen: 1,
  spaceToRoam: 0,
  spaceForCoop: 0 ,
  totalSpace: 0,
  numberOfEggs: 0,
  numberOfPerson: 1,
  waterSaved: 70,
  location: "unknown"

};

/* ********************************************** CHICKEN ***************************************************** */
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
  unitSelected = currentUnit();
  if (unitSelected === "metric") {
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
/* ************************************************* WATER **************************************************** */
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

/* ************************************************* SOLAR PANELS **************************************************** */
function showLessSolar () {
  elementMore = document.getElementById("more-solar");
  elementLess = document.getElementById("less-solar");
  elementMore.style = "display: none";
  elementLess.style = "display: block";
}

function showMoreSolar () {
  elementMore = document.getElementById("more-solar");
  elementLess = document.getElementById("less-solar");
  elementMore.style = "display: block";
  elementLess.style = "display: none";
}

function updateSolarView(loc){
  valuesTable.location = loc;
  elementSolarText = document.getElementById("solarText");
  elementSolarResult = document.getElementById("solarResult");
  document.getElementById("dropdownSolar").innerHTML = valuesTable.location;
  elementSolarText.style = "display: block";
  if (loc == 'Scotland') {
    elementSolarResult.innerHTML = 3200;
  } else { 
          if  (loc == 'Northern Ireland') {
              elementSolarResult.innerHTML = 3400;
              } else {
                      if (loc == 'England' || loc == 'Wales') {
                          elementSolarResult.innerHTML= 3800;
                          } else { 
                                  elementSolarText.style = "display: none";
                                  }
                      }
        }
}

/* ************************************************* Grow Your Own **************************************************** */


/* ************************************************* Email the results ************************************************** */