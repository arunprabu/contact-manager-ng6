> Status: Drafted. Source claims were checked by the author. Independent review is outstanding.

# Developer setup and testing

The project uses Angular CLI scripts declared in [`package.json`](../../package.json), with build and test targets in [`angular.json`](../../angular.json), [`karma.conf.js`](../../src/karma.conf.js), and [`protractor.conf.js`](../../e2e/protractor.conf.js).

## Prerequisites

Install Node.js and npm before installing the package dependencies. The repository does not pin either version in an engine field or version file. Its npm lockfile uses format version 1.

The package lock supports the install command below, and the npm manifest defines the application command. Neither was run during the documentation review because `node_modules` was absent on 2026-10-13.

```sh
npm ci
npm start
```

The development server defaults to `http://localhost:4200/`. Browser access to the contact endpoint and external resources listed in [integrations](../integrations/integrations.md) is required for those screens.

## Package commands

| Command | Purpose | Verification status |
|---|---|---|
| `npm run ng -- <args>` | Forwards arguments to Angular CLI. | Not run. |
| `npm start` | Runs `ng serve` for the development server. | Not run. |
| `npm run build` | Runs the Angular application build. | Not run. |
| `npm run build -- --prod` | Runs the production build configuration. | Not run. |
| `npm test -- --watch=false` | Runs the Karma unit-test target once. | Not run. |
| `npm run lint` | Runs the application TSLint target. | Not run. |
| `npm run e2e` | Runs the Protractor end-to-end target. | Not run. |

The Karma configuration launches Chrome and watches for changes by default. Protractor connects directly to Chrome and uses the Angular CLI development server at port 4200. A standalone type-check script is not defined; the Angular build target performs compilation.

The test tree contains unit and end-to-end specs, but source inspection found stale expectations and incomplete dependency setup. Those observations are recorded in the [findings](../findings.md). No test result is claimed here.

## Application configuration

See the [configuration reference](../config-reference.md) for the tracked configuration files, runtime setting, fixed source values, and environment-variable inventory.

The production configuration replaces the development environment file and enables Angular CLI optimization, output hashing, AOT compilation, and license extraction. The [deployment page](../operations/deployment.md) describes the artifact boundary.

The browser target policy is documented in the [configuration reference](../config-reference.md).
