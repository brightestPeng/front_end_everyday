
const express = require("express");

const app = express();

app.get("/",(req,res)=>{

	const { callback } = req.query;

	res.send(`${callback}({ status:"error",message:"I'm Comming!" })`);
});

app.listen(3000,()=>{
	console.log("listen on port 3000.");
})