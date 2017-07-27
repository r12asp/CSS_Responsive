$(document).ready(function(){

    $('#hamburger,#close').click(function(){
        $('#hamburger,#close').toggle();
        $('.custom-navigation #links').toggleClass('visible');
    });
});