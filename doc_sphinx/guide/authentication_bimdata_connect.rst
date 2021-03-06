===================================
Authentication details
===================================

..
    excerpt
        BIMData Connect handles sign-in and logs in for your app.
    endexcerpt

Introduction
=============

The OpenID Connect used by the BIMData Connect, our authentication system, is built on the shoulders of OAuth2.0.

BIMData Connect handles the sign-in, the login and authentication processes of your application users.
You can focus on creating and building your application.
The user's browser is redirected to the Sign-In page by the Web Application.

The Sign-In page is on the BIMData Connect server. The BIMData Connect provides to the user's browser an Access Token.
Then the user's browser could send requests to the Web Application sending the Access Token.
The type of authentication is defined during the creation of the application.

.. image:: /_images/guide/BIMdata_connect_diagram_colors.jpg
   :scale: 80 %
   :alt: BIMData Connect handles sign-in and log in for your app
   :align: center

*BIMData Connect handles sign-in and log in for your app*

Get your Access Token
=====================

.. WARNING::

    Requirement: you must have an application, see :doc:`Create an application process </tutorials/dev_create_an_application>`.

.. image:: /_images/guide/auth_flow_diagram_colors.jpg
   :scale: 100 %
   :alt: Authentication flow
   :align: center


*Authentication flow*

Use your Access Token
=====================

There are two possible ways to authenticate depending on your application architecture design.
You can either:

 * access as an application and benefit from authentication capacities,
 * or use a user-behavior authentication.

When use an app auth?
=====================

The benefits
------------

**Simple to use**

No user means no credentials to manage nor complex workflow, it's simpler to access via the application.

**Pluggable**

You can subscribe to events and use webhooks. It's the easiest way to provide automation.

Use it when you need to have a scheduled response to an event and launch a script depending on this response.

.. IMPORTANT:: 

    You cannot access as a user, therefore you cannot:
     
     * do any impersonation
     * manage fine granularity with access rights
     * share data with other applications using BIMData


When use a user impersonation?
==============================


The benefits
-------------

User's name as the author
^^^^^^^^^^^^^^^^^^^^^^^^^^

* Emulating the user's actions enables you to act in the name of the user. 
* Creating content with impersonation writes the user's name in the creator's name of this content.


Sharing the authoring
^^^^^^^^^^^^^^^^^^^^^^

Your script can modify data created by the user and amend it.


Let BIMData handle the complexity
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The credentials complexity is handled by the BIMData Connect authentication server. 
This option is compliant with the user's credentials.

Use it when you need to access the user's log, such as the user's history, and report actions.


.. seealso::
    
    There are two types of auth: Authorization code flow and Implicit flow.
    Read the :doc:`types of auth flows detailed <authentication_flows>`