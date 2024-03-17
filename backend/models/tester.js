const mongoose = require('mongoose');


const testerSchema = new mongoose.Schema({
    url: {
        type: String,
        Ref: user,
        required: true
    },
    bug_name:{
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Testing In Progress', 'Under Triage', '“Need More Info', 'Fixed','Validated and Closed','Not Reproducible','Closed','Testing Completed'], // Status options
        default: 'Testing In Progress'
      }

})
const tester = mongoose.model('tester', testerSchema);

module.exports = tester;