import Image from 'next/image';
import Link from 'next/link';

export default function Testimonials() {
	return (
		<section className="relative border-dark py-0 bg-medium border-dark border-y">
			<div className="grid grid-cols-1 md:grid-cols-2 items-center">
				<div className="w-[86.66vw] mt-12 md:my-14 lg:my-16 xl:my-20 2xl:my-24 sm:w-[76vw] md:w-full mx-auto aspect-square relative order-1  md:max-w-none xl:aspect-standard md:order-2">
					<Image
						width={1000}
						height={1000}
						alt="Image"
						src={'/img/social.jpg'}
					/>
				</div>
				<div className="md:mx-0 order-2 pt-8 pb-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 border-dark self-stretch flex flex-col justify-center border-r md:order-1">
					<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] w-full">
						<div className="max-w-xl mx-auto">
							<div className="flex flex-col gap-8 items-center relative">
								<div className="text-dark w-12 h-12 flex items-center justify-center">
									<svg
										width="42"
										height="30"
										viewBox="0 0 42 30"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 11.2501C0 5.06259 4.96875 9.15527e-05 11.25 9.15527e-05H12C13.5938 9.15527e-05 15 1.40634 15 3.00009C15 4.68759 13.5938 6.00009 12 6.00009H11.25C8.34375 6.00009 6 8.43759 6 11.2501V12.0001H12C15.2812 12.0001 18 14.7188 18 18.0001V24.0001C18 27.3751 15.2812 30.0001 12 30.0001H6C2.625 30.0001 0 27.3751 0 24.0001V21.0001V18.0001V11.2501ZM24 11.2501C24 5.06259 28.9688 9.15527e-05 35.25 9.15527e-05H36C37.5938 9.15527e-05 39 1.40634 39 3.00009C39 4.68759 37.5938 6.00009 36 6.00009H35.25C32.3438 6.00009 30 8.43759 30 11.2501V12.0001H36C39.2812 12.0001 42 14.7188 42 18.0001V24.0001C42 27.3751 39.2812 30.0001 36 30.0001H30C26.625 30.0001 24 27.3751 24 24.0001V21.0001V18.0001V11.2501Z"
											fill="currentColor"
										></path>
									</svg>
								</div>
								{/* SLIDER */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
