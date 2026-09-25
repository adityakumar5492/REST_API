const express = require("express");
const {
    getTasks,
    getTask
} = require("../controllers/task.controller");

const router = express.Router(); //creates a mini Express application specifically for handling routes.

router.get("/", getTasks);
router.get("/:id", getTask);

module.exports = router;