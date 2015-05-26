$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".navegacion").position();
        if (scroll > topDist.top) {
            console.log("prueba");
            $('.navbar').addClass("navbar-fixed-top");
        } else {
            console.log("no");
            $('.navbar').removeClass("navbar-fixed-top");
        }
    });
});