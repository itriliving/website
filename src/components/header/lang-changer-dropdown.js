'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../config/i18Config';

export default function LangChangerDropdown() {
	const { i18n } = useTranslation();
	const currentLocale = i18n.language;
	const router = useRouter();
	const currentPathname = usePathname();

	const [selected, setSelected] = useState(i18n.language);

	const handleChange = (newLocale) => {
		const days = 30;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = date.toUTCString();
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/;SameSite=None;Secure`;

		if (
			currentLocale === i18nConfig.defaultLocale &&
			!i18nConfig.prefixDefault
		) {
			router.push('/' + newLocale + currentPathname);
		} else {
			router.push(
				currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
			);
		}

		router.refresh();
	};

	return (
		<div
			className="absolute min-w-[160px] z-50 shadow-xl top-[49px] -right-2 rounded-md bg-off-white flex flex-col items-start overflow-hidden"
			onChange={handleChange}
			value={currentLocale}
		>
			<button
				onClick={() => {
					setSelected('en');
					handleChange('en');
				}}
				className={
					'pr-20 text-left w-full select-none relative px-6 text-base py-3 hover:bg-medium/60 border-l-2' +
					(selected === 'en'
						? ' font-semibold border-dark'
						: ' border-transparent')
				}
			>
				English
			</button>
			<button
				onClick={() => {
					setSelected('fr');
					handleChange('fr');
				}}
				className={
					'pr-20 text-left w-full select-none relative px-6 text-base py-3 hover:bg-medium/60 border-l-2' +
					(selected === 'fr'
						? ' font-semibold border-dark'
						: ' border-transparent')
				}
			>
				French
			</button>
			<button
				onClick={() => {
					setSelected('nl');
					handleChange('nl');
				}}
				className={
					'pr-20 text-left w-full select-none relative px-6 text-base py-3 hover:bg-medium/60 border-l-2' +
					(selected === 'nl'
						? ' font-semibold border-dark'
						: ' border-transparent')
				}
			>
				Dutch
			</button>
		</div>
	);
}
