import Image from 'next/image';
export default function SpaceSectionCell({ svg, title }) {
	return (
		<div className="px-6 py-10 flex flex-col items-center gap-4 bg-medium">
			<Image
				src={svg}
				height={28}
				width={28}
				alt="Space Section Cell"
			/>
			<h3 className="text-base xl:text-lg font-body font-medium text-center">{title}</h3>
		</div>
	);
}
