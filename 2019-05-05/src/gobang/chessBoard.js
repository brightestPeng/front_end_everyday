import Chess from "./chess";
import Observer from "../Observer";

class ChessBoard {

  constructor(color,grid) {
		this._chessBoard = null;
		this._chessContext = null;
		this.color = color === "white"?0:1;
		this.render(grid || 15);
  }

  render(grid) {
    let length = (grid + 1) * 30;

		this._chessBoard = document.createElement("canvas");
		this._chessContext = this._chessBoard.getContext("2d");

    this._chessBoard.width = length;
    this._chessBoard.height = length;
    this._chessBoard.style.marginLeft = `-${length / 2}px`;
    this._chessBoard.style.marginTop = `-${length / 2}px`;
    this._chessBoard.className = "chessBoard";
    this.drawBoard(grid);
		document.body.appendChild(this._chessBoard);
		
		this._chessBoard.addEventListener("click",(e)=>{
			let x = Math.round((e.layerX - 15)/30);
			let y = Math.round((e.layerY - 15)/30);
			let chess = new Chess(this.color,x,y);

			if(this.color === 0){
				this.color = 1;
			}else{
				this.color = 0;
			};
			
			this.addChess(chess);

			//发布信息
			Observer.notify(chess);
		})
  }

  drawBoard(grid) {
    let length = grid * 30 + 15;

    //设置线的颜色
    this._chessContext.strokeStyle = "#bfbfbf";

    for (let i = 0; i < grid + 1; i++) {
      //竖线
      this._chessContext.moveTo(15 + i * 30, 15);
      this._chessContext.lineTo(15 + i * 30, length);
      this._chessContext.stroke();
      //横线
      this._chessContext.moveTo(15, 15 + i * 30);
      this._chessContext.lineTo(length, 15 + i * 30);
      this._chessContext.stroke();
    }
	}
	
	addChess(chess){
		let i = chess.getX();
		let j = chess.getY();

		this._chessContext.beginPath();
		this._chessContext.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);//画圆
		this._chessContext.closePath();

		var gradient = this._chessContext.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0);

		if(chess.color === 0){
			gradient.addColorStop(0,'#ccc');
			gradient.addColorStop(1,'white');
		}else{
			gradient.addColorStop(0,'black');
			gradient.addColorStop(1,'white');
		}
		
		this._chessContext.fillStyle = gradient;
		this._chessContext.fill();
	}
}

export default ChessBoard;
