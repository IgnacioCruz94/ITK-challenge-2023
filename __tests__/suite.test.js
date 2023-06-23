const { sumOfMatrices } = require("../exercise");

describe("Code Challenge: Sum of matrices", () => {
  it("function should be defined", () => {
    expect(sumOfMatrices).toBeDefined();
  });

  it("Should return the expected result array 1", () => {
    const firstMatrix = [
      [1, 2],
      [3, 4],
    ];
    const secondMatrix = [
      [5, 6],
      [7, 8],
    ];
    const expectedResult = [
      [6, 8],
      [10, 12],
    ];
    expect(sumOfMatrices(firstMatrix, secondMatrix)).toEqual(expectedResult);
  });

  it("Should return the expected result array 2", () => {
    const firstMatrix = [
      [-1, -2],
      [-3, -4],
    ];
    const secondMatrix = [
      [-5, -6],
      [-7, -8],
    ];
    const expectedResult2 = [
      [-6, -8],
      [-10, -12],
    ];

    expect(sumOfMatrices(firstMatrix, secondMatrix)).toEqual(expectedResult2);
  });

  it("Should return the expected result array 3", () => {
    const firstMatrix = [
      [0, 0],
      [0, 0],
    ];
    const secondMatrix = [
      [1, 1],
      [1, 1],
    ];
    const expectedResult = [
      [1, 1],
      [1, 1],
    ];

    expect(sumOfMatrices(firstMatrix, secondMatrix)).toEqual(expectedResult);
  });

  it("Should throw an error due to invalid matrices size.", () => {
    const firstMatrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const secondMatrix = [
      [10, 11, 12],
      [13, 14, 15],
    ];

    expect(() => {
      sumOfMatrices(firstMatrix, secondMatrix);
    }).toThrow("Matrices must have the same number of rows and columns.");
  });

  it("Should throw an error due to empty matrix.", () => {
    const firstMatrix = [];
    const secondMatrix = [
      [10, 11, 12],
      [13, 14, 15],
    ];

    expect(() => {
      sumOfMatrices(firstMatrix, secondMatrix);
    }).toThrowError("Empty matrices are not allowed.");
  });
});
