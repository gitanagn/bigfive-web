import createMiddleware from 'next-intl/middleware';
import { localePrefix } from './navigation';
import { locales } from './config/site';

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'lt'
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
  '/',
  '/(en|lt|ar|de|es|fr|id|it|no|pt|sv|uk|da|fi|hi|is|ja|pl|ru|th|zh)/:path*',
  '/((?!_next|_vercel|.*\\..*).*)'
]
};
