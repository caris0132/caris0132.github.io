var calendar ;
var result;
var select_year;
var select_month;
var date_on_month;
$(document).ready(function() {
	calendar = $('.calendar');

	var input_result = $('<input/>');
	input_result.attr('type', 'text');
	input_result.addClass('next-month');
	input_result.css({
		width: '120px',
		height: '30px',
		display: 'inline-block',
		padding: '0',
		margin: '0',
		'box-sizing': 'border-box',
		float: 'left'
	});

	var pre_year = $('<input/>');
	pre_year.attr('type', 'button');
	pre_year.addClass('pre-year item');

	var pre_month = $('<input/>');
	pre_month.attr('type', 'button');
	pre_month.addClass('pre-month item');

	var next_month = $('<input/>');
	next_month.attr({
		type: 'button',
		'class': 'btn_next_month'
	});
	next_month.css({
		backgroundImage: "url('images/next.png')",
		width: '60px',
		height: '30px'
	});
	var select_month = $('<select></select>');


	var next_year = $('<input/>');
	next_year.addClass('next-year item');
	next_year.attr('type', 'button');

	select_month = createSelectMonth();
	select_month.addClass('item');
	select_month.css('width', '120px');

	createSelectYear();
	select_year.addClass('item');

	result = $('<div></div>');
	result.addClass('result');

	calendar.append(result);
	calendar.append(pre_year);
	calendar.append(pre_month);
	calendar.append(select_month);
	calendar.append(select_year);
	calendar.append(next_month);
	calendar.append(next_year);
	calendar.append(createDayOnWeek());
	calendar.append(loadDateOnMonth());

	select_month.change(function  () {
		date_on_month.remove();
		calendar.append(loadDateOnMonth());
		$('.calendar *').css('display', 'inline-block');
	});
	select_year.change(function(event) {
		date_on_month.remove();
		calendar.append(loadDateOnMonth());
		$('.calendar *').css('display', 'inline-block');
	});

	$("input[type='button']").click(function(event) {
		var check = parseInt(select_month.val()) > 0;
		var check2 = $(this).attr('class') == 'pre-month item';
		debugger
		if($(this).attr('class') == 'btn_next_month' && parseInt(select_month.val()) <11) {
			select_month.val(parseInt(select_month.val()) + 1) ;
			date_on_month.remove();
			calendar.append(loadDateOnMonth());
		}
		if($(this).attr('class') == 'pre-month item' && parseInt(select_month.val()) > 0) {
			select_month.val(parseInt(select_month.val()) - 1) ;
			date_on_month.remove();
			calendar.append(loadDateOnMonth());
		}
		if($(this).attr('class') == 'next-year item' && parseInt(select_year.val()) < (new Date().getFullYear())) {
			select_year.val(parseInt(select_year.val()) + 1) ;
			date_on_month.remove();
			calendar.append(loadDateOnMonth());
		}
		if($(this).attr('class') == 'pre-year item' && parseInt(select_year.val()) > 1990) {
			select_year.val(parseInt(select_year.val()) - 1) ;
			date_on_month.remove();
			calendar.append(loadDateOnMonth());
		}
		
		$('.calendar *').css('display', 'inline-block');
	});
	$('.date').click(function  () {
		debugger
		var date = parseInt($(this).text());
		var result_date = date + '/' + (parseInt(select_month.val())+1) +'/' + select_year.val();
		result.text(result_date);
		$('.calendar *').css('display', 'none');
	});

	result.click(function(event) {
		$('.calendar *').css('display', 'inline-block');
	});

});

function createSelectMonth () {
	select_month = $('<select></select>');
	for (var i = 0; i < 12; i++) {
		select_month.append("<option value='"+ i +"'>"+ (i+1) +"</option>");
		
	}
	return select_month;
}
function createSelectYear () {
	var date = new Date();
	date.getFullYear()
	select_year = $('<select></select>');
	for (var i = 1990; i <= date.getFullYear(); i++) {
		select_year.append("<option value='"+ i +"' >"+ i +"</option>");

	} 
	select_year.val(new Date().getFullYear()) ;
}
function createDayOnWeek () {
	var day_on_week = $('<div></div>');
	var ls_day_on_week = new Array('Sun','Mon','Tue','Web','Thu','Fri','Sat');
	for (var i = 0; i < ls_day_on_week.length; i++) {
		day_on_week.append("<div class='day item'><p>" + ls_day_on_week[i] + "</p></div>");
	}
	select_month.val(new Date().getMonth());
	return day_on_week;
}
function loadDateOnMonth () {
	date_on_month = $('<div></div>');
	date_on_month.addClass('date-on-month');
	var first_date_on_week = new Date(1,select_month.val()-1,select_year.val()).getDay();
	console.log(select_year.val());
	var total_date_on_month;
	var month = select_month.val();
	if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)
        total_day_on_month = 31;
    else if (month == 1) {
        if (parseInt(select_year.val()) % 4 == 0)
            total_day_on_month = 29;
        else
            total_day_on_month = 28;
    }
    else
        total_day_on_month = 30;
    if(new Date().getMonth() == month && new Date().getFullYear() == select_year.val())
    	var date_curent = new Date().getDate();
    for (var i = 0; i < 42; i++) {
    	 var int_date_on_month = (i - first_date_on_week) + 1;
        if (i >= first_date_on_week && int_date_on_month <= total_day_on_month) {
            if (date_curent && date_curent == int_date_on_month)
                date_on_month.append("<div class='item date curent'>" +   int_date_on_month  + "</div>") ;
            else
                date_on_month.append("<div class='item date'>" +   int_date_on_month + "</div>") ;

        }
            
        else
            date_on_month.append("<div class='item'></div>");

    }
    

    return date_on_month;
}