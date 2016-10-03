		$( document ).ready(function(){
			$(".button-collapse").sideNav();


			$('.dropdown-button').dropdown({
		      inDuration: 300,
		      outDuration: 225,
		      constrain_width: false, // Does not change width of dropdown to that of the activator
		      hover: false, // Activate on hover
		      gutter: 0, // Spacing from edge
		      belowOrigin: false, // Displays dropdown below the button
		      alignment: 'left' // Displays dropdown with edge aligned to the left of button
		    }
  			);


			$(window).scroll(function (event) {
    			var scroll = $(window).scrollTop();
    			if(scroll > 30){
    				$('#navbar-fixer').addClass('navbar-fixed');
    				$('nav').css({"background": "transparent",
    								"box-shadow": "none"
    							})
    				$('.nav-wrapper').css({"top": -30})
    				$('.nav-wrapper').addClass('orangeshadows')
    			}
    			if(scroll < 30){
    				$('#navbar-fixer').removeClass('navbar-fixed');
    				$('.nav-wrapper').css({"top": 0})
    				$('.nav-wrapper').removeClass('orangeshadows')
    			}
			});

		})