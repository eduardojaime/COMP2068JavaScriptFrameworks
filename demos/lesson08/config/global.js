// JSON object containing configurations for my app
const configurations = {
    'db': 'mongodb+srv://projecttrackerapp:strongpass2023@cluster0.ndlnbb0.mongodb.net/ProjectTracker',
    'github': {
        'clientId': 'e51aaab7aa8d39207301',
        'clientSecret':'a5bed98315cbe58dd97db7400957a24f3b5cf0db',
        'callbackUrl':'http://localhost:3000/github/callback'
    }
}
// export in order to make it available to the rest of the app
module.exports = configurations;