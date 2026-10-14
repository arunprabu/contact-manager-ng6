# React migration spec requirements

> Status: Drafted. The spec count and boundaries are estimates. Behavior notes are grounded in the existing documentation and checked against the Angular source.

## Recommendation

Plan for **7 specification documents**: 6 feature specs and 1 cross-cutting project-foundation spec. This split groups requirements by independently testable outcomes. The feature specs cover the shared shell, contacts, product catalog, shopping cart, React learning demos, and the about page. The project-foundation spec covers runtime dependencies, development, testing, and delivery.

The count is an **Estimated** planning recommendation based on separately testable outcomes. Use the existing documentation as evidence and decision input. Some pages feed multiple specs, while the index, review, and coverage pages do not describe product features.

No backend or authentication spec is included. The current repository contains a browser application, an external contact API client, and in-memory shopping data. Add a separate spec if the React project needs a new backend, persistent data, identity, or authorization.

## Scope and labels

The target is a React browser application that recreates the routes and visible feature areas documented below. The source uses Angular 6 and TypeScript, but the request only fixes React as the target framework.

The current source inventory and measured counts are in the [system inventory](system-inventory.md), with command evidence in the [coverage ledger](coverage.md). The [configuration reference](config-reference.md) owns the tracked configuration-file and runtime-setting list.

- **Baseline** identifies behavior or data present in the documentation and source.
- **Recommended target** identifies a safe or complete React behavior that corrects a documented defect. Confirm these choices before treating them as accepted product requirements.
- **Decision needed** identifies behavior the source does not establish. Resolve it before generating a final feature spec.

The current code establishes client behavior. It does not establish whether external writes persist or how incomplete controls should behave. The existing docs report that no live API request was made and no build or test command was run.

## Recommended spec set

| ID | Suggested Spec Kit slug | Scope |
|---|---|---|
| 001 | `app-shell-navigation` | Shared layout, route map, navigation, cart link, search and account placeholders, and unknown routes. |
| 002 | `contact-management` | Contact list, create, detail, edit, form rules, and the external contact API contract. |
| 003 | `product-catalog` | The static product list, cards, add-to-cart entry point, and product-detail placeholder. |
| 004 | `shopping-cart` | Shared in-memory cart, initial item, item count, cart rows, and incomplete cart actions. |
| 005 | `react-learning-demos` | React equivalents for the examples on the concepts page. |
| 006 | `about-ui-demos` | The controls, formatting examples, and URL-safety example on the about page. |
| 007 | `react-project-foundation` | React tooling, browser targets, runtime resources, tests, build output, and deployment boundary. |

Suggested feature-spec paths are `specs/001-app-shell-navigation/spec.md` through `specs/007-react-project-foundation/spec.md`. The final Spec Kit workflow can adjust names after the open decisions below are resolved.

## Requirements by spec

### 001. App shell and navigation

**Outcome:** users can navigate the same page areas through a shared application shell.

- **APP-01, Baseline:** show a shared header, route content, and footer. The current header is fixed at the top of the page.
- **APP-02, Baseline:** support these routes: `/` redirects to `/concepts`; `/concepts` shows the concepts page; `/contacts` shows the contact list; `/contacts/new` shows the create form; `/contacts/:id` shows contact details; `/about` shows the controls and formatting examples; `/products` shows the catalog; `/products/cart` shows the cart; `/products/:id` shows the current product-detail placeholder; unmatched paths show the not-found view.
- **APP-03, Baseline:** provide navigation links for Home, Concepts, Contacts, PrimeNg, and Shopping. The Home link opens `/`, which redirects to `/concepts`.
- **APP-04, Baseline:** show a Cart button with the current number of cart entries and route it to `/products/cart`. The cart spec owns the count semantics.
- **APP-05, Baseline:** retain a not-found view for unmatched routes. The current text is a development placeholder and needs product wording.
- **APP-06, Decision needed:** the search button only writes its input to the browser console. Decide whether the React shell keeps a demo search control, removes it, or filters data.
- **APP-07, Decision needed:** Login and Sign up are placeholder links. No identity service exists, and the contact-create guard allows every request. Decide whether the React app keeps these placeholders or adds an authentication feature.
- **APP-08, Decision needed:** confirm the brand text, footer copy, and copyright year before carrying them into the React app.

