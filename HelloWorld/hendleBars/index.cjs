// import bodyParser from 'body-parser'; DESCONTINUADO
/*express.json() para analisar dados JSON e express.urlencoded() para analisar dados de formulário, como você já está fazendo.*, porem agura tem suporte nativo*/
// import path from 'path';
// const __dirname = path.resolve();

const express = require('express')
const expressHandlebars = require('express-handlebars');
const db = require('./models/db.cjs');
const Post = require('./models/Post.cjs');
//Inicializando
const handlebars = expressHandlebars.create({ defaultLayout: 'main' });//deixa explicíto ()
const app = express();

//Configuração
//Template Engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Configurando express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Rotas
app.get('/cad', (req, res) => {
    res.render('formulario');//renderizar o arquivo formulario
});

//quando trabalhamos com o método post(ouseja essa rota só vai poder ser acessada quando alguém fizer uma requisição ao método post(formulario))
//E não é possível acessar esse tipo de rota pela URL, somente do método get
//npm install --save body-parser instalando biblioteca para tratar dados
app.post('/postagens', (req, res) => {
Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
})
.then(() => {
    res.send("Tudo certo!")
})
.catch(error =>{
    res.send("erro" + error);
});
});

// sequelize.authenticate()
// .then(() => {    
//     console.log("Tudo certo!")
// })
// .catch((error) => {
//     console.error("Erro:", error)//, trata o erro diretament e + converte como string e trata como mensagem
// })
app.listen(5040, () => {
    console.log("Servidor rodando.")
});