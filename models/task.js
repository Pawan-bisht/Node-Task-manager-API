const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Must Provide Title of task'],
        trim: true,
        maxlength: [30,'Cannot be more than 30 charater'],
    },
    completed:{
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);//pPl2F6END60FZRag