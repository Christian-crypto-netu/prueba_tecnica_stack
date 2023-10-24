const express = require('express');
const router = express.Router();

const EmpleadoController = require('../controllers/EmpleadoControllers');


router.get('/empleados', EmpleadoController.getAllEmpleados);

router.get('/empleados/:id', EmpleadoController.getEmpleadoById);

router.post('/empleados', EmpleadoController.createEmpleado);

router.put('/empleados/:id', EmpleadoController.updateEmpleado);

router.delete('/empleados/:id', EmpleadoController.deleteEmpleado);

module.exports = router;

