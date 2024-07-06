import Image from 'next/image';
import Link from 'next/link';

export default function LocationsSection() {
	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="w-full max-w-xl mr-auto mb-12">
					<div className="max-w-lg lg:max-w-2xl text-left">
						<h2 className="tracking-[.1em] font-body font-medium uppercase text-light text-sm mb-4">
							LOCATIONS
						</h2>
						<p className="font-heading tracking-tight text-dark text-3xl lg:text-4xl">
							<span>
								Make Itri Residences Beach & Spa your home away
								from home
							</span>
						</p>
					</div>
				</div>
				<div>{/**Cards */}</div>
			</div>
		</section>
	);
}
