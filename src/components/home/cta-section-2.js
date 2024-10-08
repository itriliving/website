import Link from 'next/link';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import initTranslations from '@/utils/i18n';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export default async function CtaSection2({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);
	return (
		<section className="relative border-dark py-0 bg-medium border-y">
			<div className="grid grid-cols-1 md:grid-cols-2 items-center">
				<div className="w-[86.66vw] mt-12 md:my-14 lg:my-16 xl:my-20 2xl:my-24 sm:w-[76vw] md:w-full mx-auto aspect-square relative order-1  md:max-w-none xl:aspect-video">
					<Image
						className="absolute w-full h-full object-cover"
						src="/img/cta-section-2.jpg"
						height={1000}
						width={1000}
						alt="Cta Image"
					/>
				</div>
				<div className="md:mx-0 order-2 pt-8 pb-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 border-dark self-stretch flex flex-col justify-center border-l">
					<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] w-full">
						<div className="max-w-xl mx-auto">
							<h2 className="text-center">
								<span className="font-heading text-2xl block mb-4">
									{t('cta-title-1')}
								</span>
								<span
									className={
										'font-heading-secondary tracking-normal text-5xl lg:text-6xl xl:text-7xl ' +
										bebasNeue.className
									}
								>
									{t('cta-title-2')}
								</span>
							</h2>
							<div className="text-center mt-6 content-wrapper">
								<p>{t('cta-subtitle')}</p>
							</div>
							<div className="grid gap-4 grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mt-8">
								<Link
									href={'/'}
									className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent w-full transition-colors duration-[250ms] min-w-[10rem] text-base gap-2 px-6 py-[11px] text-dark border border-dark hover:bg-dark/5 active:bg-dark/10 focus-visible:ring-dark "
								>
									<span>NITE Book</span>
								</Link>
								<Link
									href={'/become-a-member'}
									className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent w-full transition-colors duration-[250ms] min-w-[10rem] text-base gap-2 px-6 py-3 text-off-white bg-dark hover:bg-dark/90 active:bg-dark/80 focus-visible:ring-dark "
								>
									<span>{t('become-a-member')}</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
