import BlogCard from './blog-card';

export default function Blog() {
	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="flex flex-col gap-10 items-start">
					<div className="max-w-lg lg:max-w-2xl text-left">
						<h2 className="font-heading tracking-tight text-dark text-4xl lg:text-5xl">
							<span>From our blog</span>
						</h2>
					</div>
					<div className="grid grid-cols-1 w-full gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
						<BlogCard
							link={'/'}
							image={'/img/blog-1.jpg'}
							tag={'NEWS'}
							title={
								'Embracing Authenticity with Itri Residences'
							}
							description={
								'Discover the true essence of authenticity at Itri Residences, where every stay feels like a genuine cultural immersion...'
							}
							date={'Feb 28, 2024'}
						/>
						<BlogCard
							link={'/'}
							image={'/img/blog-2.jpg'}
							tag={'LOCATION'}
							title={
								'Your Authentic Travel Guide: Beach & Spa Edition'
							}
							description={
								'Explore our guide to experiencing the best beach and spa retreats with a touch of authenticity at Itri Residences.'
							}
							date={'May 24, 2024'}
						/>
						<BlogCard
							link={'/'}
							image={'/img/blog-3.jpg'}
							tag={'COMMUNITY'}
							title={'Itri’s Eco-Friendly Practices'}
							description={
								'Learn how Itri Residences is committed to sustainable living and authentic, eco-friendly...'
							}
							date={'Aug 21, 2024'}
						/>
						<BlogCard
							link={'/'}
							image={'/img/blog-4.jpg'}
							tag={'NEWS'}
							title={
								'Itri Residences Partners with Local Communities'
							}
							description={
								'Discover our collaboration with local communities to offer authentic cultural experiences to our guests.'
							}
							date={'Sep 27, 2024'}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
