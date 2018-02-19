$(function() {
    $('.main-menu').on('click', '> li', function(e){
       $('.main-menu > li > a').removeClass('active');
       $(this).find('a').addClass('active');
    });
});
