$(document).ready(function(){

	$("a").on("click", function(event){
		if(this.hash !== ""){
			event.preventDefault();
			var hash = this.hash;

			$("html, body").animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});

	$("#e-mail").on("click", function(event){
		// console.log("email clicked");
		
	});

	// opens github page
	$(".linkedIn-btn").on("click", function(){
		window.open("http://www.linkedin.com/in/jin-redmond");
	});

	// opens linked in page
	$(".github-btn").on("click", function(){
		window.open("http://github.com/jinredhub");
	});

	// opens first portfolio page 
	$("#link-portfolio1").on("click", function(){
		window.open("https://vrooms.github.io/entrance/");
	});
	// opens second portfolio page
	$("#link-portfolio2").on("click", function(){
		window.open("https://nba-app-fun.herokuapp.com/stats.html");
	});
	// opens third portfolio page
	$("#link-portfolio3").on("click", function(){
		window.open("https://the-generators.github.io/whereAreMyFriends/");
	});
	// initialize wow.js scroll animation
	new WOW({
		mobile: false,
		offset: 50
	}).init();


})





