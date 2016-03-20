function $(id) {
	var asd=document.getElementById('id');
	return asd;
}

var midh1=document.getElementById('mid-h1'),
	midh2=document.getElementById('mid-h2'),
	midh3=document.getElementById('mid-h3'),
	midh4=document.getElementById('mid-h4'),
	midh5=document.getElementById('mid-h5'),
	h1con=document.getElementById('h1-content'),
	h2con=document.getElementById('h2-content'),
	h3con=document.getElementById('h3-content'),
	h4con=document.getElementById('h4-content'),
	h5con=document.getElementById('h5-content'),
	downM=document.getElementById('down-m'),
	btn=document.getElementById('btn');

btn.onmouseover=function () {
	downM.style.display='block';
}
btn.onmouseout=function () {
	downM.style.display='none';
	downM.onmouseover=function () {
		downM.style.display='block';
	}
	downM.onmouseout=function () {
		downM.style.display='none';
	}
}

for (var i = downM.childNodes.length - 1; i >= 0; i--) {
	if (downM.childNodes[i].nodeType==1){
		downM.childNodes[i].onmouseover=function (e) {
			e=e||window.event;
			e.stopPropagetion?e.stopPropagetion():e.cancelBubble=true;
			downM.style.display='block';
			this.style.background='#00ced1'
			this.style.color='blue';
		}
		downM.childNodes[i].onmouseout=function (e) {
			e=e||window.event;
			e.stopPropagetion?e.stopPropagetion():e.cancelBubble=true;
			downM.style.display='none';
			this.style.background='#fff'
			this.style.color='black';
		}
		downM.childNodes[i].onclick=function (e) {
			e=e||window.event;
			e.stopPropagetion?e.stopPropagetion():e.cancelBubble=true;
			btn.innerHTML=this.innerHTML;
			downM.style.display='none';
		}
	}
}

midh1.onmouseover=function () {
	midh1.style.borderTop='2px solid blue';
	midh2.style.borderTop='none';
	h1con.style.display='block';
	h2con.style.display='none';
}

midh2.onmouseover=function () {
	midh2.style.borderTop='2px solid blue';
	midh1.style.borderTop='none';
	h2con.style.display='block';
	h1con.style.display='none';
}

midh3.onmouseover=function () {
	midh3.style.borderTop='2px solid blue';
	midh4.style.borderTop='none';
	midh5.style.borderTop='none';
	h3con.style.display='block';
	h4con.style.display='none';
	h5con.style.display='none';
}

midh4.onmouseover=function () {
	midh4.style.borderTop='2px solid blue';
	midh3.style.borderTop='none';
	midh5.style.borderTop='none';
	h4con.style.display='block';
	h3con.style.display='none';
	h5con.style.display='none';
}

midh5.onmouseover=function () {
	midh5.style.borderTop='2px solid blue';
	midh4.style.borderTop='none';
	midh3.style.borderTop='none';
	h5con.style.display='block';
	h4con.style.display='none';
	h3con.style.display='none';
}