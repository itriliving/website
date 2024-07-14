import Image from 'next/image';

export default function Card({ count, city, secondTitle, image, state }) {
	return (
		<div className="relative w-full embla-slide">
			<div className="w-full px-2 lg:px-3">
				<a href="">
					<div className="relative aspect-[3/4] overflow-hidden group">
						<div className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[1.015] blur-sm transition-all duration-400">
							<Image
								src={image}
								alt="image"
								height={1000}
								width={1000}
							/>
						</div>
						<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
						<div className="p-4 absolute bottom-0 left-0">
							<h3 className="font-heading-secondary uppercase tracking-normal text-3xl text-off-white">
								{city}
							</h3>
							<h4 className="font-heading text-xl uppercase text-dark text-off-white/80">
								{secondTitle}
							</h4>
						</div>
					</div>
				</a>
			</div>
			<p className="uppercase mt-2 opacity-85 text-sm lg:text-base text-center w-full">
				{state}
			</p>
		</div>
	);
}
