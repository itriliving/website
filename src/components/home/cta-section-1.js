import Image from 'next/image';
import Link from 'next/link';

export default function CtaSection1() {
	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent max-w-[120rem] mt-12 mx-auto">
			<div className="relative">
				<div className="block md:hidden mx-auto relative aspect-portrait">
					<div className="relative w-full">
						<Image
							className="h-auto relative"
							src="/img/cta-section-small.jpg"
							alt="cta-section"
							height={1000}
							width={1000}
						/>
					</div>
				</div>
				<div className="relative hidden md:block mx-auto">
					<div className="relative w-full">
						<Image
							className="h-auto relative"
							src="/img/cta-section-big.jpg"
							alt="cta-section"
							height={2000}
							width={2000}
						/>
					</div>
				</div>
				<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] relative">
					<Link
						href={'/member'}
						className="group absolute right-[10%] bottom-8 sm:bottom-10 z-10 underline text-2xl sm:text-3xl lg:text-4xl font-light text-dark hover:text-light"
					>
						Book your stay
					</Link>
				</div>
			</div>
		</section>
	);
}
