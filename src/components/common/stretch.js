'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Stretch({
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
						scaleX: 0,
					},
					visible: {
						scaleX: 1,
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
