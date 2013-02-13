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
    var buttonClicked = function () {
        html = jQuery(this).html()
        coreHTML = html.substring(2, html.length);
        arrow = html.substring(0, 1);
        showHideWidget = jQuery(this).parents(dw).find(dsh)
        
        if ( arrow == hiddenArrow ) {
            jQuery(this).html(shownArrow+" "+coreHTML);
        } else {
            jQuery(this).html(hiddenArrow+" "+coreHTML);
        }
        showHideWidget.slideToggle(speed);
    }
    
    var show = function (button) {
        var html = jQuery(this).html();
        var coreHTML = html.substring(2, html.length);
        jQuery(this).html(shownArrow+" "+coreHTML);
        
        jQuery(this).parents(dw).find(dsh).slideDown(speed);
    }

    var hide = function (button) {
        var html = jQuery(this).html();
        var coreHTML = html.substring(2, html.length);
        jQuery(this).html(hiddenArrow+" "+coreHTML);
        
        jQuery(this).parents(dw).find(dsh).slideUp(speed);
    }
    
    var prepare = function (button) {
        var visible = false;
        visible = jQuery(this).parents(dw).find(dsh).css('display') != 'none';
        if (visible) {
          jQuery(this).prepend(shownArrow+" ");
        } else {
          jQuery(this).prepend(hiddenArrow+" ");
        }
        jQuery(this).removeAttr('href').css("cursor","pointer");
    }
    
    // Public methods and properties
    return {
        init: function () {
            jQuery(db).each( prepare ).click( buttonClicked );
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

