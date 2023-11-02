//BOA PRÀTICA quando se for criar models crai a primeira letra em maiúsculo e não estar no plural
//import { sequelize, Sequelize } from './db' importa seletivamente ou seja sequelize e Sequeliza apenas(ou só Sequelize pois só usei ela)
const db = require('./db.cjs');//importa tudo 

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING//tem um limite
    },
    conteudo: {
        type: db.Sequelize.TEXT//permite escrever mais
    }
});

db.sequelize.sync();
 //Post.sync({force: true});
module.exports = Post//Fica acessível para outros arquivos