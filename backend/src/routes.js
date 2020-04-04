const express = require("express");
const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require("./Controllers/ProfileController");
const SessionController = require("./Controllers/SessionController");

const connection = require("./databese/connections");

const routes = express.Router();

//Rota de Listagem
routes.get('/ongs', OngController.index);

//Rota de Cadastro da ONG
routes.post('/ongs', OngController.create);

//Rota de Cadastro dos Casos
routes.post('/incidents', IncidentController.create);

//Rota de Listagem dos Casos
routes.get("/incidents", IncidentController.index);

//Rota de deletar casos
routes.delete("/incidents/:id", IncidentController.delete);

//Rota de Listar Casos Específicos
routes.get("/profile", ProfileController.index);

//Rota de Login
routes.post("/sessions", SessionController.create);

module.exports = routes;