import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: ['en', 'fr', 'nl'],

	defaultLocale: 'en',
});

export const config = {
	matcher: ['/', '/(nl|fr|en)/:path*'],
};
