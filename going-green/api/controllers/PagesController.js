/**
 * Created by ninie on 18/12/2017.
 */
/**
 * PagesController
 *
 * @description :: Controller description
 */


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


module.exports = {
  index: index,
  aboutEN: aboutEN,
  aboutFR: aboutFR,
  design: design,
  empty: empty
};
