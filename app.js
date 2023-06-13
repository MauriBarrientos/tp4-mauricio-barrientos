const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const port = process.env.PORT|| 5000;
const app = express();

//middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/',require('./src/routes/routes'));

app.listen(port||5000,()=>{
    console.log(`Servidor escuchando:${port}`)
});
