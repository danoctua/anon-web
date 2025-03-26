import {getRequestConfig} from 'next-intl/server';
import {getLocaleFromCookie} from "@/utils/getLocale";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = await getLocaleFromCookie()

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
