> Status: Drafted. Inventory commands were run against tracked `HEAD` on 2026-10-13. Independent review is outstanding.

# Coverage ledger

The source inventory uses tracked commit `6726604274f0edbef5ef715ee6759a65ed7f959b`. Counts describe that commit and can drift when source or configuration changes.

## Surface coverage

| Surface | Inventory denominator | Documented coverage |
|---|---:|---|
| `src/app` files | 76 total: 56 TypeScript, including 26 specs; 17 templates; 3 other files. | Application areas and responsibilities are summarized in the [repository overview](architecture/repository-overview.md). |
| Angular declarations | 19 components, 4 modules, 4 injectable declarations, 1 directive, and 1 pipe. | Responsibilities are grouped by feature in the repository overview. |
| Route records | 11 across the root and product route configurations. | All effective paths and the nested contacts grouping are listed in the repository overview. |
| Inbound HTTP API endpoints | 0 implemented by this repository. | The [API reference](api/api-reference.md) documents the outbound browser calls and states that this repository contains no API server. |
| Contact HTTP operations | 4 outbound client operations. | All 4 appear in the [API reference](api/api-reference.md). |
| Runtime external hosts | 6 hosts. | All 6 appear in [integrations](integrations/integrations.md). |
| Tracked configuration and package files | 15 files. | All files and their purposes are listed in the [configuration reference](config-reference.md). |
| npm scripts | 6 scripts. | All 6 are listed in the [developer guide](development/setup-and-testing.md). |
| Unit and end-to-end tests | 26 unit spec files with 28 test cases; 1 end-to-end spec with 1 test case. | Runner configuration and observed test gaps are described in the developer guide and [findings](findings.md). |
| Application runtime settings | 1 `production` key with 2 source declarations; 0 environment-variable lookups. | The values and complete configuration-file list are documented in the [configuration reference](config-reference.md). |
| Database tables | 0. No database access code, browser-storage calls, schema, or migration files were identified in tracked application source. | Current contact and cart storage behavior is described in the [data model](data-model/data-model.md). |
| Scheduled background jobs | 0. Two one-shot UI timers are not scheduled jobs. | The distinction is recorded in the [system inventory](system-inventory.md). |
| Deployment automation | No matching CI or deployment files found. | The known artifact and unverified deployment boundary are recorded in [operations](operations/deployment.md). |
| Existing Markdown at `HEAD` | 1 tracked Markdown file, the root README. | The README is updated, and the docs tree is indexed in [docs/README.md](README.md). |

## Commands and evidence

Each command below was run on 2026-10-13 against tracked `HEAD`.

### Source and declaration counts

```sh
git ls-tree -r --name-only HEAD -- src/app | awk 'BEGIN{ts=0; spec=0; html=0} /\.ts$/ {ts++} /\.spec\.ts$/ {spec++} /\.html$/ {html++} END{printf "TypeScript=%d spec=%d templates=%d other=%d total=%d\n", ts, spec, html, NR-ts-html, NR}'
```

```sh
git grep -h -o '@Component(' HEAD -- src/app | wc -l
git grep -h -o '@NgModule(' HEAD -- src/app | wc -l
git grep -h -o '@Injectable(' HEAD -- src/app | wc -l
git grep -h -o '@Directive(' HEAD -- src/app | wc -l
git grep -h -o '@Pipe(' HEAD -- src/app | wc -l
```

### Routes and HTTP operations

```sh
git grep -h -E '\{ path:' HEAD -- src/app/app-routing.module.ts src/app/shopping/product-routing.module.ts | wc -l
git grep -h -E '(express|router|app)\.(get|post|put|patch|delete)\(|@(Get|Post|Put|Patch|Delete)Mapping|@RequestMapping|createServer\(' HEAD -- src | wc -l
git grep -h -o -E 'this\.http\.(get|post|put|delete|patch)' HEAD -- src/app | wc -l
git grep -n -E 'ContactsComponent|app-contacts([^a-z-]|$)' HEAD -- src/app
```

### Tests, external hosts, and scripts

```sh
git ls-tree -r --name-only HEAD -- src/app | grep -E '\.spec\.ts$' | wc -l
git ls-tree -r --name-only HEAD -- e2e | grep -E '\.e2e-spec\.ts$' | wc -l
git grep -h -E '^[[:space:]]*it\(' HEAD -- src/app | wc -l
git grep -h -E '^[[:space:]]*it\(' HEAD -- e2e | wc -l
git grep -h -o -E 'https?://[^/" ]+' HEAD -- src/index.html src/app/contacts/contact.service.ts src/app/shopping/product-list/product-list.component.html src/app/shopping/cart/cart.component.html | sort -u
git grep -h -o -E 'https?://[^/" ]+' HEAD -- src/index.html src/app/contacts/contact.service.ts src/app/shopping/product-list/product-list.component.html src/app/shopping/cart/cart.component.html | sed -E 's#https?://##' | sort -u | wc -l
git grep -h -E '^    "[^"]+": "ng' HEAD -- package.json | wc -l
git grep -h -o 'production:' HEAD -- src/environments/environment.ts src/environments/environment.prod.ts | wc -l
```

