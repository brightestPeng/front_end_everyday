
//斐波那契系数
/**
 * 1、1,2项为1;
 * 2、n(n>2) 项值为n-1加上n+1;
 */

function fibonacci(num){
    if(num ===  2 || n === 2){
        return 1;
    }else{
        return fibonacci(num-1)+fibonacci(n-2);
    }
}