import React from "react";
import ReactDOM from "react-dom";
import Member from "./member";

const App = ()=>{
    return(
        <div>
           <Member name="A" />
           <Member name="B" />
           <Member name="C" />
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))