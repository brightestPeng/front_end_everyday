
const express = require("express");
const socket = require("socket.io");

const app = express();

const server = app.listen(3000,()=>{
	console.log("server linten on port 3000");
});

socket.listen(server).on("connection",(client)=>{
	client.on("message",(msg)=>{
		console.log("消息：",msg);
		client.send("hello: "+ msg)
	});

	client.on("disconnect",()=>{
		console.log("Client socket has closed.");
	})
})