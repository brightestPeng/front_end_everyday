import React from "react";
import ReactDOM from "react-dom";
import "./grail.css";

const App = () => {
  return (
    <div id="grail">
      <header>圣杯布局</header>
      <div className="main" >
        <div className="float center" >center</div>
        <div className="float left" >left</div>
        <div className="float right" >right</div>
      </div>
      <footer>footer</footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
