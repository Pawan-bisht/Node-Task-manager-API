const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    completed:{
        type: Boolean
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);//pPl2F6END60FZRag