
const express = require("express");

const app = express();

app.get("/getInfo",(req,res)=>{

	res.set({
		'Access-Control-Allow-Credentials': 'true',  
		"Access-Control-Allow-Origin":"http://localhost:3001",
		'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'  
	})
	res.send({ code:200,message:"success", })
});

app.post("/setInfo",(req,res)=>{
	res.set({
		'Access-Control-Allow-Credentials': 'true',  
		"Access-Control-Allow-Origin":"http://localhost:3001",
		'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'  
	})

	res.send({ code:200,message:"success" })
});

app.listen(3000,()=>{
	console.log("server listen on port 3000");
})