The current footer contains a Back to Top link and a 2019 ITC Infotech copyright line. The header brand reads Contact Manager with Shopping.

**Evidence:** [route configuration](../src/app/app-routing.module.ts), [product routes](../src/app/shopping/product-routing.module.ts), [application shell](../src/app/app.component.html), [navigation](../src/app/shared/components/nav/nav.component.html), [header](../src/app/shared/components/header/header.component.html), [search behavior](../src/app/shared/components/header/search.component.ts), [footer](../src/app/shared/components/footer/footer.component.ts), [not-found view](../src/app/shared/components/page-not-found/page-not-found.component.html), and [contact-create guard](../src/app/shared/guards/auth.guard.ts).

### 002. Contact management

**Outcome:** users can browse contacts, create a contact, open its details, and update a contact through the external API client.

The contact record has `id` as a number and `name`, `phone`, and `email` as strings. The client expects those fields at runtime but does not validate response bodies.

| Operation | Current request | Current payload or expected response |
|---|---|---|
| List contacts | `GET https://jsonplaceholder.typicode.com/users` | Expects `IContact[]`. |
| Create contact | `POST https://jsonplaceholder.typicode.com/users` | Sends `name`, `phone`, and `email`; the form omits `id`. Expects an `IContact` response. |
| Read contact | `GET https://jsonplaceholder.typicode.com/users/{id}` | Uses the route ID and expects an `IContact`. |
| Update contact | `PUT https://jsonplaceholder.typicode.com/users/{id}` | Uses the record ID and sends the full contact object. Expects an `IContact` response. |

- **CONTACT-01, Baseline:** load the list on `/contacts`, show each contact's name and phone, and provide links to its detail route. Provide a link to `/contacts/new`.
- **CONTACT-02, Baseline:** the create form has name, phone, and email controls. The form marks all three required and applies an email-format validator to email. It shows field errors after the user touches an invalid control.
- **CONTACT-03, Baseline:** after a create response with a truthy `id`, show the existing success message. The source handler sends form values without checking form validity.
- **CONTACT-04, Baseline:** `/contacts/:id` loads and displays the selected record's name, phone, and email.
- **CONTACT-05, Baseline:** the edit action opens a modal with a copy of the selected record. Saving sends a PUT request and shows a success message before closing the modal and refreshing the displayed record.
- **CONTACT-06, Recommended target:** if the edit form offers phone and email as editable fields, bind them to the update data and verify that the submitted request contains the chosen values. The current form only binds name.
- **CONTACT-07, Recommended target:** prevent invalid create submissions when the form advertises required fields and email validation. The current handler submits without checking validity.
- **CONTACT-08, Decision needed:** define loading, empty, and request-failure states. The current list shows one fallback while data is unset, including during a pending or failed request; an empty array hides that fallback.
- **CONTACT-09, Decision needed:** confirm whether the React app will keep the JSONPlaceholder URL. The repository does not establish the remote service's persistence, authentication, status codes, or error bodies.
- **CONTACT-10, Decision needed:** the detail view shows a Delete button, but the client defines no delete operation and the button has no action. Add deletion only if the product owner confirms its API and expected result.

No route or API behavior defines authentication. The React spec should state whether the current public access remains in scope.

**Evidence:** [API reference](./api/api-reference.md), [contact data model](./data-model/data-model.md), [contact-list flow](./architecture/diagrams/contact-list-flow.md), [contact interface](../src/app/contacts/IContact.ts), [contact service](../src/app/contacts/contact.service.ts), [list component](../src/app/contacts/contacts-list/contacts-list.component.ts), [list template](../src/app/contacts/contacts-list/contacts-list.component.html), [create component](../src/app/contacts/add-contact/add-contact.component.ts), [create template](../src/app/contacts/add-contact/add-contact.component.html), [details component](../src/app/contacts/contact-details/contact-details.component.ts), and [details template](../src/app/contacts/contact-details/contact-details.component.html).

