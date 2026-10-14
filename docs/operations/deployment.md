> Status: Drafted. Source claims were checked by the author. Independent review is outstanding.

# Deployment boundary

The Angular CLI build target writes browser assets to `dist/contact-manager-ng6`, as configured by [`angular.json`](../../angular.json) and the document base in [`src/index.html`](../../src/index.html). This repository defines no deployment target.

## Available build artifact

The production build replaces the development environment file and enables optimization, output hashing, AOT compilation, CSS extraction, license extraction, and build optimization. The command is `npm run build -- --prod`; it was not run during documentation review because dependencies were not installed.

The document base is `/`, and the router handles application paths in the browser. The repository does not define a host rewrite for direct requests to nested routes or a non-root deployment path.

## Missing operational procedures

The tracked repository contains no CI workflow, container definition, hosting configuration, infrastructure definition, deployment script, rollback procedure, or monitoring setup. The repository does not identify a production host or a release process.

The browser calls the external contact API and loads the external resources listed in [integrations](../integrations/integrations.md). No server-side component in this repository owns those calls. Production network policy, API availability, and browser route fallback remain unverified; see [unknowns](../unknowns.md).
