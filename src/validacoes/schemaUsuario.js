const joi = require('joi')

const schemaUsuario = joi.object({
    nome_loja: joi.string().min(3).max(30).required().messages({
        'any.required': 'O campo Nome da Empresa é obrigatório',
        'string.empty': 'O campo Nome da Empresa é obrigatório',
        'string.min': 'O nome da empresa precisa conter no mínimo 3 caracteres',
        'string.max': 'O nome da empresa precisa conter no máximo 30 caracteres',
    }),
    email: joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido',
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O campo email é obrigatório',

    }),
    senha: joi.string().min(6).required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
        'string.min': 'A senha precisa conter no mínimo 6 caracteres',


    }),
    confirmarSenha: joi.string().required().valid(joi.ref('senha')).messages({
        'any.required': 'O campo confirmar senha é obrigatório',
        'string.empty': 'O campo confirmar senha é obrigatório',
        'any.only': 'As senhas digitadas não coincidem',

    })
})

module.exports = schemaUsuario