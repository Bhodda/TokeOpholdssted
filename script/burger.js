//burgermenu funktionalitet
$(document).ready(function(){
    $(function() {
        $('.nav-toggle').on('click', function(){
            $('.mobilnav').toggleClass('open');
        });
    });
    $(function() {
        $('.toggleclose').on('click', function(){
            $('.mobilnav').toggleClass('open');
        });
    }); 
    <!--burgersubmenu1-->
        $(function() {
            $('.submenu1-toggle').on('click', function(){
                $('.submenu1').toggleClass('opensub');
            });
        });
    $(function() {
        $('.toggleclosesub').on('click', function(){
            $('.submenu1').toggleClass('opensub');
        });
    });
});

