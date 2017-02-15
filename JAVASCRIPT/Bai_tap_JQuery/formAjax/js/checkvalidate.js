

/**
 * check string  email?
 * @param  {string}  emailStr string is check
 * @return {Boolean}          return true if  param is email else return false
 */
function isEmail(emailStr) 
    {
            var emailPat     = /^(.+)@(.+)$/
            var specialChars = "\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
            var validChars   = "\[^\\s" + specialChars + "\]"
            var quotedUser   = "(\"[^\"]*\")"
            var ipDomainPat  = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
            var atom         = validChars + '+'
            var word         = "(" + atom + "|" + quotedUser + ")"
            var userPat      = new RegExp("^" + word + "(\\." + word + ")*$")
            var domainPat    = new RegExp("^" + atom + "(\\." + atom +")*$")
            var matchArray   = emailStr.match(emailPat)
            if (matchArray == null) {
                    return false
            }
            var user   = matchArray[1]
            var domain = matchArray[2]
 
            // See if "user" is valid
            if (user.match(userPat)==null) {
                return false
            }
            var IPArray = domain.match(ipDomainPat)
            if (IPArray != null) {
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
 
            var atomPat = new RegExp(atom,"g")
            var domArr  = domain.match(atomPat)
            var len     = domArr.length
 
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
 * check validate form 
 * @return {boolean} return true if check email ,user and passwork accept else return false
 */
function checkvalidate () {
    var error = false ;
    var username = $('#username').val();
    var password = $('#password').val();
    var email    = $('#email').val();
    var date     = $('.result').val();
    
    if(username == '' || username.length < 8 ){
        $('#err_username').text("username length min 8 letter");
        error = true;
    }
    else
        $('#err_username').text("");
     if (password == '' || password.length< 8) {
        $('#err_password').text("password length min 8 letter");
        error = true;
    }
    else
        $('#err_password').text("");
     if (!isEmail(email)) {
        $('#err_email').text("Email wrong format");
        error = true;
    }
    else {
        $('#err_email').text("");
    }
    if (date =='') {
        $('#err_date').text("date not empty");
        error = true;
    }
    else {
        $('#err_date').text("");
    }
    console.log(error);
    return !error;
}

//handle submit using ajax get result check accout server(login.php) if username = admin123456 return false
//else return true
$('#btn-submit').click(function(event) {
    $.ajax({
        url: 'login.php',
        method: 'POST',
        dataType: 'text',
        data: {'username': $('#username').val()},
        success : function function_name(data) {
            alert(data);
        }
    });

    
});
//handle input date chang value . then check validate.
//check validate when value change AND enable button submit if validate return true
setInterval(function () {
    if(checkvalidate()) {
        $('#btn-submit').removeAttr("disabled");
        return
    }
    $('#btn-submit').attr("disabled", "disabled");
});



$('input').keypress(function(event) {
    if(checkvalidate()) {
        $('#btn-submit').removeAttr("disabled");
        return
    }
    $('#btn-submit').attr("disabled", "disabled");
});

//handle click button refresh clear all input test.
$('#btn-refresh').click(function(event) {
    $('#username').val("");
    $('#password').val("adada");
    $('#email').val("");
    $('#err_username').text("");
    $('#err_password').text("");
    $('#err_email').text("");
    $('#err_date').text("");
    $('#password').val("adada");

});
