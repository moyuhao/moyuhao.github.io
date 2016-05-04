var scoreObj=function () {
	this.num;
	this.fnum;
	this.life;
	this.lifefade;
}
scoreObj.prototype.init = function() {
	this.num=0;
	this.fnum=0;
	this.life=10;
	this.lifefade=0;
}

scoreObj.prototype.draw = function() {
	ctx1.fillStyle='white';
	ctx1.font='30px Verdana';
	if (this.life>0) {
		var l=calLength2(baby.x,baby.y,mom.x,mom.y);
		if (l<900) {
			this.num+=this.fnum;
			this.life+=this.fnum;
			this.fnum=0;
		}

		this.lifefade+=deltatime/1000;
		if (this.lifefade>1) {
			this.life--;
			this.lifefade--;
		}
		if (this.life>=10) {
			this.life=10;
		}
	}else {
		ctx1.fillText('Game Over',canw/2-90,canh/2);
	}
	ctx1.fillText('Score : '+this.num,canw/2-80,50);
	ctx1.fillText('Life : '+this.life,canw/2-60,canh-50);
}