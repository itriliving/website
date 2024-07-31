import Link from 'next/link';
import MobileAuth from './mobile-auth';

export default function MobileMenu() {
	return (
		<nav className="lg:hidden fixed w-[280px] top-[75px] shadow-2xl right-0 h-screen bg-off-white z-50">
			<ul className="flex flex-col font-medium border-b border-dark/20 py-4">
				<li>
					<Link
						className="py-3 px-6 inline-flex items-center"
						href="/the-club"
					>
						<span className="">The Club</span>
					</Link>
				</li>
				<li>
					<Link
						className="py-3 px-6 inline-flex items-center"
						href="/locations"
					>
						<span className="">Locations</span>
					</Link>
				</li>
				<li>
					<Link
						className="py-3 px-6 inline-flex items-center"
						href="/become-a-member"
					>
						<span className="">Become a member</span>
					</Link>
				</li>
			</ul>
			<MobileAuth />
		</nav>
	);
}
