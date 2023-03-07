$(function() {
    $(document).scroll(function (){
        var $nav = $(".navbar");
        if($(this).scrollTop() > $nav.height()) {
           $nav.addClass("scrolled");
           $nav.removeClass("navbar-dark")
           $nav.addClass("navbar-light");
        } else {
            $nav.removeClass("scrolled");
            $nav.addClass("navbar-dark");
            $nav.removeClass("navbar-light");
        }
    });
});

var myAlert = document.getElementById('myAlert');
myAlert.style.display = 'none'

function myFunction(){
    myAlert.style.display = 'block'
}