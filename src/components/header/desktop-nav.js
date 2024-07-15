import RightNav from "./right-nav";
import LeftNav from "./left-nav";

export default function DesktopNav() {
  return (
		<nav className="flex items-center lg:divide-x lg:divide-dark">
			<LeftNav />
			<RightNav />
		</nav>
  );
}
