const { FizzBuzz } = require("./fizzbuzz");

describe("prueba de función FizzBuzz", () => {
  test("Debe retornar Fizz", () => {
    const numero = 9;
    expect(FizzBuzz(numero)).toBe("Fizz");
  });

  test("Debe retornar Buzz", () => {
    const numero = 10;
    expect(FizzBuzz(numero)).toBe("Buzz");
  });

  test("Debe retornar FizzBuzz", () => {
    const numero = 15;
    expect(FizzBuzz(numero)).toBe("FizzBuzz");
  });

  test("Debe retornar el número que se ingresó", () => {
    const numero = 23;
    expect(FizzBuzz(numero)).toBe(numero);
  });

  test("Debe retornar: 'No es un número entero'", () => {
    const numero = "string";
    expect(FizzBuzz(numero)).toBe("No es numero");
  });
});
