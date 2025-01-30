const express = require('express');
const app = express();
const path = require('path');
const fileSystem = require('fs');

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
    fileSystem.readdir("./files", (err, files) => {
        if (err) {
            console.log("There Was an Error")
        } else {
            res.render("index.ejs", { files: files });
        }
    })
})

app.get('/Create', function (req, res) {

    fileSystem.writeFile(`./files/${req.query.title.split(" ").join("")}.txt`, req.query.details, (error) => {
        if (error) {
            console.log("There Was an Error Writing FIle")
        }
        else {
            console.log("File Written Successfully");
        }
    })
    res.redirect("/")
})

app.get('/viewtask/:filename', function (req, res) {

    fileSystem.readFile(`./files/${req.params.filename}`, "utf-8", (error, filedata) => {
        if (error) {
            console.log("Cannot Read File")
        } else {
            res.render("task", { filename: req.params.filename, filedata: filedata })
        }
    })


})


app.listen(3000);