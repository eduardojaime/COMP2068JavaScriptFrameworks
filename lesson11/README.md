# Instructions

### Part 1 Cleanup and review

- Open parent folder in Visual Studio Code
    - Open two terminals, one for the client and one for the server
    - Run nodemon on both terminals to run your application
- In project-spa-client
    - Open src/app/component/project.component.html
        - Add missing \<tbody> to table in order for table-striped and table-hover classes to apply
        - Add format to dueDate by adding pipe symbol | and keyword date
    - Create an environment variable in src/environment/environment.ts
        - Add "ServerAPI" with value http://localhost:3000/
        - Add this to prod environment as well
    - Open src/app/services/project.service.ts
        - Import environment module
        - Modify getProject() method to use this environment variable
- Open browser and verify changes

### Part 2 Adding new projects

- In project-spa-client
    - Open src/app/component/project.component.html
        - Add a new form with the corresponding fields to add a new project
        - Next step is to bind form fields to our model and build methods to pass information along to the server
    - Open src/app/app.module.ts
        - Import FormsModule to enable data-binding for adding and editing
        - Add FormsModule to our list of imports
    - Back to src/app/component/project.component.html
        - Use [(ngModel)] to bind each input field to the corresponding model property
        - Add a save button and set the (click) event to addProject() (we'll create this method shortly)
    - Open src/app/component/project.component.ts
        - Add variables to hold each value coming from the UI
        - Create new addProject() method
            - Set properties of new project
        - Call service.addProject() and clearForm()
    - Open src/app/services/project.service.ts
        - Create addProject method that receives a new project
        - Make a post request to the server endpoint, and pass newProject as body parameter
- In project-spa-server
    - Go to routes/projects.js
        - Add a POST handler
        - Use Project.create and pass project object as parameter
        - Implement usual error handling logic
            - Return code 501 if error
            - Return code 201 (resource created) if successful
- Back to project-spa-client
    - Open project.component.ts
        - Create new clearForm() method to clear out fields entered
            - Set fields to empty string
        - Call clearForm() from addProject() method

### Part 3 Deleting projects

- In project-spa-client
    - Open src/app/component/project.component.html
        - Add a new column to the table
        - Add btn-danger link with a (click) event handler pointing to the deleteProject() passing the project id as parameter
    - Open src/app/component/project.component.ts
        - Create new method called deleteProject() that access a project id to delete
        - New method will in turn call the deleteProject() method in projectService
        - Wrap call to service.deleteProject() in a confirmation if statement
    - Open src/app/services/project.service.ts
        - Create deleteProject method that receives a project id
        - New method will in turn make an API call to our server api using the DELETE verb
- In project-spa-server
    - Go to routes/projects.js
        - Add a DELETE handler to '/:_id'
        - Call Project.remove filtering by id
        - Implement usual error handling logic
            - Return code 400 if error (bad request)
            - Return code 204 (success no content) if successful
- Run both apps and try it out

### Part 4 Updating projects

- In project-spa-client
    - Open src/app/component/project.component.html
        - Add a new column to the table
        - Add btn-info link with a (click) event handler pointing to the selectProject() method passing project as parameter
        - In the form below, we need to handle the SAVE button
            - Add another button with a (click) event handler pointing to updateProject()
            - Use ngIf logic to hide/show these two based on the _id value
    - Open src/app/component/project.component.ts
        - In clearForm() method, add a line of code to clear up the value stored in _id
        - Add a new component property called _id
        - Create new method called updateProject()
            - Set properties of new project
            - Assign this project's properties to the component's properties
                - _id, name, dueDate, course
        - Call service.UpdateProject() and clearForm()
    - Open src/app/services/project.service.ts
        - Create updateProject method that receives a project object
        - New method will in turn make an API call to our server api using the PUT verb
- In project-spa-server
    - Go to routes/projects.js
        - Add a PUT handler to '/'
        - Call Project.findOneAndUpdate filtering by id (request body)
        - Implement usual error handling logic
            - Return code 400 if error (bad request)
            - Return code 202  (resource accepted) if successful
- Run both apps and try it out