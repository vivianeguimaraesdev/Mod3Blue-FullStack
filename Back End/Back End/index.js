if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
    }
const express = require('express');
const cors = require('cors');
const Conn = require('./conn/conn');
const tarefasRoutes = require('./routes/Tarefas.routes.js');

const app = express();
app.use(cors());
app.use(express.json());

const db_url =process.env.DB_URL;
const db_user =process.env.DB_USER;
const db_pass =process.env.DB_PASS;
const db_data =process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

app.use('/tarefas', tarefasRoutes);


const port = 3001;
app.listen( process.env.PORT || port, ()=> {
console.info(`O app está rodando na porta http://localhost:${port}/`)
})