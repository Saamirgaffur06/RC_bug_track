const mongoose = require('mongoose');

const usersSchema= new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },
    
    email : {
        type : String,
        required : true ,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    // status:{
    //     type: String,
    //     required: true
    // }
} , {timestamps : true})

module.exports = mongoose.model('user_details',usersSchema);