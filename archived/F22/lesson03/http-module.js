// import http module
const http = require('http');
// configure server
http.createServer((req, res) => {
    // functionality of your web server
    // handle routing?? basic url based routing with if-else statements
    let path = req.url;
    console.log(path);

    // handle response accordingly based on value in path
    if (path == '/') { // / is root of website
        res.writeHead(200, 'plain-text');
        res.write('This is the home page!');
        res.end();
    }
    else if (path == '/Contact') {
        res.writeHead(200, 'plain-text');
        res.write('This is the Contact page!');
        res.end();
    }
    else if (path == '/About') {
        res.writeHead(200, 'plain-text');
        res.write('This is the About page!');
        res.end();
    }
    else { // invalid path in my website
        res.writeHead(404, 'plain-text'); // 404 means not found
        res.write('This is not a valid page!');
        res.end();
    }
})
// listen to port
.listen(3000);

console.log('App is running on http://localhost:3000');