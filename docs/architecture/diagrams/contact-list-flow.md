> Status: Drafted. Source claims were checked by the author. Independent review is outstanding.

# Contact-list flow

This sequence describes the route and request wired by [`app-routing.module.ts`](../../../src/app/app-routing.module.ts), [`contacts-list.component.ts`](../../../src/app/contacts/contacts-list/contacts-list.component.ts), and [`contact.service.ts`](../../../src/app/contacts/contact.service.ts).

```mermaid
sequenceDiagram
    actor User
    participant App as Browser application
    participant API as Contact endpoint
    User->>App: Open /contacts
    App->>API: GET /users
    alt The response contains contacts
        API-->>App: JSON response
        App-->>User: Render contact cards
    else The response is an empty array
        API-->>App: []
        Note over App: An empty array is truthy, so the fallback is hidden
        App-->>User: The contact area has no cards
    else The request fails
        Note over App: No error callback handles the failure
        App-->>User: The "No Contacts Found!" fallback remains visible
    end
    Note over App: The same fallback appears while the request is pending
```
