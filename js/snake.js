var snaObj=function(){
	this.x=[];
	this.y=[];
}

snaObj.prototype.num=4;
snaObj.prototype.init=function(){
	for (var i = this.num - 1; i >= 0; i--) {
		this.y[i]=100;
	}
	this.x=[100,110,120,130];
}
snaObj.prototype.draw=function(){
	ctx1.save();
	ctx1.lineWidth=10;
	ctx1.strokeStyle='#000';
	for (var i = 0; i < this.num; i++) {
		ctx1.beginPath();
		ctx1.moveTo(this.x[i],this.y[i]+5);
		ctx1.lineTo(this.x[i]+10,this.y[i]+5);
		ctx1.stroke();
	}
	ctx1.restore();
}



var fruitObj=function () {
	this.x=[];
	this.y=[];
	this.pic=new Image();
}
fruitObj.prototype.init=function () {
	this.x=170;
	this.y=100;
	this.pic.src='picture/fruit.png';
}
fruitObj.prototype.draw=function () {
	ctx1.save();
	ctx1.lineWidth=10;
	ctx1.strokeStyle='#00bfff';
	ctx1.beginPath();
	ctx1.moveTo(this.x,this.y+5);
	ctx1.lineTo(this.x+10,this.y+5);
	ctx1.stroke();
	ctx1.restore();
}