const calcularLitros = require("./CalcularLitros.js");

let tipoCombustível = "INSIRA AQUI O TIPO DE COMBUSTÍVEL, OPCÕES: 'gasolina', 'etanol'."
let distânciaPercurso = "INSIRA AQUI A DISTÂNCIA DO PERCURSO EM METROS, TIPO NUMBER, INT, E NÃO NEGATIVO."

console.log(calcularLitros.LitrosNecessários(distânciaPercurso, tipoCombustível));
