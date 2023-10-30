import express from 'express';
import expressHandlebars from 'express-handlebars';
import Sequelize from 'sequelize';

//Inicializando
const handlebars = expressHandlebars.create({defaultLayout: 'main'});//deixa explicíto ()
const app = express();

    //Configuração
        //Template Engine
        app.engine('handlebars', handlebars.engine);
        app.set('view engine', 'handlebars');

    //Conexão com o banco de dados MySQL
const sequelize = new Sequelize('test', 'root', 'root1', {
    host: 'localhost',
    dialect: 'mysql',
});
    //Rotas

    app.get('/cad', (req, res) =>{
         res.render('formulario');//renderizar o arquivo formulario
    });

app.listen(8081, () => {
    console.log("Servidor rodando.")
});