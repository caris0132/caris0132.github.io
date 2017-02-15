
var imageList;
var slider;
var btnImages = new Array();
$(document).ready(function() {
	slider = $('.sliderImages');
	slider.css({
		backgroundColor: 'red',
		width: '500px',
		height: '300px'
	});
	getListImages();
	slider.empty();

	//create button next, preview and backgound image
	var itemImage = $('<img/>');
	var next = $('<div></div>');
	var pre = $('<div></div>');
	itemImage.addClass('item-image');
	next.addClass('next item');
	pre.addClass('preview item');
	slider.append(itemImage);
	slider.append(next);
	slider.append(pre);
	slider.append(btnImages);
	itemImage.attr('src', 'images/hinh_1.jpg');
	itemImage.attr('index', '0');

	//click handle when click button image
	$('button').click(function() {
		itemImage.attr('src', $(this).attr('src')); 
		itemImage.attr('index', $(this).attr('index'));
	});

	//event click button next  . get and change next image
	$('.next').click(function  () {
		if(itemImage.attr('index' ) < btnImages.length -1){
			var index = parseInt(itemImage.attr('index')) + 1;
			itemImage.attr({
				src: $('button[index='+index+']').attr('src'),
				'index': index
			});
		}
			
	});
	//event click button preview  . get and change preview image
	$('.preview').click(function  () {
		if (itemImage.attr('index') > 0) {
			var index = parseInt(itemImage.attr('index' )) - 1;
			itemImage.attr({
				src: $('button[index='+index+']').attr('src'),
				'index': index
			});
		}
	});
	
});
/**
 * get list image 
 * @return {array} list item image
 */
function getListImages () {
	imageList = $('div.sliderImages img');
	for (var i = 0; i < $('.sliderImages img').length; i++) {
		var btn = $('<button/>');
		btn.attr({
			type: 'button',
			value: 'hinh' + (i+1),
			index: i,
			src: imageList[i].getAttribute('src')
		});
		btn.addClass('item btn');
		var img_btn = $('<img/>');
		img_btn.attr({
			src: btn.attr('src')
		});
		img_btn.addClass('btn-img');
		btn.append(img_btn);
		btnImages.push(btn);
	}
	console.log(btnImages);

}

