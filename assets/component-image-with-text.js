$(document).ready(function () {
    $('.image-text-slideshow-nav-list-item').on('click',function(){
        if(!$(this).hasClass('active')){
            var dataposition = $(this).attr('data-position');
            // dataposition = parseInt(dataposition);
            console.log('ddd')
            $('.image-text-slideshow-nav-list-item').each(function() {
                if($(this).attr('data-position') == dataposition) {
                    $(this).addClass('active');
                }
                else {
                    $(this).removeClass('active');
                }
            });
            $('.image-text-slideshow-list-item').each(function() {
                if($(this).attr('data-position') == dataposition) {
                    $(this).addClass('active');
                }
                else {
                    $(this).removeClass('active');
                }
            });
        }
    });
})