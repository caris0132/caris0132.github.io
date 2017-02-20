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
                day_on_month.innerHTML += "<div class='item date'>" + "<p>" + date_on_month + "</p>" + "</div>"

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
                result.getElementsByTagName('input')[0].value = value_date + "/" + month + "/" + year;
                document.getElementById('content-calendar').style.display="none";
            };
        }
}

//show or hide calendar when click field result
function show_calendar() {
    var carlendar = document.getElementById('content-calendar');
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

/**
 * ckeck param is email address
 * @param  {string}  emailStr string 
 * @return {Boolean}          return true if emailStr is email address else return false
 */
function isEmail(emailStr) 
    {
            var emailPat=/^(.+)@(.+)$/
            var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
            var validChars="\[^\\s" + specialChars + "\]"
            var quotedUser="(\"[^\"]*\")"
            var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
            var atom=validChars + '+'
            var word="(" + atom + "|" + quotedUser + ")"
            var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
            var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")
            var matchArray=emailStr.match(emailPat)
            if (matchArray==null) {
                    return false
            }
            var user=matchArray[1]
            var domain=matchArray[2]
 
            // See if "user" is valid
            if (user.match(userPat)==null) {
                return false
            }
            var IPArray=domain.match(ipDomainPat)
            if (IPArray!=null) {
                // this is an IP address
                      for (var i=1;i<=4;i++) {
                        if (IPArray[i]>255) {
                            return false
                        }
                }
                return true
            }
            var domainArray=domain.match(domainPat)
            if (domainArray==null) {
                return false
            }
 
            var atomPat=new RegExp(atom,"g")
            var domArr=domain.match(atomPat)
            var len=domArr.length
 
            if (domArr[domArr.length-1].length<2 ||
                domArr[domArr.length-1].length>3) {
               return false
            }
 
            // Make sure there's a host name preceding the domain.
            if (len<2) 
            {
               return false
            }
 
            // If we've gotten this far, everything's valid!
            return true;
    }

/**
 * check validate data username, password,email
 * @return {boolear} return true if can validate data else return false
 */
function check_validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('day-of-birth').value;
    var error = false;
    if (username == '' || username.length < 8 ){
        document.getElementById('err_username').innerHTML = "username length min 8 letter";

        error = true;
    }
    else {
        document.getElementById('err_username').innerHTML ="";
    }
    if (password.length < 8 || password == '') {
        document.getElementById('err_password').innerHTML = "password length min 8 letter";
        error = true;

    }
    else
    {
        document.getElementById('err_password').innerHTML ="";
    }
    if (!isEmail(email)) {
        document.getElementById('err_email').innerHTML = "Email wrong format";
        error = true;
    }
    else
    {
        document.getElementById('err_email').innerHTML = "";
    }
    if (!date) {
        document.getElementById('err_date').innerHTML = "date is empty";
        error = true;

    }
    else
    {
        document.getElementById('err_date').innerHTML = "";
        error = false;
    }
    console.log(error)
    return !error;
}

//handle when keypress field email ,pass, email . then check validate
var input = document.getElementsByTagName('INPUT');
for (var i = 0; i < input.length; i++) {
    input[i].onkeypress = function () {
        var condition = (this.id == 'username' || this.id == 'password' || this.id == 'email');
        if (condition) {
            check_validate();
        };
    }
}

//check validate 
setInterval(function () {
    var submit = document.getElementById('submit');
    
    
    if (check_validate()) {
        submit.removeAttribute("disabled");
        console.log('aa');
    } else {
        submit.setAttribute('disabled', 'disabled');
    }
})

//handle click button refersh all field pass, email , username
var refersh = document.getElementById('refersh');
refersh.onclick = function () {
    // refersh field input
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('email').value = '';
    document.getElementById('day-of-birth').value = '';
    // refersh error
    document.getElementById('err_username').innerHTML = '';
    document.getElementById('err_password').innerHTML = '';
    document.getElementById('err_email').innerHTML = '';
    document.getElementById('err_date').innerHTML = '';

}


//handle form Ajax when click submit
document.getElementById('submit').onclick = function () {
    
    if (check_validate()) {
        return false;
    }
    var xmlhttp;
    var formDT = new FormData();
    formDT.append('username', document.getElementById('username').value);
                 
    // if version brower is  IE7+, Firefox, Chrome, Opera, Safari
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    // if brower is IE6, IE5
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
                 
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            alert(xmlhttp.responseText);
        }
    };
                 
    xmlhttp.open("POST", "login.php", true);
    xmlhttp.send(formDT);
}



