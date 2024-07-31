'use client';
import Link from 'next/link';
import { auth } from '@/firebase/firebase.config';
import { signOut } from 'firebase/auth';

export default function MobileAuth() {
  const user = null;

	async function handleUserSignOut() {
		try {
			await signOut(auth);
			console.log('User signed out');
		} catch (error) {
			console.error('Error signing out:', error);
		}
	}

	return (
		<ul className="flex flex-col font-medium py-4">
			{user ? (
				<>
					<li>
						<Link
							className="py-3 px-6 inline-flex items-center"
							href="/profile"
						>
							<span>Profile</span>
						</Link>
					</li>
					<li>
						<button
							className="py-3 px-6 inline-flex items-center"
							onClick={handleUserSignOut}
						>
							<span>Sign Out</span>
						</button>
					</li>
				</>
			) : (
				<>
					<li>
						<Link
							className="py-3 px-6 inline-flex items-center"
							href="/login"
						>
							<span>Sign In</span>
						</Link>
					</li>
					<li>
						<Link
							className="py-3 px-6 inline-flex items-center"
							href="/signup"
						>
							<span>Create an Account</span>
						</Link>
					</li>
				</>
			)}
		</ul>
	);
}
