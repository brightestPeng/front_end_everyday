//快速排序法
let args4 = [];
for (let i = 1000; i > 0; i--) {
  args4.push(i);
}


function getIndex(args,left,right){
    let mid = Math.floor((right - left)/2),
    l = left,
    r = right;

    while(l >= r){
        while(args[l] < args[mid]){
            l ++;
        }

        while(args[r] > args[mid]){
            r --;
        }

        while(l <= j){
            [args[l],args[r]] = [args[r],args[l]];
            l ++;
            r --;
        }
    }
    

    return l;
}

function quickSort(args,left,right){
    let index;
    if(args.length>1){
        index = getIndex(args,left,right);

        while(left < index -1){
            quickSort(args,left,index-1);
        }

        while(right > index){
            quickSort(args,index,right);
        }
    }

    return args;
}

console.time();
console.log(divide(args3), "快速排序法");
console.timeEnd();