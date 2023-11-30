const intermediarioCadastrarUsuario = async (req, res, next) => {
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

    next()
}

module.exports = intermediarioCadastrarUsuario