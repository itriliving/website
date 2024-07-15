'use client';
import { useState } from 'react';
import LangIcon from './lang-icon';
import CartIcon from './cart-icon';
import ProfileIcon from './profile-icon';
import MenuIcon from './menu-icon';
import MenuPopup from './menu-popup';

export default function RightNav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ul className="relative flex items-center gap-4 pl-6">
			<li>
				<button>
					<LangIcon />
				</button>
			</li>
			<li>
				<button>
					<CartIcon />
				</button>
			</li>
			<li>
				<button onClick={() => setIsOpen(!isOpen)}>
					<div className="flex items-center p-[6px] rounded-full gap-2 border border-dark">
						<div className="rounded-full bg-medium">
							<ProfileIcon />
						</div>
						<div className="pr-1">
							<MenuIcon />
						</div>
					</div>
				</button>
			</li>
			{isOpen && <MenuPopup />}
		</ul>
	);
}
