
$(document).ready(function(){
    var foldblockH;

    $(window).on('scroll',function() {
        if ($(document).scrollTop() > 100) {
            foldblockH = $('.foldblock:eq(1)').outerHeight();
            $(window).off('scroll');
            console.log(foldblockH);
            $('.foldblock').removeClass('show');
            $('.foldblock').height('0px');
        }
    });

    $('.seemore').click(function(){
        var block = $(this).data('block');
        if($('.foldblock').hasClass('show')){
            $('.foldblock.show').removeClass('show');
            $('.foldblock').height('0px');
        }
        $('.foldblock.'+block).addClass('show');
        $('.foldblock.'+block).height(foldblockH);

        $('html, body').animate({
            scrollTop: $( '#foldblocks' ).offset().top
        }, 1000);
    })

    $('#mainmenu a').click(function(event){
        event.preventDefault();
        event.stopPropagation();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
    })

    SmoothParallax.init();

})

