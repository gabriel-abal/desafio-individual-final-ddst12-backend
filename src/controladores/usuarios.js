const pool = require('../conexao')

const cadastrarUsuario = async (req, res) => {
    const { nome_loja, email, senha } = req.body

    if (!nome_loja) {
        return res.status(400).json({ mensagem: 'O campo nome_loja é obrigatório' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'O campo email é obrigatório' })
    }

    if (!senha) {
        return res.status(400).json({ mensagem: 'O campo senha é obrigatório' })
    }

    try {

        const novoUsuario = await pool.query(
            `insert into usuarios (nome_loja, email, senha) values ($1, $2, $3) returning *`,
            [nome_loja, email, senha]
        )

        // const query = `insert into usuarios (nome_loja, email, senha) values ($1, $2, $3) returning *`
        // const { rows } = await pool.query(query, [nome_loja, email, senha])

        return res.status(201).json(novoUsuario.rows[0])
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servirdor' })
    }

}



module.exports = {
    cadastrarUsuario
}