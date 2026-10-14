> Status: Drafted. Source claims were checked by the author. Independent review is outstanding.

# Data model

The browser uses a contact record for remote contact calls and a product record for the local shopping example. Their source shapes are [`IContact`](../../src/app/contacts/IContact.ts), [`Product`](../../src/app/shared/models/product.ts), and [`ShoppingCartDataService`](../../src/app/shared/services/shopping-cart-data.service.ts).

## Contact record

| Field | Type | Required in the TypeScript interface | Meaning |
|---|---|---|---|
| `id` | `number` | Yes | Identifier returned and used in detail and update requests. |
| `name` | `string` | Yes | Contact name. |
| `phone` | `string` | Yes | Contact phone value. |
| `email` | `string` | Yes | Contact email value. |

The interface supplies compile-time types only. The client does not validate remote response bodies at runtime. Contact reads and writes go to the external service described in the [API reference](../api/api-reference.md); the application has no local contact cache.

## Product and cart records

| Field | Type | Meaning |
|---|---|---|
| `id` | `number` | Sample product identifier. |
| `name` | `string` | Product name. |
| `category` | `string` | Product category. |
| `price` | `string` | Display value that includes a currency symbol. |

The product source returns hard-coded sample objects. A cart is an array of those product objects, not a separate persisted entity. The initial cart contains Cheese. Cart state is held in a browser-wide `BehaviorSubject` and resets when the application starts again.

The cart service contains a comment about loading data from a database, but the active implementation uses hard-coded sample data.

The cart model has no quantity field or numeric price. Its quantity input is not connected to cart state, and its total remains placeholder text. The remove action passes a product object to code that treats the value as an array index; the resulting behavior is recorded in the [findings](../findings.md).

## Ownership and lifecycle

Neither record contains an owner, user, or tenant identifier. No access-control rule scopes records by owner. The repository contains no database, browser-storage, schema, or migration implementation.

The contact client exposes create, read, and update requests but no delete operation. The shopping example stores data only in memory. The repository defines no persistence migration or compatibility procedure.
