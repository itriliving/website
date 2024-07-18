import HeroSection from '@/components/become-a-member/hero-section';
import Benefits from '@/components/become-a-member/benefits';
import MemberHub from '@/components/become-a-member/member-hub';
import Pricing from '@/components/become-a-member/pricing';
import FAQs from '@/components/become-a-member/faqs';
import LocationsSection from '@/components/common/locations-section';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GoToTop from '@/components/common/go-to-top';
import initTranslations from '@/utils/i18n';
import TranslationsProvider from '@/utils/translations-provider';

const namespaces = ['HomePage', 'Common'];

export default async function BecomeAMember({ params: { locale } }) {
	const { t, resources } = await initTranslations(locale, namespaces);
	const lang = locale;

	return (
		<TranslationsProvider
			locale={locale}
			resources={resources}
			namespaces={namespaces}
		>
			<Header locale={lang} namespaces={namespaces} />
			<main className="flex min-h-screen flex-col bg-off-white text-dark">
				<HeroSection />
				<Benefits />
				<LocationsSection locale={lang} namespaces={namespaces} />
				<MemberHub />
				<Pricing />
				<FAQs />
				<GoToTop />
			</main>
			<Footer locale={lang} namespaces={namespaces} />
		</TranslationsProvider>
	);
}
