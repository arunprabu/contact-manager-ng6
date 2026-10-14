> Status: Drafted. Counts were measured against tracked commit `6726604274f0edbef5ef715ee6759a65ed7f959b` on 2026-10-13. Independent review is outstanding.

# System inventory

This repository builds a browser application and contains no API server. The counts describe checked-in source and configuration; deployed runtime state was not checked. The [coverage ledger](coverage.md) records the commands behind each count.

## Counts

| Surface | Count | What it covers |
|---|---:|---|
| Inbound HTTP API endpoints | 0 | This repository does not implement an HTTP server. |
| Outbound HTTP API operations | 4 | Browser calls for contact list, create, read by ID, and update. See the [API reference](api/api-reference.md). |
| Browser navigation route records | 11 | Angular route registrations that control browser navigation. See [routes](architecture/repository-overview.md#routes). |
| Tracked configuration and package files | 15 | Build, environment, test, lint, browser-target, editor, and package files. See the [configuration reference](config-reference.md). |
| Application runtime setting keys | 1 | `environment.production`, declared for development and production. See the [configuration reference](config-reference.md). |
| Environment-variable lookups | 0 | No `.env` files or source lookups were found. |
| Database tables | 0 | No database integration, schema, or migration files are present. See the [data model](data-model/data-model.md). |
| External runtime hosts | 6 | The contact API, three asset CDNs, and two image hosts. The tracked application declares no payment or email provider. See [integrations](integrations/integrations.md). |
| Scheduled background jobs | 0 | No cron, scheduler, worker, or queue job is registered. |

The concept page starts a two-second delay when the user clicks Load data. The contact detail page starts a three-second delay after a successful update. Both callbacks run once and finish, as shown in [the event example](../src/app/concepts/ceb/ceb.component.ts) and [the contact detail view](../src/app/contacts/contact-details/contact-details.component.ts).
