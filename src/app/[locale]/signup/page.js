import Image from 'next/image';
import Link from 'next/link';
import LoginHeader from '@/components/common/login-header';
import LoginFooter from '@/components/common/login-footer';
import { Playfair } from 'next/font/google';
import SignupSection from '@/components/signup/signup-section';

const playfair = Playfair({ subsets: ['latin'] });

export default function SignUp() {
	return (
		<>
			<main className="relative md:flex min-h-[100vh]">
				<div className="w-full md:w-1/2">
					<div className="max-w-2xl mx-auto min-h-full">
						<LoginHeader />
						<div className="pl-[6.67vw] pr-6 py-12 sm:pl-[12vw] md:pl-10 md:py-16 lg:pl-12 lg:py-20 2xl:py-24">
							<div className="mb-8">
								<h2
									className={
										'text-4xl lg:text-[45px] font-medium ' +
										playfair.className
									}
								>
									Create your Itri.living account
								</h2>
								<p>Join us and explore the benefits!</p>
							</div>
							<SignupSection />

							<p className="text-center mt-6">
								Already have an account?{}{' '}
								<Link
									className="ml-1 font-medium underline text-dark hover:text-dark/70 active:text-extra-light"
									href="/login"
								>
									Sign In
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="hidden md:block w-1/2">
					<div className="sticky top-0 w-[50vw] h-screen">
						<div className="h-full w-full relative top-0 left-0">
							<Image
								className="h-full w-full object-cover absolute inset-0"
								height={1500}
								width={1500}
								alt="image"
								src={'/img/sign-up-hero-img.jpg'}
							/>
						</div>
					</div>
				</div>
			</main>
			<LoginFooter />
		</>
	);
}