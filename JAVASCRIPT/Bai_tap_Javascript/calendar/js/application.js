var min_year = 2000;
var max_year = 2050;

function load_select_year() {
    var select_year = document.getElementById('year');
    for (var i = min_year; i <= max_year; i++) {
        select_year.innerHTML += "<option value='" + i + "'>" + i + "</option>";
    };
}

function load_select_month() {
    var select_month = document.getElementById('month');
    var list_month = new Array(
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    );
    for (var i = 0; i < list_month.length; i++) {
        select_month.innerHTML += "<option value='" + i + "'>" + list_month[i] + "</option>";
    };
}

/**
 * load all date on month and create all button contain date value
 * @param  {Date}   date first date on month if null date is date now
 * @return {void}      show all date into calendar.
 */
function load_date_on_month(date = new Date()) {
    var day_on_month       = document.getElementById('day-on-month');
    day_on_month.innerHTML = "";
    var month              = date.getMonth();
    var year               = date.getFullYear();
    var year_curent        = new Date().getFullYear();
    var month_curent       = new Date().getMonth();
    var date_curent        = null;
    if(month == month_curent && year == year_curent){
        date_curent = new Date().getDate();
    }
    document.getElementById('month').value = month;
    document.getElementById('year').value = year;

    first_day_on_week = new Date(year, month, 1).getDay();

    var total_date_on_month;
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)
        total_day_on_month = 31;
    else if (month == 1) {
        if (year % 4 == 0)
            total_day_on_month = 29;
        else
            total_day_on_month = 28;
    } else
        total_day_on_month = 30;
    for (var i = 0; i < 42; i++) {
        var date_on_month = (i - first_day_on_week) + 1;
        if (i >= first_day_on_week && date_on_month <= total_day_on_month) {
            if (date_curent && date_curent == date_on_month)
                day_on_month.innerHTML += "<div class='item date curent'>" + "<p>" + date_on_month + "</p>" + "</div>";
            else
                day_on_month.innerHTML += "<div class='item date'>" + "<p>" + date_on_month + "</p>" + "</div>";

        }
            
        else
            day_on_month.innerHTML += "<div class='item'>" + "</div>";
    };

}

//change calendar when change select date or select year
function change_calendar() {
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var date = new Date(year, month, 1);
    load_date_on_month(date);
    add_event_click_on_date();
}


//handle event click next month button and change calendar
function next_month() {
    var month = document.getElementById('month');
    if (month.value < 11) {
        ++month.value;
    }
    change_calendar();

}

//handle event click preview month button and change calendar
function preview_month() {
    var month = document.getElementById('month');
    if (month.value > 0) {
        --month.value;
    }
    change_calendar();
}

//handle event click next year button and change calendar
function next_year() {
    var year = document.getElementById('year');
    if (year.value < max_year) {
        ++year.value;
    }
    change_calendar();
}

//handle event click preview year button and change calendar
function preview_year() {
    var year = document.getElementById('year');
    if (year.value > min_year) {
        --year.value;
    }
    change_calendar();
}

//get and show date on input result
function select_date (opj) {
    var date = opj.getElementsByTagName('p')[0].innerHTML;
    var result = document.getElementById('result');
    result.getElementsByTagName('input')[0].value = date;
}

//handle event click  each date on calendar
function add_event_click_on_date () {
    var date = document.getElementsByClassName('date');
    for (var i = 0; i < date.length; i++) {
            date[i].onclick = function() {
                var value_date = this.getElementsByTagName('p')[0].innerHTML;
                var result = document.getElementById('result');
                var month = document.getElementById('month').value;
                var year = document.getElementById('year').value;
                result.getElementsByTagName('input')[0].value = value_date + "/" + (Number(month) + 1) + "/" + year;
                document.getElementById('content').style.display="none";
            };
        }
}

//show or hide calendar when click field result
function show_calendar() {
    var carlendar = document.getElementById('content');
    if (carlendar.style.display == "none")
        carlendar.style.display = "block";
    else
        carlendar.style.display = "none";
}

//add info year , month and load all date on month on web site , add event click date
function load_calendar() {
    load_select_year();
    load_select_month();
    load_date_on_month();
    add_event_click_on_date();
}