# External libraries

We’re currently maintaining two external libraries auto-generated from [our OpenAPI specification file](https://api.bimdata.io/doc#/) using [openapi-generator](https://github.com/OpenAPITools/openapi-generator).

## Javascript

- Install via NPM:
```bash
npm install @bimdata/bimdata-api-client --save
```

- URL: [https://www.npmjs.com/package/@bimdata/bimdata-api-client](https://www.npmjs.com/package/@bimdata/bimdata-api-client)

- Repository: [https://github.com/bimdata/javascript-api-client](https://github.com/bimdata/javascript-api-client)

## Python

- URL: [https://pypi.org/project/bimdata-api-client/](https://pypi.org/project/bimdata-api-client/)

- Repository: [https://github.com/bimdata/python-api-client](https://github.com/bimdata/python-api-client)

::: warning IMPORTANT
Requirements: Python 2.7 and 3.4+
:::

## Generate your own

We offer our OpenAPI file to let you use it. You can use one of those generators to get a client in your favorite programmation language: [https://openapi-generator.tech/docs/generators](https://openapi-generator.tech/docs/generators)

1. Install OpenAPI Generator following [their documentation](https://openapi-generator.tech/docs/installation/).

2. With a local version (or not) of our OpenAPI file, generate your client with `openapi-generator generate` options depending on your install.

3. Add your new API client in your software stack, everything is in the README generated along with your client.

4. Use it and check [our API Reference documentation](/api/reference).
