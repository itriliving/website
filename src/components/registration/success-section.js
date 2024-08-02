'use client';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import { getUser } from '@/utils/database/firestore-helper-functions';
import { auth } from '@/firebase/firebase.config';
import Loading from '../common/loading';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export default function SuccessSection() {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (!user) {
				router.push('/login');
			} else {
				getUser(user.uid).then((userData) => {
					if (!userData.hasCompletedFirstForm) {
						router.push('/registration/step-1');
					} else if (
						userData.hasCompletedFirstForm &&
						!userData.isRegistered
					) {
						router.push('/registration/step-2');
					} else if (
						userData.hasCompletedFirstForm &&
						userData.isRegistered
					) {
						setLoading(false);
					} else {
						router.push('/account');
					}
				});
			}
		});

		return () => unsubscribe();
	}, [router]);

	return (
		<section className="relative grow border-dark py-0 bg-medium border-bottom">
			{loading && <Loading />}
			<div className="grow h-full grid grid-cols-1 md:grid-cols-2 items-center">
				<div className="w-[86.66vw] mt-12 md:my-14 lg:my-16 xl:my-20 2xl:my-24 sm:w-[76vw] md:w-full mx-auto aspect-square relative order-1  md:max-w-none xl:aspect-video">
					<Image
						className="absolute w-full h-full object-cover"
						src="/img/cta-section-2.jpg"
						height={1000}
						width={1000}
						alt="Cta Image"
					/>
				</div>
				<div className="md:mx-0 order-2 pt-8 pb-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 border-dark self-stretch flex flex-col justify-center border-l">
					<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] w-full">
						<div className="max-w-xl mx-auto">
							<div className="block mb-20">
								<Image
									className=""
									src="/img/itri-logo-big.png"
									height={1000}
									width={1000}
									alt="Cta Image"
								/>
							</div>
							<h2 className="text-center">
								<span className="font-heading text-2xl block mb-4">
									The world feels free with ITRI
								</span>
								<span
									className={
										'font-heading-secondary tracking-normal text-5xl lg:text-6xl xl:text-7xl ' +
										bebasNeue.className
									}
								>
									Welcome and thank you for joining us!
								</span>
							</h2>
							<div className="text-center mt-6 content-wrapper">
								<p>
									Congratulations! Your registration to
									itri.living website has been successfully
									completed.
								</p>
							</div>
							<div className="mt-8 flex justify-center">
								<Link
									href={'/callback'}
									className="max-w-72 font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent w-full transition-colors duration-[250ms] min-w-[10rem] text-base gap-2 px-6 py-3 text-off-white bg-dark hover:bg-dark/90 active:bg-dark/80 focus-visible:ring-dark "
								>
									<span>BOOK A CALL BACK</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
