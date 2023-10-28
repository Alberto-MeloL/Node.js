//importando o modulo express
//ES6 ler a documentação
import express from "express";//função que cria o express
import path from 'path'//gerencia os diretórios

const __dirname=path.resolve();//define__dirname como diretótio absoluto
const app = express();
//para evitar quaquer tipo de erro é bom colocar uma const, pois vai evitar que ela seja subscrita(forma de segurança)

//criando rotas
/*req, é uma requisição que recebemos, res é a resposta ao cliente*/
app.get("/", (req, res) => {
    // res.send("oia");
    res.sendFile(__dirname + "/html/index.html")
    // __dirname essa variavel ela vai retornar o diretorio raiz(completo,EX: C:/users/desktop/HellWorld) da minha aplicação.Evitará erros futuros
});

app.get("/sobre", function(req, res) {
    res.send("página sobre");
});

app.get("/aviso", function(req, res) {
    res.send("loremipue2frrfgrrrrrrrrgr")
});
 
//rotas dinâmicas utilizando parâmetros   
app.get("/ola/:cargo/:nome", function(req, res) {
    res.send("Ola" +  req.params.nome)//obeter parametros
    //a função send só poder ser uma única vez
});
//o express ele é um framework orientado a rotas

// application
app.listen(8080, () => {
   console.log("Servidor rodando.");
//    var item = document.createElement("h1");
//    item = "oi";
//    app.appendChild(item);
});//isso ter que estar na última linha, pois o que estiver abaixo não irá funcionar

//uma funão de callback,  é uma função que é usada sempre que houver um evento

//instalando nodemon
//npm install flag-> -g, no caso globalmente(todo o sistema)

/*Function function com letra maiuscula o que e,
signedCookies para que serve*/
/*A estrutura de diretórios usa barra invertida, porém você usou barras normais, eu testei as duas e funcionou normalmente só que com a barra invertida é preciso colocar duas \\ pra funcionar, quer dizer então que tanto faz ou uma ou outra?*/ 
/*como pegar imagens localmente com funcoes js,o express e angular, diferença?*/
/*o angular pode substituir o node, ou vice versa*/