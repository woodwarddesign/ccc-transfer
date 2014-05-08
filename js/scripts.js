$(document).ready(function() {

  $('body').addClass('js');
  // toggle menu

  // the toggle menu doesn't allow the first element to act as a link - it's instead a toggle.
  // the bit below copies the parent link and adds it to the child ul so that the page is accessible
  var viewport = $(window).width();
  if (viewport < 960 ) {
    $links = $('li.menuparent').children('a:first-child');
    if ($links.length > 0){
      $links.each(function(i,link) {$(link).next().prepend($('<li></li>').append($(link).clone()))
      })
    }
  }

  function toggleMenu() {
    //get window width
   var viewport = $(window).width();
   if (viewport < 960 ) {

      // add the toggle classes
		  var $menu = $('.region-menu .menu'),
  	  $menulink = $('.menu-link'),
  	  $menuTrigger = $('.menuparent > a');

  		$menulink.click(function(e) {
  			e.preventDefault();
  			$menulink.toggleClass('active');
  			$menu.toggleClass('active');
  		});

  		$menuTrigger.click(function(e) {
  			e.preventDefault();
  			var $this = $(this);
  			$this.toggleClass('active').next('ul').toggleClass('active');
  		});
    }
  }

    toggleMenu();

    $(window).resize(function() {
      toggleMenu();
    });

    // mix it up plugin
    $(function(){
      $('.view-school-search').mixItUp();
    });

    $(function(){
	     $('.scrollable').vertiscroll();
     });

		});
