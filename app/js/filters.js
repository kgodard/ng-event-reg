'use strict';

/* Filters */

eventsApp.filter('durations', function() {
  return function(duration) {
    switch(duration) {
      case 1:
        return '<i class="icon-time"></i> Half Hour';
      case 2:
        return '<i class="icon-time"></i> Full Hour';
      case 3:
        return '<i class="icon-time"></i> Half Day';
      case 4:
        return '<i class="icon-time"></i> Full Day';
    }
  }
})
