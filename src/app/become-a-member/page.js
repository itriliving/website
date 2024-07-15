import HeroSection from '@/components/become-a-member/hero-section';
import Benefits from '@/components/become-a-member/benefits';
import MemberHub from '@/components/become-a-member/member-hub';
import Pricing from '@/components/become-a-member/pricing';
import FAQs from '@/components/become-a-member/faqs';
import LocationsSection from '@/components/common/locations-section';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function BecomeAMember() {
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col bg-off-white text-dark">
				<HeroSection />
				<Benefits />
				<LocationsSection />
				<MemberHub />
				<Pricing />
				<FAQs />
			</main>
			<Footer />
		</>
	);
}
