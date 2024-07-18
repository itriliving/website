import PrimaryCard from "./primary-card";
import initTranslations from '@/utils/i18n';

export default async function ExtraSection({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);

  return (
		<section className="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="grid grid-cols-1 w-full gap-x-6 gap-y-10 md:grid-cols-3">
					<PrimaryCard
						title={t('extra-title-1')}
						image={'/img/the-club-b1.jpg'}
						description={t('extra-description-1')}
					/>
					<PrimaryCard
						title={t('extra-title-2')}
						image={'/img/the-club-b2.jpg'}
						pro={true}
						description={t('extra-description-2')}
					/>
					<PrimaryCard
						title={t('extra-title-3')}
						image={'/img/the-club-b3.jpg'}
						pro={true}
						description={t('extra-description-3')}
					/>
				</div>
			</div>
		</section>
  );
}
