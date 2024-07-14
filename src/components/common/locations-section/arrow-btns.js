'use client';
import React, { useCallback, useEffect, useState } from 'react';
import ArrowLeft from '../arrow-left';
import ArrowRight from '../arrow-right';

export const usePrevNextButtons = (emblaApi) => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	}, [emblaApi]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	}, [emblaApi]);

	const onSelect = useCallback((emblaApi) => {
		setPrevBtnDisabled(!emblaApi.canScrollPrev());
		setNextBtnDisabled(!emblaApi.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect(emblaApi);
		emblaApi.on('reInit', onSelect).on('select', onSelect);
	}, [emblaApi, onSelect]);

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	};
};

export const PrevButton = (props) => {
	const { children, ...restProps } = props;

	return (
		<button
			className="absolute -left-14 top-1/2 -translate-y-1/2 hidden lg:block rounded-full hover:bg-medium transition-colors"
			type="button"
			{...restProps}
		>
			<ArrowLeft />
			{children}
		</button>
	);
};

export const NextButton = (props) => {
	const { children, ...restProps } = props;

	return (
		<button
			className="absolute -right-14 top-1/2 -translate-y-1/2 hidden lg:block rounded-full hover:bg-medium transition-colors"
			type="button"
			{...restProps}
		>
			<ArrowRight />
			{children}
		</button>
	);
};
