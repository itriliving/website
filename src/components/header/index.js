import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
	return (
		<header className="bg-off-white border-b border-dark text-dark">
			<div className="flex justify-between items-center mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
				<Link href={'/'}>
					<Image
						className="my-2"
						src="/img/itri-living-logo.png"
						alt="Itri Living Logo"
						width={160}
						height={100}
					/>
				</Link>
				<nav className="flex items-center lg:divide-x lg:divide-dark">
					<ul className="gap-8 hidden lg:flex pr-6">
						<li className="py-3 inline-flex items-center relative group px-0 uppercase font-semibold text-sm text-dark">
							<Link href={'/the-club'}>THE CLUB</Link>
						</li>
						<li className="py-3 inline-flex items-center relative group px-0 uppercase font-semibold text-sm text-dark">
							<Link href={'/locations'}>LOCATIONS</Link>
						</li>
						<li className="py-3 inline-flex items-center relative group px-0 uppercase font-semibold text-sm text-dark">
							<Link href={'/become-a-member'}>
								BECOME A MEMBER
							</Link>
						</li>
					</ul>
					<ul className="flex items-center gap-4 pl-6">
						<li>
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
								</svg>
							</button>
						</li>
						<li>
							<button>
								<svg
									width="27"
									height="21"
									viewBox="0 0 27 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.23611 0.5C0.83125 0.5 0.5 0.78125 0.5 1.125C0.5 1.46875 0.83125 1.75 1.23611 1.75H2.97977C3.32943 1.75 3.63307 1.95703 3.70208 2.25L6.41189 13.5C6.69253 14.6641 7.89792 15.5 9.29653 15.5H23.3194C23.7243 15.5 24.0556 15.2188 24.0556 14.875C24.0556 14.5312 23.7243 14.25 23.3194 14.25H9.29653C8.59722 14.25 7.99453 13.832 7.85191 13.25L7.49306 11.75H21.9622C23.3148 11.75 24.4926 10.9688 24.8193 9.85547L26.7516 3.30469C26.9816 2.51562 26.2823 1.75 25.3253 1.75H5.05929C4.75564 1.00781 3.92292 0.5 2.97977 0.5H1.23611ZM5.38134 3H25.3207L23.3931 9.55469C23.2274 10.1094 22.6385 10.5 21.9622 10.5H7.18941L5.38134 3ZM8.22917 18.3125C8.22917 18.0639 8.3455 17.8254 8.55257 17.6496C8.75964 17.4738 9.04049 17.375 9.33333 17.375C9.62618 17.375 9.90703 17.4738 10.1141 17.6496C10.3212 17.8254 10.4375 18.0639 10.4375 18.3125C10.4375 18.5611 10.3212 18.7996 10.1141 18.9754C9.90703 19.1512 9.62618 19.25 9.33333 19.25C9.04049 19.25 8.75964 19.1512 8.55257 18.9754C8.3455 18.7996 8.22917 18.5611 8.22917 18.3125ZM11.9097 18.3125C11.9097 18.0252 11.8431 17.7408 11.7136 17.4754C11.5841 17.21 11.3944 16.9688 11.1551 16.7657C10.9159 16.5626 10.6319 16.4014 10.3193 16.2915C10.0067 16.1816 9.67167 16.125 9.33333 16.125C8.995 16.125 8.65997 16.1816 8.34739 16.2915C8.03481 16.4014 7.75079 16.5626 7.51155 16.7657C7.27231 16.9688 7.08254 17.21 6.95306 17.4754C6.82358 17.7408 6.75694 18.0252 6.75694 18.3125C6.75694 18.5998 6.82358 18.8842 6.95306 19.1496C7.08254 19.415 7.27231 19.6562 7.51155 19.8593C7.75079 20.0624 8.03481 20.2236 8.34739 20.3335C8.65997 20.4434 8.995 20.5 9.33333 20.5C9.67167 20.5 10.0067 20.4434 10.3193 20.3335C10.6319 20.2236 10.9159 20.0624 11.1551 19.8593C11.3944 19.6562 11.5841 19.415 11.7136 19.1496C11.8431 18.8842 11.9097 18.5998 11.9097 18.3125ZM21.1111 17.375C21.404 17.375 21.6848 17.4738 21.8919 17.6496C22.0989 17.8254 22.2153 18.0639 22.2153 18.3125C22.2153 18.5611 22.0989 18.7996 21.8919 18.9754C21.6848 19.1512 21.404 19.25 21.1111 19.25C20.8183 19.25 20.5374 19.1512 20.3303 18.9754C20.1233 18.7996 20.0069 18.5611 20.0069 18.3125C20.0069 18.0639 20.1233 17.8254 20.3303 17.6496C20.5374 17.4738 20.8183 17.375 21.1111 17.375ZM21.1111 20.5C21.7944 20.5 22.4497 20.2695 22.9329 19.8593C23.4161 19.4491 23.6875 18.8927 23.6875 18.3125C23.6875 17.7323 23.4161 17.1759 22.9329 16.7657C22.4497 16.3555 21.7944 16.125 21.1111 16.125C20.4278 16.125 19.7725 16.3555 19.2893 16.7657C18.8062 17.1759 18.5347 17.7323 18.5347 18.3125C18.5347 18.8927 18.8062 19.4491 19.2893 19.8593C19.7725 20.2695 20.4278 20.5 21.1111 20.5Z"
										fill="currentColor"
									/>
								</svg>
							</button>
						</li>
						<li>
							<button>
								<div className="flex items-center p-[2px] rounded-full gap-2 border border-dark">
									<div className="rounded-full bg-medium">
										<svg
											className="p-[3px]"
											xmlns="http://www.w3.org/2000/svg"
											width="27"
											height="27"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
										</svg>
									</div>
									<div className="pr-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path
												fillRule="evenodd"
												d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
											/>
										</svg>
									</div>
								</div>
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
