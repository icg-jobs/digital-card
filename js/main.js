
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
