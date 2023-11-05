const Sequelize = require('sequelize')
//Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', 'root1', {
    host: 'localhost',
    dialect: 'mysql',
});
 
//As exportações só pdem ser feitas após ter as váriaveis definida no código
module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}


sequelize.authenticate()
.then(() => {
    console.log("OK, conexão estabelecida.")
})
.catch((error) => {
    console.error("Erro" + error)
})

// var db = {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports = db;


