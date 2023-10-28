import Sequelize from "sequelize";// importando
const sequelize = new Sequelize("test", "root", "root1", {
    host: "localhost",
    dialect: "mysql"// ou 'postgres', 'sqlite', etc., dependendo do banco de dados que você está usando
});

//criando models
 //nome do modelo sempre no plural
const Postagem = sequelize.define("postagens",{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

//inserindo dados
Postagem.create({
    titulo: "DEUS È PODEROSO!",
    conteudo: "AMÉM!"
});
//gerar esse model no mysql, chamo ele

//sempre que isto foi usado comente ou delete pois ele ira recriar a tabela
//Postagem.sync({/*force: true*/}/*forçar a crição da tabela*/);/*Porem quando forçada ela sempre recriara a tabela, talvez ocasionando em perda de dados, RECOMENDADO USAR SEM O FORCE : TRUE/*///sincroniza um dodelo específico ou sequelize.sync() sincroniza todos os modelos definidos na instância
  
/*Para evitar criações repetidas*/

Postagem.findOrCreate({
    where: {titulo: "DEUS É PODEROSO!"},
    defaults: {conteudo: "AMÉM!"}
}).then(([postagem, created]) =>{
    if (created) {
        console.log("Nova postagem criada:", postagem.titulo);
    }else{
        console.log("Postagem já existe", postagem.titulo);
    }
}).catch((error) => {
    console.error("Erro ao encontra postagem", error);
});
const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
});

sequelize.sync(/*{force: true}*/);
//ou usar o node para avitar duplicaçõees
//testar
sequelize.authenticate().then(function() {
    console.log("Conectado!")
}).catch(function (error) {//captura o erro
    console.log("Falha ao conectar" + error);//para registra mensagem no console
    console.error("Erro ao se conectar");//para registrar mensagens de erro
});
//authenticate() verifica se realmente conectou ao banco de dados, porém sozinha ela não faz nada
//ela so pode ter dois resultados ao tentar conectar com com banco de dados erro ou sucesso, para sucesso then(), erro catch()


//em casos 
/* Xampp / Wampp instalado, pode criar uma DB pelo ambiente gráfico (como test) e na configuração é só utilizar :

const sequelize = new Sequelize('test', 'root', '', {
  host: "127.0.0.1",
  dialect : 'mysql'
});*/