/* INFORMATION BUBBLES HIDE */
	$(document).ready( function() {
		$(".whide").click( function() {
			$(".warning").fadeOut(300);
		});
		
		$(".nhide").click( function() {
			$(".notice").fadeOut(300);
		});
		
		$(".nnhide").click( function() {
			$(".note").fadeOut(300);
		});
	});
	

/* COUNTDOWN SETTINGS */
$(document).ready( function() {
    $(function() {
    var endDate = "August 5, 2014 15:03:25";

    $('.countdown.countdown_style').countdown({
        date: endDate,
        render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.years, 4) + " <span>years</span></div><div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
        }
    	});
    });
});
		
/* PORTFOLIO SETTINGS */
$(document).ready( function() {
$(function () {
		
		var filterList = {
		
			init: function () {
				$('#portfoliolist').mixitup({
					targetSelector: '.portfolio',
					filterSelector: '.filter',
					effects: ['fade'],
					easing: 'snap',
					onMixEnd: filterList.hoverEffect()
				});				
			},
			
			hoverEffect: function () {
			
				$('#portfoliolist .portfolio').hover(
					function () {
						$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
						$(this).find('img').stop().animate({top: 0}, 500, 'easeOutQuad');				
					},
					function () {
						$(this).find('.label').stop().animate({bottom: -50}, 200, 'easeInQuad');
						$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
					}		
				);				
			}
		};
		filterList.init();
	});	
});	
