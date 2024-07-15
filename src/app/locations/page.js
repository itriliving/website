import HeroSection from '@/components/locations/hero-section';
import LocationsSection from '@/components/common/locations-section';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Locations() {
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col bg-off-white text-dark">
				<HeroSection />
				<LocationsSection />
			</main>
			<Footer />
		</>
	);
}
