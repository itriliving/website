'use client';
import useEmblaCarousel from 'embla-carousel-react';
import BenefitsCard from '../benefits-card';
import { useCallback } from 'react';
import ArrowLeft from '@/components/common/arrow-left';
import ArrowRight from '@/components/common/arrow-right';
import { useTranslation } from 'react-i18next';

export default function BenefitsCarousel() {
	const { t } = useTranslation('TheClub');

	const benefitsArray = [
		{ index: 1, image: '/img/the-club-d1.jpg', title: t('benefit-1') },
		{ index: 2, image: '/img/the-club-d2.jpg', title: t('benefit-2') },
		{ index: 3, image: '/img/the-club-d3.jpg', title: t('benefit-3') },
		{ index: 4, image: '/img/the-club-d4.jpg', title: t('benefit-4') },
		{ index: 5, image: '/img/the-club-d5.jpg', title: t('benefit-5') },
		{ index: 6, image: '/img/the-club-d6.jpg', title: t('benefit-6') },
		{ index: 7, image: '/img/the-club-d7.jpg', title: t('benefit-7') },
		{ index: 8, image: '/img/the-club-d8.jpg', title: t('benefit-8') },
	];

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
