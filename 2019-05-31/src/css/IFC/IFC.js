import React from "react";
import ReactDOM from "react-dom";
import "./IFC.css";

const Part1 = () => {
  return (
    <div id="part1">
      <span className="span span1" />
      <span className="span span2">span2</span>
      xxx
    </div>
  );
};

const Part2 = () => {
  return (
    <div id="part2">
      <span className="span span1">span1</span>
      <span className="span span2">span2</span>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <header>IFC(inline formatting context)</header>
      <h2>如何形成</h2>
      <ul>
        <ol>块级元素仅包含内连元素</ol>
      </ul>
      <h2>区域规则</h2>
      <ul>
        <ol>水平方向排列</ol>
        <ol>垂直方向上的margin不生效，水平方向的margin生效</ol>
        <ol>高度由行高进行撑开</ol>
        <ol>垂直方向上的定位由vertical-align决定</ol>
        <ol>水平方向上的定位由text-align决定</ol>
      </ul>
      <section>
        <h3>vertical-align的奥秘</h3>
        <ul>
          <ol>display为inline-table baseline为table第一行的基线</ol>
          <ol>display为inline-block baseline为最后一个元素的基线</ol>
          <ol>当box中无行盒子时，基线为box的margin-bottom</ol>
          <ol>当box中有行盒子时，基线为最后一个存在的行盒子 x的baseline</ol>
          <ol>
            当box中有行盒子时，overflow不为visible时，基线为box的margin-bottom
          </ol>
        </ul>
        <Part1 />
      </section>
      <section>
        <h3>垂直居中</h3>
        <Part2 />
      </section>
      <section />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
