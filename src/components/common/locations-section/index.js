import EmblaCarousel from "./carousel";

const OPTIONS = { loop: true };
const SLIDES = [
	{
		index: 1,
		locationCount: 2,
		city: 'Nador',
		secondTitle: 'Marchicha',
		image: '/img/locations/location-img1.jpg',
		state: 'under construction',
	},
	{
		index: 2,
		locationCount: 1,
		city: 'Dakhla',
		secondTitle: 'Cabanows',
		image: '/img/locations/location-img2.jpg',
		state: 'under consideration',
	},
	{
		index: 3,
		locationCount: 1,
		city: 'Merzouga',
		secondTitle: 'Lodges',
		image: '/img/locations/location-img3.jpg',
		state: 'under consideration',
	},
	{
		index: 4,
		locationCount: 1,
		city: 'Sierra leone',
		secondTitle: 'resort',
		image: '/img/locations/location-img4.jpg',
		state: 'under consideration',
	},
	{
		index: 5,
		locationCount: 1,
		city: 'Marrakech',
		secondTitle: 'Takerkoust',
		image: '/img/locations/location-img5.jpg',
		state: 'under consideration',
	},
];

export default function LocationsSection() {
	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div class="w-full max-w-xl mr-auto mb-12">
					<div class="max-w-lg lg:max-w-2xl text-left undefined">
						<h2 class="tracking-[.1em] font-body font-medium uppercase text-light text-sm mb-4">
							LOCATIONS
						</h2>
						<p class="tracking-tight text-dark text-3xl lg:text-4xl font-medium __className_42ebce">
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
