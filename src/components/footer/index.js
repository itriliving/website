import Image from 'next/image';
import Link from 'next/link';
import FooterHeading from './footer-heading';

export default function Footer() {
	return (
		<footer className="bg-dark py-12 md:py-16 lg:py-24 lg:px-48">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="divide-y divide-off-white/[.2]">
					<div className="flex flex-col justify-center items-center py-8">
						<Image
							className="mb-4 w-auto h-auto"
							src="/img/itri-living-logo-white.png"
							alt="Logo"
							width={200}
							height={200}
						/>
						<p className="text-off-white/[.75] text-sm  max-w-[19.5rem] text-center">
							{' '}
							Discover dynamic spaces, engaging events, and an
							interactive online Member Hub.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 py-8">
						<div>
							<FooterHeading text="PRODUCT" />
							<div className="text-off-white/[.75] text-sm flex flex-col space-y-2">
								<Link href={'/locations'}>Locations</Link>
								<Link href={'/'}>Spaces</Link>
								<Link href={'/'}>Community</Link>
								<Link href={'/'}>Benefits</Link>
								<Link href={'/'}>Member Deals</Link>
								<Link href={'/'}>Mobile App</Link>
								<Link href={'/'}>Earn 50% per Referral</Link>
							</div>
						</div>
						<div>
							<FooterHeading text="COMPANY" />
							<div className="text-off-white/[.75] text-sm flex flex-col space-y-2">
								<Link href={'/locations'}>About Us</Link>
								<Link href={'/'}>Values</Link>
								<Link href={'/'}>Press</Link>
								<Link href={'/'}>Sustainability</Link>
								<Link href={'/'}>Real Estate Partners</Link>
								<Link href={'/'}>Blog</Link>
								<Link href={'/'}>Code of Conduct</Link>
								<Link href={'/'}>Privacy Policy</Link>
								<Link href={'/'}>Terms & Conditions</Link>
							</div>
						</div>
						<div className="grid grid-rows-2">
							<div>
								<FooterHeading text="SUPPORT" />
								<div className="text-off-white/[.75] text-sm flex flex-col space-y-2 mb-8">
									<Link href={'/'}>Contact Us</Link>
									<Link href={'/'}>ITRI Guides</Link>
									<Link href={'/'}>FAQs</Link>
								</div>
							</div>
						</div>
						<div className="grid grid-rows-2">
							<div>
								<FooterHeading text="SOCIAL" />
								<div className="text-off-white flex flex-wrap gap-4 mb-8">
									<a
										href="https://www.facebook.com/"
										target="_blank"
										rel="noreferrer"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
										</svg>
									</a>
									<a
										href="https://www.x.com/"
										target="_blank"
										rel="noreferrer"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
										</svg>
									</a>
									<a
										href="https://www.instagram.com/"
										target="_blank"
										rel="noreferrer"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
										</svg>
									</a>
									<a
										href="https://www.linkedin.com/"
										target="_blank"
										rel="noreferrer"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
										</svg>
									</a>
									<a
										href="https://www.youtube.com/"
										target="_blank"
										rel="noreferrer"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="grid md:grid-cols-2 md:py-8 divide-y md:divide-y-0 md:divide-x divide-off-white/[.2]">
						<div className="max-w-lg w-full mx-auto py-8 md:py-0 md:px-6 xl:px-14">
							<p className="text-off-white text-lg font-medium text-center mb-4">
								<span className="xl:block">
									Keep up with location openings,
								</span>
								<span className="xl:block">
									community events, and other news.
								</span>
							</p>
							<form>
								<div className="w-full">
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-6 text-dark sr-only"
									>
										Email
									</label>
									<div className="mt-2 flex rounded-full">
										<div className="relative flex flex-grow items-stretch focus-within:z-10">
											<input
												name="email"
												id="email"
												placeholder="example@gmail.com"
												type="email"
												className="block w-full bg-dark rounded-none rounded-l-full border-0 py-1.5 pl-4 text-off-white ring-1 ring-inset ring-off-white placeholder:text-off-white/[.75] focus:ring-2 focus:ring-inset focus:ring-off-white sm:text-sm sm:leading-6"
											/>
										</div>
										<button
											type="submit"
											className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-full px-3 py-2 text-sm font-semibold bg-off-white text-dark ring-1 ring-inset ring-off-white hover:bg-off-white/95"
										>
											<svg
												height={16}
												width={16}
												focusable="false"
												className="text-dark"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M509.7 261.7c3.1-3.1 3.1-8.2 0-11.3l-152-152c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 248 8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l476.7 0L346.3 402.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l152-152z"
												></path>
											</svg>
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className="flex flex-col justify-center items-center py-8 md:py-0 md:px-6 xl:px-14">
							<p className="text-off-white text-lg font-medium mb-2">
								Download the Itri App Now
							</p>
							<div className="grid grid-cols-2 gap-x-4">
								<a href="www.google.com" target="_blank">
									<Image
										className="w-auto h-auto"
										src="/svg/app-store-badge.svg"
										alt="App Store"
										width={150}
										height={50}
									/>
								</a>
								<a href="wwww.google.com" target="_blank">
									<Image
                    className='w-auto h-auto'
										src="/svg/apple-store-badge.svg"
										alt="Apple store"
										width={150}
										height={50}
									/>
								</a>
							</div>
						</div>
					</div>
					<p className="text-center py-8 text-off-white/[.75] text-sm">
						© 2024 ITRI Living. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
