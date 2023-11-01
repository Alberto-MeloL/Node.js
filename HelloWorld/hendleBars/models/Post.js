//BOA PRÀTICA quando se for criar models crai a primeira letra em maiúsculo e não estar no plural
//import { sequelize, Sequelize } from './db' importa seletivamente ou seja sequelize e Sequeliza apenas(ou só Sequelize pois só usei ela)
import db from './db.js';//importa tudo 
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }, 
    idade:{
        type: db.Sequelize.INTEGER
    }
});

// Post.sync({force: true});
export default Post;//Fica acessível para outros arquivos