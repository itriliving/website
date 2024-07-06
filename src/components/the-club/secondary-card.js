import Image from "next/image";

export default function SecondaryCard({image, title}) {
	return (
		<div className="relative flex flex-col gap-2 md:gap-4">
			<div className="relative aspect-video">
				<Image
					src={image}
					height={1000}
					width={1000}
					alt="Secondary Card"
				/>
			</div>
			<div className="flex grow flex-col justify-between">
					<h3 className="mt-2 font-body tracking-normal text-xl text-center">
						{title}
					</h3>
			</div>
		</div>
	);
}
