const models = require('../models/autoresModels.js');

module.exports = {
    autoresMenu,
    autoresGetAll,
    autoresGetById,
    autoresAtivoInativo        
}

function autoresMenu(req, res) {
    res.json('Rota Autores Encontrada!!!');
    console.log('Rota Autores Encontrada!!!');
}

function autoresGetAll(req, res) {
    console.log('Listar Autores {M O D E L}');
    models.getAllAutores(function(err, resposta) {
        console.log('Retorno de Autores {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function autoresGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdAutores(id, function(err, resposta) {
        console.log('Retorno de Autores Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function autoresAtivoInativo(req, res) {
    const id = req.params.codigo
    res.json('Ativar/Inativar Autores { M O D E L }')    
    console.log('Ativar/Inativar Autores { M O D E L }')
    console.log('Parametro Esperado: ' + id);

    models.getByIdAutores(id, function(err, resposta) {
        console.log('Retorno de Autores Id {M O D E L}', resposta)
        let p_ativo = resposta[0].aut_ativoinativo
        if(err) {
            throw err;
        } else {
            if( p_ativo == 'A') {
                p_ativo = 'I'
            } else {
                p_ativo = 'A'
            }
        }
        console.log('A/I: ' + p_ativo);
        models.ativarInativar(id, p_ativo, function(err, result){
            if(err) {
                throw err
            }
            console.log("Registro Atualizado!!!")
//            res.redirect('/autores/consultar/' + id);
        })
    })
}
