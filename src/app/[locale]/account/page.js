import Header from '@/components/header';
import LoginFooter from '@/components/common/login-footer';
import initTranslations from '@/utils/i18n';
import TranslationsProvider from '@/utils/translations-provider';
import AccountSection from '@/components/account/account-section';
import { Playfair } from 'next/font/google';

const playfair = Playfair({ subsets: ['latin'] });

const namespaces = ['Profile', 'Common'];

export default async function Account({ params: { locale } }) {
	const { t, resources } = await initTranslations(locale, namespaces);
	const lang = locale;

	const accountSection = [
		{
			index: 1,
			title: 'Profile',
			description: 'Keep your personal and contact details up-to-date.',
			linkTitle: 'Manage profile',
			link: '/account/profile',
			svgLink: '/svg/account/profile.svg',
		},
		{
			index: 2,
			title: 'Call Back',
			description: 'Learn more about Itri membership.',
			linkTitle: 'Book a Call Back',
			link: '/callback',
			svgLink: '/svg/account/callback.svg',
		},
		{
			index: 3,
			title: 'Membership',
			description: 'Review and manage your membership details.',
			linkTitle: 'Manage membership',
			link: '/account/membership',
			svgLink: '/svg/account/membership.svg',
		},

		{
			index: 4,
			title: 'Settings',
			description:
				'Manage your account settings, such as your account password and email preferences..',
			linkTitle: 'Manage settings',
			link: '/account/settings',
			svgLink: '/svg/account/settings.svg',
		},
	];

	return (
		<TranslationsProvider
			locale={locale}
			resources={resources}
			namespaces={namespaces}
		>
			<Header locale={lang} namespaces={namespaces} />
			<div className="bg-off-white">
				<main className="px-6 lg:px-0 max-w-[928px] mx-auto min-h-[calc(100vh-8.5rem)]">
					<div className="py-16">
						<h1
							className={
								'text-4xl font-medium mb-8 ' +
								playfair.className
							}
						>
							Account
						</h1>
						<div className="grid lg:grid-cols-2 gap-6">
							{accountSection.map((section) => (
								<AccountSection
									key={section.index}
									title={section.title}
									description={section.description}
									linkTitle={section.linkTitle}
									link={section.link}
									svgLink={section.svgLink}
								/>
							))}
						</div>
					</div>
				</main>
			</div>
			<LoginFooter locale={lang} namespaces={namespaces} />
		</TranslationsProvider>
	);
}
