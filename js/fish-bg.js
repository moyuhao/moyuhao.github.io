function drawbg() {
	ctx2.drawImage(bgpic,0,0,800,600);
}

var aneObj=function () {
	this.x=[];
	this.len=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init = function() {
		for(var i=0;i<this.num;i++){
			this.x[i]=i*5+Math.random()*6;
			this.len[i]=50+Math.random()*5;

		}
}
aneObj.prototype.draw=function () {
	ctx2.save();
	for (var i=0;i<this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canh);
		ctx2.lineTo(this.x[i],canh-this.len[i]);
		ctx2.strokeStyle='#3b154e';
		ctx2.lineCap='round';
		ctx2.lineWidth=6;
		ctx2.stroke();
	}
	ctx2.restore();
}