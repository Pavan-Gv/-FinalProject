const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const db = require('../db/mongodb');
db.dbConnection();

const traineeSchema = new Schema({
    "name": {
        type: String,
        required: [true, "Please enter the Name of the Trainee"]
    },
    "age": Number,
    "phone": Number,
    "email": String,
    "topic": {
        type: String,
        enum: ["HTML", "CSS", "JS", "MERN"]
    },
    "createdDate": {
        type: Date,
        default: Date.now(),
    }
});

const traineeModel = new mongoose.model("trainees", traineeSchema);

module.exports = traineeModel;