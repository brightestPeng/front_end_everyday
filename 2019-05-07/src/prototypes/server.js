
const express = require('express');

const app = express();

app.get("/info",(req,res)=>{

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.send({
		name:"peng",
		age:13
	});
})

app.listen(3000,()=>{
	console.log('server listen on port 3000!');
})