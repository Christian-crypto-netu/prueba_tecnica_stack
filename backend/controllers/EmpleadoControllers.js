const Empleado = require('../models/EmpleadoModel');

const EmpleadoController = {
  getAllEmpleados: (req, res) => {
    Empleado.getAll((err, empleados) => {
      if (err) {
        res.status(500).json({ error: 'Error al obtener los empleados' });
      } else {
        res.status(200).json(empleados);
      }
    });
  }, 

  getEmpleadoById: (req, res) => {
    const id = req.params.id;
    Empleado.getById(id, (err, empleado) => {
      if (err) {
        res.status(500).json({ error: 'Error al obtener el empleado' });   
      } else {
        if (empleado.lenght === 0) {
        res.status(404).json({ error: 'Empleado no encontrado' });
      } else {
        res.status(200).json(empleado[0]);
        }
      }
    });
  },

  createEmpleado: (req, res) => {
    const nuevoEmpleado = req.body;
    Empleado.create(nuevoEmpleado, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error al crear empleado' });
        console.log(err);
      } else {
        res.status(201).json({ message: 'Empleado creado con exito', id: result.insertId });
      }
    });
  },

  updateEmpleado: (req, res) => {
    const id = req.params.id;
    const empleadoActualizado = req.body;

    Empleado.update(id, empleadoActualizado, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error al actualizar el empleado' });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Empleado no encontrado' });
        } else {
          res.status(200).json({ message: 'Empleado actualizado con exito' });
        }
      }
    })
  },

  deleteEmpleado: (req, res) => {
    const id = req.params.id;
    
    Empleado.delete(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error al eliminar empleado' });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Empleado no encontrado' });
        } else {
          res.status(200).json({ message: 'Empleado eliminado con exito' });
        }
      }
    });
  }
};

module.exports = EmpleadoController;