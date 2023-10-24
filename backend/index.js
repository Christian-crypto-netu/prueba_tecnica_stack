const express = require('express');

const app = express();
const port = 4000;
const db = require('./config/db');
const EmpleadosRoutes = require('./routes/EmpleadoRoutes');

app.use(express.json());

app.use('/api', EmpleadosRoutes)


app.listen(port, () => {
  console.log('>> Server listening on port ' + port);
});