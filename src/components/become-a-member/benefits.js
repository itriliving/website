import Image from 'next/image';
import { Playfair } from 'next/font/google';
import initTranslations from '@/utils/i18n';

const playfair = Playfair({ subsets: ['latin'] });

export default async function Benefits({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);

	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="mb-12">
					<div className="max-w-lg lg:max-w-2xl text-center mx-auto">
						<h2 className="tracking-[.1em] font-body font-medium uppercase text-light text-sm mb-4">
							{t('benefits-title-1')}
						</h2>
						<p
							className={
								'tracking-tight text-dark text-4xl lg:text-5xl font-medium ' +
								playfair.className
							}
						>
							<span>{t('benefits-title-2')}</span>
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 xl:grid-cols-2 auto-rows-fr md:[&amp;>*:nth-child(2n)]:flex-row-reverse xl:[&amp;>*:nth-child(2n)]:flex-row xl:[&amp;>*:nth-child(4n+3)]:flex-row-reverse xl:[&amp;>*:nth-child(4n)]:flex-row-reverse">
					<div className="flex flex-col md:flex-row">
						<div className="flex flex-col basis-full md:basis-1/2 align-center justify-center text-center bg-medium p-8">
							<div className="h-4 w-4 relative mb-4 opacity-80 mx-auto">
								<Image
									src="/svg/bam/bam-icon1.svg"
									alt="Icon"
									width={20}
									height={20}
								/>
							</div>
							<h3 className="font-body text-lg font-semibold tracking-normal uppercase mb-3">
								{t('b-1-title')}
							</h3>
							<span className="w-8 h-1 border bg-black mx-auto mb-3"></span>
							<p className="px-8 font-body text-lg">
								{t('b-1-subtitle')}
							</p>
						</div>
						<div className="flex basis-full md:basis-1/2">
							<Image
								src="/img/bam-a1.jpg"
								alt="Exclusive locations"
								width={800}
								height={800}
							/>
						</div>
					</div>
					<div className="flex flex-col md:flex-row">
						<div className="flex flex-col basis-full md:basis-1/2 align-center justify-center text-center bg-medium p-8 md:order-2 xl:order-1">
							<div className="h-4 w-4 relative mb-4 opacity-80 mx-auto">
								<Image
									src="/svg/bam/bam-icon2.svg"
									alt="Icon"
									width={20}
									height={20}
								/>
							</div>
							<h3 className="font-body text-lg font-semibold tracking-normal uppercase mb-3">
								{t('b-2-title')}
							</h3>
							<span className="w-8 h-1 border bg-black mx-auto mb-3"></span>
							<p className="px-8 font-body text-lg">
								{t('b-2-subtitle')}
							</p>
						</div>
						<div className="flex basis-full md:basis-1/2 xl:order-2">
							<Image
								src="/img/bam-a2.jpg"
								alt="Exclusive locations"
								width={800}
								height={800}
							/>
						</div>
					</div>
					<div className="flex flex-col md:flex-row">
						<div className="flex flex-col basis-full md:basis-1/2 align-center justify-center text-center bg-medium p-8 xl:order-2">
							<div className="h-4 w-4 relative mb-4 opacity-80 mx-auto">
								<Image
									src="/svg/bam/bam-icon3.svg"
									alt="Icon"
									width={20}
									height={20}
								/>
							</div>
							<h3 className="font-body text-lg font-semibold tracking-normal uppercase mb-3">
								{t('b-3-title')}
							</h3>
							<span className="w-8 h-1 border bg-black mx-auto mb-3"></span>
							<p className="px-8 font-body text-lg">
								{t('b-3-subtitle')}
							</p>
						</div>
						<div className="flex basis-full md:basis-1/2">
							<Image
								src="/img/bam-a3.jpg"
								alt="Exclusive locations"
								width={800}
								height={800}
							/>
						</div>
					</div>
					<div className="flex flex-col md:flex-row">
						<div className="flex flex-col basis-full md:basis-1/2 align-center justify-center text-center bg-medium p-8 md:order-2">
							<div className="h-4 w-4 relative mb-4 opacity-80 mx-auto">
								<Image
									src="/svg/bam/bam-icon4.svg"
									alt="Icon"
									width={20}
									height={20}
								/>
							</div>
							<h3 className="font-body text-lg font-semibold tracking-normal uppercase mb-3">
								{t('b-4-title')}
							</h3>
							<span className="w-8 h-1 border bg-black mx-auto mb-3"></span>
							<p className="px-8 font-body text-lg">
								{t('b-4-subtitle')}
							</p>
						</div>
						<div className="flex basis-full md:basis-1/2">
							<Image
								src="/img/bam-a4.jpg"
								alt="Exclusive locations"
								width={800}
								height={800}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
