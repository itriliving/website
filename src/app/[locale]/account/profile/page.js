import Link from "next/link";
import ProfileBanner from "@/components/account/profile/profile-banner";
import { Playfair } from "next/font/google";

const playfair = Playfair({ subsets: ['latin'] });

export default function Profile() {
  return (
		<main>
			<div className="pt-[6.5rem] pb-6 lg:pb-12 lg:pl-[320px]">
				<div className="px-6 lg:px-8 max-w-[1120px]">
					<div>
						<div className="mb-8">
							<Link href="/account">
								<span className="text-sm font-medium mb-4 cursor-pointer flex items-center justify gap-1">
									<div>Account</div>
									<svg
										height={16}
										width={16}
										aria-hidden="true"
										focusable="false"
										data-prefix="fat"
										data-icon="chevron-right"
										className="svg-inline--fa fa-chevron-right px-1"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 320 512"
										fontSize="12"
									>
										<path
											fill="currentColor"
											d="M301.7 250.3c3.1 3.1 3.1 8.2 0 11.3l-216 216c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L284.7 256 74.3 45.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l216 216z"
										/>
									</svg>{' '}
									<div>Profile</div>
								</span>
							</Link>
							<h2 className={`text-dark text-3xl lg:text-4xl font-medium ${playfair.className}`}>
								Profile
							</h2>
						</div>
						<div className="lg:flex justify-between gap-12">
							<ProfileBanner />
							<div className="grow">
								<form className="divide-y divide-extra-light space-y-4 relative">
									<div className="first:pt-0 pt-6">
										<div className="flex items-center justify-between gap-6">
											<div>
												<p className="font-medium mb-1">
													Name*
												</p>
												<p className="">
													Humam Kharbouch
												</p>
											</div>
											<div className="font-semibold underline cursor-pointer">
												Edit
											</div>
										</div>
									</div>
									<div className="first:pt-0 pt-6">
										<div className="flex items-center justify-between gap-6">
											<div>
												<p className="font-medium mb-1">
													Email address (View Only)
												</p>
												<p className="">
													hu666mam@gmail.com
												</p>
												<p className="text-sm mt-2">
													This is the email address
													you use to sign in. It’s
													also where we send your
													booking confirmations.
												</p>
											</div>
										</div>
									</div>
									<div className="first:pt-0 pt-6">
										<div className="flex items-center justify-between gap-6">
											<div>
												<p className="font-medium mb-1">
													Country of residence*
												</p>
												<p className="text-extra-light">
													Your Country
												</p>
											</div>
											<div className="font-semibold underline cursor-pointer">
												Add
											</div>
										</div>
									</div>
									<div className="first:pt-0 pt-6">
										<div className="flex items-center justify-between gap-6">
											<div>
												<p className="font-medium mb-1">
													City
												</p>
												<p className="">
													Tiflet
												</p>
											</div>
											<div className="font-semibold underline cursor-pointer">
												Edit
											</div>
										</div>
									</div>
									<div className="first:pt-0 pt-6">
										<div className="flex items-center justify-between gap-6">
											<div>
												<p className="font-medium mb-1">
													Birthday*
												</p>
												<p className="text-extra-light">
													Your birthday
												</p>
											</div>
											<div className="font-semibold underline cursor-pointer">
												Add
											</div>
										</div>
									</div>
									<div className="first:pt-0 pt-6">
										<div className="flex items-center justify-between gap-6">
											<div>
												<p className="font-medium mb-1">
													Phone number*
												</p>
												<p className="text-extra-light">
													Your phone number
												</p>
												<p className="text-sm mt-2">
													Outsite will use this number
													if we need to contact you.
												</p>
											</div>
											<div className="font-semibold underline cursor-pointer">
												Add
											</div>
										</div>
									</div>
									<div className="first:pt-0 pt-6">
										<div className="flex items-center justify-between gap-6">
											<div>
												<p className="font-medium mb-1">
													LinkedIn profile
												</p>
												<p className="text-extra-light">
													Your LinkedIn profile
												</p>
											</div>
											<div className="font-semibold underline cursor-pointer">
												Add
											</div>
										</div>
									</div>
									<div className="first:pt-0 pt-6">
										<div className="flex items-center justify-between gap-6">
											<div>
												<p className="font-medium mb-1">
													Occupation
												</p>
												<p className="text-extra-light">
													Your occupation
												</p>
											</div>
											<div className="font-semibold underline cursor-pointer">
												Add
											</div>
										</div>
									</div>
									<div className="first:pt-0 pt-6">
										<div className="flex items-center justify-between gap-6">
											<div>
												<p className="font-medium mb-1">
													Tell us a little about
													yourself
												</p>
												<p className="text-extra-light">
													How do you think you can add
													to the Outsite community?
												</p>
											</div>
											<div className="font-semibold underline cursor-pointer">
												Add
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
  );
}
