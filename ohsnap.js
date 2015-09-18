/**
 * == OhSnap!.js ==
 * A simple jQuery/Zepto notification library designed to be used in mobile apps
 *
 * author: Justin Domingue
 * date: september 5, 2013
 * version: 0.1.3
 * copyright - nice copyright over here
 */

/* Shows a toast on the page
 * Params:
 *  text: text to show
 *  color: color of the toast. one of red, green, blue, orange, yellow or custom
*/
function ohSnap(text, color, icon) {
    var icon_markup = "",
        html,
        time = '5000',
        $container = $('#ohsnap');

    if (icon) {
        icon_markup = "<span class='" + icon + "'></span> ";
    }

    // Generate the HTML
    html = $('<div class="alert alert-' + color + '">' + icon_markup + text + '</div>').fadeIn('fast');

    // Append the label to the container
    $container.append(html);

    // Remove the notification on click
    html.on('click', function() {
        ohSnapX($(this));
    });

    // After 'time' seconds, the animation fades out
    setTimeout(function() {
        ohSnapX(html);
    }, time);
}

function ohSnapX(element) {
    // Called without argument, the function removes all alerts
    // element must be a jQuery object

    if (typeof element !== "undefined") {
        element.fadeOut('fast', function() {
            $(this).remove();
        });
    } else {
        $('.alert').fadeOut('fast', function() {
            $(this).remove();
        });
    }
}
