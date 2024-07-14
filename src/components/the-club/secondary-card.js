import Image from "next/image";

export default function SecondaryCard({image, title}) {
	return (
		<div className="relative flex flex-col gap-2 md:gap-4">
			<div className="relative aspect-video px-10 md:px-0 lg:px-4 xl:px-10">
				<Image
					src={image}
					height={1000}
					width={1000}
					alt="Secondary Card"
				/>
			</div>
			<div className="flex grow flex-col justify-between">
					<h3 className="mt-2 font-medium tracking-normal text-xl lg:text-2xl text-center">
						{title}
					</h3>
			</div>
		</div>
	);
}
