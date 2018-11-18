const express = require('express');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

const BASE_URL= process.env.BASE_URL || 'http://localhost:4200'

// Middlewares
app.use(cors({origin: BASE_URL}));
app.use(express.json());

// Routes
app.use('/api/employees', require('./routes/employee.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
