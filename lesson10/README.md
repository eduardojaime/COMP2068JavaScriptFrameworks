# Instructions

### Part 1 Building the Server App (Backend)

- Open a command prompt and navigate to the folder where you have your projects OR Open Windows Explorer and go to the folder where you keep your projects, press and hold SHIFT and right click inside the folder at the same time, then select Command Prompt or PowerShell
- Use the Express Generator tool to generate a new project:
    - Run > npx express-generator project-spa-backend --view=hbs
    - Navigate into the project folder > cd project-spa-backend
    - Run > npm install
    - Open up the project in VS Code > code .
    - This project is using a different view engine called JADE but we won't modify it so we can ignore it
    - Run nodemon and try it out on http://localhost:3000/
- Refactor the project:
    - Delete the public folder
    - Delete users.js inside routes folder
    - Create new folder called models
        - Copy over files from original ProjectTracker project or recreate them
    - Install mongoose and dotenv npm packages
        - Run > npm i mongoose dotenv
    - Copy over code from ProjectTracker project (Express, lesson 5)
        - Copy over the models and configs folder
        - Also copy the .env file from ProjectTracker
- In app.js:
    - Remove usersRouter object import
    - Remove app.use that calls usersRouter
    - Require mongoose, and globals.js
    - Copy over the code that connects to the database or recreate it
- Inside the routes folder
    - Create a new file named projects.js
- In app.js
    - Create the corresponding projectsRouter object
    - Call app.use() to bind this controller object to the /project path
- In projects.js
    - Import Express and create a router object
    - Add a standard GET handler for the root path
    - Send back some dummy data by creating a JSON object and returning it along a status code
    - Export the router object
    - Try it out in the browser, and also Insomnia or Postman by making a GET request to localhost:3000/projects
- What do we need to do to get data from the DB?
    - Use Mongoose and the Model
- In projects.js
    - Import the model
    - In the GET handler: 
        - Use Project.find to get a list of projects
        - Add the usual error handling logic but pass json data instead of console message
    - Try it out in the browser, and also Insomnia or Postman by making a GET request to localhost:3000/projects

### Part 2 Building the Angular Client App (Frontend)

-  Since we have an API in the backend we can start building the client app
- Go back to PowerShell or Command Prompt and navigate back to the folder where your projects are
    - > cd ..
- Create the angular project template by running
    - > ng new project-spa-frontend --no-standalone
    - When prompted, select the following options:
        - Stylesheet to use > CSS
        - Enable SSR and SSG? > No
    - Navigate into the project folder > cd project-spa-frontend
    - Run > npm install
    - Open up the project in VS Code > code .
- In Visual Studio Code:
    - Open the terminal and run > ng serve --open and try it out on http://localhost:4200/
    - Create a new component to render our project list by calling > ng generate component project
- How to modify the project to point to a different component on startup?
- In index.html
    - Modify \<app-root> to \<app-project>
- In app.module.ts
    - Modify bootstrap to use AppComponent
- Navigate to https://www.bootstrapcdn.com/
    - Add Bootstrap CSS reference link to Index.html
- Open Styles.css
    - Add card styles from https://pastebin.com/mS5eYvt1
    
### Part 3 Creating the service layer that will call our server app

- In /src/app folder:
    - Create a new folder called services
    - Run ng generate service project
    - Move two files generated to the services folder
- In app.module.ts
    - Import the newly created service, and the http client modules
    - Configure them accordingly:
        - Add ProjectService to providers
        - Add HttpClientModule to imports
- In /app/services/project.service.ts
    - Add the http library in order to make calls to the server api
    - Use dependency injection (in the constructor method) to add this library to the service
    - Add a getProjects() method that calls the /projects server API endpoint

### Part 4 Configuring the Angular component to call this service and display data

- In project.component.ts
    - Import ProjectService
    - Modify the constructor to inject an instance of ProjectService
    - Add a projects variable
    - Create a new method that calls the service
    - Call method in ngOnInit so that it's called when the component is created
- In project.component.html
    - Add an html table to show this information: Name, Due Date, Course
    - Use ngFor to loop through the list of projects
- Try it out by running > ng serve -o
    - Notice Error:  Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:3000/projects. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).
    - Our applications are running on two different web servers (even if they run on the same computer) so access to/from each other is blocked by default
- Go back to project-spa-server and to routes/projects.js
    - Add a general middleware to allow cross-origin requests by adding headers to the request
	- OR install https://www.npmjs.com/package/cors
        - Configure in app.js with an options object to allow the known frontend origin

### Part 5 Cleaning up and adding global configurations

- Go to the project-spa-server app in Visual Studio
    - In config/globals.js
        - Add clientServer with http://localhost:3000/projects as value
- Go to the project-spa-client app in Visual Studio 
    - In index.html
        - Add bootstrap via CDN
        - Add references to the header section
    - In project.component.html
        - Add bootstrap css classes to the table: table table-striped table-hover