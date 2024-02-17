const MATRIX = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

const substractDiagonalMatrix = (matrix) => {
    let firstDiagonalTotal = 0;
    let secondDiagonalTotal = 0;
    let secondDiagonalIndex = matrix.length - 1;

    for (let index = 0; index < matrix.length; index++) {
        firstDiagonalTotal += matrix[index][index];
        secondDiagonalTotal += matrix[index][secondDiagonalIndex];
        secondDiagonalIndex--;
    }

    return firstDiagonalTotal - secondDiagonalTotal;
}

console.log(substractDiagonalMatrix(MATRIX));