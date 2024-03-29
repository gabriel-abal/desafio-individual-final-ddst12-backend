const pool = require('../conexao')
const bcrypt = require('bcrypt')


const cadastrarUsuario = async (req, res) => {
    const { nome_loja, email, senha } = req.body

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const novoUsuario = await pool.query(
            `insert into usuarios (nome_loja, email, senha) values ($1, $2, $3) returning *`,
            [nome_loja, email, senhaCriptografada]
        )


        return res.status(201).json(novoUsuario.rows[0])
    } catch (error) {
        return res.status(400).json({ mensagem: error.message })
    }

}



module.exports = {
    cadastrarUsuario
}