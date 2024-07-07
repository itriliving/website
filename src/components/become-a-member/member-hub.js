import Image from "next/image";
import Link from "next/link";

export default function MemberHub() {
	return (
		<section class="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div class="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div class="flex flex-col md:flex-row">
					<div class="mb-8 md:mb-0 w-full md:w-1/2 relative overflow-hidden md:order-2 aspect-[3/4]">
						<Image
							className="group-hover:scale-[1.05] group-hover:cursor-pointer transition-transform duration-300"
							src="/img/member-hub.png"
							alt="Outsite Member Hub"
							layout="fill"
							objectFit="cover"
							objectPosition="center"
						/>
					</div>
					<div class="w-full md:w-1/2 md:order-1 md:pr-10 xl:pr-12">
						<div class="">
							<h4 className="mt-6 md:text-lg xl:text-xl mb-10 lg:mb-16">
								Access the
							</h4>
							<h2 className="font-heading tracking-tight text-dark text-3xl lg:text-4xl">
								Itri.living Community Hub: Itri.club
							</h2>
							<p className="mt-6 md:text-lg xl:text-xl">
								The Itri Living Community Hub is a place for
								members to connect, share experiences, and
								participate in community events.
							</p>
						</div>
						<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
							<div class="p-6 bg-medium rounded-md flex flex-col items-center align-center text-center">
								<div class="relative w-5 h-5 mr-2 mb-2">
									<Image
										src="/svg/member-hub/member-hub-icon1.svg"
										alt="icon"
										width={30}
										height={30}
									/>
								</div>
								<p class="text-base font-medium mt-4">
									Expand your network
								</p>
							</div>
							<div class="p-6 bg-medium rounded-md flex flex-col items-center align-center text-center">
								<div class="relative w-5 h-5 mr-2 mb-2">
									<Image
										src="/svg/member-hub/member-hub-icon2.svg"
										alt="icon"
										width={30}
										height={30}
									/>
								</div>
								<p class="text-base font-medium mt-4">
									Ask Questions and Share Knowledge
								</p>
							</div>
							<div class="p-6 bg-medium rounded-md flex flex-col items-center align-center text-center">
								<div class="relative w-5 h-5 mr-2 mb-2">
									<Image
										src="/svg/member-hub/member-hub-icon3.svg"
										alt="icon"
										width={30}
										height={30}
									/>
								</div>
								<p class="text-base font-medium mt-4">
									Plan your next stay with Itri Living
								</p>
							</div>
						</div>
						<div class="flex flex-col md:flex-row gap-4"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
