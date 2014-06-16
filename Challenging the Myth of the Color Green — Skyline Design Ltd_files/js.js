jQuery( function( $ ) {
	$( document ).ready( function() {


		/*---------------------------------------- 
		 *	Cache
		 *--------------------------------------*/

		var html			= $( 'html' ),
			$body			= $( 'body' ),
			$nav			= $( '.main-nav' ),
			container 		= $( 'section.container' ),
			has_audio		= html.hasClass( 'audio' ),
			wWidth 			= $( window ).innerWidth(),
			wHeight 		= $( window ).innerHeight(),
			minCoverHeight 	= 500,
			baseUrl			= 'http://skylinedesign.co.ke',
			templateUrl		= baseUrl + '/wp-content/themes/skyline.v5',
			assetsUrl		= templateUrl + '/assets';



		/*---------------------------------------- 
		 *	Page Functions
		 *--------------------------------------*/

		// home

		function homeFx() {
	
			$( window ).load( function() {

				// show call to action
				$('.cta-home').fadeIn(300, function() {
					$(this).removeClass('no-display');
				});

				ctaAlign();

			}); // load

		}

		if ( $body.hasClass( 'home' ) ) {
			homeFx();
		}


		// single portfolio

		function portfolioFx() {
			$( '.mouserevealr' ).mouseRevealr({'speed':600});
		}

		if ( $body.hasClass( 'single-portfolio' ) )	{
			portfolioFx();
		}


		// about

		function martiansFx() {

			var $martians 	= $( 'a.martian' ),
				$boarders 	= $( 'a.boarder' ),
				$profiles	= $( '.profiles' ),
				width 		= $profiles.find( '.vernier' ).innerWidth(),
				singleWidth = width / 3;

			$.each( $martians, function( i ) {
				initAnchors( 'a.martian', i, singleWidth );
			});

			$.each( $boarders, function( i ) {
				initAnchors( 'a.boarder', i, 200 );
				$( this ).attr({ 'target': '_blank', 'rel': 'nofollow' });
			});

			function initAnchors( el, index, singleWidth ) {
				setTimeout( function() {
					$( el + ':eq(' + index + ')').css({ 'display': 'block', 'width': singleWidth }).hide().delay( 1000 ).fadeIn( 800, function() {
						$( this ).css({ 'left': singleWidth * index });
						// fully loaded
						if ( index + 1 == $martians.length ) {
							$profiles.addClass( 'loaded' );
						}
					});
				}, 1000 * ( index + 1 ) );
			}

			$martians.on( 'click', function( e ) {
	
				if ( $profiles.hasClass( 'loaded' ) ) {

					if ( $( this ).hasClass( 'animating' ) || ( wWidth < 684 ) ) {
						return false;
					} else {

						if( $( this ).hasClass( 'open' ) ) {
							$( this ).addClass( 'animating' );
							$( this).removeClass('open');
							$( this).parent().toggleClass( 'profile-open' );
							if ( $( this ).data( 'left-poz' ) == 0 ) {
								$( this ).siblings( '.martian:hidden' ).delay( 400 ).fadeIn( 300 );
							} else {
								$( this ).siblings( '.martian:hidden' ).delay( 100 ).fadeIn( 300 );						
							}
							$( this ).stop( true, true ).animate({ 'left': $( this ).data( 'left-poz' ) }, 300, function() {
								$( this ).css({ 'position': '' });
								$( this ).removeClass( 'animating' );
							})
						} else {
							$( this ).addClass( 'animating' );
							$( this ).addClass( 'open' );
							$( this ).parent().addClass('profile-open');
							$( this ).next().delay( 1000 ).fadeIn( 300 );
							var p = $( this ).position();
							$( this ).attr( 'data-left-poz', p.left );
							$( this ).css({ 'position':'absolute', 'left': p.left, 'display': 'block' });
							$( this ).stop( true, true ).delay( 500 ).animate({ 'left': 0 }, 300, function() {
								$( this ).removeClass( 'animating' );
							} );
						}
						$( this ).siblings( ':visible' ).removeClass( 'open' ).fadeOut( 300 );
					}
				}

				e.preventDefault();
	
			}); // end martians handler

			$boarders.on( 'click', function( e ) {
				$( this ).attr( 'target', '_blank' );
			})

			if( $body.hasClass( 'martians-board' ) ) {
				$( '.profiles' ).find( '.vernier' ).css( 'width', 912 /* singleWidth * $boarders.length */ )
			}

		}

		if ( $body.hasClass( 'martians' ) || $body.hasClass( 'page-template-page-board-php' ) )	{
			martiansFx();
		}


		// chronicles

		function blogFx() {
			$( window ).on('load', function() {
				if ( wWidth > 960 ) {
					setTimeout(function() {
						matchHeight('.main-col', '.side-col', 16 );
					}, 100 );
				}
			});
			$( window ).on('resize', function() {
				if ( wWidth > 960 ) {
					matchHeight('.main-col', '.side-col', 16 );
				} else {
					$('.side-col').removeAttr('style');
				}
			});
		}

		if ( $body.hasClass( 'blog' ) )	{
			blogFx();
		}


		// single post

		function singlePostFx() {

			$('.post').find('p:has(img), .wp-caption').addClass('has-img clearfix clearfix-left').removeAttr('style');

			$( window ).on('load resize', function() {
				if ( $(window).innerWidth() > 960 ) {
					matchHeight('.main-col', '.side-col', 16 );
				} else {
					$( '.side-col' ).removeAttr('style');
				}
				$('.has-img').each(function() {
					if ( $(this).find('img').width() == $(this).innerWidth() ) {
						$( this ).addClass('img-full');
					} else {
						$( this ).removeClass('img-full');						
					}
				})
			});
		}

		if ( $body.hasClass( 'single-post' ) || $body.hasClass( 'single-inspiration' ) ) {
			singlePostFx();
		}


		// search

		function searchFx() {

			$( window ).on('load resize', function() {
				if ( wWidth > 960 ) {
					matchHeight('.main-col', '.side-col', 0 );
				} else {
					$('.side-col').removeAttr('style');
				}
			});
		}

		if ( $body.hasClass( 'search-results' ) || $body.hasClass( 'search-no-results' ) ) {
			searchFx();
		}


		// inspiration search

		function searchInspFx() {

			$('#post_type').attr('value','inspiration');

			$( window ).on('load resize', function() {
				if ( wWidth > 960 ) {
					matchHeight('.main-col', '.side-col', 0 );
				} else {
					$('.side-col').removeAttr('style');
				}
			});
		}

		if ( $body.hasClass( 'post-type-archive-inspiration' ) ) {
			searchInspFx();
		}


		// inspiration taxonomy

		function taxInspFx() {

			$('#post_type').attr('value','inspiration');

			$( window ).on('load resize', function() {
				if ( wWidth > 960 ) {
					matchHeight('.main-col', '.side-col', 16 );
				} else {
					$('.side-col').removeAttr('style');
				}
			});
		}

		if ( $body.hasClass( 'tax-types' ) ) {
			taxInspFx();
		}


		// contacts

		function contactFx() {

			var options = { 
					success: 	showResponse,
					url: 		templateUrl + '/external/f.php', 
					resetForm: 	false
				};

			function showResponse( responseText, statusText )  {
				$('a.final-step').click();
				$('a.subscribe').attr( 'href', responseText );
			} 

			// setup form validator
			var cF = $('#contact-form'),
				validator = cF.validate({
					rules: {
						name: {
							required: true,
							minlength: 3
						}
					},
					messages: {
						name: {
							required: "Don't be shy now! What's your name?",
							minlength: "Is your name really that short? I don't believe you!"
						}, 
						message: {
							required: "Please say something.",
						}, 
						email: {
							required: "I'll kinda need your email to reply, right?",
							email: "Please ensure that it's in the right format."
						}
					},
					submitHandler: function( cF ) {
						$( cF ).ajaxSubmit( options );
					}
				});

			// show form
			$( '#trigger-contact' ).on( 'click', function( e ) {
				if ( $body.hasClass( 'loaded' ) ) {
					$body.addClass( 'form-on' );
					cF.find('label.error').hide();
					$('.dynamic a, .dynamic p').show();
					$( '.static' ).fadeOut( 300 );
					$( 'aside.column' ).fadeOut( 300, function() {
						$( '.box-office' ).fadeOut( 300 );
						$( '.dynamic' ).fadeIn( 300, function() {
							cF.fadeIn().find('.current input').focus();
						});
						$( '.contact-info' ).css({ 'float': 'none', 'margin-left': 120 });
					});
				}
				e.preventDefault();
			})

			// hide form		
			$( '#trigger-close' ).on( 'click', function( e ) {
				$body.removeClass( 'form-on' );
				cF.hide();
				//$('.dynamic a, .dynamic p').hide();
				$( '.contact-info' ).css({ 'float': 'left', 'margin-left': 0 });
				$( '.dynamic' ).fadeOut( 300 , function() {
					$( '.box-office' ).fadeIn( 300 );
					$( '.static' ).fadeIn( 300 );
					if ( $( window ).innerWidth() > 1140 ) {
						$( 'aside.column' ).fadeIn( 300 );
					}
					$('.contact-info').removeAttr('style');
				});
				e.preventDefault();
			})

			$( '.nav-email' ).find( 'a' ).on( 'click', function( e ) {
				var status = validator.element( cF.find( 'label.current input, label.current textarea' ) );
				var cur = $( this ).closest( '.step' );
				var p = $('.dialogue-q');
				if( $( this ).hasClass( 'prev' ) ) {
						cur.fadeOut( 300, function() {
							cur.removeClass( 'current' );
						});
						cur.prev( '.step' ).css({ 'display': 'block' }).hide()
							.delay( 400 ).fadeIn().addClass( 'current' );
						p.find( 'span' ).hide();
						p.find( 'span.' + $( this ).data( 'to' ) ).show();
				} else {
					if( status ) {
						cur.fadeOut( 300, function() {
							cur.removeClass( 'current' );
						});
						cur.next( '.step' ).css({ 'display': 'block' }).hide()
							.delay( 400 ).fadeIn().addClass( 'current' );
						p.find( 'span' ).fadeOut( 300 );
						p.find( 'span.' + $( this ).data( 'to' ) ).delay( 300 ).fadeIn( 300, function() {
							$('.contact-form').find('textarea:visible, input:visible').focus();
						});
						var lastname = $('#name').val().split(" ").pop();
						$('#username').text( lastname + '. ' );
					}
				}
				e.preventDefault();
			})

			// use enter to trigger next button
			$( document ).keypress( function( e ) {
				if( e.which == 13 && $('#message').is(':focus') == false ) {
					$('.step.current').find('a.next').click();
				}
			});

			// prevent normal form submission
			cF.on('submit', function( e ) {
				e.preventDefault();
			})

			// show email address
			activateEmail('.email');

			// insert map
			renderMap();

			$( window ).on( 'resize', function() {
				if ( $body.hasClass( 'form-on' ) && $( window ).innerWidth() < 1140 ) {
					$( '#trigger-close' ).click();
				}
				if ( ! $body.hasClass( 'form-on' ) && $( window ).innerWidth() > 1140 ) {
					$( 'aside.column' ).fadeIn( 300 );
				} else {
					$( 'aside.column' ).fadeOut( 300 );					
				}
			})

		}

		if ( $body.hasClass( 'contact' ) ) {
			contactFx();
		}

		

		/*---------------------------------------- 
		 *	On Doc Ready
		 *--------------------------------------*/

		// arbitrary functions

		fadeFx();
		scrollFx();
		setCover( $( '.cover-page' ) );

		$( '.share' ).socialShare({
			social: 'twitter,facebook,google,linkedin'
		});

		$( '.share' ).on( 'click', function( e ) {
			e.preventDefault();
		});



		/*---------------------------------------- 
		 *	On Page Load
		 *--------------------------------------*/

		$( window ).load( function() {

			$body.addClass( 'loaded' );

			$nav.find( 'a' ).on( 'click', function( e ) {
				if ( $( this ).parent().hasClass( 'current-menu-item' ) ) {
					container.click();
					e.preventDefault();
				}
			})

			// run page functions
			if ( $body.hasClass( 'blog' ) )	{ gridSet( '.wall', '.brick .inner' ); }
			if (
				$body.hasClass( 'post-type-archive-inspiration' ) ||
				$body.find('section.post-type-archive-inspiration' ) 
			) { gridSet( '.wall', '.brick .inner' ); }

			// add nav audio
			if ( has_audio ) {

				// insert audio code
				var audio = '<audio id="sfx">' + 
							'<source src="' + assetsUrl + '/audio/rollover.mp3"></source>' +
							'<source src="' + assetsUrl + '/audio/clk.ogg"></source>' +
							'</audio>';
				$body.append( audio );
				
				// get audio
				var audio_file 		= $( '#sfx' )[0];
				audio_file.volume	= 0.05;

				// bind and play
				$( '#trigger-menu' ).on( 'click', function() {
					setTimeout( function() {
						audio_file.play();
					}, 300) // precision timing!
				});
			}

		})


		/*---------------------------------------- 
		 *	On Window Resize
		 *--------------------------------------*/

		$( window ).resize( function() {

			wWidth = $( window ).innerWidth();
			wHeight = $( window ).innerHeight();

			if ( $body.hasClass( 'home' ) ) { ctaAlign(); }
			if ( $( window ).innerHeight() >= minCoverHeight ) { setCover( $( '.cover-page' ) ); }

			if ( $body.hasClass( 'blog' ) )	{ gridSet( '.wall', '.brick .inner' ); }
			if (
				$body.hasClass( 'post-type-archive-inspiration' ) ||
				$body.find('section.post-type-archive-inspiration' ) 
			) { gridSet( '.wall', '.brick .inner' ); }
		})



		/*---------------------------------------- 
		 *	Function Definitions
		 *--------------------------------------*/

		function setCover( el ) {
			if( ! el.hasClass( 'height-auto' ) ) {
				el.css( 'height', $( window ).innerHeight() );
			}
		}

		function matchHeight( source, destination, offset ) {
			$( destination ).css('min-height', $( source).innerHeight() + parseInt( offset ) );
		}

		function scrollFx() {
			$( 'a[href^="#"]' ).on( 'click', function ( e ) {
				e.preventDefault();

				var target 	= this.hash,
				$target 	= $( target );

				$( 'html, body' ).stop( true, true ).animate({
					'scrollTop': $target.offset().top
				}, 900, 'swing', function () {
				//	window.location.hash = target;
				});
			});
		}

		// fade navigation items on scroll

		function fadeFx() {

			fadeStart	= 0;
			fadeUntil	= 70;
			logo 		= $( '#logo' ).parent();
			nav 		= $( '#trigger-menu' );
			subNav 		= $( '.tembe-fader' );

			$( window ).on( 'load scroll', function() {
				offset 	= $( document ).scrollTop();
				opacity = 0;

				if( offset <= fadeStart ) {
					opacity=1;
				} else if( offset <= fadeUntil ){
					opacity = 1 - offset/fadeUntil;
				}

				logo.css( 'opacity', opacity );
				nav.css( 'color', 'rgba(255,255,255,' + opacity + ')' );
				if ( opacity == 0 ) {
					logo.hide();
					nav.addClass( 'icon-only' );
					subNav.css({ 'opacity': 0 });
				} else if ( ( opacity > 0 ) && ( logo.is( ':hidden' ) ) ) {
					logo.show();
					nav.removeClass( 'icon-only' );
					subNav.css({ 'opacity': opacity });
				}
			});

		}		

		function gridSet( wall, bricks ) { // idea from http://stackoverflow.com/questions/6781031/
			var maxHeight = -1;
			$( wall ).find( bricks ).each( function() {
				$( this ).css({ 'height': 'auto' });
				maxHeight = maxHeight > $( this ).height() ? maxHeight : $( this ).height();
			});

			$( bricks ).each( function() {
				$( this ).height( maxHeight );
			});
		}
		
		// align call-to-action

		function ctaAlign() {
			var cta_container 	= $body.find( '.wrapper' ),
				cta 			= cta_container.find( '.cta' ),
				ctaHeight 		= cta.innerHeight(),
				bottom 			= 60,
				padding 		= wHeight - ( ctaHeight + bottom );

			if ( padding < 40 ) {
				padding = 40;
			}

			cta_container.css( 'padding-top', padding );
		}


		// activate email links

		function activateEmail ( selector ) {
			$( selector ).html( function() {
				var adr = $( this ).data( 'address' );
				var dom = $( this ).data( 'domain' );
				var ext = $( this ).data( 'ext' );
				return adr + '@' + dom + ext;
			}).attr( 'href', function() {
				return 'mailto:' + $( this ).html();
			}).attr( 'target', '_blank' );
		}


		// create Google map

		function renderMap() {

			if ( typeof google !== 'undefined' ) {

				var options = {
					center: new google.maps.LatLng( -1.299333, 36.765264 ),
					zoom: 17,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					scrollwheel: false,
					navigationControl: false,
					mapTypeControl: false,
					scaleControl: false
				};

				var map = new google.maps.Map( document.getElementById( "gmap" ), options );

				// factory function
				var createMarker = function( latitude, longitude, id, title, contacts ) {

					var infowindow = new google.maps.InfoWindow({
	    				content: contacts
					});

					return {
						
						marker: new google.maps.Marker({
							position: new google.maps.LatLng( latitude, longitude ),
							map: map,
							title: title
						})

					}
				}

				// input raw material
				var marker = createMarker( -1.299256, 36.765632, "nai-office", "Skyline Design Ltd", "Skyline Design Ltd" );

			}

		}

		
	});
});