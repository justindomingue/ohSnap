/**
 * == OhSnap!.js ==
 * A simple jQuery/Zepto notification library designed to be used in mobile apps
 *
 * author: Justin Domingue
 * date: september 18, 2015
 * version: 1.0.0
 * copyright - nice copyright over here
 */

/* Shows a toast on the page
 * Params:
 *  text: text to show
 *  options: object that can override the following options
 *    color: alert will have class 'alert-color'. Default null
 *    icon: class of the icon to show before the alert. Default null
 *    duration: duration of the notification in ms. Default 5000ms
 *    container-id: id of the alert container. Default 'ohsnap'
 *    fade-duration: duration of the fade in/out of the alerts. Default 'fast'
*/
function ohSnap(text, options) {
  var defaultOptions = {
    'color'       : null,     // color is  CSS class `alert-color`
    'icon'        : null,     // class of the icon to show before the alert text
    'duration'    : '5000',   // duration of the notification in ms
    'container-id': 'ohsnap', // id of the alert container
    'fade-duration': 'fast',  // duration of the fade in/out of the alerts. fast, slow or integer in ms
  }

  options = (typeof options == 'object') ? $.extend(defaultOptions, options) : defaultOptions;

  var $container = $('#'+options['container-id']),
    icon_markup = "",
    color_markup = "";

    if (options.icon) {
        icon_markup = "<span class='" + options.icon + "'></span> ";
    }

    if (options.color) {
      color_markup = 'alert-' + options.color;
    }

    // Generate the HTML
    html = $('<div class="alert ' + color_markup + '">' + icon_markup + text + '</div>').fadeIn(options['fade-duration']);

    // Append the label to the container
    $container.append(html);

    // Remove the notification on click
    html.on('click', function() {
        ohSnapX($(this));
    });

    // After 'duration' seconds, the animation fades out
    setTimeout(function() {
        ohSnapX(html);
    }, options.duration);
}

/* Removes a toast from the page
 * params:
 *    Called without arguments, the function removes all alerts
 *    element: a jQuery object to remove
 *    options:
 *      duration: duration of the alert fade out - 'fast', 'slow' or time in ms. Default 'fast'
 */
function ohSnapX(element, options) {
    defaultOptions = {
      'duration': 'fast'
    }

    options = (typeof options == 'object') ? $.extend(defaultOptions, options) : defaultOptions;

    if (typeof element !== "undefined") {
        element.fadeOut(options.duration, function() {
            $(this).remove();
        });
    } else {
        $('.alert').fadeOut(options.duration, function() {
            $(this).remove();
        });
    }
}
