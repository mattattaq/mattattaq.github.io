import $ from 'jquery';
window.$ = $;

$(document).ready(function () {
  console.log("js Fired!");

  // Panel Animation
  const $panel = $('.panel');
  if ($panel.length > 0) {
    $panel.hover(
      function () {
        console.log("hover Fired");
        $(this).css("margin-left", "10px");
      },
      function () {
        $(this).css("margin-left", "0px");
      }
    );
  }

  // Coin Animation
  const $coin = $('#coin');
  if ($coin.length > 0) {
    const spinArray = [
      'animation900', 'animation1080', 'animation1260',
      'animation1440', 'animation1620', 'animation1800',
      'animation1980', 'animation2160'
    ];

    function getSpin() {
      return spinArray[Math.floor(Math.random() * spinArray.length)];
    }

    $coin.on('click', function () {
      $(this).removeClass();

      setTimeout(() => {
        $(this).addClass(getSpin());
      }, 100);
    });
  }

  // Smooth Scrolling
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    if ($(target).length > 0) {
      $("html, body").animate({
        scrollTop: $(target).offset().top
      }, 1000);
    }
  });

  if ($(window.location.hash).length > 0) {
    const target = window.location.hash;
    if ($(target).length > 0) {
      $("html, body").animate({
        scrollTop: $(target).offset().top
      }, 1000);
    }
  }

  // Toggle sticky "to-top" button
  const $toTop = $('#to-top');
  if ($toTop.length > 0) {
    const elementPosition = $toTop.offset();

    $(window).scroll(function () {
      if ($(window).scrollTop() > elementPosition.top) {
        $toTop.css({
          position: 'fixed',
          bottom: '0',
          visibility: 'visible'
        });
      } else {
        $toTop.css({
          position: 'absolute',
          visibility: 'hidden'
        });
      }
    });
  }
});
