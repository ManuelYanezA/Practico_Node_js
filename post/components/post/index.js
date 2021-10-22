const store = require('../../../store/mysql');
const ctrl = require('./controller');

//Pasamos el controlador como si fuese una función a la que le inyectan el store
module.exports = ctrl(store);