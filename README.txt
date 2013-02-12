Introduction
============

In general, A disclosure button is used to hide non-essential data from the
user. Error messages, and collapsing-tree views of folders are two common
examples. While their presentation may vary, the buttons are present in the
widget sets used by Microsoft Windows, Apple Aqua, GNOME, and KDE.
        
In GroupServer, disclosure buttons are mostly used to hide the
bottom-quoting and signatures at the end of posts. However, the system is
generic, and can be used to hide arbitrary information.  If the correct
markup is followed, the JavaScript code will add the event-handlers to show
or hide the information, as appropriate.
        
In addition to the event handler, an arrow is added to each button, which
indicates the state of the disclosure widget. The arrow points to the right
when the information is hidden, and points down when the data is shown.
        
Markup
======
            
The markup for disclosure buttons mostly contains of two div elements, a
paragraph, and an anchor::
          
  <div class="disclosureWidget">
    <p>
      <a class="disclosureButton">Foo</a>
     </p>
     <div class="disclosureShowHide" style="display: none;">
          Foo bar wibble blarg&#8230;
     </div>
  </div>
          
Classes are used to mark the essential components of the disclosure widget:

* The main div, that contain the entire disclosure widget,
* The button uses to show, or hide, the information, and
* A div to hold the  information.

ID attributes can be added to the components of the disclosure widget, and
additional callbacks can be added, to launch an AJAX query.
        
Functions
=========
        
``init``:
  Add an arrow and a click-callback to all disclosure widgets. Launched
  after the document is "ready".

``show_all``:
  Show the contents of all the disclosure widgets.

``hide_all``:
  Hide the contents of all the disclosure widgets.

``toggle_all``:
  Show the contents of all the hidden disclosure widgets, and hide the
  contents of all the shown disclosure widgets. (The 'click' event is sent
  to all the disclosure widgets.)
                   
Dependencies
============

jQuery is used to implement the GroupServer disclosure button. However, the
``jQuery()`` call (rather than ``$()``) is used throughout, to avoid
conflicts with Prototype.

Resources
=========

- Code repository: https://source.iopen.net/groupserver/gs.content.js.disclosure/
- Questions and comments to http://groupserver.org/groups/development/
- Report bugs at https://redmine.iopen.net/projects/groupserver/

.. _GroupServer: http://groupserver.org/

..  LocalWords:  jQuery UI Plone
