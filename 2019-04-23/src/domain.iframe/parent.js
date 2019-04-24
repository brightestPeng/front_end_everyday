
/**
 * 适用于主域名相同，子域名不同的情况，子iframe访问 parent 里面的数据
 * 
 * 主域pengwenjia.com 相同   通过document.domain 进行设置
 * 
 * 本地模拟修改hosts文件
 * 
 * child.pengwenjia.com    
 * parent.pengwenjia.com
 * 
 */

const express = require("express");

const app = express();

app.use(express.static(__dirname+"/parent"));

app.listen(3001,()=>{
	console.log("parent listen on port 3001");
})