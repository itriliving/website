import { Raleway } from 'next/font/google';
import Header from '@/components/header';
import LoginFooter from '@/components/common/login-footer';
import TranslationsProvider from '@/utils/translations-provider';
import initTranslations from '@/utils/i18n';

const raleway = Raleway({ subsets: ['latin'] });

const namespaces = ['Account', 'Common'];

export default async function Layout({ params: { locale }, children }) {
	const { t, resources } = await initTranslations(locale, namespaces);
	const lang = locale;

	return (
		<>
			<Header locale={lang} namespaces={namespaces} />
			{children}
			<LoginFooter locale={lang} namespaces={namespaces} />
		</>
	);
}
