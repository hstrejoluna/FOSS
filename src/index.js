const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); //morgan sirve para wachar peticiones en la CLI
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes'));   //las rutas we como la 68 :V

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;   /// TODO EL FRONT-END va en public

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});