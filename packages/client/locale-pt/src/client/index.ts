/**
 * Brazilian Portuguese (pt-BR) language pack, browser half.
 *
 * Registers one language definition that falls back to English and the pt-BR
 * dictionary for every shipped namespace. Dictionaries use the untyped
 * language-pack form (the typed form reserves the closed built-in locale set),
 * so a missing key resolves through the English fallback chain instead of
 * surfacing a bare key. The namespace strings below are the same stable ids
 * the owning feature plugins register; a language pack registers each of them
 * as a separate owned effect.
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
// Type-only: pulls the locale plugin's Context merge (ctx.locale).
import type {} from '@deepseek-ai/dsh-client-locale/client'
import { chatDictionaries } from './locales/chat.ts'
import { conversationDictionaries } from './locales/conversation.ts'
import { coreDictionaries } from './locales/core.ts'
import { sessionsDictionaries } from './locales/sessions.ts'
import { settingsDictionaries } from './locales/settings.ts'
import { sidebarDictionaries } from './locales/sidebar.ts'
import { trajectoryDictionaries } from './locales/trajectory.ts'

/** Stable BCP 47-style id stored as the locale preference. */
const LOCALE_ID = 'pt-BR'

/** Every namespace this pack translates, merged into one registration map. */
const dictionaries: Record<string, Record<string, string>> = {
  ...coreDictionaries,
  ...settingsDictionaries,
  ...conversationDictionaries,
  ...chatDictionaries,
  ...trajectoryDictionaries,
  ...sidebarDictionaries,
  ...sessionsDictionaries,
}

/** Required services (cordis fiber inject). */
export const inject = ['locale']

/**
 * Client plugin body: register the language definition and each namespace's
 * pt-BR dictionary. The language and its dictionaries may register in either
 * order; the runtime keeps them independent until a lookup walks the chain.
 * @param ctx - browser plugin context.
 */
export function apply(ctx: ClientContext): void {
  ctx.effect(
    () => ctx.locale.addLanguage({ id: LOCALE_ID, label: 'Português (Brasil)', fallback: 'en' }),
    'locale-pt: language',
  )
  for (const [ns, dict] of Object.entries(dictionaries)) {
    ctx.effect(
      () => ctx.locale.register(ns, LOCALE_ID, dict),
      'locale-pt: ' + ns + ' dictionary',
    )
  }
}
