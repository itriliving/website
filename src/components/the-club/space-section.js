import SpaceSectionCell from './space-section-cell';
import { Bebas_Neue } from 'next/font/google';
import initTranslations from '@/utils/i18n';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export default async function SpaceSection({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);

  const cells = [
		{
			svg: '/svg/cells/cell-1.svg',
			title: t('cell-1'),
		},
		{
			svg: '/svg/cells/cell-2.svg',
			title: t('cell-2'),
		},
		{
			svg: '/svg/cells/cell-3.svg',
			title: t('cell-3'),
		},
		{
			svg: '/svg/cells/cell-4.svg',
			title: t('cell-4'),
		},
		{
			svg: '/svg/cells/cell-5.svg',
			title: t('cell-5'),
		},
		{
			svg: '/svg/cells/cell-6.svg',
			title: t('cell-6'),
		},
		{
			svg: '/svg/cells/cell-7.svg',
			title: t('cell-7'),
		},
		{
			svg: '/svg/cells/cell-8.svg',
			title: t('cell-8'),
		},
		{
			svg: '/svg/cells/cell-9.svg',
			title: t('cell-9'),
		},
		{
			svg: '/svg/cells/cell-10.svg',
			title: t('cell-10'),
		},
		{
			svg: '/svg/cells/cell-11.svg',
			title: t('cell-11'),
		},
		{
			svg: '/svg/cells/cell-12.svg',
			title: t('cell-12'),
		},
  ];

	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-medium ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="flex flex-col gap-10 xl:flex-row xl:gap-12 xl:items-center">
					<div className="w-full max-w-lg lg:max-w-xl mx-auto xl:w-[40%] xl:order-2">
						<h2 className="text-center">
							<span className="font-heading text-dark text-2xl block mb-4">
								{t('space-1')}
							</span>
							<span
								className={
									'tracking-normal text-6xl xl:text-7xl ' +
									bebasNeue.className
								}
							>
								ITRI.LIVING SPACE
							</span>
						</h2>
					</div>

					<div className="bg-dark gap-[1px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full xl:order-1">
						{cells.map((cell, index) => (
							<SpaceSectionCell
								key={index}
								svg={cell.svg}
								title={cell.title}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
