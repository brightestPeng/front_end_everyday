//
import Observer from "../Observer";
import ChessBoard from "./chessBoard";

function getWinner(args){
	let count = 1,
		str = args[0].x === args[1].x ?"y":"x";

	args.sort((a,b)=>{
		return a[str] - b[str];
	});

	args.reduce((pre,current)=>{
		if(count === 5){
			return false;
		}
		if(current[str] - pre[str] === 1){
			count ++;
		}else{
			count = 1;
		}
		return current;
	});

	return count;
}

class GoBang {
  constructor() {
    this._board = new ChessBoard();
    this.chesses = [];

    Observer.add_observer(this);
  }

  update(chess) {
		this.chesses.push(chess);
    this.isWin(chess);
  }

  isWin(chess) {
    let x = chess.x,
      y = chess.y,
      color = chess.color,
      //13象限
      args = [[],[],[],[]];

    //斜线方向寻找
    this.chesses.forEach(index => {
      if (index.getColor() !== color) {
        return;
      }

      let x1 = index.x;
      let y1 = index.y;
			//根据直线平移求出规则
			if(y1 - x1 === y - x){
				args[0].push(index);
			}
			if(x+y === x1+y1){
				args[1].push(index);
			}
			if(x1 === x){
				args[2].push(index);
			}
			if(y1 === y){
				args[3].push(index);
			}
		});

		for(let i =0;i<args.length;i++){
			if(args[i].length < 5){
				continue;
			}
			let count = getWinner(args[i]);
			if(count === 5){
				setTimeout(()=>{
					alert(`${chess.color === 0?"白":"黑"}子胜!`);
				},0);
				return ;
			}
		}
  }
}

export default GoBang;
