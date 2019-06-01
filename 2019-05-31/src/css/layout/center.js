import React from "react";
import ReactDOM from "react-dom";
import "./center.css";

//利用position + transform
const Method1 = () => {
  return (
    <div className="content method1">
      <div className="box">box</div>
    </div>
  );
};

//利用margin auto定位
const Method2 = () => {
  return (
    <div className="content method2">
      <div className="box">box</div>
    </div>
  );
};

//利用flex布局
const Method3 = () => {
  return (
    <div className="content method3">
      <div className="box">box</div>
    </div>
  );
};

//利用vertical-align
const Method4 = () => {
    return (
      <div className="content method4">
        <div className="box">box</div>
      </div>
    );
  };

//利用table布局
const Method5 = () => {
    return (
      <div className="content method5">
        <p>box</p>
      </div>
    );
  };

const App = () => {
  return (
    <div>
      <Method1 />
      <Method2 />
      <Method3 />
      <Method4 />
      <Method5 />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
