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


function index(req, res) {
  res.view('pages/index');
}

function aboutEN(req, res) {
  res.view('pages/about_EN');
}

function aboutFR(req, res) {
  res.view('pages/about_FR');
}

function design(req, res) {
  res.view('pages/design');
}

function empty(req, res) {
  res.view('pages/empty_page');
}

function settings(req, res) {
  res.view('pages/settings');
}






module.exports = {
  index: index,
  aboutEN: aboutEN,
  aboutFR: aboutFR,
  design: design,
  empty: empty,
  settings: settings
};
