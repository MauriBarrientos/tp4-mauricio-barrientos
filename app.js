// node, express, mysql, 
//Arrays, funciones, objetos, asincronismo

const express = require('express');
// const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express();


//midlewares
app.use(express.json());
// app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

//routes
app.use(require('./src/routes/routes'))

app.listen(5000);