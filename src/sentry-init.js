import * as Sentry from "@sentry/browser"
import { Integrations } from "@sentry/tracing"


Sentry.init({
  environment: 'sentry-weird-behavior',
  dsn: 'https://a8f3c6f7b2bf48269963f6771e7bb861@o363704.ingest.sentry.io/6116481',
  releaseName: `sentry-weird-behavior`,
  logErrors: true,
  integrations: [
    new Integrations.BrowserTracing()
  ],
  tracesSampleRate: 1.0,
  tracingOptions: {
    trackComponents: true
  }
});


export { Sentry }