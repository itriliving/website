import Image from 'next/image';

export default function PrimaryCard({ title1, title2, description, image }) {
	return (
		<div className="relative flex flex-col gap-4 md:gap-6">
			<div className="relative aspect-square">
				<Image
					src={image}
					height={1000}
					width={1000}
					alt="Primary Card"
				/>
			</div>
			<div className="flex grow flex-col justify-between">
				<div className="space-y-2">
					<span className="tracking-[.1em] font-body font-medium uppercase text-light text-sm">
						{title1}
					</span>
					<h3 className="mt-2 font-body font-semibold uppercase tracking-normal text-xl">
						{title2}
					</h3>
					<div className="content-wrapper">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
