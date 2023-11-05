// import bodyParser from 'body-parser'; DESCONTINUADO
/*express.json() para analisar dados JSON e express.urlencoded() para analisar dados de formulário, como você já está fazendo.*, porem agora tem suporte nativo*/
// import path from 'path';
// const __dirname = path.resolve();

const express = require('express')
const expressHandlebars = require('express-handlebars');
const db = require('./models/db.cjs');
const Post = require('./models/Post.cjs');

    //Inicializando
const handlebars = expressHandlebars.create({ defaultLayout: 'main',
runtimeOptions:{
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
} });//deixa explicíto ()
const app = express();

    //Configuração
//Template Engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Configurando express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('styles'));

    //Rotas
app.get('/', (req, res) => {
    // res.setHeader('Content-Type', 'text/css'); o endpoint não pode ser deifinido no arquivo raiz

    Post.findAll({order: [['id', 'DESC'/*DESC descendente, ASC ascendente*/]]}).then((posts) =>{//findAll() recupera a tabela
        // console.log(posts)
        res.render('home', {/*posso passar qualquer tipo de dado para o hdb*/posts: posts});
    })//vai retornar tudo do banco de dados(tabela 'postapp')

});

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
res.redirect('/');//redirecionado    
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