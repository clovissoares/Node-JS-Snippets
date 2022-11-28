const { Sequelize } = require('sequelize');
const configDB = require('./src/config/database');

const test = new Sequelize(configDB);

async function testConnection () {
    try {
        await test.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
} 

testConnection();