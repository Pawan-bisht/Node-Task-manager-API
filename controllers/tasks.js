const Task = require('../models/task');

const getAllTasks = (req, res, next) => {
    res.send('ALL items from controllers');
}

const createTask = async (req, res, next) => {
    const task = await Task.create({ title:'First task', completed: true});
    res.status(201).json({ task });    
}

const getTask = (req, res, next) => {
    res.json({name:'Arpit'})
    
}

const updateTask = (req, res, next) => {
    res.send('Update Task');
}

const deleteTask = (req, res, next) => {
    res.send('Delete Task');
} 
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };