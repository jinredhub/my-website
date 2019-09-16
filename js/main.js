$(document).ready(function(){

    $('.visitPinterestButton').on('click', function(){
        window.location.href = "https://sprung-pinterest.herokuapp.com/";
    });
    $('.visitVroomButton').on('click', function(){
        window.location.href = "https://vrooms.github.io/entrance/";
    });
    $('.visitInstaAPIButton').on('click', function(){
        window.location.href = "https://the-generators.github.io/whereAreMyFriends/";
    });

    $('.linkedin').on('click', function(){
        window.location.href = "http://www.linkedin.com/in/jin-redmond";
    });
    $('.github').on('click', function(){
        window.location.href = "http://github.com/jinredhub";
    })

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

    $('#test').html(`
            <li>
                <span>Name</span><div class='toggleProviderEvents'>click here</div>
            </li>
            <li>
                <span>Name</span><div class='toggleProviderEvents'>click here</div>
            </li>
            <li>
                <span>Name</span><div class='toggleProviderEvents'>click here</div>
            </li>
        `);

    $('.toggleProviderEvents').on('click', function(){
        alert('worked!');
    })

});


