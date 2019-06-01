

let str = "this is ${name},the Number ${id} for China.";

let obj = {
    name:"huawei",
    id:1
}

str.replace(/\$\{(\w+)\}/g,(match,position,string)=>{

    console.log(obj[position]);

    return obj[position];
})

console.log(str);

// str.replace(/^\$\{(\w+)\}$/g,"test");

// console.log(str.match(/\$\{(\w+)\}/g));