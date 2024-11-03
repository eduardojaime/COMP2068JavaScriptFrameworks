# Instructions

### Comparing Standalone (default) vs Component-Based (legacy default) Approaches

Feature | Standalone Components | Module-Based Components
---|---|---
Angular Version | Default project template since v17. Introduced in v15. | Legacy default project template. In v17 and above, you need to use the --no-standalone parameter when executing 'ng new'.
Declaration | Standalone with standalone: true | Declared within NgModule
Dependency Management | Imports dependencies directly | Shares dependencies within the module
Modularity | Highly modular and flexible | Structured for larger, more complex apps
Boilerplate | Less boilerplate without modules | Additional module setup required
Use Cases | Great for micro-frontends, isolated components, or small apps where modules might add unnecessary complexity. | Suitable for large applications where structure and organization are essential, especially when components need to share services or dependencies.

### Comparing Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)
Feature | Server-Side Rendering (SSR) | Client-Side Rendering (CSR)
---|---|---
Rendering | HTML is generated on the server and sent to the client | HTML is generated on the client using JavaScript
Performance | Faster initial load time | Slower initial load time, but faster subsequent interactions
SEO | Better SEO as content is available on initial load | Poorer SEO as content is rendered after JavaScript execution
Complexity | More complex setup, requires server infrastructure | Simpler setup, can be hosted on static file servers
Interactivity | Initial load is fast, but subsequent interactions may be slower | Initial load is slower, but subsequent interactions are faster
Use Cases | Suitable for content-heavy sites, blogs, e-commerce | Suitable for web applications, SPAs with heavy interactivity


### Part 1 Setting up your environment

- Navigate to https://angular.dev/tools/cli/setup-local and follow the instructions to download the required packages:
    - Knowledge of Typescript (we'll cover this)
    - NodeJs
    - npm
    - Angular CLI (install globally via npm) by running npm install -g @angular/cli
- On a Console or PowerShell window, navigate to a folder where you wish to create your Angular project
    - E.g. cd source
- This next step is similar to using the Express Generator
    - Create a new workspace by running
        - ng new my-app --no-standalone
    - When prompted, select the following options:
        - Stylesheet to use > CSS
        - Enable SSR and SSG? > No
    - Open the application by navigating into the created app and running the serve command
        - cd my-app
        - If there are any errors related to npm packages run npm i --force
        - ng serve --open
    - Open a browser and navigate to http://localhost:4200
- Open the my-app folder using Visual Studio Code
    - Src is where most of the work will be done
        - At the root level
            - We have several metadata and configuration files (JSON)
            - Assets folder
                - .gitkeep prevents an empty folder to be excluded by git
                - Similar to public folder in Express, contains static assets
            - Main.ts
                - Similar to bin/www file in Express
            - Index.html is the main layout of our site
                - Similar to views/layout.hbs in Express 
        - In the src/app folder
            - Open app.module.ts
                - This is similar to app.js file in Express
                - The main component is registered here
            - Open app.component.spec.ts
                - This is a file that contains unit tests
                - We'll ignore it for now
            - Open app.component.html
                - This is the view corresponding to the model
            - Open app.component.css
                - Any styling that applies ONLY to the model goes here
            - Open app.component.ts
                - Angular is component based, here's how it is defined:
                    - Selector specifies what element to target on the page
                        - Examine the \<app-root> element in index.html. What does it do?
                    - TemplateUrl contains all the html code that will be rendered here
                    - StyleUrls contains the css file that will be applied to this component

### Part 2 Examining Data Binding

- In the src/app folder
    - Open app.component.html
    - Data Binding Examples:
        - Property Binding
            - Scroll down to line 243, [href] points to the selected item.link value
        - Interpolation Binding
            - Scroll down to line 228 and find the h1 element with {{ title }}
                - This is similar to handlebars
                - Go back to app.component.ts and modify the title value to My Angular App
        - Event Binding
            - This works by using parenthesis around an element's event such as (click) and linking it to a function in the UI.
        
### Part 3 Displaying mock data on the application

- Navigate to https://www.bootstrapcdn.com/
    - Add Bootstrap CSS reference link to Index.html
- Open Styles.css
    - Add card styles from https://pastebin.com/mS5eYvt1
- Back to the Terminal, create a component by running:
    - ng generate component project
    - Explore the new 'project' folder that's created inside the app folder
        - Component.ts
        - CSS
        - HTML template
        - Spec file for unit tests
- What files do we need to change to modify this new project component?
    - In app.module.ts
        - Notice how the new component was registered in the app
        - Modify line 18 (bootstrap) and specify ProjectComponent
    - In index.html
        - Modify the \<app-root> element and make it \<app-project>
- For adding custom CSS styles we have two options:
    - Add them in styles.css in the root of our project or Component.css file
    - Copy all the style sheets inside app.component.html and copy them in Styles.css \(without the \<style> element\)
    - Create a custom rule to modify the font
        - body {}
- In project.component.html
    - Change the text to read Project Tracker
    - Modify the \<p> element to a \<div class="card  highlight-card">
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

### Part 4 Testing 2-way data binding

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