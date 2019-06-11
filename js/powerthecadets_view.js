(function ($) {
	$(document).ready(function() {
    // use qtip plugin to create the tooltip.
    $('div.ptc-meal-button').qtip({
      hide: {
        // Retain the tooltip as long as mouse pointer is on element OR tooltip.
        fixed: true,
        // Wait before hiding tooltip.
        delay: 300
      },
      position: {
        my: 'top left',
        at: 'bottom center'
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
            msg = '<span class="ptc-tip-meal-available">This meal is available. <a href="/civicrm/contribute/transact?reset=1&id=96&ptc_nid=' + nid + '&ptc_meal_id=' + meal_id + '" class="ptc-meal-available-link">Click here to sponsor '+ meal +' on ' + dateString + '!</a></span>'
          }
          else {
            var sponsor_name = el.siblings('span.ptc-donor-display-value').html();
            var sponsor_message = el.siblings('span.ptc-donor-message-value').html();
            msg = '<span class="ptc-tip-meal-sponsored-thanks">Thanks to ' + sponsor_name + ' for sponsoring '+ meal +' on ' + dateString + '!</span> <span class="ptc-meal-sponsored"><span class="ptc-meal-sponsored-message-label">Message:</span> <span class="ptc-meal-sponsored-message-value">' + sponsor_message +'</span>';
          }
          return msg;
        },
      }
    });
	});
})(jQuery);