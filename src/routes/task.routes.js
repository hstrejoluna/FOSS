 
const express = require('express');
const router = express.Router();

// Task Model, con esta constante se haran todas las consultas!!!
const Task = require('../models/task');

// GET all Tasks
router.get('/', async (req, res) => {                     /// async await hace un parote por si se demora
  const tasks = await Task.find();                        /// la busqueda v:
  res.json(tasks);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { telefono, nombre, apellido, edad, usuario, contrasena } = req.body;        /// OJO: es contrasena
  const task = new Task({telefono, nombre, apellido, edad, usuario, contrasena});    /// con N, no con Ñ para
  await task.save();                                                                /// evitar pedos v:
  res.json({status: 'Task Saved'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { telefono, nombre, apellido, edad, usuario, contrasena } = req.body;
  const newTask = { telefono, nombre, apellido, edad, usuario, contrasena };
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});

module.exports = router;