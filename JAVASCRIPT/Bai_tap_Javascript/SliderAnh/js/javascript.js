var index_img = 0;
function change_image(name_img,id) {
	var img = document.getElementById("image");
	name_img="images/"+name_img;
	img.style.backgroundImage = "url("+name_img+")";
	index_img = id;
	alert(id);
}
function change_image_by_btn_next () {
	var next_index = index_img+1;
	var name = 'index'+next_index;
	var next_img = document.getElementsByName('index'+next_index)[0];
	if( typeof next_img !='undefined') {
		change_image('hinh_'+next_index+'.jpg',next_index);
	}
}
function change_image_by_btn_pre() {
	var pre_index = index_img-1;
	var name = 'index'+pre_index;
	var pre_img = document.getElementsByName('index'+pre_index)[0];
	if(typeof pre_img != 'undefined'){
		change_image('hinh_'+pre_index+'.jpg',pre_index);
	}
}
