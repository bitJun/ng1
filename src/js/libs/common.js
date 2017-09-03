$(function () {
    (function loadheight() {
        var fullheight =  window.innerHeight;
        var headerheight = $('header').height();
        var footerheight = $('footer').height();
        var mainheight = '',viewheight = '';
        mainheight = fullheight - headerheight - footerheight;
        viewheight = mainheight - 30;
        $('.main-container').css('height',''+mainheight+'px');
        $('.view_main').css('height',''+viewheight+'px');
        console.log('footerheight',footerheight);
    }())
    $('.icon-menu').click(function () {
        var isblock = $('.layout').hasClass('modal_left');
        $('.layout .submenu').hide();
        if(isblock){
            $(this).parent('li').css('background','#ffffff');
            $('.layout').removeClass('modal_left');
            setTimeout("$('.layout span').removeClass('hidden')",100)
            $('.main-container').removeClass('main_modal_left');
            $('.layout .submenu').css({"top":"52px","left":"0px"})
        }
        else{
            $(this).parent('li').css('background','#374656');
            $('.layout').addClass('modal_left');
            $('.layout span').addClass('hidden');
            $('.main-container').addClass('main_modal_left');
            $('.layout .submenu').css({"top":"0px","left":"65px"})
        }
    });
    $('.layout .menu').click(function () {
        var isvisable = $(this).find('.submenu').css('display');
        if(isvisable=='none') {
            $(this).find('.submenu').fadeIn(400);
        }
        else{
            $(this).find('.submenu').fadeOut(400);
        }
    });
})