let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SubjectSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
      },
    credits: {
        type: Number,
    },
    image: {
        type: String
    },
    imageTeacher: {
        type: String
    }
});
module.exports = mongoose.model('subject', SubjectSchema);