'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { auth } from '@/firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function DesktopMenu() {
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
		return unsubscribe;
	}, []);

	async function handleUserSignOut() {
		try {
			await signOut(auth);
		} catch (error) {
			console.error('Error signing out:', error);
		}
		router.refresh();
	}

	return (
		<div className="absolute w-56 mt-3 rounded-md drop-shadow-lg bg-off-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40 py-3 right-0 hidden lg:block lg:bottom-[-120px]">
			{user ? (
				<div>
					<div className="flex flex-col px-6 xl:pt-0">
						<Link
							className="py-2 no-underline text-dark/80 font-medium hover:text-dark"
							href="/account"
						>
							<span className="relative z-1">Profile</span>
							<span className="h-1 w-full hidden bg-dark/10 absolute left-1/2 -translate-x-1/2 bottom-2 z-[0] transition-transform duration-300 ease-in-out lg:block scale-x-0 group-hover:scale-x-100"></span>
						</Link>
						<button
							className="py-2 no-underline text-start text-dark/80 font-medium hover:text-dark"
							onClick={handleUserSignOut}
						>
							<span className="relative z-1">Sign Out</span>
							<span className="h-1 w-full hidden bg-dark/10 absolute left-1/2 -translate-x-1/2 bottom-2 z-[0] transition-transform duration-300 ease-in-out lg:block scale-x-0 group-hover:scale-x-100"></span>
						</button>
					</div>
				</div>
			) : (
				<div>
					<div className="flex flex-col px-6 xl:pt-0">
						<Link
							className="py-2 no-underline text-dark/80 font-medium hover:text-dark"
							href="/login"
						>
							<span className="relative z-1">Sign In</span>
							<span className="h-1 w-full hidden bg-dark/10 absolute left-1/2 -translate-x-1/2 bottom-2 z-[0] transition-transform duration-300 ease-in-out lg:block scale-x-0 group-hover:scale-x-100"></span>
						</Link>
						<Link
							className="py-2 no-underline text-dark/80 font-medium hover:text-dark"
							href="/signup"
						>
							<span className="relative z-1">
								Create an Account
							</span>
							<span className="h-1 w-full hidden bg-dark/10 absolute left-1/2 -translate-x-1/2 bottom-2 z-[0] transition-transform duration-300 ease-in-out lg:block scale-x-0 group-hover:scale-x-100"></span>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
