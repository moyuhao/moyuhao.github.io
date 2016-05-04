function drawbg() {
	ctx2.drawImage(bgpic,0,0,800,600);
}

//hai kui
var aneObj=function () {
	this.x=[];
	this.len=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init = function() {
		for(var i=0;i<this.num;i++){
			this.x[i]=i*16+Math.random()*20;
			this.len[i]=200+Math.random()*50;

		}
}
aneObj.prototype.draw=function () {
	var anemid=Math.sin(anetime)*80;
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.lineCap='round';
	ctx2.lineWidth=20;
	ctx2.strokeStyle='#3b154e';
	for (var i=0;i<this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canh);
		ctx2.quadraticCurveTo(this.x[i],canh-170,this.x[i]+anemid,canh-this.len[i]);
		//ctx2.lineTo(this.x[i],canh-this.len[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}

//fruit
var fruitObj=function () {
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.col=[];
	this.orange=new Image();
	this.blue=new Image();
}

fruitObj.prototype.num=30;

fruitObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.037+0.01;
		this.col[i]='';
		// console.log(this.y[i]);
	}
	this.orange.src='picture/fishsrc/fruit.png';
	this.blue.src='picture/fishsrc/blue.png';

}
fruitObj.prototype.draw = function() {
	for(var i=0;i<this.num;i++){
		if (this.alive[i]) {
			if (this.col[i]) {
				var pic=this.orange;
			}else {
				var pic=this.blue;
			}

			if (this.l[i]<14){
				this.l[i]+=this.spd[i]*deltatime;
			}
			else {
				this.y[i]-=this.spd[i]*deltatime;
			}

			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i]*1,this.l[i]*1);
			if (this.y[i]<10){
				this.alive[i]=false;
			}
		}
	}
}
fruitObj.prototype.dead = function(i) {
	this.alive[i]=false;
};
fruitObj.prototype.born = function(i) {
	var aneid=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.x[aneid];
	this.y[i]=canh-ane.len[aneid];

	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if (ran<0.17) {
		this.col[i]=0;
	} else {
		this.col[i]=1;
	}
}


// fruitObj.prototype.update = function() {
// 	var num=0;
// 	for (var i=0;i<this.num;i++){
// 		if(this.alive[i]){
// 			num++;
// 		}
// 	}
// }

function fruitMonitor() {
	var num=0;
	for (var i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]){
			num++;
		}
	}
	if (num<15) {
		sendfruit();
		return;
	}
}
function sendfruit() {
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}