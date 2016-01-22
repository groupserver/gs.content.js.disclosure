JavaScript module
=================

The disclosure button is implemented by the
:js:class:`GSDisclosureButton` module.

.. js:class:: GSDisclosureButton()

   .. js:function:: init()

      Apply the disclosure-button to all the HTML with the
      appropriate :doc:`markup <markup>`

   .. js:function:: show_all()

      Show the contents of all the disclosure widgets.

   .. js:function:: hide_all()

      Hide the contents of all the disclosure widgets.

   .. js:function:: toggle_all()

      Show the contents of all the hidden disclosure widgets, and
      hide the contents of all the shown disclosure widgets. (The
      ``click`` event is sent to all the disclosure widgets.)
