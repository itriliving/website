import BenefitsCard from './benefits-card';
import { Playfair } from 'next/font/google';
import BenefitsCarousel from './benefits-carousel';

const playfair = Playfair({ subsets: ['latin'] });

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

export default function BenefitsSection() {
	return (
		<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
			<section className="py-12 md:py-24">
				<div className="flex flex-col items-center text-center mb-16 md:mb-20 lg:mb-24 xl:mb-28">
					<h3
						className={
							'tracking-tight text-dark text-4xl lg:text-5xl font-bold mb-5 ' +
							playfair.className
						}
					>
						The Benefits
					</h3>
					<p className="text-lg md:text-xl xl:text-2xl max-w-[1000px]">
						Enjoy a range of state-of-the-art accommodation
						facilities and services during your stay, including
						fitness amenities, exclusive events, a wellness center,
						and more.
					</p>
				</div>
				<BenefitsCarousel />
			</section>
		</div>
	);
}
