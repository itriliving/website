import Image from 'next/image';
import { Playfair } from 'next/font/google';
import initTranslations from '@/utils/i18n';
import Animate from '../common/animate';
import Stretch from '../common/stretch';

const playfair = Playfair({ subsets: ['latin'] });

export default async function CryptoSection({ locale, namespaces }) {
	const { t } = await initTranslations(locale, namespaces);

	return (
		<>
			<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
				<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
					<Animate>
						<div className="flex items-center justify-center mb-8 md:bg-10 lg:mb-14 xl:mb-16 2xl:mb-20">
							<h2
								className={
									'tracking-tight text-4xl lg:text-5xl xl:text-6xl ' +
									playfair.className
								}
							>
								{t('crypto-title-1')}
							</h2>
						</div>
						<div className="lg:grid lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24">
							<div className="flex flex-col items-center px-20 lg:px-0 xl:px-10">
								<div className="w-full relative overflow-hidden aspect-[4/3]">
									<Image
										src="/img/the-club-e1.jpg"
										layout="fill"
										objectFit="cover"
										alt="Crypto"
									/>
								</div>
								<div className="w-full pt-8 pb-12 md:py-12 lg:py-16 xl:pt-10 xl:px-0">
									<div className="flex flex-col gap-2 text-base md:text-lg xl:text-xl">
										<span>{t('crypto-a-1')}</span>
										<li className="list-inside indent-2">
											{t('crypto-a-2')}
										</li>
										<li className="list-inside indent-2">
											{t('crypto-a-3')}
										</li>{' '}
										<span>{t('crypto-a-4')}</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col items-center px-20 lg:px-0 xl:px-10">
								<div className="w-full relative overflow-hidden aspect-[4/3]">
									<Image
										src="/img/the-club-e2.jpg"
										layout="fill"
										objectFit="cover"
										alt="Crypto"
									/>
								</div>
								<div className="w-full pt-8 pb-12 md:py-12 lg:py-16 xl:pt-10 xl:px-0">
									<p className="text-base md:text-lg xl:text-xl">
										{t('crypto-b')}
									</p>
								</div>
							</div>
						</div>
					</Animate>
					<Animate>
						<div className="flex items-center justify-center mb-8 md:bg-10 lg:mb-14 xl:mb-16 2xl:mb-20">
							<h2
								className={
									'tracking-tight text-4xl lg:text-5xl xl:text-6xl ' +
									playfair.className
								}
							>
								{t('crypto-title-2')}
							</h2>
						</div>
						<div className="lg:grid lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24">
							<div className="flex flex-col items-center px-20 lg:px-0 xl:px-10">
								<div className="w-full relative overflow-hidden aspect-[4/3]">
									<Image
										src="/img/the-club-e3.jpg"
										layout="fill"
										objectFit="cover"
										alt="Crypto"
									/>
								</div>
								<div className="w-full pt-8 pb-12 md:py-12 lg:py-16 xl:pt-10 xl:px-0">
									<div className="flex flex-col gap-2 text-base md:text-lg xl:text-xl">
										<span>{t('crypto-c-1')}</span>
										<span> {t('crypto-c-2')}</span>
										<li className="list-inside indent-2">
											{t('crypto-c-3')}
										</li>
										<li className="list-inside indent-2">
											{t('crypto-c-4')}
										</li>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-center px-20 lg:px-0 xl:px-10">
								<div className="w-full relative overflow-hidden aspect-[4/3]">
									<Image
										src="/img/the-club-e4.jpg"
										layout="fill"
										objectFit="cover"
										alt="Crypto"
									/>
								</div>
								<div className="w-full pt-8 pb-12 md:py-12 lg:py-16 xl:pt-10 xl:px-0">
									<p className="text-base md:text-lg xl:text-xl">
										{t('crypto-d')}
									</p>
								</div>
							</div>
						</div>
					</Animate>
				</div>
			</section>
		</>
	);
}
