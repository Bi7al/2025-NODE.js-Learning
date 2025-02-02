const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const cookieParser = require('cookie-parser');

const userModel = require("./models/user")


app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.render("createuser");
})


app.post('/create', function (req, res) {

    bcrypt.genSalt(10, (error, salt) => {

        bcrypt.hash(req.body.password, salt, async (error, hash) => {
            let user = await userModel.create({
                name: req.body.username,
                email: req.body.email,
                password: hash

            });

            const token = jwt.sign({ email: req.body.email }, "MYSECRET");
            res.cookie("token", token);
            res.redirect('/');
        })


    })







})
app.get('/login', function (req, res) {



    res.render("login");
})

app.get('/logout', (req, res) => {
    res.cookie("token", "")
})


app.listen(3000)