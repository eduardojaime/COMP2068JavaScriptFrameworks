# Instructions

### Part 1 Hello world! app

- Example 1 Hello Express
    - Install express via npm
    - Create a simple hello world app
- Example 2 More Routes
    - Add more routes

### Part 2 Using the Express Generator tool to create an app template
- Use Express Generator to create a new app using scaffolding
    - Create a new folder
    - Install express
        - npx express-generator --view=hbs
    - Install packages via npm i
    - Run via npm start or nodemon
        - This scaffolds and loads a new app; open it in your IDE so we can examine it
            - Views
            - Routes
            - Bin/www
            - Where is the routing configuration?
        - Note the controller, how it works and that it's exported (we should rename the "routes" folder to "controllers"
        - See how the routing is handled in app.js
        - Note views have .hbs extensions because we opted for the Handlebars template engine
        - Pug (formely Jade) is the default and it can be neat to work with but extremely hard to debug due to the importance of indenting
        - Handlebars is closer syntactically to what we may use when we add Angular or React to the UI so we will use it instead of Pug (or EJS)
        - Look at the views – what's new here?  The {{ }} delimiters around server-side values
        - Let's try changing the value that's passed to the index view
        - Using Handlebars w/Express Generator: 
            - https://itnext.io/using-handlebars-helpers-with-express-generator-ad163f7f89d6?gi=1e6cc21c7ae3 
    - Add an /ABOUT route
        - Go to index.js and add the new route pointing to /about
            - Add a JSON object to be returned, this can also come from MongoDB
        - Go to Views folder and create a new file named about.hbs
            - Add html code to the views using the handlebars syntax
    - Optionally
        - Create about.js
        - Modify app.js to use about
            - let aboutRouter = require('./routes/about');
            - app.use('/about', aboutRouter);
    - Add Bootstrap
        - 3 ways to get it:
            - Via CDN https://www.bootstrapcdn.com/
            - Download and add to public c folder
            - Install the following packages
                - npm i bootstrap –save
                - npm i jquery –save
                - npm i popper --save
                - Copy bootstrap files over from /node_modules/bootstrap/dist/folder to public/stylesheets
        - Add the links to the template
        - Add menu bar to the template https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp
    - Alternatively get a theme: 
        - https://startbootstrap.com/themes?showVue=false&showPro=false
        - https://themes.getbootstrap.com/

### Part 3 Deploying the app to Heroku.com

- Deploy to Heroku.
    - Create a new repository for your project (public preferably)
    - Upload your code to the repository
        - Remember to add a .gitignore file for node
    - Sig up to Heroku.com
        - Add a new project
        - Connect GitHub Repo
        - Enable Automatic Deployments
        - Deploy and navigate to your app link, e.g.: https://project-tracker-comp2068.herokuapp.com/