import PrimaryCard from "./primary-card";

export default function ExtraSection() {
  return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="grid grid-cols-1 w-full gap-x-6 gap-y-10 md:grid-cols-3">
					<PrimaryCard
						title={'KASBAH POOL'}
						image={'/img/the-club-b1.jpg'}
						description={
							'Immerse yourself in the authenticity of our Kasbah Pool accommodations, offering private bedrooms, traditional bathrooms, and an exclusive private pool for a serene escape.'
						}
					/>
					<PrimaryCard
						title={'VIP VILLAS'}
						image={'/img/the-club-b2.jpg'}
            pro={true}
						description={
							'Experience genuine comfort in our VIP Villas, featuring en suite bedrooms, well-equipped kitchens, and spacious living areas, all designed with an authentic touch.'
						}
					/>
					<PrimaryCard
						title={'VILLA 3 BEDROOM'}
						image={'/img/the-club-b3.jpg'}
            pro={true}
						description={
							'Perfect for families or groups, our 3-bedroom villas provide private bedrooms, multiple bathrooms, a large kitchen, and ample living space, all reflecting authentic design and comfort.'
						}
					/>
				</div>
			</div>
		</section>
  );
}
