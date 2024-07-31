'use client';

import ProfileIcon from './profile-icon';
import MenuIcon from './menu-icon';
import { useState } from 'react';
import DesktopMenu from './desktop-menu';
import MobileMenu from './mobile-menu';

export default function MenuBtn() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
				<div className="flex items-center p-[6px] rounded-full gap-2 border border-dark">
					<div className="rounded-full bg-medium">
						<ProfileIcon />
					</div>
					<div className="pr-1">
						<MenuIcon />
					</div>
				</div>
			</button>
			{isMenuOpen && (
				<>
					<DesktopMenu />
					<MobileMenu />
				</>
			)}
		</>
	);
}
