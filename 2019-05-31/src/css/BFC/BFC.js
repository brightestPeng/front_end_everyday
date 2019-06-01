import React from "react";
import ReactDOM from "react-dom";
import "./BFC.css";

const Part1 = () => {
  return (
    <div id="part1">
      <div className="left">left</div>
      <div className="right">
        right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域right测试区域
      </div>
    </div>
  );
};

const Part2 = () => {
  return (
    <div id="part2">
      <div className="box top">top</div>
      <div className="box middle">middle</div>
      <div className="bfc">
        <div className="box bottom">bottom</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <header>BFC(block formatting context)</header>
      <h2>如何产生</h2>
      <ul>
        <ol>根元素</ol>
        <ol>position为absolute或fixed的元素</ol>
        <ol>float不为none的元素</ol>
        <ol>overflow不为visible的元素</ol>
        <ol>display为inline-block、inline-flex、flex等的元素</ol>
      </ul>
      <h2>BFC规则</h2>
      <ul>
        <ol>盒子沿垂直方向排列</ol>
        <ol>外边距折叠</ol>
        <ol>BFC区域不与float区域重叠</ol>
        <ol>BFC区域中float区域也计算高度</ol>
        <ol>BFC区域为页面的独立区域，子元素不会影响外面的元素</ol>
      </ul>
      <section>
        <h3>1、BFC区域不与float区域重叠 且 float也参与高度计算</h3>
        <Part1 />
      </section>
      <section>
        <h3>2、外边距折叠 且 BFC区域相互隔离，不互相影响</h3>
        <Part2 />
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
