const tasks = require("../data/tasks");

const getTasks = (req,res) => {
    res.json(tasks);
};

const getTask = (req,res) =>{
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if(!task){
        return res.status(404).json({
            message : "Task not found"
        });
    }

    res.json(task);
};

module.exports = {
    getTasks,
    getTask
};