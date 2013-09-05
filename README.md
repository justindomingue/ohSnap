OhSnap!.js
=========

> Oh Snap ! The server crashed... Try again later :D

A simple notification jQuery/Zepto library designed to be used in mobile apps

Installation
------------

Just link the js file around your body end tag :

    <script src="js/ohsnap.js"></script>

The library relies on [animate.css](http://daneden.me/animate/) for the in/out animations.

Furthermore, OhSnap!.js creates a div with classes `.alert .alert-color` so you will want to have something like :

    /* ALERTS */
    /* inspired by Twitter Bootstrap */
   
    .alert {
      padding: 15px;
      margin-bottom: 20px;
      border: 1px solid #eed3d7;
      border-radius: 4px;
      position: absolute;
      bottom: 0px;
      right: 21px;
    }

    .alert-red {
      color: white;
      background-color: #DA4453;
    }
    .alert-green {
      color: white;
      background-color: #37BC9B;
    }
    .alert-blue {
      color: white;
      background-color: #4A89DC;
    }
    .alert-yellow {
      color: white;
      background-color: #F6BB42;
    }
    .alert-orange {
      color:white;
      background-color: #E9573F;
    }
Usage
-----

To call a notification, use `ohSnap(text, color)`. Examples :

    ohSnap('Oh Snap! I cannot process your card...', 'red');
    ohSnap('Yeeaahh! You are now registered.', 'green');

To remove a notification, use `ohSnapX()`.

Alerts are automatically bound to a click event (internally, `ohSnapX()` is called when the alert is clicked).

By **Justin Domingue**
