const { sumar, restar, multiplicar, dividir, raizCuadrada } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(restar(5, 3)).toBe(2);
});

test('Resta 8 * 7 y devuelve 56', () => {
    expect(multiplicar(8, 7)).toBe(56);
});

test('Divide 10 / 0 y devuelve ¡Error!', () => {
    expect(dividir(10, 0)).toBe('No se puede dividir entre 0');
});

test('Divide 10 / 2 y devuelve 5', () => {
    expect(dividir(10, 2)).toBe(5);
});