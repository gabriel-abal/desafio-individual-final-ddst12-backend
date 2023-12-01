const express = require('express');
const { cadastrarUsuario } = require('./controladores/usuarios');
const { login } = require('./controladores/login');
const validarCorpoRequisicao = require('./intermediarios/validarCorpoRequisicao');
const schemaUsuario = require('./validacoes/schemaUsuario');


const rotas = express();

rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), cadastrarUsuario);
rotas.post('/login', login)

module.exports = rotas