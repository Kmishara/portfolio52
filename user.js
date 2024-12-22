const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Sweta_42:sweta_118@cluster0.nx1xk.mongodb.net/portfolio52");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    msg: { type: String, required: true },
})


module.exports = mongoose.model("user", userSchema);