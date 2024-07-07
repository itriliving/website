import SecondaryCard from "./secondary-card";
import { Playfair } from 'next/font/google';

const playfair = Playfair({ subsets: ['latin'] });

const data = [
	{
		title: 'Moroccan corridor',
		image: '/img/the-club-c1.jpg',
	},
	{
		title: 'Elegant living Room',
		image: '/img/the-club-c2.jpg',
	},
	{
		title: 'Authentic pool',
		image: '/img/the-club-c3.jpg',
	},
	{
		title: 'Cozy bedroom',
		image: '/img/the-club-c4.jpg',
	},
	{
		title: 'Warm living room',
		image: '/img/the-club-c5.jpg',
	},
	{
		title: 'Elegant lounge',
		image: '/img/the-club-c6.jpg',
	},
];

export default function KasbahsSection() {
  return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="max-w-lg lg:max-w-2xl text-left">
					<h2 className="font-heading tracking-tight text-dark text-4xl lg:text-5xl">
						<span className={playfair.className}>
							Explore Itri.living Spaces: the Pool-Kasbahs
						</span>
					</h2>
					<div className="text-lg prose-a:text-dark prose-a:font-medium prose-a:underline hover:prose-a:text-light mt-4 lg:text-xl">
						<p>
							A place to call your own. Perfect for couples,
							friends, or solo travellers.
						</p>
					</div>
				</div>
        <div className="grid grid-cols-1 w-full gap-x-16 gap-y-20 md:grid-cols-3 mt-10">
          {data.map((item, index) => (
            <SecondaryCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
			</div>
		</section>
  );
}
