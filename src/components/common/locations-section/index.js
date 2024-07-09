'use client';
import Cities from './cities';
import Carousel from './carousel';
import { Playfair } from 'next/font/google';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const playfair = Playfair({ subsets: ['latin'] });

export default function LocationsSection() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="w-full max-w-xl mr-auto mb-12">
					<div className="max-w-lg lg:max-w-2xl text-left undefined">
						<h2 className="tracking-[.1em] font-body font-medium uppercase text-light text-sm mb-4">
							LOCATIONS
						</h2>
						<p
							className={
								'tracking-tight text-dark text-3xl lg:text-4xl font-medium ' +
								playfair.className
							}
						>
							<span>
								Find your home on the coast, in the mountains,
								or in the city.
							</span>
						</p>
					</div>
				</div>
				<div>
					<Cities scrollNext={scrollNext} scrollPrev={scrollPrev} />
					<div>
						<Carousel
							emblaRef={emblaRef}
							scrollPrev={scrollPrev}
							scrollNext={scrollNext}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
