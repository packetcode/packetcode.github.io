$(document).ready(function(){

    $(".theme_icon").on('click', function(){
        $(".theme_icon").toggleClass("flip");
        $(".theme_icon").toggleClass("fa-sun");
        $(".theme_icon").toggleClass("fa-moon");

        let current_theme = $("html").attr("data-theme");

        if(current_theme == "dark"){
          $("html").attr("data-theme", "light");
        }
        else if(current_theme == "light"){
          $("html").attr("data-theme", "dark");
        }
    });

});