const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    contactnumber: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
});

const Stakeholder = new mongoose.model("Stakeholder", userSchema);

module.exports = Stakeholder;