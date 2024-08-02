'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { InlineWidget } from 'react-calendly';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase.config';
import { getUser } from '@/utils/database/firestore-helper-functions';
import Loading from '../common/loading';

export default function CalendlyWidget() {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (!user) {
				router.push('/login');
			} else {
				getUser(user.uid).then((userData) => {
					if (!userData.hasCompletedFirstForm) {
						router.push('/registration/step-1');
					} else if (
						userData.hasCompletedFirstForm &&
						!userData.isRegistered
					) {
						router.push('/registration/step-2');
					} else if (userData.hasBookedCall) {
						router.push('/account');
					} else {
						setLoading(false);
					}
				});
			}
		});

		return () => unsubscribe();
	}, [router]);

	return (
		<>
			{loading && <Loading />}
			<InlineWidget
				styles={{
					height: '1000px',
				}}
				url="https://calendly.com/d/ckjx-6zh-x93"
			/>
		</>
	);
}
