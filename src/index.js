const express = require('express');
const pool = require('./conexao');
const rotas = require('./rotas');

const app = express();

app.use(express.json());
app.use(rotas)

app.get('/', async (req, res) => {


    try {
        const resultado = await pool.query('select * from usuarios')
        return res.json(resultado.rows)
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(3000);
