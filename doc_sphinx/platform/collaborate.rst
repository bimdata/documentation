.. index:: documents, edm, access rights, users, invitation, invite, members

========================
Collaborate
========================

.. 
    excerpt
        How-To collaborate with your colleagues
    endexcerpt


Invitations
=============

.. only:: html

    .. figure:: ../_images/user_guide/platform/invite-form-filled.svg
        :alt: Invitation form filled example

.. only:: latex

    .. figure:: ../_images/user_guide/platform/invite-form-filled.png
        :alt: Invitation form filled example


* Click [Invite] icon on top of the Users List
* Fill in the e-mail address
* Chose the access rights: Admin, User or Guest for the Project. You could change the Role of any User later. 
* Click [Validate]

The invitation is sent.

.. only:: html

    .. figure:: ../_images/user_guide/platform/invite.svg
        :alt: Invitation List

.. only:: latex

    .. figure:: ../_images/user_guide/platform/invite.png
        :alt: Invitation List


.. note:: Users access levels

    For more information about different access rights, see :doc:`the Guide about Roles <../guide/dev_users_management>`.

.. warning::

   Invite someone with an Admin Role invites implicitly the person in the Cloud.


Users Roles
------------------

.. warning::
    
    Any User in any Project can read the User List and see the other Users of the project.

Admin
~~~~~~~~

A Project admin can invite Users to the Project.
A cloud Admin can see every other member of the Cloud, can invite other Users as admin in the Cloud.


The Project admin manages the Roles of the Users: the admin can add, edit or delete Roles.

Member
~~~~~~~~

Can read and write Documents, Models, and BCF.

Guest
~~~~~~~~

Can read-only: DMS, models, BCF and write BCF content.


Details about invitations
----------------------------

Until your recipient accepts it, the invitation appears incomplete.
The e-mail contains a link to accept directly the invitation.

.. tip:: Invitation lost?
    To resend the invitation, click [Resend Invitation?]. The e-mail is sent again.

    .. only:: html

        .. image:: ../_images/user_guide/platform/invitation-pending.svg
    
    .. only:: latex

        .. image:: ../_images/user_guide/platform/invitation-pending.png



Revoke members
================

.. warning:: 
    
    Ban a User exclude the User from all Projects of the Cloud.

To revoke a member, click [Delete User] and confirm your action. The User has no longer access to your Project.
