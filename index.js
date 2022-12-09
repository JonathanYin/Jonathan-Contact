// jQuery
$(document).ready(function () {
    // on click, toggle box elements
    (function() {
        $('.btn').click(function() {
            $(this).toggleClass('active');
            return $('.box').toggleClass('open');
        });
        
    }).call(this);
});
