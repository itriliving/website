import Link from 'next/link';
import Image from 'next/image';
import { Playfair } from 'next/font/google';

const playfair = Playfair({ subsets: ['latin'] });

export default function HeroSection() {
	return (
		<section className="relative py-0 bg-medium border-b border-dark">
			<div className="flex flex-col items-center md:flex-row">
				<div className="order-2 self-stretch justify-center py-12 text-center md:text-left md:flex md:flex-col md:border-r md:border-dark md:order-1 md:w-1/2">
					<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] w-full">
						<div className="max-w-lg mx-auto">
							<h1
								className={
									'text-5xl lg:text-6xl xl:text-7xl font-medium ' +
									playfair.className
								}
							>
								Stay With Itri Living
							</h1>
							<div className="mt-6 text-base md:text-lg xl:text-xl">
								<p>
									Joining Itri Living is an amazing
									opportunity available only to our members.
									Secure your place among a privileged and
									limited number of individuals who value
									exceptional moments, a sense of community,
									and a love for our planet.
								</p>
							</div>
							<div className="grid-cols-1 md:grid-cols-1 xl:grid-cols-2 flex justify-center md:justify-start mt-8">
								<Link
									href="/become-a-member"
									className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent transition-colors duration-[250ms] min-w-[10rem] text-base gap-2 px-6 py-3 text-off-white bg-dark hover:bg-dark/90 active:bg-dark/80 focus-visible:ring-black md:max-w-sm"
								>
									Become a Member
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="order-1 w-full mx-auto aspect-standard relative md:order-2 md:w-1/2 md:my-14 lg:my-16 xl:my-20 2xl:my-24">
					<Image
						src="/img/club-hero.jpg"
						alt="The Club"
						height={1000}
						width={1000}
					/>
				</div>
			</div>
		</section>
	);
}
