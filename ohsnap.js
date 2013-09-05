/**
 * == OhSnap!.js ==
 * A simple notification jQuery/Zepto library designed to be used in mobile apps
 *
 * author: Justin Domingue
 * date: september 5, 2013
 * version: 0.1.2
 * copyright - nice copyright over here
 */

function ohSnap(text, color) {
  // text : message to show (HTML tag allowed)
  // Available colors : red, green, blue, orange, yellow --- add your own!
  // container : TODO
  
  // Set some variables
  var in_animation = 'bounceInUp';
  var time = '5000';
  
  // Remove any previous notificaiton
  ohSnapX();
  
  // Generate the HTML
  var html = '<div class="animated ' + in_animation + ' alert alert-' + color + '">' + text + '</div>';
  
  // Append the label to the container
  $('#content').append(html)
  
  // After 'time' seconds, the animation fades out
  setTimeout(function () {
    ohSnapX();
  }, time);
}

function ohSnapX() {
  
  var out_animation = 'bounceOutDown'
  
  // Removes the alert from the page
  $('.alert').addClass(out_animation);
}

// Remove the notification on click
// TODO: change click to tap

$('.alert').live('click', function() { 
  ohSnapX();
});
