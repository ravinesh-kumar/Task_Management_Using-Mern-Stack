const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        // required: [true, "title Must Required"]
    },
    description: {
        type: String,
        // required: [true, "description Must Required"],

    },
    duedate: {
        type: Date,
        // required: [true, "duedate Must Required"],

    },


})
const Task = new mongoose.model("Task", TaskSchema)
module.exports = Task