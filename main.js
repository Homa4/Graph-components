import definedGraph from './script2.js';
import undefinedGraph from './script.js';
import secondDefinedGraph from './secondDirectedGraph.js';
import generateSymmetricBinaryMatrix from './matrixGenerator.js';
import { degreesCounter, halfDegreesCounter } from './degreesCounter.js';
import { multiplyMatrices, findPathsOfLengthTwo, findPathsOfLengthThree, printAttainabilityMatrix, createIdentityMatrix, addMatrices, transMatrix, elementWiseMultiply, applyBooleanMap, printStrongComponents } from './stuffForSecondDirectGraph.js';

const radius = document.querySelector(".radius");
const numOfVertex = document.querySelector(".numberOfVertex");
const button = document.querySelector(".buttonUndef");

button.addEventListener("click", () => {
    const numberOfVertex = Number(numOfVertex.value);
    const radiusValue = Number(radius.value);
    const [undirMatrix, dirMatrix1, dirMatrix2] = generateSymmetricBinaryMatrix(numberOfVertex);

    const squareMatrix = multiplyMatrices(dirMatrix2, dirMatrix2);
    const cubedMatrix = multiplyMatrices(dirMatrix2, squareMatrix);

    undefinedGraph(radiusValue, numberOfVertex, undirMatrix);
    degreesCounter(undirMatrix, numberOfVertex, 'undir');

    definedGraph(radiusValue, numberOfVertex, dirMatrix1);
    degreesCounter(dirMatrix1, numberOfVertex, 'dir');
    halfDegreesCounter(dirMatrix1, numberOfVertex, 'dir');

    secondDefinedGraph(radiusValue, numberOfVertex, dirMatrix2);
    halfDegreesCounter(dirMatrix2, numberOfVertex, 'second dir');
    findPathsOfLengthTwo(dirMatrix2, squareMatrix);
    findPathsOfLengthThree(dirMatrix2, cubedMatrix);

    let resultMatrix = createIdentityMatrix(numberOfVertex);
    let poweredMatrix = dirMatrix2;
    for (let i = 0; i < numberOfVertex; i++) {
        poweredMatrix = multiplyMatrices(poweredMatrix, dirMatrix2); 
        resultMatrix = addMatrices(resultMatrix, poweredMatrix);
    }

    const attainabilityMatrix = applyBooleanMap(resultMatrix);
    printAttainabilityMatrix(attainabilityMatrix);

    const transposedMatrix = transMatrix(attainabilityMatrix);
    const strongMatrix = elementWiseMultiply(attainabilityMatrix, transposedMatrix);
    printAttainabilityMatrix(strongMatrix);

    printStrongComponents(strongMatrix);
});
