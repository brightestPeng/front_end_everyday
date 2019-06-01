
function selectSort(array){
    for(var i=0;i<array.length;i++){
        var tem = array[i],
            j = i,
            index = i;

        while( j < array.length){
            if(array[j] < tem){
                tem = array[index];
                index = j;
            }
            j ++;
        }

        if(index !== i){
            array[index] = array[i];
            array[i] = tem;
        }
    }
}

export default selectSort;