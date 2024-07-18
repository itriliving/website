'use client';
import { useState } from 'react';
import LangIcon from './lang-icon';
import LangChangerDropdown from './lang-changer-dropdown';

export default function LangChanger() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative cursor-pointer">
			<button className='flex items-center justify-center' onClick={() => setIsOpen(!isOpen)}>
				<LangIcon />
			</button>
			{isOpen && <LangChangerDropdown />}
		</div>
	);
}
