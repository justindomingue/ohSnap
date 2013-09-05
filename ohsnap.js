/**
 * == OhSnap!.js ==
 * A simple notification jQuery/Zepto library designed to be used in mobile apps
 *
 * author: Justin Domingue
 * date: september 4, 2013
 * version: 0.1
 * copyright - nice copyright over here
 */

function ohSnap(text, color) {
  // text : message to show (HTML tag allowed)
  // Available colors : red, green, blue, orange, yellow --- add your own!
  // container : TODO
  
  // Set some variables
  var animation = 'animated bounceInUp';
  var time = '5000';
  
  // Remove any previous notificaiton
  ohSnapX();
  
  // Generate the HTML
  var html = '<div class="' + animation + ' alert alert-' + color + '">' + text + '</div>';
  
  // Append the label to the container
  $('#content').append(html)
  
  // Set a timeout to hide the animation
  setTimeout(function () {
    ohSnapX();
  }, time);
}

function ohSnapX() {
  // Removes the alert from the page
  $('.alert').addClass('bounceOutDown');
}

// Remove the notification on click
// TODO: change click to tap

$('.alert').live('click', function() { 
  ohSnapX();
});