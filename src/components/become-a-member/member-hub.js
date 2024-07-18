import Image from 'next/image';
import { Playfair } from 'next/font/google';
import initTranslations from '@/utils/i18n';

const playfair = Playfair({ subsets: ['latin'] });

export default async function MemberHub({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);
	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="flex flex-col md:flex-row">
					<div className="mb-8 md:mb-0 w-full md:w-1/2 relative overflow-hidden md:order-2 aspect-[3/4]">
						<Image
							className="group-hover:scale-[1.05] group-hover:cursor-pointer transition-transform duration-300 object-cover object-center"
							src="/img/member-hub.png"
							alt="Itri Member Hub"
							height={1000}
							width={1000}
						/>
					</div>
					<div className="w-full md:w-1/2 md:order-1 md:pr-10 xl:pr-12">
						<div className="">
							<h4 className="mt-6 md:text-lg xl:text-xl mb-10 lg:mb-16">
								{t('club-subtitle')}
							</h4>
							<h2
								className={
									'tracking-tight text-dark text-3xl lg:text-4xl font-medium ' +
									playfair.className
								}
							>
								{t('club-title')}
							</h2>
							<p className="mt-6 md:text-lg xl:text-xl">
								{t('club-description')}
							</p>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
							<div className="p-6 bg-medium rounded-md flex flex-col items-center align-center text-center">
								<div className="relative w-5 h-5 mr-2 mb-2">
									<Image
										src="/svg/member-hub/member-hub-icon1.svg"
										alt="icon"
										width={30}
										height={30}
									/>
								</div>
								<p className="text-base font-medium mt-4">
									{t('card-1')}
								</p>
							</div>
							<div className="p-6 bg-medium rounded-md flex flex-col items-center align-center text-center">
								<div className="relative w-5 h-5 mr-2 mb-2">
									<Image
										src="/svg/member-hub/member-hub-icon2.svg"
										alt="icon"
										width={30}
										height={30}
									/>
								</div>
								<p className="text-base font-medium mt-4">
									{t('card-2')}
								</p>
							</div>
							<div className="p-6 bg-medium rounded-md flex flex-col items-center align-center text-center">
								<div className="relative w-5 h-5 mr-2 mb-2">
									<Image
										src="/svg/member-hub/member-hub-icon3.svg"
										alt="icon"
										width={30}
										height={30}
									/>
								</div>
								<p className="text-base font-medium mt-4">
									{t('card-3')}
								</p>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-4"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
