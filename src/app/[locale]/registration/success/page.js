import Header from '@/components/header';
import Footer from '@/components/footer';
import initTranslations from '@/utils/i18n';
import TranslationsProvider from '@/utils/translations-provider';
import SuccessSection from '@/components/registration/success-section';

const namespaces = ['Registration', 'Common'];

export default async function Success({ params: { locale } }) {
	const { t, resources } = await initTranslations(locale, namespaces);
	const lang = locale;

	return (
		<TranslationsProvider
			locale={locale}
			resources={resources}
			namespaces={namespaces}
		>
			<Header locale={lang} namespaces={namespaces} />
			<main className="flex min-h-screen flex-col bg-off-white text-dark">
				<SuccessSection locale={lang} namespaces={namespaces} />
			</main>
			<Footer locale={lang} namespaces={namespaces} />
		</TranslationsProvider>
	);
}
