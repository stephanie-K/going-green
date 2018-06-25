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

// called onload of the index page (at the moment this is in layout in the body tag, so called on any page...)
// TODO handle no local storage available (cookies? or else)
function updateIndexView(){
  if (typeof(Storage) == "undefined") {
    //   TODO Sorry! No Web Storage support..
  } else {
        // if no values, then initialise
        if (!localStorage.numberHen) {
          localStorage.numberHen = 1;
            }
        if(!localStorage.numberOfPerson) {
          localStorage.numberOfPerson = 1;
            }
        if (!localStorage.location) {
          localStorage.location = "Select a location";
            }
        // update the view from previous values in the session
        updateHenView(localStorage.numberHen);
        updateSolarView(localStorage.location);
        updateWaterView(localStorage.numberOfPerson);
        // reopen the tabs that were open before in the session
        if (localStorage.henexpanded == 'open'){
          $('#collapsehen').addClass('in');
          }
        if (localStorage.solarexpanded == 'open'){
          $('#collapsesolar').addClass('in');
          }
        if (localStorage.waterexpanded == 'open'){
          $('#collapsewater').addClass('in');
          }
        if (localStorage.growexpanded == 'open'){
          $('#collapsegrow').addClass('in');
          }
        if (localStorage.emailexpanded == 'open'){
          $('#collapseemail').addClass('in');
          }
      }
}



/* ********************************************** CHICKEN ***************************************************** */
//TODO error message if bad input (Usability testing needed for this) - if press 'enter' this closes the section.... to fix
function minushen(){
  var henNb = parseInt(document.getElementById("number-of-hens").value,10);
  if (henNb >= 2) { // can't become less than 1 - the default value
    henNb-- ;
    updateHenView (henNb)
  } 
}

//TODO error message if bad input (Usability testing needed for this)
function plushen(){
  var henNb = parseInt(document.getElementById("number-of-hens").value,10);
  if (henNb < 0) { // to catch negative numbers entered by the user
    document.getElementById("number-of-hens").value = 1;
    localStorage.numberHen = 1;
  } else {
    henNb++ ;
    updateHenView(henNb);
  }
}

function resethen(){
  updateHenView(1);// that's the default value
} 

function updateHenView(nb){
  localStorage.numberHen = nb;
  unitSelected = currentUnit();
  if (unitSelected === "metric") {
     localStorage.spaceToRoam = nb * SPACE_FOR_RUNNING_METER;
     localStorage.spaceForCoop = nb * SPACE_FOR_COOP_METER;
   } else {
     localStorage.spaceToRoam = nb * SPACE_FOR_RUNNING_FEET;
     localStorage.spaceForCoop = nb * SPACE_FOR_COOP_FEET;
   }
  localStorage.totalSpace = parseInt(localStorage.spaceForCoop,10) + parseInt(localStorage.spaceToRoam, 10);
  localStorage.numberOfEggs = nb * EGGS_PER_HEN;
  $('#number-of-hens').val(localStorage.numberHen);
  document.getElementById("space-to-roam").innerHTML = localStorage.spaceToRoam;
  document.getElementById("space-for-coop").innerHTML = localStorage.spaceForCoop;
  document.getElementById("total-space").innerHTML = localStorage.totalSpace;
  document.getElementById("number-of-eggs").innerHTML = localStorage.numberOfEggs;
}

function showLessHen () {
  $('#more-hen').hide();
  $('#less-hen').show();
}

function showMoreHen () {
  $('#more-hen').show();
  $('#less-hen').hide();

}
/* ************************************************* WATER **************************************************** */

//TODO error message if bad input (Usability testing needed for this) - if press 'enter' this closes the section.... to fix
function minusperson(){
  var personNb = parseInt(document.getElementById("number-of-person").value,10);
  if (personNb >= 2) { // can't become less than 1 - the default value
    personNb-- ;
    updateWaterView (personNb)
  } 
}

//TODO error message if bad input (Usability testing needed for this)
function plusperson(){
  var personNb = parseInt(document.getElementById("number-of-person").value,10);
  if (personNb < 1) { // to catch negative numbers entered by the user and no person 
    document.getElementById("number-of-person").value = 1;
    localStorage.numberOfPerson = 1;
  } else {
    personNb++ ;
    updateWaterView(personNb);
  }
}

function resetperson(){
  updateWaterView(1);
} 

function updateWaterView(nb){
  localStorage.numberOfPerson = nb;
  localStorage.waterSaved = nb * WATER_SAVED_PER_PERSON;
  document.getElementById("number-of-person").value = localStorage.numberOfPerson;
  document.getElementById("water-saved").innerHTML = localStorage.waterSaved;
}

function showLessWater () {
  $('#more-water').hide();
  $('#less-water').show();
}

function showMoreWater () {
  $('#more-water').show();
  $('#less-water').hide();
}

/* ************************************************* SOLAR PANELS **************************************************** */
function showLessSolar () {
  $('#more-solar').hide();
  $('#less-solar').show();
}

function showMoreSolar () {
  $('#more-solar').show();
  $('#less-solar').hide();
}

function updateSolarView(loc){
  langSelected = currentLanguage();
  localStorage.location = loc;
  elementSolarResult = document.getElementById("solarResult");

  if (loc !== 'Select a location') {
    $('#solarText').show();
    switch(loc) {
      case 'England':
            elementSolarResult.innerHTML= 3800;
            break;
      case 'Northern Ireland':
            elementSolarResult.innerHTML = 3400;
            break;
      case 'Scotland':
            elementSolarResult.innerHTML = 3200;
            break;
      case 'Wales':
            elementSolarResult.innerHTML= 3800;
            break;    
    }
  }
  
  if (langSelected == 'fr') {
    switch(loc) {
      case 'England':
          document.getElementById("dropdownSolar").innerHTML = 'Angleterre';
          break;
      case 'Northern Ireland':
          document.getElementById("dropdownSolar").innerHTML = 'Irlande du nord';
          break;
      case 'Scotland':
          document.getElementById("dropdownSolar").innerHTML = 'Écosse';
          break;
      case 'Wales':
          document.getElementById("dropdownSolar").innerHTML = 'Pays de Galles';
          break;
      case 'Select a location':  
          document.getElementById("dropdownSolar").innerHTML = 'Choisir une région';
          break;
      }
    } else {
              document.getElementById("dropdownSolar").innerHTML = localStorage.location;
      }
}


/* ************************************************* Grow Your Own **************************************************** */


/* ************************************************* Email the results ************************************************** */