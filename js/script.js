$(document).ready(function(){
    $(window).scroll(function(){
        var prueba = $(this).scrollTop();
        $("#carmen").text(prueba);
        if (prueba > 658) {
            $(".navbar").addClass("navegacion");
        }
            else if (prueba < 658) {
            $(".navbar").removeClass("navegacion");
        }
    });
});


