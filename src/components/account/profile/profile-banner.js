'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase.config';
import { getFirstLetters } from '@/utils/get-first-letters';

export default function ProfileBanner() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				console.log(user.email);
			} else {
				console.log('No user is signed in');
			}
		});
		return unsubscribe;
	});

	return (
		<div className="bg-medium/50 p-6 flex flex-col items-center lg:w-80 h-fit shrink-0 mb-8">
			<div className="h-[120px] w-[120px] flex items-center justify-center relative mb-4">
				<div
					title={user?.displayName}
					className="flex items-center justify-center h-full w-full rounded-full bg-medium text-dark font-medium text-sm uppercase border border-dark/5"
				>
					{user ? getFirstLetters(user.displayName) : ''}
				</div>
				<div className="absolute bottom-0 right-0">
					<input accept="image/*" className="hidden" type="file" />
					<button
						className="h-8 w-8 flex items-center justify-center bg-dark rounded-full border-2 border-extra-light"
						type="button"
					>
						<svg
							height={16}
							width={16}
							className="svg-inline--fa fa-camera text-off-white text-sm"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M191.1 32c-20.7 0-39 13.2-45.5 32.8L135.1 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-71.1 0L366.5 64.8C359.9 45.2 341.6 32 320.9 32L191.1 32zM175.9 74.9c2.2-6.5 8.3-10.9 15.2-10.9l129.9 0c6.9 0 13 4.4 15.2 10.9l14 42.1c2.2 6.5 8.3 10.9 15.2 10.9l82.7 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l82.7 0c6.9 0 13-4.4 15.2-10.9l14-42.1zM256 400a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM176 288a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
			<p className="font-semibold text-2xl mb-1">
				{user ? user.displayName : ''}
			</p>
			<p className="">{user ? user.email : ''}</p>
			<div className="mt-6 pt-6 border-t border-light text-center">
				<p className="font-semibold mb-2">Unlock Exclusive Benefits</p>
				<p className="text-sm mb-4">
					Become a Member to enjoy access to Members-only spaces,
					special deals, exclusive events, and the Itri Living Member
					Hub.
				</p>
				<Link
					href="/account/membership"
					className="font-semibold inline-flex items-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent w-full justify-center transition-colors duration-[250ms] text-base gap-2 px-6 py-[11px] text-dark border border-dark hover:bg-dark/5 active:bg-dark/10 focus-visible:ring-black"
				>
					<span className="leading-6">Become a Member</span>
				</Link>
			</div>
		</div>
	);
}
