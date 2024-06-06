const degreesCounter = (matrix, numberOfVertex, strDirOrUndir) => {
    const objOfDegrees = {};
    const arrOfDEg = [];
    let counter = 0;
    for(let i = 0; i < numberOfVertex; i++){
        for(let j = 0; j <numberOfVertex; j++){
            if(strDirOrUndir === 'undir'){
                if(matrix[i][j] === 1){
                    counter+=1;
                }
            } else if(strDirOrUndir === 'dir'){
                if(matrix[i][j] === 1){
                    counter+=1;
                } else if(matrix[j][i] === 1){
                    counter+=1;
                }
            }
        }
        objOfDegrees[`Vertex ${i+1}`] = counter;
        arrOfDEg.push(counter);
        counter = 0;
    }

    const check = checkIfGraphISREgular(arrOfDEg);
    const listOfLAndIV = drawListOfLeafesAndIsolatedVertex(arrOfDEg , numberOfVertex);

    console.log(`%cThis is ${strDirOrUndir} graph degrees:`, `color: black; font-size: 20px; font-weight: bold;`, objOfDegrees);
    console.log(`%cIs this ${strDirOrUndir} graph regular?`, `color: black; font-size: 20px; font-weight: bold;`, `\n${check}`);
    console.log(`%cThis this list of leafes and isolated vertex in ${strDirOrUndir} graph`, `color: black; font-size: 20px; font-weight: bold;`, listOfLAndIV);
    console.log(`%cThis is ${strDirOrUndir} graph matrix:`, `color: black; font-size: 20px; font-weight: bold;`, matrix);

}

const halfDegreesCounter = (matrix, numberOfVertex, strDirOrUndir) => {
    const objOfDegrees = {};
    let counterP = 0;
    let counterM = 0;
    for(let i = 0; i < numberOfVertex; i++){
        for(let j = 0; j <numberOfVertex; j++){
            if(matrix[i][j] === 1 ){
                counterM+=1;
            }

            if(matrix[j][i] === 1){
                counterP+=1;
            }
        }
        objOfDegrees[`Вершина ${i+1}`] = [`deg+:${counterP}`, `deg-:${counterM}`];
        counterP = 0;
        counterM = 0;
    }

    console.log(`%cThis is ${strDirOrUndir} graph half degrees:`, `color: black; font-size: 20px; font-weight: bold;`, objOfDegrees);

}

const checkIfGraphISREgular = (arr) => {
    for(const elem of arr){
        if(elem !== arr[1]){
            return 'Graph doesn`t regular';
        }
    }
    return 'Graph is regular';
}

const drawListOfLeafesAndIsolatedVertex = (arr, numberOfVertex) => {
    const listOfLIV = {};

    for(let i = 0; i < numberOfVertex; i++){
        if(arr[i] === 1){
            listOfLIV[`Vertex ${i+1}`] = 'leaf';
        } else if(arr[i] === 0) {
            listOfLIV[`Vertex ${i+1}`] = 'isolated vertex';
        }
    }

    return listOfLIV;
}

export { degreesCounter, halfDegreesCounter};