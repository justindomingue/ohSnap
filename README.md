OhSnap!.js
=========

> Oh Snap ! The server crashed... Try again later :D

A simple jQuery/Zepto notification library designed to be used in mobile apps

Check out this [demo page](http://justindomingue.github.io/ohSnap/ "Demo")

## Installation

Dependency: [jQuery](http://jquery.com) or [Zepto](http://zeptojs.com).

Download ohSnap.js:
- from [Github](https://raw.githubusercontent.com/justindomingue/ohSnap/master/ohsnap.js)
- with Bower: `bower install oh-snap`.

Add a `div.ohsnap` which will contain the alerts :

    <div id="ohsnap"></div>

Usage
-----

To call a notification, use `ohSnap(text, options)`. Examples :

    ohSnap('Succefully created your account');
    ohSnap('Oh Snap! I cannot process your card...', {color: 'red', icon: 'icon-alert'}); // color matches CSS class `.alert.color`
    ohSnap('Yeeaahh! You are now registered.', {time: '2000'} // time is ms

To remove a notification, use `ohSnapX()`.

Alerts are automatically bound to a click event (internally, `ohSnapX()` is called when the alert is clicked).

### Styling

Furthermore, ohSnap.js creates a div with classes `.alert .alert-color` so you will want to have something like :

    /* Oh Snap */

    #ohsnap {
      position: fixed;
      bottom: 5px;
      right:5px;
      margin-left: 5px;
      z-index:99;
    }

    /* ALERTS */
    /* inspired by Twitter Bootstrap */
    
    .alert {
      text-align: right;
      margin-top: 10px;
      padding: 15px;
      border: 1px solid #eed3d7;
      border-radius: 4px;
      float: right;
      clear: right;
      background-color: white;
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


By **Justin Domingue**
