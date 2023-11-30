const express = require('express');
const { cadastrarUsuario } = require('./controladores/usuarios');
const { login } = require('./controladores/login');
const intermediarioCadastrarUsuario = require('./intermediarios/IntermediarioCadastrarUsuario');

const rotas = express();

rotas.post('/usuario', intermediarioCadastrarUsuario, cadastrarUsuario);
rotas.post('/login', login)

module.exports = rotas