jQuery(document).ready(function($) {
  
  $(window).infinitescroll({
    url: window.location.href,
    appendTo: '#feed',
    triggerAt: 620,
    fade: 'slow'
  });
  
  var feed = $('#feed');
  feed.hide();
  feed.delay(2000).fadeIn('slow');
  // display loading animation
  feed.bind('infinitescroll.beforesend', function() {
    $(this).append('<li class="loading"></li>');
  });
  
  // hide loading animation
  feed.bind('infinitescroll.finish', function() {
    $('li.loading').fadeOut('slow');
    $('li.loading').slideUp('slow');
  });
});
