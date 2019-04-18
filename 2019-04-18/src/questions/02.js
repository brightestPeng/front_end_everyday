//统计一个字符串出现最多的字母

function totalKey(str){
    let items = {};

    for(let i=0;i<str.length;i++){
        let key = str[i];
        if(items[key]){
            items[key] += 1;
        }else{
            items[key] = 1;
        }   
    }

    let key = "";  
    let currentValue = 0

    Object.keys(items).forEach(index=>{
        if(items[index] > currentValue){
            key = index;
            currentValue = items[index]
        }
    })

    return currentValue;

}

let str = "afjghdfraaaasdenas";

console.log(new Object());

console.log(totalKey(str));