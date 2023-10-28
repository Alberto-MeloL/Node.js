var divisao = function(g, h) {
    try {
    (g / 0 || h / 0) 
         
    } catch (error) {
     console.log("O valor não pode ser divido por 0!")
    }
     return g / h
 }
 export default divisao