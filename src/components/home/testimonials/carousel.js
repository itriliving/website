'use client';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselSlide from './carousel-slide';
import ArrowLeft from '@/components/common/locations-section/arrow-left';
import ArrowRight from '@/components/common/locations-section/arrow-right';
import { useCallback } from 'react';

export default function Carousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="relative w-full">
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					<CarouselSlide
						text="I had the privilege of discovering the location and the amazing concept of Itri Living and their first resort. As a writer, I truly love the concept and the magic of the place, it's simply amazing for my inspiration."
						name="Aurora Watson"
						img="/img/person1.webp"
						work={'Writer'}
					/>
					<CarouselSlide
						text="Great work spaces, amazing rooms, location within the cities is fantastic, and the community is a good mix of geniuses and really interesting people."
						name="Ramon Arora"
						img="/img/person2.webp"
						work={'Marketer'}
					/>
					<CarouselSlide
						text="I made professional connections, relaxed and got great quality work done. I love Outsite spaces, it makes working remote much more fun."
						name="Lora"
						img="/img/person3.webp"
						work={'Designer'}
					/>
					<CarouselSlide
						text="I was staying at all their places in a row and totally loved it. I arrived with no expectations and it completely blew my mind."
						name="Sammy Johnson"
						img="/img/person4.webp"
            work={'Photographer'}
					/>
				</div>
			</div>
			<button className="absolute left-2 lg:left-14 bottom-0" onClick={scrollPrev}>
				<ArrowLeft />
			</button>
			<button className="absolute right-2 lg:right-14 bottom-0" onClick={scrollNext}>
				<ArrowRight />
			</button>
		</div>
	);
}
