import "whatwg-fetch";

const btn = document.createElement("button");

btn.innerHTML = "点击fetch";

document.body.appendChild(btn);

btn.addEventListener("click", () => {
  fetch("http://localhost:3000/setInfo", {
    method: "POST",
    credentials:"include",
    // mode: "cors"
  })
    .then(res => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => {
      console.log(data);
    });
});

fetch("http://localhost:3000/getInfo", {
  method: "GET",
  credentials:"include"
  // mode: "cors"
})
  .then(res => {
    console.log(res);
    if (res.ok) {
      return res.json();
    }
  })
  .then(data => {
    console.log(data);
  });
