$(document).ready(function(){


    // smooth scrolling
    $('a[href^="#"]').on("click", function(event){
        if(this.hash !== ""){
            // event.preventDefault();
            var hash = this.hash;

            $("html, body").stop().animate({
                scrollTop: $(hash).offset().top-57
            }, 500, function(){
                window.location.hash = hash;
            });
        }
    });

    // initialize wow.js scroll animation
	new WOW({
		mobile: false,
		offset: 50
	}).init();

});


