const { name } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/authtest");
let user = mongoose.Schema({
    name: String,
    email: String,
    password: String
})
module.exports = mongoose.model("user", user)