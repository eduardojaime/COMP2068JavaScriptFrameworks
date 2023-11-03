# Instructions

### Part 1 Setting up your environment

- Navigate to https://angular.io/guide/setup-local and follow the instructions to download the required packages:
    - Knowledge of Typescript (we'll cover this)
    - NodeJs
    - npm
    - Angular CLI (install globally via npm) by running npm install -g @angular/cli
- On a Console or PowerShell window, navigate to a folder where you wish to create your Angular project
    - E.g. cd source
- This next step is similar to using the Express Generator
    - Create a new workspace by running
        - ng new my-app
    - Open the application by navigating into the created app and running the serve command
        - cd my-app
        - If there are any errors related to npm packages run npm i --force
        - ng serve --open
    - Open a browser and navigate to http://localhost:4200
- Open the my-app folder using Visual Studio Code
    - Src is where most of the work will be done
        - App
        - Assets > .gitkeep prevents an empty folder to be excluded by git
        - Environments
    - Index.html is the main layout of our site
    - Main.ts is similar to how server.js works

### Part 2 Building a demo Angular app

- Open index.html
    - Examine the \<app-root> element. What does it do?
- In the src/app folder
    - Open app.module.ts
        - This is similar to app.js file in Express
        - The main component is registered here
    - Open app.component.ts
        - Angular is component based, here's how it is defined:
            □ Selector specifies what element to target on the page
            □ templateUrl contains all the html code that will be rendered here
            □ styleUrls contains the css file that will be applied to this component
    - Open app.component.html
        - Scroll down and find the Welcome span element
            □ Modify it to read Welcome to our first Angular App!!
            □ Notice how the changes will be sent to the browser automatically
        - Scroll down and find the span element with {{ title }}
            □ This is similar to handlebars
            □ Go back to app.component.ts and modify the title value
- Back to the Terminal, create a component by running:
    - ng generate component project
    - Explore the new 'project' folder that's created inside the app folder
        - component.ts
        - CSS
        - HTML template
- What files do we need to change to modify this new project component?
    - In app.module.ts
        - Notice how the new component was registered in the app
        - Modify line 18 (bootstrap) and specify ProjectComponent
    - In index.html
        - Modify the \<app-root> element and make it \<app-project>
- For adding custom CSS styles we have two options:
    - Add them in styles.css in the root of our project
    - Component.css file
    - Copy all the style sheets inside app.component.html and copy them in Styles.css (without the \<style> element)
    - Add a link to styles.css in index.html
    - Create a custom rule to modify the font
        - body {}
- In project.component.html
    - Change the text to read Project Tracker
    - Modify the \<p> element to a \<div class="card highlight-card">
        
### Part 3 Displaying mock data on the application

- In project.component.ts
    - Replicate the mongo schema by creating a new Project class
    - Scroll down to inside ProjectComponent class declaration
        - Create a new instance of the project class with some mock values
        - How to show this on the view?
- In project.component.html
    - Add an \<h4> element and use handlebars syntax to access project.name
    - Add a \<p> element and use handlebars syntax to access project.course
    - Notice that properties are case sensitive and null ones will be ignored
    - Any value coming from the component should be wrapped in handlebars
- In project.component.ts
    - Comment out the instance of project
    - Create a const object that contains a list of Project
    - Initialize this list with values
    - Make mock list available to the view by assigning to a property
- In project.component.html
    - Comment out divs showing single project
    - Add another div and use ngFor attribute to iterate through the list

### Part 4 Testing 2-way databinding

- In Styles.css
    - Add a new rule for a class named lbl which will be used to line up our form labels
        - width: 75px;
        - display: inline-block;
    - Add a new rule for fieldsets to set border to none
- In project.component.html
    - Add a new section element below the cards
    - Add form fields to add a new project
        - Id
        - Name
        - Course
- In app.module.ts
    - Import the FormsModule component
    - Include this in the imports section in the @NgModule declaration
        - This module will enable the application to link data between fields and the backend
- In project.component.ts
    - Add a selectedProject property of type Project
    - Write a new method to handle on click event from the cards
- In project.component.html
    - Add an onclick handler to each card using (click) inside of the div
    - Set data binding on each input by using [(ngModel)]
    - Add ngIf to hide/show the section depending on the selectedProject property
        - This has to be hidden when page loads
        - Try selecting a card and modifying name