/**
 * 垂直居中方案
 */
import React from "react";
import ReactDOM from "react-dom";
import "./vertical.css";

/**
 * 绝对定位加  transfrom
 */
const Method1 = () => {
  return (
    <div className="content">
      <div className="box method1">box</div>
    </div>
  );
};

/**
 * 利用vertical-align middle
 */
const Method2 = () => {
  return (
    <div className="content method2Content">
      <div className="box method2">box</div>
    </div>
  );
};

/**
 * 利用flex布局
 */
const Method3 = () => {
  return (
    <div className="content method3Content">
      <div className="box">box</div>
    </div>
  );
};

/**
 * 利用line-height
 */
const Method4 = () => {
  return (
    <div className="content method4Content">
      <div className="box method4">box</div>
    </div>
  );
};

/**
 * 利用table-cell
 */
const Method5 = () => {
  return (
    <div className="content method5Content">
      <div className="box method5">box</div>
    </div>
  );
};

const App = () => {
  return (
    <div id="vertical">
      <Method1 />
      <Method2 />
      <Method3 />
      <Method4 />
      <Method5 />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
