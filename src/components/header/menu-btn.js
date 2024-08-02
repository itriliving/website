'use client';

import { useState, useEffect } from 'react';
import ProfileIcon from './profile-icon';
import MenuIcon from './menu-icon';
import UserIcon from './user-icon';
import DesktopMenu from './desktop-menu';
import MobileMenu from './mobile-menu';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase.config';
import { getFirstLetters } from '@/utils/get-first-letters';

export default function MenuBtn() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [initialLetters, setInitialLetters] = useState('');

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserLoggedIn(true);
				setInitialLetters(getFirstLetters(user.displayName));
			} else {
				setUserLoggedIn(false);
			}
		});
		return unsubscribe;
	}, []);

	return (
		<>
			<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
				<div className="flex items-center p-[6px] rounded-full gap-2 border border-dark">
					<div className="rounded-full bg-medium">
						{userLoggedIn ? (
							<UserIcon initialLetters={initialLetters} />
						) : (
							<ProfileIcon />
						)}
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
