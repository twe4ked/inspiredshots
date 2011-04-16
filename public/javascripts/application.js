jQuery(document).ready(function($) {
  
  $(window).infinitescroll({
    url: window.location.href,
    appendTo: '#feed',
    triggerAt: 620,
  });
  
  var feed = $('#feed');
  
  // display loading animation
  feed.bind('infinitescroll.beforesend', function() {
    $(this).append('<li class="loading"></li>');
  });
  
  // hide loading animation
  feed.bind('infinitescroll.finish', function() {
    $('li.loading').fadeOut('fast');
  });
});