### Configuration and repository surfaces

```sh
git ls-tree -r --name-only HEAD | grep -Ei '(^|/)(angular\.json|package(-lock)?\.json|tsconfig[^/]*\.json|tslint\.json|karma\.conf\.js|protractor\.conf\.js|environment[^/]*\.ts|browserslist|\.env([^/]*)|\.npmrc|\.nvmrc|\.editorconfig|[^/]*\.ya?ml|[^/]*\.toml|[^/]*\.config\.[^/]+)$' | sort -u | wc -l
git grep -h -o -E 'environment\.production' HEAD -- src | sort -u | wc -l
git grep -h -E 'process\.env|import\.meta\.env' HEAD -- src package.json angular.json | wc -l
git ls-tree -r --name-only HEAD | grep -E '(^|/)\.env([^/]*)$' | wc -l
git grep -n -i -E 'localStorage|sessionStorage|indexedDB|document\.cookie|sqlite|mongoose|sequelize|firestore|firebase|prisma|database' HEAD -- src
git ls-tree -r --name-only HEAD | grep -Ei '(^|/)(migrations?|schemas?|db)/|\.(sql|prisma)$'
git ls-tree -r --name-only HEAD | grep -E '(^|/)(\.github/workflows/[^/]+|\.travis\.yml|azure-pipelines\.yml|bitbucket-pipelines\.yml|Jenkinsfile|Dockerfile|docker-compose[^/]*\.ya?ml|Procfile|netlify\.toml|vercel\.json|firebase\.json)$'
git ls-tree -r --name-only HEAD | grep -E '\.md$'
git ls-tree -r --name-only HEAD | grep -Ei '(openapi|swagger|asyncapi|api[-_]?spec|\.ya?ml$)'
git ls-tree -r --name-only HEAD | grep -Ei '(^|/)(server|backend|api)/|(^|/)(main|index)\.(go|py|java|cs|rs)$'
git grep -n -i -E 'stripe|paypal|braintree|adyen|sendgrid|mailgun|nodemailer|smtp|payment|amazon.?ses' HEAD -- src package.json angular.json
git grep -h -i -E 'localStorage|sessionStorage|indexedDB|document\.cookie|sqlite|mongoose|sequelize|firestore|firebase|prisma|database|postgres|mysql|mongodb' HEAD -- src package.json angular.json | wc -l
git grep -h -i -E 'cron|@Scheduled|node-cron|node-schedule|scheduleJob|setInterval|new Worker|Queue\(' HEAD -- src e2e package.json angular.json | wc -l
git grep -n -E 'setTimeout|setInterval' HEAD -- src
```

The contacts-placeholder search returns only its declaration and spec; the active route uses the contact list. The environment-variable, persistence, schema, CI/deployment, API-specification, server-path, payment-provider, and email-provider searches returned no matches. The scheduled-job search returned no registrations. The timer search found two one-shot UI callbacks. The Markdown search returned only `README.md`.

## Document status

Every document below is source-checked by the author. No independent second reader reviewed the set, so the status remains Drafted.

| Document | Status |
|---|---|
| [`README.md`](../README.md) | Drafted, source-checked by author. |
| [`docs/README.md`](README.md) | Drafted, source-checked by author. |
| [`system-inventory.md`](system-inventory.md) | Drafted, source-checked by author. |
| [`config-reference.md`](config-reference.md) | Drafted, source-checked by author. |
| [`spec-requirements.md`](spec-requirements.md) | Drafted; recommended spec count and boundaries are estimates. |
| [`repository-overview.md`](architecture/repository-overview.md) | Drafted, source-checked by author. |
| [`contact-list-flow.md`](architecture/diagrams/contact-list-flow.md) | Drafted, source-checked by author. |
| [`data-model.md`](data-model/data-model.md) | Drafted, source-checked by author. |
| [`api-reference.md`](api/api-reference.md) | Drafted, source-checked by author. |
| [`integrations.md`](integrations/integrations.md) | Drafted, source-checked by author. |
| [`setup-and-testing.md`](development/setup-and-testing.md) | Drafted, source-checked by author. |
| [`deployment.md`](operations/deployment.md) | Drafted, source-checked by author. |
| [`findings.md`](findings.md) | Drafted, source-checked by author. |
| [`unknowns.md`](unknowns.md) | Drafted, source-checked by author. |
| [`coverage.md`](coverage.md) | Drafted, source-checked by author. |
| [`documentation-review.md`](reviews/documentation-review.md) | Drafted, source-checked by author. |
