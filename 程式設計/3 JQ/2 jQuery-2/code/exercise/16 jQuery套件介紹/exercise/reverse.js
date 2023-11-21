// =======================
// 練習： 撰寫 reverseText.js套件
// =======================

(function($){
    $.fn.reverseText =(function(){
        this.each(function(){
            let Text = $(this);
            let orignText = Text.text();
            let newText = "";

            for(let i = orignText.length -1; i >=0 ; i--){
                newText += orignText.substr(i, 1);
                console.log(newText);

                Text.text(newText);

            }
        })
        return this;
    })

})(jQuery);

