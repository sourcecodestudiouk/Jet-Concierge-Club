!function($,e,a){$((function(){"use strict";$(document).ready((function(){$(window).scroll((function(){$(window).scrollTop()>=100?($(".site-header").addClass("scroll-header"),$(".mobile-menu .menu").addClass("scroll-menu")):($(".site-header").removeClass("scroll-header"),$(".mobile-menu .menu").removeClass("scroll-menu"))})),$(".off-canvas-menu-trigger, .home .discover").click((function(e){$(".off-canvas-menu").slideDown()})),$(".off-canvas-menu .close-menu").click((function(e){$(".off-canvas-menu").slideUp()})),$(".contact-link").click((function(e){$(".off-canvas-contact").slideDown()})),$(".off-canvas-contact .close-button").click((function(e){$(".off-canvas-contact").slideUp()})),$(".off-canvas-menu .fleet-menu .plane-label:first-of-type").addClass("active");var e=$(".off-canvas-menu .fleet-menu .plane-label:first-of-type").data("plane-title"),a=$(".off-canvas-menu .fleet-menu .plane-label:first-of-type").data("plane-url"),n=$(".off-canvas-menu .fleet-menu .plane-label:first-of-type").data("plane-alt"),l=$(".off-canvas-menu .fleet-menu .plane-label:first-of-type").data("plane-link");$(".background .plane-container .title").text(e),$(".background .plane-container .plane-image").attr("src",a),$(".background .plane-container .plane-image").attr("alt",n),$(".background .plane-container .btn a").attr("href",l);$(".off-canvas-menu .fleet-menu .plane-label").click((function(e){if($(window).width()>=768){var a=$(this).data("plane-title"),n=$(this).data("plane-url"),l=$(this).data("plane-alt"),t=$(this).data("plane-link");$(".plane-label").removeClass("active"),$(this).addClass("active"),$(".background .plane-container").addClass("change-plane"),setTimeout((function(){$(".background .plane-container .plane-image").attr("src",""),$(".background .plane-container .plane-image").attr("alt",""),$(".background .plane-container .title").text(a),$(".background .plane-container .plane-image").attr("src",n),$(".background .plane-container .plane-image").attr("alt",l),$(".background .plane-container .btn a").attr("href",t),n||$(".background .plane-container .plane-image").attr("src","http://jet-concierge-club.local/wp-content/uploads/2024/06/plane-placeholder.png")}),1500),setTimeout((function(){$(".background .plane-container").removeClass("change-plane")}),2100)}else{t=$(this).data("plane-link");window.location.href=t}})),$(".specification-trigger").click((function(e){$(".off-canvas-specs").slideDown()})),$(".off-canvas-specs .close-button").click((function(e){$(".off-canvas-specs").slideUp()})),$(".gallery-container .view-full").click((function(e){$(".gallery-full-screen").slideDown(),setTimeout((function(){$(".gallery-full-screen .gallery").slick("reinit")}),200)})),$(".gallery-full-screen .close-full").click((function(e){$(".gallery-full-screen").slideUp()})),$(".social-share").click((function(e){return e.preventDefault(),window.open($(this).attr("href"),"fbShareWindow","height=450, width=550, top="+($(window).height()/2-275)+", left="+($(window).width()/2-225)+", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"),!1})),$(".slider-gallery").slick({infinite:!1,autoplay:!0,autoplaySpeed:5e3,slidesToShow:4,arrows:!0,dots:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".image-gallery-slider").slick({infinite:!1,autoplay:!0,autoplaySpeed:3500,speed:3500,slidesToShow:1,arrows:!1,dots:!1,fade:!0,pauseOnHover:!1}),$(".gallery-container .gallery").slick({infinite:!1,autoplay:!0,autoplaySpeed:7500,slidesToShow:1,arrows:!1,dots:!1,fade:!0,cssEase:"ease-in-out",asNavFor:".gallery-full-screen .gallery"}),$(".gallery-full-screen .gallery").slick({infinite:!0,autoplay:!0,autoplaySpeed:7500,slidesToShow:1,arrows:!0,prevArrow:$(".gallery-controls .prev"),nextArrow:$(".gallery-controls .next"),dots:!1,fade:!0,cssEase:"ease-in-out",asNavFor:".gallery-container .gallery"})}))}))}(jQuery);