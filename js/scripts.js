$(document).ready(function() {

  // mix it up plugin
  $(function(){
    $('.view-school-search').mixItUp();
  });
  //vertiscroll plugin
  $(function(){
     $('.scrollable').vertiscroll();
   });

  //set up variable for mobile. set this to keep track of width so functions are run only on transition from
  // moble to desktop and vice versa. if this isn't done, functions will fire constantly as window is resized
  var mobile = 0;

  // determine if width is 'mobile'
  function setMobileValue() {
    var viewport = $(window).width();
    if (viewport < 970 && mobile === 0 ) {
      mobile = 1;
      editMobileMenu();
      toggleMenu();
    }
    else if (viewport > 970 && mobile === 1 ) {
      mobile = 0;
    }
  }

  setMobileValue();

  $('body').addClass('js');

  // toggle menu

  // the toggle menu doesn't allow the first element to act as a link - it's instead a toggle.
  // the bit below copies the parent link and adds it to the child ul so that the page is accessible
  function editMobileMenu() {
      $links = $('li.menuparent').children('a:first-child');
      if ($links.length > 0){
        $links.each(function(i,link) {$(link).next().prepend($('<li></li>').append($(link).clone()))
        })
      }
  }

  // equal height columns
 //  function equalHeight(group) {
 //      if (mobile ===0) {
 //     tallest = 0;
 //     group.each(function() {
 //        thisHeight = $(this).height();
 //        if(thisHeight > tallest) {
 //           tallest = thisHeight;
 //        }
 //     });
 //     group.height(tallest);
 //   }
 //   else {
 //     $(".column").css('height', 'auto');
 //   }
 // }

// equalHeight($(".column"));

  function toggleMenu() {
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

    $(window).resize(function() {
      setMobileValue();
      //equalHeight($(".column"));
    });

		});
