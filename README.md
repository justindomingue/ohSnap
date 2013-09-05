OhSnap!.js
=========

A simple notification jQuery/Zepto library designed to be used in mobile apps

Installation
------------

Just link the js file around your body end tag :

    <script src="js/ohsnap.js"></script>

Usage
-----

To call a notification, use `ohSnap(text, color)`. Examples :

    ohSnap('Oh Snap! I cannot process your card...', 'red');
    ohSnap('Yeeaahh! You are now registered.', 'green');

To remove a notification, use `ohSnapX()`.

Alerts are automatically bound to a click event (internally, `ohSnapX()` is called when the alert is clicked).

By **Justin Domingue**
