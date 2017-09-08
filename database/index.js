const Sequelize = require('sequelize');
const config = require('config')['sequelize'];

const db = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'postgres',
  pool: config.pool
});

db
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;