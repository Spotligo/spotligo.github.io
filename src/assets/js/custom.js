/** 	=========================
	Template Name 	 : Glower
	Author			 : DexignZone
	Version			 : 1.0
	File Name		 : custom.js
	Author Portfolio : https://themeforest.net/user/dexignzone/portfolio

	Core script to handle the entire theme and core functions
**/

Glower = function(){
	
	"use strict"
	
	var screenWidth = $( window ).width();
	var screenHeight = $( window ).height();
	
	// Preloader ============
	var handlePreloader = function(){
		setTimeout(function() {
            jQuery('#preloader').fadeOut(300);
		},300);
	}

	// Menubar Toggler ============
    var handleMenubar = function() {
        jQuery('.menu-toggler').on('click',function(){
			jQuery('.sidebar').toggleClass('show');
			jQuery('.menu-toggler').toggleClass('show');
			jQuery('.dark-overlay').toggleClass('active');
		});
		jQuery('.dark-overlay').on('click',function(){
			jQuery('.menu-toggler,.sidebar').removeClass('show');
				jQuery(this).removeClass('active');
		});
		jQuery('.nav-color').on('click',function(){
			jQuery('.dark-overlay').removeClass('active');
		});
	}
    
	// Show Pass ============
    var handleShowPass = function(){
		jQuery('.show-pass').on('click',function(){
			jQuery(this).toggleClass('active');
			if(jQuery(this).parent().find('.dz-password').attr('type') == 'password'){
				jQuery(this).parent().find('.dz-password').attr('type','text');
			}else if(jQuery(this).parent().find('.dz-password').attr('type') == 'text'){
				jQuery(this).parent().find('.dz-password').attr('type','password');
			}
		});
	}
	
	// Sticky Header ============
	var handleIsFixed = function(){
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
			if (scroll >= 50) {
				$(".main-bar").addClass("sticky-header");
			}else{
				$(".main-bar").removeClass("sticky-header");
			}
		});
	}
    
	// Custom File Input ============
	var handleCustomFileInput = function() {
		$(".custom-file-input").on("change", function() {
			var fileName = $(this).val().split("\\").pop();
			$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
	}
    
	// Default Select ============
	var handleSelectpicker = function(){
		if(jQuery('.default-select').length > 0 ){
			jQuery('.default-select').selectpicker();
		}
	}
    
	// Menubar Nav Active ============
    var handleMenubarNav = function() {
        $(".menubar-nav .nav-link").on("click",function(){
            $(".menubar-nav .nav-link").removeClass("active");
            $(this).addClass("active");
        });
	}
	
	// Chat Box ============
	var handleChatBox = function (){
        $('.chat-btn').on('click', function() {
			
			var chatInput = $('.message-area .form-control');
			var chatMessageValue = chatInput.val();
			
			var chatEmojiArea = $('.append-media').html();
            
            var current = new Date();
            var ampm = current.getHours() >= 12 ? 'pm' : 'am';
            var actualTime = (current.getHours()% 12 +':'+current.getMinutes() +' '+ ampm);
			
			var messageEmojiHtml = '<div class="chat-content user">'+
				'<div class="message-item">'+
					'<div class="bubble">'+chatEmojiArea+'</div>'+
					'<div class="message-time">'+actualTime+'</div>'+
				'</div>'+
			'</div>';
				
			if(chatEmojiArea.length > 0){   
				$('.chat-box-area').append(messageEmojiHtml);
			}
			
			var messageHtml = '<div class="chat-content user">'+
				'<div class="message-item">'+
					'<div class="bubble">'+chatMessageValue+'</div>'+
					'<div class="message-time">'+actualTime+'</div>'+
				'</div>'+
			'</div>';
			
			if(chatMessageValue.length > 0){
				var appendMessage = $('.chat-box-area').append(messageHtml);
			}
			
			//console.log(document.body.scrollHeight)
			window.scrollTo(0, document.body.scrollHeight);
			var clearChatInput = chatInput.val('');    
			var clearChatInputE = $('.append-media').empty();     
        });
    }
    
    // Page Back ============
	var handleGoBack = function(){
		$('.back-btn').on('click',function(){
			window.history.go(-1); return false
		})        
    }
    
	// Progressive Web App Modal ============
	var handlePWAModal = function (){
		if (!window.matchMedia('(display-mode: standalone)').matches) {
		    setTimeout(function(){
    			jQuery('.pwa-offcanvas').addClass('show');
    			jQuery('.pwa-backdrop').addClass('fade show');
    		}, 3000);
    		jQuery('.pwa-backdrop, .pwa-close, .pwa-btn').on('click',function(){
    			jQuery('.pwa-offcanvas').slideUp(500, function() {
    				jQuery(this).removeClass('show');
    			});
    			setTimeout(function(){
    				jQuery('.pwa-backdrop').removeClass('show');
    			}, 500);
    		}); 
		}
	}
    
	// Search Form ============
	var handleSearch = function(){
        $('.search-input .form-control').on('change paste keyup',function(){
            if($(this).val().length > 0){
                $('.search-input .btn-close').fadeIn(500);
            }else{
                $('.search-input .btn-close').fadeOut(500);
            }
        })
        $('.search-input .btn-close').on('click',function(){
            $('.search-input .form-control').val(null);
            $(this).fadeOut(0);
        })
    }
	
	// Theme Version ============
	var handleThemeVersion = function() {
		jQuery('.theme-change').on('click',function(){
			jQuery('body').toggleClass('theme-dark');
			jQuery('.theme-btn').toggleClass('active');
			var logoSrc = $(".app-logo").attr("src");
			if(jQuery('body').hasClass('theme-dark')){
			   setCookie('themeVersion_value', 'theme-dark'); 
			   $(".app-logo").attr("src", logoSrc.replace('light','dark'))
			}else{
			   setCookie('themeVersion_value', '');  
			   $(".app-logo").attr("src", logoSrc.replace('dark','light'))
			}
		});
	}
	
	var handleThemeVersion2 = function() {
		jQuery('.dz-list-group ul li a').on('click',function(){
			if($(this).hasClass('theme-change'))
			{				
				jQuery('body').toggleClass('theme-dark');
				jQuery('.theme-btn').toggleClass('active');
			}
		});
	}
    
    // Theme Version ============
	var handleRemoveClass = function() {
		jQuery('.nav-color').on('click',function(){
			jQuery('.sidebar, .menu-toggler').removeClass('show');
		});
	}
    
    // Theme Version ============
	var handleToggleButton = function() {
		jQuery('.dz-treeview-item').on('click',function(){
			jQuery(this).toggleClass('open');
		});
	}
	
	// Light Gallery ============
	var handleLightgallery = function() {
		if(jQuery('#lightgallery').length > 0){
			lightGallery(document.getElementById('lightgallery'), {
                plugins: [lgZoom, lgThumbnail],
            });
		}
		if(jQuery('#lightgallery-2').length > 0){
			lightGallery(document.getElementById('lightgallery-2'), {
                plugins: [lgZoom, lgThumbnail],
            });
		}
		if(jQuery('#lightgallery-3').length > 0){
			lightGallery(document.getElementById('lightgallery-3'), {
                plugins: [lgZoom, lgThumbnail],
            });
		}
		if(jQuery('#lightgallery-4').length > 0){
			lightGallery(document.getElementById('lightgallery-4'), {
                plugins: [lgZoom, lgThumbnail],
            });
		}
		
		// lightgallery by class name
		if(jQuery('.lightgallery').length > 0){
			var elements = document.getElementsByClassName('lightgallery');
			for (let item of elements) {
				lightGallery(item,{
					plugins: [lgZoom, lgThumbnail],
				})
			}
		}
	}
    
    // Tab Slide ============ 
	var handleTabSlide = function() {
		if(jQuery('.tab-slide-effect').length > 0){
			var a =  $('.tab-slide-effect li.active').width();
			
			var b =  $('.tab-slide-effect li.active').position().left - $(window).width() + a;
			//console.log(a,"=",b);
			$('.tab-active-indicator').css({'width' : a,'transform': 'translateX('+b+'px)'});
			$('.tab-slide-effect li').on('click',function(){
                var tabItem = $(this).parent().find('li');
				$(tabItem).removeClass('active');
                $(this).addClass('active');
				var x = $(this).width();
				var y = $(this).position().left;
				var right = $('.tab-slide-effect li.active').position().left - $(window).width() + $(this).width();
                var indicator = $(this).parent().find('.tab-active-indicator');
				$(indicator).css({'width' : x,'transform': 'translateX('+right+'px)'});
			})
		}
	}
	
	// OTP Input ============ 
    var handleOTP = function() {
		if(jQuery('#otp').length > 0)
		$('.digit-group').find('input').each(function() {
            $(this).attr('maxlength', 1);
            $(this).on('keyup', function(e) {
                var thisVal = $(this).val();
                var parent = $($(this).parent());
                
                if(e.keyCode === 8 || e.keyCode === 37) {
                    var prev = parent.find('input#' + $(this).data('previous'));
                    
                    if(prev.length) {
                        $(prev).select();
                    }
                } else {
                    var next = parent.find('input#' + $(this).data('next'));
                    
                    if(!$.isNumeric(thisVal))
                    {
                        $(this).val('');
                        return false;
                    }

                    if(next.length) {
                        $(next).select();
                    } else {
                        if(parent.data('autosubmit')) {
                            parent.submit();
                        }
                    }
                }
            });
        });
		
	}
   
	
	// Input Search ============
    var handleSearch = function() {
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".recent-jobs-list li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        if($(this).val().length > 0){
            $('.search-input .btn-close').fadeIn(500);
        }else{
            $('.search-input .btn-close').fadeOut(500);
        }
      });
      
        $('.search-input .btn-close').on('click',function(){
            $(".recent-jobs-list li").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf('') > -1)
            });
            $('.search-input .form-control').val(null);
            $(this).fadeOut(0);
        })
	}
	
	// Input With Image Select ============
	var handleImageSelect = function(){
		if(jQuery('.image-select').length > 0){
			const $_SELECT_PICKER = $('.image-select');
			$_SELECT_PICKER.find('option').each((idx, elem) => {
				const $OPTION = $(elem);
				const IMAGE_URL = $OPTION.attr('data-thumbnail');
				if (IMAGE_URL) {
					$OPTION.attr('data-content', "<img src='%i'/> %s".replace(/%i/, IMAGE_URL).replace(/%s/, $OPTION.text()))
				}
			});
			$_SELECT_PICKER.selectpicker();
		}
	}
	
	// Like Button ============
	var handleLikeButton = function (){
		$(".item-bookmark").on('click', function(){
			$(this).toggleClass("active");
		});
		$(".like-button").on('click', function(){
			$(this).toggleClass("active");
		});
	}
	
	// TouchSpin ============
	var handleTouchSpin = function (){
		if(jQuery('.stepper').length > 0){	
			$(".stepper").TouchSpin({
				initval: 1
			});
		}
	}
	
	// Add List ============
	var handleTagRemove = function (){
		$('.main-in').on('keypress',function(e) {
			if(e.which == 13 && $(this).val().length > 0) {
				var x = $(this).val();
				$('.recent-search-list ul').append("<li><a href='product.html' class='search-content'><i class='icon feather icon-clock me-2'></i>"+x+"<i class='icon feather icon-arrow-up-left'></i></a></li>");
				$(this).val(null);
				
				$(".remove-tag").on('click',function(){
					$(this).parent().remove();
				})
			}
		});
	}
	
	var appNavigateShare = function(){

		const dzShareData = {
			title: 'W3Dating Kit',
			text: 'W3Dating Kit - Dating Mobile App Template ( Bootstrap + PWA )',
			url: document.location.protocol + "//" + document.location.host
		}

		jQuery('#shareBtn').on('click', function() {
			if(navigator.share)
			{
				navigator.share(dzShareData);
			}
		});
		
	}
	
	var handlelangPicker = function(){
		if(jQuery('#offcanvasLang').length > 0)
		{
			const bsOffcanvas = new bootstrap.Offcanvas('#offcanvasLang')
			$('.confirm-lang li').on('click', function () {
				var x =  $(this).attr("data-lang")
				$('.select-lang').text(x)
				bsOffcanvas.hide();
			});
		}
	}

	var handleColorFilter = function(){
		var colorsInput = document.querySelectorAll(".dz-color-picker .form-check-input");
		colorsInput.forEach(colorChange)
		function colorChange(item, index, arr) {
			var color = $(item).val();
			var element = $(item).closest('.form-check').find('span');
			element.css({backgroundColor : color});
		}
	}
	
	var onePageLayout = function() {
		'use strict';
		var headerHeight =   parseInt($('.onepage').css('height'), 10);
		$(".scroll").unbind().on('click',function(event) 
		{
			event.preventDefault();
			
			if (this.hash !== "") {
				var hash = this.hash;	
				var seactionPosition = $(hash).offset().top;
				var headerHeight =   parseInt($('.onepage').css('height'), 10);
				
				
				$('body').scrollspy({target: ".header, .scroll-bx", offset: headerHeight+2}); 
				
				var scrollTopPosition = seactionPosition - (headerHeight + 10);
				
				$('html, body').animate({
					scrollTop: scrollTopPosition
				}, 800, function(){
					
				});
			}   
		});
		$('body').scrollspy({target: ".header, .scroll-bx", offset: headerHeight + 2});  
	}
	
	// Dropdown Effect ============
	var handleDropdowneffect = function (){
		$(".imageUpload").change(function() {
			const input = this;
			const selector = $(this);
			if (input.files && input.files[0]) {
				selector.parent().addClass('active');
				var reader = new FileReader();
				reader.onload = function(e) {
					selector.parent().find('.remove-img').removeClass('d-none');
					selector.parent().css('background-image', 'url('+e.target.result +')');
					selector.parent().hide();
					selector.parent().fadeIn(650);
				}
				reader.readAsDataURL(input.files[0]);
			}else{
				selector.parent().removeClass('active');
			}
			
		});
		$('.remove-img').on('click', function() {
			var imageUrl = "assets/images/recent-pic/drop-bx.png";
			$(this).parent().removeClass('active');
			$(this).parent().removeAttr('style');
			$(this).parent().css('background-image', 'url(' + imageUrl + ')');
			$(this).addClass('d-none');
		});
	}

	// Change Text ============
	var handleChangeText = function (){

		$(".dz-tab .nav-item .nav-link").click(function(){
			$(this).parent().parent().removeClass('grid').removeClass("list");
			$(this).parent().parent().addClass($(this).attr('id'));
		});
	}
	
	
	var handleTagSlider = function(){
		if(jQuery('#tagSlider').length > 0){
			$('#tagSlider').grouploop({
				velocity: 1,
				forward: true,
				pauseOnHover: false,
				childNode: ".item",
				childWrapper: ".item-wrap"
			});
		}
	}

	var handleEnterAnimate = function(){
		$(".signIn-btn").on('click', function(){
			$(this).addClass("active");
			var pageUrl = $(this).attr('data-href');
			setTimeout(function() {
				window.location.href = pageUrl;
				$(".signIn-btn").removeClass("active");
			}, 1000);
		});
	}

	var handleTextChar =  function(){
		var wordRoateElements = document.querySelectorAll('.word-rotate');
		wordRoateElements.forEach((data,_) => {
			var wordRoate = $(data).text().split('');
			const step = 360/wordRoate.length;
			wordRoate.forEach((el,i) => {
				$(data).closest('.word-rotate-box').append('<span class="text__char" style="--char-rotate :'+ (i * step) +'deg">' + el + '</span>');
			})
			$(data).remove();
		})
	}
	
	/* Function ============ */
	return {
		init:function(){
			handleMenubar();
			handlelangPicker();
			handleThemeVersion();
			handleToggleButton();
			handleLikeButton();
			handleShowPass();
			handleIsFixed();
			handleChatBox();
			handleLightgallery();
			handleCustomFileInput();
            handleGoBack();
            handleImageSelect();
            handlePWAModal();
            handleSearch();
            handleRemoveClass();
			handleTabSlide();
			handleOTP();
			handleTagRemove();
			handleTouchSpin();
			handleColorFilter();
			onePageLayout();
			handleDropdowneffect();
			handleChangeText();
			handleTagSlider();
			handleEnterAnimate();
			handleTextChar();
		},

		load:function(){
			handlePreloader();
			handleSelectpicker();
			appNavigateShare();
		},
		
		resize:function(){
			screenWidth = $( window ).width();
			handleTabSlide();
		},
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	Glower.init();
	
	$('[data-bs-toggle="popover"]').popover();
    $('.theme-dark .custom-switch input').prop('checked', true);
	
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
    jQuery('.loader').removeClass('animated');
	Glower.load();
	setTimeout(function(){
		jQuery('#splashscreen').addClass('active');
	 	jQuery('#splashscreen').fadeOut(2000);
	}, 2000);
	
    $('.theme-dark .custom-switch input').prop('checked', true).addClass('active');
	
});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	
	Glower.resize();
});
/*  Window Resize END */	