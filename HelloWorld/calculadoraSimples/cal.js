//da para organizar melhor os módulos, Ex: dentro de pastas

//carregando o módulo
//é uma função específica do node
//var somaFunc = "./somar";//não precisa colocar a extensão do arquivo, pois ele já detecta que é js, aqui importa o módulo "somar.js"

/*um jeito de importar
import somar from "./somar"
console.log(somar(2, 8))

outro jeito

import "./somar"

const resultado = somar(5, 65)
console.log(resultado)

outra maneira*/

/*import somar from "./somar";
console.log(somar(5, 5))*/
//para importação da função direta
/*Ex:
export function somar(a, b){
    return a + b
}*/
import soma from "./somar";

console.log(soma(5, 6)); // Deve imprimir 10
