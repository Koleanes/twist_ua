$(function() {

    $(".menu_open").click(function(){
        $(this).toggleClass("is-Active");

        if($(this).hasClass('is-Active')){
            $('.sidebar').slideDown(300);
        }else{
            $('.sidebar').slideUp(300);
        }
    });
});
