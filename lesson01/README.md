# Instructions

### Part 1 Setting up your environment

- Install VS Code https://code.visualstudio.com/
- Install Recommended Extensions
    - MongoDB for VS Code by MongoDB
    - Code Spell Checker by Street Side Software
    - Prettier - Code Formatter by Prettier
    - HTML CSS Support by ecmel
    - IntelliCode by Microsoft
    - Angular Language Service by Angular
    - Handlebars by Andre Junges
    - Todo Tree by Gruntfuggly
- Install Node.js (LTS) https://nodejs.org/en/

### Part 2 Creating a simple Hello World application

- Create a folder
- Open folder with Visual Studio Code
- Create a new file called helloworld.js
- Print Hello World to the console using JavaScript console.log() call
- Save your changes
- Open a Terminal
- Run the code by typing the following command in the terminal:
    - node helloworld

### Part 3 Creating a simple Web Server application

- In the same folder within Visual Studio Code, create a new file called server.js
- Import the http module
- Call the createServer() method in the http module to create a listener to HTTP events
    - Use the Response object to write the text that users will see
- Use method chaining to call the listen() method and specify which port the app will listen to
- Print a success message to the console
- Save your changes
- Run the code by typing in the node command
    - node server
- Open a browser and navigate to http://localhost:3000