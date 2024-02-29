const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        // required:[true,"Full Name Must Required"]
    },
    username:{
        type:String,
        // // required:[true,"User Name Must Required"],
        unique:true
    },
    email:{
        type:String,
        // // required:[true,"Email Address Must Required"],
        unique:true
    },
    phone:{
        type:String,
        // // required:[true,"Phone Number Must Required"]
    },
    password:{
        type:String,
        // // required:[true,"Password Must Required"]
    },

})
const User = new mongoose.model("User",UserSchema)
module.exports = User