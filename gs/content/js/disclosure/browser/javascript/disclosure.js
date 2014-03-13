// Copyright © 2012, 2013, 2014 OnlineGroups.net and Contributors.
// All Rights Reserved.
//
// This software is subject to the provisions of the Zope Public License,
// Version 2.1 (ZPL). http://groupserver.org/downloads/license/
//
// THIS SOFTWARE IS PROVIDED "AS IS" AND ANY AND ALL EXPRESS OR IMPLIED
// WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF TITLE, MERCHANTABILITY, AGAINST INFRINGEMENT, AND
// FITNESS FOR A PARTICULAR PURPOSE.
jQuery.noConflict();

function GSDisclosureButton() {
    // GroupServer Disclosure Button Module.

    // Private variables
    var hiddenArrow="\u25b6", 
        shownArrow="\u25bc", 
        speed='fast', 
        dw=".disclosureWidget", 
        db=".disclosureButton", 
        dsh=".disclosureShowHide";
    
    // Private methods
    function get_show_hide(button) {
        var retval=null;
        retval = jQuery(button).parents(dw).find(dsh);
        return retval;
    } // get_show_hide

    function buttonClicked() {
        var button=jQuery(this),
            html=button.html(),
            coreHTML=html.substring(2, html.length),
            arrow=html.substring(0, 1),
            showHide=get_show_hide(this),
            h=null;
        
        if ( arrow == hiddenArrow ) {
            button.html(shownArrow + " " + coreHTML);
            h = 'false';
        } else {
            button.html(hiddenArrow + " " + coreHTML);
            h = 'true';
        }
        showHide.slideToggle(speed).attr('aria-hidden', h);
    } // buttonClicked
    
    function show(b) {
        var button=null, html=null, coreHTML=null, showHide=null;

        button = jQuery(this);
        html = button.html();
        coreHTML = html.substring(2, html.length);
        showHide = get_show_hide(this);

        button.html(shownArrow + " " + coreHTML);
        showHide.slideDown(speed).attr('aria-hidden', 'true');
    } // show

    function hide(b) {
        var button=null, html=null, coreHTML=null, showHide=null;
        
        button = jQuery(this);
        html = button.html();
        coreHTML = html.substring(2, html.length);
        showHide = get_show_hide(this);
        
        button.html(hiddenArrow + " " + coreHTML);
        showHide.slideUp(speed).attr('aria-hidden', 'false');
    } // hide
    
    function prepare(b) {
        var showHide=null, visible=false, button=null

        showHide = get_show_hide(this);
        visible = showHide.css('display') != 'none';
        button = jQuery(this);

        if (visible) {
            button.prepend(shownArrow+" ");
            showHide.attr('aria-hidden', 'false');
        } else {
            button.prepend(hiddenArrow+" ");
            showHide.attr('aria-hidden', 'true');
        }
        button.removeAttr('href').css("cursor","pointer")
            .click( buttonClicked );
    } // prepare
    
    // Public methods and properties
    return {
        init: function () {
            jQuery(db).each( prepare );
        },
        toggle_all: function() {
            jQuery(db).click();
        },
        show_all: function () {
            jQuery(db).each(show);
        },
        hide_all: function () {
            jQuery(db).each(hide);
        }
    };
} // GSDisclosureButton

jQuery(window).load(function () {
    var d=null;
    d = GSDisclosureButton();
    d.init();
});
