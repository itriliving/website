'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Animate({
	children,
	width = 'full',
	delay = 0.1,
	className,
	key,
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	}, [isInView, mainControls]);

	return (
		<div
			ref={ref}
			style={{ position: 'relative', width, overflow: 'hidden' }}
			className={className}
			key={key}
		>
			<motion.div
				variants={{
					hidden: {
						opacity: 0,
						y: 50,
					},
					visible: {
						opacity: 1,
						y: 0,
					},
				}}
				initial="hidden"
				animate={mainControls}
				transition={{
					duration: 0.5,
					delay: delay,
				}}
			>
				{children}
			</motion.div>
		</div>
	);
}
