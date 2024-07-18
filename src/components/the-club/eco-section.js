import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import { Playfair } from 'next/font/google';
import initTranslations from '@/utils/i18n';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });
const playfair = Playfair({ subsets: ['latin'] });

export default async function EcoSection({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);

	return (
		<section className="relative py-0 bg-medium border-dark border-y">
			<div className="grid grid-cols-1 md:grid-cols-2 items-center">
				<div className="w-[86.66vw] mt-12 md:my-14 lg:my-10 xl:my-20 2xl:my-10 sm:w-[76vw] md:w-full mx-auto aspect-square relative order-1  md:max-w-none xl:aspect-standard md:order-2">
					<Image
						src="/img/eco-friendly.jpg"
						layout="fill"
						objectFit="cover"
						alt="Eco Section"
					/>
				</div>
				<div className="md:mx-0 order-2 pt-8 pb-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 border-dark self-stretch flex flex-col justify-center border-r md:order-1">
					<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] w-full">
						<div className="max-w-xl mx-auto">
							<h2 className="text-center">
								<span
									className={
										'text-2xl block mb-4 font-medium ' +
										playfair.className
									}
								>
									{t('eco-title-1')}
								</span>
								<span
									className={
										'tracking-normal uppercase text-5xl lg:text-6xl xl:text-7xl ' +
										bebasNeue.className
									}
								>
									{t('eco-title-2')}
								</span>
							</h2>
							<div className="text-center mt-6 content-wrapper">
								<p>{t('eco-subtitle')}</p>
							</div>
							<div className="grid-cols-1 md:grid-cols-1 xl:grid-cols-2 flex justify-center mt-8">
								<a
									className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent transition-colors duration-[250ms] min-w-[10rem] text-base gap-2 px-6 py-[11px] text-dark border border-dark hover:bg-dark/5 active:bg-dark/10 focus-visible:ring-black md:max-w-sm"
									target="_self"
									href="/sustainability"
								>
									<span>{t('eco-btn')}</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
