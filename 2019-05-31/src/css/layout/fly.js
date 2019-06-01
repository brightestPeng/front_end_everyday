import React from "react";
import ReactDOM from "react-dom";
import "./fly.css";

const App = () => {
  return (
    <div id="fly" >
      <header>双飞翼布局</header>
      <div className="content" >
        <div className="center"  >center</div>
      </div>
      <div  className="left" >left</div>
      <div  className="right" >right</div>
      <div className="clearfix" ></div>
      <footer>footer</footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
