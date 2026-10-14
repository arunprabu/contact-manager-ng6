> Status: Drafted. Source claims were checked by the author. Independent review is outstanding.

# Integrations

The browser reaches external systems declared by [`contact.service.ts`](../../src/app/contacts/contact.service.ts), [`index.html`](../../src/index.html), and the shopping templates in [`src/app/shopping/`](../../src/app/shopping/). The URL inventory reflects commit `6726604274f0edbef5ef715ee6759a65ed7f959b`, inspected on 2026-10-13; no live service was contacted.

## Browser integrations

| Host or resource | Purpose | Direction and protocol | Configuration and credentials | Failure behavior |
|---|---|---|---|---|
| `jsonplaceholder.typicode.com/users` | Contact list, create, detail, and update calls. | Browser to remote service over HTTPS. | URL is hard-coded. The client defines no credential or token. | The client has no error callback or fallback data. See the [API reference](../api/api-reference.md). |
| `stackpath.bootstrapcdn.com/bootstrap/4.3.1` | Bootstrap CSS and JavaScript. | Browser loads stylesheet and script over HTTPS. | URLs and integrity attributes are in the HTML document. | No local fallback is configured. |
| `code.jquery.com/jquery-3.3.1.slim.min.js` | jQuery global used by Bootstrap and the contact edit modal. | Browser loads script over HTTPS. | URL is in the HTML document. | No local fallback is configured. |
| `cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js` | Popper script used by Bootstrap. | Browser loads script over HTTPS. | URL is in the HTML document. | No local fallback is configured. |
| `dummyimage.com` | Product-list placeholder image. | Browser loads image over HTTPS. | URL is embedded in the product template. | No fallback image is configured. |
| `placehold.it` | Cart placeholder image. | Browser loads image over HTTP. | URL is embedded in the cart template. | No fallback image is configured. |

These calls and resources run in the user's browser. The repository defines no backend proxy, credential store, webhook, queue, or external event consumer.

## Package dependencies

PrimeNG controls, PrimeIcons, Angular, and RxJS are installed through npm. Angular CLI includes PrimeNG styles in the browser build. These are package dependencies rather than separate runtime hosts.

## Operational effects

The contact screens need browser access to the JSON endpoint. Bootstrap interactions and page styling depend on the CDN scripts and stylesheet. Placeholder images also depend on their remote hosts. The application defines no offline cache or local substitute.

The cart image uses an HTTP URL. Whether a deployment serves the application over HTTPS, and how its browser handles that image, are not established by repository configuration.
