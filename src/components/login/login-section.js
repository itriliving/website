'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from './login-form';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import {
	auth,
	googleProvider,
	facebookProvider,
} from '@/firebase/firebase.config';
import {
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	createUser,
	getUser,
} from '@/utils/database/firestore-helper-functions';

export default function LoginSection() {
	const router = useRouter();
	const { t } = useTranslation();

	const handleGoogleSignIn = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			if (user) {
				const userCreated = await createUserIfNotExists(user.uid, user);
				if (userCreated) {
					getUser(user.uid).then((userData) => {
						// setUserState
						router.push('/registration/step-1');
					});
				} else {
					getUser(user.uid).then((userData) => {
						// setUserState
						if (!userData.hasCompletedFirstForm) {
							router.push('/registration/step-1');
						} else if (
							userData.hasCompletedFirstForm &&
							!userData.isRegistered
						) {
							router.push('/registration/step-2');
						} else if (
							userData.hasCompletedFirstForm &&
							userData.isRegistered
						) {
							router.push('/registration/success');
						} else {
							router.push('/profile');
						}
					});
				}
			} else {
				console.error('User not found');
				router.push('/login');
			}
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;

			// const email = error.customData?.email; // Use optional chaining for email
			// const credential = GoogleAuthProvider.credentialFromError(error);
			console.error(errorCode, errorMessage);
		}
	};

	const handleFacebookSignIn = async () => {
		try {
			const result = await signInWithPopup(auth, facebookProvider);
			const credential =
				FacebookAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			if (user) {
				const userCreated = await createUserIfNotExists(user.uid, user);
				if (userCreated) {
					getUser(user.uid).then((userData) => {
						// setUserState
						router.push('/registration/step-1');
					});
				} else {
					getUser(user.uid).then((userData) => {
						// setUserState
						if (!userData.hasCompletedFirstForm) {
							router.push('/registration/step-1');
						} else if (
							userData.hasCompletedFirstForm &&
							!userData.isRegistered
						) {
							router.push('/registration/step-2');
						} else if (
							userData.hasCompletedFirstForm &&
							userData.isRegistered
						) {
							router.push('/registration/success');
						} else {
							router.push('/profile');
						}
					});
				}
			} else {
				console.error('User not found');
				router.push('/signup');
			}
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(errorCode, errorMessage);
		}
	};

	async function createUserIfNotExists(uid, user) {
		const userExists = await getUser(uid);
		if (userExists === null) {
			await createUser(user.uid, {
				email: user.email,
				name: user.displayName,
				photoURL: user.photoURL,
				phone: null,
				ageRange: null,
				gender: null,
				status: null,
				region: null,
				additionalInfo: null,
				hasCompletedFirstForm: false,
				isRegistered: false,
				hasBookedCall: false,
			});
			return true;
		} else {
			return false;
		}
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user && router.pathname !== '/profile') {
				router.push('/profile');
			}
		});

		return () => unsubscribe();
	}, [router]);

	return (
		<>
			<LoginForm />
			<div className="relative text-center flex items-center gap-3 my-6">
				<span className="block h-[1px] w-full border-t"></span>
				<span className="uppercase shrink-0 grow-0 text-sm">
					{t('or')}
				</span>
				<span className="block h-[1px] w-full border-t"></span>
			</div>

			<div className="flex flex-row flex-wrap xl:flex-nowrap items-center justify-center gap-4 mx-auto">
				<button
					onClick={handleFacebookSignIn}
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
				</button>
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
