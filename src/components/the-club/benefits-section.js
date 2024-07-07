import BenefitsCard from './benefits-card';
import { Playfair } from 'next/font/google';

const playfair = Playfair({ subsets: ['latin'] });

export default function BenefitsSection() {
	return (
		<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
			<section className="py-12 md:py-24">
				<div className="flex flex-col items-center text-center">
					<h3
						className={
							'tracking-tight text-dark text-4xl lg:text-5xl font-bold mb-5 font-medium ' +
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
				<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-16 gap-y-12 md:gap-y-16 lg:gap-y-20 xl:gap-y-28 2xl:gap-y-32 mt-10 lg:mt-20">
					<BenefitsCard
						image={'/img/the-club-d1.jpg'}
						title={'Wellness center'}
					/>
					<BenefitsCard
						image={'/img/the-club-d2.jpg'}
						title={'Sailing School'}
					/>
					<BenefitsCard
						image={'/img/the-club-d3.jpg'}
						title={'Water Sports'}
					/>
					<BenefitsCard
						image={'/img/the-club-d4.jpg'}
						title={'Cycling'}
					/>
					<BenefitsCard
						image={'/img/the-club-d5.jpg'}
						title={'PRIVATE Beach club'}
					/>
					<BenefitsCard
						image={'/img/the-club-d6.jpg'}
						title={'Kids Club'}
					/>
					<BenefitsCard
						image={'/img/the-club-d7.jpg'}
						title={'Yoga and Meditation Area'}
					/>
					<BenefitsCard
						image={'/img/the-club-d8.jpg'}
						title={'Outdoor Cinema'}
					/>
				</div>
			</section>
		</div>
	);
}
