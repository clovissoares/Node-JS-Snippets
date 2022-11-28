//Requerindo o sequelize e a configuração dele
const Sequelize = require('sequelize');
const configDB = require('../config/database');

//Constantes dos modelos
const Ingredient = require('../models/Test');

//Criando a conexão do sequelize e configurando
const connection = new Sequelize(configDB);

//Init das conexões
Ingredient.init(connection);

//Associates dos modelos
Ingredient.associate(connection.models);

//Exportando as conexões para o main index.js
module.exports = connection;