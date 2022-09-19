# Flomo
### Menstrual Cycle Tracking App  

#### Made by Joy Houser, Liat Paradise and Isaac Pure   
      
[Front End Github](https://github.com/BattyBai/flomo-frontend)    
      
[Back End Github](https://github.com/BattyBai/flomo_backend)     
     
### Approach Taken
Initially the group focused on creating an app that would incorporate full CRUD functionality on  a basic level, while also serving as a pragmatic solution to a real problem. We settled on a menstrual tracking app since much of the world’s population experiences menstruation.
We set out to develop the app using a calendar plug-in, which would allow user to view and input menstrual data on specific dates of the month.  The pursuit of calendar functionality was unsuccessfully completed before the project deadline and the decision was made to move on without it. User authorization was also attempted to allow an individual to view their own personal data, but that too was also removed since we could not make it functional.
The team met daily via Zoom/Discord for a morning scrum/meeting to update each other on current and future workflows. A daily checkout meeting was also used to provide progress updates to one another.
Asana was the daily tracker we used to ensure we were all on the same page as far as task deligation and fulfilling requirements. We communicated often to ensure we were all pushing and pulling properly to and from github.
Bootstrap, MUI and vanilla CSS were used to style the site. Django was used to connect the front end React to the backend postgreSQL database. We employed the use of modals for our Add and Edit functions to keep tastefully organized.   

### User Stories
User can enter website and click on "Add Flow" at the upper right hand corner. This displays a modal which provides an input form. The user can select whether they are currently menstruating, select a date, and select a variety of symptoms to track the expressions of their cycle. The data they inputted is then displayed on the screen. On each day's data of symptoms, the user can select to edit those symptoms, or select to delete that entire day's symptoms.   

### Technoligies Used
This website was made with the MERN stack using:   
* HTML
* CSS
* Javascript
* Bootstrap
* Django
* PostgreSQL
* MUI
* React
* Node.js   

### Unfinished Functionality
User authorization/login   
JWT   
Calendar plug-in implementation and synergy with current React framework   
Filtering function by date   
Scrolling on all modals   
Having the Add Flow modal display a clear input form, rather than previous inputted symptoms   
Deployment on Heroku (edited)   

### Future Stretch Goals 
Provide a predictive functionality, in which the application selects the next expected date of menstruation.   
The application could alert the user one or two days before their expected menstruation.   
