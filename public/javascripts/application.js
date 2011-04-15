jQuery(document).ready(function($) {
  $(window).infinitescroll({
    url: window.location.href,
    appendTo: 'ul'
  });

  $('ul').bind('infinitescroll.beforesend', function(e) {
    console.log('beforesend');
    $(this).append('<li class="loading"></li>');
  });

  $('ul').bind('infinitescroll.finish', function() {
    console.log('finish');
    $('li.loading').hide();
  });
});
