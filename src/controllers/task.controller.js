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

const createTask = (req,res) =>{
    const{title} = req.body;

    const newTask = {
        id:tasks.length+1,
        title: title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
};

const updateTask = (req,res) =>{
    const id  = Number(req.params.id);
    
    const task = tasks.find(task => task.id === id);

    if(!task){
        return res.status(404).json({
            message: "Task not found"
        });
    }

    if(req.body.title !== undefined){
        task.title = req.body.title;
    }

    if(req.body.completed !== undefined){
        task.completed = req.body.completed;
    }

    res.status(200).json(task);
};

const deleteTask = (req,res) => {
    const id = Number(req.params.id);

    const index = tasks.findIndex(task => task.id === id);

    if(index === -1){
        return res.status(404).json({
            message: "task does'nt exist"
        });
    }

    tasks.splice(index,1);

    res.status(200).json({
        message:"Task deleted successsfully"
    });
    
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};