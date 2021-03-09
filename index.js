const express = require('express');
const app = express();
const listaUsuarios = [
    'Breno',
    'Ivens',
    'Jailson',
    'Nykolle',
];

app.use(express.static(__dirname + '/src/assets/img'));


const path = require('path');

//Query Params
//Ex:localhost:12345/usuarios?nome=Breno
app.get('/usuarios', (req, res) => {
    const { nome } = req.query;
    let listaRetorno = listaUsuarios.filter(i => i.includes(nome || ''))
    return res.json(listaRetorno)
});


//Route Params
//Ex: ecommer.com.br/produtos/4/detalhes
//app.get('/hello/:usuario', (req,res) => {
    //const { usuario } = req.params;
    //return res.send(`Hello world ${usuario}`);   //usar return como boa prática
//});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/index.html'));
});


app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
});