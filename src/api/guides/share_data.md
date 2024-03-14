# Access Data between API and Platform

Your application don't automatically have access to your user's data.
If you want to see API data on the BIMData Platform, you must invite yourself on a cloud created with your app.

## How can I share data between my app and BIMData Platform?

First choose an existing Cloud **created by your application** or create one if there is none
(see [createCloud](https://api.bimdata.io/doc#/collaboration/createCloud)):

```bash
curl --request POST 'https://api.bimdata.io/cloud' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_APP_ACCESS_TOKEN' \
  --data '{"name": "YOUR_CLOUD_NAME"}'
```

You can then invite your user in the Cloud you created with your app
(see [inviteCloudUser](https://api.bimdata.io/doc#/collaboration/inviteCloudUser)):

```bash
curl --request POST 'https://api.bimdata.io/cloud/YOUR_CLOUD_ID/invitation' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_APP_ACCESS_TOKEN' \
  --data '{"email": "YOUR_EMAIL_ADDRESS", "redirect_uri": "https://platform.bimdata.io/cloud/YOUR_CLOUD_ID"}'
```

::: tip
Check if the Platform URL (`redirect_uri`) is the correct one for your Platform access.
:::

You will receive an email asking you to accept the invitation. Once accepted, you can open the Platform and see the Cloud created by the application.
Now every data created in the shared Cloud will be accessible by both the application and the user (via the Platform and API).
