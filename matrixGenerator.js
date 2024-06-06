 
function generateSymmetricBinaryMatrix(size) {
    let matrix2 = [];
    let matrix1 = [];
    console.log(size);
    const variant = '3318';
    const variantStr = variant.toString();
    const n1 = Number(variantStr[0]);
    const n2 = Number(variantStr[1]);
    const n3 = Number(variantStr[2]);
    const n4 = Number(variantStr[3]);

    const n = 10 + n3;
    const kof = 1 - n3 * 0.01 - n4 * 0.01 - 0.3;
    const kof2 = 1 - n3 * 0.005 - n4 * 0.005 - 0.27;


    const pseudoRandom = (seed) => {
        let value = seed;
        return function() {
            value = (value * 2203565258 + 35146) % 23456614598;
            return value % 100 < 12;
        };
    };

    const directMatrixGenerator = (strVariant) => {
        const generator = pseudoRandom(strVariant);
        const dirMatrix = [];
    
        for (let i = 0; i < size; i++) {
            dirMatrix[i] = [];
            for (let j = 0; j < size; j++) {
                dirMatrix[i][j] = Math.floor(generator() * 2 * kof2);
            }
        }
    
        return dirMatrix;
    };

    matrix2 = directMatrixGenerator(variant);

    for (let i = 0; i < size; i++) {
        matrix1[i] = [];
        for (let j = 0; j < size; j++) {
            matrix1[i][j] = Math.max(matrix2[i][j], matrix2[j][i]);
        }
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            matrix1[j][i] = matrix1[i][j];
        }
    }

    
    
    const secondDirectMatrixGenerator = (strVariant) => {
        const generator = pseudoRandom(strVariant);
        const dirMatrix = [];
    
        for (let i = 0; i < size; i++) {
            dirMatrix[i] = [];
            for (let j = 0; j < size; j++) {
                dirMatrix[i][j] = Math.floor(generator() * 2 * kof2);
            }
        }
    
        return dirMatrix;
    };

    const secondDirectMatrix = secondDirectMatrixGenerator(variant);

    return [matrix1, matrix2, secondDirectMatrix];
}

export default generateSymmetricBinaryMatrix;
