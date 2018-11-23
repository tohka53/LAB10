# Angular-App-API

##Proyecto de Programacion WEB

El propósito de Programación Web era que al finalizar el curso se tuviera una pagina Web Full Stack alojada en la nube.

##Contrucción de la pagina

    FrontEnd en Angular 
    BackEnd con NodeJs, MongoDB
    FullStack con Redis
    Docker
    Docker in Amazon Web Service y MongoDB en AWS
    
    
# FrontEnd
Se realizo el CRUD en Angular,  Se empleo Angular-Bootstrap 4 para manejar el diseño de la página.

Se siguio la guia para crear una App en Angular de Git. Los comandos que se ejecutaron fueron los siguientes:

    ng new name-app
    npm install -g @angular/cli
    npm install --save @ng-bootstrap/ng-bootstrap
    import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
    
# BackEnd

Se empleo NodeJs, se realizo una conexión con una base de datos MongoDB alojada en AWS, el resultado final fue una API con conexión a Mongo.

Los comandos que se ejecutaron para construir el BackEnd fueron:

    npm init
    npm install --save express body-parser mongoose

Se creo un database.js donde se configura la conexion al servidor y el puerto en donde se hara la conexión.

# Modelo del BackEnd

El BackEnd se creo en base la cual manda la informacion directamente a la base de datos; por lo que se tiene un Product.model.js donde se define la estructura del schema de la base de datos de MongoDB

    const mongoose = require('mongoose');
    const { Schema } = mongoose;
    const employeeSchema = new Schema({
    name: { type: String, required: true},
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true}
    });

    module.exports = mongoose.model('Employee', employeeSchema);

Luego se creo un Product.route.js donde se definieron las rutas del APi y un employee.controller.js donde se definieron las acciones para cada verbo.


    const express = require('express');
    const router = express.Router();

    const employee = require('../controllers/employee.controller');

    router.get('/', employee.getEmployees);
    router.post('/', employee.createEmployee);
    router.get('/:id', employee.getEmployee);
    router.put('/:id', employee.editEmployee);
    router.delete('/:id', employee.deleteEmployee);
    module.exports = router;
    
 # FullStack

Se implementación se llevo a cabo la unión del BackEnd con el FrontEnd. Para realizar la comunicación entre ambos se utilizo la función Fetch que ya viene integrada y es reconocida por varios navegadores y se definio un Proxy en el archivo package.json del FrontEnd.

    "proxy": "http://localhost:4200"

De esta manera al momento de realizar el Fetch la app sabia a donde redirigirse.

# Docker 

Para independizar cada uno de los servicios de BackEnd y FrontEnd cada uno se coloco en Docker. En esta fase se aprendió como realizar un Dockerfile y un Docker-Compose, el objetivo final de esto sería tener en un docker cada una de las partes.

# Cloud

Se creo una base de datos de MongoDb en Mlab y esta esta alojada en AWS. En azure se creo una VM con una imgen de Docker en Ubuntu. Luego de creada se realizo un git clone del repo que contenia el codigo final del proyecto y se realizó el docker-compose up para crear los contenedores.

Se modifico las rutas de localhost por la ip dada por AWS
