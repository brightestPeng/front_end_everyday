// import "socket.io";

const Input = document.createElement("input");
document.body.appendChild(Input);

var socket = io("http://localhost:3000");

socket.on("connect",()=>{
	console.log("connect");

	socket.on("message",(msg)=>{
		console.log('data from server:'+msg);
	});

	socket.on('disconnect',()=>{
		console.log("Server socket has closed.");
	})
})

Input.addEventListener("change",(e)=>{
	console.log("触发");
	socket.send(e.target.value);
})