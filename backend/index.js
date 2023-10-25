const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;
const db = require('./config/db');
const EmpleadosRoutes = require('./routes/EmpleadoRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', EmpleadosRoutes)


app.listen(port, () => {
  console.log('>> Server listening on port ' + port);
});