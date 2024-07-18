import Logo from './logo';
import DesktopNav from './desktop-nav';

export default function Header({ locale, namespaces }) {
	return (
		<header className="bg-off-white border-b border-dark text-dark">
			<div className="flex justify-between items-center mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
				<Logo />
				<DesktopNav locale={locale} namespaces={namespaces} />
			</div>
		</header>
	);
}
