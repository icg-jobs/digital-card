


var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
    canvasList = [];
    colorList = [];
    // canvas1個めの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#DCECFF']);
  // 各キャンバスの初期化
    for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 100;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
    update();
}

function update() {
    for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 50);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
    // 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 1, 3, 0);//drawWave(canvas, color[0],0.5, 3, 0);とすると透過50%の波が出来る
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.fillStyle = color;//塗りの色
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
    context.lineTo(0, canvas.height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //波を塗りつぶす
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}
init();

function slideAnime(){
//====左に動くアニメーションここから===
    $('.leftAnime').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        //左から右へ表示するクラスを付与
        //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
        //左から右へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
        
    }
    });
    
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述




//========= テキストを滑らかに出現させる
// smoothTriggerにsmoothTextAppearというクラス名を付ける定義
function SmoothTextAnime() {
$('.smoothTextTrigger').each(function(){ //smoothTextTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('smoothTextAppear');// 画面内に入ったらsmoothTextAppearというクラス名を追記
    }else{
    $(this).removeClass('smoothTextAppear');// 画面外に出たらsmoothTextAppearというクラス名を外す
    }
    }); 
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
SmoothTextAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


// アコーディオン

$(function(){
    $(".more").on("click", function() {
        $(this).toggleClass("on-click");
        $(".txt-hide").slideToggle(1000);
    });
}); 

$(function () {
$('.inner-box2').hide(); // 初期状態を非表示に
$('.inner-box1').on('click', function () {
    var findElm = $(this).next(".inner-box2");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle(500);//アコーディオンの上下動作

});
});                            
