/*Se você estiver usando a exportação de uma função diretamente, você deve fazê-lo desta forma:*/
/*export function somar(a, b) {
    return a + b
} as renomeia /*

import{somar as somarFunc} from './somar.js'
//transformando em modulo --^
/*Na verdade qunado exportamos uma função é mais apropriado usar export function.Pois devemos usar 'as' para renomear um membro exportado, na hora de chamr pode sr chamado somarFunc*/

/*A partir de ECMAScript 6 em diante, o uso de 'var' para declaração de variaveis não e a forma mais recomnedada de declarar funções ou variaveiss, especialmente quando trabalha com módulos ES6. Em vez disso e mais apropriado usar 'const' ou 'let' para declarar variaveis, dependendo da necessidade de reatribuição. Mas no caso da exportação de funções, deve usar a palavra-chave 'function'*/
// var somar = function (a, b) {
//     return a + b
// }
// export default somar

/*outro jeito (melhor)
chamando a função nomeada*/

// somar.js
var soma = function(a, b) {
    return a+b;
}

export default soma
