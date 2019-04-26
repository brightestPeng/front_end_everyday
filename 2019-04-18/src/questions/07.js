//跨越解决方法
//jsonp

import "whatwg-fetch";
import * as $ from "jquery";

const getAjax = (url)=>{

	return fetch(url,{
		method:"GET"
	}).then(res=>{ 
		console.log(res);
	})
};


const img = document.createElement("img");

img.src = "http://n.sinaimg.cn/news/transform/175/w105h70/20190422/QEzL-hvvuiyn5043478.jpg";

document.body.appendChild(img);

getAjax("http://192.168.1.113:2000/");

$.ajax({
	url: 'http://192.168.1.113:2000/',
	type: 'get',
	// dataType: 'jsonp',  // 请求方式为jsonp
	// jsonpCallback: "onBack",    // 自定义回调函数名
	// data: {}
}).done((data)=>{
	console.log(data)
});

