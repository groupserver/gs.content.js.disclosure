============================
``gs.content.js.disclosure``
============================
~~~~~~~~~~~~~~~~~~
Disclosure buttons
~~~~~~~~~~~~~~~~~~

:Author: `Michael JasonSmith`_
:Contact: Michael JasonSmith <mpj17@onlinegroups.net>
:Date: 2013-03-18
:Organization: `GroupServer.org`_
:Copyright: This document is licensed under a
  `Creative Commons Attribution-Share Alike 3.0 New Zealand License`_
  by `OnlineGroups.Net`_.

Introduction
============

This product provides a JavaScript resource_ for implementing disclosure
buttons. In general, A disclosure button is used to hide non-essential
data from the user. Error messages, and collapsing-tree views of folders
are two common examples. While their presentation may vary, the buttons are
present in the widget sets used by Microsoft Windows, Apple Aqua, GNOME,
and KDE.

In GroupServer_, disclosure buttons are mostly used to hide the
bottom-quoting and signatures at the end of posts. However, the system is
generic, and can be used to hide arbitrary information. If the correct
markup is followed, the JavaScript code will add the event-handlers to show
or hide the information, as appropriate.
        
In addition to the event handler, an arrow is added to each button, which
indicates the state of the disclosure widget. The arrow points to the right
when the information is hidden, and points down when the data is shown.

A disclosure button is created by adding some CSS classes to the markup_ of
the page. JavaScript code can manipulate the buttons by calling various
functions_.

Resource
========

This product provides a JavaScript module as a Zope_ `browser
resource`_. Any Zope or Plone_ project should be able to use this product
as-is by placing the following line in a page template::

  <script type="text/javascript" 
          src="/++resource++gs-content-js-disclosure-20130113.js" 
          defer="true"> </script>

Users of other systems are invited to copy the file
``gs/content/js/disclosure/browser/javascript/disclosure.js`` out of this
product.

A minified version of the code is also available::

  <script type="text/javascript" 
          src="/++resource++gs-content-js-disclosure-min-20130113.js" 
          defer="true"> </script>


Markup
======
            
The markup for each disclosure button contains of a ``<div>`` element for
the entire widget, a paragraph that contains a button, and another
``<div>`` for the content to show or hide::
          
  <div class="disclosureWidget">
    <p>
      <a class="disclosureButton" role="button" 
         aria-controls="show-hide-id">Foo</a>
     </p>
     <div id="show-hide-id" class="disclosureShowHide" style="display: none;">
          This is hidden by default.
     </div>
  </div>
          
CSS classes are used to mark the components of the disclosure widget:

* ``disclosureWidget`` for the main widget.
* ``disclosureButton`` for the button.
* ``disclosureShowHide`` for the content to show or hide.

The ``style`` attribute on the content determines if the content is shown
(``display:block;``) or hidden (``display:none;``) by default.

:Aria_: The markup above shows an ``aria-controls`` and ``role`` attribute
       on the button; there is an ``id`` attribute on the content
       container. All are good practice, but unnecessary (unless you rely
       on accessibility technology, when they become highly important). The
       system will add an ``aria-hidden`` attribute to the content
       container as necessary
        
Functions
=========

Three functions are provided by the ``GSDisclosureButton`` module to
manipulate the disclosure buttons on the page.

``GSDisclosureButton.show_all``:
  Show the contents of all the disclosure widgets.

``GSDisclosureButton.hide_all``:
  Hide the contents of all the disclosure widgets.

``GSDisclosureButton.toggle_all``:
  Show the contents of all the hidden disclosure widgets, and hide the
  contents of all the shown disclosure widgets. (The 'click' event is sent
  to all the disclosure widgets.)
                   
Dependencies
============

jQuery_ is used to implement the GroupServer disclosure button. However, the
``jQuery()`` call (rather than ``$()``) is used throughout, to avoid
conflicts with Prototype.

Resources
=========

- Code repository: https://source.iopen.net/groupserver/gs.content.js.disclosure/
- Questions and comments to http://groupserver.org/groups/development/
- Report bugs at https://redmine.iopen.net/projects/groupserver/

.. _GroupServer: http://groupserver.org/
.. _GroupServer.org: http://groupserver.org/
.. _OnlineGroups.Net: https://onlinegroups.net
.. _Michael JasonSmith: http://groupserver.org/p/mpj17
.. _Creative Commons Attribution-Share Alike 3.0 New Zealand License:
   http://creativecommons.org/licenses/by-sa/3.0/nz/
.. _Zope: http://zope.org/
.. _browser resource: http://docs.zope.org/zope.browserresource/
.. _Plone: http://plone.org
.. _Aria: http://www.w3.org/TR/wai-aria/
.. _jQuery: http://jquery.com/

.. LocalWords:  jQuery UI Plone minified
