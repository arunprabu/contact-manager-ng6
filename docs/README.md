> Status: Drafted. Source claims were checked by the author. Independent review is outstanding.

# Documentation index

These pages describe the application represented by the tracked source at `HEAD`. The [coverage ledger](coverage.md) records the source commit, inventory commands, counts, and documentation status.

## Evidence labels

| Label | Meaning |
|---|---|
| Sourced | Read from a tracked source file, manifest, or test. |
| Measured | Produced by a command recorded in the coverage ledger. |
| Estimated | Inferred from source behavior and identified as an inference. |

## System inventory and configuration

- [System inventory](system-inventory.md) summarizes the measured counts for APIs, settings, persistence, integrations, and scheduled jobs.
- [Configuration reference](config-reference.md) lists tracked configuration files, runtime settings, and environment-variable usage.

## Architecture and data

- [Repository overview](architecture/repository-overview.md) maps the browser application, routes, and component areas.
- [Contact-list flow](architecture/diagrams/contact-list-flow.md) shows the verified contact-list request and its current failure path.
- [Data model](data-model/data-model.md) describes contact records, products, and cart state.

## React migration planning

- [React migration spec requirements](spec-requirements.md) proposes the feature-spec boundaries and records unresolved decisions for a React recreation.

## Interfaces and integrations

- [API reference](api/api-reference.md) catalogs the HTTP operations made by the browser client.
- [Integrations](integrations/integrations.md) lists external APIs, CDNs, and image hosts.

## Development and operations

- [Developer setup and testing](development/setup-and-testing.md) lists prerequisites, package commands, tests, and configuration.
- [Deployment boundary](operations/deployment.md) records the build artifact and the deployment details absent from this repository.

## Evidence and review

- [Findings](findings.md) records observed quirks and suspected defects without assigning severity.
- [Unknowns](unknowns.md) names unresolved behavior and the evidence checked.
- [Coverage ledger](coverage.md) records measured inventory and page status.
- [Documentation review](reviews/documentation-review.md) records the source review, findings, and unverified claims.
