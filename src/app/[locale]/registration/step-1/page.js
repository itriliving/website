import Image from 'next/image';
import LoginHeader from '@/components/common/login-header';
import LoginFooter from '@/components/common/login-footer';
import { Playfair } from 'next/font/google';
import TranslationsProvider from '@/utils/translations-provider';
import initTranslations from '@/utils/i18n';
import FormPage1 from '@/components/registration/form-page-1';
import HeadingPage1 from '@/components/registration/heading-page-1';

const playfair = Playfair({ subsets: ['latin'] });

const namespaces = ['Registration', 'Common'];

export default async function StepOne({ params: { locale } }) {
	const { t, resources } = await initTranslations(locale, namespaces);
	return (
		<TranslationsProvider
			locale={locale}
			resources={resources}
			namespaces={namespaces}
		>
			<main className="relative md:flex min-h-[100vh] bg-off-white text-dark">
				<div className="w-full md:w-1/2">
					<div className="max-w-2xl xl:max-w-3xl mx-auto min-h-full">
						<LoginHeader />
						<div className="pl-[6.67vw] pr-6 py-12 sm:pl-[12vw] md:pl-10 md:py-16 lg:pl-12 lg:pr-0 2xl:pl-24">
							<div className="mb-20">
								<HeadingPage1 />
							</div>
							<FormPage1 />
						</div>
					</div>
				</div>
				<div className="hidden md:block w-1/2">
					<div className="sticky top-0 w-[50vw] h-screen">
						<div className="h-full w-full relative top-0 left-0">
							<Image
								className="h-full w-full object-cover absolute p-12 inset-0"
								height={1500}
								width={1500}
								alt="image"
								src={'/img/step-1.jpg'}
							/>
						</div>
					</div>
				</div>
			</main>
			<LoginFooter />
		</TranslationsProvider>
	);
}
