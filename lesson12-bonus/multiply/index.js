// multiplies x times y and returns a result
module.exports = async function (context, req) {
    context.log('Function Started');

    // ?x=100&y=10 in query string
    const x = req.query.x;
    const y = req.query.y;

    // if they are not null
    if (x && y) {
        let result = x * y;
        // successful request
        context.res = {
            status: 200,
            body: "Result is " + result
        };
    }
    else {
        // incorrect request
        context.res = {
            status: 400,
            body: "You must provide both X and Y values"
        }
    }    
    context.log('Function Finished');
}