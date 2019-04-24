/**
 * jsonp  
 * 
 * 缺点:只能用于get请求
 */

import "whatwg-fetch";
import * as $ from "jquery";
import fetchJsonp from "fetch-jsonp";


//使用原生解决跨域问题
// window.onBack = (data)=>{
// 	console.log(data);
// }

// const script = document.createElement("script");
// script.src = "http://192.168.1.117:3000?callback=onBack"
// document.body.appendChild(script);


//使用jquery解决跨域问题
// $.ajax({
// 	url:"http://192.168.1.117:3000/",
// 	type:"GET",
// 	dataType:"jsonp",
// 	jsonpCallback:"onBack"
// }).done(data=>{
// 	console.log(data);
// });


//使用fetch解决
fetchJsonp("http://192.168.1.117:3000",{
	jsonpCallback:"callback"
}).then(res=>{
		if(res.ok){
			return res.json();
		}
}).then(data=>{
	console.log(data);
})