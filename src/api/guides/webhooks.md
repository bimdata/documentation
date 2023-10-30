# Webhooks

Webhooks let you build automation around BIMData API. Your app can subscribe to certain events on BIMData API and when one event is triggered, we’ll send an HTTP POST payload to the configured URL.

Webhooks can be configured on a cloud. All projects of this cloud emits events.

## Events

Each event corresponds to a set of actions.

| Event                   | Triggered when…                                       |
| ----------------------- | ----------------------------------------------------- |
| bcf.topic.creation      | a BCF Topic is created                                |
| bcf.topic.update        | a BCF Topic is updated                                |
| bcf.topic.deletion      | a BCF Topic is deleted                                |
| bcf.comment.creation    | a BCF comment is created                              |
| bcf.comment.update      | a BCF comment is updated                              |
| bcf.comment.deletion    | a BCF comment is deleted                              |
| bcf.topic.full.creation | a BCF Topic is created, send a FullTopic object       |
| bcf.topic.full.update   | a BCF Topic is updated, send a FullTopic object       |
| ifc.process_update      | the status of an IFC is changed (when it’s processed) |
| project.update          | a project is updated                                  |
| project.creation        | a project is created                                  |
| visa.creation           | a validation on a document is created                 |
| visa.update             | a validation is updated                               |
| visa.validation.add     | a user responds to a validation demand                |
| visa.validation.remove  | a user delete a response to a validation demand       |
| document.creation       | a document is uploaded                                |
| document.update         | a document is updated                                 |

If you need more webhooks, please contact us at [support@bimdata.io](mailto:support@bimdata.io).


## Payload

Every payload send by BIMData API looks like:

```json
{ "event_name": event_name, "cloud_id": cloud_id, "data": payload }
```

Where:

- `event_name` is the name of the triggered event.
- `cloud_id` is the cloud that triggered the event.
- `payload` is the content of the event.

It mostly uses the same serialization than the API Models.

## Signature

To verify if the Webhook is sent from BIMData API and not from a malicious user, we sign out HTTP POST requests. The signature is an HMAC hex digest generated using the `sha256` hash function and the secret as the HMAC key signing the body of the request.

This signature is sent over the `x-bimdata-signature` HTTP Header.

Here is a python example to check the signature:

```python
import hmac
import hashlib

def is_signed(request):
    req_signature = request.META.get("HTTP_X_BIMDATA_SIGNATURE")
    if not req_signature:
        return False

    body_signature = hmac.new(
        WEBHOOK_SECRET.encode(), request.body, hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(req_signature, body_signature)
```

## Authorizations

API routes to manage Webhooks require the webhook:manage scope. As these calls don’t involve a user, the app needs to be authorized itself on the Cloud and can’t behave as a User.
