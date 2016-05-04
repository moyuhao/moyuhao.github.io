function lerpDistance(aim, cur, ratio) {
	var delta = cur - aim;
	return aim + delta * ratio;
}


var momObj=function () {
	this.x;
	this.y;
	this.angle;
	this.bigEye=new Image();
	this.bigBody=new Image();
	this.bigTail=new Image();
}
momObj.prototype.init = function() {
	this.x=canw/2;
	this.y=canh/2;
	this.angle=0;
	this.bigEye.src='picture/fishsrc/bigEye0.png';
	this.bigBody.src='picture/fishsrc/bigSwim0.png';
	this.bigTail.src='picture/fishsrc/bigTail0.png';
}
momObj.prototype.draw = function() {
	this.x=lerpDistance(mx,this.x,0.92);
	this.y=lerpDistance(my,this.y,0.92);
	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6);

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.bigTail,-this.bigTail.width/2+30,-this.bigTail.height/2);
	ctx1.drawImage(this.bigBody,-this.bigBody.width/2,-this.bigBody.height/2);
	ctx1.drawImage(this.bigEye,-this.bigEye.width/2,-this.bigEye.height/2);
	ctx1.restore();
}


//collsion
function momFruit() {
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]){
			var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if (l<900) {
				fruit.dead(i);
				if (fruit.col[i]) {
					score.fnum++;
				}else {
					score.fnum+=2;
				}
			}
		}
	}
}

//baby
var babyObj=function () {
	this.x;
	this.y;
	this.angle;
	this.babyEye=new Image();
	this.babyBody=new Image();
	this.babyTail=new Image();

	this.babyTailTimer=0;
	this.babyTailCount=0;

	this.babyEyeTimer=0;
	this.babyEyeCount=0;
	this.babyEyeInterval=1000;
}
babyObj.prototype.init = function() {
	this.x=canw/2-50;
	this.y=canh/2-50;
	this.angle=0;
	this.babyEye.src='picture/fishsrc/babyEye0.png';
	this.babyBody.src='picture/fishsrc/babyFade0.png';
	this.babyTail.src='picture/fishsrc/babyTail0.png';
}
babyObj.prototype.draw = function() {
	this.x=lerpDistance(mom.x,this.x,0.99);
	this.y=lerpDistance(mom.y,this.y,0.99);
	var deltaY=mom.y-this.y;
	var deltaX=mom.x-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6);

	this.babyTailTimer+=deltatime;
	if (this.babyTailTimer>50) {

	}
	this.babyEyeTimer+=deltatime;
	if (this.babyEyeTimer>this.babyEyeInterval) {
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		this.babyEyeTimer%=this.babyEyeInterval;

		if (this.babyEyeCount==1) {
			this.babyEyeInterval=Math.random()*1000+2000;
		}else{
			this.babyEyeInterval=200;
		}
	}


	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.babyTail,-this.babyTail.width/2+25,-this.babyTail.height/2);
	ctx1.drawImage(this.babyBody,-this.babyBody.width/2,-this.babyBody.height/2);
	ctx1.drawImage(this.babyEye,-this.babyEye.width/2,-this.babyEye.height/2);
	ctx1.restore();
}