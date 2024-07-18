'use client';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselSlide from './carousel-slide';
import ArrowLeft from '@/components/common/arrow-left';
import ArrowRight from '@/components/common/arrow-right';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function Carousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { t } = useTranslation('HomePage');

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="relative w-full">
			<div className="embla" ref={emblaRef}>
				<div className="embla-container">
					<CarouselSlide
						text={t('t-quote-1')}
						name="Aurora Watson"
						img="/img/person1.webp"
						work={t('t-job-1')}
					/>
					<CarouselSlide
						text={t('t-quote-2')}
						name="Ramon Arora"
						img="/img/person2.webp"
						work={t('t-job-2')}
					/>
					<CarouselSlide
						text={t('t-quote-3')}
						name="Lora"
						img="/img/person3.webp"
						work={t('t-job-3')}
					/>
					<CarouselSlide
						text={t('t-quote-4')}
						name="Sammy Johnson"
						img="/img/person4.webp"
						work={t('t-job-4')}
					/>
				</div>
			</div>
			<button
				className="absolute left-2 lg:left-14 bottom-0 rounded-full hover:bg-medium transition-colors"
				onClick={scrollPrev}
			>
				<ArrowLeft />
			</button>
			<button
				className="absolute right-2 lg:right-14 bottom-0 rounded-full hover:bg-medium transition-colors"
				onClick={scrollNext}
			>
				<ArrowRight />
			</button>
		</div>
	);
}
