            
   /*hOME Page for Toggler Menu!*/
            var NavLinks = document.getElementById("NavLinks");

            function showMenu(){
                NavLinks.style.right = "0";
            }
            function hideMenu(){
                NavLinks.style.right = "-250px";
            } 

            /*Cookies Part*/
            $(document).ready(function(){   

            setTimeout(function () {
        
            $(".CookieConsent").fadeIn(200);
            }, 4000);

            $(".CloseCookieConsent, .CookieConsentConfirm").click(function(){
        $(".CookieConsent").fadeOut(2);
        }); 
    }); 

    /*Programmes Part*/
        VanillaTilt.init(document.querySelectorAll("#programmes-border1, #programmes-border2, #programmes-border3, #programmes-border4"), {
		max: 25,
		speed: 400,
        glare:true,
        "max-glare":1,
	});

    /*Carousel Part*/
        $('.carousel').carousel({
        interval: 2500,
    })

    /*Views Part*/
        $('.carousel').flipster({
        style:'carousel',
        spacing: -0.35,
    });
    /*HomePAGE Part END!*/

    /*Login Part START!*/
    const pass_field = document.querySelector('.password-key');
    const showBtn = document.querySelector('.show');
    showBtn.addEventListener('click', function(){
    if(pass_field.type === "password"){
        pass_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "black";
    }
    
    else{
        pass_field.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "black";
    }
});

     /*About Page -Explore Now Part*/
     $(document).ready(function() {
        $("#about-hero-btn").click(function() {
            var elem = $("#about-hero-btn").text();
            if (elem == "EXPLORE NOW") {
                $("#about-hero-btn").text("READ LESS");
                $("#moreText").slideDown(1500);
            }
            else{
                $("#about-hero-btn").text("EXPLORE NOW");
                $("#moreText").slideUp(1500);
            }
        })
    });
