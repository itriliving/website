import { Raleway } from 'next/font/google';
import i18nConfig from '@/config/i18Config';
import { dir } from 'i18next';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
	title: 'Itri Living',
	description:
		'Itri Living is a community of like-minded individuals who value exceptional moments, a sense of community, and a love for our planet.',
};

export function generateStaticParams() {
	return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ params: { locale }, children }) {
	return (
		<html lang={locale} dir={dir(locale)}>
				<body className={raleway.className}>{children}</body>
		</html>
	);
}
