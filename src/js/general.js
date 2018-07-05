let lastScrollTop = 0;

$j(window)
    .on('scroll', function() {

        let pos   = $j(this).scrollTop(),
            $body = $j('body');

        if (pos > 100) {
            $body.addClass('moving');

            if (pos > lastScrollTop) {
                if(!$body.hasClass('moving--down')) {
                    $body.addClass('moving--down');
                }
            } else {
                $body.removeClass('moving--down');
            }

            lastScrollTop = pos;

        } else {
            $body.removeClass('moving')
        }
    });


$j(document)
    .ready(function () {

        let $myCart           = $j('.mycart:not(.mycart--empty)'),
            $menuCenter       = $j('.menu-lane__center'),
            $headerContainer  = $j('.header-container'),
            $searchInput      = $j('.search__input'),
            $jointsalesRow    = $j('.jointsales__row'),
            $seeMore          = $j('.see-more'),
            $priceClose       = $j('.price-floater__close'),
            $parent0          = $j('.categories .li--0.parent'),
            $menuBtn          = $j('.menu--mobile__btn'),
            $menuEnv          = $j('.menu--mobile__env'),
            $btnBack          = $j('.btn--back'),
            $tabsList         = $j('.tabs-list'),
            $tabsItem         = $j('.tabs-list__item'),
            $categoryTitle    = $j('.category-title, .search-title'),
            $filtersList      = $j('.filters__list'),
            $filtersFilter    = $j('.filters__filter'),
            $showcaseTimer    = $j('.showcase-timer');


          if($showcaseTimer.length > 0) {

              $j.each($showcaseTimer, function(){
                  let $this = $j(this);

                  let countDownDate = new Date($j(this).data('to')).getTime();

                  setInterval(function() {

                      let now      = new Date().getTime();
                      let distance = countDownDate - now;

                      let days    = Math.floor(distance / (1000 * 60 * 60 * 24));
                      let hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                      $this.find('.showcase-timer__value--days').text((days < 10) ? `0${days}` : days);
                      $this.find('.showcase-timer__value--hours').text((hours < 10) ? `0${hours}` : hours);
                      $this.find('.showcase-timer__value--min').text((minutes < 10) ? `0${minutes}` : minutes);
                      $this.find('.showcase-timer__value--sec').text((seconds < 10) ? `0${seconds}` : seconds);

                  }, 1000);

              });

          }


          if($filtersList.length > 0) {
            $j('.breadcrumb').before($filtersList);

            $filtersFilter.on('click', function(e){
                if($j(e.target).hasClass('filters__filter') || $j(e.target).hasClass('filters__name')) {
                    if($j(this).hasClass('filters__filter--on')) {
                        $j(this).removeClass('filters__filter--on');
                    } else {
                      $filtersFilter.removeClass('filters__filter--on');
                      $j(this).toggleClass('filters__filter--on');
                    }

                }
            });
          }


          if($categoryTitle.length > 0) {
              $j('.main-container').prepend($categoryTitle);

              if($j('.main-container > .banner').length > 0) {
                  $categoryTitle.addClass('banner-on');
              }
          }


          if($tabsList.length > 0) {

              let target = '',
                  $content;

              $tabsItem.on('click', function(){
                  target = $j(this).data('target');
                  $content = $j(this).parents('.tabs-list').siblings('.content-list');

                  $j(this).parents('.tabs-list').find('.tabs-list__item').removeClass('tabs-list__item--active');
                  $j(this).addClass('tabs-list__item--active');

                  $content.find('.content-list__item').removeClass('content-list__item--active');
                  $content.find(`.content-list__item--${target}`).addClass('content-list__item--active');

              });

          }

        if($menuCenter.length > 0) {

            $menuCenter.on('mouseenter', function(){
                $headerContainer.addClass('mask--on');
            });

            $menuCenter.on('mouseleave', function(){
                $headerContainer.removeClass('mask--on');
            });
        }

        if($searchInput.length > 0) {
            $searchInput.on('focus', function() {
                $j(this).parents('.search').addClass('search--on');
            });

            $searchInput.on('blur', function() {
                $j(this).parents('.search').removeClass('search--on');
            });
        }

        if($jointsalesRow.length > 0) {
            let $row;

            $j.each($jointsalesRow, function() {
                $j(this).append('<div class="jointsales__values"></div>');
            });


            $j.each($j('.jointsales__values'), function() {
                $row = $j(this).parents('.jointsales__row');

                $row.find('.comprando-junto').after($row.find('.jointsales__payments'));
                $j(this).append($row.find('.jointsales__totals'));
                $j(this).append($row.find('.jointsales__action'));
            });
        }

        if($seeMore.length > 0) {
            $seeMore.on('click', function(){
                $j('html, body').animate({scrollTop: $j('.product__description').offset().top - 100}, 500);
            });
        }

        if($priceClose.length > 0) {
            $priceClose.on('click', function(){
                if($j(this).parents('.price-floater').hasClass('price-floater--closed')) {
                    $j(this).parents('.price-floater').removeClass('price-floater--closed')
                } else {
                    $j(this).parents('.price-floater').addClass('price-floater--closed')
                }

            });
        }

        if($parent0.length > 0) {
            $parent0.on('click', function(e){
                if($j(window).width() < 1200) {

                    if($j(e.target).hasClass('li--0')) {
                        if($j(this).hasClass('li--0open')) {
                            $j(this).removeClass('li--0open');
                            $j(this).find('.box--1').slideUp(150);
                        } else {
                            $j(this).addClass('li--0open');
                            $j(this).find('.box--1').slideDown(150);
                        }
                    }

                }
            });
        }

        if($menuBtn.length > 0) {
            $menuBtn.on('click', function() {
                if($j(window).width() < 1200) {
                    $j('body').addClass('modal--on');
                    $menuEnv.addClass('modal--left');
                }
            });
        }


        if($btnBack.length > 0) {
            $btnBack.on('click', function() {
                if($j(window).width() < 1200) {
                    $j('body').removeClass('modal--on');
                    $j(this).parent().removeClass('modal--left');
                    $j(this).parent().removeClass('modal--right');
                }
            });
        }

    })
    .on('resizeStop', function(e){
        // Safe window.resize
        // Dispara após o último movimento de resize parar no navegador.
    })
    .on('scrollStop', function(e){
        if($j('.price-floater').length > 0) {

            if($j(window).scrollTop() > ($j('.product-essential').offset().top + ($j('.product-essential').height() / 2)) && $j(window).scrollTop() < $j('.footer-container').offset().top - 300) {
                $j('.price-floater').addClass('price-floater--on');
            } else {
                $j('.price-floater').removeClass('price-floater--on');
            }

        }
    })

    .on('ajaxComplete', function(resp){
        // Safe ajax completed
        // Dispara após completar com sucesso qualquer requisição Ajax, e trás a resposta do Ajax.
    });
