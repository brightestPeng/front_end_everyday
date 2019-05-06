

class Chess{
	constructor(color,x,y){
		this.color = color;
		this.x = x;
		this.y = y;
	}

	getColor(){
		return this.color;
	}

	getX(){
		return this.x;
	}

	getY(){
		return this.y;
	}
}

export default Chess;