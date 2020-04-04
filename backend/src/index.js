const express = require('express');
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
//Métodos HTTP:
//GET: Buscar/listar uma informação do beck-end.
//POST: Criar uma informação no back-end.
//PUT: Alterar uma informação no back-end.
//Delete: Deletar uma informação do back-end.

//Tipos de Parâmetros:
//Query: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação).     
//Rote: Parâmetros utilizados para identificar recursos.
//Body: Corpo da requisição. Utilizado para criar, ou alterar recursos.



 app.listen(3333);