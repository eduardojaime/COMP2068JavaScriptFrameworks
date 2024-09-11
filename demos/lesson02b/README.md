# Instructions

### Demo 1 Blocking vs Non-blocking

- Open VS Code and create 2 files
    - food.txt which contains a list of 15 food items
    - drinks.txt which contains a list of 5 drinks
- Create a file named Blocking.js
    - Import the fs (filesystem) module to be able to read the contents of each file
    - Use the readFileSync method of the fs module to read the contents of food.txt synchronously.
        - It takes two arguments: the path of the file to read, and the character encoding (in this case, 'utf-8').
    - Next, use console.log to print the contents of food.txt to the console.
    - Print an additional statement using console.log to indicate that the items listed in food.txt were consumed for breakfast
    - Similarly, use the readFileSync method to read the contents of drinks.txt synchronously.
    - Use console.log to print the contents of drinks.txt to the console.
    - Print an additional statement using console.log to indicate that the items listed in drinks.txt were consumed for breakfast.
    - Just by looking at the code, what do you think the output will be?
    - Run the code by typing the following command in the terminal:
        - node blocking
    - Output Explanation
        - The output will display the contents of food.txt first, followed by "We ate all this stuff for breakfast". Then, it will display the contents of drinks.txt, followed by "We drank all this stuff for breakfast".
        - The order of outputs follows the order in which the commands are executed in the script, which is sequential due to the synchronous nature of the readFileSync method.
- Create a file named Nonblocking.js
    - Import the fs (filesystem) module to be able to read the contents of each file
    - Use the readFile method of the fs module to read the contents of food.txt asynchronously.
        - It takes three arguments: the path of the file to read, the character encoding (in this case, 'utf-8'), and a callback function to execute once the file has been read.
        - Inside the callback function, use console.log to print the contents of food.txt to the console.
    - Outside of the callback function, print an additional statement using console.log to indicate that the items listed in food.txt were consumed for breakfast
    - Similarly, use the readFile method to read the contents of drinks.txt asynchronously.
        - Inside of the callback function, use console.log to print the contents of drinks.txt to the console.
    - Outside of the callback function, print an additional statement using console.log to indicate that the items listed in drinks.txt were consumed for breakfast.
    - Just by looking at the code, what do you think the output will be?
    - Run the code by typing the following command in the terminal:
        - node nonblocking
    - Output Explanation
        - The output will display "We ate all this stuff for breakfast" first, followed by "We drank all this stuff for breakfast", and then the contents of food.txt and drinks.txt in no particular order as they are read asynchronously.
        - Calls to console.log() outside of the callback functions get printed before the contents of food.txt and drinks.txt because the readFile method is non-blocking and the program continues executing while the file is being read.

### Demo 2 Examining Closures

- Create a file named openFunction.js
    - Define a function named openFunction that does not utilize closures (placed at the root level in the file and does not contain inner functions).
        - Declare a variable named counter and set to 1
        - Increase counter by 1 using the ++ operator
        - Call console.log() to print the value of counter
    - What will the output be if we call the function twice?
    - Call the openFunction twice to verify:
        - When openFunction is called the first time, a local variable counter is created within the function's scope, initialized to 1, then incremented to 2, and finally 2 is logged to the console.
        - When openFunction is called the second time, a new local variable counter is created again within the function's scope, initialized to 1, then incremented to 2, and 2 is logged to the console again.
- Create a file named closedFunction.js
    - Define a function named closedFunction and within it, declare a local variable counter initialized to 1, and an inner function increment which increments counter and logs its value to the console.
    - What will the output be if we call the function twice?
    - Call closedFunction twice to verify:
        - Nothing will be logged to the console for these two function calls, as closedFunction returns the inner function increment but does not execute it. 
        - Therefore, increment is not called and nothing is logged to the console.
    - Create a variable countMe and assign it the result of calling closedFunction, which is the inner function increment.
    - What will the output be if we call countMe twice?
    - Call countMe twice to verify:
        - When countMe is called the first time, increment is executed, which increments counter to 2 (from 1) and logs 2 to the console.
        - When countMe is called the second time, increment is executed again, which increments counter to 3 (from 2) and logs 3 to the console.
        - As you can see, the closure (inner function) remembers the information associated to it (in-scope counter variable)
    
### Demo 3 Tax calculator with NPM (http, url and accounting modules)

- Create a new file named tax.js
- Run npm init to initialize the project
    - Set main as: tax.js
- Create basic web server with HTTP module as we did last class
    - Use http.createServer to create a new HTTP server. The callback function handles incoming requests and sends responses.
    - Use response.writeHead to write the HTTP response header with a 200 status code and text-html as the content type (it should be 'Content-Type': 'text/html' instead of 'text-html').
    - For now, just send text that reads 'Tax Calculator'
    - End the response using response.end.
    - Log a message to the console indicating the server is running and listening on port 3000.
- Run the app by using either of the following commands in the terminal:
    - npm start
    - node tax
- Open a browser and navigate to http://localhost:3000
    - Verify server is up and running
- Back to tax.js
- Import the http, and url modules using require.
- Modify the code inside the callback function in createServer()
    - Parse the URL using the url module to extract the query string, and then extract the subtotal value from the query string.
    - Calculate the tax based on a 13% rate, and calculate the total by adding the subtotal and tax together (ensuring they are treated as numbers).
    - Write the subtotal, tax, and total values to the response.
- Run the app and verify on a browser
    - What can be improved? Money Formatting
- Back to VS Code, make sure the application is not running and execute the following command in the terminal:
    - npm i accounting
    - Open package.json to verify package installation
    - You can now use the formatMoney() function. See https://www.npmjs.com/package/accounting
- Back to tax.js
    - Import the accounting module using require.
    - Modify the subtotal, tax, and total values in the response, formatting them using the accounting.formatMoney function.
- Run the app and verify on a browser