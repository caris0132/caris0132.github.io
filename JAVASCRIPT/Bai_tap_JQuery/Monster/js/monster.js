var canvas;
var context;
var cancelAnimation;
var reqAnimation;
var myReq;
var mapWidth;
var mapHeight;
var time_start = null;
var start = false;
var stop = false;
var lever = 1;
var num_boom = 3;
var num_stop = 3;
var point = 0;
var heart = 5;
var img_src = 'images/monster.png';
var listMonster = new Array();

//class Monter

function Monster (ing_src,cx,cy,imgWidth,imgHeight) {
	this.cx = cx;
	this.cy = cy;
	this.imgWidth = imgWidth;
	this.imgHeight = imgHeight;
	this.img = new Image();
	this.img_src = img_src;
	this.isSelected = false;
	this.speedX = 1;
	this.speedY = 1;
}
Monster.prototype.draw = function() {
	this.img.src = this.img_src;
	context.drawImage(this.img,this.cx,this.cy,this.imgWidth,this.imgHeight);
	
	
	
	
	
};
Monster.prototype.move = function(lever) {
	context.clearRect(this.cx,this.cy,this.imgWidth,this.imgHeight);
	this.cx += this.speedX*lever;
	this.cy += this.speedY*lever;
	if(this.cx<0 || (this.cx+this.imgWidth)>canvas.width)
		this.speedX = -this.speedX;
	if(this.cy<0 || (this.cy+this.imgHeight)>canvas.height)
		this.speedY = -this.speedY;
	this.draw(context);
};
Monster.prototype.isContain = function(x,y) {
	var right = this.cx + this.imgWidth;
	var bottom = this.cy + this.imgHeight;
	console.log(right,bottom);
	return x > this.cx && x < right && y > this.cy && y < bottom;
};
Monster.prototype.selectAt = function(x,y) {
	if (this.isContain(x,y)) {
		console.log("click trung");
		this.isSelected = true;
		return true;
	}
};
function moveListMonter () {
	context.clearRect(0,0 ,canvas.width,canvas.height);
	for (var i = 0; i < listMonster.length; i++) {
		listMonster[i].move(lever);
	};
	//reqAnimation(moveListMonter);
}
function addMonsterByLever () {
	for (var i = 0; i <= lever; i++) {
		var x = Math.random()*canvas.width;
		var y = Math.random()*canvas.height;
		if (x>canvas.width-50) {
			x = canvas.width-55;
		}
		if (y>canvas.height-50) {
			y = canvas.height-55;
		}
		var monster = new Monster(img_src,x,y,50,50);
		monster.speedX *= lever;
		monster.speedY *= lever;

		listMonster.push(monster);
	};
}
function drawListMonter () {
	for (var i = 0; i < listMonster.length; i++) {
		listMonster[i].draw();
	};
}
function getMousePoint (canvas, evt) {
	var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}
function monsters_click (x,y) {

	if(start == false || checkGameOver() == true)
		return;
	for (var i = listMonster.length - 1; i >= 0; i--) {
		if (listMonster[i].selectAt(x,y) == true) {
			var indexMonster = listMonster.indexOf(listMonster[i]);
			var monster =  listMonster.splice(indexMonster,1);
			monster[0].img_src = 'images/icon_stop.jpg';
			monster[0].draw();
			point +=50;
			savehightScore();
			console.log(sessionStorage.hightScore);
			loadInfoGame();
			return;
		}
		
	};
	point -= 50;
	heart--;
	if(checkGameOver()) {
		cancelAnimation(myReq);
	}
	loadInfoGame();
	
	
}
function runGame (time) {
	if(start == false || stop == true)
		return;
	if (!time_start) {
		time_start = time;
	}
	var progress = time - time_start;
	if(progress>100) {
		time_start = time;
		moveListMonter();
		checkGameWin();
		
		myReq = reqAnimation(runGame);
		return;
		
	}
	if(checkGameOver()) {
			console.log(checkGameOver());
			cancelAnimation(myReq);
			return;
	}
	myReq = reqAnimation(runGame);

	
}

function startGame () {
	cancelAnimation(myReq);
	start = true;
	heart = 5;
	stop = false;
	speed = lever =1;
	num_boom = 3;
	num_stop = 3;
	point = 0;
	listMonster.splice(0,listMonster.length);
	addMonsterByLever();
	loadInfoGame();
	myReq = reqAnimation(runGame);
	


}
function checkGameWin () {
	if(listMonster.length ==0) {
		alert("win");
		lever++;
		addMonsterByLever();
		return true;
	}
	return false;
}
function  checkGameOver () {
	if(heart == 0) {
		console.log("game over");
		return true;
	}
	return false;

}
function savehightScore () {
	
	if(!sessionStorage.hightScore || Number(sessionStorage.hightScore) <= point)
		sessionStorage.hightScore = point;
}
function clickStopGame () {

	if(!stop) {
		if (num_stop>0) {
			stop = true;
			num_stop--;
		}
	}
	else {
		myReq = reqAnimation(runGame);
		stop = false;
	}
	loadInfoGame();
}
function clickBoom () {
	if(num_boom>0) {
		point += listMonster.length *50;
		listMonster.splice(0,listMonster.length);
		num_boom--;
	}
	loadInfoGame();
}
function loadInfoGame () {
	$('#num-boom').text(num_boom);
	$('#num-stop').text(num_stop);
	$('#now-score').text("Score:" + point);
	$('#hight-score').text("hight Score:"+sessionStorage.hightScore);
	$('#status-gamer-heart').text("Heart:" + heart);
	$('#status-gamer-speed').text("Speed:" + lever);

}


$(document).ready(function  () {
	canvas = $('#canvas')[0];

	$('#canvas').click(function (event) {
		var offset = $(this).offset();
		monsters_click(event.pageX - offset.left,event.pageY - offset.top);
	});

	$('#stop').click(function  (event) {
		clickStopGame();
	});

	$('#restart').click(function  () {
		startGame();
	})
	$('#boom').click(function(event) {
		clickBoom();
	});

 	context = canvas.getContext('2d');
 	reqAnimation = window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrane ||
				window.oRequestAnimationFrame;

	cancelAnimation = window.cancelAnimationFrame  ||
					window.mozCancelAnimationFrame ||
					window.webkitCancelAnimationFrame ||
					window.msCancalAnimationFrame ||
					window.oCancelAnimationFrame;				

	startGame();
});


	


