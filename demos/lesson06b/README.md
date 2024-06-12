# Instructions

### In-class Exercise Review

- In models folder
    - Create course.js
        - Import mongoose
        - Define schema (schema definition object)
        - Create schema (mongoose schema object)
        - Create and import the model (mongoose model)
- In views folder
    - Create a new folder called courses
        - Create add.hbs
        - Create index.hbs
- In routes folder
    - Create courses.js
        - Import model
        - Add a GET handler for '/' to list all courses
            □ Use Course.find().sort() without a filter
            □ Sort by name ascending
        - Add a GET handler for '/add' to just render the form
        - Add a POST handler for '/add' to add the new course
            □ Use new Course()
            □ Call newCourse.save()
            □ Redirect to /courses
        - Export the router object
- Configure the app with the new route
    - In app.js:
        - Create a router object
        - Register router object to the '/courses' path
    - In layout.hbs
        - Add a link to the new section in the navigation bar

### Part 1 Showing a dropdown list instead of a text box for Courses

- In routes/projects.js:
    - Import Course model at the top
    - Remember to use 'async' in the middleware function declaration and 'await' when calling a method from the model
    - Call Course.find() inside get route associated to '/add'.
    - Chain .sort at the end of the find() clause
    - Pass list to view as a parameter along with title
- In views/projects/add
    - Convert course input element into a select element
    - Use the #each loop structure to add list items similar to what's done in Index.hbs
        - Render an option element with the course name for each item in the list

### Part 2 Handling DELETE

- Go to views/index.hbs
    - Add a column to the table to add a link to /projects/delete/{ID}
    - Add a bit of client-side JavaScript to add a confirmation message:
        - Create scripts.js under /public/javascript
        - Create confirmDeletion() function
        - Add script reference to layout, so we can reuse it
    - Back to index.hbs
        - Associate the newly created function to the delete link via the onclick attribute
- Go to routes/projects.js
    - Add a GET handler for /delete
    - Remember to use 'async' in the middleware function declaration and 'await' when calling a method from the model
    - Retrieve id value from req.params object
    - Call the findByIdAndRemove method of the Project model and pass id as parameter in a JSON object
    - Redirect to /projects once it's done

### Part 3 Handle UPDATE

- In the views folder:
    - Copy the Add.hbs view into a new view named Edit.hbs
    - In /Projects/Index.hbs
        - Modify the form to add a link to Edit the page
        - Try it out > 404
- Go to routes/projects.js to add a handler for /Edit
    - Add GET handler for /edit/:_id
    - Retrieve project id from req.params object
    - Call findById() method from the model
        - Pass projectId
        - Pass new data as JSON
    - Retrieve the courses list
    - Pass projectData and courseList o view
- Go back to /Projects/Edit.hbs
    - Add one more field set to display the Status
        - Hardcode the options since they won't change
    - Add value="" attributes to each field to link them to attributes in our model
    - For the date there's still some formatting that needs to be applied
        - For now remove the type attribute
    - For selecting the correct value from the dropdown:
        - Add an hbs helper function (described below)
- Go to App.js
    - Import hbs module at the top
    - Add the helper function after the database connection
    - Use hbs.registerHelper() and provide callback function
    - https://handlebarsjs.com/guide/builtin-helpers.html#sub-expressions
- Back to /Projects/Edit.hbs
    - For Courses call the helper function inside the each statement for each option
    - For Status call the helper function 3 times, one for each option
- Go to /routes/projects.js
    - Add a POST handler for /edit/:_id
    - Use the model object and call findOneAndUpdate()
        - Pass id
        - Pass a JSON object with the new values
    - Redirect to /Projects
- To fix the date in /Projects/Edit, we need another HBS helper function to format the date:
    - In app.js
        - Create hbs helper function 'toShortDate' to format a date value to localeDateString('en-CA')
    - In Views/Projects/Index.hbs
        - Modify this.dueDate to display formatted date
    - In Views/Projects/Edit.hbs
        - Modify the dueDate input field to display formatted date
            - Add type="date" back
        - Call toShortDate function