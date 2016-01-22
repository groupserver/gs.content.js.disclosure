===========
Page markup
===========

This product provides a JavaScript module as a Zope_ `browser
resource`_. Any Zope or Plone_ project should be able to use this
product as-is by placing the following line in a page template.

.. code-block:: xml

  <script type="text/javascript" 
          src="/++resource++gs-content-js-disclosure-20160122.js" 
          defer="true"> </script>

Users of other systems are invited to copy the file
``gs/content/js/disclosure/browser/javascript/disclosure.js`` out
of this product.

A minified version of the code is also available:

.. code-block:: xml

  <script type="text/javascript" 
          src="/++resource++gs-content-js-disclosure-min-20160122.js" 
          defer="true"> </script>

Widget markup
=============
            
The markup for each disclosure button contains of a ``<div>``
element for the entire widget, a paragraph that contains a
button, and another ``<div>`` for the content to show or hide

.. code-block:: xml
          
  <div class="disclosureWidget">
    <p>
      <a class="disclosureButton" role="button" 
         aria-controls="show-hide-id">Foo</a>
     </p>
     <div id="show-hide-id" 
          class="disclosureShowHide" 
          style="display:none;">
          This is hidden by default.
     </div>
  </div>
          
CSS classes are used to mark the components of the disclosure
widget:

* ``disclosureWidget`` for the main widget.
* ``disclosureButton`` for the button.
* ``disclosureShowHide`` for the content to show or hide.

The ``style`` attribute on the content determines if the content
is shown (``display:block;``) or hidden (``display:none;``) by
default.

:Aria_: The markup above shows an ``aria-controls`` and ``role``
       attribute on the button; there is an ``id`` attribute on
       the content container. All are good practice, but
       unnecessary (unless you rely on accessibility technology,
       when they become highly important). The system will add an
       ``aria-hidden`` attribute to the content container as
       necessary

.. _GroupServer: http://groupserver.org/
.. _Zope: http://zope.org/
.. _browser resource: http://docs.zope.org/zope.browserresource/
.. _Plone: http://plone.org
.. _Aria: http://www.w3.org/TR/wai-aria/
