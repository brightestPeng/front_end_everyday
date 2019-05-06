import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

//table布局
import TableLayout from "./layout/tablelayout";

const App = () => {
  return (
    <div>
      {/* <div className="media-block">
        <img className="media-fig" src={require("./img/beautiful.jpeg")} />
        <div className="media-body">
          <h3>Title of this</h3>
          <p>Brief description of this</p>
        </div>
      </div>
      <div className="media-block1">
        <img className="media-fig1" src={require("./img/beautiful.jpeg")} />
        <div className="media-body1">
          <h3>Title of this</h3>
          <p>Brief description of this</p>
        </div>
      </div>
      <div className="box">
        <div className="content-box">内部盒子</div>
      </div> */}
			<div className="span">
        <span className="content-span">内部盒子</span>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
