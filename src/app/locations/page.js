import HeroSection from "@/components/locations/hero-section";
import EmblaCarousel from "@/components/common/locations-section-temp/carousel";

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

export default function Locations() {
  return (
		<main className="flex min-h-screen flex-col bg-off-white text-dark">
			<HeroSection />
			<EmblaCarousel slides={SLIDES} options={OPTIONS} />
		</main>
  );
}
