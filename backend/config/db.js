const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prueba_tecnica_dev',
});

db.connect((err) => {
  if (err) {
    console.error('>> Error al conectar a la base de datos');
    console.error(err);
  } else {
    console.log('>> Conexion con la base de datos exitosa');
  }
});

module.exports = db;