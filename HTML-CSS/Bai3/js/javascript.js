function show_info_trailer (item_id) {
	var x = document.getElementById(item_id);
	var y = document.getElementById('info-'+item_id);
	var icon_arrow = x.getElementsByClassName("arrow")[0];
	if(y.style.display != "none")
	{
		y.style.display ="none";
		icon_arrow.style.backgroundPosition="4px -19px";
	}
	else
	{
		y.style.display="block";
		icon_arrow.style.backgroundPosition="4px 6px";
	}
}
function selected_rating(review_id, rating) {
	var review = document.getElementById(review_id);
	var background_rating = review.getElementsByClassName('icon-votes')[0];

	switch (rating) {
		
		case "rating-10" : {
			background_rating.style.backgroundPosition="0 -15px";
			break;
		}
		case "rating-15" : {
			background_rating.style.backgroundPosition="0 -32px";
			break;
		}
		case "rating-20" : {
			background_rating.style.backgroundPosition="0 -49px";
			break;
		}
		case "rating-25" : {
			background_rating.style.backgroundPosition="0 -65px";
			break;
		}
		case "rating-30" : {
			background_rating.style.backgroundPosition="0 -80px";
			break;
		}
		case "rating-35" : {
			background_rating.style.backgroundPosition="0 -95px";
			break;
		}
		case "rating-40" : {
			background_rating.style.backgroundPosition="0 -110px";
			break;
		}
		case "rating-45" : {
			background_rating.style.backgroundPosition="0 -125px";
			break;
		}
		case "rating-50" : {
			background_rating.style.backgroundPosition="0 -140px";
			break;
		}
		default : {
			review.style.backgroundPosition="0 1px";
		}

	}
}