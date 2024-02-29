
var mongoose = require('mongoose');

async function getConnected() {
    await mongoose.connect("mongodb://127.0.0.1:27017/TaskManagement")
    console.log("Database connected ");
}

getConnected()
