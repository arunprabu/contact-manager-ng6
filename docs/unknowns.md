> Status: Drafted. Source claims were checked by the author. Independent review is outstanding.

# Unknowns

The repository does not answer the questions below. Each entry names the evidence checked so a maintainer can continue the investigation without treating an inference as fact.

| Question | Evidence checked | Remaining unknown |
|---|---|---|
| What contract, authentication, persistence, status codes, and error bodies does the contact server guarantee? | [Contact client](../src/app/contacts/contact.service.ts), [contact interface](../src/app/contacts/IContact.ts), and the API-specification inventory in [coverage](coverage.md). The tracked tree has no server or API specification. | Remote response guarantees and whether writes persist. No live request was made. |
| Which Node.js and npm versions support the locked dependencies? | [Package manifest](../package.json), [lockfile](../package-lock.json), root version files, and engine fields. | Compatible versions. No version pin exists, and dependencies were not installed for this review. |
| Where is the production bundle hosted, and how are deep links routed? | [Angular build target](../angular.json), [document base URL](../src/index.html), and the tracked deployment-file inventory in [coverage](coverage.md). | Host, SPA fallback, deployment process, and non-root path behavior. |
| What authentication or tenant policy should protect contact creation and records? | [Route guard](../src/app/shared/guards/auth.guard.ts), [login and sign-up links](../src/app/shared/components/header/header.component.html), contact fields, and service calls. | Intended identity, authorization, and ownership rules. |
| Are the repository's unit and end-to-end tests passing at this revision? | [Test source](../src/app/app.component.spec.ts), [Karma configuration](../src/karma.conf.js), and [end-to-end test](../e2e/src/app.e2e-spec.ts). The current environment has no `node_modules`, so no test command was run. | Runtime results and browser-specific failures. |
| Are the external API, CDNs, and image hosts available to production users? | [Integration inventory](integrations/integrations.md) and [package configuration](../package.json). | Current availability, service-level guarantees, and behavior under network failure. |
| What do the incomplete product detail, checkout, cart quantity, and contact delete controls intend to do? | [Product detail template](../src/app/shopping/product-details/product-details.component.html), [cart template](../src/app/shopping/cart/cart.component.html), [contact detail template](../src/app/contacts/contact-details/contact-details.component.html), and their data services. | Intended business behavior and whether the placeholders should remain. |
