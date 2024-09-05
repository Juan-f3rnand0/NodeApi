const express = require('express');
const { dbConnection } = require('../database/config'); // Aquí corrige el nombre a dbConnection
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000; // Asegúrate de definir un puerto si no existe en las variables de entorno
        this.usuariosPath = 'api/usuarios';
        this.authPath = 'api/auth';

        this.middlewares();
        this.routes();
        this.connectionDb(); // Inicializamos la conexión a la base de datos
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`);
        });
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.static(__dirname + "/public"));
    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/usuario"));
        this.app.use(this.authPath, require("../routes/auth"));
    }

    async connectionDb() {
        await dbConnection(); // Corrige la llamada a dbConnection
    }
}

module.exports = Server;