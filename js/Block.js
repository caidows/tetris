var Pos = function() {
	this.x = 0;
	this.y = 0;
};
var Block = function(type, initPos) {
	//方块的类型
	this.blockType = type;
	this.pos = new Pos();
	this.pos.x = initPos.x;
	this.pos.y = initPos.y;
	//方块的方向
	this.style = 0;
	this.Down = function() {
		this.pos.y--;
		return this.pos;
	};
	this.MoveX = function(x) {
		this.pos.x += x;
		return this.pos;
	};
	this.GetType = function() {
		return this.blockType;
	};
	this.GetStyle = function() {
		return this.style;
	};
	this.Rotate = function() {
		switch (this.blockType) {
			case 0:
				break;
			case 1:
			case 2:
			case 3:
				this.style = 1 - this.style;
				break;
			case 4:
			case 5:
			case 6:
				this.style = this.style++ % 4;
				break;
		}
		return this.style;
	};
	this.GetPos = function() {
		return this.pos;
	};
	this.SetPos = function(newPos) {
		this.pos = newPos;
	};
	this.getColor = function() {
		return this.color;
	};
	this.setColor = function(newColor) {
		this.color = newColor;
	};
};