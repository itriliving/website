import PrimaryCard from './primary-card';
import SecondaryCard from './secondary-card';
import { Playfair } from 'next/font/google';

const playfair = Playfair({ subsets: ['latin'] });

export default function WbamSection() {
	return (
		<div>
			<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
				<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
					<div className="flex flex-col gap-10 items-start">
						<div className="max-w-lg lg:max-w-2xl text-left">
							<h2
								className={
									'tracking-tight text-dark text-4xl lg:text-5xl font-medium ' +
									playfair.className
								}
							>
								Why Become a Member?
							</h2>
						</div>
						<div className="grid grid-cols-1 w-full gap-x-6 gap-y-10 md:grid-cols-3">
							<PrimaryCard
								title1={'PLACES TO STAY'}
								title2={'Make yourself at home'}
								image={'/img/wbam-1.jpg'}
								description={
									'Stay in a private pool -Kasbah, Villa, or VIP villas in Itri Living.'
								}
							/>
							<PrimaryCard
								title1={'WORK REMOTELY'}
								title2={'Bring your work with you'}
								image={'/img/wbam-2.jpg'}
								description={
									'Get focused and stay productive in work friendly spaces with fast WiFi.'
								}
							/>
							<PrimaryCard
								title1={'COMMUNITY'}
								title2={'Get together'}
								image={'/img/wbam-3.jpg'}
								description={
									'Connect with Fellow Members of the Itri Living Community, Discover dynamic spaces, engaging events, and an interactive online Member Hub.'
								}
							/>
						</div>
					</div>
				</div>
			</section>

			<div className="h-[1px] bg-dark block w-full"></div>

			<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
				<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
					<div className="flex flex-col gap-10 items-start">
						<div className="grid grid-cols-1 w-full gap-x-6 gap-y-10 md:grid-cols-3">
							<SecondaryCard
								title={'Travel solo or together'}
								image={'/img/wbam-4.jpg'}
								description={
									"Whether you're travelling on your own or you're with company, find your ideal spot with Itri Living"
								}
								link={'/'}
								linkText={'Book Your Next Trip'}
							/>
							<SecondaryCard
								title={'Save on long term stays'}
								image={'/img/wbam-5.jpg'}
								description={
									'Save up to 80% on your seaside vacation'
								}
								link={'/'}
								linkText={'Book an Extended Stay'}
							/>
							<SecondaryCard
								title={'Book with confidence'}
								image={'/img/wbam-6.jpg'}
								description={
									'Stays include flexible booking and cancellation policies, professional cleaning and contactless check-in.'
								}
								link={'/'}
								linkText={'Read Our Covid-19 FAQ'}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
