// Require the necessary packages
const bodyParser = require("body-parser")
const express = require("express")
const path = require('path')

const indexRoute = require('./routes/index')

// Create an express app
const app = express()

// Middleware for parsing incoming requests with URL-encoded payloads
app.use(bodyParser.urlencoded({extended : false}))

// Set the view engine to ejs and the views directory
app.set("view engine", "ejs");
app.set("views", "views");

// Set the static directory for serving static files like images, stylesheets, and scripts
app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoute)
// Start the server and listen on port 3000
app.listen(3000, ()=>{
    console.log('server run on 3000');
})