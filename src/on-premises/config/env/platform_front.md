## Bimdata Platform

### URLs of Bimdata apps

| Variables                  | Default value | Description                 |
|----------------------------|---------------|-----------------------------|
| VUE_APP_BASE_URL           | ""            | Bimdata Platform front URL. |
| VUE_APP_BACKEND_BASE_URL   | ""            | Bimdata Platform back URL.  |
| VUE_APP_API_BASE_URL       | ""            | Bimdata API URL.            |
| VUE_APP_ARCHIVE_BASE_URL   | ""            | Bimdata Archive URL.        |
| VUE_APP_URL_BIMDATACONNECT | ""            | Bimdata Connect URL.        |
| VUE_APP_URL_DOCUMENTATION  | ""            | Bimdata documentation URL.  |
| VUE_APP_URL_MARKETPLACE    | ""            | Bimdata marketplace URL.    |
| VUE_APP_URL_OLD_PLATFORM   | ""            | Bimdata old platform URL.   |

### OpenID configuration
| Variables                             | Default value                    | Description                                 |
|---------------------------------------|----------------------------------|---------------------------------------------|
| VUE_APP_IAM_BASE_URL                  | "https://iam-staging.bimdata.io" | OIDC provider address.                      |
| VUE_APP_OIDC_CLIENT_ID                | ""                               | Your Client ID                              |
| VUE_APP_AUTHORIZED_IDENTITY_PROVIDERS | "bimdataconnect"                 | Comma separated list of identity provider   |

### Other configuration
| Variables                   | Default value | Description                       |
|-----------------------------|---------------|-----------------------------------|
| VUE_APP_MAPBOX_TOKEN        | ""            | Mapbox token use to show the map. |
| VUE_APP_MAX_UPLOAD_SIZE     | 1000000000    | Maximum size in bytes for upload. |
