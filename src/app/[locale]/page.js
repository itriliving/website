import HeroSection from '@/components/home/hero-section';
import CtaSection1 from '@/components/home/cta-section-1';
import WbamSection from '@/components/home/wbam-section';
import Blog from '@/components/home/blog';
import CtaSection2 from '@/components/home/cta-section-2';
import Testimonials from '@/components/home/testimonials';
import LocationsSection from '@/components/common/locations-section';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GoToTop from '@/components/common/go-to-top';
import initTranslations from '@/utils/i18n';
import TranslationsProvider from '@/utils/translations-provider';
import Animate from '@/components/common/animate';

const namespaces = ['HomePage', 'Common'];

export default async function Home({ params: { locale } }) {
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
				<HeroSection locale={lang} namespaces={namespaces} />

				<Animate>
					<LocationsSection locale={lang} namespaces={namespaces} />
				</Animate>

				<Animate>
					<CtaSection1 locale={lang} namespaces={namespaces} />
				</Animate>

				<WbamSection locale={lang} namespaces={namespaces} />

				<Animate>
					<Testimonials />
				</Animate>

				<Animate>
					<Blog locale={lang} namespaces={namespaces} />
				</Animate>

				<Animate>
					<CtaSection2 locale={lang} namespaces={namespaces} />
				</Animate>

				<GoToTop />
			</main>
			<Footer locale={lang} namespaces={namespaces} />
		</TranslationsProvider>
	);
}
