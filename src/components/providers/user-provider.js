'use client';
import { UserContext } from '@/utils/contexts';
import { useState } from 'react';

import React from 'react';

export default function UserProvider({ children }) {
	const [userState, setUserState] = useState(null);

	return (
		<UserContext.Provider value={{ userState, setUserState }}>
			{children}
		</UserContext.Provider>
	);
}
