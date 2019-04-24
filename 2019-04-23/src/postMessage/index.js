

//postMessage(data,orign)   部分浏览器只支持传递字符串，最好只传递字符串

const iframe = document.createElement("iframe");
const btn = document.createElement("button");
const div = document.createElement("div");

iframe.src = "http://localhost:3000/index.html";
btn.innerHTML = "向child发送信息";
div.innerHTML = "无";

document.body.appendChild(iframe);
document.body.appendChild(btn);
document.body.appendChild(div);

btn.addEventListener("click",()=>{
	iframe.contentWindow.postMessage("peng","http://localhost:3000/index.html")
})

window.addEventListener("message",(data)=>{
	if(data.origin === "http://localhost:3000"){
		 div.innerHTML = data.data;
	}
})