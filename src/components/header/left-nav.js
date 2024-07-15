import Link from "next/link";

export default function LeftNav() {
  return (
		<ul className="gap-8 hidden lg:flex pr-6">
			<li className="py-3 inline-flex items-center relative group px-0 uppercase font-semibold text-sm text-dark">
				<Link href={'/the-club'}>THE CLUB</Link>
			</li>
			<li className="py-3 inline-flex items-center relative group px-0 uppercase font-semibold text-sm text-dark">
				<Link href={'/locations'}>LOCATIONS</Link>
			</li>
			<li className="py-3 inline-flex items-center relative group px-0 uppercase font-semibold text-sm text-dark">
				<Link href={'/become-a-member'}>BECOME A MEMBER</Link>
			</li>
		</ul>
  );
}
