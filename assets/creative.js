/*!
 * Start Bootstrap - Creative v5.1.4 (https://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2024 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */


(function(a){a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=a(this.hash);if(e=e.length?e:a("[name="+this.hash.slice(1)+"]"),e.length)return a("html, body").animate({scrollTop:e.offset().top-72},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")}),a("body").scrollspy({target:"#mainNav",offset:75});var l=function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-scrolled"):a("#mainNav").removeClass("navbar-scrolled")};l(),a(window).scroll(l),a("#voice").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})})(jQuery);
