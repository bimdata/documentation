# BIMData Platform Front

## URLs of BIMData apps

| Variables                  | Default value | Description                 |
|----------------------------|---------------|-----------------------------|
| VUE_APP_BASE_URL           |               | BIMData Platform front URL. |
| VUE_APP_BACKEND_BASE_URL   |               | BIMData Platform back URL.  |
| VUE_APP_API_BASE_URL       |               | BIMData API URL.            |
| VUE_APP_ARCHIVE_BASE_URL   |               | BIMData Archive URL.        |
| VUE_APP_URL_BIMDATACONNECT |               | BIMData Connect URL.        |
| VUE_APP_URL_DOCUMENTATION  |               | BIMData documentation URL.  |
| VUE_APP_URL_MARKETPLACE    |               | BIMData marketplace URL.    |
| VUE_APP_URL_OLD_PLATFORM   |               | BIMData old platform URL.   |

## OpenID configuration
| Variables                             | Default value | Description                                 |
|---------------------------------------|---------------|---------------------------------------------|
| VUE_APP_IAM_BASE_URL                  |               | OIDC provider address.                      |
| VUE_APP_OIDC_CLIENT_ID                |               | Your Client ID                              |
| VUE_APP_AUTHORIZED_IDENTITY_PROVIDERS |               | Comma separated list of identity provider   |

## Other configuration
| Variables                           | Default value | Description                                                                  |
|-------------------------------------|---------------|------------------------------------------------------------------------------|
| VUE_APP_MAPBOX_TOKEN                |               | Mapbox token use to show the map.                                            |
| VUE_APP_MAX_UPLOAD_SIZE             |               | Maximum size in bytes for upload.                                            |
| VUE_APP_PROJECT_STATUS_LIMIT_NEW    |               | Number of days for which a project is considered "New" after its creation.   |
| VUE_APP_PROJECT_STATUS_LIMIT_ACTIVE |               | Number of days since last update for which a project is considered "Active". |
