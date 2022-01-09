# Instructions

### Part 1 Modify your UI to show a dropdown list instead of a text box when adding a new project

- In routes/projects.js:
    - Reference course model.
    - Call Course.find() inside get route associated to '/add'.
    - Pass list to view as a parameter along with title
    - Add .sort at the end of the find() clause
- In views/projects/add
    - Modify the view to accept two model objects: projects and courses
    - Convert courses input tag into a select tag
    - At this point, view will render an empty dropdown list
    - Use the #each loop structure to add list items similar to what's done in Index.hbs
        - Use the option tag and the name attribute of each element
- Sort courses by modifying

### Part 2 Improve Projects Index view: Delete links and format date

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
    - Call the remove method of the Project model and pass id as parameter in a json object
    - Redirect once it's done

### Part 3 Handle Editing a Project

- In the views folder:
    - Copy the Add.hbs view into a new view named Edit.hbs
    - In /Projects/Index.hbs
        - Modify the form to add a link to Edit the page
        - Try it out > 404
- Go to routes/projects.js to add a handler for /Edit
    - Add GET handler for /edit/:_id
    - Use the ID parameter to fetch this document
        - Use findById()
    - If found:
        - Use the courses model object to get a list of courses, to pass them to the view
        - Pass this document to the view to prepopulate the edit view
- Go back to /Projects/Edit.hbs
    - Add one more field set to display the Status
        - Hardcode the options since they won't change
    - Add value="" attributes to each field to link them to attributes in our model
    - For the date there's still some formatting that needs to be applied
        - For now remove the type attribute
    - For selecting the correct value from the dropdown:
        - Add an hbs helper function
- Go to App.js
    - Add the helper function after the database connection
    - Use hbs.registerHelper()
- Back to /Projects/Edit.hbs
    - For Courses call the function inside the each statement for each option
    - For Status call the function 3 times, one for each option
- Go to /routes/projects.js
    - Add a POST handler for /edit/:_id
    - Use the model object and call findOneAndUpdate
        - Pass id
        - Pass a JSON object to map the properties
        - Handle error
        - If successful Redirect to /Projects