import React, { Fragment } from "react";
import "./index.less";

import { debounce,throttle } from "../../js/shake";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count1: 0
    };

    this.handleMove = debounce(this.handleMove.bind(this), 1000, true);
    this.handleMove1 = throttle(this.handleMove1.bind(this));
  }

  handleMove(e) {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }

  handleMove1(e) {
    const { count1 } = this.state;
    this.setState({
      count1: count1 + 1
    });
  }

  render() {
    return (
      <Fragment>
        <div className="shake" onMouseMove={this.handleMove}>
          函数防抖：{this.state.count}
        </div>
        <div className="shake" onMouseMove={this.handleMove1}>
          函数节流：{this.state.count1}
        </div>
      </Fragment>
    );
  }
}

export default App;

function test() {
  return function() {
    console.log(this, "测试this");
  };
}

class Test {
  constructor(name) {
    this.name = name;

    this.getName = test();

    this.getName();
  }
}

new Test("peng");
