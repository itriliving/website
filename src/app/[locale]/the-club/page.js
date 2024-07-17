import HeroSection from '@/components/the-club/hero-section';
import ExtraSection from '@/components/the-club/extra-section';
import SpaceSection from '@/components/the-club/space-section';
import KasbahsSection from '@/components/the-club/kasbahs-section';
import EcoSection from '@/components/the-club/eco-section';
import BenefitsSection from '@/components/the-club/benefits-section';
import CryptoSection from '@/components/the-club/crypto-section';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GoToTop from '@/components/common/go-to-top';

export default function TheClub() {
	return (
		<>
			<Header />
			<main className="flex flex-col justify-between min-h-screen bg-off-white text-dark">
				<HeroSection />
				<ExtraSection />
				<SpaceSection />
				<KasbahsSection />
				<EcoSection />
				<BenefitsSection />
				<CryptoSection />
        <GoToTop />
			</main>
			<Footer />
		</>
	);
}