### 003. Product catalog

**Outcome:** users can browse the sample catalog and start a cart action from a product card.

The catalog is a hard-coded list of 10 products. Each record has a numeric ID and string fields for name, category, and display price.

| ID | Name | Category | Display price |
|---:|---|---|---:|
| 1 | Apple | Fruits | $2.76 |
| 2 | Cheese | Dairy | $6.38 |
| 3 | Orange | Fruits | $4.85 |
| 4 | Tomato | Vegetables | $5.01 |
| 5 | Table Cloth | Kitchen Essentials | $6.13 |
| 6 | Cranberries - Frozen | Fruits | $7.08 |
| 7 | Angular 7 Book | Books | $6.89 |
| 8 | NFS - PS4 Game | Games | $9.48 |
| 9 | Pepper | Grocery | $5.51 |
| 10 | Potatoes - Organic | Vegetables | $9.63 |

- **CAT-01, Baseline:** show the sample products as cards with a name, placeholder image, generic description, display price, and Add to cart action.
- **CAT-02, Baseline:** link each product name to `/products/:id`. The current route renders placeholder text rather than product details.
- **CAT-03, Baseline:** keep the product category in the record because cart rows display it. The catalog cards currently display name and price, not category.
- **CAT-04, Decision needed:** choose whether product details remain a placeholder or gain a real product view. The source does not specify detail fields or behavior.
- **CAT-05, Decision needed:** decide whether the list remains hard-coded and whether to retain the external placeholder image or use local assets.

The cart spec owns the result of Add to cart. Product prices are display strings, not numeric values suitable for totals.

**Evidence:** [data model](./data-model/data-model.md), [product model and sample data](../src/app/shared/models/product.ts), [product list](../src/app/shopping/product-list/product-list.component.html), [product detail placeholder](../src/app/shopping/product-details/product-details.component.html), and [product routes](../src/app/shopping/product-routing.module.ts).

### 004. Shopping cart

**Outcome:** users can view the shared cart, see its item count, and add products from the catalog.

- **CART-01, Baseline:** initialize the cart with Cheese, product ID 2, priced at `$6.38`.
- **CART-02, Baseline:** keep cart state in browser memory and share it between the header and cart page. Restarting the application resets the cart to its initial item.
- **CART-03, Baseline:** append each selected product to the cart. The current code allows duplicate entries.
- **CART-04, Baseline:** show each cart row's name, category, and display price. Show the number of cart entries in the header.
- **CART-05, Recommended target:** if removal remains available, remove the selected cart entry. The current handler passes a product object to code that expects an array index, so it removes the first entry.
- **CART-06, Decision needed:** the quantity input is fixed at 1 and is not connected to cart state. The model has no quantity field.
- **CART-07, Decision needed:** the total is placeholder text, and Checkout has no action. Decide whether to keep these as placeholders or specify quantity, total, and checkout behavior.
- **CART-08, Decision needed:** choose duplicate-item behavior and whether cart data should persist across browser restarts. Current behavior appends duplicates and does not persist.

The cart uses a product price string, so numeric totals require a new price representation and an agreed currency rule.

**Evidence:** [cart data model](./data-model/data-model.md), [cart service](../src/app/shared/services/shopping-cart-data.service.ts), [cart component](../src/app/shopping/cart/cart.component.ts), [cart view](../src/app/shopping/cart/cart.component.html), and [header cart count](../src/app/shared/components/header/header.component.ts).

### 005. React learning demos

**Outcome:** users can view and interact with the learning examples at `/concepts`, rewritten to demonstrate React concepts.

The source page has tabs for Data Binding, Custom Property Binding, Custom Event Binding, Directives, and Pipes.

