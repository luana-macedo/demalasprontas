$('.imagem-inicial a') .click(function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
            targetOffset = $(id).offset().top,
            menuHeight = $('.imagem-inicial').innerHeight();
            
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500); 
});

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

window.onscroll = function() {
	scrollFunc();
  };
  

  function scrollFunc() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  document.getElementById("btnTopo").style.display = "block";
	} else {
	  document.getElementById("btnTopo").style.display = "none";
	}
  }
  
  
function backtoTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
  }
  jQuery(function () {
	jQuery(window).scroll(function () {
	  if (jQuery(this).scrollTop() > 400) {
	   $(".menu").addClass("menu-diferente");
	  } else {
	   $(".menu").removeClass("menu-diferente");
	  }
	});
  });


  (function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 5000);
		},
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();
