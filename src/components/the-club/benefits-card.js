import Image from 'next/image';

export default function BenefitsCard({ image, title }) {
	return (
		<div className="flex flex-col h-full gap-4 group embla-slide mx-6">
			<div className="relative aspect-standard w-full overflow-hidden">
				<Image alt="benefit" height={1000} width={1000} src={image} />
			</div>
			<p
				className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none min-w-[10rem] text-base gap-2 px-6 py-[11px] text-dark border border-dark uppercase"
				target="_self"
				href="/locations/lisbon-cais-do-sodre"
			>
				<span>{title}</span>
			</p>
		</div>
	);
}
