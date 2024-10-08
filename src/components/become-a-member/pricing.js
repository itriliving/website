import FeatureIcon from './feature-icon';
import Image from 'next/image';
import { Playfair } from 'next/font/google';
import initTranslations from '@/utils/i18n';

const playfair = Playfair({ subsets: ['latin'] });

export default async function Pricing({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);

	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
				<div className="mb-12">
					<div className="max-w-lg lg:max-w-2xl text-center mx-auto">
						<h2 className="tracking-[.1em] font-body font-medium uppercase text-light text-sm mb-4">
							{t('pricing-subtitle')}
						</h2>
						<p
							className={
								'tracking-tight text-dark text-4xl lg:text-5xl font-medium ' +
								playfair.className
							}
						>
							<span>{t('pricing-title')}</span>
						</p>
						<div className="text-lg prose-a:text-dark prose-a:font-medium prose-a:underline hover:prose-a:text-light mt-4 lg:text-xl">
							<p>{t('pricing-description')}</p>
						</div>
					</div>
				</div>
				<div className="grid max-w-4xl w-full mx-auto">
					<div className="grid md:grid-cols-2 gap-6">
						<div className="flex justify-center">
							<div className="flex flex-col justify-between bg-medium px-4 py-6 w-full border-t-4 border-dark">
								<div className="flex xl:justify-between gap-x-4">
									<div className="bg-dark w-[45px] h-[45px] flex items-center justify-center">
										<Image
											src="/img/pricing-icon1.jpg"
											width={50}
											height={50}
											alt="Feature Icon"
										/>
									</div>
									<div>
										<p className="font-semibold uppercase">
											{t('one-off')}
										</p>
										<p className="mb-6 text-sm">
											{t('membership')}
										</p>
									</div>
									<div className="text-right grow">
										<p className="text-lg font-semibold">
											<span>5490 Sfr</span>
										</p>
									</div>
								</div>
								<div className="pb-6 pt-6 border-b border-t border-gray-300">
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('one-time')}</p>
									</div>
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('residences')}</p>
									</div>
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('member-benefits')}</p>
									</div>
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('community-events')}</p>
									</div>
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('rewards-program')}</p>
									</div>
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('deals-perks')}</p>
									</div>
								</div>
								<button
									type="button"
									className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent w-full transition-colors duration-[250ms] text-sm gap-1 px-5 py-[9px] text-dark border border-dark hover:bg-dark/5 active:bg-dark/10 focus-visible:ring-black mt-6"
								>
									<span className="leading-5">
										{t('apply-now')}
									</span>
								</button>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="flex flex-col justify-between bg-medium px-4 py-6 w-full border-t-4 border-brand-yellow">
								<div className="flex xl:justify-between gap-x-4">
									<div className="bg-dark w-[45px] h-[45px] flex items-center justify-center">
										<Image
											src="/img/pricing-icon2.jpg"
											width={50}
											height={50}
											alt="Feature Icon"
										/>
									</div>
									<div>
										<p className="font-semibold uppercase">
											{t('monthly-membership')}
										</p>
										<p className="mb-6 text-sm">
											{t('membership')}
										</p>
									</div>
									<div className="text-right grow">
										<p className="text-lg font-semibold">
											<span>129 Sfr</span>
										</p>
										<p className="text-xs">
											{t('per-month')}
										</p>
									</div>
								</div>
								<div className="pb-6 pt-6 border-b border-t border-gray-300">
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('valid-for-one-month')}</p>
									</div>
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('beach-spa')}</p>
									</div>
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('member-benefits')}</p>
									</div>
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('community-events')}</p>
									</div>
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('rewards-program')}</p>
									</div>
									<div className="flex flex-row">
										<FeatureIcon />
										<p>{t('deals-perks')}</p>
									</div>
								</div>
								<button
									type="button"
									className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent w-full transition-colors duration-[250ms] text-sm gap-1 px-5 py-[9px] text-dark border border-dark hover:bg-dark/5 active:bg-dark/10 focus-visible:ring-black mt-6"
								>
									<span className="leading-5">
										{t('apply-now')}
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
