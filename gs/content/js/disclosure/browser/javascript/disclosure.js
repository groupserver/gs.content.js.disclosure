// Functions for handling the disclosure buttons.
var GSDisclosureButton = function () {
    /* GroupServer Disclosure Button Module.
    
    */

    // Private variables
    var hiddenArrow = "\u25b6", 
        shownArrow = "\u25bc", 
        speed = 'fast', 
        dw = ".disclosureWidget", 
        db = ".disclosureButton", 
        dsh = ".disclosureShowHide";
    
    // Private methods
    function get_show_hide(button) {
        var retval = jQuery(button).parents(dw).find(dsh);
        return retval;
    }

    function buttonClicked() {
        var button = jQuery(this),
            html = button.html(),
            coreHTML = html.substring(2, html.length),
            arrow = html.substring(0, 1),
            showHide = get_show_hide(this),
            h = null;
        
        if ( arrow == hiddenArrow ) {
            button.html(shownArrow+" "+coreHTML);
            h = 'false';
        } else {
            button.html(hiddenArrow+" "+coreHTML);
            h = 'true';
        }
        showHide.slideToggle(speed).attr('aria-hidden', h);
    }
    
    function show(b) {
        var button = jQuery(this), html = button.html(), 
            coreHTML = html.substring(2, html.length), 
            showHide = get_show_hide(this);

        button.html(shownArrow+" "+coreHTML);
        showHide.slideDown(speed).attr('aria-hidden', 'true');
    }

    function hide(b) {
        var button = jQuery(this), html = button.html(), 
            coreHTML = html.substring(2, html.length), 
            showHide = get_show_hide(this);
        
        button.html(hiddenArrow+" "+coreHTML);
        showHide.slideUp(speed).attr('aria-hidden', 'false');
    }
    
    function prepare(b) {
        var showHide = null, visible = false, button = null
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
