# Instructions

### Part 1 Create and Configure a Mongo database

- Go to Mongo Cloud Atlas and Sign up for an account
- Install MongoDB Atlas
- Create cluster
- Set up access via Security > DB Access
- Set up IP Whitelist > Security > Network Access
    - Add 0.0.0.0/0 to allow all IP addresses
- Check cluster is running
- Check collections
    - List of collections must be empty
- Click on Connect, select Compass to get the connection string needed for the project
- Open Compass and connect
    - Create a new DB
    - Set default collection as Projects

### Part 2 Create a Project Tracker Application

- Use Express Generator to create a new app using scaffolding
    - Create a new folder using the command line
    - Run command:
        - npx express-generator --view=hbs
    - Install packages via 
        - npm i
    - Run via 
        - npm start or nodemon
    - Remove unused routes:
        - /routes/users.js
        - app.js delete:
            - var usersRouter = require('./routes/users');
            - app.use('/users', usersRouter);
    - Add Projects route
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
            - Create router object
            - Use router object on '/projects' endpoint
### Part 3 Connect 

- Search for mongoose on https://npmjs.com
- Install mongoose package
    - npm i mongoose
- On app.js
    - Import mongoose into the project and create an object
    - After the .use() calls to register controllers
        - Create the connection string variable
        - Call the connect() method of the mongoose object:
            - Pass connection string
            - Pass options as parameters to avoid warnings
            - Modify username or password to show error message
        - Alternatively > Add connection string to globals.js
            - Create a new folder in the root called 'config'
            - Create globals.js
            - Create a json object called configuration than will include key value pairs
            - Export this object
            
### Part 4 Create a Model and bind it to the UI to add new projects

- Create a folder in the root called models
- Create a projects.js file inside of this folder
    - Import mongoose into the  file and create object
    - Define an schema for this project object using the mapping notation
    - Create schema object by calling new mongoose(schemaDefinition)
        - Point out: type, required, default
    - Create a model object by calling mongoose.model(schhemaObj)
    - Export model
- On Views/Projects/Index.hbs
    - Add links to /Projects/Add
    - Navigate to path to see 404
- On Routes/projects.js
    - Add GET handler pointing to '/add'
    - Middleware function:
        - Res.render('projects/add', { title: 'details' });
- On Views/Projects add Add.hbs
    - Add {{title}}
    - Build form:
        - form tag with method=post
        - fieldset element wrapping a label and input for each field
            - Input name has to match name of fields in mongoose schema
        - button tag to trigger POST
    - Try navigating to this form, fill it in and submit… Why is it showing 404?
- On Routes/Projects.js
    - Import model in project
    - Add POST handler for '/add'
    - Call .create() method of Project model
    - Pass fields as json object
    - Handle callback function for errors and success message
        - Redirect to /projects
- Navigate to /Projects/Add and try it out
- Open MongoDB Compass and explore the collection

### Part 5 Show a list of data

- On Routes/Projects.js
    - Go back to GET handler for '/'
    - Move const Project at the top
    - Call Project.find()
        - Callback function returns error and a lists of project object
        - Use if else to handle error
        - Else > pass data inside res.render options
- On Views/Projects/Index.hbs
    - Use a loop to print elements {#each}
    - Add a table
    - Add table headers
    - Add individual elements
- Reload page to view data
