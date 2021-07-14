# Roundabout
🔄 Hack-The-Fog 2.0 Hackathon Project by "Wasabi-jpg", "Warder3", and "imatomster"!

> Teens often struggle with planning meetup times. With Roundabout, reduce your stress and find out how close your friends are to the gathering location. Receive helpful info such as vaccination status.

More information can be found in our `README.md` in the docs folder and the following links!

- [HTF Devpost](https://devpost.com/software/roundabout-15tjze?ref_content=my-projects-tab&ref_feature=my_projects)

- [YouTude Demo](https://www.youtube.com/watch?v=RRYLrw9YdNw)

# Devpost Description
## 🤩 Inspiration
Motivated by the **hardships** of the past year, we wanted to reunite with an app that *safely* facilitates outdoor gatherings. We all miss our people and amigos and with COVID-19 ***rounding*** to an end soon, it's ***about*** time that we can safely proceed with human connection.

Roundabout captures the essence of our goals and has even brought us (the team) together for this online hackathon!

## ⚙️ What it does
Roundabout helps you locate your friends in relation to a proposed destination.  Along with vaccination and travel status, the app shows how long it will take for each of your friends to arrive, allowing you to plan accordingly. If certain friends are not yet vaccinated, you can safely steer away accordingly.

**Features (finished by end of Hackathon):**
- ➡️ Navbar with routing to home page, about, menu, profile, and login / signup 
- 🧑‍🤝‍🧑 Friends List with markers to show vaccination status and on-the-way
- 🗺️ Integrated map with satellite, terrain, map and in-person view
- 🔎 Search bar to locate and place marker on designated location
- 📈 Connected Sashido Database!!!!!!
- 👨 Unique users with IDs, username, password, email, phone, create date, vaccination info, profile status
- 🔄 Refresh to ideally track location of each user


## 🔨 How we built it
We split our group into 3 teams, each focusing on a specific component of the project!

**✏️ Design (Adobe Photoshop and Canva)**:   
Using the the tools mentioned above, we modeled the various pages, icons, logos, and images to be displayed on Roundabout. We templated page layout designs and incorporated thematic color schemes that represented the purity and balance of the meetups we wanted to organize through Roundabout. 

**Frontend (React, HTML, CSS, JS)**:  
Communicating with the design team, we brought these prototypes to life through React, CSS, and HTML. In addition to the aesthetics, we deployed and integrated APIs including Google Maps, Google Places, and Google Geocode to enhance the user experience.  

**🔙 Backend (express.js, node.js, JS, Sashido)**:   
Working closely with `Sashido`, we successfully connected the frontend of our project to a serverless database where we could store user information and uniquely generated session IDs. Thanks to `express.js`, we were able to create backend routes and connect it to the frontend through `Axios`, allowing us to send signup information and access login credentials.

## 🚧 Challenges we ran into
Coming into this hackathon, we only had a rough idea of how React worked, and for one of us, it was their first time with React! We hoped to aim for an aesthically pleasing app, but we truly felt that we were lacking in depth.

Being that this was the first time any of us has touched a backend or APIs before, we struggled heavily getting the technologies to play nice with us. After many Stack Overflow posts, we managed to get our app to work but not before *losing our minds* to documentation. Connecting to `Sashido`, let alone learning `express.js`,  was incredibly frustrating as we rushed to learn how exactly backend worked in two days. YouTube was our best friend and after research and sacrificing sleep, we managed to have a brief understanding of backend. More importantly, **WE CONNECTED TO SASHIDO!!!**

## 🎉 Accomplishments that we're proud of
We are extremely proud of completing our first ever hackathon and we enjoyed ourselves very much. Our app turned out great with the intricate UI/UX design, working components and APIs, along with a functioning login and registration page connecting to a backend using `Sashido` technologies. We love `Sashido` very much.

## 💭 What we learned
Overall, we have learned to work together better as a team, allocating tasks and communicating clearly about problems and updates. Yelling `git pull` and `git push` made the experience infinitely better and exposed us to the world of collaborative coding. We learned React, how to use Git, express.js, how to install APIs, how to import fonts, how to connect to Sashido, and most importantly, we learned how to *center a div*. 

## 🔮 What's next for Roundabout
We would love to include additional information gathering techniques and we hope to implement a method of planning meetups directly on the app for a simple, consolidated view to meet the needs of any event organizer. Thanks to the hackathon, we are now more motivated than ever and will continue to work on the project to accomplish our initial goals.  

Although we ran out of time, we wanted to use Sashido's LiveServer API to establish a websocket connection. This way, we could get realtime updates as our friends were nearby and could rely it back to users through push notifications.

We also thought about using ML/AI to predict meeting spots, as sometimes we have patterns with meeting spots, depending on which friends that we meet with. We might not know, but an AI might be able to give recommendations on that.  

Finally, we hope to address COVID-19 concerns and have integrate an AI maybe that can verify a vaccination card when given an image through user uploads.

All of this is in store for Roundabout as we hope to continue learning and hacking away in foggy San Francisco.