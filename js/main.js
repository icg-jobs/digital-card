
$('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: false,//左右の矢印
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーション
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});

$(function(){
    $(window).scroll(function (){
        $('.svg-elem-1').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 1){
                $(this).addClass('active');
            }
        });
    });
});

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
//====下に動くアニメーションここから===
    $('.downAnime').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        // 下から上へ表示するクラスを付与
        // テキスト要素を挟む親要素（下）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeDownUp");
        // 要素を下枠外に移動しCSS アニメーションで下から元の位置に移動
        $(this).children(".downAnimeInner").addClass("slideAnimeUpDown");
        // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        }else{
        // 下から上へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeDownUp");
        $(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
        }
    });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述



//====グーグルフォーム===

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // デフォルトのフォーム送信を防止

//     // フォームデータを取得
//     var formData = new FormData(this);

//     // Google フォームのエンドポイント
//     var googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScN8BYxILU0F3P1x3TooZCYslWIhKvRiEqfhqbDQ3W_2JxdOA/formResponse"; // ここに Google フォームのエンドポイントURLを入力

//     // Google フォームにデータを送信
//     fetch(googleFormUrl, {
//         method: "POST",
//         body: formData,
//         mode: "no-cors" // クロスオリジン制約を回避
//     })
//     .then(function(response) {
//         // 送信が成功したら、成功メッセージを表示するなどの処理を行う
//         console.log("送信成功");
//     })
//     .catch(function(error) {
//         // エラーが発生した場合の処理
//         console.error("送信エラー:", error);
//     });
// });



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
