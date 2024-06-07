# Instructions

### Part 1 Creating and Configuring a Mongo database

- Navigate to https://www.mongodb.com/products/platform/cloud
- Click on Try Free button at the top right corner to sign up for an account
    - Create cluster
        - Select closest region to your location
        - Select free tier
    - Set up access via Security > DB Access
        - Add new user named admin with a strong password
    - Set up IP Whitelist > Security > Network Access
        - Add 0.0.0.0/0 to allow all IP addresses
    - Check cluster is running
    - Check collections
        - List of collections must be empty
    - Click on Clusters > Connect, and select Compass to get the connection string needed for the project
- (Optionally) Install MongoDB Compass tool
    - https://www.mongodb.com/products/tools/compass
- (Optionally) Install MongoDB for VS Code Extension
    - https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode

### Part 2 Creating a Project Tracker Application

- Create a new folder and open with VS Code
- Open the Terminal
- Install express generator tool globally (only need to do this once)
    - npm i -g express-generator
- Scaffold a new project template with the following command
    - express --view=hbs
- Restore project dependencies
    - npm i
- Run the application by opening the terminal and executing either of the following commands
    - npm start
    - Or
    - nodemon
    - Note that nodemon must first be installed globally https://www.npmjs.com/package/nodemon
- Remove unused routes:
    - /routes/users.js
    - app.js delete:
        - var usersRouter = require('./routes/users');
        - app.use('/users', usersRouter);
- Open views/layout.hbs
    - Add bootstrap links from CDN
    - Add a Jumbotron and a navigation bar
        - https://www.w3schools.com/bootstrap5/bootstrap_navbar.php
        - https://www.w3schools.com/bootstrap5/bootstrap_jumbotron.php
- Add a Projects section
    - In Views: 
        - Create new folder called projects
        - Add index.hbs with just a title
    - In Routes:
        - Create projects.js
        - Import express
        - Create router object
        - Add get middleware > render view in 'project/index'
        - Export router module
    - In app.js:
        - Import  router object
        - Register router object to '/projects' path
    - In layout.hbs
        - Add link to /Projects in the navigation bar

### Part 3 Connecting our Application to MongoDB 

- Retrieve your connection string from MongoDB Cloud, keep in a notepad temporarily
- It's important to hide your connection string and make sure to never commit it to a repository in plain text, to do that we'll use a dotenv file
- Install dotenv package
    - npm i dotenv
    - Reference: https://www.npmjs.com/package/dotenv
    - Once installed create a new file named '.env'
    - In this file add the following key=value pair:
        - CONNECTION_STRING_MONGODB=PASTE YOUR CONNECTIONSTRING HERE
- Install mongoose package
    - npm i mongoose
    - Reference: https://www.npmjs.com/package/mongoose
- Create a new folder named configs
    - Inside of this folder, create a new file named globals.js
    - Initialize dotenv global variables by calling this method at the top of the document
        - require("dotenv").config();
    - Create a JSON object called configurations than will include key value pairs
    - Add a new section named ConnectionStrings
        - Add a new key named MongoDB and set value to process.env.CONNECTION_STRING_MONGODB
    - Export this object
- On app.js
    - Import mongoose and globals.js at the top
    - After the .use() calls to register controllers
        - Create the connection string variable
        - Call the connect() method of the mongoose object:
            - Pass connection string
            - Pass options as parameters to avoid warnings
                - useNewUrlParser set to true
                - useUnifiedTopology set to true
        - Chain the .then() and .catch() methods, and add the corresponding callback function printing a success or error message to the terminal
        
### Part 4 Creating a Model and binding it to the UI to add new projects

- Create a folder in the root called models
- Create a project.js file inside of this folder
    - Import mongoose
    - Define a data schema object for this entity using the mapping notation
        - This object allows you to define what fields and data types to use in your entity
    - Create a mongoose schema object by calling new mongoose() and passing the dataSchemaObj created above
    - Create a mongoose model object by calling mongoose.model(schhemaObj)
    - Export model
- On Views/Projects/Index.hbs
    - Add links to /Projects/Add
    - Navigate to path to see 404
- On Routes/projects.js
    - Add GET handler pointing to '/add'
    - Middleware function:
        - Res.render('projects/add', { title: 'details' });
- On Views/Projects add Add.hbs
    - Add \{{title}}
    - Build form:
        - \<form> tag with method=post
        - \<fieldset> element wrapping a \<label> and \<input> for each field
            - Input name has to match name of fields in mongoose schema
        - \<button> tag to trigger POST
    - Try navigating to this form, fill it in and submit… Why is it showing 404?
- On Routes/Projects.js
    - Mongoose v7 utilizes async calls by default, so add 'async' to your middleware function definitions in each get/post handler that makes a mongoose model call such as find() or create()
    - Import Project model at the top
    - Add POST handler for '/add'
    - Call new Project() method to instantiate a new entity passing new values as JSON object in the parameters 
    - Store the result in a variable named newProject
    - Call await newProject.save()
    - Redirect to /projects
- Navigate to /Projects/Add and try it out
- Open MongoDB Compass and explore the collection

### Part 5 Showing a list of data

- On Routes/Projects.js
    - Go back to GET handler for '/'
    - Add 'async' to the middleware function definition
    - Import Project model at the top
    - Call await Project.find().sort() and store results in a variable
    - Call res.render() and pass results as variable named dataset
- On Views/Projects/Index.hbs
    - Use a loop to print elements {#each}
    - Add a table
    - Add table headers
    - Add individual elements
- Open a browser and navigate to http://localhost:3000/projects to verify