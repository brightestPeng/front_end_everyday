function initRequest() {
  let request = null;

  return function() {
    if (request === null) {
      if (window.ActiveXObject) {
        request = new ActiveXObject();
      } else {
        request = new XMLHttpRequest();
      }
    }

    return request;
  };
}

let getRequest = initRequest();


let request = getRequest();

request.open("get","/getInfo");

request.onreadystatechange = ()=>{
    if(request.readyState === 4){
        if(request.status === 200 || request.status === 0){
            console.log(request.responseText);
        }else{
            throw new Error("Error code:"+request.status);
        }   
    }
}

request.send(null);