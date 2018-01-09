var container,
    canvas,
    ctx,
    image;

window.addEventListener('load', function() {
    container = document.getElementById('canvas-container');
    canvas = document.getElementById('canvas_pdf'),
    ctx = canvas.getContext('2d'),

    canvas.addEventListener('mousedown', onMouseDown, false);
    canvas.addEventListener('mouseup', onMouseUp, false);
    canvas.addEventListener('mousemove', onMouseMove, false);

    // 背景画像セット
	setBackgroud();
})

// ドラッグ状態かどうか
var isDragging = false;
// ドラッグ開始位置
var start = {
    x: 0,
    y: 0
};
// ドラッグ中の位置
var diff = {
    x: 0,
    y: 0
};
// ドラッグ終了後の位置
var end = {
    x: 0,
    y: 0
}
//
// mouse down/on
//
function onMouseDown() {
    // drawOn();
}
function onMouseUp() {
    // drawOff();
}
function drawOn() {
    // マウスが押された時の描画処理
    // isDragging = true;
    // start.x = event.clientX;
    // start.y = event.clientY;
}
function drawOff() {
    // isDragging = false;
    // end.x = diff.x;
    // end.y = diff.y;
}

//
// mouse move
//
function throttle(targetFunc, time) {
    // var _time = time || 100;
    // clearTimeout(this.timer);
    // this.timer = setTimeout(function () {
    //     targetFunc();
    // }, _time);
}

function onMouseMove(e) {
    // draw(e);
}

function draw(e) {
    // if (isDragging) {
    //     diff.x = (event.clientX - start.x) + end.x;
    //     diff.y = (event.clientY - start.y) + end.y;
    //     redraw();
    // }
}

function redraw(){
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.drawImage(image, diff.x, diff.y)
};

//
// 背景画像セット
//
function setBackgroud(){
    var img = new Image();
    img.src = "image/1.jpg";
    img.onload = function() {
        // キャンバスサイズ変更
        canvas.width = img.width;
        canvas.height = img.height;
        // 画像描画
        ctx.drawImage(img, 0, 0);
    }
}

$('#test').on('click',function(){
    var image = new Image();
    image.src = "image/innei.png";

    image.onload = function() {
        console.log(image.width);
        console.log(image.height);
        ctx.drawImage(image, 200, 50);
    }
});
