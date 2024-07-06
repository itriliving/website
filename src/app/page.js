import Image from 'next/image';
import HeroSection from '@/components/home/hero-section';
import CtaSection1 from '@/components/home/cta-section-1';
import WbamSection from '@/components/home/wbam-section';
import Testimonials from '@/components/home/testimonials';
import Blog from '@/components/home/blog';
import CtaSection2 from '@/components/home/cta-section-2';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-off-white text-dark">
			<HeroSection />
			<CtaSection1 />
			<WbamSection />
			<Blog />
			<CtaSection2 />
		</main>
	);
}
