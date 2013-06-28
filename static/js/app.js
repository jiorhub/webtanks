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
    requestAnimFrame(main);
}

// инициализация игры
function init(mainLoop) {
    mainLoop();
}

function render() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

init(main);
