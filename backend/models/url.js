const mongoose = require('mongoose');


// Define the TestRequest schema
const urlSchema = new mongoose.Schema({
    email: {
        type: String,
        ref: 'user_details', 
        required: true
    },
    url: {
        type: String,
        required: true
    },
    credentials: {
        type: {
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        },
        required: true
    },
    status:{
        type: String,
        required: true
    },
    email: {
        type: String,
        ref: 'tester', 
        required: true

}
} , {timestamps : true})

module.exports = mongoose.model('url',urlSchema);