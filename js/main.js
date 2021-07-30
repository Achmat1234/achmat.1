/* Isotope Filter
  -------------------------------------------------------*/
  var $portfolioFilter = $('#project-grid, #masonry-grid');
  $('.project-filter').on('click', 'a', function (e) {
      e.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $portfolioFilter.isotope({ filter: filterValue });
      $('.project-filter a').removeClass('active');
      $(this).closest('a').addClass('active');
  });
  
  
  /* Portfolio
  -------------------------------------------------------*/
  var $portfolio = $('#project-grid');
  $portfolio.imagesLoaded(function () {
      $portfolio.isotope({
          itemSelector: '.project',
          layoutMode: 'fitRows',
          percentPosition: true
      });
  });
  
  
  /* Masonry
  -------------------------------------------------------*/
  
  function initMasonry() {
  
      var $masonry = $('#masonry-grid');
      $masonry.imagesLoaded(function () {
          $masonry.isotope({
              itemSelector: '.project',
              layoutMode: 'masonry',
              percentPosition: true,
              masonry: {
                  columnWidth: '.isotope-small'
              }
          });
      });
  }
  
  