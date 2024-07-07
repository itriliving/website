'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Card from './card';
import Autoplay from 'embla-carousel-autoplay';
import ArrowLeft from './arrow-left';
import ArrowRight from './arrow-right';
import { useCallback } from 'react';

export default function Carousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="relative">
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					<Card
						count={2}
						city={'Nador'}
						secondTitle={'Marchicha'}
						image="/img/locations/location-img1.jpg"
						state={'under construction'}
					/>
					<Card
						count={1}
						city={'Dakhla'}
						secondTitle={'Cabanows'}
						image="/img/locations/location-img2.jpg"
						state={'under consideration'}
					/>
					<Card
						count={2}
						city={'Merzouga'}
						secondTitle={'Lodges'}
						image="/img/locations/location-img3.jpg"
						state={'under consideration'}
					/>
					<Card
						count={1}
						city={'Sierra leone'}
						secondTitle={'resort'}
						image="/img/locations/location-img4.jpg"
						state={'under consideration'}
					/>
				</div>
			</div>
			<button
				className="absolute -left-14 top-1/2 -translate-y-1/2 hidden lg:block"
				onClick={scrollPrev}
			>
				<ArrowLeft />
			</button>
			<button
				className="absolute -right-14 top-1/2 -translate-y-1/2 hidden lg:block"
				onClick={scrollNext}
			>
				<ArrowRight />
			</button>
		</div>
	);
}
