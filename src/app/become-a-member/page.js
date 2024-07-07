import HeroSection from '@/components/become-a-member/hero-section';
import Benefits from '@/components/become-a-member/benefits';
import MemberHub from '@/components/become-a-member/member-hub';
import Pricing from '@/components/become-a-member/pricing';
import FAQs from '@/components/become-a-member/faqs';
import LocationsSection from '@/components/common/locations-section';
import Testimonials from '@/components/home/testimonials';

export default function BecomeAMember() {
	return (
		<main className="flex min-h-screen flex-col bg-off-white text-dark">
			<HeroSection />
			<Benefits />
			<LocationsSection />
			<MemberHub />
      <Pricing />
      <FAQs />
		</main>
	);
}
