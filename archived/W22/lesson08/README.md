# Instructions

### Part 1 Improving our Login functionality

- In Layout.hbs
    - Add if-else statement to:
        - Show the Login/Register links when user is anonymous
        - Display a logout link and the current user's email address
    - We still need to pass the User object back to the view
- In Routes/Project.js
    - Import Passport
    - Modify every method that renders a view and add user object
        - Every GET handler except delete because it's a redirect
- In Routes/Courses.js
    - Import Passport
    - Modify every method that renders a view and add user object
        - Every GET handler
-  Try out to verify the navbar changes accordingly
- In Routes/Index.js
    - Add GET handler for logout
        - Call logout() using the request object
        - Redirect to login

### Part 2 Adding Authorization to protect sections of my website

- While logged out, navigate to /Project and /Courses
- Verify that I can still add Projects and Courses
- There are generally two approaches for views
    - Have 1 view for authenticated users and 1 for anonymous users
    - Have 1 view for both but hide links and actions
    - However, this only covers what they can see. Better authorization has to be written at the controller level
- In Views/Projects/Index.hbs
    - Use if-else statements to hide the Add button and the Actions column
    - Navigate to /Project/AddNew while anonymous
- In Routes/Project.js
    - Create a new middleware function called IsLoggedIn()
        - If User is authenticated execute next
        - Else send back to login
    - Inject this middleware in each handler in the controller
    - Verify that everything is locked
- Apply the same functionality for Course
    - Views/Course/Index.hbs
    - Routes/Course.js

### Part 3 Implementing GitHub authentication

- Make sure the application is not running and install the following npm package:
    - npm i passport-github2
- In Models/User.js
    - Add oauthId: String to record the ID that's received from the login provider
    - Add oauthProvider: String to record the provider type (GitHub, Twitter, etc)
    - Add created: Date to record the time when the user is created in the DB
    - When creating a local user, these will be blank.
- Add a Config folder and create a globals.js file
    - Add a new section called github and then the following variables:
        - clientId and clientSecret which is used by the authentication
        - callbackUrl which is the url in our application that users will be sent back to after logging in with the external provider
- Open a browser and navigate to https://github.com/settings/applications/new
    - Application name should be COMP2068 Project Tracker
    - Homepage URL is http://localhost:3000
    - Authorization callback URL is http://localhost:3000/github/callback this url needs to change when deploying to Heroku or Azure
    - Generate the clientId and clientSecret values and copy them over to our globals.js file
- In App.js
    - Import the globals.js file at the top of the document
    - Import the Strategy class in the passport-github2 package just after importing passport and session
    - Call passport.use() to configure the github strategy and pass the required API keys and User model
    - Add a callbacks to handle two scenarios a new user, and a returning user
- Next step is to add a login button and authenticate request: https://www.npmjs.com/package/passport-github2
- In Views/Login.hbs
    - Add another login button with href="/github"
- Try it out. How to handle calls to /github
- In Routes/Index.js
    - Add a two get handlers as specified in the documentation https://www.npmjs.com/package/passport-github2
    - Try it out and verify in the db