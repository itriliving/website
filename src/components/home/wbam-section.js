import PrimaryCard from './primary-card';
import SecondaryCard from './secondary-card';
import { Playfair } from 'next/font/google';
import initTranslations from '@/utils/i18n';

const playfair = Playfair({ subsets: ['latin'] });

export default async function WbamSection({ locale, namespaces }) {
	const { t } = await initTranslations(locale, namespaces);

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
								{t('why-become-a-member')}
							</h2>
						</div>
						<div className="grid grid-cols-1 w-full gap-x-6 gap-y-10 md:grid-cols-3">
							<PrimaryCard
								title1={t('wbam-title-1')}
								title2={t('wbam-subtitle-1')}
								image={'/img/wbam-1.jpg'}
								description={t('wbam-description-1')}
							/>
							<PrimaryCard
								title1={t('wbam-title-2')}
								title2={t('wbam-subtitle-2')}
								image={'/img/wbam-2.jpg'}
								description={t('wbam-description-2')}
							/>
							<PrimaryCard
								title1={t('wbam-title-3')}
								title2={t('wbam-subtitle-3')}
								image={'/img/wbam-3.jpg'}
								description={t('wbam-description-3')}
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
								title={t('wbam-title-4')}
								image={'/img/wbam-4.jpg'}
								description={t('wbam-description-4')}
								link={'/'}
								linkText={t('wbam-link-4')}
							/>
							<SecondaryCard
								title={t('wbam-title-5')}
								image={'/img/wbam-5.jpg'}
								description={t('wbam-description-5')}
								link={'/'}
								linkText={t('wbam-link-5')}
							/>
							<SecondaryCard
								title={t('wbam-title-6')}
								image={'/img/wbam-6.jpg'}
								description={t('wbam-description-6')}
								link={'/'}
								linkText={t('wbam-link-6')}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
