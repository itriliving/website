import Image from 'next/image';

export default function BenefitsCard({ image, title }) {
	return (
		<div className="flex flex-col h-full gap-4 group embla-slide mx-6">
			<div className="relative aspect-square w-full overflow-hidden">
				<Image alt="benefit" height={1000} width={1000} src={image} />
			</div>
			<p
				className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] text-base py-3 text-dark border border-dark uppercase"
				href="/locations/lisbon-cais-do-sodre"
			>
				<span>{title}</span>
			</p>
		</div>
	);
}
