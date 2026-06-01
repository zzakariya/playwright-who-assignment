# Playwright WHO Assignment

## Description

This project contains automated end-to-end tests for selected World Health Organization (WHO) health topics journeys. The suite is written with Playwright and TypeScript, using page objects for reusable page and component interactions.

The tests run against the live WHO website at `https://www.who.int` and focus on user-facing navigation, search behavior, and health topic resource links.

## Test Scope

The configured suite covers:

- Global WHO header visibility and navigation.
- Invalid search handling on the WHO search results page.
- Health topic resource links opening successfully without a 404 response.

## Tech Stack

- Playwright Test
- TypeScript
- Chromium browser project
- GitHub Actions for CI

## Project Structure

```text
.
+-- .github/workflows/      # CI workflow
+-- pages/                  # Page objects and reusable components
+-- tests/health-topics/    # Configured Playwright test suite
+-- playwright.config.ts    # Playwright configuration
+-- package.json
`-- tsconfig.json
```

## Running Tests

Run the configured WHO health topics test suite:

```sh
npx playwright test
```

## CI

The GitHub Actions workflow runs the Playwright tests on push and pull request events. It installs project dependencies, installs Playwright browsers, runs the tests, and uploads the HTML report as an artifact.

## Notes

- Tests run against the live WHO website, so failures can be caused by site changes, network issues, or temporary service problems.
- The Playwright config currently runs Chromium only.
