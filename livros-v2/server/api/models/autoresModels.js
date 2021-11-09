const conexao = require('../../config/conexao.js');

module.exports = {
    getAllAutores,
    getByIdAutores,
    ativarInativar        
}

function getAllAutores (callback) {
    conexao.query('select * from autores', callback)
}

function getByIdAutores (id, callback) {
    conexao.query('select * from autores WHERE aut_codigo = ' + id, callback)
}

function ativarInativar (id, ativo, callback) {
    console.log('Autores Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    const m_sql = "update autores set aut_ativoinativo = '" + ativo + "' where aut_codigo = '" + id + "'";

    conexao.query( m_sql, callback );

    console.log('Retornando { M O D E L } Autores Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    
}

