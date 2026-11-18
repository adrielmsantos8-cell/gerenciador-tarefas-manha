const path = require('path');
const express = require('express');
const pool = require('./config/database')

const app = express();
app.use(express.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',async(req,res) => {
const[linhas] = await pool.query('select COUNT(*)  AS total FROM tarefas_db.categoria');
    res.send('conectado ao mysql: ' + linhas[0].total + 'categorias cadastradas')

})

modulo.exports = app;
