===============================
:mod:`gs.content.js.disclosure`
===============================
:Author: `Michael JasonSmith`_
:Contact: Michael JasonSmith <mpj17@onlinegroups.net>
:Date: 2016-01-22
:Organization: `GroupServer.org`_
:Copyright: This document is licensed under a
  `Creative Commons Attribution-Share Alike 4.0 International License`_
  by `OnlineGroups.net`_.

..  _Creative Commons Attribution-Share Alike 4.0 International License:
    http://creativecommons.org/licenses/by-sa/4.0/

Contents:

.. toctree::
   :maxdepth: 2

   markup
   api
   HISTORY


This product provides a JavaScript resource for implementing
disclosure buttons. In general, A disclosure button is used to
hide non-essential data from the user. Error messages, and
collapsing-tree views of folders are two common examples. While
their presentation may vary, the buttons are present in the
widget sets used by Microsoft Windows, Apple Aqua, GNOME, and
KDE.

In GroupServer_, disclosure buttons are mostly used to hide the
bottom-quoting and signatures at the end of posts. However, the
system is generic, and can be used to hide arbitrary
information. If the correct markup is followed, the JavaScript
code will add the event-handlers to show or hide the information,
as appropriate.
        
In addition to the event handler, an arrow is added to each
button, which indicates the state of the disclosure widget. The
arrow points to the right when the information is hidden, and
points down when the data is shown.

A disclosure button is created by adding some CSS classes to the
:doc:`markup <markup>` of the page. JavaScript code can manipulate the
buttons by calling various :doc:`functions <api>`.

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

Resources
=========

- Documentation:
  http://groupserver.readthedocs.io/projects/gscontentjsdisclosure/
- Code repository:
  https://github.com/groupserver/gs.content.js.disclosure/
- Questions and comments to
  http://groupserver.org/groups/development/
- Report bugs at https://redmine.iopen.net/projects/groupserver/

.. _GroupServer: http://groupserver.org/
.. _GroupServer.org: http://groupserver.org/
.. _OnlineGroups.Net: https://onlinegroups.net
.. _Michael JasonSmith: http://groupserver.org/p/mpj17
