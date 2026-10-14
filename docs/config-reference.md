> Status: Drafted. Configuration claims were checked against tracked commit `6726604274f0edbef5ef715ee6759a65ed7f959b` on 2026-10-13. Independent review is outstanding.

# Configuration reference

The Angular build selects the development or production environment file through the `production` flag. This reference lists the tracked application, build, test, lint, package, browser-target, and editor configuration. The [system inventory](system-inventory.md) summarizes the counts; the [coverage ledger](coverage.md) records the evidence commands.

## Runtime setting

| Key | Development value | Production value | Source | Usage |
|---|---|---|---|---|
| `environment.production` | `false` | `true` | [`environment.ts`](../src/environments/environment.ts), [`environment.prod.ts`](../src/environments/environment.prod.ts) | The production build replaces the development environment file through [`angular.json`](../angular.json). The application entry point enables Angular production mode when the value is true. |

## Environment variables

No tracked `.env` file exists, and application source contains no `process.env` or `import.meta.env` lookup. The repository does not specify deployment-provided variable names.

## Tracked configuration and package files

| File | Purpose |
|---|---|
| [`.editorconfig`](../.editorconfig) | Sets editor defaults for encoding, indentation, final newlines, and trailing whitespace. |
| [`angular.json`](../angular.json) | Defines Angular CLI projects and build, serve, test, lint, and end-to-end targets, including production file replacement. |
| [`e2e/protractor.conf.js`](../e2e/protractor.conf.js) | Configures the Protractor end-to-end runner, Chrome, Jasmine, and its local base URL. |
| [`e2e/tsconfig.e2e.json`](../e2e/tsconfig.e2e.json) | Sets TypeScript options for end-to-end tests. |
| [`package-lock.json`](../package-lock.json) | Locks the resolved npm dependency tree. |
| [`package.json`](../package.json) | Declares package metadata, dependencies, and npm scripts. |
| [`src/browserslist`](../src/browserslist) | Defines the browser targets used by build tooling. |
| [`src/environments/environment.prod.ts`](../src/environments/environment.prod.ts) | Sets the production environment flag. |
| [`src/environments/environment.ts`](../src/environments/environment.ts) | Sets the development environment flag. |
| [`src/karma.conf.js`](../src/karma.conf.js) | Configures Karma, Jasmine, Chrome, coverage reporting, and test watch behavior. |
| [`src/tsconfig.app.json`](../src/tsconfig.app.json) | Sets TypeScript options for application compilation. |
| [`src/tsconfig.spec.json`](../src/tsconfig.spec.json) | Sets TypeScript options for unit-test compilation. |
| [`src/tslint.json`](../src/tslint.json) | Adds Angular selector rules for application linting. |
| [`tsconfig.json`](../tsconfig.json) | Defines shared TypeScript compiler options. |
| [`tslint.json`](../tslint.json) | Defines the base TypeScript and Angular lint rules. |

## Fixed source values

The application fixes both values in source.

| Value | Source | Usage |
|---|---|---|
| Contact API base URL | [`contact.service.ts`](../src/app/contacts/contact.service.ts) | The client hard-codes the URL. The [API reference](api/api-reference.md) owns its value and operation paths. |
| HTML base URL | [`index.html`](../src/index.html) | The document fixes the route and asset base path. The [deployment boundary](operations/deployment.md) records its value. |
