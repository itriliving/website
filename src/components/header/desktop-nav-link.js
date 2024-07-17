import Link from 'next/link';

export default function DesktopNavLink({ title, path }) {
	return (
		<li className="py-3 inline-flex items-center relative group px-0 uppercase font-semibold text-sm text-dark">
			<Link href={`/${path}`}>{title}</Link>
		</li>
	);
}
