$(document).ready(function(){
    //header
    $('.shownav').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('nav_show');
    })
    //gotop
    $(".gotop a").on('click',function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 50);
    });
    //feature
    $("#featureLink").on('click',function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $(".feature").offset().top
        }, 50);
    });
    //chef
    $("#chefLink").on('click',function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $(".todaychef_wrap").offset().top
        }, 50);
    });
    //map
    $("#mapLink").on('click',function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $(".booking_wrap").offset().top
        }, 50);
    });
})