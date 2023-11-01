// import bodyParser from 'body-parser'; DESCONTINUADO
/*express.json() para analisar dados JSON e express.urlencoded() para analisar dados de formulário, como você já está fazendo.*, porem agura tem suporte nativo*/
import express from 'express';
import expressHandlebars from 'express-handlebars';
import db from './models/db';
import Post from './models/Post';

const sequelize = db.sequelize;
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
    conteudo: req.body.conteudo,
    idade: req.body.idade
})
.then(() => {
    res.send("Tudo certo!")
})
.catch(error =>{
    res.send(error);
});
});

// sequelize.authenticate()
// .then(() => {    
//     console.log("Tudo certo!")
// })
// .catch((error) => {
//     console.error("Erro:", error)//, trata o erro diretament e + converte como string e trata como mensagem
// })
app.listen(3000, () => {
    console.log("Servidor rodando.")
});