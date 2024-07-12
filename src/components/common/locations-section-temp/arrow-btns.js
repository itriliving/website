'use client';
import React, { useCallback, useEffect, useState } from 'react';

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
			className="absolute -left-14 top-1/2 -translate-y-1/2 hidden lg:block"
			type="button"
			{...restProps}
		>
			<svg
				width="40"
				height="41"
				viewBox="0 0 40 41"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="0.5"
					y="1"
					width="39"
					height="39"
					rx="19.5"
					stroke="#161615"
				/>
				<path
					d="M15.1078 20.8972C14.8898 20.6792 14.8898 20.3207 15.1078 20.1027L21.8578 13.3527C22.0758 13.1347 22.4344 13.1347 22.6523 13.3527C22.8703 13.5707 22.8703 13.9292 22.6523 14.1472L16.2996 20.5L22.6523 26.8527C22.8703 27.0707 22.8703 27.4292 22.6523 27.6472C22.4344 27.8652 22.0758 27.8652 21.8578 27.6472L15.1078 20.8972Z"
					fill="#161615"
				/>
			</svg>
			{children}
		</button>
	);
};

export const NextButton = (props) => {
	const { children, ...restProps } = props;

	return (
		<button
			className="absolute -right-14 top-1/2 -translate-y-1/2 hidden lg:block"
			type="button"
			{...restProps}
		>
			<svg
				width="40"
				height="41"
				viewBox="0 0 40 41"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="0.5"
					y="1"
					width="39"
					height="39"
					rx="19.5"
					stroke="#161615"
				/>
				<path
					d="M24.9023 20.1027C25.1203 20.3207 25.1203 20.6792 24.9023 20.8972L18.1523 27.6472C17.9344 27.8652 17.5758 27.8652 17.3578 27.6472C17.1398 27.4292 17.1398 27.0707 17.3578 26.8527L23.7105 20.5L17.3578 14.1472C17.1398 13.9292 17.1398 13.5707 17.3578 13.3527C17.5758 13.1347 17.9344 13.1347 18.1523 13.3527L24.9023 20.1027Z"
					fill="#161615"
				/>
			</svg>
			{children}
		</button>
	);
};
