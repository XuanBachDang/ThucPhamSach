// ---------------- Check size web ----------------
(function($, viewport){
    $(document).ready(function(){
      // ---------------- Reload page change tablet,mobile size ----------------
      // Init var
      var oldWidthWindow = $(window).width();
      var changeWindowWidth = false;

      // Check resize width
      $(window).resize(function(){
        if($(window).width() != oldWidthWindow){
          changeWindowWidth = true;
          oldWidthWindow = $(window).width();
        }
      });

      // Run reload
        $(window).resize(
          viewport.changed(function(){
            if(changeWindowWidth == true){
              // Reload page with tablet,mobile change vertical or horizontal
                if( viewport.is('<=md') ) {
                    location.reload();
                }
            }
          })
      );
      // ---------------- /END Reload page change tablet,mobile size ----------------
    });
})(jQuery, ResponsiveBootstrapToolkit);

// ---------------- Balance Height ----------------
function balanceHeight(domElement){
    var maxHeight = 0;
    // Reset height
    $(domElement).height("auto");
    // Get max height to balance
    $(domElement).each(function(){
        if($(this).height() > maxHeight){
            maxHeight = $(this).height();
        }
    });
    // Set Height element
    $(domElement).height(maxHeight);
}

$(document).ready(function(){
  // ---------------- Min menu page ---------------- 
  $('#min-menu-page li.have-child > a').click(function(){
    $(this).parent().find('ul:first').slideToggle(function(){
            if(!$(this).is(":hidden")){ // Open
                $(this).parent('.have-child').addClass('expand');
            }else{
                $(this).parent('.have-child').removeClass('expand');
            }
        });

    return false;
  });


  // ---------------- Filter ---------------- 
  $('#filter header .expand').click(function(){
    $('#filter main').slideToggle(300);
  });
});

$(document).ready(function(){
  // ---------------- Min menu page ---------------- 
  $('#menu-cate li.have-child > a').click(function(){
    $(this).parent().find('ul:first').slideToggle(function(){
            if(!$(this).is(":hidden")){ // Open
                $(this).parent('.have-child').addClass('expand');
            }else{
                $(this).parent('.have-child').removeClass('expand');
            }
        });
    return false;
  });
  $('#list-cate li.have-child > a').dblclick(function(){
      var href = $(this).attr('href');
      window.location = href;
    });
   $('#menu-cate-tablet li.have-child > a').click(function(){
    $(this).parent().find('ul:first').slideToggle(function(){
            if(!$(this).is(":hidden")){ // Open
                $(this).parent('.have-child').addClass('expand');
            }else{
                $(this).parent('.have-child').removeClass('expand');
            }
        });
    return false;
  });
   $('#list-cate-tablet li.have-child > a').dblclick(function(){
      var href = $(this).attr('href');
      window.location = href;
    });
  // $('#menu-cate li.have-child > a').click(function(){
  //   $(".sidebar-mobi .m-extend-active.m-extend-overlay").css("visibility", "hidden").css("opacity", "1");
  // });

  // ---------------- Filter ---------------- 
  $('#filter header .expand').click(function(){
    $('#filter main').slideToggle(300);
  });
});

$(document).ready(function(){
  // ---------------- Min menu page ---------------- 
  $('#min-menu-tab li.have-child > a').click(function(){
    $(this).parent().find('ul:first').slideToggle(function(){
            if(!$(this).is(":hidden")){ // Open
                $(this).parent('.have-child').addClass('expand');
            }else{
                $(this).parent('.have-child').removeClass('expand');
            }
        });

    return false;
  });


  // ---------------- Filter ---------------- 
  $('#filter header .expand').click(function(){
    $('#filter main').slideToggle(300);
  });
});

