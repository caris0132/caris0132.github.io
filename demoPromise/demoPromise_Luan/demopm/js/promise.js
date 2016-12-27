function getImage(url) {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        img.onload = function() {
            resolve(url);
        }
        img.onerror = function() {

            reject(url);
        }
        img.src = url;
    });
}



function addimg(url) {
    var dog = document.createElement('img');    
    dog.setAttribute('src', url);
    doggyplayground.appendChild(dog); // add image to DIV 
 }
function displayimages() {
    var doggyplayground = document.getElementById('doggyplayground');
    getImage('http://www.planwallpaper.com/static/images/acede69a00dd92ffd13e1322d0e15d4b_large-hdwallpapers2016com.jpeg')
        .then(function(url) {
            addimg(url);
            return getImage('http://www.planwallpaper.com/static/images/summer-live-wallpaper-full-hd-0b5967-h900.jpg');
        }, function(url, defaultimg) {
                var dog = document.createElement('img');
                dog.setAttribute('src', "http://img.v3.news.zdn.vn/w210/Uploaded/ohunuai/2016_12_26/TH_.jpg");
                doggyplayground.appendChild(dog); // add image to DIV
                return getImage('http://www.javascriptkit.com/javatutors/dog2.png');
            })
        .then(function(url) {
            addimg(url);
            return getImage('http://www.planwallpaper.com/static/images/full_hd_nature_wallpapers_1080p_desktop_romantic_sunset.jpg');
        })
        .then(function(url) {
            addimg(url);
            return getImage('http://www.planwallpaper.com/static/images/hd-wallpaper-40.jpg');
        })
        .then(function(url) {
            addimg(url);
            return getImage('http://www.planwallpaper.com/static/images/space_sky_stars_79233_1920x1080.jpg');
        })
        .then(function(url) {
            addimg(url);
        })      
}
 
/*==============================*/


function getimg1(viecnaodo) {
    var dog = document.createElement('img');
    var url = 'http://www.planwallpaper.com/static/images/acede69a00dd92ffd13e1322d0e15d4b_large-hdwallpapers2016com.jpeg';
    dog.setAttribute('src', url);   
    var img = new Image();
    img.onload = function() {
        doggyplayground.appendChild(dog);
        viecnaodo();
    };
    img.src = url;
        
}

function getimg2(viecnaodo) {
    var dog = document.createElement('img');
    var url = 'http://www.planwallpaper.com/static/images/summer-live-wallpaper-full-hd-0b5967-h900.jpg';
    dog.setAttribute('src', url)  ;    
    var img = new Image();
    img.onload = function(){
        doggyplayground.appendChild(dog);
        viecnaodo();           
    };
    img.src = url;
}

function getimg3(viecnaodo) {
    var dog = document.createElement('img');
    var url = 'http://www.planwallpaper.com/static/images/full_hd_nature_wallpapers_1080p_desktop_romantic_sunset.jpg';
    dog.setAttribute('src', url);
    var img = new Image();
    img.onload = function() {
        doggyplayground.appendChild(dog);
        viecnaodo();
    };
    img.src = url;
}
function getimg4(viecnaodo) {
    var dog = document.createElement('img');
    var url = 'http://www.planwallpaper.com/static/images/space_sky_stars_79233_1920x1080.jpg';
    dog.setAttribute('src', url);
    var img = new Image();
    img.onload = function() {
        doggyplayground.appendChild(dog);
        viecnaodo();
    };
    img.src = url;
}
function getimg5(viecnaodo) {
    var dog = document.createElement('img');
    var url = 'http://www.planwallpaper.com/static/images/hd-wallpaper-40.jpg';
    dog.setAttribute('src', url);  
    var img = new Image();
    img.onload = function() {
        doggyplayground.appendChild(dog);
        viecnaodo();
    };
    img.src = url;
}

function main() {
    var doggyplayground = document.getElementById('doggyplayground');
    getimg1(function() {
        getimg2(function() {
            getimg3(function() {
                getimg4(function() {
                    getimg5(function() {
          
                    });
                });
            });
        });
    });
}
