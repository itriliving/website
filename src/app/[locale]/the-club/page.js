import HeroSection from '@/components/the-club/hero-section';
import ExtraSection from '@/components/the-club/extra-section';
import SpaceSection from '@/components/the-club/space-section';
import KasbahsSection from '@/components/the-club/kasbahs-section';
import EcoSection from '@/components/the-club/eco-section';
import BenefitsSection from '@/components/the-club/benefits-section';
import CryptoSection from '@/components/the-club/crypto-section';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GoToTop from '@/components/common/go-to-top';
import initTranslations from '@/utils/i18n';
import TranslationsProvider from '@/utils/translations-provider';
import Animate from '@/components/common/animate';

const namespaces = ['TheClub', 'Common'];

export default async function TheClub({ params: { locale } }) {
	const { t, resources } = await initTranslations(locale, namespaces);
	const lang = locale;

	return (
		<TranslationsProvider
			locale={locale}
			resources={resources}
			namespaces={namespaces}
		>
			<Header locale={lang} namespaces={namespaces} />
			<main className="flex flex-col justify-between min-h-screen bg-off-white text-dark">
				<HeroSection locale={lang} namespaces={namespaces} />

				<Animate>
					<ExtraSection locale={lang} namespaces={namespaces} />
				</Animate>
				<Animate>
					<SpaceSection locale={lang} namespaces={namespaces} />
				</Animate>

				<Animate>
					<KasbahsSection locale={lang} namespaces={namespaces} />
				</Animate>

				<Animate>
					<EcoSection locale={lang} namespaces={namespaces} />
				</Animate>

				<Animate>
					<BenefitsSection locale={lang} namespaces={namespaces} />
				</Animate>

					<CryptoSection locale={lang} namespaces={namespaces} />

				<GoToTop />
			</main>
			<Footer locale={lang} namespaces={namespaces} />
		</TranslationsProvider>
	);
}
