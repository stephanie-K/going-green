# going-green
This is a personal project. 
I'm designing an application to help exploring various possibilities when you are planning green changes in your house or garden.
This is to get a better idea of what to expect, and decide if these changes are worth doing without checking various sources of information, as it would all be in one place.

---

## Design goals
- Ease of use for expert users but also for users with little experience of apps
- Give a green feel visual, but still accommodate colour-blind users
- Start with UK users but extends further with wider geographical data
- Choice of French or English
- Responsive application so you can use it on a mobile or a desktop

---

##Technical aspects
I'm using Bootstrap and a mobile first design approach.


The various components will be adapted so they look as good as possible on various screens sizes.
If a GPS is available on the device then it could be used to calculate the potential amount of solar energy according to the location.


This will be a [Progressive Wep App](https://developers.google.com/web/progressive-web-apps/):

- Reliable - Load instantly and never show the downasaur, even in uncertain network conditions
- Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling
- Engaging - Feel like a natural app on the device, with an immersive user experience

This is using Node.js, EJS, Sails, SASS, LESS, 
