/*
	Ihatetomatoes Header Animation	
	Dual licensed under MIT and GPL.
*/

jQuery(function(){
	
	jQuery("#content").fitVids();
	
	jQuery("#masthead a.buttonPlain").click(function(event){
	     event.preventDefault();
	     //calculate destination place
	     var dest=0;
	     if(jQuery(this.hash).offset().top > jQuery(document).height()-jQuery(window).height()){
	          dest=jQuery(document).height()-jQuery(window).height();
	     }else{
	          dest=jQuery(this.hash).offset().top;
	     }
	     //go to destination
	     jQuery('html,body').animate({scrollTop:dest}, 1000,'swing');
	});

if (Modernizr.touch) {
	
	jQuery('#headerImage').hide();
	
} else {
    
	function headerAnimation(){
		
		// Icons timeline
		var icon1 = jQuery("#headerIcons li:nth-child(1)"),
			icon2 = jQuery("#headerIcons li:nth-child(2)"),
			icon3 = jQuery("#headerIcons li:nth-child(3)"),
			icon4 = jQuery("#headerIcons li:nth-child(4)"),
			cat1 = jQuery("#headerWords li:nth-child(1)"),
			cat2 = jQuery("#headerWords li:nth-child(2)"),
			cat3 = jQuery("#headerWords li:nth-child(3)"),
			cat4 = jQuery("#headerWords li:nth-child(4)"),
			headerIcons = jQuery("#headerIcons"),
			headerWords = jQuery("#headerWords"),
			mainIcon = jQuery(".mainIcon"),
			tlIcons = new TimelineMax({repeat:-1});
			
		tlIcons
			.from(icon1, 0.5, {left:-40, autoAlpha:0, ease:Power4.easeOut}, "cat-1")
			.to(icon1, 0.2, {left:40, autoAlpha:0}, "cat-1+=1")
			.from(icon2, 0.5, {left:-40, autoAlpha:0, ease:Power4.easeOut}, "cat-2")
			.to(icon2, 0.2, {left:40, autoAlpha:0}, "cat-2+=1")
			.from(icon3, 0.5, {left:-40, autoAlpha:0, ease:Power4.easeOut}, "cat-3")
			.to(icon3, 0.2, {left:40, autoAlpha:0}, "cat-3+=1")
			.from(icon4, 0.5, {left:-40, autoAlpha:0, ease:Power4.easeOut}, "cat-4")
			.to(icon4, 0.2, {left:40, autoAlpha:0}, "cat-4+=1")
			.from(cat1, 0.5, {left:10, autoAlpha:0, ease:Power4.easeOut}, "cat-1")
			.to(cat1, 0.2, {left:-20, opacity:0}, "cat-1+=1")
			.from(cat2, 0.5, {left:10, autoAlpha:0, ease:Power4.easeOut}, "cat-2")
			.to(cat2, 0.2, {left:-20, opacity:0}, "cat-2+=1")
			.from(cat3, 0.5, {left:10, autoAlpha:0, ease:Power4.easeOut}, "cat-3")
			.to(cat3, 0.2, {left:-20, opacity:0}, "cat-3+=1")
			.from(cat4, 0.5, {left:10, autoAlpha:0, ease:Power4.easeOut}, "cat-4")
			.to(cat4, 0.2, {left:-20, opacity:0}, "cat-4+=1");
		tlIcons.pause("intro");
		
		function pause(){
		  tlIcons.pause();  
		}  
		
		// Icons
		var icons = new TimelineMax();
		icons
			.to("#headerIcons", 0.3, {scale: 0.7, ease:Power4.easeOut});
		
		jQuery('#headerImage').mouseenter(function() {
		
			introOut();
			tlIcons.play();
			
		}).mouseleave(function() {
			
			tlIcons.tweenTo(tlIcons.currentLabel(), {onComplete:introIn});
			
		});
		
		function introIn(){
			TweenLite.to(mainIcon, 0.5, {opacity:1}, 0.5);
		}
		
		function introOut(){
			TweenLite.to(mainIcon, 0.3, {opacity:0});
		}
		
		jQuery('#headerImage').click(function(){
			var url = jQuery('#headerWords li[style*="visibility: visible"] a').attr('href');
			window.location = url;
		});
		
	}
	
	
	function headerAnimationReset(){
		tlIcons.seek(0);
	}
	
	function initAnimations() {
		return {
			match : function() {
			
				headerAnimation();
			},
			unmatch : function() {
				
				headerAnimationReset();
				
			}
		};
	}
		
	//enquire.register("screen and (min-width : 767px)", initAnimations(), true).listen(100);

}
	
});