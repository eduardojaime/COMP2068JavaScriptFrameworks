# Instructions

### Part 1 Setting up Visual Studio Code and an Azure Account

- For this tutorial you'll need an Azure Account
    - You can use your student account
    - Alternatively, if you don’t have access to a student account, sign up for a Free Trial (30 days) account (https://azure.microsoft.com/en-us/free/) which gives you:
        - USD$200 dollars in credits
        - 12 Months of Free Services
        - 25+ other services are always free
    - Note that Azure Functions are always free, up to 1 million requests
    - Access your account by navigating to https://portal.azure.com/
- Open Visual Studio Code
    - Open the Extensions tab and look for Azure Functions
    - Select the extension from Microsoft and install
    - Verify the installation by looking for the Azure option that will appear on the left side menu
    - Click on the Azure icon to open the extension
    - Look for the FUNCTIONS subsection
        - Click on Sign In to your Account to connect Visual Studio Code to your Azure account

### Part 2 Creating and Running an Azure Function Locally

- Open Visual Studio Code
    - Click on the Azure icon to open the extension
    - Click on the Create New Project (folder with a thunder) icon in the FUNCTIONS subsection
    - Select Browse and select the folder where you want to create your application
    - Select JavaScript as the programming language
    - Since this is a REST API endpoint, select HTTP trigger as project template
    - Provide a name for this function, this name is used as part of the application URL to identify this function
        - NOTE: A project can contain multiple functions, each identifiable by URL
    - Select function as the authorization level
    - Select 'Open in current window' to open the project template in the current Visual Studio Code instance
    - This is the project template
        - Review folders and files structure
        - Package.json contains information about the project and its dependencies
        - Each function is contain in its own folder
            - function.json contains function level configurations, here we an specify bindings for triggers and parameters, as well as allowed methods (get and post by default)
            - index.js contains the function's main code
                - As you can see, this is an exported function with two parameters, context and req
                - Req is the request object
                - Use context.res object to set the response properties
        - Open index.js
    - To run this function locally, press F5 or click on Run > Start debugging at the top
        - Get the function URL from the Terminal
        - Open Insomnia REST client, create a new GET request to this endpoint
            - It will look like this: nodefunctiontest: [GET,POST] http://localhost:7071/api/nodefunctiontest 
            - Send the request, and verify response status code and message, it will recommend to pass a name parameter
            - Go to the query tab to add a new parameter called name with your name as value, send again and verify customized response message

### Part 3 Deploying an Azure Function to Azure using Visual Studio Code

- Open Visual Studio Code
    - Click on the Azure icon to open the extension
    - Click on the Deploy to Function App (cloud with upward arrow) icon in the FUNCTIONS subsection
    - Select Create new Function App in Azure
    - Provide a name for your function app, this has to be a globally unique name which will be used to access your app via the internet, e.g. https://nodefunctiontest.azurewebsites.net
    - Select Node.js 14 LTS as the runtime stack
    - Select a region close to your current location (Canada Central if you are in Ontario)
    - Wait for the function to be created
    - To test this function locally, right click on it and select Open in Portal
        - Navigate to the function overview
        - Get the function URL from the function overview page
        - Open Insomnia REST client, create a new GET request to this endpoint
            - It will look like this: nodefunctiontest: [GET,POST] http://functionappname.azurewebsites.net/api/nodefunctiontest 
            - Send the request, and verify response status code and message, it will recommend to pass a name parameter
            - Go to the query tab to add a new parameter called name with your name as value, send again and verify customized response message

### Part 4 Creating and Running an Azure Function on Azure using the Portal

- Another way of creating Azure Functions is through the Portal
- Sign in to the portal using your Free Account  https://portal.azure.com/
    - There are several ways to access the Functions management page (blade) from the home page
        - Use the search bar at the top to search for Function App
        - Click on 'More Services' and look for Function App
    - Once you are on the Function App blade
        - This blade allows you to manage your function apps: create, delete, stop and restart them
        - Click on '+ Create' at the top
            - This will take you to the Basic tab
                - Create a new resource group called nodefunctiontest
                - Provide a name for your function app, this has to be a globally unique name which will be used to access your app via the internet, e.g. https://nodefunctiontest.azurewebsites.net
                - Select Node.js from the Runtime Stack dropdown list
                - Verify version is 14 LTS
                - Select a region close to your current location (Canada Central if you are in Ontario)
            - Click next to go to Hosting
                - Verify that Plan Type is 'Consumption', this is free up to 1 million requests
                - Leave the other configurations as they are
            - Click Review and Create to go to the last step, we won't be configuring Monitoring, or Tags for now
                - Confirm runtime stack is Node.js 14 LTS
                - Confirm function name
                - Click Create and wait for it to deploy
    - Once this is done, click on 'Go to Resource' to open your Function App
        - Click on Functions on the left hand menu to see all functions (endpoints) added to this project, this must be empty
        - Click on 'Create' at the top
            - Since this example is a REST API endpoint select HTTP trigger, provide a name for the function and click Next
                - This creates a function based on this trigger
                - Click on Code + Test on the left hand menu to open the code editor
                - Azure Portal comes with a built-in editor for functions that supports different programming languages
                - This default function reads a name value passed in a query string parameter or in the request body
                    - Here's where you can write your code, for now we'll leave the default functionality
                - To test, go back to Overview by clicking the corresponding option on the left side menu
                    - Click on Get Function URL to obtain the URL that points to this specific function
                    - Open Insomnia REST client, create a new GET request to this endpoint
                        - Send the request, and verify response status code and message, it will recommend to pass a name parameter
                        - Go to the query tab to add a new parameter called name with your name as value, send again and verify customized response message