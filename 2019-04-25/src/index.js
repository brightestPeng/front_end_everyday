import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

//table布局
import TableLayout from "./layout/tablelayout";

const App = ()=>{

	return(
		<div className="App" >
			<div className="item" >
				<TableLayout />
			</div>
			<div className="item" ></div>
			<div className="item" ></div>
			<div className="item" ></div>
			<div className="item" ></div>
			<div className="item" ></div>
			<div className="item" ></div>
			<div className="item" ></div>
			<div className="item" ></div>
		</div>
	)
}

ReactDOM.render(<App />,document.getElementById("root"));