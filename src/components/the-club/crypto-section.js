import Image from 'next/image';
import { Playfair } from 'next/font/google';

const playfair = Playfair({ subsets: ['latin'] });

export default function CryptoSection() {
	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="flex items-center justify-center mb-8 md:bg-10 lg:mb-14 xl:mb-16 2xl:mb-20">
					<h2
						className={
							'tracking-tight text-4xl lg:text-5xl xl:text-6xl ' +
							playfair.className
						}
					>
						Tokenised Assets
					</h2>
				</div>
				<div className="lg:grid lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24">
					<div className="flex flex-col items-center px-20 lg:px-0 xl:px-10">
						<div className="w-full relative overflow-hidden aspect-[4/3]">
							<Image
								src="/img/the-club-e1.jpg"
								layout="fill"
								objectFit="cover"
								alt="Crypto"
							/>
						</div>
						<div className="w-full pt-8 pb-12 md:py-12 lg:py-16 xl:pt-10 xl:px-0">
							<div className="flex flex-col gap-2 text-base md:text-lg xl:text-xl">
								<span>
									Upon agreeing to the Club by-laws, and
									paying the fees, Members of the Club receive
									the following assets :
								</span>
								<li className="list-inside indent-2">
									Club Membership
								</li>
								<li className="list-inside indent-2">
									Accommodation rights
								</li>{' '}
								<span>
									These Assets will be tokenised and
									Airdropped directly to their (metamask)
									wallet as NFT tokens If you prefer, our
									Members-Relations service can manage your
									wallet/ tokens for you, at no extra cost.
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-center px-20 lg:px-0 xl:px-10">
						<div className="w-full relative overflow-hidden aspect-[4/3]">
							<Image
								src="/img/the-club-e2.jpg"
								layout="fill"
								objectFit="cover"
								alt="Crypto"
							/>
						</div>
						<div className="w-full pt-8 pb-12 md:py-12 lg:py-16 xl:pt-10 xl:px-0">
							<p className="text-base md:text-lg xl:text-xl">
								Nite, our dedicated marketplace platform, allows
								Members to sell their tokenised assets
								(membership or accommodation rights) if they
								wish to move on... or extend their stay
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center mb-8 md:bg-10 lg:mb-14 xl:mb-16 2xl:mb-20">
					<h2
						className={
							'tracking-tight text-4xl lg:text-5xl xl:text-6xl ' +
							playfair.className
						}
					>
						Tokenised Accomodation Rights
					</h2>
				</div>
				<div className="lg:grid lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24">
					<div className="flex flex-col items-center px-20 lg:px-0 xl:px-10">
						<div className="w-full relative overflow-hidden aspect-[4/3]">
							<Image
								src="/img/the-club-e3.jpg"
								layout="fill"
								objectFit="cover"
								alt="Crypto"
							/>
						</div>
						<div className="w-full pt-8 pb-12 md:py-12 lg:py-16 xl:pt-10 xl:px-0">
							<div className="flex flex-col gap-2 text-base md:text-lg xl:text-xl">
								<span>
									Accomodation rights are tokenised, &
									exchangeable on the Marketplace :
								</span>
								<span>
									{' '}
									Each month, we airdrop to our Members’
									wallets (up to date with their dues) on a
									pro-rata basis :
								</span>
								<li className="list-inside indent-2">
									High season tokens
								</li>
								<li className="list-inside indent-2">
									Low season tokens
								</li>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center px-20 lg:px-0 xl:px-10">
						<div className="w-full relative overflow-hidden aspect-[4/3]">
							<Image
								src="/img/the-club-e4.jpg"
								layout="fill"
								objectFit="cover"
								alt="Crypto"
							/>
						</div>
						<div className="w-full pt-8 pb-12 md:py-12 lg:py-16 xl:pt-10 xl:px-0">
							<p className="text-base md:text-lg xl:text-xl">
								Access to exclusive services such as SPA, boat
								trips, sailing school, mountain biking circuit,
								and special events.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
