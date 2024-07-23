'use client';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase.config';
import { Playfair } from 'next/font/google';
import { getUser } from '@/utils/database/firestore-helper-functions';

const playfair = Playfair({ subsets: ['latin'] });

export default function HeadingPage1() {
	const [userName, setUserName] = useState('');

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				getUser(user.uid).then((data) => {
					const fullName = data.name
          const firstName = fullName.split(' ')[0]
          setUserName(firstName);
				});
			}
		});
		return unsubscribe;
	}, []);

	return (
		<h2
			className={
				'flex flex-col gap-[2px] text-4xl lg:text-[45px] font-medium ' +
				playfair.className
			}
		>
			<span>Hello Mr {userName}</span>
			<span>Welcome to itri.living</span>
			<span>Help us get to know you better!</span>
		</h2>
	);
}
