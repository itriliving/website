import SpaceSectionCell from './space-section-cell';

const cells = [
	{
		svg: '/svg/cells/cell-1.svg',
		title: 'Work Space + Supplies',
	},
	{
		svg: '/svg/cells/cell-2.svg',
		title: 'Cozy Bedrooms',
	},
	{
		svg: '/svg/cells/cell-3.svg',
		title: 'Solid, Reliable Wifi',
	},
	{
		svg: '/svg/cells/cell-4.svg',
		title: 'Fully Furnished',
	},
	{
		svg: '/svg/cells/cell-5.svg',
		title: 'Well-equipped Kitchens',
	},
	{
		svg: '/svg/cells/cell-6.svg',
		title: 'Fresh Towels + Linens',
	},
	{
		svg: '/svg/cells/cell-7.svg',
		title: 'Professionally Cleaned',
	},
	{
		svg: '/svg/cells/cell-8.svg',
		title: 'Safe and Secure',
	},
	{
		svg: '/svg/cells/cell-9.svg',
		title: 'Local Community Manager',
	},
	{
		svg: '/svg/cells/cell-10.svg',
		title: '24/7 Support',
	},
	{
		svg: '/svg/cells/cell-11.svg',
		title: 'Coffee + Tea',
	},
	{
		svg: '/svg/cells/cell-12.svg',
		title: 'Contactless Check-in',
	},
];

export default function SpaceSection() {
	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-medium ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="flex flex-col gap-10 xl:flex-row xl:gap-12 xl:items-center">
					<div className="w-full max-w-lg lg:max-w-xl mx-auto xl:w-[40%] xl:order-2">
						<h2 className="text-center">
							<span className="font-heading text-2xl block mb-4">
								What makes an
							</span>
							<span className="font-heading-secondary tracking-normal text-6xl xl:text-7xl">
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
