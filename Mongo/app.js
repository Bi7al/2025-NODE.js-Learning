const express = require('express');
const path = require('path');
const userModel = require("./mongodb/userModel")
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', async function (req, res) {
    let users = await userModel.find();
    res.render("index", { users: users });
})
app.post('/create', async function (req, res) {
    await userModel.create({
        name: req.body.name,
        email: req.body.email,
    })
    res.redirect('/')
})

app.get('/delete/:username', async function (req, res) {
    await userModel.findOneAndDelete({ name: req.params.username })
    res.redirect('/')
})
app.get('/update/:username', async function (req, res) {
    res.redirect('/')
})



app.listen(3000)