import PlusIcon from './plus-icon';
import { Playfair } from 'next/font/google';
import initTranslations from '@/utils/i18n';
import Link from 'next/link';

const playfair = Playfair({ subsets: ['latin'] });

export default async function FAQs({ locale, namespaces }) {
	const { t } = await initTranslations(locale, namespaces);

	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="flex flex-col gap-12 max-w-4xl mx-auto items-center">
					<div>
						<div className="max-w-lg lg:max-w-2xl text-center undefined">
							<h2
								className={
									'tracking-tight text-dark text-4xl lg:text-5xl font-medium ' +
									playfair.className
								}
							>
								<span>{t('faq-title')}</span>
							</h2>
							<div className="text-lg prose-a:text-dark prose-a:font-medium prose-a:underline hover:prose-a:text-light mt-4 lg:text-xl">
								<p>{t('faq-subtitle')}</p>
							</div>
							<div className="inline-block grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-6">
								<Link
									className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent transition-colors duration-[250ms] min-w-[10rem] text-base gap-2 px-6 py-[11px] text-dark border border-dark hover:bg-dark/5 active:bg-dark/10 focus-visible:ring-black md:max-w-sm"
									href="/callback"
								>
									<span>{t('faq-cta')}</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="border-y border-dark divide-y divide-dark w-full">
						<div>
							<button className="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium">
								<span className="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									{t('q-1')}
								</span>
								<PlusIcon />
							</button>
						</div>
						<div>
							<button className="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium">
								<span className="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									{t('q-2')}
								</span>
								<PlusIcon />
							</button>
						</div>
						<div>
							<button className="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium">
								<span className="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									{t('q-3')}
								</span>
								<PlusIcon />
							</button>
						</div>
						<div>
							<button className="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium">
								<span className="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									{t('q-4')}
								</span>
								<PlusIcon />
							</button>
						</div>
						<div>
							<button className="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium">
								<span className="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									{t('q-5')}
								</span>
								<PlusIcon />
							</button>
						</div>
						<div>
							<button className="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium">
								<span className="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									{t('q-6')}
								</span>
								<PlusIcon />
							</button>
						</div>
						<div>
							<button className="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium">
								<span className="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									{t('q-7')}
								</span>
								<PlusIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
