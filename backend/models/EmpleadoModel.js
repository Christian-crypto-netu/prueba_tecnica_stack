const db = require('../config/db');

const Empleado = {
  getAll: (callback) => {
    db.query('SELECT * FROM empleado', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM empleado WHERE id = ?', [id] ,callback);
  },

  create: (empleado, callback) => {
    db.query('INSERT INTO empleado (nombre, email, sexo, area_id, boletin, descripcion) VALUES (?, ?, ?, ?, ?, ?)',
    [empleado.nombre, empleado.email, empleado.sexo, empleado.area_id, empleado.boletin, empleado.descripcion, empleado.roles], callback);
  },

  update: (id, empleado, callback) => {
    db.query('UPDATE empleado SET nombre = ?, email = ?, sexo = ?, area_id = ?, boletin = ?, descripcion = ? WHERE id = ?',
    [empleado.nombre, empleado.email, empleado.sexo, empleado.area_id, empleado.boletin, empleado.descripcion, empleado.roles, id],
    callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM empleado WHERE id = ?', [id], callback);
  }
};

module.exports = Empleado;