$(document).ready(function(){
  // ---------------- Min menu page ---------------- 
  $('#menu-role .list-cate li.have-child > a').click(function(){
    $(this).parent().parent().find('ul').slideUp();

    if($(this).parent('.have-child').hasClass('expand')){
      $(this).parent().find('ul:first').slideUp();
      $(this).parent('.have-child').removeClass('expand');
    }else{
      $(this).parent().find('ul:first').slideDown();
      $(this).parent('.have-child').addClass('expand');
    }
    return false;
  });


  // ---------------- Filter ---------------- 
  $('#filter header .expand').click(function(){
    $('#filter main').slideToggle(300);
  });
});

$(document).ready(function(){
  // ---------------- Min menu page ---------------- 
    $('#list-cat-sidebar li.have-child > a').dblclick(function(){
      window.open($(this).attr('href'));
    });
    // $('#list-cate-tablet li.have-child > a').dblclick(function(){
    //   var href = $(this).attr('href');
    //   window.location = href;
    // });
  


  // ---------------- Filter ---------------- 
  $('#filter header .expand').click(function(){
    $('#filter main').slideToggle(300);
  });
});
  // ---------------- Footer link ---------------- 
$("#btn-search").click(function(){
      $(".form-search").slideToggle();
  });
$(document).ready(function(){
  $('#menu-role #cate-title').click(function() {
    $('.list-cate').slideToggle();
    $('.slider-product .list-cate').addClass('display-block')
  }); 

  if (screen.width < 960) {
    $('.slider-product .list-cate').removeClass('display-block');
    $('.slider-product #cate-title').click(function() {
      $('.list-cate').slideToggle();
    }); 
  }
  else {

      
  }
});
$(".owl-list-product").owlCarousel({
  // items: 3,
  navigation: true,
  pagination : false,
  autoPlay: 4000,
  slideSpeed : 3000,
  paginationSpeed : 2000,
    itemsCustom : [
    [0, 2],
    [450, 2],
    [600, 3],
    [700, 3],
    [1000, 4],
    [1100, 4],
    [1200, 3],
      ],
});
$(".owl-list-news").owlCarousel({
  // items: 1,
  navigation: true,
  pagination : false,
  autoplay: 4000,
  slideSpeed : 3000,
  paginationSpeed : 2000,
  singleItem: true,
  itemsCustom : [
    [0, 2],
    [450, 2],
    [600, 3],
    [700, 3],
    [1000, 4],
    [1100, 4],
    [1200, 3],
      ],
});
$(".owl-list-cate").owlCarousel({
  items: 4,
  navigation: true,
  pagination : true,
  autoplay: 1000,
  slideSpeed : 3000,
  paginationSpeed : 2000,
    itemsCustom : [
    [0, 2],
    [450, 3],
    [600, 3],
    [700, 2],
    [1000, 2],
    [1100, 2],
      ],
});
$("#owl-list-highlight").owlCarousel({
  items: 4,
  navigation: true,
  pagination : false,
  autoplay: 4000,
  slideSpeed : 3000,
  paginationSpeed : 2000,
    itemsCustom : [
    [0, 2],
    [450, 2],
    [600, 3],
    [700, 3],
    [1000, 4],
    [1100, 4],
      ],
});
$(".owl-list-product-news").owlCarousel({
    items: 2,
    navigation: false,
    pagination : false,
    autoPlay: 4000,
    itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 2],
        [700, 2],
        [1000, 2],
        [1100, 2],
    ],
});

$(".owl-list-news-relate").owlCarousel({
  items: 1,
  navigation: true,
  pagination : false,
  autoPlay: 4000,
});

$(document).ready(function(){
    var url = window.location;                        
    $("ul.lv1 li a").filter(function(){
           return this.href == url;
    }).parent().addClass('active');
    
    $("ul.lv2 li > a").filter(function(){
           return this.href == url;
    }).parents().addClass('active');
    $('.main-menu').parents().removeClass('active');

    
});

$(document).ready(function(){
    var url = window.location;                        
    $("ul.lv1 li a").filter(function(){
           return this.href == url;
    }).parent().addClass('active');
    
    $("ul.lv2 li > a").filter(function(){
           return this.href == url;
    }).parents().addClass('active');
    $('.main-menu').parents().removeClass('active');

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

    
});


