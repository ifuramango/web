
function scroll() {
    var top = $(".header-banner").offset().top;//获取导航栏变色的位置距顶部的高度
    var scrollTop = $(window).scrollTop();//获取当前窗口距顶部的高度
    //var nav = document.getElementsByClassName('header-banner-menu')[10]
    if (scrollTop <= top) {
        opacity=0.2;
        //$('.header-banner-menu').css('background-color', 'transparent');
        //$('.header-banner-menu').css('color', '#f2f2f2');
    } else {
        opacity=1;
        //$('.header-banner-menu').css('background-color', '#FFFFFF');
        //$('.header-banner-menu').css('color', 'black');

    }
    nav.style.backgroundColor = 'rgba(0,0,0,' + opacity+')';
}
//
//$(window).on('scroll', function() {
//    scroll()
//});
