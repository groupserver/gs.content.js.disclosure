// Functions for handling the disclosure buttons.
var GSDisclosureButton = function () {
    /* GroupServer Disclosure Button Module.
    
    */

    // Private variables
    // Arrows
    var hiddenArrow = "\u25b6";
    var shownArrow = "\u25bc";
    var speed = 'fast';
    // Elements of the disclosure widgets
    var dw = ".disclosureWidget";
    var db = ".disclosureButton";
    var dsh = ".disclosureShowHide";
    
    // Private methods
    var get_show_hide = function(button) {
        retval = jQuery(button).parents(dw).find(dsh);
        return retval;
    }

    var buttonClicked = function () {
        var button = jQuery(this);
        var html = button.html();
        var coreHTML = html.substring(2, html.length);
        var arrow = html.substring(0, 1);
        var showHide = get_show_hide(this);
        var h = null;
        
        if ( arrow == hiddenArrow ) {
            button.html(shownArrow+" "+coreHTML);
            h = 'false';
        } else {
            button.html(hiddenArrow+" "+coreHTML);
            h = 'true';
        }
        showHide.slideToggle(speed).attr('aria-hidden', h);
    }
    
    var show = function (b) {
        var button = jQuery(this);
        var html = button.html();
        var coreHTML = html.substring(2, html.length);
        var showHide = get_show_hide(this);

        button.html(shownArrow+" "+coreHTML);
        showHide.slideDown(speed).attr('aria-hidden', 'true');
    }

    var hide = function (button) {
        var button = jQuery(this);
        var html = button.html();
        var coreHTML = html.substring(2, html.length);
        var showHide = get_show_hide(this);
        
        button.html(hiddenArrow+" "+coreHTML);
        showHide.slideUp(speed).attr('aria-hidden', 'false');
    }
    
    var prepare = function (b) {
        var showHide = null;
        var visible = false;
        var button = null
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
    }
    
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
}(); // GSDisclosureButton

jQuery(window).load(GSDisclosureButton.init);
