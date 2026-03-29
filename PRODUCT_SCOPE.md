# Product Technical Scope

Product: Patrick-site  
Type: static personal site

## Platform Standards Applicability

| Capability | Status | Notes |
|------------|--------|------|
| AI Runtime | N/A | No AI runtime surface is part of this product. |
| Stripe Runtime | N/A | No billing or Stripe surface is part of this product. |
| CI Baseline | N/A | Full platform CI baseline is not required for this static personal site scope. |
| Env Contract | Partial | Basic environment handling may exist, but there is no formal contract or validation layer. |
| Observability | N/A | Platform observability stack is not part of this product scope. |
| Feature Flags | N/A | No feature flag system is required for this product scope. |
| Error Contract | N/A | No canonical API error contract is required without an API surface. |

## Architecture Intent

Personal presentation site with minimal runtime and platform expectations.

## Out of Scope

- AI runtime
- Stripe runtime
- Feature flags
- Observability stack
- API error contract work where no API surface exists

## Audit Instructions

Future audit agents must:

- Read this file first
- Treat N/A as intentional
- Treat Partial as real gaps
- Avoid proposing out-of-scope architecture
