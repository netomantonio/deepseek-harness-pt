---
description: "The shipped Brazilian Portuguese (pt-BR) language pack for the web GUI: registers the language definition and the pt-BR dictionary for every shipped namespace."
kind: "package-reference"
---

# @deepseek-ai/dsh-client-locale-pt

## Summary

Use `dsh-client-locale-pt` to run the web GUI in Brazilian Portuguese. The package registers one language definition (`pt-BR`, falling back to English) and the pt-BR dictionary for every namespace the shipped feature plugins register. Pick `Português (Brasil)` under Settings → General → Idioma; the choice persists like the built-in locales through the locale service.

## Model Experience

None, as the language pack is a browser-side UI plugin layer that registers nothing model-facing.

#### KV Cache effect

None; this package neither assembles nor sends a provider request.

## Known Limitations and Deferred Work

<a id="known-limitations-and-deferred-work"></a>

- **Missing keys fall back to English** — the dictionaries use the untyped language-pack form, so a key the pack omits resolves through the `pt-BR` → `en` fallback chain instead of failing at registration. Key completeness is asserted by the pack's own parity spec, not the built-in typed dictionary gate.
- **Product and protocol tokens stay verbatim** — application names, tool names, paths, URLs, JSON literals, and stable ids are data, not product wording, and are not translated.
