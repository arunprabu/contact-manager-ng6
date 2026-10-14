> Status: Drafted. Source claims were checked by the author. Independent review is outstanding.

# API reference

This reference covers the HTTP calls made by the browser client. The repository contains no API server and exposes no inbound HTTP endpoints. The calls are wired by [`contact.service.ts`](../../src/app/contacts/contact.service.ts) and use the contact shape in [`IContact.ts`](../../src/app/contacts/IContact.ts).

## Conventions

The client uses `https://jsonplaceholder.typicode.com/users` as a hard-coded base URL. It sends no authorization header, custom HTTP header, retry policy, or timeout. The source defines no OpenAPI specification or error DTO.

Angular `HttpClient` receives JavaScript objects for write requests. The service applies no custom serializer or runtime response validation. TypeScript response annotations describe the shape the client expects; they do not verify the remote body.

## Operations

| Method | Path | Caller behavior | Request | Expected response |
|---|---|---|---|---|
| `GET` | `/users` | Loads the contact list when its view initializes. | None | `IContact[]` |
| `POST` | `/users` | Submits the create form. | `CreateContactRequest` | `IContact` |
| `GET` | `/users/{id}` | Loads details for the route identifier. | Path parameter `id` | `IContact` |
| `PUT` | `/users/{id}` | Submits the current detail object for update. | `IContact` | `IContact` |

### `GET /users`

The contact list subscribes once when the view initializes. A successful body is assigned to the list; a non-empty array renders as cards. An empty array hides the fallback and leaves the contact area empty because the template checks the array reference. The client defines no query parameters.

### `POST /users`

The form submits its three control values. The request omits `id`. The form attaches required validators to all controls and an email validator to the email control, but the submit handler does not check the form's validity before sending.

The page displays a success message only when the response contains a truthy `id`. It does not add the response to an in-memory list or navigate to the detail view.

### `GET /users/{id}`

The detail view reads `id` from the active route and appends it to the base path. It does not define a not-found response or an error state.

### `PUT /users/{id}`

The client builds the path from the object's `id` and sends the full contact object. The update form binds only the name control; its phone and email inputs do not change the object. The remote service's update semantics are not defined in this repository.

## DTOs

### `IContact`

Source: [`src/app/contacts/IContact.ts`](../../src/app/contacts/IContact.ts)

| Field | Wire type expected by the client | Required | Default | Constraint enforced by the client | Meaning |
|---|---|---|---|---|---|
| `id` | `number` | Yes for the interface and update path | None | None | Contact identifier. |
| `name` | `string` | Yes for the interface | None | Required validator on the create form. | Contact name. |
| `phone` | `string` | Yes for the interface | None | Required validator on the create form. | Contact phone value. |
| `email` | `string` | Yes for the interface | None | Required and email validators on the create form. | Contact email value. |

The remote response is not checked against this interface at runtime. The update request carries all four properties from the current object.

### `CreateContactRequest`

Source: [`src/app/contacts/add-contact/add-contact.component.ts`](../../src/app/contacts/add-contact/add-contact.component.ts)

| Field | Wire type | Required | Default | Constraint enforced by the client | Meaning |
|---|---|---|---|---|---|
| `name` | `string` | Yes in the form | None | Required validator, without a length rule. | New contact name. |
| `phone` | `string` | Yes in the form | None | Required validator, without a format rule. | New contact phone value. |
| `email` | `string` | Yes in the form | None | Required and Angular email validators. | New contact email value. |

The form has no `id` control, so `id` is omitted from the POST body. The form does not explicitly send `null` for an omitted field.

## Errors and unsupported operations

The components subscribe with success callbacks only. They define no error response shape, status-specific handling, retry, or user-visible API failure message. A failed list request leaves the list unset, so the template keeps its fallback message visible.

The client defines no contact delete request. The detail view's Delete button has no action.
