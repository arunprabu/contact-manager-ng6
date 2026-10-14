> Status: Drafted. Source claims were checked by the author. Independent review is outstanding.

# Repository overview

This repository builds one Angular browser application with contact screens, a local shopping example, and concept demonstrations. The runtime entry and module wiring are defined by [`main.ts`](../../src/main.ts), [`app.module.ts`](../../src/app/app.module.ts), and [`app-routing.module.ts`](../../src/app/app-routing.module.ts).

## System boundary

The application runs in the browser. This repository contains no application server, database, queue consumer, or scheduled process. Contact screens call a remote JSON API. Shopping data and cart state stay in browser memory. The [data model](../data-model/data-model.md), [API reference](../api/api-reference.md), and [integration inventory](../integrations/integrations.md) own those details.

The root view places shared navigation and footer around the active route. The shopping routes load with the root application rather than through a lazy-loaded feature. PrimeNG controls and styles come from installed packages; Bootstrap styling and scripts load from external CDNs.

## Repository map

| Area | Responsibility |
|---|---|
| [`src/app/`](../../src/app/) | Application shell, routing, contact screens, shopping example, concept pages, shared components, and browser-side services. |
| [`src/environments/`](../../src/environments/) | Development and production build flags. |
| [`src/index.html`](../../src/index.html) | Browser document, base URL, and external Bootstrap, jQuery, and Popper resources. |
| [`src/assets/`](../../src/assets/) | Static asset directory, with no application data files tracked. |
| [`e2e/`](../../e2e/) | Protractor configuration, page object, and end-to-end test. |
| [`angular.json`](../../angular.json) | Angular CLI build, serve, test, lint, and end-to-end targets. |
| [`package.json`](../../package.json) | Runtime and development dependencies plus npm scripts. |

## Component areas

The shared area supplies the application header, navigation, search field, footer, and not-found view. The search button writes its value to the browser console; it does not filter contacts or products.

The contacts area lists remote records, submits a create form, and displays a detail view with an edit modal. The details template exposes a Delete button without an action, and only its name input is bound to the update object. See the [findings](../findings.md) for the exact source locations.

The shopping area displays hard-coded product data and stores cart entries in a `BehaviorSubject`. Its product-detail route displays placeholder text. The [data-model page](../data-model/data-model.md) records cart state and limitations.

The concepts and about pages demonstrate Angular bindings, inputs and outputs, directives, pipes, PrimeNG controls, and URL sanitization. The about page passes a `javascript:` URL to Angular's trust bypass API; its intent and safety are unresolved in the [findings](../findings.md).

## Routes

The contacts prefix is a componentless parent with three child routes. The table lists the effective browser paths; the parent grouping is part of the route configuration.

| Path | Behavior |
|---|---|
| `/` | Redirects to `/concepts`. |
| `/concepts` | Shows Angular concept demonstrations. |
| `/contacts` | Loads the contact list. |
| `/contacts/new` | Shows the create form. A route guard runs but always allows navigation. |
| `/contacts/:id` | Loads contact details using the path identifier. |
| `/about` | Shows PrimeNG, pipe, and URL-sanitization examples. |
| `/products` | Shows the hard-coded product list. |
| `/products/cart` | Shows the in-memory cart. |
| `/products/:id` | Shows placeholder product-detail text. |
| `**` | Shows the not-found view. |

There is no authentication service, identity model, or tenant boundary. The login and sign-up links are placeholders. The route guard on contact creation returns `true` without checking identity or permissions.

## Contact-list flow

The [contact-list flow](diagrams/contact-list-flow.md) shows the browser request and its pending and failure behavior. The application has no message queue, scheduled process, or asynchronous worker. The cart publishes local state through a `BehaviorSubject`; contact requests are its only remote data API.

## Technology and dependency boundaries

| Area | Declared technology |
|---|---|
| Browser application | Angular 6, Angular CLI `~6.2.9`, and TypeScript `~2.9.2`. |
| Reactive data | RxJS `~6.2.0` and Angular `HttpClient`. |
| UI controls | PrimeNG `^7.1.2` and PrimeIcons `^1.0.0` from npm; Bootstrap, jQuery, and Popper load from CDNs. |
| Unit tests | Jasmine and Karma, configured to launch Chrome. |
| End-to-end tests | Protractor with Chrome and a local development server. |

The application defines one Angular browser project and one end-to-end CLI project. Package ranges and command status are recorded in the [developer guide](../development/setup-and-testing.md).
