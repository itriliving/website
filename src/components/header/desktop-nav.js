import RightNav from "./right-nav";
import LeftNav from "./left-nav";

export default function DesktopNav({ locale, namespaces }) {
  return (
		<nav className="flex items-center lg:divide-x lg:divide-dark">
			<LeftNav locale={locale} namespaces={namespaces} />
			<RightNav />
		</nav>
  );
}
