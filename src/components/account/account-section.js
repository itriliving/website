'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase.config';
import Loading from '../common/loading';

export default function AccountSection({
	title,
	description,
	linkTitle,
	link,
	svgLink,
}) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (!user) {
				router.push('/login');
			} else {
				setLoading(false);
			}
		});
		return unsubscribe;
	});

	return (
		<>
			<Link
				className="border border-light rounded p-6 cursor-pointer hover:bg-dark/[.03] focus:border-dark active:border-dark"
				href={link}
			>
				<Image
					className="mb-4 text-gray-500"
					height={20}
					width={20}
					src={svgLink}
					alt="Section Image"
				/>
				<p className="font-semibold">{title}</p>
				<p className="mb-2">{description}</p>
				<p className="text-sm underline font-semibold">{linkTitle}</p>
			</Link>
			{loading && <Loading />}
		</>
	);
}
