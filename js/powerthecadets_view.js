(function ($) {
  $(document).ready(function() {
    // use qtip plugin to create the tooltip.
    var qtipPosition = {
      my: 'top left',
      at: 'bottom center',
      viewport: $(window)
    };
    var qtipParams = {
      hide: {
        // Retain the tooltip as long as mouse pointer is on element OR tooltip.
        fixed: true,
        // Wait before hiding tooltip.
        delay: 300
      },
      position: qtipPosition,
      style: {
        classes: 'qtip-bootstrap',
        def: false
      },
      content: {
        text: function(event, api) {
          var msg = "";
          var el = $(this);
          var meal = $(el).attr('data-ptc-meal');
          var meal_id = $(el).attr('data-ptc-meal-id');
          var nid = $(el).attr('data-ptc-nid');
          var dateString = $(el).attr('data-ptc-date');
          if (el.hasClass('ptc-meal-button-available')) {
            msg = '<span class="ptc-tip-meal-available"><h2>This meal is available.</h2> <h4><a href="/civicrm/contribute/transact?reset=1&id=96&ptc_nid=' + nid + '&ptc_meal_id=' + meal_id + '" class="ptc-meal-available-link">Click here to sponsor '+ meal +' on ' + dateString + '!</a></span></h4>'
          }
          else {
            var sponsor_name = el.siblings('span.ptc-donor-display-value').html();
            var sponsor_message = el.siblings('span.ptc-donor-message-value').html();
            msg = '<h2><span class="ptc-tip-meal-sponsored-thanks">Thanks to ' + sponsor_name + ' for sponsoring '+ meal +' on ' + dateString + '!</span></h2><h4><span class="ptc-meal-sponsored"><span class="ptc-meal-sponsored-message-label">Message:</br></span> <span class="ptc-meal-sponsored-message-value">' + sponsor_message +'</span></h4>';
          }
          return msg;
        },
      }
    };
    $('div.ptc-meal-button').qtip(qtipParams);
  });
})(jQuery);
