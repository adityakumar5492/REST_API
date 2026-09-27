const express = require("express");
const app = express(); //creates the application
const taskRoutes = require("./routes/task.routes");

const PORT = 5000;

app.use(express.json()); // JSON body parsing
//first API route
// app.get("/",(req,res) => {
//     res.send("API is working");
// })
// same above code make cleaner and api endpoint written in another seprate file 
app.use("/api/tasks", taskRoutes); //app.use() is for mounting middleware or a group of routes
//the request coming with /api/tasks it passes to taskRoutes

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
})