$(document).ready(function(){
    $('#check').click(function(){
        if($(this).is(":checked")){
            
            $("body").css('overflow', 'hidden');
            
        }
        else if($(this).is(":not(:checked)")){
          $("body").css('overflow', 'auto');
          
        }
    });
});




 $(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() >= 1129) {
            // if larger or equal
            $("body").css('overflow', 'auto');
            
            $(".nav-flex-items").css('display', 'none');
            $(".dropbtn").css('display', '');
            $("#nav").css('overflow', '');
        } 

        else {
            // if smaller
            
            $(".nav-flex-items").css('display', 'block');
            $(".dropbtn").css('display', 'none');
            $("#nav").css('overflow', 'scroll');
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});

