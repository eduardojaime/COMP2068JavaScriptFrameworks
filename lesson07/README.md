# Instructions

### Part 1 Part 1 Catch up from last week

- In app.js
    - Create hbs helper function 'shortDate' to format a date value to localedatestring
- In Views/Projects/Index.hbs
    - Modify this.dueDate to display formatted date
- In Views/Projects/Edit.hbs
    - Modify the dueDate input field to display formatted date
        - Add type="date" back
        - Call toShortDate function

For more info about HBS helper functions visit handlebarsjs.com.

### Part 2 Implementing Passport

- Make sure project is not running and open a terminal
    - Install the following packages via npm
        - passport-local
        - passport-local-mongoose
        - express-session
- In app.js
    - Since our controllers will use passport, all related declarations must be places before the app = express() instruction
        - Import passport and express-session
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
            - https://github.com/expressjs/session#readme
- In app.js
    - Link passport to our model that extends passport-local-mongoose
        - Import model
        - Call passport.use and specify a strategy
    - Set passport to read/write user data to/from session object
        - Call passport.serializeUser to write user into to a session variable
        - Call passport deserializeUser to get the information from the session variable
            
### Part 3 Add Register and Login functionality

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
    - Also add Bootstrap 4.6 from the CDN: https://www.bootstrapcdn.com/ scroll down to find 4.6
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