// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

//создание основного элемента
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.getElementById("b-canvas").appendChild(canvas);


// основной цикл
function main() {
    render();
    playTank.move();
    requestAnimFrame(main);
}

// инициализация игры
function init(mainLoop) {
    playTank = new Tank();
    mainLoop();
}

function render() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    playTank.draw();
}

init(main);

document.addEventListener('keydown', function(event) {
    var code = event.keyCode;
    switch(code) {
        case 40: //DOWN
            playTank.setDirection(0); break;
        case 38: //UP
            playTank.setDirection(1); break;
        case 37: //LEFT
            playTank.setDirection(2); break;
        case 39: //RiGHT
            playTank.setDirection(3); break;
    }
});


function Tank() {
    this.x = 100;
    this.y = 100;
    this.height = 20;
    this.width = 20;
    this.speed = 0.3;
    this.direction = 0;

    this.draw = function() {
        ctx.fillStyle = "#7777FF";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#333333";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    this.setDirection = function(newDirection) {
        this.direction = newDirection;
    }

    this.move = function() {
        switch(this.direction) {
            case 0:
                this.y += this.speed; break;
            case 1:
                this.y -= this.speed; break;
            case 2:
                this.x -= this.speed; break;
            case 3:    
                this.x += this.speed; break;
        }
        
    }   
}




