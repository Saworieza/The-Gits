jQuery(document).ready(function(){
	  
	  var wddSlides = jQuery("#wdd-slides");

	  if( !wddSlides.attr('id') )
	  	  return;

	  var wddSlidesGenerictTitle;
	  if(wddSlides.attr('data-generic-title'))
	  	wddSlidesGenerictTitle = wddSlides.attr('data-generic-title');

	  var wddSlidesGenerictDescription;
	  if(wddSlides.attr('data-generic-description'))
	  	wddSlidesGenerictDescription = wddSlides.attr('data-generic-description');
	  

	  var wddSliderThumbnailsWrap = jQuery('<div>');
	  wddSliderThumbnailsWrap.attr('id', 'wdd-slider-thumbnails-wrap');

	  var wddSliderThumbnails = jQuery('<div>');
	  wddSliderThumbnails.addClass('hoverscroll');
	  
	  wddSliderThumbnailsWrap.append(wddSliderThumbnails);

	  var wddSliderThumbnailsContent = jQuery('<div>');
	  wddSliderThumbnailsContent.addClass('hoverscroll-content');
	  wddSliderThumbnails.append(wddSliderThumbnailsContent);

	  wddSliderThumbnailsWrap.insertAfter(wddSlides);
	  

 	  var wddSliderImagesCount;
 	  var maxWidth = 0;
 	  var maxHeight = 0;
 	  jQuery("#wdd-slides img").each(function(i,e){
 	  	var img = jQuery(e);
 	  	var imgWidth = parseInt( img.attr('width') );
 	  	if( imgWidth > maxWidth )
 	  		maxWidth = imgWidth;

 	  	var imgHeight = parseInt( img.attr('height') );
 	  	if( imgHeight > maxHeight )
 	  		maxHeight = imgHeight;

 	  	var sliderThumbnailItem = jQuery('<span>');
		sliderThumbnailItem.addClass('wdd-slider-item');

 	  	var sliderThumbnail = jQuery('<img>');
		sliderThumbnail.addClass('wdd-slider-thumbnail');

		var sliderThumbnailOverlay = jQuery('<span>');
		sliderThumbnailOverlay.addClass('wdd-slider-ioverlay');
		//sliderThumbnail.attr('width', 100);
		//sliderThumbnail.attr('height', 100);
		sliderThumbnail.attr('src', img.attr('src') );

		sliderThumbnailItem.append( sliderThumbnail );
		sliderThumbnailItem.append( sliderThumbnailOverlay );
 	  	wddSliderThumbnailsContent.append(sliderThumbnailItem);

 	  	//console.log(img.attr('height'));
 	  });

 	  if(maxHeight > 500)
 	  	maxHeight = 500;

	  var sliderItemStep = jQuery('.wdd-slider-item').width() + 1;
 	  
 	  jQuery('.wdd-slider-item').click(function(){
 	  	var currentThumbnail = jQuery(this);
        var currentIndex = jQuery('.wdd-slider-item').index(currentThumbnail);

        if(wddSliderObject)
          wddSliderObject.goto(currentIndex + 1);
        
 	  });

 	  var hoverScrollNext = jQuery('<a>');
 	  hoverScrollNext.addClass('hoverscroll-next-btn');
 	  hoverScrollNext.addClass('hoverscroll-nav-btn');

 	  var hoverScrollLast = jQuery('<a>');
 	  hoverScrollLast.addClass('hoverscroll-last-btn');
 	  hoverScrollLast.addClass('hoverscroll-nav-btn');

 	  var hoverScrollFirst = jQuery('<a>');
 	  hoverScrollFirst.addClass('hoverscroll-first-btn');
 	  hoverScrollFirst.addClass('hoverscroll-nav-btn');
 	  hoverScrollFirst.addClass('disabled');

 	  var hoverScrollPrev = jQuery('<a>');
 	  hoverScrollPrev.addClass('hoverscroll-prev-btn');
 	  hoverScrollPrev.addClass('hoverscroll-nav-btn');
 	  hoverScrollPrev.addClass('disabled');
 	  
 	  wddSliderThumbnailsWrap.append( hoverScrollNext );
 	  wddSliderThumbnailsWrap.append( hoverScrollPrev );

 	  wddSliderThumbnailsWrap.append( hoverScrollLast );
 	  wddSliderThumbnailsWrap.append( hoverScrollFirst );

      var scrollContent = jQuery('.hoverscroll-content');
      var scrollContentLeft = scrollContent.position().left;
      var scrollWidth = jQuery('.hoverscroll').width();
	  var scrollerPagesCount = Math.ceil( scrollContent.width() / scrollWidth );
	  var leftEdge =  - ( scrollContent.width() - scrollWidth);  //- (scrollerPagesCount - 1) * scrollWidth;
 	  
 	  
 	  hoverScrollNext.click(function(){
 	  	 var newLeft = scrollContentLeft - sliderItemStep; //scrollWidth;
 	  	 if( newLeft <  leftEdge)
 	  	 	newLeft = leftEdge;

 	  	 scrollContentLeft = newLeft;
 	  	 scrollContent.stop();
 	  	 scrollContent.animate({ left: scrollContentLeft}, 250);
 	  	 updateSliderButtonsState(newLeft);
 	  });

 	  hoverScrollPrev.click(function(){
 	  	 var newLeft = scrollContentLeft + sliderItemStep;//scrollWidth;
 	  	 if(newLeft > 0)
 	  	 	newLeft = 0;

 	  	 scrollContentLeft = newLeft;
 	  	 scrollContent.stop();
 	  	 scrollContent.animate({ left: newLeft}, 250);
 	  	 updateSliderButtonsState(newLeft);
 	  });

 	  hoverScrollFirst.click(function(){
 	  	sliderScrollPrevBunch();
 	  });

 	  function sliderScrollPrevBunch(){
 	  	 var newLeft = scrollContentLeft + scrollWidth;
 	  	 if(newLeft > 0)
 	  	   newLeft = 0;

 	  	 scrollContentLeft = newLeft;
 	  	 scrollContent.stop();
 	  	 scrollContent.animate({ left: newLeft }, 500);
 	  	 updateSliderButtonsState(newLeft);
 	  }

 	  hoverScrollLast.click(function(){
 	  	 sliderScrollNextBunch();
 	  });

 	  function sliderScrollNextBunch(){
 	  	var newLeft = scrollContentLeft - scrollWidth;
 	  	 if( newLeft <  leftEdge)
 	  	 	newLeft = leftEdge;

 	  	 scrollContentLeft = newLeft;
 	  	 scrollContent.stop();
 	  	 scrollContent.animate({ left: newLeft }, 500);
 	  	 updateSliderButtonsState(newLeft);
 	  }

		
 	  var wddSliderImageInfo = jQuery('<div>');
	  wddSliderImageInfo.attr('id', 'wdd-slider-image-info');

	  wddSliderTitleLabel = jQuery('<div>');
	  wddSliderTitleLabel.attr('id', 'wdd-slider-image-title');
	  wddSliderImageInfo.append(wddSliderTitleLabel);

	  wddSliderDescriptionLabel = jQuery('<div>');
	  wddSliderDescriptionLabel.attr('id', 'wdd-slider-image-description');
	  wddSliderImageInfo.append(wddSliderDescriptionLabel);

	  wddSliderImagePosition = jQuery('<div>');
	  wddSliderImagePosition.attr('id', 'wdd-slider-image-position');
	  wddSliderImageInfo.append(wddSliderImagePosition);

	  wddSliderImageInfo.insertAfter(wddSlides);
	  

	  currentWddSliderIndex = 0 ;
	  currentWddSliderKeyboardIndex = 0;

	  

      jQuery("#wdd-slides").slidesjs({
      	height: maxHeight,
      	width: jQuery("#wdd-slides").width(),
        pagination: { active: false},
        callback: {
          loaded: function(number) {
            // Do something awesome!
            // Passes start slide number
            //updateWddSliderImagesPositions();
            wddSliderImagesCount = jQuery(".slidesjs-control").children().length;

            jQuery('.slidesjs-slide:last-child').hide();

            updateImagesWddSliderPositions();

            updateWddSliderTitleLabel();

            jQuery('.slidesjs-previous').hide();
            
          },
          initiated: function(obj){
 			 wddSliderObject = obj;

          },
          updated: function(param) {
            // Do something awesome!
            // Passes start slide number
            updateImagesWddSliderPositions();
            
          },
          start: function(number){
          	// adjusting vertical position
          	/*
          	var mainHeight = jQuery(".slidesjs-control").height();
            var nextImg = jQuery(".slidesjs-control").children(":eq(" + (number) + ")");
            var numberPrev = number - 2;
            if(numberPrev < 0)
            	numberPrev = wddSliderImagesCount - 1;
            var prevImg = jQuery(".slidesjs-control").children(":eq(" + numberPrev + ")");
            nextImg.css('top', (mainHeight - nextImg.height() ) * 0.5 );
            prevImg.css('top', (mainHeight - prevImg.height() ) * 0.5 );
			*/
         
            //console.log(wddSliderObject.data.current);

            //updateWddSliderTitleLabel();
            reloadWddAdsIframes();

          },
          slide: function(number){
          	currentWddSliderIndex = number;
          	currentWddSliderKeyboardIndex = number;
          	//currentWddSliderKeyboardIndex = number + 1;

          	if(number == 0)
          		jQuery('.slidesjs-previous').hide();
          	else
          		jQuery('.slidesjs-previous').show();

          	if(number >= wddSliderImagesCount - 1)
          		jQuery('.slidesjs-next').hide();
          	else
          		jQuery('.slidesjs-next').show();

          	var mainHeight = jQuery(".slidesjs-control").height();
            var nextImg = jQuery(".slidesjs-control").children(":eq(" + (number) + ")");
            //var numberPrev = number - 2;
            //if(numberPrev < 0)
           // 	numberPrev = wddSliderImagesCount - 1;
            //var prevImg = jQuery(".slidesjs-control").children(":eq(" + numberPrev + ")");
            nextImg.css('top', (mainHeight - nextImg.height() ) * 0.5 );
            //prevImg.css('top', (mainHeight - prevImg.height() ) * 0.5 );
			updateWddSliderTitleLabel();
          	
          },
          complete: function(number) {
          	/*currentWddSliderIndex = number - 1;
          	
            if(currentWddSliderIndex < 0)
            	currentWddSliderIndex = currentWddSliderIndex - 1; 

            console.log(currentWddSliderIndex);
            */

            
          }

        }
      });

	  jQuery('#wdd-slides-wrap').mouseenter(function(){
	  	  jQuery(window).bind('keydown', wddGalleryKeydown);
	  });

	  jQuery('#wdd-slides-wrap').mouseleave(function(){
	  	 jQuery(window).unbind('keydown', wddGalleryKeydown); 
	  });

	  var gotoSliderTimeoutId;
	  function wddGalleryKeydown(e){
	  	if(!wddSliderObject)
	  		 return;

	  	if(e.keyCode == 39){
	  		currentWddSliderKeyboardIndex++;
	  		if(currentWddSliderKeyboardIndex >= wddSliderImagesCount)
	  			currentWddSliderKeyboardIndex = wddSliderImagesCount - 1;

	  		highlightWddSliderThumbnailByIndex(currentWddSliderKeyboardIndex);
	  		if(gotoSliderTimeoutId)
	  		  clearTimeout(gotoSliderTimeoutId);
	  		gotoSliderTimeoutId = setTimeout( gotoSliderTimeout ,200);
	  		updateSliderPageShifting();
	  	    
	  	}
	  	  //wddSliderObject.next();
	  	else if(e.keyCode == 37){
			currentWddSliderKeyboardIndex--;
			if(currentWddSliderKeyboardIndex < 0)
				currentWddSliderKeyboardIndex = 0;

	  	    highlightWddSliderThumbnailByIndex(currentWddSliderKeyboardIndex);
	  	    if(gotoSliderTimeoutId)
	  		  clearTimeout(gotoSliderTimeoutId);
	  		gotoSliderTimeoutId = setTimeout( gotoSliderTimeout , 200);
	  		updateSliderPageShifting();
	  	}
	  	  //wddSliderObject.previous();
	  }

	  function gotoSliderTimeout(){
	  	wddSliderObject.goto(currentWddSliderKeyboardIndex + 1);

	  }

	  function highlightWddSliderThumbnailByIndex(index){
		jQuery(".wdd-slider-item").removeClass('selected');
  	    var activeThumb = jQuery(".wdd-slider-item:eq(" + index + ")");
  	    activeThumb.addClass('selected');
	  }

	  function updateWddSliderTitleLabel(){
	  	
  	    var activeImg = jQuery(".slidesjs-control").children( ":eq(" + currentWddSliderIndex + ")").find('img');
  	    highlightWddSliderThumbnailByIndex(currentWddSliderIndex);
  	    
  	    if(wddSlidesGenerictTitle)
  	      wddSliderTitleLabel.html( wddSlidesGenerictTitle );
  	    else
          wddSliderTitleLabel.html( activeImg.attr('title') );


        if( wddSlidesGenerictDescription )
          wddSliderDescriptionLabel.html( wddSlidesGenerictDescription );
        else if(  activeImg.attr('description') )
          wddSliderDescriptionLabel.html( activeImg.attr('description') );
        else
         wddSliderDescriptionLabel.html('');

  		wddSliderImagePosition.html( (currentWddSliderIndex + 1) + ' of ' + wddSliderImagesCount );

  		updateSliderPageShifting();
	  }

	  function updateSliderPageShifting(){
	  	var activeThumb = jQuery(".wdd-slider-item.selected");
	  	var thumbLeft =  activeThumb.position().left;
	  	var hvWidth = jQuery('.hoverscroll').width();
	  	//var hvContentLeft = jQuery('.hoverscroll-content').position().left;
	  	var hvContentLeft = scrollContentLeft;
	  	
	  	var visibilityDelta = 40;
	  	if(thumbLeft + hvContentLeft + visibilityDelta > hvWidth ){
	  		sliderScrollNextBunch();
	  	}
	  	else if( thumbLeft + hvContentLeft < 0 ){
	  		sliderScrollPrevBunch();
	  	}

	  		
	  }

	  function updateSliderButtonsState(newLeft){
	  	
	  	//console.log(newLeft +  ' ' + leftEdge);
	  	var leftThrashold = -2;
	  	if(newLeft >= leftThrashold){
	  		jQuery('.hoverscroll-prev-btn').addClass('disabled');
	  		jQuery('.hoverscroll-first-btn').addClass('disabled');
	  	}
	  	else{
			jQuery('.hoverscroll-prev-btn').removeClass('disabled');
	  		jQuery('.hoverscroll-first-btn').removeClass('disabled');

	  	}

	  	if(newLeft <= leftEdge - leftThrashold){
	  		jQuery('.hoverscroll-next-btn').addClass('disabled');
	  		jQuery('.hoverscroll-last-btn').addClass('disabled');
	  	}
	  	else{
			jQuery('.hoverscroll-next-btn').removeClass('disabled');
	  		jQuery('.hoverscroll-last-btn').removeClass('disabled');

	  	}


	  	

	  }

	  function reloadWddAdsIframes(){
		jQuery('#top-post-ads-iframe').attr( 'src', jQuery('#top-post-ads-iframe').attr('src') );
		jQuery('#bottom-post-ads-iframe').attr( 'src', jQuery('#bottom-post-ads-iframe').attr('src') );
		jQuery('#sidebar-top-ads-iframe').attr( 'src', jQuery('#sidebar-top-ads-iframe').attr('src') );
		jQuery('#sidebar-bottom-ads-iframe').attr( 'src', jQuery('#sidebar-bottom-ads-iframe').attr('src') );

		if( jQuery('#sb-bsap-rects-ads-iframe').attr('id'))
			jQuery('#sb-bsap-rects-ads-iframe').attr( 'src', jQuery('#sb-bsap-rects-ads-iframe').attr('src') );
		else{
			var adsWrapper = jQuery('#sb-bsap-rects-ads');
			var newIframe = jQuery('<iframe>');
			newIframe.attr('id', 'sb-bsap-rects-ads-iframe');
			newIframe.attr('width',  adsWrapper.width() );
			newIframe.attr('height', adsWrapper.height() );
			newIframe.attr('src', 'http://www.webdesignerdepot.com/ads/sidebar_rects_ads.html');
			newIframe.insertBefore(adsWrapper);
			adsWrapper.hide();

		}

	  }
	

});



