/**
 * Created by ninie on 18/12/2017.
 */
/**
 * PagesController
 *
 * @description :: Controller description
 */

// ---------------------------------------------------- rendering the pages

function genView(view, req, res) {
  // default values
  var settings = {
    selectedLang: "en",
    selectedUnit: "metric",
    selectedTheme: "default",
    noCookieNotice: false
  }
  // if the cookies holds a different value, then assigned it to the settings
  if (req.cookies.selectedLang) {
    settings.selectedLang = req.cookies.selectedLang;
  }
  if (req.cookies.selectedUnit) {
    settings.selectedUnit = req.cookies.selectedUnit;
  }
  if (req.cookies.selectedTheme) {
    settings.selectedTheme = req.cookies.selectedTheme;
  }
  if (req.cookies.noCookieNotice) {
    settings.noCookieNotice = req.cookies.noCookieNotice;
  }

  // setLocale to cookie selected language
  req.setLocale(settings.selectedLang); // overrides so update the lang attribute for the html tag
  res.view(view, {settings: settings}); 
}

function index(req, res) {
  genView('pages/index', req, res); // passing the settings (script in the navbar so on each page)
}

function design(req, res) {
  genView('pages/design', req, res);
}

function about(req, res) {
  genView('pages/about', req, res);
}

function empty(req, res) {
  genView('pages/empty_page', req, res);
}

function settings(req, res) {
  //updateUnit(req); 
  genView('pages/settings', req, res);
}


module.exports = { // only those who can be called from route.js
  index: index,
  about: about,
  design: design,
  empty: empty,
  settings: settings
};
