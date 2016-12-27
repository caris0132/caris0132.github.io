var doggyplayground = document.getElementById('doggyplayground')
var doggies = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.jpg', 'dog5.jpg']
function getImage(url){
    return new Promise(function(resolve, reject){
        var img = new Image()
        url = "images/" + url 
        return resolve(url)
    })
}
function showAll (images) {
    Promise.all(doggypromises).then(function(urls){
    for (var i=0; i<urls.length; i++){
        var dog = document.createElement('img')
        dog.setAttribute('src', urls[i])
        doggyplayground.appendChild(dog)
    }
    }).catch(function(urls){
    console.log("Error fetching some images: " + urls)
    })
}
function displayimages(images){
    // process doggies images one at a time
    var i = 0;
         var targetimage =  images[i]
     
        getImage(targetimage).then(function(url){ // load image then...
            var dog = document.createElement('img')
            
            return new Promise(function(resolve){
                setTimeout(function(){
                    dog.setAttribute('src', url)
                    doggyplayground.appendChild(dog) // add image to DIV
                    resolve("images/" + images[++i]);
                    }, 1000);
                });
        })
        .then(function(url){ // load image then...
            var dog = document.createElement('img')
            
            return new Promise(function(resolve){
                setTimeout(function(){
                    dog.setAttribute('src', url)
                    doggyplayground.appendChild(dog) // add image to DIV
                    resolve("images/" + images[++i]);
                    }, 1000);
                });
        })
        .then(function(url){ // load image then...
            var dog = document.createElement('img')
            
            return new Promise(function(resolve){
                setTimeout(function(){
                    dog.setAttribute('src', url)
                    doggyplayground.appendChild(dog) // add image to DIV
                    resolve("images/" + images[++i]);
                    }, 1000);
                });
        })
        .then(function(url){ // load image then...
            var dog = document.createElement('img')
            
            return new Promise(function(resolve){
                setTimeout(function(){
                    dog.setAttribute('src', url)
                    doggyplayground.appendChild(dog) // add image to DIV
                    resolve("images/" + images[++i]);
                    }, 1000);
                });
        })
        .then(function(url){ // load image then...
            var dog = document.createElement('img')
            
            return new Promise(function(resolve){
                setTimeout(function(){
                    dog.setAttribute('src', url)
                    doggyplayground.appendChild(dog) // add image to DIV
                    resolve("images/" + images[++i]);
                    }, 1000);
                });
        })
        .catch(function(url){ // handle an image not loading
            console.log('Error loading ' + url)
            
        })
}

$("#showAll").click(function  () {
    showAll(doggies)
});
displayimages(doggies)

 var doggypromises = doggies.map(getImage) // call getImage on each array element and return array of promises
 