- **DEMO-01, Recommended target:** represent the current data-binding examples with React state, props, event handlers, controlled inputs, conditional classes, and rendered values.
- **DEMO-02, Baseline:** retain the data examples: app name `Contact Manager`, login state `false`, skills `html`, `nodejs`, `react`, and `ng`, experience `13`, and an editable company value starting at `ITC`.
- **DEMO-03, Baseline:** show a child example with ages 20, 30, 50, 100, and 65 to demonstrate props.
- **DEMO-04, Baseline:** provide a child-button example that waits 2 seconds, sends `Arun` to its parent, and displays the received value.
- **DEMO-05, Baseline:** show conditional login text, the skills `html`, `css`, `java`, and `maven`, plus a yellow 200-pixel demonstration block.
- **DEMO-06, Decision needed:** the Pipes tab is empty, the `ngSwitch` example is a TODO, and some Angular binding examples do not work. Decide which examples to complete and whether the learning page should retain deliberate failure examples.
- **DEMO-07, Recommended target:** use React terminology and working React examples. Do not expose Angular-specific directives or binding syntax as if they were React behavior.

The current logged-in example is local demonstration state. It does not establish an authentication feature.

**Evidence:** [concepts page](../src/app/concepts/concepts.component.html), [data-binding example](../src/app/concepts/databinding/databinding.component.html), [property example](../src/app/concepts/cpb/cpb.component.html), [event example](../src/app/concepts/ceb/ceb.component.ts), [structural example](../src/app/concepts/sd/sd.component.html), and [color directive](../src/app/concepts/colorizr.directive.ts).

### 006. About UI demos

**Outcome:** users can explore the controls and formatting examples currently shown at `/about`.

- **ABOUT-01, Baseline:** show a chips control, a range slider initialized to 20 and 80, and a Send Data button. The current button writes both values to the browser console.
- **ABOUT-02, Baseline:** show the birthday value formatted with the default date format and with `dd/MMMM/yyyy hh:mm:ss a`.
- **ABOUT-03, Baseline:** show the sample text as entered, uppercased, and truncated with ellipses at 60 and 240 characters.
- **ABOUT-04, Decision needed:** PrimeNG controls cannot be reused as Angular components in a React app. Choose React-compatible controls or native inputs, and define how the chips and range values behave.
- **ABOUT-05, Recommended target:** do not render a clickable `javascript:` URL. The current page marks `javascript:alert("Hi there")` as trusted through Angular's sanitizer. Replace that example with a harmless URL-safety demonstration or remove it.
- **ABOUT-06, Decision needed:** the template refers to `htmlSnippet` and `trustedHtmlSnippet`, which the component does not declare. Confirm whether the HTML example belongs in the React page and define its content and safety behavior.

**Evidence:** [about template](../src/app/about/about.component.html), [about component](../src/app/about/about.component.ts), and [ellipsis pipe](../src/app/shared/pipes/ellipsis.pipe.ts).

### 007. React project foundation

**Outcome:** developers can install, run, test, and build the React app as a browser application.

- **PLATFORM-01, Baseline:** deliver a browser-only single-page application. The repository contains no application server, database, schema, migration, or browser-storage implementation.
- **PLATFORM-02, Decision needed:** choose JavaScript or TypeScript, routing and build tools, React-compatible component library, test runner, and supported Node.js and npm versions. The current repository uses TypeScript 2.9.2 and does not pin Node.js or npm.
- **PLATFORM-03, Recommended target:** provide documented install, development-server, production-build, unit-test, lint, and end-to-end test commands for the React project.
- **PLATFORM-04, Baseline:** retain the current browser target policy unless the product owner changes it: usage above 0.5%, the last 2 versions, Firefox ESR, non-dead browsers, and no IE 9 through 11.
- **PLATFORM-05, Decision needed:** replace or intentionally retain the current runtime resources. The existing resource inventory is:

  | Current resource | Current use | Spec owner and decision |
  |---|---|---|
  | `jsonplaceholder.typicode.com/users` | Contact API | Spec 002 owns the wire contract and whether to keep this endpoint. |
  | Bootstrap 4.3.1 CDN, jQuery 3.3.1 CDN, and Popper 1.14.7 CDN | Page styling, Bootstrap interactions, and the edit modal | Choose local React-compatible dependencies or retain external resources. |
  | PrimeNG 7.1.2 and PrimeIcons 1.0.0 | About-page controls and icons | Choose React-compatible controls and icon resources. |
  | `dummyimage.com` | Product-list placeholder image | Choose an external image or local asset. |
  | `placehold.it` over HTTP | Cart placeholder image | Choose a local or HTTPS image resource. |

