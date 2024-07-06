import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className="max-w-[120rem] mt-12 mx-auto relative w-full grid-cols-[repeat(8,1fr)] grid-rows-[repeat(8,1fr)] md:grid lg:mt-0">
			<div className="relative overflow-hidden col-start-5 col-span-2 row-start-6 row-span-4 lg:col-start-1 lg:col-span-2 lg:row-start-5 lg:row-span-4 z-10">
				<div className="absolute bottom-0 right-0 aspect-square h-full w-auto lg:w-full lg:h-auto 2xl:h-full 2xl:w-auto 2xl:top-0 2xl:bottom-auto">
					<Image
						height={1000}
						width={1000}
						alt="image"
						src={'/img/small-hero.jpg'}
						className="absolute h-full w-full inset-0 object-contain"
					/>
				</div>
			</div>
			<div className="col-start-6 col-span-3 row-start-1 row-span-7 lg:min-h-[40rem] xl:min-h-[calc(100vh-64px)] lg:col-start-6 lg:col-span-3 lg:row-start-1 lg:row-span-8 relative">
				<Image
					height={1000}
					width={1000}
					alt="image"
					src={'/img/big-hero.jpg'}
					className="w-full h-full object-cover absolute bottom-0 left-0"
				/>
			</div>
			<div className="relative flex items-end px-8 pt-12 col-start-1 col-span-4 row-start-1 row-span-3 lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-4 lg:px-12 lg:py-12 lg:items-center">
				<h1 className="text-4xl sm:text-5xl w-full tracking-tighter text-center  md:text-[5vw] lg:text-[6.5vw] xl:text-[5rem] 2xl:text-[6rem]">
					<span className="block leading-tight">
						Travel uniquely.
					</span>
					<span className="block mt-2 md:mt-0 leading-tight lg:ml-[15%] xl:ml-[13%]">
						Live differently.
					</span>
				</h1>
			</div>
			<div className="col-start-1 col-span-4 row-start-4 row-span-5 relative flex justify-center px-8 pb-12 pt-4 md:pt-6 lg:pt-0 lg:px-12 lg:col-start-3 lg:col-span-3 lg:row-start-5 lg:row-span-4">
				<div className="w-full max-w-md 2xl:max-w-lg">
					<div className="text-center text-dark font-medium text-lg lg:text-xl xl:text-2xl">
						<p>Exclusive getaways designed</p>
						<p>for your perfect escape.</p>
					</div>
					<div className="relative flex flex-col gap-4 mt-8 md:mt-10 2xl:flex-row">
						<a
							href="#"
							className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent transition-colors duration-[250ms] min-w-[10rem] text-base gap-2 px-6 py-[11px] text-dark border border-dark hover:bg-dark/5 active:bg-dark/10 focus-visible:ring-dark w-full 2xl:w-[calc(50%-0.5rem)]"
						>
							<span>NTE Book</span>
						</a>
						<a
							href="#"
							className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent transition-colors duration-[250ms] min-w-[10rem] text-base gap-2 px-6 py-3 text-off-white bg-dark hover:opacity-90 active:opacity-90 focus-visible:ring-dark w-full 2xl:w-[calc(50%-0.5rem)]"
						>
							<span>Become a Member</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
