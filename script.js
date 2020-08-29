  		$('.main-nav a').on('click', function (e) {
	  if (this.hash !== '') {
	    e.preventDefault();

	    const hash = this.hash;

	    $('html, body')
	      .animate({
	        scrollTop: $(hash).offset().top
	      },800);
	 	 }
		});


		window.addEventListener("scroll", function(){
      var header = document.querySelector("header")
      header.classList.toggle("sticky", window.scrollY > 0)
    });
 
		 var swiper = new Swiper('.swiper-container', {
  	  slidesPerView: '3',
  	  spaceBetween: 30,
  	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	     },

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },

      mousewheel: {
  	  invert: true,
  	  },

	    breakpoints: {

        0: {
      slidesPerView: 1,
      spaceBetween: 50
      },

        610: {
      slidesPerView: 2,
      spaceBetween: 40
       },

        850: {
      slidesPerView: 3,
      spaceBetween: 30
    	 }
      }
   });


  	const navSlide = function() {
  		const menuIcon = document.querySelector('.menu-icon');
  		const links = document.querySelector('.main-nav');
  		menuIcon.addEventListener('click', function() {
  			links.classList.toggle('navbar-active');
  		});
    };

  	navSlide();


    $(document).on("click", function(e){
      if( 
        $(e.target).closest(".main-nav").length == 0 &&
        $(".main-nav").hasClass("navbar-active") &&
        $(e.target).closest(".menu-icon").length == 0
      ){
        $('.main-nav').toggleClass('navbar-active');
      }
    });



    $("a").click(function(event){
      event.preventDefault();
    });


    