
const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  telefono: { type: Number, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad:{ type: Number, required: true },
  usuario:{ type: String, required: true },
  contrasena:{ type: String, required: true }
});

module.exports = mongoose.model('Task', TaskSchema);  