function updateImagesWddSliderPositions(){
	var mainHeight = jQuery(".slidesjs-control").height();
	jQuery('.slidesjs-slide').each(function(i,e){
                var img = jQuery(e);
                
                var imgHeight  = img.height();
                if(imgHeight > 0)
                img.css('top', (mainHeight - imgHeight ) * 0.5 );
            });
}






/*
  SlidesJS 3.0.1

  Documentation and examples http://slidesjs.com
  Support forum http://groups.google.com/group/slidesjs
  Created by Nathan Searles http://nathansearles.com

  Version: 3.0
  Updated: March 11th, 2013

  SlidesJS is an open source project, contribute at GitHub:
  https://github.com/nathansearles/Slides

  (c) 2013 by Nathan Searles

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
(function() {

  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = "slidesjs";
    defaults = {
      width: 940,
      height: 528,
      start: 1,
      navigation: {
        active: true,
        effect: "slide"
      },
      pagination: {
        active: true,
        effect: "slide"
      },
      play: {
        active: false,
        effect: "slide",
        interval: 5000,
        auto: false,
        swap: true
      },
      effect: {
        slide: {
          speed: 500
        },
        fade: {
          speed: 300,
          crossfade: true
        }
      },
      callback: {
        loaded: function() {},
        initiated: function() {},
        start: function() {},
        complete: function() {},
        slide: function() {},
        updated: function() {}
      }
    };
    Plugin = (function() {

      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend(true, {}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
      }

      return Plugin;

    })();
    Plugin.prototype.init = function() {
      var $element, nextButton, pagination, playButton, prevButton, stopButton,
        _this = this;
      $element = $(this.element);
      this.data = $.data(this);
      $.data(this, "animating", false);
      $.data(this, "total", $element.children().not(".slidesjs-navigation", $element).length);
      $.data(this, "current", this.options.start - 1);
      $.data(this, "vendorPrefix", this._getVendorPrefix());
      if (typeof TouchEvent !== "undefined") {
        $.data(this, "touch", true);
        this.options.effect.slide.speed = this.options.effect.slide.speed / 2;
      }
      $element.css({
        overflow: "hidden"
      });
      $element.slidesContainer = $element.children().not(".slidesjs-navigation", $element).wrapAll("<div class='slidesjs-container'>", $element).parent().css({
        overflow: "hidden",
        position: "relative"
      });
      $(".slidesjs-container", $element).wrapInner("<div class='slidesjs-control'>", $element).children();
      $(".slidesjs-control", $element).css({
        position: "relative",
        left: 0
      });
      $(".slidesjs-control", $element).children().addClass("slidesjs-slide").css({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 0,
        display: "none",
        webkitBackfaceVisibility: "hidden"
      });
      $.each($(".slidesjs-control", $element).children(), function(i) {
        var $slide;
        $slide = $(this);
        return $slide.attr("slidesjs-index", i);
      });
      if (this.data.touch) {
        $(".slidesjs-control", $element).bind("touchstart", function(e) {
          return _this._touchstart(e);
        });
        $(".slidesjs-control", $element).bind("touchmove", function(e) {
          return _this._touchmove(e);
        });
        $(".slidesjs-control", $element).bind("touchend", function(e) {
          return _this._touchend(e);
        });
      }
      $element.fadeIn(0);
      this.update();
      if (this.data.touch) {
        this._setuptouch();
      }
      $(".slidesjs-control", $element).children(":eq(" + this.data.current + ")").eq(0).fadeIn(0, function() {
        return $(this).css({
          zIndex: 10
        });
      });
      if (this.options.navigation.active) {
        prevButton = $("<span>", {
          "class": "slidesjs-previous slidesjs-navigation",
          href: "#",
          title: "Previous",
          html: "<span>Previous</span>"
        }).appendTo($element);
        nextButton = $("<span>", {
          "class": "slidesjs-next slidesjs-navigation",
          href: "#",
          title: "Next",
          html: "<span>Next</span>"
        }).appendTo($element);
      }
      $(".slidesjs-next", $element).click(function(e) {
        e.preventDefault();
        _this.stop();
        return _this.next(_this.options.navigation.effect);
      });
      $(".slidesjs-previous", $element).click(function(e) {
        e.preventDefault();
        _this.stop();
        return _this.previous(_this.options.navigation.effect);
      });
      if (this.options.play.active) {
        playButton = $("<a>", {
          "class": "slidesjs-play slidesjs-navigation",
          href: "#",
          title: "Play",
          text: "Play"
        }).appendTo($element);
        stopButton = $("<a>", {
          "class": "slidesjs-stop slidesjs-navigation",
          href: "#",
          title: "Stop",
          text: "Stop"
        }).appendTo($element);
        playButton.click(function(e) {
          e.preventDefault();
          return _this.play(true);
        });
        stopButton.click(function(e) {
          e.preventDefault();
          return _this.stop();
        });
        if (this.options.play.swap) {
          stopButton.css({
            display: "none"
          });
        }
      }
      if (this.options.pagination.active) {
        pagination = $("<ul>", {
          "class": "slidesjs-pagination"
        }).appendTo($element);
        $.each(new Array(this.data.total), function(i) {
          var paginationItem, paginationLink;
          paginationItem = $("<li>", {
            "class": "slidesjs-pagination-item"
          }).appendTo(pagination);
          paginationLink = $("<a>", {
            href: "#",
            "data-slidesjs-item": i,
            html: i + 1
          }).appendTo(paginationItem);
          return paginationLink.click(function(e) {
            e.preventDefault();
            _this.stop();
            return _this.goto(($(e.currentTarget).attr("data-slidesjs-item") * 1) + 1);
          });
        });
      }
      $(window).bind("resize", function() {
        return _this.update();
      });
      this._setActive();
      if (this.options.play.auto) {
        this.play();
      }

      this.options.callback.initiated(_this);
      return this.options.callback.loaded(this.options.start);
    };
    Plugin.prototype._setActive = function(number) {
      var $element, current;
      $element = $(this.element);
      this.data = $.data(this);
      current = number > -1 ? number : this.data.current;
      $(".active", $element).removeClass("active");
      return $("li:eq(" + current + ") a", $element).addClass("active");
    };
    Plugin.prototype.update = function() {
      var $element, height, width;
      $element = $(this.element);
      this.data = $.data(this);
      $(".slidesjs-control", $element).children(":not(:eq(" + this.data.current + "))").css({
        display: "none",
        left: 0,
        zIndex: 0
      });
      width = $element.width();
      height = (this.options.height / this.options.width) * width;
      this.options.width = width;
      this.options.height = height;

      this.options.callback.updated({height: height});
      return $(".slidesjs-control, .slidesjs-container", $element).css({
        width: width,
        height: height
      });

    };
    Plugin.prototype.next = function(effect) {
      var $element;
      $element = $(this.element);
      this.data = $.data(this);
      $.data(this, "direction", "next");
      if (effect === void 0) {
        effect = this.options.navigation.effect;
      }
      if (effect === "fade") {
        return this._fade();
      } else {
        return this._slide();
      }
    };
    Plugin.prototype.previous = function(effect) {
      var $element;
      $element = $(this.element);
      this.data = $.data(this);
      $.data(this, "direction", "previous");
      if (effect === void 0) {
        effect = this.options.navigation.effect;
      }
      if (effect === "fade") {
        return this._fade();
      } else {
        return this._slide();
      }
    };
    Plugin.prototype.goto = function(number) {
      var $element, effect;
      $element = $(this.element);
      this.data = $.data(this);
      if (effect === void 0) {
        effect = this.options.pagination.effect;
      }
      if (number > this.data.total) {
        number = this.data.total;
      } else if (number < 1) {
        number = 1;
      }
      if (typeof number === "number") {
        if (effect === "fade") {
          return this._fade(number);
        } else {
          return this._slide(number);
        }
      } else if (typeof number === "string") {
        if (number === "first") {
          if (effect === "fade") {
            return this._fade(0);
          } else {
            return this._slide(0);
          }
        } else if (number === "last") {
          if (effect === "fade") {
            return this._fade(this.data.total);
          } else {
            return this._slide(this.data.total);
          }
        }
      }
    };
    Plugin.prototype._setuptouch = function() {
      var $element, next, previous, slidesControl;
      $element = $(this.element);
      this.data = $.data(this);
      slidesControl = $(".slidesjs-control", $element);
      next = this.data.current + 1;
      previous = this.data.current - 1;
      if (previous < 0) {
        previous = this.data.total - 1;
      }
      if (next > this.data.total - 1) {
        next = 0;
      }
      slidesControl.children(":eq(" + next + ")").css({
        display: "block",
        left: this.options.width
      });
      return slidesControl.children(":eq(" + previous + ")").css({
        display: "block",
        left: -this.options.width
      });
    };
    Plugin.prototype._touchstart = function(e) {
      var $element, touches;
      $element = $(this.element);
      this.data = $.data(this);
      touches = e.originalEvent.touches[0];
      this._setuptouch();
      $.data(this, "touchtimer", Number(new Date()));
      $.data(this, "touchstartx", touches.pageX);
      $.data(this, "touchstarty", touches.pageY);
      return e.stopPropagation();
    };
    Plugin.prototype._touchend = function(e) {
      var $element, duration, prefix, slidesControl, timing, touches, transform,
        _this = this;
      $element = $(this.element);
      this.data = $.data(this);
      touches = e.originalEvent.touches[0];
      slidesControl = $(".slidesjs-control", $element);
      if (slidesControl.position().left > this.options.width * 0.5 || slidesControl.position().left > this.options.width * 0.1 && (Number(new Date()) - this.data.touchtimer < 250)) {
        $.data(this, "direction", "previous");
        this._slide();
      } else if (slidesControl.position().left < -(this.options.width * 0.5) || slidesControl.position().left < -(this.options.width * 0.1) && (Number(new Date()) - this.data.touchtimer < 250)) {
        $.data(this, "direction", "next");
        this._slide();
      } else {
        prefix = this.data.vendorPrefix;
        transform = prefix + "Transform";
        duration = prefix + "TransitionDuration";
        timing = prefix + "TransitionTimingFunction";
        slidesControl[0].style[transform] = "translateX(0px)";
        slidesControl[0].style[duration] = this.options.effect.slide.speed * 0.85 + "ms";
      }
      slidesControl.bind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
        prefix = _this.data.vendorPrefix;
        transform = prefix + "Transform";
        duration = prefix + "TransitionDuration";
        timing = prefix + "TransitionTimingFunction";
        slidesControl[0].style[transform] = "";
        slidesControl[0].style[duration] = "";
        return slidesControl[0].style[timing] = "";
      });
      return e.stopPropagation();
    };
    Plugin.prototype._touchmove = function(e) {
      var $element, prefix, slidesControl, touches, transform;
      $element = $(this.element);
      this.data = $.data(this);
      touches = e.originalEvent.touches[0];
      prefix = this.data.vendorPrefix;
      slidesControl = $(".slidesjs-control", $element);
      transform = prefix + "Transform";
      $.data(this, "scrolling", Math.abs(touches.pageX - this.data.touchstartx) < Math.abs(touches.pageY - this.data.touchstarty));
      if (!this.data.animating && !this.data.scrolling) {
        e.preventDefault();
        this._setuptouch();
        slidesControl[0].style[transform] = "translateX(" + (touches.pageX - this.data.touchstartx) + "px)";
      }
      return e.stopPropagation();
    };
    Plugin.prototype.play = function(next) {
      var $element, currentSlide,
        _this = this;
      $element = $(this.element);
      this.data = $.data(this);
      if (!this.data.playInterval) {
        if (next) {
          currentSlide = this.data.current;
          this.data.direction = "next";
          if (this.options.play.effect === "fade") {
            this._fade();
          } else {
            this._slide();
          }
        }
        $.data(this, "playInterval", setInterval((function() {
          currentSlide = _this.data.current;
          _this.data.direction = "next";
          if (_this.options.play.effect === "fade") {
            return _this._fade();
          } else {
            return _this._slide();
          }
        }), this.options.play.interval));
        $.data(this, "playing", true);
        $(".slidesjs-play", $element).addClass("slidesjs-playing");
        if (this.options.play.swap) {
          $(".slidesjs-play", $element).hide();
          return $(".slidesjs-stop", $element).show();
        }
      }
    };
    Plugin.prototype.stop = function() {
      var $element;
      $element = $(this.element);
      this.data = $.data(this);
      clearInterval(this.data.playInterval);
      $.data(this, "playInterval", null);
      $.data(this, "playing", false);
      $(".slidesjs-play", $element).removeClass("slidesjs-playing");
      if (this.options.play.swap) {
        $(".slidesjs-stop", $element).hide();
        return $(".slidesjs-play", $element).show();
      }
    };
    Plugin.prototype._slide = function(number) {
      var $element, currentSlide, direction, duration, next, prefix, slidesControl, timing, transform, value,
        _this = this;
      $element = $(this.element);
      this.data = $.data(this);
      if (!this.data.animating && number !== this.data.current + 1) {
        $.data(this, "animating", true);
        currentSlide = this.data.current;
        if (number > -1) {
          number = number - 1;
          value = number > currentSlide ? 1 : -1;
          direction = number > currentSlide ? -this.options.width : this.options.width;
          next = number;
        } else {
          value = this.data.direction === "next" ? 1 : -1;
          direction = this.data.direction === "next" ? -this.options.width : this.options.width;
          next = currentSlide + value;
        }
        if (next === -1) {
          //next = this.data.total - 1;
          next = 0;//this.data.total - 1;
          $.data(this, "animating", false);
          return;
        }
        if (next === this.data.total) {
          //next = 0;
          next = this.data.total - 1;
          $.data(this, "animating", false);
          return;
        }
        this._setActive(next);
        slidesControl = $(".slidesjs-control", $element);
        if (number > -1) {
          slidesControl.children(":not(:eq(" + currentSlide + "))").css({
            display: "none",
            left: 0,
            zIndex: 0
          });
        }
        slidesControl.children(":eq(" + next + ")").css({
          display: "block",
          left: value * this.options.width,
          zIndex: 10
        });
        this.options.callback.start(currentSlide + 1);
        this.options.callback.slide(next);
        var useTrasitions = false;
        if (this.data.vendorPrefix && useTrasitions) {
          prefix = this.data.vendorPrefix;
          transform = prefix + "Transform";
          duration = prefix + "TransitionDuration";
          timing = prefix + "TransitionTimingFunction";
          slidesControl[0].style[transform] = "translateX(" + direction + "px)";
          slidesControl[0].style[duration] = this.options.effect.slide.speed + "ms";
          return slidesControl.bind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
            slidesControl[0].style[transform] = "";
            slidesControl[0].style[duration] = "";
            slidesControl.children(":eq(" + next + ")").css({
              left: 0
            });
            slidesControl.children(":eq(" + currentSlide + ")").css({
              display: "none",
              left: 0,
              zIndex: 0
            });
            $.data(_this, "current", next);
            $.data(_this, "animating", false);
            slidesControl.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd");
            slidesControl.children(":not(:eq(" + next + "))").css({
              display: "none",
              left: 0,
              zIndex: 0
            });
            if (_this.data.touch) {
              _this._setuptouch();
            }
            return _this.options.callback.complete(next + 1);
          });
        } else {
          return slidesControl.stop().animate({
            left: direction
          }, this.options.effect.slide.speed, (function() {
            slidesControl.css({
              left: 0
            });
            slidesControl.children(":eq(" + next + ")").css({
              left: 0
            });
            return slidesControl.children(":eq(" + currentSlide + ")").css({
              display: "none",
              left: 0,
              zIndex: 0
            }, $.data(_this, "current", next), $.data(_this, "animating", false), _this.options.callback.complete(next + 1));
          }));
        }
      }
    };
    Plugin.prototype._fade = function(number) {
      var $element, currentSlide, next, slidesControl, value,
        _this = this;
      $element = $(this.element);
      this.data = $.data(this);
      if (!this.data.animating && number !== this.data.current + 1) {
        $.data(this, "animating", true);
        currentSlide = this.data.current;
        if (number) {
          number = number - 1;
          value = number > currentSlide ? 1 : -1;
          next = number;
        } else {
          value = this.data.direction === "next" ? 1 : -1;
          next = currentSlide + value;
        }
        if (next === -1) {
          next = this.data.total - 1;
        }
        if (next === this.data.total) {
          next = 0;
        }
        this._setActive(next);
        slidesControl = $(".slidesjs-control", $element);
        slidesControl.children(":eq(" + next + ")").css({
          display: "block",
          left: 0,
          zIndex: 0
        });
        this.options.callback.start(currentSlide + 1);
        if (this.options.effect.fade.crossfade) {
          return slidesControl.children(":eq(" + this.data.current + ")").stop().fadeOut(this.options.effect.fade.speed, (function() {
            slidesControl.children(":eq(" + next + ")").css({
              zIndex: 10
            });
            $.data(_this, "animating", false);
            $.data(_this, "current", next);
            return _this.options.callback.complete(next + 1);
          }));
        } else {
          slidesControl.children(":eq(" + next + ")").css({
            display: "none"
          });
          return slidesControl.children(":eq(" + currentSlide + ")").stop().fadeOut(this.options.effect.fade.speed, (function() {
            slidesControl.children(":eq(" + next + ")").stop().fadeIn(_this.options.effect.fade.speed).css({
              zIndex: 10
            });
            $.data(_this, "animating", false);
            $.data(_this, "current", next);
            return _this.options.callback.complete(next + 1);
          }));
        }
      }
    };
    Plugin.prototype._getVendorPrefix = function() {
      var body, i, style, transition, vendor;
      body = document.body || document.documentElement;
      style = body.style;
      transition = "transition";
      vendor = ["Moz", "Webkit", "Khtml", "O", "ms"];
      transition = transition.charAt(0).toUpperCase() + transition.substr(1);
      i = 0;
      while (i < vendor.length) {
        if (typeof style[vendor[i] + transition] === "string") {
          return vendor[i];
        }
        i++;
      }
      return false;
    };
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

}).call(this);





/*
# AccelHoverScroll v0.1
# Accelerated Hoverscroll: mouse over the left or right sides
# of a container and the containerw will scroll in that direction,
# the closer to the edge of the container the faster it goes.
#
# Do as thou wilt with this code but send any surplus love
# over to usefulrobot.io
#
# Copyright 2012 Alex Matchneer / Useful Robot
*/
//((function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=jQuery,a.AccelHoverScroll=function(){function c(c,d){var e;d==null&&(d={}),this._onMouseMove=b(this._onMouseMove,this),this._reset=b(this._reset,this),this._onMouseLeave=b(this._onMouseLeave,this),this._onMouseEnter=b(this._onMouseEnter,this),this._onResize=b(this._onResize,this),this.$outerContainer=a(c),this.options={maxScrollSpeed:800,scrollGutterPercentage:.3,scrollGutterSlices:5,overrideCursor:!0},a.extend(this.options,d),this.defaultCursor=this.$outerContainer.css("cursor"),this.$contentContainer=this.$outerContainer.find(".hoverscroll-content");if(!this.$contentContainer.length){console.log("accelHoverScroll: Couldn't find required .hoverscroll-content class");return}e=this.$contentContainer.css("position"),e!=="relative"&&e!=="absolute"&&(e="relative"),this.$contentContainer.css({position:e,left:"0px"}),this.$outerContainer.css({overflow:"hidden"}),this.currentScrollSpeed=0,this.$leftArrow=a(".hoverscroll-left"),this.$rightArrow=a(".hoverscroll-right"),this.$leftArrow.hide(),this.$outerContainer.hover(this._onMouseEnter,this._onMouseLeave);return}return c.prototype._onResize=function(){return console.log("Resizeed!")},c.prototype.pause=function(){return this._onMouseLeave(),this.isPaused=!0},c.prototype.resume=function(){return this.isPaused=!1},c.prototype._onMouseEnter=function(a){var b;if(this.isPaused)return;return this.currentScrollSpeed=0,this.contentContainerWidth=this.$contentContainer.outerWidth(!0),this.outerWidth=this.$outerContainer.outerWidth(!0),b=this.outerWidth*this.options.scrollGutterPercentage,this.currentSliceSize=Math.ceil(b/this.options.scrollGutterSlices),this.$outerContainer.mousemove(this._onMouseMove)},c.prototype._onMouseLeave=function(a){if(this.isPaused)return;return this._reset(),this.$contentContainer.unbind("mousemove")},c.prototype._reset=function(a){a==null&&(a=!1),this.currentScrollSpeed=0,this.$contentContainer.stop(!0,a);if(this.options.overrideCursor)return this.$outerContainer.css("cursor",this.defaultCursor)},c.prototype._onMouseMove=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n=this;if(this.isPaused)return;f=this.options.scrollGutterPercentage,i=a.clientX/this.outerWidth,m=0;if(i<f)g=!0,b=1-i/f,m=b*this.options.maxScrollSpeed;else if(i>1-f)g=!1,b=(i-1+f)/f,m=b*this.options.maxScrollSpeed;else{this._reset();return}l=1/this.options.scrollGutterSlices,k=Math.floor(b/l);if(k===this.oldSliceIndex)return;this.oldSliceIndex=k,m=Math.floor(m/10)*10,m=Math.max(10,m),g&&(m=-m);if(m===this.currentScrollSpeed)return;this.currentScrollSpeed=m,c=parseInt(this.$contentContainer.css("left")),h=this.contentContainerWidth-this.outerWidth,d=g?Math.abs(c):h+c;if(d<0){this._reset(!0);return}e=Math.floor(d/m*1e3),e=Math.abs(e);if(!e)return;return this.$leftArrow.fadeIn(),this.$rightArrow.fadeIn(),this.options.overrideCursor&&(g?this.$outerContainer.css("cursor","w-resize"):this.$outerContainer.css("cursor","e-resize")),j=g?"0px":"-"+Math.abs(h)+"px",this.$contentContainer.stop(!0,!1).animate({left:j},e,"linear",function(){return g?n.$leftArrow.fadeOut():n.$rightArrow.fadeOut(),n._reset()})},c}(),a.fn.accelHoverScroll=function(b){var c;return b==null&&(b={}),typeof b=="string"?(c=Array.prototype.slice.call(arguments,1),this.each(function(){var d;return d=a.data(this,"hoverscroll"),d[b].apply(d,c)})):this.each(function(){return a.data(this,"hoverscroll",new a.AccelHoverScroll(this,b))}),this}})).call(this)

