import HeroSection from '@/components/locations/hero-section';
import LocationsSection from '@/components/common/locations-section';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GoToTop from '@/components/common/go-to-top';
import initTranslations from '@/utils/i18n';

const namespaces = ['HomePage', 'Common'];

export default async function Locations({ params: { locale } }) {
	const { t, resources } = await initTranslations(locale, namespaces);
	const lang = locale;
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col bg-off-white text-dark">
				<HeroSection />
				<LocationsSection locale={lang} namespaces={namespaces} />
				<GoToTop />
			</main>
			<Footer />
		</>
	);
}
