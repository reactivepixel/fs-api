const Sequelize = require('sequelize');
require('localenvironment');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

const user = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
});

const app = sequelize.define('app', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

user.hasMany(app, {
  foreignKey: 'userID',
});


sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;
exports.app = app;
