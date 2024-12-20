const calcularLitros = require('./CalcularLitros.js');

test('Tipo de combustível escolhido: gasolina', () => {
  expect(calcularLitros.LitrosNecessários(20000, "gasolina")).toBe(1250);
});

test('Tipo de combustível escolhido: etanol', () => {
  expect(calcularLitros.LitrosNecessários(22000, "etanol")).toBe(2000);
});

test('Tipo de combustível escolhido: diessel', () => {
  expect(calcularLitros.LitrosNecessários(20000, "Diessel")).toBe("Tipo de combustível inválido");
});

test('Distância do percurso não inteira ', () => {
  expect(calcularLitros.LitrosNecessários(10000.8, "gasolina")).toBe("Distância do Percurso inválida");
});

test('Distância do percurso negativa', () => {
  expect(calcularLitros.LitrosNecessários(-10000, "gasolina")).toBe("Distância do Percurso inválida");
});

test('Distância do percurso não tipo Number', () => {
  expect(calcularLitros.LitrosNecessários("10000", "gasolina")).toBe("Distância do Percurso inválida");
});