(function($) {
    $.fn.reverse = function(options){
        this.each(function() {
            var $t = $(this);
            var origText = $t.text(), newText = '';
                for (var i = origText.length-1; i >= 0; i--) newText += origText.substr(i, 1);
                $t.text(newText);
        });
        return this;
    }
})(jQuery);
