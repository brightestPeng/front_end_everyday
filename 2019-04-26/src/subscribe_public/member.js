import React from "react";
import { update, subscirbe } from "./RankList";
import "./member.less";

class Member extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      score: 0,
      RankList: []
    };

    //订阅排行榜
    subscirbe(this.getRankList.bind(this));
  }

  getRankList(RankList) {
    this.setState({
      RankList: RankList
    });
  }

  handleClick() {
    const { name, score } = this.state;
    this.setState({
      score: score + 1
    });
    update(name, score + 1);
  }

  render() {
    const { name, RankList } = this.state;

    return (
      <div className="member">
        <div>
          姓名：{name} ,{" "}
          <button onClick={this.handleClick.bind(this)}>击杀+1</button>
        </div>
        <div>排行榜</div>
        <div>{RankList.map(index=><div key={index[0]} >{index[0]} : {index[1]}</div>)}</div>
      </div>
    );
  }
}

export default Member;
