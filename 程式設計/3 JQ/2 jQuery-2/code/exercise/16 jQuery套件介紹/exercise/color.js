// ============================
// 建立自己的 jQuery Plugin
// 1 確保$是給jQuery使用
//   (function($){
//    })(jQuery)
// ============================
// ============================
// 練習1：建立一個能重複被使用的套件 redText()
//        功能： 把文字變成紅色
// ============================

(function ($) {

    $.fn.redText = function () {
        $(this).css("color", "red");
        return $(this);
    }

// 1-1

    $.fn.coclor = function (jon) {
        $(this).css("color", `${jon}`);
        return $(this);
    }

    // ===========================
    // 練習2： 寫一個 bgGrey()外掛
    //         功能：背景顏色變成灰色
    // ===========================

    $.fn.bgGrey() = function () {
        $(this).css("background-color", "grey");
        return $(this);
    }

})(jQuery)
