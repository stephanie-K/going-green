/**
 * Created by ninie on 18/12/2017.
 */
/**
 * PagesController
 *
 * @description :: Controller description
 */

const SPACE_FOR_COOP_FEET = 4;
const SPACE_FOR_RUNNING_FEET = 10;
const SPACE_FOR_COOP_METER = 0.4;
const SPACE_FOR_RUNNING_METER = 1;
const EGGS_PER_HEN = 300;
const WATER_SAVED_PER_PERSON = 70;

// default settings;
var selectedLang = 'en';
var selectedSystem = 'metric'

function changeLanguage (req, res) {
  selectedLang = req.getLocale(); // swap language as only two for now
  if (selectedLang === 'en') {
    selectedLang = 'fr'
    } else {
    selectedLang = 'en'
  }
  req.setLocale (selectedLang);
  window.location.reload(true);
}



function index(req, res) {
  res.view('pages/index', {selectedLang: selectedLang, selectedSystem: selectedSystem});
}

function about(req, res){
   if (selectedLang === 'en') {
     res.redirect('/pages/about_EN'); //, {selectedLang: 'en'});
    } else {
     res.redirect('/pages/about_FR'); //, {selectedLang: 'fr'});
   }
}

function aboutEN(req, res){
  res.view('pages/about_EN', {selectedLang: selectedLang});
}

function aboutFR(req, res) {
  req.setLocale('fr');
  res.view('pages/about_FR', {selectedLang: 'fr'});
}

function design(req, res) {
  res.view('pages/design', {selectedLang: selectedLang});
}

function empty(req, res) {
  res.view('pages/empty_page' ,{selectedLang: selectedLang});
}

function settings(req, res) {
  res.view('pages/settings', {selectedLang: selectedLang});
}






module.exports = {
  index: index,
  aboutEN: aboutEN,
  aboutFR: aboutFR,
  design: design,
  empty: empty,
  settings: settings,
  about: about,
  changeLanguage: changeLanguage
};
