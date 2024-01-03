var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');

// --> 7) Mount the Logger middleware here

// --> 11) Mount the body-parser here

/** 1) Meet the node console. */
bGround.log("Hello World");
console.log("Hello World");

/** 2) A first working Express Server */


/** 3) Serve an HTML file */
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

/** 4) serve JSON on a specific  */
app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"))

/** 5) serve JSON on a specific  */

/** 6) Use the .env file to configure the app  */

/** 7) Root-level Middleware - A logger */

/** 8) Chaining the middleware. A Time Server  */
// place it before all the routes !

/** 9) Get input from client - Route parameters  */

/** 10) Get input from client - Query parameters  */
// /name?first=<firstname>&last=<lastname>

/** 11) Get ready for POST Request - the 'body-parser'  */
// place it before all the routes !

/** 12) Get data from POST  */

module.exports = app;