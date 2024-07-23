'use client';
import { useContext, useEffect } from 'react';
import { UserContext } from '@/utils/contexts';

export default function Profile() {
	const { userState } = useContext(UserContext);

	useEffect(() => {
		console.log(userState);
	});
	return <div>Profile</div>;
}
