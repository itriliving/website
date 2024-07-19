'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function PrimaryCard({
	title,
	description,
	image,
	pro = false,
}) {
	const { t } = useTranslation();

	return (
		<div className="relative flex flex-col gap-4 md:gap-6">
			<div className="relative aspect-video">
				<Image
					src={image}
					height={1000}
					width={1000}
					alt="Primary Card"
				/>
				{pro && (
					<div className="absolute bottom-0 left-4rem text-white font-semibold uppercase text-xs tracking-widest px-4 py-2">
						{t('not-included')}
					</div>
				)}
			</div>
			<div className="flex grow flex-col justify-between">
				<div className="space-y-2">
					<h3 className="mt-2 font-body font-semibold uppercase tracking-normal text-xl">
						{title}
					</h3>
					<div className="content-wrapper">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
