var imageList;
var slider;
var btnImages = new Array();
window.onload = function  () {
	slider = document.getElementsByClassName("sliderImages")[0];
	slider.style.width = "500px";
	slider.style.height = "500px";
	getListImages();
	slider.innerHTML = "";
	var itemImage = document.createElement('img');
	itemImage.className = 'item-image';
	itemImage.setAttribute('src', 'images/hinh_1.jpg');
	itemImage.setAttribute('index', 0);

	var pre = document.createElement('div');
	pre.className = 'preview item';

	var next = document.createElement('div');
	next.className = 'next item';
	slider.appendChild(itemImage);
	slider.appendChild(pre);
	for (var i = 0; i < btnImages.length; i++) {
		btnImages[i].onclick = function  () {
			var index = parseInt(this.getAttribute('index'))  ;
			itemImage.setAttribute('src', this.getAttribute('src'));
			itemImage.setAttribute('index', index);
		};
		slider.appendChild(btnImages[i]);
	};
	slider.appendChild(next);

	pre.onclick = function  () {
		var index = parseInt(itemImage.getAttribute('index'));
		console.log(index);
		for (var i = 1; i < btnImages.length; i++) {
			var src = btnImages[i-1].getAttribute('src');
			if (btnImages[i].getAttribute('index') == index) {
			 	itemImage.setAttribute('index', (index-1));
				itemImage.setAttribute('src', src);
			 } 
		};

	}
	next.onclick = function  () {
		var index = parseInt(itemImage.getAttribute('index'));
		console.log(index);
		for (var i = 0; i < btnImages.length - 1 ; i++) {
			var src = btnImages[i+1].getAttribute('src');
			if (btnImages[i].getAttribute('index') == index) {
			 	itemImage.setAttribute('index', (index+1));
				itemImage.setAttribute('src', src);
			 } 
		};

	}




};
function getListImages () {
	imageList = slider.querySelectorAll('img');
	console.log(imageList);
	for (var i = 0; i < imageList.length; i++) {
		var btn = document.createElement('input');
		btn.setAttribute('type', 'button');
		btn.setAttribute('value', 'hinh '+(i+1));
		btn.setAttribute('index', i);
		btn.setAttribute('src', imageList[i].getAttribute('src'));
		btn.className = 'item btn';
		btnImages.push(btn);
	};
	console.log(btnImages);

}