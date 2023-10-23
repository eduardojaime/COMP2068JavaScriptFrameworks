// JSON object that contains global configuration values
const configurations = {
  // key : value pairs
  db: "mongodb+srv://projectrackerwebapp:TyMIbDdQIaywXi9P@cluster0.ho53tdt.mongodb.net/ProjectTrackerWebApp",
  github: {
    clientId: "548e998eb1da351f9819",
    clientSecret: "a1928f6e4223999b30335e533a429929d6f461aa",
    callbackUrl: "http://localhost:3000/github/callback",
  },
};
// export object so we can import it with require()
module.exports = configurations;
