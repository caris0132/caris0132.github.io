var canvas;
var context;
var cancelAnimation;
var reqAnimation;
var myReq;
var mapWidth;
var mapHeight;
var time_start = null;
var start = false;
var stop = false;
var lever = 1;
var num_boom = 3;
var num_stop = 3;
var point = 0;
var heart = 5;
var img_src = 'images/monster.png';
var monstersls = new MonsterList();
// class Monster
function Monster(img_rsc, cx, cy, imgWidth, imgHeight) {
    this.cx = cx;
    this.cy = cy;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;
    this.img_src = img_src;
    this.img = new Image();
    this.isSelected = false;
    this.speedX = 1;
    this.speedY = 1;
}
Monster.prototype.draw = function() {
    this.img.src = this.img_src;
    context.drawImage(this.img, this.cx, this.cy, this.imgWidth, this.imgHeight);
    alert('daa');
}
Monster.prototype.move = function() {
    context.clearRect(this.cx, this.cy, this.imgWidth, this.imgHeight);
    this.cx += speedX;
    this.cy += speedY;
    if (this.cx < 0 || this.cx > canvas.width) speedX = -speedX;
    if (this.cy < 0 || this.cy > canvas.height) {
        speedY = -speedY;
    }
    this.draw(context);
};
//--- function auto move for monster-
function update() {
    if (start == false || stop == true) {
        if (checkGameWin()) {
            lever++;
            addMonsterByLever();
            alert("Win");
        }
        return;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = monstersls.monsters.length - 1; i >= 0; i--) {
        monstersls.monsters[i].cx += monstersls.monsters[i].speedX;
        monstersls.monsters[i].cy += monstersls.monsters[i].speedY;
        if (monstersls.monsters[i].cx < 0 || monstersls.monsters[i].cx > canvas.width) monstersls.monsters[i].speedX = -monstersls.monsters[i].speedX;
        if (monstersls.monsters[i].cy < 0 || monstersls.monsters[i].cy > canvas.height) monstersls.monsters[i].speedY = -monstersls.monsters[i].speedY;
    };
    savehightScore(point);
    monstersls.drawMonterList();
    if (checkGameOver()) {
        //cancelAnimation(myReq);
        start = false;
        alert("game over");
        return;
    }
    if (checkGameWin()) {
        lever++;
        addMonsterByLever();
        alert("Win");
    }
    savehightScore();
    updateHightScore();
    myReq = reqAnimation(update);
}
// function check monster  have contain mouse point --
Monster.prototype.isContain = function(x, y) {
    var right = this.cx + this.imgWidth;
    var bottom = this.cy + this.imgHeight;
    return x > this.cx && x < right && y > this.cy && y < bottom;
};
//class monster list
function MonsterList() {
    this.monsters = [];
    this.selectMonster = null;
    this.offsetX = -1;
    this.offsetY = -1;
}
MonsterList.prototype.addMonster = function(src, x, y, width, height) {
    var monster = new Monster(src, x, y, width, height);
    this.monsters.push(monster);
};
MonsterList.prototype.selectAt = function(x, y) {
    if (this.selectMonster) {
        this.selectMonster.isSelected = false;
    }
    this.selectMonster = null;
    for (var i = 0; i < this.monsters.length; i++) {
        var monster = this.monsters[i];
        if (monster.isContain(x, y)) {
            this.selectMonster = monster;
            this.offsetX = x - monster.x;
            this.offsetY = y - monster.y;
            this.monsters[i].isSelected = true;
            this.selectMonster = this.monsters[i];
        }
    };
};
MonsterList.prototype.drawMonterList = function() {
    for (var i = this.monsters.length - 1; i >= 0; i--) {
        this.monsters[i].draw();
    };
};

