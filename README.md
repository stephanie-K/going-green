
# Going green
This is a personal project. 
I'm designing an application to help exploring various possibilities when you are planning green changes in your house or garden.
This is to get a better idea of what to expect, and decide if these changes are worth doing without checking various sources of information, as it would all be in one place.

To visit the website under construction: http://going-green.chezleskrus.com/


15/01/18: two languages working : FR and EN

29/01/18: change of unit working - chicken and water sections mostly done

05/02/18: add cookies to memorise the preferences and add a cookie policy

07/02/18: add 2 more colour themes and the possibility to switch from one another - to be revisited later

19/02/18: add solar panel section - save values on index page in local storage - save open panels onbeforeunload but only once (?)


**next steps:**
- work on the email results section
- improve accessibility
- changes to make this a PWA
- work on the 'Grow your own' section
- add more languages


---

## Design goals
- Ease of use for expert users but also for users with little experience of apps
- Give a green feel visual, but still accommodate colour-blind users
- Start with UK users but extends further with wider geographical data
- Choice of French or English
- Responsive application so you can use it on a mobile or a desktop

---

## Technical aspects
I'm using [**Bootstrap**](https://getbootstrap.com/docs/3.3/getting-started/) and a mobile first design approach.


The various components will be adapted so they look as good as possible on various screens sizes.
If a GPS is available on the device then it could be used to calculate the potential amount of solar energy according to the location.


This will be a [Progressive Wep App](https://developers.google.com/web/progressive-web-apps/):

- Reliable - Load instantly and never show the downasaur, even in uncertain network conditions
- Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling
- Engaging - Feel like a natural app on the device, with an immersive user experience


This is using [Node.js](https://nodejs.org/en/), [EJS](http://www.ejs.co/), [Sails](https://sailsjs.com/get-started), [SASS](https://github.com/twbs/bootstrap-sass#d-npm--nodejs), [LESS](https://getbootstrap.com/2.0.4/less.html).



