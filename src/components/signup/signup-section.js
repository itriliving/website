'use client';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { auth, provider } from '@/firebase/firebase.config';
import {
	signInWithPopup,
	GoogleAuthProvider,
	getAdditionalUserInfo,
	onAuthStateChanged,
} from 'firebase/auth';
import SignupForm from './signup-form';

export default function SignupSection() {
	const { t } = useTranslation();

	const router = useRouter();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user && router.pathname !== '/profile') {
				router.push('/profile');
			}
		});

		return () => unsubscribe();
	}, [router]);

	const handleGoogleSignIn = async () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;

				const user = result.user;
				const idpData = getAdditionalUserInfo(result);

				console.log(idpData);
				console.log(user);
				if (user) {
					router.push('/profile');
				} else {
					console.error('User not found');
					router.push('/login');
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential =
					GoogleAuthProvider.credentialFromError(error);
				console.error(errorCode, errorMessage);
			});
	};
	return (
		<>
			<SignupForm />
			<div className="relative text-center flex items-center gap-3 my-6">
				<span className="block h-[1px] w-full border-t"></span>
				<span className="uppercase shrink-0 grow-0 text-sm">{t('or')}</span>
				<span className="block h-[1px] w-full border-t"></span>
			</div>

			<div className="flex flex-row flex-wrap xl:flex-nowrap items-center justify-center gap-4 mx-auto">
				<a
					href="#facebook"
					className="h-10 pr-6 flex grow-0 items-center justify-first gap-2 rounded-sm shadow-sm font-body font-bold xl:w-1/2 bg-[#1877F2] active:bg-[#1052A9] hover:ring hover:ring-[#4285F44D]"
				>
					<Image
						className="pl-2"
						width={40}
						height={40}
						src={'/img/facebook-logo.webp'}
						alt="Facebook logo"
					/>
					<p className="text-off-white px-2 text-sm text-left">
						{t('continue-facebook')}
					</p>
				</a>
				<button
					onClick={handleGoogleSignIn}
					className="h-10 pr-6 flex grow-0 items-center justify-first gap-2 rounded-sm shadow-sm font-body font-bold xl:w-1/2 bg-[#4285F4] active:bg-[#3367D6] hover:ring hover:ring-[#4285F44D]"
				>
					<div>
						<Image
							className="pl-2"
							width={40}
							height={40}
							src={'/img/google-logo.png'}
							alt="Google logo"
						/>
					</div>
					<p className="text-off-white px-2 text-sm text-left">
						{t('continue-google')}
					</p>
				</button>
			</div>
		</>
	);
}
