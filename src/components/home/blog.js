import BlogCard from './blog-card';
import { Playfair } from 'next/font/google';
import initTranslations from '@/utils/i18n';

const playfair = Playfair({ subsets: ['latin'] });

export default async function Blog({ locale, namespaces }) {
	const { t } = await initTranslations(locale, namespaces);

	return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="flex flex-col gap-10 items-start">
					<div className="max-w-lg lg:max-w-2xl text-left">
						<h2 className="font-heading tracking-tight text-dark text-4xl lg:text-5xl">
							<span className={playfair.className}>
								{t('from-our-blog')}
							</span>
						</h2>
					</div>
					<div className="grid grid-cols-1 w-full gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
						<BlogCard
							link={'/'}
							image={'/img/blog-1.jpg'}
							tag={t('blog-tag-1')}
							title={t('blog-title-1')}
							description={t('blog-subtitle-1')}
							date={t('blog-date-1')}
						/>
						<BlogCard
							link={'/'}
							image={'/img/blog-2.jpg'}
							tag={t('blog-tag-2')}
							title={t('blog-title-2')}
							description={t('blog-subtitle-2')}
							date={t('blog-date-2')}
						/>
						<BlogCard
							link={'/'}
							image={'/img/blog-3.jpg'}
							tag={t('blog-tag-3')}
							title={t('blog-title-3')}
							description={t('blog-subtitle-3')}
							date={t('blog-date-3')}
						/>
						<BlogCard
							link={'/'}
							image={'/img/blog-4.jpg'}
							tag={t('blog-tag-4')}
							title={t('blog-title-4')}
							description={t('blog-subtitle-4')}
							date={t('blog-date-4')}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
