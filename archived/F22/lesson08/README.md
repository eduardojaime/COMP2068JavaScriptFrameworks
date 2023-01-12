# Instructions

### Part 1 Catch up from last week

- In app.js
    - Create hbs helper function 'toShortDate' to format a date value to localeDatestring('en-CA')
- In Views/Projects/Index.hbs
    - Modify this.dueDate to display formatted date
- In Views/Projects/Edit.hbs
    - Modify the dueDate input field to display formatted date
        - Add type="date" back
        - Call toShortDate function
- In Views/Layout.hbs
    - Add Bootstrap 4 CSS and JS links from CDN: https://www.bootstrapcdn.com/
    - Add a Bootstrap navbar: https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp

For more info about HBS helper functions visit handlebarsjs.com

### Part 2 Implementing Passport

- Make sure project is not running and open a terminal
    - Install the following packages via npm
        - passport
        - passport-local
        - passport-local-mongoose
        - express-session
- In app.js
    - Since our controllers will use passport, all related declarations must be placed before the app = express() instruction
        - Import passport and express-session
        - Initialize and configure the session object by calling app.use and passing the session object as a method
            - Provide the following: https://github.com/expressjs/session#readme
                - Secret
                - Resave
                - saveUninitialized
        - Configure passport before any custom router/controller declaration (app.use())
            - Call app.use and register:
                - passport.initialize()
                - passport.session();
- In the models folder
    - Create User.js
        - Define schema and model the same way as any other model
        - Since this is a special model for user management
            - Import passport-local-mongoose
            - Call userSchema.plugin(plm) to extend the model functionality and use the password salting/hashing feature
- In app.js
    - Link passport to our model that extends passport-local-mongoose
        - Import model
        - Call passport.use and specify a strategy
    - Set passport to read/write user data to/from session object
        - Call passport.serializeUser to write user into to a session variable
        - Call passport deserializeUser to get the information from the session variable
            
### Part 3 Adding Register and Login functionality

- In the Views folder
    - Create register.hbs
    - Create login.hbs
    - Copy the HTML code from Blackboard (Lesson 7 folder) to save time
- In routes/index.js
    - Add GET handler for '/register' and render register.hbs view with a title
    - Add GET handler for '/login' and render login.hbs view with a title
    - Try navigating to your pages
- In views/layout
    - Add links to login and register to the right side of your navbar
        - Navbar link: https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp
        - Bootstrap 4.6 CDN: https://www.bootstrapcdn.com/ scroll down to find 4.6
- In routes/index.js
    - Import the User model
    - Add POST handler for '/register' and use the User module to register a new User
        - User.register(new User(), password)
        - Password gets passed as a separate parameter so that it can be hashed
        - If registration is successful
            - Call req.login() and pass the newuser object to log the user in
            - Redirect to /projects page
        - Try creating a new account and view MongoDB collection
            - What's hash and salt?
    - Add POST handler for '/login'
        - Import passport in our file
        - Instead of a regular middleware callback use passport.authenticate
        - Specify success and failure redirect
        - Failure message needs to be handled
    - Modify the GET handler for '/login
        - Get message from req.session.messages
        - Clear out messages
        - Pass the messages to the view
    - In login.hbs
        - Make sure messages are rendered
            - Danger alert for invalid
            - Info alert for prompting the user to enter their credentials

### Part 4 Improving our Login functionality

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
- Try out to verify the navbar changes accordingly
- In Routes/Index.js
    - Add GET handler for logout
        - Call logout() using the request object
        - Redirect to login

### Part 5 Adding Authorization to protect sections of my website

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

### Part 6 Implementing GitHub authentication

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