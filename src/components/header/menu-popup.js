import Link from 'next/link';

export default function MenuPopup() {
	return (
		<div
			className="absolute w-56 mt-3 rounded-md drop-shadow-lg bg-off-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40 py-3 right-0 hidden lg:block lg:bottom-[-121px]"
		>
			<div>
				<div className="flex flex-col px-6 xl:pt-0">
					<Link
						className="py-2 no-underline text-dark/80 font-medium hover:text-dark"
						href="/login"
					>
						<span className="relative z-1">Sign In</span>
						<span className="h-1 w-full hidden bg-dark/10 absolute left-1/2 -translate-x-1/2 bottom-2 z-[0] transition-transform duration-300 ease-in-out lg:block scale-x-0 group-hover:scale-x-100"></span>
					</Link>
					<Link
						className="py-2 no-underline text-dark/80 font-medium hover:text-dark"
						href="/signup"
					>
						<span className="relative z-1">Create an Account</span>
						<span className="h-1 w-full hidden bg-dark/10 absolute left-1/2 -translate-x-1/2 bottom-2 z-[0] transition-transform duration-300 ease-in-out lg:block scale-x-0 group-hover:scale-x-100"></span>
					</Link>
				</div>
			</div>
		</div>
	);
}
