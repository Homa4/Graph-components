const multiplyMatrices = (matrix1, matrix2) => {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            result[i][j] = matrix1[i].reduce((sum, val, k) => sum + val * matrix2[k][j], 0);
        }
    }
    return result;
};

const findPathsOfLengthTwo = (matrix, squaredMatrix) => {
    const paths = [];
    matrix.forEach((row, i) => {
        row.forEach((value, j) => {
            if (squaredMatrix[i][j]) {
                matrix.forEach((_, k) => {
                    if (matrix[k][j] > 0 && matrix[i][k] === 1 && (k !== i || k !== j)) {
                        paths.push(`(${i + 1}, ${k + 1}, ${j + 1})`);
                    }
                });
            }
        });
    });
    console.log("%cPaths of length two:", "color: black; font-size: 20px; font-weight: bold;", paths);
};

const findPathsOfLengthThree = (matrix, cubedMatrix) => {
    const paths = [];
    const size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (cubedMatrix[i][j] > 0) {
                for (let k = 0; k < size; k++) {
                    if (matrix[i][k] > 0) {
                        for (let l = 0; l < size; l++) {
                            if (matrix[k][l] > 0 && matrix[l][j] > 0 && (l !== i || l !== j || k !== j)) {
                                paths.push(`(${i + 1}, ${k + 1}, ${l + 1}, ${j + 1})`);
                            }
                        }
                    }
                }
            }
        }
    }
    console.log("%cPaths of length three:", "color: black; font-size: 20px; font-weight: bold;", paths);
};

const createIdentityMatrix = size => {
    return Array.from({ length: size }, (_, i) => 
        Array.from({ length: size }, (_, j) => (i === j ? 1 : 0))
    );
};

const addMatrices = (matrix1, matrix2) => {
    return matrix1.map((row, i) => 
        row.map((val, j) => val + matrix2[i][j])
    );
};

const applyBooleanMap = matrix => {
    return matrix.map(row => row.map(val => (val ? 1 : 0)));
};

const printAttainabilityMatrix = matrix => {
    const temp = applyBooleanMap(matrix);
    console.log("%cAttainability matrix:", "color: black; font-size: 20px; font-weight: bold;", temp);
};

const transMatrix = matrix => {
    const transposed = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transposed[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }
    return transposed;
};

const elementWiseMultiply = (matrix1, matrix2) => {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            result[i][j] = matrix1[i][j] * matrix2[i][j];
        }
    }
    console.log("%cStrong matrix:", "color: black; font-size: 20px; font-weight: bold;", result);
    return result;
};

const printStrongComponents = strongMatrix => {
    const components = [];
    for (let i = 0; i < strongMatrix.length; i++) {
        for (let j = 0; j < strongMatrix[i].length; j++) {
            if (strongMatrix[i][j] === 1) {
                 components.push(`(${i + 1}, ${j + 1})`);
            }
        }
    }
    console.log("%cStrongly connected components:", "color: black; font-size: 20px; font-weight: bold;", components);
};

export { multiplyMatrices, findPathsOfLengthTwo, findPathsOfLengthThree, createIdentityMatrix, addMatrices, applyBooleanMap, printAttainabilityMatrix, transMatrix, elementWiseMultiply, printStrongComponents };
