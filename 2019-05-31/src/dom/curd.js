/**
 * dom进行操作
 */

const root = document.getElementById("root");

//增加
const div = document.createElement("div");
const text  =  document.createTextNode("<strong>华为</strong>");

const div1 = document.createElement("div");
div1.innerHTML = "<strong>华为</strong>";

//增
div.appendChild(text);
root.appendChild(div);

root.insertBefore(div1,div);

//删
// root.removeChild(div);
