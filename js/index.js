function getJP(){
  var eles=[],
      elements=document.getElementsByTagName('td');
  for(var i=0,l=elements.length;i<l;i++){ 
    if(elements[i].className.split(' ')[0]=='jiangpin'){
      eles.push(elements[i]);
    }
  }
  return eles;
}



var xu=[0,1,2,4,7,6,5,3],
	choubtn=document.getElementById('choubtn'),
	lunpan=document.getElementById('lunpan'),
	choutext=document.getElementById('choutext'),
	choujiang=document.getElementById('choujiang'),
	chouUI=document.getElementById('chouUI'),
	jp=getJP(),
	ind=0,
	ran=10,
	result=1,
	t=1000,
	chan=2,
	fux=1,
	fuy=1,
	cishu=0,
	time=null,
	time1=null;

choubtn.onclick=start;

function start(e){
	time=setInterval(clock,50);
	e=e||window.event;
	e.stopPropagetion?e.stopPropagetion():e.cancelBubble=true;
	choubtn.innerHTML='Stop';
	choubtn.onclick=stop;
	choubtn.style.lineHeight='70px';
	choubtn.style.background='#788';
	choubtn.style.color='red';
	choubtn.style.fontSize='47px';
}

function clock() {
	ind++;
	if (ind>7){
		ind=0;
	}
	jp[xu[ind]].style.borderColor='blue';
	for (var i = jp.length - 1; i >= 0; i--) {
		if (i!=xu[ind]) {
			jp[i].style.borderColor='red';
		}
	}
}

function stop(e) {
	clearInterval(time);
	e=e||window.event;
	e.stopPropagetion?e.stopPropagetion():e.cancelBubble=true;
	choubtn.onclick=null;
	choubtn.innerHTML='  ';
	choubtn.style.background='black';
	choubtn.style.lineHeight='43px';
	choubtn.style.color='#f93';
	choubtn.style.fontSize='30px';
	ran=Math.floor(Math.random()*100);
	if (ran>-1&&ran<1) {
		result=2;
	} else if (ran>0&&ran<2) {
		result=3;
	} else if (ran>1&&ran<40) {
		result=4;
	} else if (ran>39&&ran<43) {
		result=5;	
	} else if (ran>42&&ran<44) {
		result=5;
	}else {
		result=1;
	}
    t=50;
    cishu=0;
    res();
    
}

function res() {
	cishu++;
	if (t<700) {
		t=t+70;
	}else {
		t=710;
	}
	clock();
	setTimeout(function(){
		if (jp[xu[ind]].className.substring(11)!=result.toString()||cishu<10) {
			res();
		}else {
			choubtn.innerHTML='再 来<br>一 次';
			choubtn.onclick=start;
		}
	},t);
}
	
choutext.onclick=function (e) {
	chouUI.style.display='block';
	e=e||window.event;
	e.stopPropagetion?e.stopPropagetion():e.cancelBubble=true;
	document.onclick=function () {
		chouUI.style.display=null;
		document.onclick=null;
	}
}

remo();
function remo() {
	time1=setInterval(function () {
		var x=choujiang.offsetLeft,
			y=choujiang.offsetTop;
		if (x+1>=window.screen.availWidth-220&&fux>0) {
			fux=-1;
		} else if(x-1<=0&&fux<0){
			fux=1;
		}
		x=x+fux;
		if (y+4>=window.screen.availHeight-100&&fuy>0) {
			fuy=-1;
		} else if(y-4<=0&&fuy<0){
			fuy=1;
		}
		y=y+0.9*fuy;
		choujiang.style.top=y+'px';
		choujiang.style.left=x+'px';
	},10);	
}

setInterval(function () {
		if (chan==1) {
			chan=2;
			choutext.style.color='yellow';
			choutext.style.background='red';
		} else {
			chan=1;
			choutext.style.color='red';
			choutext.style.background='yellow';
		}
},1000)

choutext.onmouseover=function () {
	clearInterval(time1);
}
choutext.onmouseout=function () {
	remo();
}


