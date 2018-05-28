$(document).ready(function(){
    $('#getStarted').click(function(){
        $('.get-started').removeClass('hidden');
        $('.get-started').addClass('fadeInRight');
        $('#next').addClass('button-show');
        $('#getStarted').addClass('button-remove');
    });
});