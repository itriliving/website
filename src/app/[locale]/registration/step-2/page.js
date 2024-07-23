import Image from 'next/image';
import LoginHeader from '@/components/common/login-header';
import LoginFooter from '@/components/common/login-footer';
import { Playfair } from 'next/font/google';
import TranslationsProvider from '@/utils/translations-provider';
import initTranslations from '@/utils/i18n';
import FormPage2 from '@/components/registration/form-page-2';

const playfair = Playfair({ subsets: ['latin'] });

const namespaces = ['Registration', 'Common'];

export default async function StepTwo({ params: { locale } }) {
	const { t, resources } = await initTranslations(locale, namespaces);

	return (
		<TranslationsProvider
			locale={locale}
			resources={resources}
			namespaces={namespaces}
		>
			<main className="relative md:flex min-h-[100vh]">
				<div className="hidden md:block w-1/2">
					<div className="sticky top-0 w-[50vw] h-screen">
						<div className="h-full w-full relative top-0 left-0">
							<Image
								className="h-full w-full object-cover absolute p-12 inset-0"
								height={1500}
								width={1500}
								alt="image"
								src={'/img/step-2.jpg'}
							/>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2">
					<div className="max-w-2xl xl:max-w-3xl mx-auto min-h-full">
						<LoginHeader />
						<div className="pr-[6.67vw] pl-6 py-12 sm:pr-[12vw] md:pr-10 md:py-16 lg:pr-12 lg:pl-0 2xl:pr-24">
							<div className="mb-20">
								<h2
									className={
										'text-4xl lg:text-[45px] font-medium ' +
										playfair.className
									}
								>
									<span>Help us get to know you better!</span>
								</h2>
							</div>
							<FormPage2 />
						</div>
					</div>
				</div>
			</main>
			<LoginFooter />
		</TranslationsProvider>
	);
}
