const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
url: {
    type: String,
    ref: user,
    required: true
},
status: {
    type: String,
    enum: ['Request Under Review', 'Request Accepted', 'Testing In Progress', 'Testing Blocked','Testing Completed'], // Status options
    default: 'Request Under Review'
  }

})
const project = mongoose.model('project', projectSchema);

module.exports = project;
