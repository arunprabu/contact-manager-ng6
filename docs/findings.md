> Status: Drafted. Source claims were checked by the author. Independent review is outstanding.

# Findings

These source observations describe behavior that maintainers may need to classify. Intent cannot be determined from the checked code alone.

- [`src/app/shared/guards/auth.guard.ts:28`](../src/app/shared/guards/auth.guard.ts#L28): the guard returns `true` for every activation, so the contact-create route has no effective authorization check.
- [`src/app/shopping/cart/cart.component.ts:24-25`](../src/app/shopping/cart/cart.component.ts#L24): the cart passes a product object to an operation that treats its argument as an array index; JavaScript converts a plain object to index zero, so the first row is removed instead of the selected row.
- [`src/app/contacts/contact-details/contact-details.component.html:11,35,41`](../src/app/contacts/contact-details/contact-details.component.html#L11): the Delete button has no event handler, and the phone and email inputs are not bound to the update object.
- [`src/app/contacts/add-contact/add-contact.component.ts:30-38`](../src/app/contacts/add-contact/add-contact.component.ts#L30): the create handler sends form values without checking `contactForm.valid`.
- [`src/app/contacts/contacts-list/contacts-list.component.html:12,22`](../src/app/contacts/contacts-list/contacts-list.component.html#L12): the empty-state message appears while the request is pending and after failure, but an empty response array hides it because the template tests array truthiness.
- [`src/app/contacts/contact.service.ts:21,27,37,47,57`](../src/app/contacts/contact.service.ts#L21): contact request and response objects are written to the browser console.
- [`src/app/about/about.component.ts:24-25`](../src/app/about/about.component.ts#L24): the about page marks a `javascript:` URL as trusted with Angular's URL trust bypass. The intended demonstration boundary is not stated.
- [`src/app/about/about.component.html:33-34`](../src/app/about/about.component.html#L33): the template binds `htmlSnippet` and `trustedHtmlSnippet`, which are not declared by the component.
- [`src/app/app.component.spec.ts:21-29`](../src/app/app.component.spec.ts#L21): the unit spec expects a `title` property and welcome `h1` that the current component and root view do not expose.
- [`e2e/src/app.e2e-spec.ts:10-12`](../e2e/src/app.e2e-spec.ts#L10): the end-to-end spec expects a welcome `h1`, while the root route redirects to the concepts page.
- [`src/app/contacts/contact.service.spec.ts:6-10`](../src/app/contacts/contact.service.spec.ts#L6): the service test creates `ContactService` without configuring an `HttpClient` provider.
- [`src/app/contacts/contacts.component.ts:8`](../src/app/contacts/contacts.component.ts#L8): the placeholder component appears only in its own source and spec search; it is not registered, while `/contacts` activates the list view. Whether it should remain is unknown.
