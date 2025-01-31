const { name } = require('ejs');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/crud")
let userSchema = mongoose.Schema({
    name: String,
    email: String,
})

module.exports = mongoose.model("user", userSchema);