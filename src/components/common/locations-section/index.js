import EmblaCarousel from "./carousel";

const OPTIONS = { loop: true };
const SLIDES = [
	{
		index: 1,
		city: 'Nador',
		secondTitle: 'Marchicha',
		image: '/img/locations/location-img1.jpg',
		state: 'under construction',
    blur: false,
	},
	{
		index: 2,
		city: 'Dakhla',
		secondTitle: 'Cabanows',
		image: '/img/locations/location-img2.jpg',
		state: 'under consideration',
    blur: true,
	},
	{
		index: 3,
		city: 'Merzouga',
		secondTitle: 'Lodges',
		image: '/img/locations/location-img3.jpg',
		state: 'under consideration',
    blur: true,
	},
	{
		index: 4,
		city: 'Sierra leone',
		secondTitle: 'resort',
		image: '/img/locations/location-img4.jpg',
		state: 'under consideration',
    blur: true,
	},
	{
		index: 5,
		city: 'Marrakech',
		secondTitle: 'Takerkoust',
		image: '/img/locations/location-img5.jpg',
		state: 'under consideration',
    blur: true,
	},
];

export default function LocationsSection() {
	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="w-full max-w-xl mr-auto mb-12">
					<div className="max-w-lg lg:max-w-2xl text-left undefined">
						<h2 className="tracking-[.1em] font-body font-medium uppercase text-light text-sm mb-4">
							LOCATIONS
						</h2>
						<p className="tracking-tight text-dark text-3xl lg:text-4xl font-medium __className_42ebce">
							<span>
								Find your home on the coast, in the mountains,
								or in the city.
							</span>
						</p>
					</div>
				</div>
				<EmblaCarousel slides={SLIDES} options={OPTIONS} />
			</div>
		</section>
	);
}
