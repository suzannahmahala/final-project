// with jQuery

$('.menu a').on('click', function(e){
  e.preventDefault();
  var target = $(this).attr('href');
  var scrollPosition = $(target).offset().top;
  $('html, body').animate({
    scrollTop: scrollPosition
  }, 1000);
})

// Add and remove active state on country filter

$("a.category-item").click(function(){
	$("a.category-item.active").removeClass ("active");
	$(this).addClass("active");
});

// photo grid

var $grid = $('#grid').isotope({
  itemSelector: '.country-item',
  masonry: {
    stagger: 30,
    percentPosition: true
  }

});


$('#filter a').on('click', function(e) {
	e.preventDefault();
  var filterValue = $( this ).attr('id');

  if($('.' + filterValue).length != 0){
  	$grid.isotope({ filter: '.'+filterValue });
  }

 	else {
 		$grid.isotope({ filter: '*'});
 	} 
  
});

// animate poetry divs

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');



