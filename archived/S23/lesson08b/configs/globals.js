// short for "global configurations"
// JSON object which contains app-wide configuration values
const configurations = {
    // key : value
    "db": "mongodb+srv://webadmin:password-summer2023@cluster0.diiqaz6.mongodb.net/comp2068a",
    "github": {
        "clientId": "d5bdc66cbc88d722bdb9",
        "clientSecret": "2cadf9bfe187ecabd48d30509324f05af30f6d48",
        "callbackUrl": "http://localhost:3000/github/callback"
    }
}
// export to make it available to the other files
module.exports = configurations;