//(function (e) { e.widget("thomaskahn.smoothDivScroll", { options: { scrollingHotSpotLeftClass: "scrollingHotSpotLeft", scrollingHotSpotRightClass: "scrollingHotSpotRight", scrollableAreaClass: "scrollableArea", scrollWrapperClass: "scrollWrapper", hiddenOnStart: !1, getContentOnLoad: {}, countOnlyClass: "", startAtElementId: "", hotSpotScrolling: !0, hotSpotScrollingStep: 15, hotSpotScrollingInterval: 10, hotSpotMouseDownSpeedBooster: 3, visibleHotSpotBackgrounds: "hover", hotSpotsVisibleTime: 5e3, easingAfterHotSpotScrolling: !0, easingAfterHotSpotScrollingDistance: 10, easingAfterHotSpotScrollingDuration: 300, easingAfterHotSpotScrollingFunction: "easeOutQuart", mousewheelScrolling: "", mousewheelScrollingStep: 70, easingAfterMouseWheelScrolling: !0, easingAfterMouseWheelScrollingDuration: 300, easingAfterMouseWheelScrollingFunction: "easeOutQuart", manualContinuousScrolling: !1, autoScrollingMode: "", autoScrollingDirection: "endlessLoopRight", autoScrollingStep: 1, autoScrollingInterval: 10, touchScrolling: !1, scrollToAnimationDuration: 1e3, scrollToEasingFunction: "easeOutQuart" }, _create: function () { var t = this, n = this.options, r = this.element; r.data("scrollWrapper", r.find("." + n.scrollWrapperClass)), r.data("scrollingHotSpotRight", r.find("." + n.scrollingHotSpotRightClass)), r.data("scrollingHotSpotLeft", r.find("." + n.scrollingHotSpotLeftClass)), r.data("scrollableArea", r.find("." + n.scrollableAreaClass)), r.data("scrollingHotSpotRight").length > 0 && r.data("scrollingHotSpotRight").detach(), r.data("scrollingHotSpotLeft").length > 0 && r.data("scrollingHotSpotLeft").detach(), r.data("scrollableArea").length === 0 && r.data("scrollWrapper").length === 0 ? (r.wrapInner("<div class='" + n.scrollableAreaClass + "'>").wrapInner("<div class='" + n.scrollWrapperClass + "'>"), r.data("scrollWrapper", r.find("." + n.scrollWrapperClass)), r.data("scrollableArea", r.find("." + n.scrollableAreaClass))) : r.data("scrollWrapper").length === 0 ? (r.wrapInner("<div class='" + n.scrollWrapperClass + "'>"), r.data("scrollWrapper", r.find("." + n.scrollWrapperClass))) : r.data("scrollableArea").length === 0 && (r.data("scrollWrapper").wrapInner("<div class='" + n.scrollableAreaClass + "'>"), r.data("scrollableArea", r.find("." + n.scrollableAreaClass))), r.data("scrollingHotSpotRight").length === 0 ? (r.prepend("<div class='" + n.scrollingHotSpotRightClass + "'></div>"), r.data("scrollingHotSpotRight", r.find("." + n.scrollingHotSpotRightClass))) : r.prepend(r.data("scrollingHotSpotRight")), r.data("scrollingHotSpotLeft").length === 0 ? (r.prepend("<div class='" + n.scrollingHotSpotLeftClass + "'></div>"), r.data("scrollingHotSpotLeft", r.find("." + n.scrollingHotSpotLeftClass))) : r.prepend(r.data("scrollingHotSpotLeft")), r.data("speedBooster", 1), r.data("scrollXPos", 0), r.data("hotSpotWidth", r.data("scrollingHotSpotLeft").innerWidth()), r.data("scrollableAreaWidth", 0), r.data("startingPosition", 0), r.data("rightScrollingInterval", null), r.data("leftScrollingInterval", null), r.data("autoScrollingInterval", null), r.data("hideHotSpotBackgroundsInterval", null), r.data("previousScrollLeft", 0), r.data("pingPongDirection", "right"), r.data("getNextElementWidth", !0), r.data("swapAt", null), r.data("startAtElementHasNotPassed", !0), r.data("swappedElement", null), r.data("originalElements", r.data("scrollableArea").children(n.countOnlyClass)), r.data("visible", !0), r.data("enabled", !0), r.data("scrollableAreaHeight", r.data("scrollableArea").height()), r.data("scrollerOffset", r.offset()), r.data("initialAjaxContentLoaded", !1), n.touchScrolling && r.data("enabled") && r.data("scrollWrapper").kinetic({ y: !1, moved: function (e) { n.manualContinuousScrolling && (r.data("scrollWrapper").scrollLeft() <= 0 ? t._checkContinuousSwapLeft() : t._checkContinuousSwapRight()) }, stopped: function (e) { r.data("scrollWrapper").stop(!0, !1), t.stopAutoScrolling() } }), r.data("scrollingHotSpotRight").bind("mousemove", function (e) { if (n.hotSpotScrolling) { var t = e.pageX - (this.offsetLeft + r.data("scrollerOffset").left); r.data("scrollXPos", Math.round(t / r.data("hotSpotWidth") * n.hotSpotScrollingStep)), (r.data("scrollXPos") === Infinity || r.data("scrollXPos") < 1) && r.data("scrollXPos", 1) } }), r.data("scrollingHotSpotRight").bind("mouseover", function () { n.hotSpotScrolling && (r.data("scrollWrapper").stop(!0, !1), t.stopAutoScrolling(), r.data("rightScrollingInterval", setInterval(function () { r.data("scrollXPos") > 0 && r.data("enabled") && (r.data("scrollWrapper").scrollLeft(r.data("scrollWrapper").scrollLeft() + r.data("scrollXPos") * r.data("speedBooster")), n.manualContinuousScrolling && t._checkContinuousSwapRight(), t._showHideHotSpots()) }, n.hotSpotScrollingInterval)), t._trigger("mouseOverRightHotSpot")) }), r.data("scrollingHotSpotRight").bind("mouseout", function () { n.hotSpotScrolling && (clearInterval(r.data("rightScrollingInterval")), r.data("scrollXPos", 0), n.easingAfterHotSpotScrolling && r.data("enabled") && r.data("scrollWrapper").animate({ scrollLeft: r.data("scrollWrapper").scrollLeft() + n.easingAfterHotSpotScrollingDistance }, { duration: n.easingAfterHotSpotScrollingDuration, easing: n.easingAfterHotSpotScrollingFunction })) }), r.data("scrollingHotSpotRight").bind("mousedown", function () { r.data("speedBooster", n.hotSpotMouseDownSpeedBooster) }), e("body").bind("mouseup", function () { r.data("speedBooster", 1) }), r.data("scrollingHotSpotLeft").bind("mousemove", function (e) { if (n.hotSpotScrolling) { var t = this.offsetLeft + r.data("scrollerOffset").left + r.data("hotSpotWidth") - e.pageX; r.data("scrollXPos", Math.round(t / r.data("hotSpotWidth") * n.hotSpotScrollingStep)), (r.data("scrollXPos") === Infinity || r.data("scrollXPos") < 1) && r.data("scrollXPos", 1) } }), r.data("scrollingHotSpotLeft").bind("mouseover", function () { n.hotSpotScrolling && (r.data("scrollWrapper").stop(!0, !1), t.stopAutoScrolling(), r.data("leftScrollingInterval", setInterval(function () { r.data("scrollXPos") > 0 && r.data("enabled") && (r.data("scrollWrapper").scrollLeft(r.data("scrollWrapper").scrollLeft() - r.data("scrollXPos") * r.data("speedBooster")), n.manualContinuousScrolling && t._checkContinuousSwapLeft(), t._showHideHotSpots()) }, n.hotSpotScrollingInterval)), t._trigger("mouseOverLeftHotSpot")) }), r.data("scrollingHotSpotLeft").bind("mouseout", function () { n.hotSpotScrolling && (clearInterval(r.data("leftScrollingInterval")), r.data("scrollXPos", 0), n.easingAfterHotSpotScrolling && r.data("enabled") && r.data("scrollWrapper").animate({ scrollLeft: r.data("scrollWrapper").scrollLeft() - n.easingAfterHotSpotScrollingDistance }, { duration: n.easingAfterHotSpotScrollingDuration, easing: n.easingAfterHotSpotScrollingFunction })) }), r.data("scrollingHotSpotLeft").bind("mousedown", function () { r.data("speedBooster", n.hotSpotMouseDownSpeedBooster) }), r.data("scrollableArea").mousewheel(function (e, i, s, u) { if (r.data("enabled") && n.mousewheelScrolling.length > 0) { var a; n.mousewheelScrolling === "vertical" && u !== 0 ? (t.stopAutoScrolling(), e.preventDefault(), a = Math.round(n.mousewheelScrollingStep * u * -1), t.move(a)) : n.mousewheelScrolling === "horizontal" && s !== 0 ? (t.stopAutoScrolling(), e.preventDefault(), a = Math.round(n.mousewheelScrollingStep * s * -1), t.move(a)) : n.mousewheelScrolling === "allDirections" && (t.stopAutoScrolling(), e.preventDefault(), a = Math.round(n.mousewheelScrollingStep * i * -1), t.move(a)) } }), n.mousewheelScrolling && r.data("scrollingHotSpotLeft").add(r.data("scrollingHotSpotRight")).mousewheel(function (e) { e.preventDefault() }), e(window).bind("resize", function () { t._showHideHotSpots(), t._trigger("windowResized") }), jQuery.isEmptyObject(n.getContentOnLoad) || t[n.getContentOnLoad.method](n.getContentOnLoad.content, n.getContentOnLoad.manipulationMethod, n.getContentOnLoad.addWhere, n.getContentOnLoad.filterTag), n.hiddenOnStart && t.hide(), e(window).load(function () { n.hiddenOnStart || t.recalculateScrollableArea(), n.autoScrollingMode.length > 0 && !n.hiddenOnStart && t.startAutoScrolling(); if (n.autoScrollingMode !== "always") switch (n.visibleHotSpotBackgrounds) { case "always": t.showHotSpotBackgrounds(); break; case "onStart": t.showHotSpotBackgrounds(), r.data("hideHotSpotBackgroundsInterval", setTimeout(function () { t.hideHotSpotBackgrounds(250) }, n.hotSpotsVisibleTime)); break; case "hover": r.mouseenter(function (e) { n.hotSpotScrolling && (e.stopPropagation(), t.showHotSpotBackgrounds(250)) }).mouseleave(function (e) { n.hotSpotScrolling && (e.stopPropagation(), t.hideHotSpotBackgrounds(250)) }); break; default: } t._showHideHotSpots(), t._trigger("setupComplete") }) }, _setOption: function (e, t) { var n = this, r = this.options, i = this.element; r[e] = t, e === "hotSpotScrolling" ? t === !0 ? n._showHideHotSpots() : (i.data("scrollingHotSpotLeft").hide(), i.data("scrollingHotSpotRight").hide()) : e === "autoScrollingStep" || e === "easingAfterHotSpotScrollingDistance" || e === "easingAfterHotSpotScrollingDuration" || e === "easingAfterMouseWheelScrollingDuration" ? r[e] = parseInt(t, 10) : e === "autoScrollingInterval" && (r[e] = parseInt(t, 10), n.startAutoScrolling()) }, showHotSpotBackgrounds: function (e) { var t = this, n = this.element, r = this.option; e !== undefined ? (n.data("scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible"), n.data("scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible"), n.data("scrollingHotSpotLeft").add(n.data("scrollingHotSpotRight")).fadeTo(e, .35)) : (n.data("scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible"), n.data("scrollingHotSpotLeft").removeAttr("style"), n.data("scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible"), n.data("scrollingHotSpotRight").removeAttr("style")), t._showHideHotSpots() }, hideHotSpotBackgrounds: function (e) { var t = this.element, n = this.option; e !== undefined ? (t.data("scrollingHotSpotLeft").fadeTo(e, 0, function () { t.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible") }), t.data("scrollingHotSpotRight").fadeTo(e, 0, function () { t.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible") })) : (t.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible").removeAttr("style"), t.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible").removeAttr("style")) }, _showHideHotSpots: function () { var e = this, t = this.element, n = this.options; n.hotSpotScrolling ? n.manualContinuousScrolling && n.hotSpotScrolling && n.autoScrollingMode !== "always" ? (t.data("scrollingHotSpotLeft").show(), t.data("scrollingHotSpotRight").show()) : n.autoScrollingMode !== "always" && n.hotSpotScrolling ? t.data("scrollableAreaWidth") <= t.data("scrollWrapper").innerWidth() ? (t.data("scrollingHotSpotLeft").hide(), t.data("scrollingHotSpotRight").hide()) : t.data("scrollWrapper").scrollLeft() === 0 ? (t.data("scrollingHotSpotLeft").hide(), t.data("scrollingHotSpotRight").show(), e._trigger("scrollerLeftLimitReached"), clearInterval(t.data("leftScrollingInterval")), t.data("leftScrollingInterval", null)) : t.data("scrollableAreaWidth") <= t.data("scrollWrapper").innerWidth() + t.data("scrollWrapper").scrollLeft() ? (t.data("scrollingHotSpotLeft").show(), t.data("scrollingHotSpotRight").hide(), e._trigger("scrollerRightLimitReached"), clearInterval(t.data("rightScrollingInterval")), t.data("rightScrollingInterval", null)) : (t.data("scrollingHotSpotLeft").show(), t.data("scrollingHotSpotRight").show()) : (t.data("scrollingHotSpotLeft").hide(), t.data("scrollingHotSpotRight").hide()) : (t.data("scrollingHotSpotLeft").hide(), t.data("scrollingHotSpotRight").hide()) }, _setElementScrollPosition: function (t, n) { var r = this.element, i = this.options, s = 0; switch (t) { case "first": return r.data("scrollXPos", 0), !0; case "start": if (i.startAtElementId !== "" && r.data("scrollableArea").has("#" + i.startAtElementId)) return s = e("#" + i.startAtElementId).position().left, r.data("scrollXPos", s), !0; return !1; case "last": return r.data("scrollXPos", r.data("scrollableAreaWidth") - r.data("scrollWrapper").innerWidth()), !0; case "number": if (!isNaN(n)) return s = r.data("scrollableArea").children(i.countOnlyClass).eq(n - 1).position().left, r.data("scrollXPos", s), !0; return !1; case "id": if (n.length > 0 && r.data("scrollableArea").has("#" + n)) return s = e("#" + n).position().left, r.data("scrollXPos", s), !0; return !1; default: return !1 } }, jumpToElement: function (e, t) { var n = this, r = this.element; if (r.data("enabled") && n._setElementScrollPosition(e, t)) { r.data("scrollWrapper").scrollLeft(r.data("scrollXPos")), n._showHideHotSpots(); switch (e) { case "first": n._trigger("jumpedToFirstElement"); break; case "start": n._trigger("jumpedToStartElement"); break; case "last": n._trigger("jumpedToLastElement"); break; case "number": n._trigger("jumpedToElementNumber", null, { elementNumber: t }); break; case "id": n._trigger("jumpedToElementId", null, { elementId: t }); break; default: } } }, scrollToElement: function (e, t) { var n = this, r = this.element, i = this.options, s = !1; r.data("enabled") && n._setElementScrollPosition(e, t) && (r.data("autoScrollingInterval") !== null && (n.stopAutoScrolling(), s = !0), r.data("scrollWrapper").stop(!0, !1), r.data("scrollWrapper").animate({ scrollLeft: r.data("scrollXPos") }, { duration: i.scrollToAnimationDuration, easing: i.scrollToEasingFunction, complete: function () { s && n.startAutoScrolling(), n._showHideHotSpots(); switch (e) { case "first": n._trigger("scrolledToFirstElement"); break; case "start": n._trigger("scrolledToStartElement"); break; case "last": n._trigger("scrolledToLastElement"); break; case "number": n._trigger("scrolledToElementNumber", null, { elementNumber: t }); break; case "id": n._trigger("scrolledToElementId", null, { elementId: t }); break; default: } } })) }, move: function (e) { var t = this, n = this.element, r = this.options; n.data("scrollWrapper").stop(!0, !0); if (e < 0 && n.data("scrollWrapper").scrollLeft() > 0 || e > 0 && n.data("scrollableAreaWidth") > n.data("scrollWrapper").innerWidth() + n.data("scrollWrapper").scrollLeft()) r.easingAfterMouseWheelScrolling ? n.data("scrollWrapper").animate({ scrollLeft: n.data("scrollWrapper").scrollLeft() + e }, { duration: r.easingAfterMouseWheelScrollingDuration, easing: r.easingAfterMouseWheelFunction, complete: function () { t._showHideHotSpots(), r.manualContinuousScrolling && (e > 0 ? t._checkContinuousSwapRight() : t._checkContinuousSwapLeft()) } }) : (n.data("scrollWrapper").scrollLeft(n.data("scrollWrapper").scrollLeft() + e), t._showHideHotSpots(), r.manualContinuousScrolling && (e > 0 ? t._checkContinuousSwapRight() : t._checkContinuousSwapLeft())) }, getFlickrContent: function (t, n) { var r = this, i = this.element; e.getJSON(t, function (t) { function c(t, a) { var p = t.media.m, d = p.replace("_m", s[a].letter), v = e("<img />").attr("src", d); v.load(function () { this.height < i.data("scrollableAreaHeight") ? a + 1 < s.length ? c(t, a + 1) : h(this) : h(this); if (l === f) { switch (n) { case "addFirst": i.data("scrollableArea").children(":first").before(o); break; case "addLast": i.data("scrollableArea").children(":last").after(o); break; default: i.data("scrollableArea").html(o) } i.data("initialAjaxContentLoaded") ? r.recalculateScrollableArea() : i.data("initialAjaxContentLoaded", !0), r._showHideHotSpots(), r._trigger("addedFlickrContent", null, { addedElementIds: u }) } }) } function h(t) { var n = i.data("scrollableAreaHeight") / t.height, r = Math.round(t.width * n), s = e(t).attr("src").split("/"), a = s.length - 1; s = s[a].split("."), e(t).attr("id", s[0]), e(t).css({ height: i.data("scrollableAreaHeight"), width: r }), u.push(s[0]), o.push(t), l++ } var s = [{ size: "small square", pixels: 75, letter: "_s" }, { size: "thumbnail", pixels: 100, letter: "_t" }, { size: "small", pixels: 240, letter: "_m" }, { size: "medium", pixels: 500, letter: "" }, { size: "medium 640", pixels: 640, letter: "_z" }, { size: "large", pixels: 1024, letter: "_b"}], o = [], u = [], a, f = t.items.length, l = 0; i.data("scrollableAreaHeight") <= 75 ? a = 0 : i.data("scrollableAreaHeight") <= 100 ? a = 1 : i.data("scrollableAreaHeight") <= 240 ? a = 2 : i.data("scrollableAreaHeight") <= 500 ? a = 3 : i.data("scrollableAreaHeight") <= 640 ? a = 4 : a = 5, e.each(t.items, function (e, t) { c(t, a) }) }) }, getAjaxContent: function (t, n, r) { var i = this, s = this.element; e.ajaxSetup({ cache: !1 }), e.get(t, function (o) { var u; r !== undefined ? r.length > 0 ? u = e("<div>").html(o).find(r) : u = t : u = o; switch (n) { case "addFirst": s.data("scrollableArea").children(":first").before(u); break; case "addLast": s.data("scrollableArea").children(":last").after(u); break; default: s.data("scrollableArea").html(u) } s.data("initialAjaxContentLoaded") ? i.recalculateScrollableArea() : s.data("initialAjaxContentLoaded", !0), i._showHideHotSpots(), i._trigger("addedAjaxContent") }) }, getHtmlContent: function (t, n, r) { var i = this, s = this.element, o; r !== undefined ? r.length > 0 ? o = e("<div>").html(t).find(r) : o = t : o = t; switch (n) { case "addFirst": s.data("scrollableArea").children(":first").before(o); break; case "addLast": s.data("scrollableArea").children(":last").after(o); break; default: s.data("scrollableArea").html(o) } s.data("initialAjaxContentLoaded") ? i.recalculateScrollableArea() : s.data("initialAjaxContentLoaded", !0), i._showHideHotSpots(), i._trigger("addedHtmlContent") }, recalculateScrollableArea: function () { var t = 0, n = !1, r = this.options, i = this.element; i.data("scrollableArea").children(r.countOnlyClass).each(function () { r.startAtElementId.length > 0 && e(this).attr("id") === r.startAtElementId && (i.data("startingPosition", t), n = !0), t += e(this).outerWidth(!0) }), n || i.data("startAtElementId", ""), i.data("scrollableAreaWidth", t), i.data("scrollableArea").width(i.data("scrollableAreaWidth")), i.data("scrollWrapper").scrollLeft(i.data("startingPosition")), i.data("scrollXPos", i.data("startingPosition")) }, getScrollerOffset: function () { var e = this.element; return e.data("scrollWrapper").scrollLeft() }, stopAutoScrolling: function () { var e = this, t = this.element; t.data("autoScrollingInterval") !== null && (clearInterval(t.data("autoScrollingInterval")), t.data("autoScrollingInterval", null), e._showHideHotSpots(), e._trigger("autoScrollingStopped")) }, startAutoScrolling: function () { var e = this, t = this.element, n = this.options; t.data("enabled") && (e._showHideHotSpots(), clearInterval(t.data("autoScrollingInterval")), t.data("autoScrollingInterval", null), e._trigger("autoScrollingStarted"), t.data("autoScrollingInterval", setInterval(function () { if (!t.data("visible") || t.data("scrollableAreaWidth") <= t.data("scrollWrapper").innerWidth()) clearInterval(t.data("autoScrollingInterval")), t.data("autoScrollingInterval", null); else { t.data("previousScrollLeft", t.data("scrollWrapper").scrollLeft()); switch (n.autoScrollingDirection) { case "right": t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() + n.autoScrollingStep), t.data("previousScrollLeft") === t.data("scrollWrapper").scrollLeft() && (e._trigger("autoScrollingRightLimitReached"), clearInterval(t.data("autoScrollingInterval")), t.data("autoScrollingInterval", null), e._trigger("autoScrollingIntervalStopped")); break; case "left": t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() - n.autoScrollingStep), t.data("previousScrollLeft") === t.data("scrollWrapper").scrollLeft() && (e._trigger("autoScrollingLeftLimitReached"), clearInterval(t.data("autoScrollingInterval")), t.data("autoScrollingInterval", null), e._trigger("autoScrollingIntervalStopped")); break; case "backAndForth": t.data("pingPongDirection") === "right" ? t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() + n.autoScrollingStep) : t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() - n.autoScrollingStep), t.data("previousScrollLeft") === t.data("scrollWrapper").scrollLeft() && (t.data("pingPongDirection") === "right" ? (t.data("pingPongDirection", "left"), e._trigger("autoScrollingRightLimitReached")) : (t.data("pingPongDirection", "right"), e._trigger("autoScrollingLeftLimitReached"))); break; case "endlessLoopRight": t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() + n.autoScrollingStep), e._checkContinuousSwapRight(); break; case "endlessLoopLeft": t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() - n.autoScrollingStep), e._checkContinuousSwapLeft(); break; default: } } }, n.autoScrollingInterval))) }, _checkContinuousSwapRight: function () { var t = this.element, n = this.options; t.data("getNextElementWidth") && (n.startAtElementId.length > 0 && t.data("startAtElementHasNotPassed") ? (t.data("swapAt", e("#" + n.startAtElementId).outerWidth(!0)), t.data("startAtElementHasNotPassed", !1)) : t.data("swapAt", t.data("scrollableArea").children(":first").outerWidth(!0)), t.data("getNextElementWidth", !1)); if (t.data("swapAt") <= t.data("scrollWrapper").scrollLeft()) { t.data("swappedElement", t.data("scrollableArea").children(":first").detach()), t.data("scrollableArea").append(t.data("swappedElement")); var r = t.data("scrollWrapper").scrollLeft(); t.data("scrollWrapper").scrollLeft(r - t.data("swappedElement").outerWidth(!0)), t.data("getNextElementWidth", !0) } }, _checkContinuousSwapLeft: function () { var t = this.element, n = this.options; t.data("getNextElementWidth") && (n.startAtElementId.length > 0 && t.data("startAtElementHasNotPassed") ? (t.data("swapAt", e("#" + n.startAtElementId).outerWidth(!0)), t.data("startAtElementHasNotPassed", !1)) : t.data("swapAt", t.data("scrollableArea").children(":first").outerWidth(!0)), t.data("getNextElementWidth", !1)), t.data("scrollWrapper").scrollLeft() === 0 && (t.data("swappedElement", t.data("scrollableArea").children(":last").detach()), t.data("scrollableArea").prepend(t.data("swappedElement")), t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() + t.data("swappedElement").outerWidth(!0)), t.data("getNextElementWidth", !0)) }, restoreOriginalElements: function () { var e = this, t = this.element; t.data("scrollableArea").html(t.data("originalElements")), e.recalculateScrollableArea(), e.jumpToElement("first") }, show: function () { var e = this.element; e.data("visible", !0), e.show() }, hide: function () { var e = this.element; e.data("visible", !1), e.hide() }, enable: function () { var e = this.element; e.data("enabled", !0) }, disable: function () { var e = this, t = this.element; e.stopAutoScrolling(), clearInterval(t.data("rightScrollingInterval")), clearInterval(t.data("leftScrollingInterval")), clearInterval(t.data("hideHotSpotBackgroundsInterval")), t.data("enabled", !1) }, destroy: function () { var t = this, n = this.element; t.stopAutoScrolling(), clearInterval(n.data("rightScrollingInterval")), clearInterval(n.data("leftScrollingInterval")), clearInterval(n.data("hideHotSpotBackgroundsInterval")), n.data("scrollingHotSpotRight").unbind("mouseover"), n.data("scrollingHotSpotRight").unbind("mouseout"), n.data("scrollingHotSpotRight").unbind("mousedown"), n.data("scrollingHotSpotLeft").unbind("mouseover"), n.data("scrollingHotSpotLeft").unbind("mouseout"), n.data("scrollingHotSpotLeft").unbind("mousedown"), n.unbind("mousenter"), n.unbind("mouseleave"), n.data("scrollingHotSpotRight").remove(), n.data("scrollingHotSpotLeft").remove(), n.data("scrollableArea").remove(), n.data("scrollWrapper").remove(), n.html(n.data("originalElements")), e.Widget.prototype.destroy.apply(this, arguments) } }) })(jQuery)