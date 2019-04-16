'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

//Conexion a base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cajonn_comunidad', { useNewUrlParser: true})

		.then(() => {
			console.log("La conexión a la base de datos cajonn_comunidad se ha realizado correctamente!!");
		
		//Crear Servidor
		app.listen(port, () =>{
			console.log("Servidor corriendo en http://localhost:3800");
		});
	  })
	  .catch(err => console.log(err));