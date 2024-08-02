import { Playfair } from 'next/font/google';
import BenefitsCarousel from './benefits-carousel';
import initTranslations from '@/utils/i18n';
import Stretch from '../common/stretch';

const playfair = Playfair({ subsets: ['latin'] });

export default async function BenefitsSection({ locale, namespaces }) {
	const { t } = await initTranslations(locale, namespaces);
	return (
		<>
			<section className="relative py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
				<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
					<div className="py-12 md:py-24">
						<div className="flex flex-col items-center text-center mb-16 md:mb-20 lg:mb-24 xl:mb-28">
							<h3
								className={
									'tracking-tight text-dark text-4xl lg:text-5xl font-bold mb-5 ' +
									playfair.className
								}
							>
								{t('benefits-title')}
							</h3>
							<p className="text-lg md:text-xl xl:text-2xl max-w-[1000px]">
								{t('benefits-subtitle')}
							</p>
						</div>
						<BenefitsCarousel />
					</div>
				</div>
			</section>
			<Stretch>
				<div className="h-[1px] bg-dark block w-full"></div>
			</Stretch>
		</>
	);
}
