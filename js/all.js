$(document).ready(function(){
    $('.shownav').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('nav_show');
    })
})