- **PLATFORM-06, Baseline:** produce static browser assets for the production build. The existing app uses `/` as its base path and writes Angular output to `dist/contact-manager-ng6`; the React output path is a project decision.
- **PLATFORM-07, Decision needed:** select a host, direct-route fallback, deployment procedure, and non-root path policy. The repository defines no production host, deployment configuration, CI workflow, rollback procedure, or monitoring.
- **PLATFORM-08, Baseline:** replace the Angular test suite with tests that verify the React specs. Existing test sources contain stale expectations, and the docs report no test run.
- **PLATFORM-09, Decision needed:** set the production contact endpoint and configuration mechanism. The current URL is hard-coded, and the application reads no environment variables.

The project foundation spec owns framework and delivery choices. Feature specs own route behavior, contact requests, catalog data, cart rules, and page-level interactions.

**Evidence:** [developer setup](./development/setup-and-testing.md), [deployment boundary](./operations/deployment.md), [integration inventory](./integrations/integrations.md), [browser targets](../src/browserslist), [package manifest](../package.json), [Angular build configuration](../angular.json), and [browser document](../src/index.html).

## Decisions before final specs

Resolve these decisions before treating the candidate requirements as final acceptance criteria:

| Decision | Candidate spec |
|---|---|
| React language, router, build and test tools, UI library, and supported runtime versions | 007 |
| Keep or replace the contact endpoint; define persistence, validation, and loading, empty, and failure states | 002 |
| Define contact edit fields, deletion, and authentication scope | 001, 002 |
| Keep placeholder product details or specify a full detail page | 003 |
| Define duplicate items, selected-item removal, quantity, totals, checkout, and persistence | 004 |
| Complete the empty Pipes and TODO examples, and set the concepts page's React teaching scope | 005 |
| Replace the unsafe URL example and decide whether to render an HTML example | 006 |
| Select external assets, hosting, route fallback, and deployment procedure | 007 |

Treat every **Recommended target** as a proposal until the product owner accepts it. Keep each **Decision needed** item visible in the corresponding Spec Kit feature until the owner resolves it.

## Source-to-spec crosswalk

| Documentation page | Spec destination | Use |
|---|---|---|
| [Documentation index](./README.md) | No feature spec | Use as a navigation aid. |
| [Repository overview](./architecture/repository-overview.md) | 001 through 007 | Use for app boundaries, routes, and feature areas. |
| [Contact-list flow](./architecture/diagrams/contact-list-flow.md) | 002 | Use for the current contact-list request and its visible states. |
| [API reference](./api/api-reference.md) | 002 | Use for the four contact operations and record shape. |
| [Data model](./data-model/data-model.md) | 002, 003, 004 | Use for contact fields, product records, and cart state. |
| [Integrations](./integrations/integrations.md) | 002, 003, 004, 006, 007 | Use for API, CDN, package, and image dependencies. |
| [Developer setup and testing](./development/setup-and-testing.md) | 007 | Use for current commands, browser targets, and test gaps. |
| [Deployment boundary](./operations/deployment.md) | 007 | Use for build artifact and missing host configuration. |
| [Findings](./findings.md) | 001, 002, 004, 005, 006 | Treat defects as review inputs, not target behavior. |
| [Unknowns](./unknowns.md) | 002, 003, 004, 007 | Carry unresolved product and runtime decisions forward. |
| [Coverage ledger](./coverage.md) | No feature spec | Use to assess the source inventory and documentation status. |
| [Documentation review](./reviews/documentation-review.md) | No feature spec | Use as evidence that the source docs remain drafted and unreviewed. |
