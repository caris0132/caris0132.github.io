var canvas;
var cx;
var cy;
var context;
var img;
var speedX = 2;
var speedY = 2;
var img;
var reqAnimation;

function update (time) {
	cx += speedX;
	cy += speedY;
	console.log(cx,cy);
	if(cx < 0 || cx > canvas.width)
		speedX = -speedX;
	if (cy < 0 || cy > canvas.height) {
		speedY = -speedY;
	}
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(img,cx,cy,50,50);
}
window.onload = function  () {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	cx = canvas.width/2;
	cy = canvas.height/2;
	img = new Image();
	img.onload = function () {
		context.drawImage(img,30,30,50,50);
		
	};
	img.src="images/monster.png";
	reqAnimation = window.requestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame;
	if (reqAnimation) {
		setInterval("update()",100);
	}
	else {
		alert("browser don't support reqAnimation");
	}				
};