function getMousePoint(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
// event click monster
function monsters_click(x, y) {
    if (start == false) return;
    monstersls.selectAt(x, y);
    if (monstersls.selectMonster) {
        var indexMonster = monstersls.monsters.indexOf(monstersls.selectMonster);
        var monster = monstersls.monsters.splice(indexMonster, 1);
        monster[0].img_src = 'images/icon_stop.jpg';
        monster[0].draw();
        point += 50;
        savehightScore();
        console.log(sessionStorage.hightScore);
        updateHightScore();
    } else {
        point -= 50;
        heart--;
        document.getElementById('status-gamer-heart').innerHTML = "Heart: " + heart;
    }
    document.getElementById('now-score').innerHTML = "Score: " + point;
    checkGameWin();
}

function savehightScore(point) {
    if (!sessionStorage.hightScore || Number(sessionStorage.hightScore) <= point) sessionStorage.hightScore = point;
}
//click moom
function boomMonster() {
    if (num_boom == 0) {
        return;
    }
    num_boom--;
    point += monstersls.monsters.length * 50;
    monstersls.monsters.splice(0, monstersls.monsters.length);
    document.getElementById('num-boom').innerHTML = num_boom;
    document.getElementById('now-score').innerHTML = "Score :" + point;
}

function pauseGame() {
    var btn_pause = document.getElementById('pause');
    if (start == true) {
        start = false;
        btn_pause.style.backgroundImage = "url(images/icon_stop.jpg)";
    } else {
        start = true;
        btn_pause.style.backgroundImage = "url(images/icon_pause.jpg)";
        reqAnimation(update);
    }
}

function stopGame() {
    if (stop == false && num_stop > 0 && start == true) {
        stop = true;
        num_stop--;
        var num_stop_id = document.getElementById('num-stop');
        num_stop_id.innerHTML = num_stop;
    } else {
        stop = false;
        reqAnimation(update);
    }
}

function startGame() {
    cancelAnimation(myReq);
    start = true;
    heart = 5;
    stop = false;
    speed = lever = 1;
    num_boom = 3;
    num_stop = 3;
    updateHightScore();
    var btn_pause_id = document.getElementById('pause');
    var boom_id = document.getElementById('num-boom').innerHTML = num_boom;
    var pause_id = document.getElementById('num-stop').innerHTML = num_stop;
    var heart_id = document.getElementById('status-gamer-heart').innerHTML = "Heart: " + heart;
    var speed_id = document.getElementById('status-gamer-speed').innerHTML = "Speed: " + speed;
    btn_pause.style.backgroundImage = "url(images/icon_pause.jpg)";
    monstersls.monsters.splice(0, monstersls.monsters.length);
    addMonsterByLever();
    myReq = reqAnimation(update);
}

function checkGameOver() {
    if (heart <= 0) {
        return true;
    }
    return false;
}

function checkGameWin() {
    if (monstersls.monsters.length <= 0) {
        stop = false;
        return true;
    }
    return false;
}

function addMonsterByLever() {
    for (var i = 0; i < lever; i++) {
        monstersls.addMonster(img_src, Math.random() * canvas.width, Math.random() * canvas.height, 50, 50);
        monstersls.monsters[i].speedX *= lever;
        monstersls.monsters[i].speedY *= lever;
    };
    document.getElementById('status-gamer-speed').innerHTML = "Speed: " + lever;
}
//
function updateHightScore() {
    document.getElementById('hight-score').innerHTML = "HightScore: " + sessionStorage.hightScore;
}
// run game//
canvas = document.getElementById('canvas');
canvas.onclick = monsters_click();
context = canvas.getContext('2d');
reqAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrane || window.oRequestAnimationFrame;
cancelAnimation = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancalAnimationFrame || window.oCancelAnimationFrame;
//canvas tag click
canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePoint(canvas, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    monsters_click(mousePos.x, mousePos.y);
}, false);
var total_point = document.getElementById('menu-game').innerHTML == "<p>" + point + "</p>";
var btn_pause = document.getElementById('pause');