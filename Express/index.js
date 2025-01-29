const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());// JSON Parser 
app.use(express.urlencoded({ extended: true })); //encoded url Parser
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");



//
//
// Setting Up routes
//
//
app.get('/', function (req, res) {
    res.render("index.ejs")
})
app.get('/:pagename', function (req, res) {

    let pageName = req.params.pagename
    res.render("index.ejs")
})
app.get('/CreateTask', function (req, res) {

    let formData = req.body
    res.send(formData)
})


app.listen(3000);