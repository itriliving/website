import Link from "next/link";
import DesktopNavLink from "./desktop-nav-link";

const navLinks = [
  { title: 'THE CLUB', path: 'the-club' },
  { title: 'LOCATIONS', path: 'locations' },
  { title: 'BECOME A MEMBER', path: 'become-a-member' },
];

export default function LeftNav() {
  return (
		<ul className="gap-8 hidden lg:flex pr-6">
			{navLinks.map((link, index) => (
        <DesktopNavLink key={index} title={link.title} path={link.path} />
      ))}
		</ul>
  );
}
