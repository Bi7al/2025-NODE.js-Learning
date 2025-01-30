const express = require('express');
const app = express();
const userModel = require('./userModel');
app.get('/', function (req, res) {

    res.send('Hello World');
})

app.get('/create', async (req, res) => {

    let user = await userModel.create({
        name: "Bilal",
        email: "mbilal@gmail.com"
    })
    res.send(user);


})
app.get('/read', async (req, res) => {

    let users = await userModel.find();
    res.send(users);


})
app.get('/update', async (req, res) => {

    let updatedUser = await userModel.findOneAndUpdate({ email: "mbilal@gmail.com" }, { name: "ali" }, { new: true });
    res.send(updatedUser);


})
app.get('/delete', async (req, res) => {

    let deletedUser = await userModel.findOneAndDelete({ email: "mbilal@gmail.com" })
    res.send(deletedUser);


})

app.listen(3000);