
export const activeJqueryScript = () => {
    

// Assim que todo o documento estiver pronto.
    
    $(document).ready(function(){
        console.log('document is ready!')

        // $('.js--section-features').v-waypoints(function(direction){
        //     if(direction == "down"){
        //         $('nav').addClass('sticky')
        //         console.log('entrou')
        //     }else {
        //         $('nav').removeClass('sticky')
        //     }
        // })
        
        // Scroll on buttons-----------------------------------------

        $('.js--scroll-to-plans').click(function(){
            //console.log('clicou')

            // Coloquei .g-html(uma classe que criei) mas não funcionou.
            $('html, body').animate({
                scrollTop: $('.js--section-plans').offset().top
            }, 1000)
        })

        $('.js--scroll-to-start').click(function(){
            //console.log('clicou')

            // Coloquei .g-html(uma classe que criei) mas não funcionou.
            $('html, body').animate({
                scrollTop: $('.js--section-features').offset().top
            }, 1000)
        })


        // Trabalhando com navegação em scroll. --------------------------------------

        // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
        });
        //====================================================================================


        // Mobile nav
        $('.js--nav-icon').click(function(){
            var nav = $('.js--main-nav')
            var icon = $('.js--nav-icon i')
            // Lista as opções de menu e também retira da tela.
            nav.slideToggle(200)
            if(icon.hasClass('ion-navicon-round')){
                icon.addClass('ion-close-round')
                icon.removeClass('ion-navicon-round')
            }else {
                icon.removeClass('ion-close-round')
                icon.addClass('ion-navicon-round')
            }
        })

        


    });

}