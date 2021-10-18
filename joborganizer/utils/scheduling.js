// encontra a posição do último trabalho em um array ordenado 
//que não tenha conflito com o trabalho array[x]
const latestNonConflict = (array, x) => {
    for(let i = x-1; i < (len(array)-1); i++){

        if(array[i].end <= array[x-1].start){
            return i;
        }
    }
    return -1;
}

// encontra o maior lucro prossivel com os trabalhos no array
const findMaxProfitRec = (array, n) => {
    if (n == 1){
        return array[n-1].profit;
    }

    var inclProf = array[n-1].profit;
    let i = latestNonConflict(array, n);

    if (i != -1){
        inclProf += findMaxProfitRec(array, i+1);
    }

    var exclProf = findMaxProfitRec(array, n-1);

    return max(inclProf, exclProf);
}


//ordena array e chama função findMaxProfitRec 
const intervalScheduling = (array, n) => {
    
    array = array.sort(function (a, b){
        return a.end < b.end ? -1 : a.end > b.end ? 1 : 0;
    });
    return findMaxProfitRec(array, n);
}



module.exports = {
    intervalScheduling,
}