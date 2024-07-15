import Image from 'next/image';
import Link from 'next/link';
import LoginHeader from '@/components/common/login-header';
import LoginFooter from '@/components/common/login-footer';
import { Playfair } from 'next/font/google';
import LoginForm from '@/components/home/login/login-form';

const playfair = Playfair({ subsets: ['latin'] });

export default function SignUp() {
	return (
		<>
			<main className="relative md:flex min-h-[100vh]">
				<div className="w-full md:w-1/2">
					<div className="max-w-2xl mx-auto min-h-full">
						<LoginHeader />
						<div className="pl-[6.67vw] pr-6 py-12 sm:pl-[12vw] md:pl-10 md:py-16 lg:pl-12 lg:py-20 2xl:py-24">
							<div class="mb-8">
								<h2
									class={
										'text-4xl lg:text-[45px] font-medium ' +
										playfair.className
									}
								>
									Login to your Itri.living account
								</h2>
							</div>
							<LoginForm />
							
							<div class="relative text-center flex items-center gap-3 my-6">
								<span class="block h-[1px] w-full border-t"></span>
								<span class="shrink-0 grow-0 text-sm">OR</span>
								<span class="block h-[1px] w-full border-t"></span>
							</div>

							<div className="flex flex-row flex-wrap xl:flex-nowrap items-center justify-center gap-4 mx-auto">
								<a
									href="#facebook"
									class="h-10 pr-6 flex grow-0 items-center justify-first gap-2 rounded-sm shadow-sm font-body font-bold xl:w-1/2 bg-[#1877F2] active:bg-[#1052A9] hover:ring hover:ring-[#4285F44D]"
								>
									<Image
										className="pl-2"
										width={40}
										height={40}
										src={'/img/facebook-logo.webp'}
										alt="Facebook logo"
									/>
									<p class="text-off-white px-2 text-sm text-left">
										Continue with Facebook
									</p>
								</a>
								<a
									href="#google"
									class="h-10 pr-6 flex grow-0 items-center justify-first gap-2 rounded-sm shadow-sm font-body font-bold xl:w-1/2 bg-[#4285F4] active:bg-[#3367D6] hover:ring hover:ring-[#4285F44D]"
								>
									<div>
										<Image
											className="pl-2"
											width={40}
											height={40}
											src={'/img/google-logo.png'}
											alt="Google logo"
										/>
									</div>
									<p class="text-off-white px-2 text-sm text-left">
										Continue with Google
									</p>
								</a>
							</div>
							<p className="text-center mt-6">
								Don&apos;t have an account?{}{' '}
								<Link
									class="ml-1 font-medium underline text-dark hover:text-dark/70 active:text-extra-light"
									href="/login"
								>
									Sign Up
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
