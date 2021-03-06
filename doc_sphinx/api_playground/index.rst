============
Welcome
============

.. toctree::
  :maxdepth: 1
  :titlesonly:

  apis

The Bimdata API is organized around `REST`_. Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors.
We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients.
We support `cross-origin resource sharing`_, allowing you to interact securely with our API from a client-side web application (though you should never expose your secret API key in any public website's client-side code).
JSON is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects.

Content-Type
============

Endpoints usually only accept ``application/json`` content type.
Endpoints used for files upload use ``application/x-www-form-urlencoded`` (aka form-data) content type.

OpenAPI
=======

Our files are auto-generated from `our OpenAPI file`_ with `openapi-generator`_.

Postman
=======

You could also run our Postman collection:

.. image:: https://run.pstmn.io/button.svg
   :alt: Run in Postman!
   :target: https://app.getpostman.com/run-collection/3d3c0b2a685505934729

:doc:`Check our guide to get started with our Postman collection </getting_started/postman>`.

Getting Help
============

Do you need help?
-----------------

You can reach us by e-mail: support@bimdata.io

.. _our OpenAPI file: https://api.bimdata.io/doc#/
.. _openapi-generator: https://github.com/OpenAPITools/openapi-generator

.. _REST: https://en.wikipedia.org/wiki/Representational_state_transfer
.. _cross-origin resource sharing: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

.._ Run in Postman: https://app.getpostman.com/run-collection/3d3c0b2a685505934729
