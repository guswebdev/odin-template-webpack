const sum = require("./sum");

//Prueba de testing
//Igualdad exacta. (expect -> toBe)
describe("Funcion: Sum",()=>{
  test("Sumar 1 + 2 es igual a 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
})