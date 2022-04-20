

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime1(){

    // fade in move
    $('.fadeUpTrigger1').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-10;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp1');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp1');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
    fadeAnime1();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
    fadeAnime1();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述





// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime2(){

    // fade in move
    $('.fadeUpTrigger2').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-10;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp2');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp2');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
fadeAnime2();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
fadeAnime2();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime3(){

    // fade in move
    $('.fadeUpTrigger3').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-10;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp3');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp3');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
fadeAnime3();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
fadeAnime3();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime4(){

    // fade in move
    $('.fadeUpTrigger4').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-10;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp4');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp4');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
    fadeAnime4();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
    fadeAnime4();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime5(){

    // fade in move
    $('.fadeUpTrigger5').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-10;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp5');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp5');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
    fadeAnime5();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
    fadeAnime5();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述




























// menu-bar animation ----------------------------------------------------------
// https://www.w3schools.com/howto/howto_js_sidenav.asp

/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// loading 画面 アニメーションーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// https://coco-factory.jp/ugokuweb/move01/4-1-4/    

$(window).on('load',function(){
    $("#splash").delay(1000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(2500).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
    });



// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 1000);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


// シャッフルテキストーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// https://ics.media/entry/15498/
// https://naruhodo.repop.jp/javascript-mouse-hover-event/


var text = new ShuffleText(document.querySelector('.name'));
$('.name').hover( () => {
    text.start();
    }, function() {
    text.end();
    });








    //画像をクリックしたら現れる画面の設定  -------------------------------------------------
    // 画像拡大に使用したライブラリ：< href="http://humaan.com/modaal/" target="_blank">http://humaan.com/modaal/
$(".gallery-list").modaal({
    fullscreen:'true', //フルスクリーンモードにする
    before_open:function(){// モーダルが開く前に行う動作
        $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
    },
    after_close:function(){// モーダルが閉じた後に行う動作
        $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
    }
});



















