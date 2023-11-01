import Sequelize from 'sequelize';

//Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', 'root1', {
    host: 'localhost',
    dialect: 'mysql',
});
 
//As exportações só pdem ser feitas após ter as váriaveis definida no código
export default {
    sequelize: sequelize,
    Sequelize: Sequelize
}


// var db = {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports = db;


