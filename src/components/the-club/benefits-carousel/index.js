'use client';
import useEmblaCarousel from 'embla-carousel-react';
import BenefitsCard from '../benefits-card';
import { useCallback } from 'react';
import ArrowLeft from '@/components/common/arrow-left';
import ArrowRight from '@/components/common/arrow-right';

const benefitsArray = [
	{ index: 1, image: '/img/the-club-d1.jpg', title: 'Wellness center' },
	{ index: 2, image: '/img/the-club-d2.jpg', title: 'Sailing School' },
	{ index: 3, image: '/img/the-club-d3.jpg', title: 'Water Sports' },
	{ index: 4, image: '/img/the-club-d4.jpg', title: 'Cycling' },
	{ index: 5, image: '/img/the-club-d5.jpg', title: 'PRIVATE Beach club' },
	{ index: 6, image: '/img/the-club-d6.jpg', title: 'Kids Club' },
	{
		index: 7,
		image: '/img/the-club-d7.jpg',
		title: 'Yoga and Meditation Area',
	},
	{ index: 8, image: '/img/the-club-d8.jpg', title: 'Outdoor Cinema' },
];

export default function BenefitsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

   const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
   }, [emblaApi]);

   const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
   }, [emblaApi]);

	return (
		<div className="relative">
			<div className="embla" ref={emblaRef}>
				<div className="embla-container">
					{benefitsArray.map((benefit) => (
						<BenefitsCard
							key={benefit.index}
							image={benefit.image}
							title={benefit.title}
						/>
					))}
				</div>
			</div>
			<button
				className="absolute -left-14 top-1/2 -translate-y-1/2 hidden lg:block rounded-full hover:bg-medium transition-colors"
				type="button"
				onClick={scrollPrev}
			>
				<ArrowLeft />
			</button>
			<button
				className="absolute -right-14 top-1/2 -translate-y-1/2 hidden lg:block rounded-full hover:bg-medium transition-colors"
				type="button"
				onClick={scrollNext}
			>
				<ArrowRight />
			</button>
		</div>
	);
}
