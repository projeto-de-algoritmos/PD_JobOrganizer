// encontra a posição do último trabalho em um array ordenado 
//que não tenha conflito com o trabalho array[x]
const latestNonConflict = (array, x) => {
    for(let i = x-1; i >= 0; i--){
        if(array[i].fim <= array[x-1].comeco){
            return i;
        }
    }
    return -1;
}

// encontra o maior lucro prossivel com os trabalhos no array
const findMaxpesoRec = (array, n) => {
    if (n === 1){
        return array[n-1].peso;
    }

    var inclProf = array[n-1].peso;
    let i = latestNonConflict(array, n);

    if (i !== -1){
        inclProf += findMaxpesoRec(array, i+1);
    }

    var exclProf = findMaxpesoRec(array, n-1);

    return Math.max(inclProf, exclProf);
}


//ordena array e chama função findMaxpesoRec 
export const intervalScheduling = (array, n) => {
    console.log(array);
    array.sort( function (a, b) { 
        return (a.fim > b.fim) ? 1 : (b.fim > a.fim) ? -1 : 0;
    });
    return findMaxpesoRec(array, n);
}
