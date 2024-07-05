const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Project = require("../../models/Project");
const { collection } = require("../../models/Task");

const Task = require("../../models/Task");
const User = require("../../models/User");
const validateTaskInput = require("../../validation/task");

router.get("/test", (req, res) => res.json({ msg: "This is the tasks route" }));

// GET ALL TASKS
router.get("/", (req, res) => {
  Task.find({})
    .then( tasks => res.json(tasks))
})

// GET TASKS BY PROJECT ID
router.get("/projects/:id", (req, res) => {
  const payload = {};
  Project.findById(req.params.id)
    .then( project => {
      payload.projects = project
      Task.find({projectId: project.id})
        .then( tasks => {
          payload.tasks = tasks;
          User.find({})
            .then(users => {
              payload.users = users;
              res.json(payload)
            })
        })
    })
})

// GET ALL TASKS FOR USER
router.get("/user/:userId", (req,res) => {
  const payload = {};
  Task.find({assignedUser: req.params.userId})
    .then(tasks => {
      payload.tasks = tasks;
      User.find({})
        .then(users => {
          payload.users = users
          res.json(payload)
        })
    })
})

// GET TASK BY ID
router.get("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then( tasks => res.json(tasks))
})


// CREATE A TASK
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateTaskInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newTask = new Task({
        description: req.body.description,
        projectId: req.body.projectId,
        assignedUser: req.body.assignedUser,
        status: req.body.status
      });
  
      newTask.save().then(task => {
        Project.findById(req.body.projectId)
          .then(project => {
            project.tasks.push(task.id)
            project.save()
              .then(res.json(task))
          })
      });
    }
);
// EDIT A TASK
router.patch("/:id", (req,res) => {
  Task.findById(req.params.id)
    .then( task => {
      task.description = req.body.description;
      task.status = req.body.status;

      task.save()
        .then(task => res.json(task))
    })
})

// ASSIGN USER TO TASK
router.patch("/assignTask/:id", (req, res) => {
  Task.findById(req.params.id)
    .then( task => {
      task.assignedUser.push(req.body.assignedUser)
      //assigned user in the body should be user id?
      task.save()
        .then( 
          User.findById(req.body.assignedUser)
          .then( user => {
            user.tasks.push(task.id)
            user.save()
              .then(res.json(task))
          })
        )
    })
})

// DELETE A TASK
router.delete("/:id", (req,res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(task => {
      Project.findOne({tasks: task.id})
        .then( project => {
          project.tasks.pull(task.id)
          project.save()
        })
      User.find({tasks: task.id})
        .then( users => {
          const updatedUsers = users.map( user => {
            user.tasks.pull(task.id)
            user.save()
          })
          res.json(updatedUsers)
        })
    })
})

module.exports = router;