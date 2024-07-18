import SecondaryCard from "./secondary-card";
import { Playfair } from 'next/font/google';
import initTranslations from '@/utils/i18n';

const playfair = Playfair({ subsets: ['latin'] });

export default async function KasbahsSection({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);

  const data = [
		{
			title: t('kasbah-1'),
			image: '/img/the-club-c1.jpg',
		},
		{
			title: t('kasbah-2'),
			image: '/img/the-club-c2.jpg',
		},
		{
			title: t('kasbah-3'),
			image: '/img/the-club-c3.jpg',
		},
		{
			title: t('kasbah-4'),
			image: '/img/the-club-c4.jpg',
		},
		{
			title: t('kasbah-5'),
			image: '/img/the-club-c5.jpg',
		},
		{
			title: t('kasbah-6'),
			image: '/img/the-club-c6.jpg',
		},
  ];

  return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="max-w-lg lg:max-w-2xl text-left mb-14 md:mb-16 lg:mb-20 xl:mb-24">
					<h2 className="tracking-tight text-dark text-4xl lg:text-5xl">
						<span className={playfair.className}>
							{t('kasbah-title')}
						</span>
					</h2>
					<div className="text-lg prose-a:text-dark prose-a:font-medium prose-a:underline hover:prose-a:text-light mt-4 lg:text-xl">
						<p>{t('kasbah-subtitle')}</p>
					</div>
				</div>
				<div className="grid grid-cols-1 w-full gap-x-16 gap-y-20 md:grid-cols-3 mt-10">
					{data.map((item, index) => (
						<SecondaryCard
							key={index}
							title={item.title}
							image={item.image}
						/>
					))}
				</div>
			</div>
		</section>
  );
}
