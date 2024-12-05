const calcularLitros = require("./CalcularLitros.js");

let tipoCombustível = "INSIRA AQUI O TIPO DE COMBUSTÍVEL, OPCÕES: 'gasolina', 'etanol'."
let distânciaPercurso = Number("INSIRA AQUI A DISTÂNCIA DO PERCURSO EM METROS, TIPO NUMBER, INTEIRO, E NÃO NEGATIVO.")

console.log(calcularLitros.LitrosNecessários(distânciaPercurso, tipoCombustível));