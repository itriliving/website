import Header from '@/components/header';
import Footer from '@/components/footer';
import initTranslations from '@/utils/i18n';
import TranslationsProvider from '@/utils/translations-provider';
import CalendlyWidget from '@/components/callback/calendly-widget';
import { Playfair } from 'next/font/google';

const playfair = Playfair({ subsets: ['latin'] });

const namespaces = ['Callback', 'Common'];

export default async function Callback({ params: { locale } }) {
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
				<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent">
					<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] text-center">
						<h1
							className={
								'text-4xl lg:text-5xl xl:text-6xl font-medium mb-4 ' +
								playfair.className
							}
						>
							Learn about Itri Membership
						</h1>
						<p className="text-base md:text-lg xl:text-xl">
							Want to learn more? Book a call and we&apos;ll help
							answer your questions.
						</p>
					</div>
				</section>
				<CalendlyWidget />
			</main>
			<Footer locale={lang} namespaces={namespaces} />
		</TranslationsProvider>
	);
}
