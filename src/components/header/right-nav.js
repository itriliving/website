import LangChanger from './lang-changer';
import MenuBtn from './menu-btn';

export default function RightNav() {

	return (
		<ul className="relative flex items-center gap-4 pl-6">
			<li>
				<LangChanger />
			</li>
			<li>
				<MenuBtn />
			</li>
		</ul>
	);
}
