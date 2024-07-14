'use client';
import React from 'react';
import { DotButton, useDotButton } from './dot-btn';
import { PrevButton, NextButton, usePrevNextButtons } from './arrow-btns';
import useEmblaCarousel from 'embla-carousel-react';
import Card from './card';

const EmblaCarousel = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<div className="CAR">
			<div className="flex gap-6 -mx-6 px-6 my-10 border-b border-extra-light overflow-x-auto no-scrollbar sm:mx-0 sm:px-0">
				{slides.map((slide) => (
					<DotButton
						key={slide.index}
						onClick={() => onDotButtonClick(slide.index - 1)}
						className={
							'py-4 uppercase shrink-0 grow font-medium text-sm xl:text-base border-b-2 focus:outline-none hover:text-dark transition-colors' +
							(slide.index - 1 === selectedIndex
								? ' border-dark text-dark'
								: ' border-transparent text-gray-500')
						}
					>
						{slide.city}
					</DotButton>
				))}
			</div>
			<div className="relative">
				<div className="embla" ref={emblaRef}>
					<div className="embla__container">
						{slides.map((slide) => (
							<Card
								key={slide.index}
								count={slide.locationCount}
								city={slide.city}
								secondTitle={slide.secondTitle}
								image={slide.image}
								state={slide.state}
							/>
						))}
					</div>
				</div>
				<PrevButton
					onClick={onPrevButtonClick}
					disabled={prevBtnDisabled}
				/>
				<NextButton
					onClick={onNextButtonClick}
					disabled={nextBtnDisabled}
				/>
			</div>
		</div>
	);
};

export default EmblaCarousel;
